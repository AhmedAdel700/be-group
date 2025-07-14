"use client";

import { courseData } from "@/app/(dummyData)/courseData";
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
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import MainContent from "./MainContent";
import { Checkbox } from "@/components/ui/checkbox";

type CourseType = {
  diploma?: string;
  semesters: Array<{ id: number; name: string; price: number }>;
};

function hasDiplomaField(course: CourseType): course is CourseType & { diploma: string } {
  return course && typeof course.diploma === 'string';
}

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("diplomas");
  const tEnroll = useTranslations("enroll");
  const courseId = Number.parseInt(params.id as string);
  const course = courseData[courseId as keyof typeof courseData];
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
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [highSchoolDiplomaFile, setHighSchoolDiplomaFile] = useState<File | null>(null);
  const [idPhotoFile, setIdPhotoFile] = useState<File | null>(null);
  const [studentImageFile, setStudentImageFile] = useState<File | null>(null);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [enrollmentErrors, setEnrollmentErrors] = useState<
    Record<string, string>
  >({});
  const [isEnrollmentLoading, setIsEnrollmentLoading] = useState(false);
  const [step2Answers, setStep2Answers] = useState({
    question1: false,
    question2: false,
  });
  const [step2Errors, setStep2Errors] = useState({
    question1: "",
    question2: "",
  });

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-main-primary mb-4">
            {t("Diploma Not Found")}
          </h1>
          <Link href="/">
            <Button>{t("Back to Home")}</Button>
          </Link>
        </div>
      </div>
    );
  }

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
    if (!enrollmentData.email.trim()) errors.email = tEnroll("Email is required");
    if (!enrollmentData.password.trim())
      errors.password = tEnroll("Password is required");
    if (!highSchoolDiplomaFile)
      errors.highSchoolDiplomaFile = tEnroll("High school diploma is required");
    if (!idPhotoFile)
      errors.idPhotoFile = tEnroll("ID photo is required");
    if (!studentImageFile)
      errors.studentImageFile = tEnroll("Student image is required");

    setEnrollmentErrors(errors);

    if (Object.keys(errors).length === 0) {
      setEnrollmentStep(2);
    }
  };

  // Step 2 handler
  const handleStep2Next = () => {
    const errors: { question1: string; question2: string } = { question1: "", question2: "" };
    if (!step2Answers.question1) errors.question1 = "This field is required.";
    if (!step2Answers.question2) errors.question2 = "This field is required.";
    setStep2Errors(errors);
    if (!errors.question1 && !errors.question2) {
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
            course={course}
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
                        {hasDiplomaField(course) &&
                        course.diploma === "Associate"
                          ? t("Associate Diploma")
                          : hasDiplomaField(course) &&
                            course.diploma === "Intermediate"
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
                      {course.semesters.map(
                        (
                          semester: { id: number; name: string; price: number },
                          idx: number
                        ) => (
                          <div
                            key={semester.id}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="text-black-tint-80">
                              {t(
                                `Semester ${idx + 1}: ${
                                  semester.name.split(": ")[1]
                                }`
                              )}
                            </span>
                            <span className="font-bold flex items-center gap-1 text-main-primary">
                              {semester.price}{" "}
                              <SaudiRiyal className="w-4 h-4" />
                            </span>
                          </div>
                        )
                      )}
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
                      {course.semesters.reduce(
                        (
                          acc: number,
                          s: { id: number; name: string; price: number }
                        ) => acc + (s.price || 0),
                        0
                      ) + 100}{" "}
                      <SaudiRiyal className="w-4 h-4" />
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
                  <label className="font-semibold mb-2 block">1. Do you agree to the terms and conditions?</label>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="question1"
                      checked={step2Answers.question1}
                      onCheckedChange={(checked) =>
                        setStep2Answers((prev) => ({ ...prev, question1: !!checked }))
                      }
                    />
                    <label htmlFor="question1" className="text-sm">Yes</label>
                  </div>
                  {step2Errors.question1 && (
                    <div className="text-xs text-red-500 mt-1">{step2Errors.question1}</div>
                  )}
                </div>
                <div>
                  <label className="font-semibold mb-2 block">2. Do you confirm that all information provided is accurate?</label>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="question2"
                      checked={step2Answers.question2}
                      onCheckedChange={(checked) =>
                        setStep2Answers((prev) => ({ ...prev, question2: !!checked }))
                      }
                    />
                    <label htmlFor="question2" className="text-sm">Yes</label>
                  </div>
                  {step2Errors.question2 && (
                    <div className="text-xs text-red-500 mt-1">{step2Errors.question2}</div>
                  )}
                </div>
                <Button
                  className="mt-4 w-full bg-main-primary hover:bg-p-shades-shade-80"
                  onClick={handleStep2Next}
                >
                  Next Step
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
