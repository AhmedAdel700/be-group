"use client";
import { easeInOut, motion } from "framer-motion";
import { Calendar, Clock, SaudiRiyal, Timer } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { DiplomaResponseData } from "../types/diplomasApiTypes";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDiplomas } from "@/lib/diplomasApiSlice";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export default function DiplomasSection({
  diplomasData,
}: {
  diplomasData: DiplomaResponseData;
}) {
  const locale = useLocale();
  const t = useTranslations("diplomas");
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setDiplomas(diplomasData));
    }, [diplomasData, dispatch]);

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-main-primary">
            {t("Our Popular Diplomas")}
          </h2>
          <p className="text-xl text-black-tint-80 max-w-3xl leading-relaxed">
            {t(
              "Choose from our wide range of expertly designed diplomas to advance your career and achieve your learning goals"
            )}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {diplomasData?.data?.diplomas.map((diploma) => (
            <motion.div
              key={diploma._id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              <div className="relative">
                <Image
                  src={diploma.image}
                  alt={locale === "en" ? diploma.title : diploma.titleAr}
                  className="w-full h-48 object-cover max-w-full"
                  width={300}
                  height={192}
                />
              </div>

              <div className="flex flex-col p-6 flex-grow gap-4">
                <h3 className="text-lg font-bold text-main-primary line-clamp-2">
                  {locale === "en" ? diploma.title : diploma.titleAr}
                </h3>

                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {t("Duration time")}:{" "}
                    {diploma.category === "Intermediate"
                      ? t("One Year")
                      : t("Two Years")}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    <Timer className="w-4 h-4" />
                    {diploma.hours} <span>{t("Hours")}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{t("Start Date")} :</span>
                    {new Date(
                      diploma.semesters[0].configuration.duration.startDate
                    ).toLocaleDateString("en-GB")}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    {t("Program price")}:{" "}
                    {diploma.semesterCost * diploma.semesters.length + 100}
                    <SaudiRiyal className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    {t("Semester")}: {diploma.semesterCost}
                    <SaudiRiyal className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    {t("Registration fees")}: 100
                    <SaudiRiyal className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-auto">
                  <Link href={`/${locale}/diploma/${diploma._id}`}>
                    <Button className="w-full bg-main-primary hover:bg-p-shades-shade-80 transition-colors duration-200">
                      {t("View Details")}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
