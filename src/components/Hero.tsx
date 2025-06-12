"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

// Split Arabic safely by visible letters
const splitArabicLetters = (text: string) => {
  return Array.from(text);
};

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const line1 = "نظام جازتك";
  const line2Part1 = "لإدارة وأتمتة إجراءات محطات";
  const line2Part2 = "الوقود";

  const line1Chars = splitArabicLetters(line1);
  const line2Part1Chars = splitArabicLetters(line2Part1);
  const line2Part2Chars = splitArabicLetters(line2Part2);

  const [index, setIndex] = useState(0);
  const [text1, setText1] = useState("");
  const [text2_1, setText2_1] = useState("");
  const [text2_2, setText2_2] = useState("");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const totalLength =
      line1Chars.length + line2Part1Chars.length + line2Part2Chars.length;

    if (index < totalLength) {
      timeout = setTimeout(() => {
        if (index < line1Chars.length) {
          setText1((prev) => prev + line1Chars[index]);
        } else if (index < line1Chars.length + line2Part1Chars.length) {
          const i = index - line1Chars.length;
          setText2_1((prev) => prev + line2Part1Chars[i]);
        } else {
          const i = index - line1Chars.length - line2Part1Chars.length;
          setText2_2((prev) => prev + line2Part2Chars[i]);
        }
        setIndex((prev) => prev + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setFade(false);
        setTimeout(() => {
          setText1("");
          setText2_1("");
          setText2_2("");
          setIndex(0);
          setFade(true);
        }, 100);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section id="hero" className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-white/20 text-white mb-4">
              معايير واشتراطات وزارة الطاقة لتأهيل محطات الوقود
            </Badge>
            <h1
              className={`h-[160px] text-5xl font-bold mb-6 leading-tight transition-opacity duration-700 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="block">{text1}</span>
              <span className="block text-yellow-300">{text2_1}</span>
              <span className="block text-yellow-300">{text2_2}</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              نظام مدعوم بالذكاء الاصطناعي وانترنت الأشياء يحقق التحول الرقمي
              والأتمتة الشاملة لجميع الإجراءات
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                اطلب استشارتك المجانية
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent transition-all duration-300"
                onClick={() => scrollToSection("about")}
              >
                تعرف على المزيد
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                مميزات النظام الرئيسية
              </h3>
              <div className="space-y-4">
                {[
                  "تحكم كامل في إدارة المحطات عن بعد",
                  "مترابط مع مضخات وخزانات المحطات بشكل مباشر",
                  "نظام مدعوم بالذكاء الاصطناعي وانترنت الأشياء",
                  "يحقق التحول الرقمي والأتمتة الشاملة",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 space-x-reverse hover:text-yellow-300 transition-all duration-300"
                  >
                    <CheckCircle className="text-yellow-300 w-6 h-6" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
