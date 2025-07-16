"use client";

import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { FileImage, FileText, File } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validation-schema";
import { useState } from "react";
import { uploadToBucket } from "@/utils/upload";
import UploadCloud from '@/app/assets/upload-cloud.svg';
import Image from "next/image";
import { useTranslations } from 'next-intl';

interface UploadSectionProps {
  form: UseFormReturn<RegistrationFormData>;
}

const uploadFields = [
  {
    name: "studentPicture" as const,
    label: "Student Image",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  {
    name: "highSchoolCertificate" as const,
    label: "High School Diploma",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  {
    name: "studentIdentity" as const,
    label: "ID Photo",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  {
    name: "employerApproval" as const,
    label: "Employer Approval Photo",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
];

export default function UploadSection({ form }: UploadSectionProps) {
  // Track loading state for each field
  const [loadingField, setLoadingField] = useState<string | null>(null);
  const t = useTranslations('register');

  const handleFileUpload = async (
    file: File,
    fieldName: keyof RegistrationFormData
  ) => {
    setLoadingField(fieldName);
    try {
      const { fileUrl } = await uploadToBucket(file);
      form.setValue(fieldName, fileUrl);
    } finally {
      setLoadingField(null);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-[32px] font-bold text-black-tint-90">{t('uploadDocumentTitle')}</h3>
      {/* Removed Alert component */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {uploadFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{
                   field.name === 'employerApproval'
                     ? t('employerApprovalPhotoLabel')
                     : t(field.name + 'Label')
                 } *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="file"
                      accept={field.accept}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      id={field.name}
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          await handleFileUpload(file, field.name);
                        }
                      }}
                    />
                    <Card className="border-2 border-solid border-s-tints-tint-15 min-h-[200px] w-full md:w-[362px] transition-all duration-200 cursor-pointer shadow-none rounded-[6px] flex items-center justify-center">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center justify-center gap-4">
                          <div className="border border-[#E9E9E9] rounded-[8px] p-3">
                            <Image
                              src={UploadCloud}
                              alt="Upload Icon"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-main-primary font-semibold">
                              {t('clickToUpload')}
                            </p>
                            <p className="text-sm text-[#6A6A6A] mt-1">
                              {t('uploadFileHelp')}
                            </p>
                          </div>
                        </div>

                        {(loadingField === field.name ||
                          (typeof formField.value === "string" &&
                            formField.value)) && (
                          <div className="mt-3 p-2 bg-p-tints-tint-20 rounded-md flex items-center justify-center min-h-[40px]">
                            {loadingField === field.name ? (
                              <span className="flex items-center gap-2">
                                <svg
                                  className="animate-spin h-5 w-5 text-main-primary"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8z"
                                  ></path>
                                </svg>
                                <span>{t('uploading')}</span>
                              </span>
                            ) : formField.value.match(
                                /\.(jpg|jpeg|png|webp)$/i
                              ) ? (
                              <div className="flex items-center gap-1">
                                <FileImage className="h-6 w-6 text-main-primary" />
                                <span>{t('fileUploaded')}</span>
                              </div>
                            ) : formField.value.match(/\.pdf$/i) ? (
                              <div className="flex items-center gap-1">
                                <FileText className="h-6 w-6 text-main-primary" />
                                <span>{t('fileUploaded')}</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1">
                                <File className="h-6 w-6 text-main-primary" />
                                <span>{t('fileUploaded')}</span>
                              </div>
                            )}
                            <span className="sr-only">{t('fileUploaded')}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
}
