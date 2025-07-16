"use client";

import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import type { RegistrationFormData } from "@/lib/validation-schema";
import { useState } from "react";
import { uploadToBucket } from "@/utils/upload";
import { FileImage, FileText, File } from "lucide-react";
import UploadCloud from "@/app/assets/upload-cloud.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ScholarshipSectionProps {
  form: UseFormReturn<RegistrationFormData>;
}

export default function ScholarshipSection({ form }: ScholarshipSectionProps) {
  const t = useTranslations('register');
  const hasDisability = form.watch("hasDisability");
  // Remove alert state, add loading state
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setLoading(true);
    try {
      const { fileUrl } = await uploadToBucket(file);
      form.setValue("proofOfDisability", fileUrl);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[32px] font-bold text-black-tint-90 mb-8 mt-3">
        {t("scholarshipInfoTitle")}
      </h3>

      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-black-tint-90 text-lg">
          {t("acknowledgmentsTitle")}
        </h4>
        <FormField
          control={form.control}
          name="hasDisability"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-base font-medium">
                  {t("disabilityQuestion")}
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        {hasDisability && (
          <FormField
            control={form.control}
            name="proofOfDisability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("disabilityUploadLabel")}
                  {hasDisability && <span className="text-red-500">*</span>}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      id="proofOfDisability"
                      required={!!hasDisability}
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          await handleFileUpload(file);
                        }
                      }}
                    />
                    <Card className="border-2 border-solid border-s-tints-tint-15 min-h-[200px] w-full transition-all duration-200 cursor-pointer shadow-none rounded-[6px] flex items-center justify-center">
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
                              {t("clickToUpload")}
                            </p>
                            <p className="text-sm text-[#6A6A6A] mt-1">
                              {t("uploadFileHelp")}
                            </p>
                          </div>
                        </div>
                        {/* Only show the status div after a file is selected or uploading */}
                        {(loading ||
                          (typeof field.value === "string" && field.value)) && (
                          <div className="mt-3 p-2 bg-p-tints-tint-20 rounded-md flex items-center justify-center min-h-[40px]">
                            {loading ? (
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
                                <span>{t("uploading")}</span>
                              </span>
                            ) : typeof field.value === "string" &&
                              field.value &&
                              field.value.match(/\.(jpg|jpeg|png|webp)$/i) ? (
                              <>
                                <FileImage className="h-6 w-6 text-main-primary" />
                                <span>{t("fileUploaded")}</span>
                              </>
                            ) : typeof field.value === "string" &&
                              field.value &&
                              field.value.match(/\.pdf$/i) ? (
                              <>
                                <FileText className="h-6 w-6 text-main-primary" />
                                <span>{t("fileUploaded")}</span>
                              </>
                            ) : typeof field.value === "string" &&
                              field.value ? (
                              <>
                                <File className="h-6 w-6 text-main-primary" />
                                <span>{t("fileUploaded")}</span>
                              </>
                            ) : null}
                            <span className="sr-only">File uploaded</span>
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
        )}

        <FormField
          control={form.control}
          name="scholarshipParticipation"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-base font-medium">
                  {t("scholarshipParticipationQuestion")}
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4 pt-4">
        <h4 className="font-bold text-black-tint-90 text-lg">
          {t("Terms and Conditions Acknowledgement")}
        </h4>

        <FormField
          control={form.control}
          name="applicationAcknowledgment"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex flex-row items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-base font-medium">
                    {t("applicationAcknowledgment")}
                  </FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="computerProvision"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex flex-row items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-base font-medium">
                    {t("computerProvision")}
                  </FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="informationAccuracy"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex flex-row items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-base font-medium">
                    {t("informationAccuracy")}
                  </FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="generalConditions"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex flex-row items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-base font-medium">
                    {t("generalConditions")}
                  </FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="proctoringAcknowledgment"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex flex-row items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-base font-medium">
                    {t("proctoringAcknowledgment")}
                  </FormLabel>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
