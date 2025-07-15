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
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { RegistrationFormData } from "@/lib/validation-schema";
import { useLocale } from "next-intl";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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
  const locale = useLocale();
  interface Diploma {
    _id: string;
    title: string;
    titleAr: string;
  }

  const diplomas: Diploma[] = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.diplomas.diplomas?.data?.diplomas ?? []
  );
  const searchParams = useSearchParams();

  const diploma = searchParams.get("diploma");
  const [selectedDiploma, setSelectedDiploma] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (diploma) {
      setSelectedDiploma(diploma as string);
    }
  }, [diploma]);
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-slate-800">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="fullNameEn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name (English) *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Enter your full name in English"
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
              <FormLabel>Full Name (Arabic) *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ""}
                  placeholder="أدخل اسمك الكامل بالعربية"
                  dir="rtl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number *</FormLabel>
              <FormControl>
                <div className="flex">
                  <div className="flex items-center px-3 border border-main-primary rounded-l-md bg-slate-50">
                    <span className="text-sm font-medium">+966</span>
                  </div>
                  <Input
                    placeholder="501234567"
                    className="rounded-l-none border-l-0 focus:border-primary"
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
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password *</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter a strong password"
                  {...field}
                  value={field.value ?? ""}
                />
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
              <FormLabel>Confirm Password *</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="nationalId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>National ID *</FormLabel>
              <FormControl>
                <Input
                  placeholder="1234567890"
                  maxLength={10}
                  {...field}
                  value={field.value ?? ""}
                />
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
              <FormLabel>Nationality *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your nationality" />
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your city"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birthdate *</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
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
            <FormLabel>Gender *</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-row space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="male"
                    id="male"
                    className="border-main-primary text-p-tints-tint-50 data-[state=checked]:bg-p-tints-tint-50 data-[state=checked]:border-p-tints-tint-50"
                  />
                  <label htmlFor="male" className="cursor-pointer">
                    Male
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="female"
                    id="female"
                    className="border-main-primary text-p-tints-tint-50 data-[state=checked]:bg-p-tints-tint-50 data-[state=checked]:border-p-tints-tint-50"
                  />
                  <label htmlFor="female" className="cursor-pointer">
                    Female
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="diplomaChoice1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Diploma Choice *</FormLabel>
              <Select
                onValueChange={(value) =>
                  selectedDiploma
                    ? field.onChange(selectedDiploma)
                    : field.onChange(value)
                }
                value={selectedDiploma || field.value}
                disabled={selectedDiploma ? true : false}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your first diploma" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {diplomas.map((diploma) => (
                    <SelectItem key={diploma._id} value={diploma._id}>
                      {diploma.title}
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
              <FormLabel>Second Diploma Choice *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your second diploma" />
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
              <FormLabel>Third Diploma Choice *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your third diploma" />
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
  );
}
