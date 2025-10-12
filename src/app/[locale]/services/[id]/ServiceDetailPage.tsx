"use client";

import { motion } from "motion/react";
import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigations";
import SplitText from "@/components/SplitText";
import { ServiceDetailsApiResponse } from "@/types/servicesApiTypes";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function ServiceDetailPage({
  serviceDetailsApiData,
}: {
  serviceDetailsApiData: ServiceDetailsApiResponse;
}) {
  const service = serviceDetailsApiData.data.service;
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <section className="min-h-screen bg-main-black2 text-main-white">
      {/* Header Section */}
      <div className="w-full bg-main-black2 text-main-primary flex flex-col items-center justify-end xl:justify-center pt-[70px] pb-6 lg:pt-[120px] min-h-fit relative overflow-hidden">
        <div className="flex flex-col items-center relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center justify-center h-20 w-20 rounded-full border border-main-primary/30 bg-main-primary/10 backdrop-blur-sm"
          >
            {/* Dynamic service icon */}
            <Image
              src={service.icon}
              alt={service.alt_icon || service.name}
              className="h-10 w-10 object-contain text-main-primary"
              width={50}
              height={50}
            />
          </motion.div>

          {locale === "en" ? (
            <SplitText
              text={service.name}
              tag="h1"
              className="font-extrabold leading-[1.2] text-[clamp(32px,8vw,80px)] relative mb-4"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              rootMargin="0px"
              textAlign="center"
              initialHidden
            />
          ) : (
            <motion.h1
              dir="rtl"
              className="font-extrabold leading-[1.2] text-[clamp(32px,8vw,80px)] relative bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-[#F18A1D]"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {service.name}
            </motion.h1>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white font-medium max-w-2xl mx-auto capitalize"
          >
            {service.short_desc}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 lg:py-20 -mt-10">
        <div className="max-w-6xl mx-auto">
          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t("About This Service")}
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                {service.long_desc}
              </p>

              {/* Dynamic Tabs content */}
              <div className="prose prose-invert prose-lg max-w-none mt-6 space-y-6">
                {service.tabs.map((tab) => (
                  <div key={tab.id}>
                    <h3 className="text-2xl font-semibold mb-2">{tab.name}</h3>
                    <p className="opacity-90 mb-2">{tab.short_desc}</p>
                    <div
                      className="opacity-80 text-base"
                      dangerouslySetInnerHTML={{ __html: tab.long_desc }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features and Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Tabs as Features */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-main-primary" />
                {t("What We Offer")}
              </h3>
              <ul className="space-y-4">
                {service.tabs.map((tab, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-main-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-main-primary">
                        {tab.name}
                      </p>
                      <p className="opacity-80">{tab.short_desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-main-primary" />
                {t("Key Benefits")}
              </h3>
              <ul className="space-y-4">
                {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {service.benefits.map((benefit: any, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-main-primary flex-shrink-0" />
                    <span className="opacity-90">
                      {typeof benefit === "string"
                        ? benefit
                        : benefit.title || ""}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gradient-to-r from-main-primary/10 to-main-secondary/10 backdrop-blur-sm border border-main-primary/20 rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-main-primary to-main-secondary bg-clip-text text-transparent">
              {t("Ready to Get Started?")}
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t("Let’s discuss how our")} {service.name.toLowerCase()}{" "}
              {t("service can help your business grow and achieve its goals")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-main-primary text-main-text hover:bg-main-secondary w-full md:w-fit px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 rounded-[6px]">
                  {t("Get in Touch")}
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-main-primary/50 text-main-primary hover:bg-main-primary/10 w-full md:w-fit px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 rounded-[6px]"
                >
                  {t("View All Services")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
