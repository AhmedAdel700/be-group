"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function HeroWithFloatingImage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = "/Gas Tech Company Profile AR.pdf";
    link.download = "Gas Tech Company Profile AR.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="relative flex h-[calc(100vh-72px)] items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(45deg, hsla(33, 74%, 69%, 1) 0%, hsla(220, 60%, 33%, 1) 100%)",
      }}
      id="hero"
    >
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Curved Lines */}
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />{" "}
              {/* sky-400 */}
              <stop offset="50%" stopColor="#EAB308" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="0" />{" "}
              {/* blue-800 */}
              <stop offset="50%" stopColor="#064E3B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Top Curves */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
            }}
            d="M 100 100 Q 300 0 500 100 T 900 100"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
              delay: 0.5,
            }}
            d="M 0 200 Q 200 100 400 200 T 800 200"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="1"
          />
          {/* Bottom Curves */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
              delay: 1,
            }}
            d="M 100 600 Q 300 500 500 600 T 900 600"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1"
          />
        </svg>

        {/* Straight Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: "-100%",
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              }}
              className="absolute right-0"
              style={{
                top: `${15 + i * 10}%`,
                height: "1px",
                width: "100%",
                background: `linear-gradient(90deg, transparent, ${
                  i % 2 === 0 ? "#FDE68A" : "#064E3B"
                }60, transparent)`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-[1]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-red-100 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-red-100 blur-3xl"
        />
      </div>

      {/* Content with floating image */}
      <div className="container relative z-[3] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex w-full items-center justify-between gap-8"
        >
          {/* Text content right */}
          <div className="text-white py-6 xl:py-0">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-bold">نظام جازتك</h1>
              <h2 className="text-yellow-300 text-4xl md:text-5xl font-bold">
                لإدارة وأتمتة إجراءات محطات الوقود
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                نظام مدعوم بالذكاء الاصطناعي وانترنت الأشياء يحقق التحول الرقمي
                والأتمتة الشاملة لجميع الإجراءات
              </p>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-500 mb-8">
              <h3 className="text-2xl font-bold mb-6">
                مميزات النظام الرئيسية
              </h3>
              <div className="space-y-4">
                {[
                  "تحكم كامل في إدارة المحطات عن بعد",
                  "مترابط مع مضخات وخزانات المحطات بشكل مباشر",
                  "متوافق مع معايير واشتراطات وزارة الطاقة",
                  "ممتثل لاشتراطات هيئة الزكاة والضريبة والجمارك",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse"
                  >
                    <CheckCircle className="text-yellow-300 w-6 h-6" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:flex-row gap-4 items-center justify-start">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-sm sm:text-base"
                onClick={() => scrollToSection("contact")}
              >
                اطلب استشارتك المجانية
              </Button>
              <Button
                size="lg"
                className="bg-[#2A4D8A] hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium relative"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {isDownloading ? "جاري التحميل..." : "تحميل ملف الشركة"}
              </Button>
            </div>
          </div>

          {/* Floating image left */}
          <div className="hidden lg:flex relative w-full lg:w-[70%] xl:w-[45%] xl:-ml-[135px]">
            <div className="relative w-full">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/hero1.png"
                  alt="نظام جازتك"
                  width={900}
                  height={900}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
