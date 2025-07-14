"use client";

import { courses } from "@/app/(dummyData)/courseData";
import { easeInOut, motion } from "framer-motion";
import { Calendar, Clock, SaudiRiyal, Timer } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

// Animation Variants

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

export default function DiplomasSection() {
  const locale = useLocale();
  const t = useTranslations("diplomas");

  return (
    <section id="courses" className="py-20 bg-white">
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
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Image and Badge */}
              <div className="relative">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover max-w-full"
                  width={300}
                  height={192}
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col p-6 flex-grow gap-4">
                <h3 className="text-lg font-bold text-main-primary line-clamp-2">
                  {locale === "en" ? course.title : course.titleAr}
                </h3>

                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {t("Duration time")}:{" "}
                    {locale === "en" ? course.duration : course.durationAr}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    <Timer className="w-4 h-4" />
                    {locale === "en"
                      ? course.AcademicHours
                      : course.AcademicHoursAR}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {course.startDate}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    {t("Program price")}: {course.ProgramFee}
                    <SaudiRiyal className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    {t("Semester")}: {course.semester}
                    <SaudiRiyal className="w-4 h-4" />
                  </div>
                </div>
                {/* Registration fees row */}
                <div className="flex items-center justify-between text-sm text-black-tint-80 gap-2">
                  <div className="flex items-center gap-1">
                    {t("Registration fees")}: 100
                    <SaudiRiyal className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-auto">
                  <Link href={`/${locale}/diploma/${course.id}`}>
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
