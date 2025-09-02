"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSchema = z.object({
  name: z.string().min(3, "Please Enter Your Full Name"),
  email: z.string().email("Enter A Valid Email"),
  message: z.string().min(50, "Message Should Be At Least 50 Characters"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

// ===== Motion settings =====
const easeOut = [0.22, 1, 0.36, 1] as const;

const sectionVar: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUpVar: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  });

  // Parallax-ish lift as the whole form scrolls into view
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 85%", "end 35%"], // tune reveal window
  });
  const yLift = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const fadeIn = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const onSubmit = (values: ContactFormValues) => {
    console.log("Contact form:", values);
  };

  return (
    <motion.div
      ref={wrapRef}
      style={{ y: yLift, opacity: fadeIn }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVar}
    >
      <Form {...form}>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
          variants={sectionVar}
        >
          {/* Name + Email */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={fadeUpVar}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <motion.div variants={fadeUpVar}>
                    <FormLabel className="text-white/90 text-base sm:text-lg">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Your Name"
                        className="
                          bg-transparent border-white/70 text-white
                          placeholder:text-white/40 placeholder:text-base
                          [&::placeholder]:transition-colors [&::placeholder]:duration-500
                          hover:[&::placeholder]:text-white focus:[&::placeholder]:text-white
                          h-14 rounded-[6px] cursor-target
                        "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </motion.div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <motion.div variants={fadeUpVar}>
                    <FormLabel className="text-white/90 text-base sm:text-lg">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter Your Email"
                        className="
                          bg-transparent border-white/70 text-white
                          placeholder:text-white/40 placeholder:text-base
                          [&::placeholder]:transition-colors [&::placeholder]:duration-500
                          hover:[&::placeholder]:text-white focus:[&::placeholder]:text-white
                          h-14 rounded-[6px] cursor-target
                        "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </motion.div>
                </FormItem>
              )}
            />
          </motion.div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <motion.div variants={fadeUpVar}>
                  <FormLabel className="text-white/90 text-base sm:text-lg">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={7}
                      placeholder="Enter Your Message"
                      className="
                        bg-transparent border-white/70 text-white
                        placeholder:text-white/40 placeholder:text-base
                        [&::placeholder]:transition-colors [&::placeholder]:duration-500
                        hover:[&::placeholder]:text-white focus:[&::placeholder]:text-white
                        resize-y rounded-[6px] cursor-target
                      "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </motion.div>
              </FormItem>
            )}
          />

          {/* Footer row */}
          <motion.div
            className="flex lg:justify-between flex-col lg:flex-row items-center gap-6 lg:gap-0"
            variants={fadeUpVar}
          >
            <motion.div
              className="flex items-center gap-2 text-sm text-white/70 lg:w-[45%]"
              variants={fadeUpVar}
            >
              <AlertCircle className="mt-0.5 h-5 w-5 text-main-primary shrink-0" />
              <p>
                <span className="font-medium">
                  All the fields are required.
                </span>{" "}
                By sending the form you agree to the{" "}
                <a href="/terms" className="underline hover:opacity-80">
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="underline hover:opacity-80">
                  Privacy Policy
                </a>
                .
              </p>
            </motion.div>

            {/* Subtle entrance + tap animation */}
            <motion.div variants={fadeUpVar}>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="cursor-target uppercase bg-main-primary text-main-text hover:bg-white/90 p-6 !rounded-[4px] w-full lg:w-auto"
                  variant="default"
                  disabled={
                    !form.formState.isValid && form.formState.isSubmitted
                  }
                >
                  Send Message
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.form>
      </Form>
    </motion.div>
  );
}
