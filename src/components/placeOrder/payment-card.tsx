"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, ExternalLink } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validation-schema";

interface PaymentCardProps {
  formData: RegistrationFormData | null;
}

export default function PaymentCard({ formData }: PaymentCardProps) {
  const handlePaymentClick = () => {
    // In a real application, this would redirect to the payment gateway
    window.open("https://payment.example.com", "_blank");
  };

  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
        <CheckCircle className="h-6 w-6" />
        <span className="font-semibold">Registration Verified!</span>
      </div>

      <Card className="border-1 border-gray-300">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-primary">
            <CreditCard className="h-5 w-5" />
            <span>Complete Your Payment</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-2">
            <p className="text-sm text-slate-600">
              Hello {formData?.fullNameEn}, your registration has been
              successfully verified.
            </p>
            <p className="text-sm text-slate-600">
              Please complete the payment to finalize your application.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-main-primary">
            <div className="flex justify-between items-center">
              <span className="font-medium">Registration Fee:</span>
              <span className="text-xl font-bold text-main-primary">
                100 SAR
              </span>
            </div>
          </div>

          <Button
            onClick={handlePaymentClick}
            className="w-full h-12 text-lg bg-[#99D9D9] hover:bg-[#75c4c4] text-secondary-foreground"
          >
            Proceed to Payment
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-xs text-center text-slate-500">
            You will be redirected to a secure payment gateway
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
