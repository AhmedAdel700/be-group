/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

interface OtpVerificationProps {
  otp: string[];
  handleOtpChange: (index: number, value: string) => void;
  handleOtpVerification: () => void;
  setEnrollmentStep: React.Dispatch<React.SetStateAction<number>>;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  otp,
  handleOtpChange,
  handleOtpVerification,
  setEnrollmentStep,
}) => {
  const t = useTranslations("enroll");
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Handle OTP change and move focus automatically
  const handleChange = (index: number, value: string) => {
    const onlyDigit = value.replace(/\D/g, ""); // only keep numbers
    handleOtpChange(index, onlyDigit); // Call the handle function to update OTP state

    // Move focus to the next input if the value is a digit
    if (onlyDigit && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle Backspace key press and move focus backward
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-main-primary">
        {t("OTP Verification")}
      </h3>
      <p className="text-gray-600">
        {t("Enter the 4-digit code sent to your phone/email")}
      </p>
      <div className="flex justify-center gap-5">
        {otp.map((digit, index) => (
          <Input
            key={index}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el: any) => (inputRefs.current[index] = el)}
            className="w-20 h-20 text-center !text-2xl font-bold"
          />
        ))}
      </div>
      <div className="text-center text-sm text-p-">
        <p>{t("Demo: Use 1234")}</p>
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={() => setEnrollmentStep(1)}>
          {t("Back")}
        </Button>
        <Button
          onClick={handleOtpVerification}
          className="bg-main-primary hover:bg-p-shades-shade-80"
        >
          {t("Verify")}
        </Button>
      </div>
    </div>
  );
};

export default OtpVerification;
