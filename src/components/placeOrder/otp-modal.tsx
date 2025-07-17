"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Loader2 } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validation-schema";
import PaymentCard from "./payment-card";
import {
  useVerifyEmailMutation,
  useGenerateCodeMutation,
} from "@/app/api/signin/emailApiSlice";

interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: RegistrationFormData | null;
  token: string | undefined;
}

export default function OtpModal({ isOpen, onClose, formData, token }: OtpModalProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [paymentLink, setPaymentLink] = useState("");

  const [verifyEmail] = useVerifyEmailMutation();
  const [generateCode] = useGenerateCodeMutation();

  useEffect(() => {
    if (resendTimer <= 0) return;

    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1 || (value && !/^\d$/.test(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) return;
    setIsVerifying(true);

    try {
      const link = await verifyEmail({ verificationCode: otpString, token }).unwrap();
      setIsVerified(true);
      setTimeout(() => setShowPayment(true), 1000);
      setPaymentLink(link.data.paymentUrl);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return err;
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    if (!formData?.email) return;
    try {
      const link = await generateCode({ token }).unwrap();
      setPaymentLink(link.data.paymentUrl);
      setResendTimer(30);
      setIsVerified(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return err
    }
  };

  const handleClose = () => {
    setOtp(["", "", "", "", "", ""]);
    setIsVerifying(false);
    setIsVerified(false);
    setShowPayment(false);
    onClose();
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {showPayment
              ? "Registration Complete"
              : "Verify Your Email Address"}
          </DialogTitle>
        </DialogHeader>

        {!showPayment ? (
          <div className="flex flex-col gap-6 py-4">
            <div className="text-center">
              <p className="text-sm text-slate-600">
                We have sent a 6-digit verification code to
              </p>
              <p className="font-medium">{formData?.email}</p>
            </div>

            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-semibold border-2 border-main-primary focus:border-main-primary focus:ring-2 focus:ring-main-primary"
                />
              ))}
            </div>

            {isVerified && (
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Verified successfully!
                </span>
              </div>
            )}

            <div className="flex flex-col gap-4">
              <Button
                onClick={handleVerifyOtp}
                disabled={!isOtpComplete || isVerifying || isVerified}
                className="w-full bg-main-primary hover:bg-p-tints-tint-90 text-primary-foreground"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="me-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : isVerified ? (
                  "Verified ✓"
                ) : (
                  "Verify Code"
                )}
              </Button>

              <Button
                variant="ghost"
                className="text-sm text-main-primary hover:text-p-tints-tint-90"
                onClick={handleResendCode}
                disabled={resendTimer > 0}
              >
                {resendTimer > 0
                  ? `Resend Code in ${resendTimer}s`
                  : "Resend Code"}
              </Button>
            </div>
          </div>
        ) : (
          <PaymentCard formData={formData} paymentLink={paymentLink} />
        )}
      </DialogContent>
    </Dialog>
  );
}
