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
import { Upload } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validation-schema";

interface UploadSectionProps {
  form: UseFormReturn<RegistrationFormData>;
}

const uploadFields = [
  { name: "studentImage" as const, label: "Student Image", accept: "image/*" },
  {
    name: "highSchoolDiploma" as const,
    label: "High School Diploma",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  { name: "idPhoto" as const, label: "ID Photo", accept: "image/*" },
  {
    name: "employerApproval" as const,
    label: "Employer Approval Photo",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
];

export default function UploadSection({ form }: UploadSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-slate-800">Document Uploads</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {uploadFields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label} *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="file"
                      accept={field.accept}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      id={field.name}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          formField.onChange(file);
                        }
                      }}
                    />
                    <Card className="border-2 border-dashed border-slate-300 hover:border-secondary hover:bg-secondary/5 transition-all duration-200 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <Upload className="h-8 w-8 text-main-primary" />
                          <div className="text-center">
                            <p className="text-sm text-slate-600 hover:text-slate-800 font-medium">
                              Click anywhere to upload{" "}
                              {field.label.toLowerCase()}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              {field.accept.includes("image")
                                ? "Images only"
                                : "PDF or Images"}
                            </p>
                          </div>
                        </div>
                        {formField.value && (
                          <div className="mt-3 p-2 bg-p-tints-tint-20 rounded-md">
                            <p className="text-sm text-main-primary font-medium text-center flex items-center justify-center gap-2">
                              <span className="text-main-primary">✓</span>
                              {(formField.value as File).name}
                            </p>
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
