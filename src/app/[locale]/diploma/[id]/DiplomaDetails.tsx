"use client";

import OtpVerification from "@/components/OtpVerification";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Check, SaudiRiyal } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MainContent from "./MainContent";
import { DiplomaDetailsData } from "@/components/types/diplomasApiTypes";

type CourseType = {
  diploma?: string;
  semesters: Array<{ id: number; name: string; price: number }>;
};

function hasDiplomaField(
  course: CourseType
): course is CourseType & { diploma: string } {
  return course && typeof course.diploma === "string";
}

export default function DiplomaDetails({ DetailsData: initialData }: { DetailsData: DiplomaDetailsData }) {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("diplomas");
  const tEnroll = useTranslations("enroll");

  const diploma = {
    title: initialData.data.title,
    titleAr: initialData.data.titleAr,
    diploma: initialData.data.category,
    image: initialData.data.image,
    brief: initialData.data.brief,
    briefAr: initialData.data.briefAr,
    description: initialData.data.description,
    descriptionAr: initialData.data.descriptionAr,
    startDate: new Date(
      initialData.data.semesters[0].configuration.duration.startDate
    ).toLocaleDateString("en-GB"),
    endDate: new Date(
      initialData.data.semesters[
        initialData.data.semesters.length - 1
      ].configuration.duration.endDate
    ).toLocaleDateString("en-GB"),
    semester: initialData.data.semesterCost?.toString(),
    available: initialData.data.isActive,
    semesters:
      initialData.data.semesters?.map((s, idx) => ({
        id: idx + 1,
        name: (locale === "ar" ? s.titleAr : s.title) || `Semester ${idx + 1}`,
        price: s.credits || 0,
        modules:
          s.courseIds?.map((c) => ({
            name: (locale === "ar" ? c.titleAr : c.title),
            startDate: c.date,
          })) || [],
      })) || [],
    semestersAr:
      initialData.data.semesters?.map((s, idx) => ({
        id: idx + 1,
        name: s.titleAr || `الفصل الدراسي ${idx + 1}`,
        modules:
          s.courseIds?.map((c) => ({
            name: c.titleAr,
            startDate: c.date,
          })) || [],
      })) || [],
  };
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);
  const [selectedDiploma] = useState<string>("");
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [enrollmentStep, setEnrollmentStep] = useState(1);
  const [enrollmentData, setEnrollmentData] = useState({
    firstName: "",
    middleName: "",
    nationalId: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [highSchoolDiplomaFile, setHighSchoolDiplomaFile] =
    useState<File | null>(null);
  const [idPhotoFile, setIdPhotoFile] = useState<File | null>(null);
  const [studentImageFile, setStudentImageFile] = useState<File | null>(null);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [enrollmentErrors, setEnrollmentErrors] = useState<
    Record<string, string>
  >({});
  const [isEnrollmentLoading, setIsEnrollmentLoading] = useState(false);
  const [step2Answers, setStep2Answers] = useState({
    hasDisability: undefined as boolean | undefined,
    applyScholarship: undefined as boolean | undefined,
    disabilityProofFile: null as File | null,
  });
  const [step2Errors, setStep2Errors] = useState({
    hasDisability: "",
    disabilityProofFile: "",
    applyScholarship: "",
  });

  const toggleSemesterOpen = (semesterId: number) => {
    setOpenSemesters((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  const handleStep1Next = () => {
    const errors: Record<string, string> = {};

    if (!enrollmentData.firstName.trim())
      errors.firstName = tEnroll("Full name is required");
    if (!enrollmentData.nationalId.trim())
      errors.nationalId = tEnroll("National ID is required");
    if (!enrollmentData.phoneNumber.trim())
      errors.phoneNumber = tEnroll("Phone number is required");
    if (!enrollmentData.email.trim())
      errors.email = tEnroll("Email is required");
    if (!enrollmentData.password.trim())
      errors.password = tEnroll("Password is required");
    if (!highSchoolDiplomaFile)
      errors.highSchoolDiplomaFile = tEnroll("High school diploma is required");
    if (!idPhotoFile) errors.idPhotoFile = tEnroll("ID photo is required");
    if (!studentImageFile)
      errors.studentImageFile = tEnroll("Student image is required");

    setEnrollmentErrors(errors);

    if (Object.keys(errors).length === 0) {
      setEnrollmentStep(2);
    }
  };

  // Step 2 handler
  const handleStep2Next = () => {
    const errors = {
      hasDisability: "",
      disabilityProofFile: "",
      applyScholarship: "",
    };
    if (step2Answers.hasDisability === undefined)
      errors.hasDisability = "This field is required.";
    if (step2Answers.hasDisability && !step2Answers.disabilityProofFile)
      errors.disabilityProofFile = "Proof of disability is required.";
    if (step2Answers.applyScholarship === undefined)
      errors.applyScholarship = "This field is required.";
    setStep2Errors(errors);
    if (
      !errors.hasDisability &&
      !errors.disabilityProofFile &&
      !errors.applyScholarship
    ) {
      setEnrollmentStep(3);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const nextInput = document.querySelector(
          `input[type="text"]:nth-of-type(${index + 2})`
        ) as HTMLInputElement;
        nextInput?.focus();
      }
    }
  };

  const handleOtpVerification = () => {
    const otpValue = otp.join("");
    if (otpValue === "1234") {
      setIsEnrollmentLoading(true);
      setTimeout(() => {
        setIsEnrollmentLoading(false);
        setShowEnrollmentModal(false);
        router.push(`/${locale}/enrollment-status?diploma=${selectedDiploma}`);
      }, 2000);
    } else {
      alert("Invalid OTP. Please use 1234 for demo.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-10 gap-8 pt-24">
          {/* Main Content - 70% */}
          <MainContent
            t={t}
            locale={locale}
            course={diploma}
            openSemesters={openSemesters}
            toggleSemesterOpen={toggleSemesterOpen}
          />

          {/* Sidebar - 30% */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-8"
            >
              <Card className="shadow-sm rounded-md">
                <CardContent className="flex flex-col gap-6 p-5">
                  <h3 className="text-lg font-bold text-main-primary">
                    {t("Diploma Details")}
                  </h3>

                  {/* Single Diploma Display */}
                  <div className="p-4 rounded-lg border-2 border-main-primary bg-[#001C71]/5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-main-primary">
                        {hasDiplomaField(diploma) &&
                        diploma.diploma === "Associate"
                          ? t("Associate Diploma")
                          : hasDiplomaField(diploma) &&
                            diploma.diploma === "Intermediate"
                          ? t("Intermediate Diploma")
                          : t("Diploma")}
                      </h4>
                      <Check className="w-5 h-5 text-main-primary" />
                    </div>
                    <p className="text-sm text-black-tint-80 mb-2">
                      {/* Optionally add a description here if needed */}
                    </p>
                    {/* List semesters with price */}
                    <div className="space-y-2 mb-2">
                      {initialData.data.semesters.map((semester) => (
                        <div
                          key={semester._id}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-black-tint-80">
                            {locale === "ar" ? semester.titleAr : semester.title}
                          </span>
                          <span className="font-bold flex items-center gap-1 text-main-primary">
                            {initialData.data.semesterCost} <SaudiRiyal className="w-4 h-4" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Official enrollment fee */}
                  <Card className="text-xs font-semibold p-4 text-center rounded-md border-main-primary bg-[#001C71]/5 capitalize flex justify-center items-center gap-1">
                    {t("The official enrollment fee for the platform is")} 100{" "}
                    <SaudiRiyal className="w-4 h-4" />
                  </Card>

                  {/* Total price */}
                  <div className="flex justify-between items-center font-bold text-main-primary text-base border-t pt-4 mt-2">
                    <span>{t("Total Price")}</span>
                    <span className="flex items-center gap-2">
                      {initialData.data.semesterCost * initialData.data.semesters.length + 100} <SaudiRiyal className="w-4 h-4" />
                    </span>
                  </div>

                  <Button
                    onClick={() => setShowEnrollmentModal(true)}
                    className="w-full bg-main-primary hover:bg-p-shades-shade-80"
                  >
                    {t("Submit An Order")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <Dialog open={showEnrollmentModal} onOpenChange={setShowEnrollmentModal}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden">
          <div className="max-h-[80vh] overflow-y-auto p-2 flex flex-col gap-6 hide-scrollbar">
            <DialogHeader className="flex flex-col gap-4">
              <DialogTitle className="text-xl font-bold text-main-primary text-right rtl:text-right ltr:text-left capitalize">
                {t("Submit An Order")}
              </DialogTitle>
              <div className="flex justify-center sm:justify-between">
                {[1, 2, 3].map((step) => {
                  const isCompleted = step < enrollmentStep;
                  const isCurrent = step === enrollmentStep;
                  return (
                    <div key={step} className="flex items-center">
                      {/* Circle representing the step */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-colors duration-300 ease-in-out border-2 border-[#001C71] 
                          ${
                            isCurrent
                              ? "bg-[#001C71] text-white"
                              : "bg-white text-[#001C71]"
                          }
                        `}
                      >
                        {isCompleted ? (
                          <Check className="w-6 h-6 text-[#001C71]" />
                        ) : (
                          step
                        )}
                      </div>
                      {/* Line connecting steps */}
                      {step < 3 && (
                        <div
                          className={`w-[85px] sm:w-[242px] h-0.5 transition-colors duration-300 ease-in-out ${
                            isCompleted ? "bg-[#001C71]" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </DialogHeader>
            {/* Step 1: Personal Information */}
            {enrollmentStep === 1 && (
              <PersonalInfoForm
                enrollmentData={enrollmentData}
                setEnrollmentData={setEnrollmentData}
                enrollmentErrors={enrollmentErrors}
                highSchoolDiplomaFile={highSchoolDiplomaFile}
                setHighSchoolDiplomaFile={setHighSchoolDiplomaFile}
                idPhotoFile={idPhotoFile}
                setIdPhotoFile={setIdPhotoFile}
                studentImageFile={studentImageFile}
                setStudentImageFile={setStudentImageFile}
                handleStep1Next={handleStep1Next}
              />
            )}
            {/* Step 2: Checkbox Questions */}
            {enrollmentStep === 2 && (
              <div className="flex flex-col gap-6">
                <div>
                  <label className="font-bold mb-2 block text-main-primary text-lg">
                    {tEnroll("Disability Information and Scholarship")}
                  </label>
                </div>
                <div>
                  <label className="font-semibold mb-2 block">
                    {tEnroll("Are you a person with a disability?")}
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="hasDisability"
                        checked={step2Answers.hasDisability === true}
                        onChange={() =>
                          setStep2Answers((prev) => ({
                            ...prev,
                            hasDisability: true,
                          }))
                        }
                      />
                      {tEnroll("Yes")}
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="hasDisability"
                        checked={step2Answers.hasDisability === false}
                        onChange={() =>
                          setStep2Answers((prev) => ({
                            ...prev,
                            hasDisability: false,
                            disabilityProofFile: null,
                          }))
                        }
                      />
                      {tEnroll("No")}
                    </label>
                  </div>
                  {step2Errors.hasDisability && (
                    <div className="text-xs text-red-500 mt-1">
                      {step2Errors.hasDisability}
                    </div>
                  )}
                </div>
                {step2Answers.hasDisability && (
                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="disabilityProofFile"
                      className="font-semibold mb-2 block"
                    >
                      {tEnroll("Please attach proof of your disability")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <input
                        id="disabilityProofFile"
                        type="file"
                        accept="application/pdf,image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          setStep2Answers((prev) => ({
                            ...prev,
                            disabilityProofFile: file,
                          }));
                        }}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          document
                            .getElementById("disabilityProofFile")
                            ?.click()
                        }
                      >
                        {tEnroll("Choose File")}
                      </Button>
                      {step2Answers.disabilityProofFile && (
                        <div className="mt-2 text-sm text-black-tint-80">
                          {step2Answers.disabilityProofFile.name}
                        </div>
                      )}
                      {step2Errors.disabilityProofFile && (
                        <p className="text-sm text-red-500">
                          {tEnroll("Proof of disability is required")}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                <div>
                  <label className="font-semibold mb-2 block">
                    {tEnroll("Do you wish to apply for the scholarship?")}
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="applyScholarship"
                        checked={step2Answers.applyScholarship === true}
                        onChange={() =>
                          setStep2Answers((prev) => ({
                            ...prev,
                            applyScholarship: true,
                          }))
                        }
                      />
                      {tEnroll("Yes")}
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="applyScholarship"
                        checked={step2Answers.applyScholarship === false}
                        onChange={() =>
                          setStep2Answers((prev) => ({
                            ...prev,
                            applyScholarship: false,
                          }))
                        }
                      />
                      {tEnroll("No")}
                    </label>
                  </div>
                  {step2Errors.applyScholarship && (
                    <div className="text-xs text-red-500 mt-1">
                      {step2Errors.applyScholarship}
                    </div>
                  )}
                </div>
                <div className="bg-gray-100 p-3 rounded text-xs text-gray-700 border border-gray-300">
                  <strong>{tEnroll("Scholarship Disclaimer")}</strong>
                </div>
                <Button
                  className="mt-4 w-full bg-main-primary hover:bg-p-shades-shade-80"
                  onClick={handleStep2Next}
                >
                  {tEnroll("Next Step")}
                </Button>
              </div>
            )}
            {/* Step 3: OTP Verification (now submits) */}
            {enrollmentStep === 3 && (
              <div className="flex flex-col gap-6">
                <OtpVerification
                  otp={otp}
                  handleOtpChange={handleOtpChange}
                  handleOtpVerification={handleOtpVerification}
                  setEnrollmentStep={setEnrollmentStep}
                  isEnrollmentLoading={isEnrollmentLoading}
                />
                {/* Button removed as requested */}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
