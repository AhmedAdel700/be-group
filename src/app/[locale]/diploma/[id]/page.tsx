"use client";

import { courseData } from "@/app/(dummyData)/courseData";
import OtpVerification from "@/components/OtpVerification";
import PaymentStep from "@/components/PaymentStep";
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
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import MainContent from "./MainContent";

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("diplomas");
  const tEnroll = useTranslations("enroll");
  const courseId = Number.parseInt(params.id as string);
  const course = courseData[courseId as keyof typeof courseData];
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);
  const [selectedDiploma, setSelectedDiploma] = useState<string>("");
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
      setEnrollmentStep(3);
    } else {
      alert("Invalid OTP. Please use 1234 for demo.");
    }
  };

  const handleEnrollmentSubmit = () => {
    setIsEnrollmentLoading(true);

    setTimeout(() => {
      setIsEnrollmentLoading(false);
      setShowEnrollmentModal(false);
      router.push(`/${locale}/enrollment-status?diploma=${selectedDiploma}`);
    }, 2000);
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
                    {t("Choose Your Diploma")}
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        id: "intermediate",
                        name: t("Intermediate Diploma"),
                        semesters: 2,
                        price: 250,
                        description: t(
                          "Perfect for beginners looking to get started"
                        ),
                      },
                      {
                        id: "associate",
                        name: t("Associate Diploma"),
                        semesters: 4,
                        price: 250,
                        description: t(
                          "Comprehensive program for career advancement"
                        ),
                      },
                    ].map((diploma) => (
                      <div
                        key={diploma.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedDiploma === diploma.id
                            ? "border-main-primary bg-[#001C71]/5"
                            : "border-gray-200 hover:border-[#0EC5C7]"
                        }`}
                        onClick={() => setSelectedDiploma(diploma.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-main-primary">
                            {diploma.name}
                          </h4>
                          {selectedDiploma === diploma.id && (
                            <Check className="w-5 h-5 text-main-primary" />
                          )}
                        </div>
                        <p className="text-sm text-black-tint-80 mb-2">
                          {diploma.description}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-black-tint-80">
                            {diploma.semesters} {t("semesters")}
                          </span>
                          <span className="font-bold flex items-center gap-0.5 text-main-primary">
                            {diploma.price} {t("SAR")}
                          </span>
                        </div>
                      </div>
                    ))}
                    <Card className="text-xs font-semibold p-4 text-center rounded-md border-main-primary bg-[#001C71]/5 capitalize">
                      {t(
                        "The official Enroll fee for the platform is 250 SAR"
                      )}
                    </Card>
                  </div>

                  <Button
                    onClick={() => setShowEnrollmentModal(true)}
                    disabled={!selectedDiploma}
                    className="w-full bg-main-primary hover:bg-p-shades-shade-80 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t("Enroll Now")}
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
              <DialogTitle className="text-xl font-bold text-main-primary text-right rtl:text-right ltr:text-left">
                {t("Enroll in")} {t("Diploma")}
                {selectedDiploma === "intermediate"
                  ? t("Intermediate")
                  : t("Associate")}{" "}
              </DialogTitle>
              <div className="flex justify-between">
                {[1, 2, 3].map((step) => {
                  const isCompleted = step < enrollmentStep;
                  const isCurrent = step === enrollmentStep;
                  return (
                    <div key={step} className="flex items-center">
                      {/* Circle representing the step */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-colors duration-300 ease-in-out border-2 border-[#001C71] 
                          ${isCurrent ? "bg-[#001C71] text-white" : "bg-white text-[#001C71]"}
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
                          className={`w-24 sm:w-60 h-0.5 transition-colors duration-300 ease-in-out ${
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

            {/* Step 2: OTP Verification */}
            {enrollmentStep === 2 && (
              <OtpVerification
                otp={otp}
                handleOtpChange={handleOtpChange}
                handleOtpVerification={handleOtpVerification}
                setEnrollmentStep={setEnrollmentStep}
              />
            )}

            {/* Step 3: Payment Method */}
            {enrollmentStep === 3 && (
              <PaymentStep
                enrollmentData={enrollmentData}
                setEnrollmentData={setEnrollmentData}
                isEnrollmentLoading={isEnrollmentLoading}
                setEnrollmentStep={setEnrollmentStep}
                handleEnrollmentSubmit={handleEnrollmentSubmit}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
