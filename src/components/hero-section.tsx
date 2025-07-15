/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import heroFrame from '@/app/assets/heroFrame3.webp';

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("hero");

  return (
    <section className="relative pt-32 pb-16 px-4 min-h-[100vh] flex flex-col xl:flex-row justify-center items-center text-white overflow-hidden">
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-full grid gap-12 items-center lg:grid-cols-[55%_41.7%]">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between h-full w-full gap-7 order-last lg:order-first"
          >
            <h1 className="text-[32px] md:text-[60px] leading-[1.4] font-bold text-main-black">
              {t("Learn develop and achieve anytime anywhere")}
            </h1>
            <p className="text-xl sm:text-[28px] leading-[1.5] text-black-tint-70">
              {t("description")}
            </p>
            <Link href="#courses" className="flex gap-2 items-center">
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
            className="relative h-full w-full z-10 flex justify-center items-center order-first lg:order-last"
          >
            <div className="relative w-full grid place-items-end">
              <Image
                src={heroFrame}
                alt="Students learning online"
                className="shadow-[-4px_4px_15.8px_10px_rgba(60,67,91,0.10)] rounded-[12px]"
                width={500}
                height={400}
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
