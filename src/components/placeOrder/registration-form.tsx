"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import {
  getRegistrationSchema,
  type RegistrationFormData,
} from "@/lib/validation-schema";
import OtpModal from "./otp-modal";
import PersonalInfoSection from "./personal-info-section";
import UploadSection from "./upload-section";
import ScholarshipSection from "./scholarship-section";
import { useLocale } from "next-intl";

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData | null>(null);
  const locale = useLocale();

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(getRegistrationSchema(locale)),
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
      birthDate: undefined, // keeps date picker uncontrolled
      gender: undefined,
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormData(data);
    setIsSubmitting(false);
    setShowOtpModal(true);
  };

  return (
    <>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Registration Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <PersonalInfoSection form={form} />

              <UploadSection form={form} />

              <Separator className="my-8" />

              <ScholarshipSection form={form} />

              <Button
                type="submit"
                className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
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
        </CardContent>
      </Card>

      <OtpModal
        isOpen={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        formData={formData}
      />
    </>
  );
}
