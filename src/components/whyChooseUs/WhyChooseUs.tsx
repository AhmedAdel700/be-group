"use client";

import Image from "next/image";
import whyUsImage from "@/app/assets/whyUs.avif";
import { Gem, Palette, Pencil, Star } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("whyus");

  return (
    <section className="w-full min-h-fit xl:min-h-screen bg-main-black text-main-white py-8 xl:py-20 border-b border-white/10 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center text-main-white gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="uppercase py-3 px-4 border rounded-full text-main-primary"
        >
          {t("Why Choose Us")}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:max-w-[80%] xl:max-w-[65%] font-bold text-center capitalize"
        >
          {t("Built for excellence")}
        </motion.h2>
      </div>

      <div className="px-4 sm:px-0 sm:container pt-10 flex flex-col gap-24 mx-auto xl:ps-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center sm:justify-start sm:ps-4"
        >
          <Image
            src={whyUsImage}
            alt="why choose us image"
            className="rounded-[150px] sm:max-w-[50%] max-h-[120px] lg:max-h-[180px] lg:max-w-full object-cover"
            width={525}
          />
        </motion.div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl sm:px-6 lg:px-8">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-16 lg:gap-32">
              {/* 01 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="flex gap-4 items-center">
                  <h5 className="self-start font-medium text-xl">01</h5>
                  <Gem
                    size={65}
                    strokeWidth={1}
                    className="text-main-primary"
                  />
                </div>

                <div className="flex">
                  <div className="hidden sm:block w-12" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-5xl font-bold">{t("Unique")}</h3>
                    <h3 className="text-5xl font-normal text-main-primary">
                      {t("Design")}
                    </h3>
                  </div>
                </div>

                <div className="flex mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
                  <div className="hidden sm:block w-12" />
                  <p className="w-full leading-relaxed">
                    {t("Unique Description")}
                  </p>
                </div>
              </motion.div>

              {/* 02 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6 md:translate-y-[-150px]"
              >
                <div className="flex gap-4 items-center">
                  <h5 className="self-start font-medium text-xl">02</h5>
                  <Pencil
                    size={65}
                    strokeWidth={1}
                    className="text-main-primary"
                  />
                </div>

                <div className="flex">
                  <div className="hidden sm:block w-12" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-5xl font-bold">{t("Quality")}</h3>
                    <h3 className="text-5xl font-normal text-main-primary">
                      {t("Code")}
                    </h3>
                  </div>
                </div>

                <div className="flex mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
                  <div className="hidden sm:block w-12" />
                  <p className="w-full leading-relaxed">
                    {t("Quality Description")}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-16 lg:gap-32 mt-24">
              {/* 03 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="flex gap-4 items-center">
                  <h5 className="self-start font-medium text-xl">03</h5>
                  <Palette
                    size={65}
                    strokeWidth={1}
                    className="text-main-primary"
                  />
                </div>

                <div className="flex">
                  <div className="hidden sm:block w-12" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-5xl font-bold">{t("Clean and")}</h3>
                    <h3 className="text-5xl font-normal text-main-primary">
                      {t("Minimal")}
                    </h3>
                  </div>
                </div>

                <div className="flex mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
                  <div className="hidden sm:block w-12" />
                  <p className="w-full leading-relaxed">
                    {t("Clean Description")}
                  </p>
                </div>
              </motion.div>

              {/* 04 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6 md:translate-y-[-150px]"
              >
                <div className="flex gap-4 items-center">
                  <h5 className="self-start font-medium text-xl">04</h5>
                  <Star
                    size={65}
                    strokeWidth={1}
                    className="text-main-primary"
                  />
                </div>

                <div className="flex">
                  <div className="hidden sm:block w-12" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-5xl font-bold">{t("Premium")}</h3>
                    <h3 className="text-5xl font-normal text-main-primary">
                      {t("Support")}
                    </h3>
                  </div>
                </div>

                <div className="flex mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
                  <div className="hidden sm:block w-12" />
                  <p className="w-full leading-relaxed">
                    {t("Premium Description")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
