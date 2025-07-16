"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2, Check } from "lucide-react";

import {
  getRegistrationSchema,
  type RegistrationFormData,
} from "@/lib/validation-schema";

import OtpModal from "@/components/placeOrder/otp-modal";
import ScholarshipSection from "@/components/placeOrder/scholarship-section";
import UploadSection from "@/components/placeOrder/upload-section";
import PersonalInfoSection from "@/components/placeOrder/personal-info-section";

const steps = [
  {
    label: "Personal Info",
    fields: [
      "fullName",
      "fullNameAr",
      "email",
      "password",
      "confirmPassword",
      "phoneNumber",
      "nationalNumber",
      "nationality",
      "city",
      "birthDate",
      "gender",
      "highSchoolDegree",
      "graduationYear",
      "diplomaChoice1",
      "diplomaChoice2",
      "diplomaChoice3",
    ],
  },
  {
    label: "Uploads",
    fields: [
      "studentPicture",
      "highSchoolCertificate",
      "studentIdentity",
      "employerApproval",
    ],
  },
  {
    label: "Scholarship",
    fields: [],
  },
];

export default function RegistrationForm() {
  const locale = useLocale(); // Get current language: 'en' or 'ar'
  const t = useTranslations("register");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(getRegistrationSchema(locale as "en" | "ar")),
    defaultValues: {
      fullName: "",
      fullNameAr: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      nationalNumber: "",
      nationality: "",
      city: "",
      birthDate: undefined,
      gender: undefined,
      diplomaChoice1: "",
      diplomaChoice2: "",
      diplomaChoice3: "",
      hasDisability: false,
      scholarshipParticipation: false,
      applicationAcknowledgment: false,
      computerProvision: false,
      informationAccuracy: false,
      generalConditions: false,
      proctoringAcknowledgment: false,
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    console.log(`@@@@@@@@@@@@@@@@`, data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormData(data);
    setIsSubmitting(false);
    setShowOtpModal(true);
  };

  function StepIndicator() {
    return (
      <div className="flex justify-center w-full h-[200px] bg-p-tints-tint-5 mx-auto mb-8">
        {steps.map((step, idx) => {
          const isCompleted = completed.includes(idx);
          const isCurrent = idx === currentStep;
          const circleClass = isCompleted
            ? "bg-[#001C71] text-white border-[#001C71]"
            : isCurrent
            ? "bg-transparent text-[#001C71] border-[#001C71]"
            : "bg-transparent text-[#CCCCCC] border-[#CCCCCC]";
          const nextStepCompleted = completed.includes(idx);
          const lineClass = nextStepCompleted ? "bg-[#001C71]" : "bg-[#CCCCCC]";

          return (
            <div key={step.label} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold border-2 transition-colors duration-300 ${circleClass}`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : idx + 1}
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`h-0.5 w-[110px] md:w-[300px] -ms-2 md:-ms-[15px] transition-colors duration-300 ${lineClass}`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  const handleNext = async () => {
    const fields = steps[currentStep].fields;
    let valid = true;
    if (fields.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      valid = await form.trigger(fields as any);
    }
    if (valid) {
      setCompleted((prev) =>
        prev.includes(currentStep) ? prev : [...prev, currentStep]
      );
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  function renderStep() {
    switch (currentStep) {
      case 0:
        return <PersonalInfoSection form={form} locale={locale} />;
      case 1:
        return <UploadSection form={form} />;
      case 2:
        return <ScholarshipSection form={form} />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 rounded-md">
        <h1 className="text-2xl text-center mb-8">Registration Information</h1>
        <StepIndicator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="flex items-center justify-center gap-2 max-w-3xl mx-auto">
              {renderStep()}
            </div>

            <div className="flex justify-end max-w-3xl mx-auto gap-4">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="w-[100px] h-12 text-sm font-bold rounded-[8px] border-main-primary text-main-primary"
                  disabled={isSubmitting}
                >
                  {t("back")}
                </Button>
              )}
              {currentStep < steps.length - 1 && (
                <Button
                  type="button"
                  className="w-[100px] h-12 font-bold rounded-[8px] text-sm bg-main-primary hover:bg-p-tints-tint-90 text-primary-foreground"
                  onClick={handleNext}
                  disabled={isSubmitting}
                >
                  {t("next")}
                </Button>
              )}
              {currentStep === steps.length - 1 && (
                <Button
                  type="submit"
                  className="w-fit h-12 text-sm bg-main-primary hover:bg-p-tints-tint-90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="me-2 h-4 w-4 animate-spin" />
                      {t("submitting")}
                    </>
                  ) : (
                    t("submitRegistration")
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
      <OtpModal
        isOpen={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        formData={formData}
      />
    </>
  );
}
