"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
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
import { useState } from "react";
import { Loader2 } from "lucide-react";

const consultationSchema = z.object({
  companyName: z.string().min(2, "اسم المنشأة مطلوب"),
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(10, "رقم الجوال يجب أن يكون 10 أرقام على الأقل"),
  position: z.string().min(2, "المنصب مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  stationsCount: z.string().min(1, "عدد المحطات مطلوب"),
  pumpsPerStation: z.string().min(1, "عدد الطرمبات مطلوب"),
  nozzlesPerPump: z.string().min(1, "عدد الخراطيم مطلوب"),
  tanksCount: z.string().min(1, "عدد الخزانات مطلوب"),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      companyName: "",
      name: "",
      phone: "",
      position: "",
      email: "",
      stationsCount: "",
      pumpsPerStation: "",
      nozzlesPerPump: "",
      tanksCount: "",
    },
  });

  async function onSubmit(data: ConsultationFormValues) {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Consultation form data:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    form.reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  if (isSubmitted) {
    return (
      <Card className="h-full">
        <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
          <div className="text-green-600 text-6xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            تم إرسال طلبك بنجاح!
          </h3>
          <p className="text-gray-600">
            سنتواصل معك خلال 24 ساعة لتحديد موعد الاستشارة المجانية
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>طلب استشارة مجانية</CardTitle>
        <CardDescription>
          املأ النموذج وسنتواصل معك خلال 24 ساعة
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col flex-grow"
          >
            <div className="flex-grow space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>اسم المنشأة *</FormLabel>
                      <FormControl>
                        <Input placeholder="أدخل اسم المنشأة" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الاسم *</FormLabel>
                      <FormControl>
                        <Input placeholder="أدخل اسمك الكامل" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رقم الجوال *</FormLabel>
                      <FormControl>
                        <Input placeholder="05xxxxxxxx" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>المنصب *</FormLabel>
                      <FormControl>
                        <Input placeholder="مدير، مالك، مشرف..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد الإلكتروني *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@domain.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="stationsCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>عدد المحطات *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر عدد المحطات" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">محطة واحدة</SelectItem>
                          <SelectItem value="2">محطتان</SelectItem>
                          <SelectItem value="3">3 محطات</SelectItem>
                          <SelectItem value="4">4 محطات</SelectItem>
                          <SelectItem value="5">5 محطات</SelectItem>
                          <SelectItem value="6">6 محطات</SelectItem>
                          <SelectItem value="7">7 محطات</SelectItem>
                          <SelectItem value="more">أكثر من 7 محطات</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pumpsPerStation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>عدد الطرمبات داخل المحطة الواحدة *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر عدد الطرمبات" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="2">2 طرمبات</SelectItem>
                          <SelectItem value="4">4 طرمبات</SelectItem>
                          <SelectItem value="6">6 طرمبات</SelectItem>
                          <SelectItem value="8">8 طرمبات</SelectItem>
                          <SelectItem value="10">10 طرمبات</SelectItem>
                          <SelectItem value="12">12 طرمبة</SelectItem>
                          <SelectItem value="more">أكثر من 12 طرمبة</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nozzlesPerPump"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>العدد في كل طرمبة *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="أختر عدد اللي" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="2">2 خراطيم</SelectItem>
                          <SelectItem value="3">3 خراطيم</SelectItem>
                          <SelectItem value="4">4 خراطيم</SelectItem>
                          <SelectItem value="6">6 خراطيم</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tanksCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>عدد الخزانات *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر عدد الخزانات" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="2">2 خزانات</SelectItem>
                          <SelectItem value="3">3 خزانات</SelectItem>
                          <SelectItem value="4">4 خزانات</SelectItem>
                          <SelectItem value="6">6 خزانات</SelectItem>
                          <SelectItem value="8">8 خزانات</SelectItem>
                          <SelectItem value="more">أكثر من 8 خزانات</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-auto bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                "اطلب استشارتك المجانية"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
