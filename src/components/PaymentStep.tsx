/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React from "react";

interface PaymentStepProps {
  enrollmentData: any;
  setEnrollmentData: React.Dispatch<React.SetStateAction<any>>;
  isEnrollmentLoading: boolean;
  setEnrollmentStep: React.Dispatch<React.SetStateAction<number>>;
  handleEnrollmentSubmit: () => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({
  enrollmentData,
  setEnrollmentData,
  isEnrollmentLoading,
  setEnrollmentStep,
  handleEnrollmentSubmit,
}) => (
  <div className="space-y-4 mt-4">
    <h3 className="font-semibold text-[#001C71]">Payment Information</h3>
    <div className="grid grid-cols-2 gap-3 mb-4">
      {[
        { id: "paypal", name: "PayPal", icon: "🅿️" },
        { id: "bank-transfer", name: "Bank Transfer", icon: "🏦" },
        { id: "mastercard", name: "MasterCard", icon: "💳" },
        { id: "apple-pay", name: "Apple Pay", icon: "🍎" },
      ].map((method) => (
        <div
          key={method.id}
          className={`p-3 rounded-lg border-2 cursor-pointer text-center ${
            enrollmentData.paymentMethod === method.id
              ? "border-[#001C71] bg-[#001C71]/5"
              : "border-gray-200 hover:border-[#0EC5C7]"
          }`}
          onClick={() =>
            setEnrollmentData((prev: any) => ({
              ...prev,
              paymentMethod: method.id,
            }))
          }
        >
          <div className="text-2xl mb-1">{method.icon}</div>
          <div className="text-sm font-medium">{method.name}</div>
        </div>
      ))}
    </div>

    {enrollmentData.paymentMethod && (
      <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
        {enrollmentData.paymentMethod === "mastercard" && (
          <>
            <div>
              <Label htmlFor="cardholderName">Cardholder Name *</Label>
              <Input
                id="cardholderName"
                value={enrollmentData.cardholderName}
                onChange={(e) =>
                  setEnrollmentData((prev: any) => ({
                    ...prev,
                    cardholderName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="cardNumber">Card Number *</Label>
              <Input
                id="cardNumber"
                value={enrollmentData.cardNumber}
                onChange={(e) =>
                  setEnrollmentData((prev: any) => ({
                    ...prev,
                    cardNumber: e.target.value,
                  }))
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={enrollmentData.expiryDate}
                  onChange={(e) =>
                    setEnrollmentData((prev: any) => ({
                      ...prev,
                      expiryDate: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  value={enrollmentData.cvv}
                  onChange={(e) =>
                    setEnrollmentData((prev: any) => ({
                      ...prev,
                      cvv: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </>
        )}

        {enrollmentData.paymentMethod === "paypal" && (
          <div>
            <Label htmlFor="paypalEmail">PayPal Email *</Label>
            <Input
              id="paypalEmail"
              type="email"
              placeholder="your-email@paypal.com"
              value={enrollmentData.email}
              onChange={(e) =>
                setEnrollmentData((prev: any) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
        )}

        {enrollmentData.paymentMethod === "bank-transfer" && (
          <>
            <div>
              <Label htmlFor="bankName">Bank Name *</Label>
              <Input
                id="bankName"
                placeholder="Enter bank name"
                value={enrollmentData.cardholderName}
                onChange={(e) =>
                  setEnrollmentData((prev: any) => ({
                    ...prev,
                    cardholderName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Label htmlFor="accountNumber">Account Number *</Label>
              <Input
                id="accountNumber"
                placeholder="Enter account number"
                value={enrollmentData.cardNumber}
                onChange={(e) =>
                  setEnrollmentData((prev: any) => ({
                    ...prev,
                    cardNumber: e.target.value,
                  }))
                }
              />
            </div>
          </>
        )}

        {enrollmentData.paymentMethod === "apple-pay" && (
          <div>
            <Label htmlFor="appleId">Apple ID *</Label>
            <Input
              id="appleId"
              type="email"
              placeholder="your-apple-id@icloud.com"
              value={enrollmentData.email}
              onChange={(e) =>
                setEnrollmentData((prev: any) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
        )}
      </div>
    )}

    <div className="flex space-x-2">
      <Button
        variant="outline"
        onClick={() => setEnrollmentStep(2)}
        className="flex-1"
      >
        Back
      </Button>
      <Button
        onClick={handleEnrollmentSubmit}
        disabled={isEnrollmentLoading}
        className="flex-1 bg-[#001C71] hover:bg-[#001C71]/90"
      >
        {isEnrollmentLoading ? "Processing..." : "Complete Enrollment"}
      </Button>
    </div>
  </div>
);

export default PaymentStep; 