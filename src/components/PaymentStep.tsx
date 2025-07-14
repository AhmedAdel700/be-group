/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

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
}) => {
  const t = useTranslations("enroll");
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-main-primary">
        {t("Payment Information")}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {[
          { id: "bank-transfer", name: t("Bank Transfer"), icon: "🏦" },
          { id: "mastercard", name: t("Master Card"), icon: "💳" },
        ].map((method) => (
          <div
            key={method.id}
            className={`p-3 rounded-lg border-2 cursor-pointer text-center ${
              enrollmentData.paymentMethod === method.id
                ? "border-main-primary bg-p-shades-shade-80 text-main-white"
                : "border-gray-200 hover:border-[#0EC5C7]"
            }`}
            onClick={() =>
              setEnrollmentData((prev: any) => ({
                ...prev,
                paymentMethod: method.id,
              }))
            }
          >
            <div className="text-2xl">{method.icon}</div>
            <div className="text-sm font-medium">{method.name}</div>
          </div>
        ))}
      </div>

      {enrollmentData.paymentMethod && (
        <div className=" p-4 bg-gray-50 rounded-lg">
          {enrollmentData.paymentMethod === "mastercard" && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <Label htmlFor="cardholderName">{t("Cardholder Name")} *</Label>
                <Input
                  id="cardholderName"
                  placeholder={t("Please enter your cardholder name")}
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
                <Label htmlFor="cardNumber">{t("Card Number")} *</Label>
                <Input
                  id="cardNumber"
                  placeholder={t("Please enter your card number")}
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
                  <Label htmlFor="expiryDate">{t("Expiry Date")} *</Label>
                  <Input
                    id="expiryDate"
                    placeholder={t("MM/YY")}
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
                  <Label htmlFor="cvv">{t("CVV")} *</Label>
                  <Input
                    id="cvv"
                    placeholder={t("CVV")}
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
            </div>
          )}

          {enrollmentData.paymentMethod === "bank-transfer" && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <Label htmlFor="bankName">{t("Bank Name")} *</Label>
                <Input
                  id="bankName"
                  placeholder={t("Enter bank name")}
                  value={enrollmentData.cardholderName}
                  onChange={(e) =>
                    setEnrollmentData((prev: any) => ({
                      ...prev,
                      cardholderName: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="accountNumber">{t("Account Number")} *</Label>
                <Input
                  id="accountNumber"
                  placeholder={t("Enter account number")}
                  value={enrollmentData.cardNumber}
                  onChange={(e) =>
                    setEnrollmentData((prev: any) => ({
                      ...prev,
                      cardNumber: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-end gap-4">
        <Button
          onClick={handleEnrollmentSubmit}
          disabled={isEnrollmentLoading || !enrollmentData.paymentMethod}
          className="bg-main-primary hover:bg-p-shades-shade-80"
        >
          {isEnrollmentLoading ? t("Processing") : t("Complete Enrollment")}
        </Button>
      </div>
    </div>
  );
}

export default PaymentStep; 