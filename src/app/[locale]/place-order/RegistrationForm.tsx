"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import {
  registrationSchema,
  type RegistrationFormData,
} from "@/lib/validation-schema";
import OtpModal from "@/components/placeOrder/otp-modal";
import ScholarshipSection from "@/components/placeOrder/scholarship-section";
import UploadSection from "@/components/placeOrder/upload-section";
import PersonalInfoSection from "@/components/placeOrder/personal-info-section";

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData | null>(null);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullNameEn: "",
      fullNameAr: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      nationalId: "",
      nationality: "",
      city: "",
      birthdate: undefined, // keeps date picker uncontrolled
      gender: undefined,
      diplomaChoice1: "",
      diplomaChoice2: "",
      diplomaChoice3: "",
      // existing defaults
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormData(data);
    setIsSubmitting(false);
    setShowOtpModal(true);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-white/80 rounded-md">
        <h1 className="text-2xl text-center mb-8">Registration Information</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="grid xl:grid-cols-2 items-start gap-10">
              <PersonalInfoSection form={form} />

              <UploadSection form={form} />
            </div>

            <Separator className="my-8" />

            <ScholarshipSection form={form} />

            <Button
              type="submit"
              className="w-fit h-11 text-base bg-main-primary hover:bg-p-tints-tint-90 text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </Button>
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
