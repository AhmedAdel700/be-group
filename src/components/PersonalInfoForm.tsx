/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface PersonalInfoFormProps {
  enrollmentData: any;
  setEnrollmentData: React.Dispatch<React.SetStateAction<any>>;
  enrollmentErrors: Record<string, string>;
  enrollmentFiles: File[];
  setEnrollmentFiles: React.Dispatch<React.SetStateAction<File[]>>;
  handleStep1Next: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  enrollmentData,
  setEnrollmentData,
  enrollmentErrors,
  enrollmentFiles,
  setEnrollmentFiles,
  handleStep1Next,
}) => {
  const t = useTranslations("enroll");
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-main-primary">
        {t("Personal Information")}
      </h3>
      <div className="flex flex-col gap-4">
        <Label htmlFor="firstName">{t("The full name")} *</Label>
        <Input
          id="firstName"
          placeholder={t("Please enter your full name")}
          value={enrollmentData.firstName}
          onChange={(e) =>
            setEnrollmentData((prev: any) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
          className={enrollmentErrors.firstName ? "border-red-500" : ""}
        />
        {enrollmentErrors.firstName && (
          <p className="text-sm text-red-500">{enrollmentErrors.firstName}</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="nationalId">{t("National ID")} *</Label>
        <Input
          id="nationalId"
          placeholder={t("Please enter your national ID")}
          value={enrollmentData.nationalId}
          onChange={(e) =>
            setEnrollmentData((prev: any) => ({
              ...prev,
              nationalId: e.target.value,
            }))
          }
          className={enrollmentErrors.nationalId ? "border-red-500" : ""}
        />
        {enrollmentErrors.nationalId && (
          <p className="text-sm text-red-500">{enrollmentErrors.nationalId}</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="phoneNumber">{t("Phone Number")} *</Label>
        <Input
          id="phoneNumber"
          placeholder={t("Please enter your phone number")}
          value={enrollmentData.phoneNumber}
          onChange={(e) =>
            setEnrollmentData((prev: any) => ({
              ...prev,
              phoneNumber: e.target.value,
            }))
          }
          className={enrollmentErrors.phoneNumber ? "border-red-500" : ""}
        />
        {enrollmentErrors.phoneNumber && (
          <p className="text-sm text-red-500">{enrollmentErrors.phoneNumber}</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="email">{t("Email")} *</Label>
        <Input
          id="email"
          placeholder={t("Please enter your email")}
          type="email"
          value={enrollmentData.email}
          onChange={(e) =>
            setEnrollmentData((prev: any) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          className={enrollmentErrors.email ? "border-red-500" : ""}
        />
        {enrollmentErrors.email && (
          <p className="text-sm text-red-500">{enrollmentErrors.email}</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="password">{t("Password")} *</Label>
        <Input
          id="password"
          type="password"
          placeholder={t("Please enter your password")}
          value={enrollmentData.password}
          onChange={(e) =>
            setEnrollmentData((prev: any) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          className={enrollmentErrors.password ? "border-red-500" : ""}
        />
        {enrollmentErrors.password && (
          <p className="text-sm text-red-500">{enrollmentErrors.password}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <Label htmlFor="files">{t("Upload high school diploma")}</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Input
              id="files"
              type="file"
              multiple
              onChange={(e) =>
                setEnrollmentFiles(Array.from(e.target.files || []))
              }
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("files")?.click()}
            >
              {t("Choose Files")}
            </Button>
            {enrollmentFiles.length > 0 && (
              <div className="mt-2 text-sm text-black-tint-80">
                {enrollmentFiles.length} file(s) selected
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="files">{t("Upload ID photo")}</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Input
              id="files"
              type="file"
              multiple
              onChange={(e) =>
                setEnrollmentFiles(Array.from(e.target.files || []))
              }
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("files")?.click()}
            >
              {t("Choose Files")}
            </Button>
            {enrollmentFiles.length > 0 && (
              <div className="mt-2 text-sm text-black-tint-80">
                {enrollmentFiles.length} file(s) selected
              </div>
            )}
          </div>
        </div>
      </div>

      <Button
        onClick={handleStep1Next}
        className="w-full bg-main-primary hover:bg-p-shades-shade-80"
      >
        {t("Next Step")}
      </Button>
    </div>
  );
};

export default PersonalInfoForm;
