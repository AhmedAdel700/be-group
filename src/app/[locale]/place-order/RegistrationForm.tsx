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
import { useRegisterMutation } from "@/app/api/signin/emailApiSlice";
import { DiplomaResponseData } from "@/types/diplomasApiTypes";

const steps = [
  { label: "Personal Information", fields: [] },
  { label: "Upload Document", fields: [] },
  { label: "Scholarship Information", fields: [] },
];

const stepValidationFields: (keyof RegistrationFormData)[][] = [
  [
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
  [
    "studentPicture",
    "highSchoolCertificate",
    "studentIdentity",
    "employerApproval",
  ],
  [
    "applicationAcknowledgment",
    "computerProvision",
    "informationAccuracy",
    "generalConditions",
    "proctoringAcknowledgment",
  ],
];

export default function RegistrationForm({
  diplomasData,
}: {
  diplomasData: DiplomaResponseData;
}) {
  const locale = useLocale();
  const t = useTranslations("register");

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [isStepLoading, setIsStepLoading] = useState(false);
  const [token, setToken] = useState<string | undefined>();

  const [register, { isLoading }] = useRegisterMutation();

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
    try {
      const payload = {
        ...data,
        birthDate: data.birthDate
          ? typeof data.birthDate === "string"
            ? data.birthDate
            : data.birthDate.toISOString().split("T")[0]
          : undefined,
        graduationYear: data.graduationYear
          ? typeof data.graduationYear === "number"
            ? data.graduationYear
            : Number(data.graduationYear)
          : undefined,
        initialRegistrationDiplomaId: [
          data.diplomaChoice1,
          data.diplomaChoice2,
          data.diplomaChoice3,
        ],
        countryCode: "SA",
        isFinalizedRegistration: true,
      };

      const result = await register(payload).unwrap();
      setToken(result?.data?.token);
      setFormData(data);
      setShowOtpModal(true);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleNext = async () => {
    const fields = stepValidationFields[currentStep];
    let valid = true;

    if (fields.length > 0) {
      valid = await form.trigger(fields);
    }

    if (currentStep === 0) {
      const values = form.getValues();
      if (values.password !== values.confirmPassword) {
        const passwordMismatchMessage =
          locale === "ar"
            ? "كلمة المرور وتأكيد كلمة المرور غير متطابقين"
            : "Password and Confirm Password do not match";

        form.setError("confirmPassword", {
          type: "manual",
          message: passwordMismatchMessage,
        });

        return;
      }
    }

    if (valid) {
      if (currentStep === 0) {
        try {
          setIsStepLoading(true);
          const allValues = form.getValues();
          const step1DataObject = Object.fromEntries(
            stepValidationFields[0].map((key) => [
              key,
              allValues[key as keyof typeof allValues],
            ])
          );

          const payload = {
            ...step1DataObject,
            initialRegistrationDiplomaId: [
              step1DataObject.diplomaChoice1,
              step1DataObject.diplomaChoice2,
              step1DataObject.diplomaChoice3,
            ].filter((id): id is string => typeof id === "string" && !!id),
            countryCode: "SA",
            isFinalizedRegistration: false,
          };

          await register(payload).unwrap();
          setCompleted((prev) =>
            prev.includes(currentStep) ? prev : [...prev, currentStep]
          );
          setCurrentStep((prev) => prev + 1);
        } catch (error) {
          console.error("Step 1 error:", error);
        } finally {
          setIsStepLoading(false);
        }
      } else {
        setCompleted((prev) =>
          prev.includes(currentStep) ? prev : [...prev, currentStep]
        );
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    setCompleted((prev) => prev.filter((step) => step !== currentStep - 1));
    setCurrentStep((prev) => prev - 1);
  };

  function renderStep() {
    switch (currentStep) {
      case 0:
        return <PersonalInfoSection form={form} diplomasData={diplomasData} />;
      case 1:
        return <UploadSection form={form} />;
      case 2:
        return <ScholarshipSection form={form} />;
      default:
        return null;
    }
  }

  function StepIndicator() {
    return (
      <div className="flex justify-between items-start w-full max-w-5xl mx-auto px-4 relative">
        {steps.map((step, idx) => {
          const isCompleted = completed.includes(idx);
          const isCurrent = idx === currentStep;

          const circleStyle = isCompleted
            ? "bg-main-primary text-white border-main-primary"
            : isCurrent
            ? "bg-p-tints-tint-5 text-main-primary border-main-primary"
            : "bg-p-tints-tint-5 text-black-tint-20 border-black-tint-20";

          const isLeftLineActive = completed.includes(idx - 1);
          const isRightLineActive = completed.includes(idx);

          return (
            <div
              key={step.label}
              className="relative flex-1 flex flex-col items-center text-center"
            >
              {idx !== 0 && (
                <div
                  className={`absolute top-5 ${
                    locale === "en" ? "left-0" : "right-0"
                  } w-1/2 border-b-2 z-0 ${
                    isLeftLineActive
                      ? "border-main-primary"
                      : "border-black-tint-20"
                  }`}
                />
              )}

              {idx !== steps.length - 1 && (
                <div
                  className={`absolute top-5 ${
                    locale === "en" ? "right-0" : "left-0"
                  } w-1/2 border-b-2 z-0 ${
                    isRightLineActive
                      ? "border-main-primary"
                      : "border-black-tint-20"
                  }`}
                />
              )}

              <div
                className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold transition-colors duration-300 ${circleStyle}`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : idx + 1}
              </div>

              <div className="mt-3 text-xs xl:text-sm font-bold text-black-tint-90 w-24 xl:w-fit leading-tight">
                {t(step.label)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 mt-8 rounded-md">
        <div className="py-12 bg-p-tints-tint-5 w-full my-8">
          <StepIndicator />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="flex items-center justify-center gap-2 max-w-3xl mx-auto px-4">
              {renderStep()}
            </div>

            <div className="flex justify-end max-w-3xl mx-auto gap-4 px-4">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="w-[100px] h-12 text-sm font-bold rounded-[8px] border-main-primary text-main-primary"
                  disabled={isLoading || isStepLoading}
                >
                  {t("back")}
                </Button>
              )}
              {currentStep < steps.length - 1 && (
                <Button
                  type="button"
                  className="min-w-[100px] h-12 font-bold rounded-[8px] text-sm bg-main-primary hover:bg-p-tints-tint-90 text-primary-foreground"
                  onClick={handleNext}
                  disabled={isStepLoading}
                >
                  {isStepLoading ? (
                    <>
                      <Loader2 className="me-2 h-4 w-4 animate-spin" />
                      {t("submitting")}
                    </>
                  ) : (
                    t("next")
                  )}
                </Button>
              )}
              {currentStep === steps.length - 1 && (
                <Button
                  type="submit"
                  className="w-fit h-12 text-sm bg-main-primary hover:bg-p-tints-tint-90 text-primary-foreground"
                  disabled={isLoading}
                >
                  {isLoading ? (
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
        token={token}
      />
    </>
  );
}
