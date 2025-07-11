"use client";

import { courses } from "@/app/(dummyData)/courseData";
import { motion, easeInOut } from "framer-motion";
import { Clock, Star, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#001C71]">
            {t("Our Popular Diplomas")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
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
                  className="w-full h-48 object-cover"
                  width={300}
                  height={192}
                />
                <Badge className="absolute top-3 right-3 bg-[#0EC5C7] text-white">
                  {course.level}
                </Badge>
              </div>

              {/* Card Content */}
              <div className="flex flex-col p-6 flex-grow gap-4">
                <h3 className="text-lg font-bold text-[#001C71] line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 gap-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium text-gray-800">
                      {course.rating}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-[#001C71]">
                    {course.price}
                  </span>
                </div>

                <div className="pt-4 mt-auto">
                  <Link href={`/${locale}/diploma/${course.id}`}>
                    <Button className="w-full bg-[#001C71] hover:bg-[#001C71]/90 transition-colors duration-200">
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
