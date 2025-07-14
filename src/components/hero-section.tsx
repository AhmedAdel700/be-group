/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import HeroFrame from "@/app/assets/Section.png";

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("hero");

  return (
    <section
      className="relative pt-32 pb-16 px-4 min-h-[100vh] flex flex-col xl:flex-row justify-center items-center bg-white text-white overflow-hidden"
      style={{ backgroundImage: `url(${HeroFrame.src})` }}
    >
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-full grid lg:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full"
          >
            <h1 className="text-[32px] md:text-[60px] leading-[1.4] font-bold text-main-black">
              {t("Learn develop and achieve anytime anywhere")}
            </h1>
            <p className="text-xl sm:text-[32px] leading-[1.5] text-black-tint-70">
              {t("description")}
            </p>
            <Link href={`#`} className="flex gap-2 items-center">
              <Button className="bg-main-primary hover:bg-p-shades-shade-80">
                {t("Submit request")}
                {locale === "en" ? <ArrowRight /> : <ArrowLeft />}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full w-full z-10 flex justify-center items-center"
          >
            <div className="relative h-[60vh] w-auto">
              <Image
                src="/heroFrame2.svg"
                alt="Students learning online"
                className="shadow-[-4px_4px_15.8px_10px_rgba(60,67,91,0.10)]"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
