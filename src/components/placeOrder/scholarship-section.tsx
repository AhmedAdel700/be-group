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
import { FileImage, FileText, File, Upload } from "lucide-react";

interface ScholarshipSectionProps {
  form: UseFormReturn<RegistrationFormData>;
}

export default function ScholarshipSection({ form }: ScholarshipSectionProps) {
  const hasDisability = form.watch("hasDisability");
  // Remove alert state, add loading state
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setLoading(true);
    try {
      const { fileUrl } = await uploadToBucket(file);
      form.setValue("disabilityDocument", fileUrl);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-slate-800">
        Scholarship Information
      </h3>

      <div className="space-y-4">
        <FormField
          control={form.control}
          name="hasDisability"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-medium">
                  Do you have disability information and wish to apply for the
                  &quot;Sanda Mohammad bin Salman&quot; Scholarship?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        {hasDisability && (
          <FormField
            control={form.control}
            name="disabilityDocument"
            render={({ field }) => (
              <FormItem className="ml-6">
                <FormLabel>Upload Disability Information Document</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      id="disabilityDocument"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          await handleFileUpload(file);
                        }
                      }}
                    />
                    <Card className="border-2 border-dashed border-slate-300 hover:border-secondary hover:bg-secondary/5 transition-all duration-200 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center flex-col gap-3 justify-center text-center">
                          <Upload className="h-8 w-8 text-main-primary flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-sm text-slate-600 hover:text-slate-800 font-medium">
                              Click anywhere to upload disability document
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              PDF or Images
                            </p>
                          </div>
                        </div>
                        {/* Only show the status div after a file is selected or uploading */}
                        {(loading || (typeof field.value === "string" && field.value)) && (
                          <div className="mt-3 p-2 bg-p-tints-tint-20 rounded-md flex items-center justify-center min-h-[40px]">
                            {loading ? (
                              <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-main-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                </svg>
                                <span>Uploading...</span>
                              </span>
                            ) : (typeof field.value === "string" && field.value && field.value.match(/\.(jpg|jpeg|png|webp)$/i)) ? (
                              <>
                                <FileImage className="h-6 w-6 text-main-primary" />
                                <span>File uploaded</span>
                              </>
                            ) : (typeof field.value === "string" && field.value && field.value.match(/\.pdf$/i)) ? (
                              <>
                                <FileText className="h-6 w-6 text-main-primary" />
                                <span>File uploaded</span>
                              </>
                            ) : (typeof field.value === "string" && field.value) ? (
                              <>
                                <File className="h-6 w-6 text-main-primary" />
                                <span>File uploaded</span>
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
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-medium">
                  Do you wish to apply and participate in the competition for
                  the &quot;Sanda Mohammad bin Salman&quot; Scholarship?
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4 pt-4 border-t">
        <h4 className="font-semibold text-slate-700">
          Acknowledgments (Required)
        </h4>

        <FormField
          control={form.control}
          name="applicationAcknowledgment"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <div className="flex flex-row items-start space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">
                    I acknowledge that applying for the scholarship does not
                    guarantee acceptance. *
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
              <div className="flex flex-row items-start space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">
                    I commit to providing a desktop or laptop computer for use
                    during the study period. *
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
              <div className="flex flex-row items-start space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">
                    I acknowledge the accuracy of all information entered and
                    take responsibility for any errors or omissions. *
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
              <div className="flex flex-row items-start space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">
                    I have read and agree to the general application conditions.
                    *
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
              <div className="flex flex-row items-start space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">
                    I acknowledge the necessity of showing my full face during
                    the proctored examination. *
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
