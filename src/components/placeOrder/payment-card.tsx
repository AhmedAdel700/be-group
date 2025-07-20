"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, ExternalLink, SaudiRiyal } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validation-schema";
import { useTranslations } from "next-intl";

interface PaymentCardProps {
  formData: RegistrationFormData | null;
  paymentLink: string;
}

export default function PaymentCard({ formData, paymentLink }: PaymentCardProps) {
  const handlePaymentClick = () => {
    // In a real application, this would redirect to the payment gateway
    window.open(paymentLink, "_blank");
  };
  const t = useTranslations("register");

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
        <CheckCircle className="h-6 w-6" />
        <span className="font-semibold">{t("registrationVerified")}</span>
      </div>

      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-primary">
            <CreditCard className="h-5 w-5" />
            <span>{t("completeYourPayment")}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="text-center space-y-2">
            <p className="text-sm text-slate-600">
              {t("greeting", { name: formData?.fullName })}
            </p>
            <p className="text-sm text-slate-600">{t("completeToFinalize")}</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-main-primary">
            <div className="flex justify-between items-center">
              <span className="font-medium">{t("registrationFee")}</span>
              <span className="text-xl font-bold text-main-primary">
                100 <SaudiRiyal className="w-4 h-4" />
              </span>
            </div>
          </div>

          <Button
            onClick={handlePaymentClick}
            className="w-full h-12 text-lg bg-[#99D9D9] hover:bg-[#75c4c4] text-secondary-foreground"
          >
            {t("proceedToPayment")}
            <ExternalLink className="ms-2 h-4 w-4" />
          </Button>

          <p className="text-xs text-center text-slate-500">
            {t("secureRedirectNotice")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}