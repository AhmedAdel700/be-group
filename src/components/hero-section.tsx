"use client";

import hero from "@/app/assets/hero.png";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Target,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const scrollToCourses = () => {
    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-16 px-4 min-h-[100vh] flex flex-col xl:flex-row justify-center items-center bg-gradient-to-br from-[#001C71] via-[#001C71] to-[#5F289E] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Books */}
        <motion.div
          animate="animate"
          className="absolute top-20 left-10 text-[#0EC5C7] opacity-20"
        >
          <BookOpen className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-20 text-[#0EC5C7] opacity-20"
        >
          <BookOpen className="w-12 h-12" />
        </motion.div>

        {/* Graduation Caps */}
        <motion.div
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute top-32 left-1/4 text-[#0EC5C7] opacity-15"
        >
          <GraduationCap className="w-20 h-20" />
        </motion.div>

        <motion.div
          animate="animate"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-20 right-10 text-[#0EC5C7] opacity-15"
        >
          <GraduationCap className="w-14 h-14" />
        </motion.div>

        {/* Light Bulbs */}
        <motion.div
          animate="animate"
          className="absolute top-60 left-20 text-[#0EC5C7] opacity-20"
        >
          <Lightbulb className="w-10 h-10" />
        </motion.div>

        <motion.div
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-40 left-1/3 text-[#0EC5C7] opacity-20"
        >
          <Lightbulb className="w-8 h-8" />
        </motion.div>

        {/* Target Icons */}
        <motion.div
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute top-80 right-1/4 text-[#0EC5C7] opacity-15"
        >
          <Target className="w-12 h-12" />
        </motion.div>

        {/* Abstract Shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-1/3 w-32 h-32 border-2 border-[#0EC5C7] opacity-10 rounded-full"
        />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 left-1/2 w-24 h-24 border-2 border-[#0EC5C7] opacity-10 rounded-lg"
        />

        {/* Floating Dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-[#0EC5C7] rounded-full opacity-30"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center w-fit px-4 py-2 bg-[#0EC5C7]/20 rounded-full border border-[#0EC5C7]/30"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#0EC5C7]" />
                  <span className="text-sm font-medium text-[#0EC5C7]">
                    {t("Transform Your Future Today")}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight"
              >
                {t("Master New Skills with")}
                <motion.span
                  className="text-[#0EC5C7] block relative"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(14, 197, 199, 0.5)",
                      "0 0 30px rgba(14, 197, 199, 0.8)",
                      "0 0 20px rgba(14, 197, 199, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {t("Se-University")}
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-200 leading-relaxed max-w-lg"
              >
                {t(
                  "Join thousands of learners worldwide and unlock your potential with our expertly crafted diplomas Learn from industry professionals and build the skills that matter"
                )}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToCourses}
                className="bg-[#0EC5C7] hover:bg-[#0EC5C7]/90 text-[#001C71] font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center gap-2">
                  {t("Explore Diplomas")}
                  {locale === "en" ? (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  ) : (
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  )}
                </div>
              </Button>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-8"
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#0EC5C7]/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#0EC5C7]" />
                  </div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-gray-300">
                    {t("Explore Diplomas")}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#0EC5C7]/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#0EC5C7]" />
                  </div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-gray-300">
                    {t("Happy Students")}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#0EC5C7]/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#0EC5C7]" />
                  </div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-gray-300">
                    {t("Success Rate")}
                  </div>
                </div>
              </motion.div>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={hero}
                  alt="Students learning online"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  width={400}
                  height={400}
                />
              </motion.div>
            </div>

            {/* Animated background shapes */}
            <motion.div
              className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#0EC5C7] to-[#5F289E] rounded-2xl opacity-20"
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-tr from-[#5F289E] to-[#0EC5C7] rounded-2xl opacity-20"
              animate={{
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
