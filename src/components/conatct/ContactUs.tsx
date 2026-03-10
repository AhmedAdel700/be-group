"use client";

import { useState, useEffect } from "react";
import { MapPin, Mail, Smartphone, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import { motion, type Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ContactDataTypes, ContactSectionTypes, Service } from "@/types/apiDataTypes";
import ModernTextEffect from "../ModernTextEffect";
import { Link } from "@/navigations";

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

const popBlurIn: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOut },
  },
};

const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// ===== Office locations data =====
const officeLocations = [
  {
    country: "Egypt",
    flag: "🇪🇬",
    offices: [
      {
        name: "Nasr City",
        address:
          "25 Asmaa Fahmy St, El Nozha St. Nasr City, Cairo, Egypt",
        phone: "01009957000",
      },
      {
        name: "6 October",
        address:
          "West Somid, 7 Villa, Ammar Ibn Yasser Street, Beside Bank Court on Main Street – 6 October – Giza – Egypt.",
        phone: "01090202002",
      },
      {
        name: "Elharam",
        address: "Mashaal, Al Haram, Giza, Egypt.",
        phone: "01061797758",
      },
    ],
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    offices: [
      {
        name: "Dubai",
        address:
          "Office 21, Floor 3, ALMamzar Centre, Hor Al Anz East, Dubai, UAE",
        phone: "+976502671799",
      },
    ],
  },
  {
    country: "Saudi",
    flag: "🇸🇦",
    offices: [
      {
        name: "Riyadh",
        address:
          "Almalqa District, King Faisal bin Abdul Aziz Al Saud, Riyadh 13522",
        phone: "+966563356562",
      },
    ],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    offices: [
      {
        name: "Montreal",
        address:
          "4835 Boulevard Henri, Bourassa, Quest 111 Montreal, Quebec H4loa5, Canada",
        phone: "+1 438 464 2995",
      },
    ],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    offices: [
      {
        name: "Neu-Isenburg",
        address: "Stieglitzstraße 21, 63263 Neu-Isenburg, Germany",
        phone: "(+49)015906461858",
      },
    ],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    offices: [
      {
        name: "Ilford",
        address: "H36P+F4 Ilford, United Kingdom.",
        phone: "(+49)015906461858",
      },
    ],
  },
];

export default function ContactUs({
  contactData,
  contactSection,
  servicesData,
}: {
  contactData: ContactDataTypes;
  contactSection: ContactSectionTypes;
  servicesData: Service[];
}) {
  const t = useTranslations("contact");
  const locale = useLocale();

  // ===== Client mount check for hydration-safe HTML =====
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="contact-us"
      className="w-full min-h-fit bg-main-black2 text-main-white border-b border-white/10 px-4 py-12"
    >
      <motion.div
        className="flex flex-col gap-8 justify-start items-center container mx-auto"
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

        {/* ── Main row: Info + Map (LEFT) | Form (RIGHT) ── */}
        <motion.div
          className="flex flex-col xl:flex-row-reverse gap-8 xl:gap-16 w-full items-stretch"
          variants={containerVar}
        >
          {/* Contact Form — now on the RIGHT */}
          <motion.div
            className="w-full xl:w-[55%]"
            variants={rightInSpring}
            inherit={false}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm servicesData={servicesData} />
          </motion.div>

          {/* Left column: Info cards + Map — now on the LEFT */}
          <motion.div
            className="w-full xl:w-[45%] flex flex-col gap-4 xl:self-stretch xl:mt-[30px]"
            variants={leftInSpring}
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
                        "25 Asmaa Fahmy, Ard El Golf, Heliopolis, Cairo, Egypt",
                      )}
                  </span>
                ),
                delay: 0,
              },
              {
                icon: <Mail size={26} />,
                label: t("Email"),
                value: (
                  <Link
                    href={`mailto:${contactData?.email || "info@begroup.com"}`}
                    className="hover:text-main-primary transition-colors cursor-target"
                  >
                    {contactData?.email || "info@begroup.com"}
                  </Link>
                ),
                delay: 0.1,
              },
              {
                icon: <Smartphone size={26} />,
                label: t("Phone"),
                value: (
                  <Link
                    href={`tel:${contactData?.phone || "+201009957000"}`}
                    className="hover:text-main-primary transition-colors cursor-target"
                    dir="ltr"
                  >
                    {contactData?.phone || "+20 100 995 7000"}
                  </Link>
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

        {/* ── Office Locations Cards ── */}
        <motion.div
          className="w-full mt-8"
          variants={containerVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Section heading */}
          <motion.div className="text-center mb-10" variants={popBlurIn}>
            <h3 className="text-3xl sm:text-4xl font-bold">
              <span className="text-main-primary">
                {locale === "ar" ? "مكاتبنا" : "Our"}
              </span>{" "}
              <span className="text-white">
                {locale === "ar" ? "حول العالم" : "Offices"}
              </span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-main-primary to-main-primary/30 rounded-full mx-auto mt-4" />
          </motion.div>

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVar}
          >
            {officeLocations.map((location, locIdx) => (
              <motion.div
                key={location.country}
                variants={popBlurIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: locIdx * 0.08 }}
                className={`group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden
                           hover:border-main-primary/40 transition-all duration-500${
                             location.offices.length > 1
                               ? " sm:col-span-2 lg:col-span-3"
                               : ""
                           }`}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-main-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-main-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative p-5 flex flex-col gap-4">
                  {/* Country header */}
                  <div className="flex items-center gap-3">
                    <span
                      className="text-2xl"
                      role="img"
                      aria-label={location.country}
                    >
                      {location.flag}
                    </span>
                    <span className="text-lg font-bold text-white group-hover:text-main-primary transition-colors duration-300">
                      {location.country}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                  {/* All offices for this country */}
                  <div
                    className={`${
                      location.offices.length > 1
                        ? "grid grid-cols-1 md:grid-cols-3 gap-5"
                        : "flex flex-col gap-3"
                    }`}
                  >
                    {location.offices.map((office) => (
                      <div
                        key={office.name}
                        className={`flex flex-col gap-3 ${
                          location.offices.length > 1
                            ? "md:border-e md:border-white/10 md:pe-5 md:last:border-e-0 md:last:pe-0"
                            : ""
                        }`}
                      >
                        {/* Office sub-header (only show if multiple offices) */}
                        {location.offices.length > 1 && (
                          <span className="text-xs font-semibold text-main-primary/70 uppercase tracking-wider">
                            {office.name}
                          </span>
                        )}

                        {/* Address */}
                        <div className="flex items-start gap-3">
                          <MapPin
                            size={16}
                            className="shrink-0 mt-0.5 text-main-primary/70"
                          />
                          <p className="text-sm text-white/70 leading-relaxed">
                            {office.address}
                          </p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3">
                          <Phone
                            size={16}
                            className="shrink-0 text-main-primary/70"
                          />
                          <Link
                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                            dir="ltr"
                            className="text-sm text-white/70 hover:text-main-primary transition-colors duration-300 font-mono cursor-target"
                          >
                            {office.phone}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
