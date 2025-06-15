"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mergedSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(10, "رقم الجوال يجب أن يكون 10 أرقام على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  position: z.string().optional(),
  companyName: z.string().optional(),
  stationsCount: z.string().optional(),
  pumpsPerStation: z.string().optional(),
  nozzlesPerPump: z.string().optional(),
  tanksCount: z.string().optional(),
  wantDemo: z.string().optional(),
  message: z.string().optional(),
});

type MergedFormValues = z.infer<typeof mergedSchema>;

export default function MergedConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<MergedFormValues>({
    resolver: zodResolver(mergedSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      position: "",
      companyName: "",
      stationsCount: "",
      pumpsPerStation: "",
      nozzlesPerPump: "",
      tanksCount: "",
      wantDemo: "",
      message: "",
    },
  });

  async function onSubmit(data: MergedFormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error(result.error);
        alert("حدث خطأ أثناء إرسال النموذج");
      }
    } catch (error) {
      console.error("Failed to send:", error);
      alert("تعذر إرسال الطلب. حاول مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
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
        <CardTitle>اطلب استشارتك المجانية</CardTitle>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المنصب</FormLabel>
                    <FormControl>
                      <Input placeholder="مدير، مالك، مشرف..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم المنشأة</FormLabel>
                    <FormControl>
                      <Input placeholder="اسم المنشأة" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stationsCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>عدد المحطات</FormLabel>
                    <FormControl>
                      <Input placeholder="عدد المحطات" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pumpsPerStation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>عدد الطرمبات</FormLabel>
                    <FormControl>
                      <Input placeholder="عدد الطرمبات" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nozzlesPerPump"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>عدد اللي</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="عدد الخراطيم في كل طرمبة"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tanksCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>عدد الخزانات</FormLabel>
                    <FormControl>
                      <Input placeholder="عدد الخزانات" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wantDemo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>هل ترغب في حضور عرض توضيحي؟</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الخيار المناسب" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">نعم</SelectItem>
                        <SelectItem value="no">لا</SelectItem>
                        <SelectItem value="maybe">ربما لاحقاً</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>اترك رسالتك</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[120px]"
                        placeholder="رسالتك أو استفسارك..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-auto bg-[#2A4D8A] hover:bg-blue-900"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> جاري
                  الإرسال...
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
