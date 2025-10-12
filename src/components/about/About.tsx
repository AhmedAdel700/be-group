"use client";

import Image from "next/image";
import about1 from "@/app/assets/9.png";
// import about2 from "@/app/assets/about.webp";
// import about3 from "@/app/assets/about1.jpg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link, usePathname } from "@/navigations";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { AboutType } from "@/types/apiDataTypes";

export default function About({
  aboutArray,
  aboutData,
}: {
  aboutArray?: { id: number; title: string; desc: string }[];
  aboutData?: AboutType;
}) {
  const t = useTranslations("about");
  const locale = useLocale();
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-main-black text-main-white flex flex-col gap-6 md:gap-8 xl:gap-12 justify-start items-center py-10 xl:py-24 border-b border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="uppercase py-3 px-4 border rounded-full text-main-primary"
      >
        {aboutData?.title}
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-7xl lg:max-w-[80%] xl:max-w-[65%] font-bold text-center capitalize"
      >
        {aboutData?.title2}
      </motion.h2>

      {/* Grid */}
      <div className="container mx-auto grid xl:grid-cols-3 gap-6 place-items-stretch h-auto xl:h-[550px]">
        {/* Images block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center items-start"
        >
          <div className="relative w-[75%] mb-12 sm:w-full xl:mb-0 max-w-[450px] xl:max-w-[350px] mx-auto aspect-[3/4] xl:aspect-auto xl:h-[90%]">
            <Image
              src={about1}
              alt="about image 1"
              fill
              className="object-cover rounded-[8px] -translate-x-[20px] md:translate-x-[-50px] xl:translate-x-[0px]"
            />
            <Image
              src={aboutData?.image ?? ""}
              alt={aboutData?.alt_image ?? "about image 2"}
              fill
              className="object-cover rounded-[8px] translate-x-[20px] md:translate-x-[50px] translate-y-[40px] md:translate-y-[100px] xl:translate-y-[50px] z-10"
            />
          </div>
        </motion.div>

        {/* Column 2: Text + Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`h-auto xl:h-full flex flex-col justify-between items-start gap-4 text-start px-4 xl:px-0 ${
            locale === "en" ? "xl:ms-16" : "xl:ms-10"
          } flex-1 w-full`}
        >
          <h2 className="text-3xl mt-5 lg:mt-0 md:text-4xl font-bold text-main-primary tracking-tight">
            {t("Be Group")}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold">
            {t("Digital Services has never been easier")}
          </h3>

          <h4 className="font-medium text-2xl">{t("What We Do ?")}</h4>
          {/* Dynamic list from API with same styling */}
          <div
            className="text-white/80 leading-relaxed text-xs md:text-sm lg:text-base ps-4"
            dangerouslySetInnerHTML={{
              __html: `
      <ul class='list-disc marker:text-main-primary flex flex-col gap-4'>
        ${
          aboutData?.text
            ?.replace(/<ul>|<\/ul>/g, "") // Remove outer <ul> to reapply Tailwind classes
            ?.trim() || ""
        }
      </ul>
    `,
            }}
          />

          {/* Conditional button */}
          <Link href={isAboutPage ? "/services" : "/about"} className="w-full">
            <Button className="uppercase bg-main-primary text-main-text hover:bg-white/90 px-6 py-6 rounded-[4px] w-full sm:w-[200px] xl:w-full cursor-target">
              {isAboutPage ? t("View Services") : t("Learn More")}
            </Button>
          </Link>
        </motion.div>

        {/* Third image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden xl:block relative w-full max-w-[200px] mx-auto aspect-[3/4] xl:aspect-auto xl:h-full"
        >
          <Image
            src={aboutData?.banner ?? ""}
            alt={aboutData?.alt_banner ?? "about image 2"}
            fill
            className="object-cover rounded-[8px]"
          />
        </motion.div>
      </div>

      {/* Values Section */}
      {isAboutPage && (
        <div className="container mx-auto px-4 mt-12 lg:mt-20 text-white w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              {t("Our Core")}{" "}
              <span className="text-main-primary">{t("Values")}</span>
            </h2>
          </motion.div>

          {/* Values Accordion/Grid */}
          <div className="flex flex-col gap-4 max-w-6xl mx-auto">
            {aboutArray?.map(({ id, title, desc }, index) => {
              const isOpen = openId === id;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setOpenId(isOpen ? null : id)}
                  className={`group relative ${
                    isOpen ? "bg-white/5" : "bg-main-black2"
                  }  border border-white/10 rounded-xl overflow-hidden hover:border-main-primary/30 transition-all duration-300 cursor-pointer`}
                >
                  {/* Header - Always Visible */}
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Number Badge */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-main-primary/10 border border-main-primary/20 flex items-center justify-center text-main-primary font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg md:text-xl font-semibold text-white ${
                          isOpen && "!text-main-primary"
                        } group-hover:text-main-primary transition-colors duration-300`}
                      >
                        {title}
                      </h3>
                    </div>

                    {/* Expand Icon */}
                    <div
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-main-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.3, delay: isOpen ? 0.15 : 0 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      {/* Description with fade-in animation */}
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          y: isOpen ? 0 : -10,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isOpen ? 0.2 : 0,
                        }}
                      >
                        <p className="text-white/80 text-sm md:text-base leading-relaxed">
                          {desc}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Hover Accent */}
                  <div
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-main-primary ${
                      isOpen && "w-full"
                    } group-hover:w-full transition-all duration-500`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
