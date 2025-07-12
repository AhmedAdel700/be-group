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
  const courseId = Number.parseInt(params.id as string);
  const course = courseData[courseId as keyof typeof courseData];
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);
  const [selectedDiploma, setSelectedDiploma] = useState<string>("");
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [enrollmentStep, setEnrollmentStep] = useState(1);
  const [enrollmentData, setEnrollmentData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
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
  const [enrollmentFiles, setEnrollmentFiles] = useState<File[]>([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [enrollmentErrors, setEnrollmentErrors] = useState<
    Record<string, string>
  >({});
  const [isEnrollmentLoading, setIsEnrollmentLoading] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#001C71] mb-4">
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
      errors.firstName = t("First name is required");
    if (!enrollmentData.lastName.trim())
      errors.lastName = t("Last name is required");
    if (!enrollmentData.nationalId.trim())
      errors.nationalId = t("National ID is required");
    if (!enrollmentData.phoneNumber.trim())
      errors.phoneNumber = t("Phone number is required");
    if (!enrollmentData.email.trim()) errors.email = t("Email is required");
    if (!enrollmentData.password.trim())
      errors.password = t("Password is required");

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
        <div className="grid lg:grid-cols-10 gap-8 pt-24">
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
              <Card className="shadow-lg">
                <CardContent className="flex flex-col gap-6 p-6">
                  <h3 className="text-lg font-bold text-[#001C71]">
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
                            ? "border-[#001C71] bg-[#001C71]/5"
                            : "border-gray-200 hover:border-[#0EC5C7]"
                        }`}
                        onClick={() => setSelectedDiploma(diploma.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-[#001C71]">
                            {diploma.name}
                          </h4>
                          {selectedDiploma === diploma.id && (
                            <Check className="w-5 h-5 text-[#001C71]" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {diploma.description}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">
                            {diploma.semesters} {t("semesters")}
                          </span>
                          <span className="font-bold flex items-center gap-0.5 text-[#001C71]">
                            {diploma.price} {t("SAR")}
                          </span>
                        </div>
                      </div>
                    ))}
                    <span className="text-xs font-semibold">
                      {t(
                        "The official subscription fee for the platform is 250 SAR"
                      )}
                    </span>
                  </div>

                  <Button
                    onClick={() => setShowEnrollmentModal(true)}
                    disabled={!selectedDiploma}
                    className="w-full bg-[#001C71] hover:bg-[#001C71]/90 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <DialogTitle className="text-xl font-bold text-[#001C71] text-right rtl:text-right ltr:text-left">
                {t("Enroll in")} {t("Diploma")}{" "}
                {selectedDiploma === "intermediate"
                  ? t("Intermediate")
                  : t("Associate")}{" "}
              </DialogTitle>
              <div className="flex justify-between">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    {/* Circle representing the step */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-colors duration-300 ease-in-out ${
                        step < enrollmentStep
                          ? "bg-[#001C71] text-white"
                          : step === enrollmentStep
                          ? "bg-[#001C71]/80 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step <= enrollmentStep ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        step
                      )}
                    </div>

                    {/* Line connecting steps */}
                    {step < 3 && (
                      <div
                        className={`w-60 h-0.5 transition-colors duration-300 ease-in-out ${
                          step < enrollmentStep ? "bg-[#001C71]" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </DialogHeader>

            {/* Step 1: Personal Information */}
            {enrollmentStep === 1 && (
              <PersonalInfoForm
                enrollmentData={enrollmentData}
                setEnrollmentData={setEnrollmentData}
                enrollmentErrors={enrollmentErrors}
                enrollmentFiles={enrollmentFiles}
                setEnrollmentFiles={setEnrollmentFiles}
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
