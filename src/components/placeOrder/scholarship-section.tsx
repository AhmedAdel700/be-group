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
import { Upload } from "lucide-react";
import type { RegistrationFormData } from "@/lib/validation-schema";

interface ScholarshipSectionProps {
  form: UseFormReturn<RegistrationFormData>;
}

export default function ScholarshipSection({ form }: ScholarshipSectionProps) {
  const hasDisability = form.watch("hasDisability");

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
                  "Sanda Mohammad bin Salman" Scholarship?
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
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
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
                        {field.value && (
                          <div className="mt-3 p-2 bg-p-tints-tint-20 rounded-md">
                            <p className="text-sm text-main-primary font-medium flex items-center justify-center text-center gap-2">
                              <span className="text-main-primary">✓</span>
                              {(field.value as File).name}
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
                  the "Sanda Mohammad bin Salman" Scholarship?
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
