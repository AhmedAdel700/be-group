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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { RegistrationFormData } from "@/lib/validation-schema";
import { useLocale, useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import SAFlag from '@/app/assets/SAFlag.svg';
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

interface PersonalInfoSectionProps {
  form: UseFormReturn<RegistrationFormData>;
}

const nationalities = [
  "Saudi Arabian",
  "Egyptian",
  "Jordanian",
  "Lebanese",
  "Syrian",
  "Iraqi",
  "Kuwaiti",
  "Emirati",
  "Qatari",
  "Bahraini",
  "Omani",
  "Yemeni",
  "Other",
];

export default function PersonalInfoSection({
  form,
}: PersonalInfoSectionProps) {
  const t = useTranslations("register");
  interface Diploma {
    _id: string;
    title: string;
    titleAr: string;
  }

  const locale = useLocale();

  const diplomas: Diploma[] = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.diplomas.diplomas?.data?.diplomas ?? []
  );
  const searchParams = useSearchParams();

  const diploma = searchParams.get("diploma");
  const [selectedDiploma, setSelectedDiploma] = useState<string | undefined>(
    undefined
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (diploma) {
      setSelectedDiploma(diploma as string);
    }
  }, [diploma]);

  return (
    <div className="w-full flex flex-col gap-10 mt-2">
      <h3 className="text-2xl font-bold text-black-tint-90">
        {t("personalInfo")}
      </h3>

      <div className="w-full flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("fullNameEnLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value ?? ""}
                    placeholder={t("fullNameEnPlaceholder")}
                    className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullNameAr"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("fullNameArLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value ?? ""}
                    placeholder={t("fullNameArPlaceholder")}
                    className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("emailLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    {...field}
                    value={field.value ?? ""}
                    className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => {
              const isRTL = locale === "ar";

              return (
                <FormItem>
                  <FormLabel className="text-base font-medium text-black-tint-90">
                    {t("phoneLabel")}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      {/* Flag inside input */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 pointer-events-none bg-[#F2F4F5] py-[14px] px-3 rounded-s-md p-2 ${
                          isRTL ? "right-[0.6px]" : "left-[0.6px]"
                        }`}
                      >
                        <Image
                          src={SAFlag}
                          alt="SA Flag"
                          width={24}
                          height={18}
                          className="rounded"
                        />
                      </div>

                      <Input
                        placeholder={t("phonePlaceholder")}
                        dir="ltr"
                        className={`h-12 shadow-none text-sm font-medium placeholder:text-black-tint-50 border border-s-tints-tint-15 rounded-[8px]
                          ${
                            isRTL
                              ? "text-right pe-[55px]"
                              : "text-left ps-[55px]"
                          }`}
                        {...field}
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          field.onChange(value);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("passwordLabel")}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={t("passwordPlaceholder")}
                      dir={locale === "en" ? "ltr" : "rtl"}
                      {...field}
                      value={field.value ?? ""}
                      className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none ${locale === "ar" ? "left-3" : "right-3"}`}
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("confirmPasswordLabel")}
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder={t("confirmPasswordPlaceholder")}
                      dir={locale === "en" ? "ltr" : "rtl"}
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) => {
                        field.onChange(e);
                        form.trigger("confirmPassword");
                      }}
                      className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none ${locale === "ar" ? "left-3" : "right-3"}`}
                      onClick={() => setShowConfirmPassword((v) => !v)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("nationalityLabel")}
                </FormLabel>
                <Select
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      dir={locale === "ar" ? "rtl" : "ltr"}
                      className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                    >
                      <SelectValue placeholder={t("nationalityPlaceholder")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {nationalities.map((nationality) => (
                      <SelectItem key={nationality} value={nationality}>
                        {nationality}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationalNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("nationalIdLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("nationalIdPlaceholder")}
                    maxLength={10}
                    {...field}
                    value={field.value ?? ""}
                    className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("cityLabel")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("cityPlaceholder")}
                    {...field}
                    value={field.value ?? ""}
                    className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("birthdateLabel")}
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>{t("birthdatePlaceholder")}</span>
                        )}
                        <ChevronDownIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0"
                    align="start"
                    dir={locale === "ar" ? "rtl" : "ltr"}
                  >
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      captionLayout="dropdown"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-black-tint-90">
                {t("genderLabel")}
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row gap-20"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="male"
                      id="male"
                      className="w-5 h-5 border-[#AEAEB2] data-[state=checked]:bg-main-primary data-[state=checked]:border-main-primary"
                    />
                    <label htmlFor="male" className="cursor-pointer">
                      {t("male")}
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="female"
                      id="female"
                      className="w-5 h-5 border-[#AEAEB2] data-[state=checked]:bg-main-primary data-[state=checked]:border-main-primary"
                    />
                    <label htmlFor="female" className="cursor-pointer">
                      {t("female")}
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* High-School Degree Field */}
        <FormField
          control={form.control}
          name="highSchoolDegree"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-black-tint-90">
                {t("highSchoolDegreeLabel")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t("highSchoolDegreePlaceholder")}
                  {...field}
                  value={field.value ?? ""}
                  className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Graduation Year Field */}
        <FormField
          control={form.control}
          name="graduationYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-black-tint-90">
                {t("graduationYearLabel")}
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder={t("graduationYearPlaceholder")}
                  {...field}
                  value={field.value ?? ""}
                  className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                  maxLength={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="diplomaChoice1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("diplomaChoice1Label")}
                </FormLabel>
                <Select
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  onValueChange={(value) =>
                    selectedDiploma
                      ? field.onChange(selectedDiploma)
                      : field.onChange(value)
                  }
                  value={selectedDiploma || field.value}
                  disabled={selectedDiploma ? true : false}
                >
                  <FormControl>
                    <SelectTrigger
                      dir={locale === "ar" ? "rtl" : "ltr"}
                      className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                    >
                      <SelectValue
                        placeholder={t("diplomaChoice1Placeholder")}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {diplomas.map((diploma) => (
                      <SelectItem key={diploma._id} value={diploma._id}>
                        {locale === "ar" ? diploma.titleAr : diploma.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="diplomaChoice2"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("diplomaChoice2Label")}
                </FormLabel>
                <Select
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      dir={locale === "ar" ? "rtl" : "ltr"}
                      className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                    >
                      <SelectValue
                        placeholder={t("diplomaChoice2Placeholder")}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {diplomas.map((diploma) => (
                      <SelectItem key={diploma._id} value={diploma._id}>
                        {locale === "ar" ? diploma.titleAr : diploma.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="diplomaChoice3"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-black-tint-90">
                  {t("diplomaChoice3Label")}
                </FormLabel>
                <Select
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      dir={locale === "ar" ? "rtl" : "ltr"}
                      className="border-s-tints-tint-15 h-12 rounded-[8px] shadow-none placeholder:font-medium placeholder:text-sm placeholder:text-black-tint-50"
                    >
                      <SelectValue
                        placeholder={t("diplomaChoice3Placeholder")}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {diplomas.map((diploma) => (
                      <SelectItem key={diploma._id} value={diploma._id}>
                        {locale === "ar" ? diploma.titleAr : diploma.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
