/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface PersonalInfoFormProps {
  enrollmentData: any;
  setEnrollmentData: React.Dispatch<React.SetStateAction<any>>;
  enrollmentErrors: Record<string, string>;
  highSchoolDiplomaFile: File | null;
  setHighSchoolDiplomaFile: React.Dispatch<React.SetStateAction<File | null>>;
  idPhotoFile: File | null;
  setIdPhotoFile: React.Dispatch<React.SetStateAction<File | null>>;
  studentImageFile: File | null;
  setStudentImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleStep1Next: () => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  enrollmentData,
  setEnrollmentData,
  enrollmentErrors,
  highSchoolDiplomaFile,
  setHighSchoolDiplomaFile,
  idPhotoFile,
  setIdPhotoFile,
  studentImageFile,
  setStudentImageFile,
  handleStep1Next,
}) => {
  const t = useTranslations("enroll");
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-main-primary">
        {t("Personal Information")}
      </h3>
      <div className="flex flex-col gap-4">
        <Label htmlFor="firstName">
          {t("Full name")}{" "}
          <span className="text-p-tints-tint-80 text-xs">
            {locale === "en" && t("(Enter the first four names)")}
          </span>{" "}
          *
        </Label>
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
      {/* High School Diploma - its own row */}
      <div className="flex flex-col gap-4">
        <Label htmlFor="highSchoolDiplomaFile">
          {t("Upload high school diploma")}
        </Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <Input
            id="highSchoolDiplomaFile"
            type="file"
            onChange={(e) =>
              setHighSchoolDiplomaFile(e.target.files?.[0] || null)
            }
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              document.getElementById("highSchoolDiplomaFile")?.click()
            }
          >
            {t("Choose File")}
          </Button>
          {highSchoolDiplomaFile && (
            <div className="mt-2 text-sm text-black-tint-80">
              {highSchoolDiplomaFile.name}
            </div>
          )}
          {enrollmentErrors.highSchoolDiplomaFile && (
            <p className="text-sm text-red-500">
              {enrollmentErrors.highSchoolDiplomaFile}
            </p>
          )}
        </div>
      </div>
      {/* ID Photo and Student Image - same row on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        <div className="flex flex-col gap-4">
          <Label htmlFor="idPhotoFile">{t("Upload ID photo")}</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Input
              id="idPhotoFile"
              type="file"
              onChange={(e) => setIdPhotoFile(e.target.files?.[0] || null)}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => document.getElementById("idPhotoFile")?.click()}
            >
              {t("Choose File")}
            </Button>
            {idPhotoFile && (
              <div className="mt-2 text-sm text-black-tint-80">
                {idPhotoFile.name}
              </div>
            )}
            {enrollmentErrors.idPhotoFile && (
              <p className="text-sm text-red-500">
                {enrollmentErrors.idPhotoFile}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="studentImageFile">{t("Upload Student Image")}</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Input
              id="studentImageFile"
              type="file"
              onChange={(e) => setStudentImageFile(e.target.files?.[0] || null)}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                document.getElementById("studentImageFile")?.click()
              }
            >
              {t("Choose File")}
            </Button>
            {studentImageFile && (
              <div className="mt-2 text-sm text-black-tint-80">
                {studentImageFile.name}
              </div>
            )}
            {enrollmentErrors.studentImageFile && (
              <p className="text-sm text-red-500">
                {enrollmentErrors.studentImageFile}
              </p>
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
