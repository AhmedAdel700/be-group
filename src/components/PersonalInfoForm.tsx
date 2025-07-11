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
    <div className="space-y-4 mt-4">
      <h3 className="font-semibold text-[#001C71]">
        {t("Personal Information")}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">{t("First Name")} *</Label>
          <Input
            id="firstName"
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
        <div>
          <Label htmlFor="middleName">{t("Middle Name")}</Label>
          <Input
            id="middleName"
            value={enrollmentData.middleName}
            onChange={(e) =>
              setEnrollmentData((prev: any) => ({
                ...prev,
                middleName: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div>
        <Label htmlFor="lastName">{t("Last Name")} *</Label>
        <Input
          id="lastName"
          value={enrollmentData.lastName}
          onChange={(e) =>
            setEnrollmentData((prev: any) => ({
              ...prev,
              lastName: e.target.value,
            }))
          }
          className={enrollmentErrors.lastName ? "border-red-500" : ""}
        />
        {enrollmentErrors.lastName && (
          <p className="text-sm text-red-500">{enrollmentErrors.lastName}</p>
        )}
      </div>
      <div>
        <Label htmlFor="nationalId">{t("National ID")} *</Label>
        <Input
          id="nationalId"
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
      <div>
        <Label htmlFor="phoneNumber">{t("Phone Number")} *</Label>
        <Input
          id="phoneNumber"
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
      <div>
        <Label htmlFor="email">{t("Email")} *</Label>
        <Input
          id="email"
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
      <div>
        <Label htmlFor="password">{t("Password")} *</Label>
        <Input
          id="password"
          type="password"
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
      <div>
        <Label htmlFor="files">{t("Upload Documents")}</Label>
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
            <div className="mt-2 text-sm text-gray-600">
              {enrollmentFiles.length} file(s) selected
            </div>
          )}
        </div>
      </div>
      <Button
        onClick={handleStep1Next}
        className="w-full bg-[#001C71] hover:bg-[#001C71]/90"
      >
        {t("Next Step")}
      </Button>
    </div>
  );
};

export default PersonalInfoForm;
