import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React from "react";

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
}) => (
  <div className="space-y-4 mt-4">
    <h3 className="font-semibold text-[#001C71]">OTP Verification</h3>
    <p className="text-gray-600">
      Enter the 4-digit code sent to your phone/email
    </p>
    <div className="flex justify-center space-x-2">
      {otp.map((digit, index) => (
        <Input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleOtpChange(index, e.target.value)}
          className="w-12 h-12 text-center text-lg font-bold"
        />
      ))}
    </div>
    <div className="text-center text-sm text-gray-600">
      <p>Demo: Use 1234</p>
    </div>
    <div className="flex space-x-2">
      <Button
        variant="outline"
        onClick={() => setEnrollmentStep(1)}
        className="flex-1"
      >
        Back
      </Button>
      <Button
        onClick={handleOtpVerification}
        className="flex-1 bg-[#001C71] hover:bg-[#001C71]/90"
      >
        Verify
      </Button>
    </div>
  </div>
);

export default OtpVerification; 