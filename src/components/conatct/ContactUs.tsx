"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Mail, Smartphone } from "lucide-react";
import ContactForm from "./ContactForm";
import { motion, type Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ContactDataTypes, ContactSectionTypes } from "@/types/apiDataTypes";
import ModernTextEffect from "../ModernTextEffect";

// ===== Easing / shared timing =====
const easeOut = [0.22, 1, 0.36, 1] as const;

// ===== Variants =====
const containerVar: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const leftInSpring: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.7 },
  },
};

const rightInSpring: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.7 },
  },
};

const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0 round 8px)" },
  show: {
    clipPath: "inset(0 0 0% 0 round 8px)",
    transition: { duration: 0.8, ease: easeOut },
  },
};

const scaleIn: Variants = {
  hidden: { scale: 1.06, opacity: 0.8 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const popBlurIn: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function ContactUs({
  contactData,
  contactSection,
}: {
  contactData: ContactDataTypes;
  contactSection: ContactSectionTypes;
}) {
  const t = useTranslations("contact");
  const locale = useLocale();

  // ===== Client mount check for hydration-safe HTML =====
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="contact-us"
      className="w-full min-h-fit xl:min-h-screen bg-main-black2 text-main-white border-b border-white/10 px-4 py-10 xl:py-24"
    >
      <motion.div
        className="flex flex-col gap-8 xl:gap-20 justify-start items-center container mx-auto"
        variants={containerVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Top row with text + image */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-28 items-start w-full">
          {/* Text column */}
          <motion.div
            className="w-full xl:w-[30%] flex flex-col gap-8"
            variants={leftInSpring}
          >
            <h2 className="text-7xl capitalize text-center sm:text-start">
              <h2 className="text-7xl capitalize text-center sm:text-start">
                {(() => {
                  const [firstWord, ...rest] = contactSection.title.split(" ");
                  return (
                    <>
                      <ModernTextEffect
                        text={firstWord}
                        lang={locale}
                        animationType={
                          locale === "ar" ? "wordWave" : "particle"
                        }
                        delay={0.1}
                        fontStyle="uppercase"
                        className="text-main-primary inline-block"
                      />{" "}
                      <ModernTextEffect
                        text={rest.join(" ")}
                        lang={locale}
                        animationType={
                          locale === "ar" ? "wordWave" : "particle"
                        }
                        delay={0.2}
                        fontStyle="uppercase"
                        className="inline-block"
                      />
                    </>
                  );
                })()}
              </h2>
            </h2>

            {mounted && contactSection?.long_desc && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-white/80 text-center sm:text-start"
                dangerouslySetInnerHTML={{ __html: contactSection.long_desc }}
              />
            )}

            {mounted && contactSection?.short_desc && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 text-center sm:text-start"
                dangerouslySetInnerHTML={{ __html: contactSection.short_desc }}
              />
            )}
          </motion.div>

          {/* Image column */}
          <motion.div
            className="w-full xl:w-[70%] h-[450px] rounded-[8px] overflow-hidden will-change-[clip-path]"
            variants={rightInSpring}
            style={{ contain: "paint" }}
          >
            <motion.div variants={maskReveal}>
              <motion.div variants={scaleIn}>
                <div className="relative w-full h-[450px] rounded-[8px] overflow-hidden">
                  <Image
                    src={contactSection?.image}
                    alt={contactSection?.alt_image || t("Contact us image")}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[8px]"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex flex-col xl:flex-row gap-8 xl:gap-28 w-full items-stretch"
          variants={containerVar}
        >
          {/* Contact Info */}
          <motion.div
            className="w-full xl:w-[30%] border border-white/30 rounded-lg overflow-hidden"
            variants={popBlurIn}
            inherit={false}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="grid grid-rows-3 grid-cols-[30%_70%] divide-x divide-y divide-white/30 text-white relative h-full min-h-[240px]">
              {/* Divider (LTR/RTL) */}
              {locale === "en" ? (
                <span className="pointer-events-none absolute top-0 bottom-0 left-[30%] w-px bg-white/30" />
              ) : (
                <span className="pointer-events-none absolute top-0 bottom-0 right-[30%] w-px bg-white/30" />
              )}

              {/* Address */}
              <motion.div
                className="flex justify-center items-center p-4"
                variants={popBlurIn}
              >
                <motion.div
                  whileInView={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MapPin size={28} className="text-main-primary" />
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center p-4 text-lg"
                variants={popBlurIn}
              >
                {contactData?.address ||
                  t("25 Asmaa Fahmy, Ard El Golf, Heliopolis, Cairo, Egypt")}
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex justify-center items-center p-4"
                variants={popBlurIn}
              >
                <motion.div
                  whileInView={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  <Mail size={28} className="text-main-primary" />
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center p-4 text-lg"
                variants={popBlurIn}
              >
                {contactData?.email || "info@begroup.com"}
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex justify-center items-center p-4"
                variants={popBlurIn}
              >
                <motion.div
                  whileInView={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                >
                  <Smartphone size={28} className="text-main-primary" />
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center p-4 text-lg"
                variants={popBlurIn}
              >
                <span dir="ltr">
                  {contactData?.phone || "+20 100 995 7000"}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="w-full xl:w-[70%]" variants={popBlurIn}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
