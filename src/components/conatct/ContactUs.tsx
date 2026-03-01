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
        {/* ── Header: centred title + description ── */}
        <motion.div
          className="w-full flex flex-col gap-4 items-center text-center"
          variants={leftInSpring}
        >
          <h2 className="text-7xl capitalize">
            {(() => {
              const [firstWord, ...rest] = contactSection.title.split(" ");
              return (
                <>
                  <ModernTextEffect
                    text={firstWord}
                    lang={locale}
                    animationType={locale === "ar" ? "wordWave" : "particle"}
                    delay={0.1}
                    fontStyle="uppercase"
                    className="text-main-primary inline-block"
                  />{" "}
                  <ModernTextEffect
                    text={rest.join(" ")}
                    lang={locale}
                    animationType={locale === "ar" ? "wordWave" : "particle"}
                    delay={0.2}
                    fontStyle="uppercase"
                    className="inline-block"
                  />
                </>
              );
            })()}
          </h2>

          {mounted && contactSection?.long_desc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/80 max-w-2xl"
              dangerouslySetInnerHTML={{ __html: contactSection.long_desc }}
            />
          )}

          {mounted && contactSection?.short_desc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 max-w-2xl"
              dangerouslySetInnerHTML={{ __html: contactSection.short_desc }}
            />
          )}
        </motion.div>

        {/* ── Main row: Form (start) | Info + Map (end) ── */}
        <motion.div
          className="flex flex-col xl:flex-row gap-8 xl:gap-16 w-full items-stretch"
          variants={containerVar}
        >
          {/* Contact Form */}
          <motion.div
            className="w-full xl:w-[55%]"
            variants={leftInSpring}
            inherit={false}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Right column: Info cards + Map — stretches to form height */}
          <motion.div
            className="w-full xl:w-[45%] flex flex-col gap-4 xl:self-stretch xl:mt-[30px]"
            variants={rightInSpring}
            inherit={false}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ── Info cards ── */}
            {[
              {
                icon: <MapPin size={26} />,
                label: t("Address"),
                value: (
                  <span>
                    {contactData?.address ||
                      t(
                        "25 Asmaa Fahmy, Ard El Golf, Heliopolis, Cairo, Egypt"
                      )}
                  </span>
                ),
                delay: 0,
              },
              {
                icon: <Mail size={26} />,
                label: t("Email"),
                value: (
                  <a
                    href={`mailto:${contactData?.email || "info@begroup.com"}`}
                    className="hover:text-main-primary transition-colors"
                  >
                    {contactData?.email || "info@begroup.com"}
                  </a>
                ),
                delay: 0.1,
              },
              {
                icon: <Smartphone size={26} />,
                label: t("Phone"),
                value: (
                  <a
                    href={`tel:${contactData?.phone || "+201009957000"}`}
                    className="hover:text-main-primary transition-colors"
                    dir="ltr"
                  >
                    {contactData?.phone || "+20 100 995 7000"}
                  </a>
                ),
                delay: 0.2,
              },
            ].map(({ icon, label, value, delay }) => (
              <motion.div
                key={label}
                variants={popBlurIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay }}
                className="flex items-center gap-5 px-5 py-4 rounded-xl border border-white/10 border-s-2 border-s-main-primary bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 group"
              >
                {/* Icon — bare with accent colour + soft glow */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                  className="shrink-0 text-main-primary"
                  style={{
                    filter:
                      "drop-shadow(0 0 6px color-mix(in srgb, var(--color-main-primary, #d4af37) 55%, transparent))",
                  }}
                >
                  {icon}
                </motion.div>

                {/* Text */}
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-widest text-main-primary/70">
                    {label}
                  </span>
                  <span className="text-sm sm:text-base text-white/85 leading-snug break-words">
                    {value}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* ── Google Map — fills remaining height ── */}
            <motion.div
              className="relative w-full flex-1 min-h-[280px] max-h-[300px] xl:max-h-none rounded-xl overflow-hidden border border-white/10 ring-1 ring-white/5"
              variants={popBlurIn}
            >
              {/* subtle gradient overlay on top edge for blending */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-main-black2/60 to-transparent z-10" />
              <iframe
                title="BE Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.6!2d31.3397!3d30.0911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79468d5b5b0e0!2s25%20Asmaa%20Fahmy%2C%20Heliopolis%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                className="absolute inset-0 w-full h-full"
                height="280"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Full-width image – last item ── */}
        {/* Outer: glow ring — NO overflow-hidden / contain so box-shadow renders freely */}
        <motion.div
          className="w-full rounded-[8px]"
          inherit={false}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          animate={{
            boxShadow: [
              "0 0 0 1px rgba(241,138,29,0.5), 0 0 20px 4px rgba(241,138,29,0.25)",
              "0 0 0 1px rgba(241,138,29,0.8), 0 0 40px 10px rgba(241,138,29,0.45)",
              "0 0 0 1px rgba(241,138,29,0.5), 0 0 20px 4px rgba(241,138,29,0.25)",
            ],
          }}
          transition={{
            boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 },
          }}
        >
          {/* Inner: clip + scale reveal */}
          <motion.div
            className="w-full h-[450px] rounded-[8px] overflow-hidden"
            variants={maskReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={scaleIn} className="w-full h-full">
              <img
                src={contactSection?.image}
                alt={contactSection?.alt_image || t("Contact us image")}
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
