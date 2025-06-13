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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  companyName: z.string().min(2, "اسم المنشأة مطلوب"),
  name: z.string().min(2, "الاسم مطلوب"),
  phone: z.string().min(10, "رقم الجوال يجب أن يكون 10 أرقام على الأقل"),
  position: z.string().optional(),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  wantDemo: z.string(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      companyName: "",
      name: "",
      phone: "",
      position: "",
      email: "",
      wantDemo: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Contact form data:", data);
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
            تم إرسال رسالتك بنجاح!
          </h3>
          <p className="text-gray-600">
            شكراً لتواصلك معنا، سنرد عليك في أقرب وقت ممكن
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>تواصل معنا</CardTitle>
        <CardDescription>نحن هنا للإجابة على جميع استفساراتك</CardDescription>
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
                      <FormLabel>المنصب</FormLabel>
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

              <FormField
                control={form.control}
                name="wantDemo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      هل ترغب في حضور عرض توضيحي لنظام جازتك؟
                    </FormLabel>
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
                        <SelectItem value="yes">
                          نعم، أرغب في حضور عرض توضيحي
                        </SelectItem>
                        <SelectItem value="no">
                          لا، أفضل التواصل الهاتفي
                        </SelectItem>
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
                  <FormItem>
                    <FormLabel>اترك رسالتك</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="أخبرنا عن احتياجاتك أو أي استفسارات لديك..."
                        className="min-h-[100px]"
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
              className="w-full mt-auto bg-green-600 hover:bg-green-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                "إرسال الرسالة"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
