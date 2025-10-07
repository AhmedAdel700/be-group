"use client";

import About from "@/components/about/About";
import SplitText from "@/components/SplitText";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutPage() {
  const locale = useLocale();
  const t = useTranslations("about");
  const aboutArray = [
    {
      id: 1,
      title: "Value Of Renewal",
      desc: "At 'Be Group', we are committed to embracing the spirit of continuous improvement and innovation, clinging to the principles of quality and dedication in everything we do, striving to achieve the highest standards of performance and excellence",
    },
    {
      id: 2,
      title: "Value Of Agility",
      desc: "We adopt flexibility as a core value, committed to actively adapting to market changes and customer aspirations, with our ongoing commitment to comply with laws and professional ethics",
    },
    {
      id: 3,
      title: "Value Of Positivity",
      desc: "At 'Be Group', we believe that positivity is the fundamental pillar of the work environment we aspire to. Therefore, we encourage enthusiasm and optimism among our team members to support teamwork and increase productivity",
    },
    {
      id: 4,
      title: "Value Of Focus",
      desc: "Every individual in the 'Be Group' team is guided by a clear vision and specific goals that align with the company's ambitions, ensuring we move steadily towards achieving the desired results and mutual success",
    },
    {
      id: 5,
      title: "Value Of Transparency",
      desc: "We at 'Be Group' are committed to raising ethical and professional behavior standards and work towards developing a business community built on honesty and transparency, contributing to the company's sustainability and community growth",
    },
    {
      id: 6,
      title: "Value Of Benefit",
      desc: "At 'Be Group', we focus on providing exceptional value to our customers, with utmost care in maximizing return on investments, to ensure customer satisfaction and achieve fruitful results for our partners",
    },
  ];

  return (
    <div className="flex flex-col bg-main-black">
      {/* Hero Section */}
      <div className="h-[200px] lg:h-[235px] justify-end py-6 xl:py-0 xl:h-[63vh] flex flex-col items-center xl:justify-center bg-main-black2 text-main-primary">
        {locale === "en" ? (
          <SplitText
            text={t("About Be Group")}
            tag="h1"
            className="font-extrabold leading-[1.2] text-[clamp(44px,10vw,128px)] relative"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            initialHidden={true}
          />
        ) : (
          <motion.h1
            dir="rtl"
            className="font-extrabold text-[clamp(44px,10vw,128px)] relative bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-[#F18A1D]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("About Be Group")}
          </motion.h1>
        )}
      </div>

      {/* About Section */}
      <About aboutArray={aboutArray} />
    </div>
  );
}
