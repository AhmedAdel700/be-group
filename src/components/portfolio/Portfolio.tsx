"use client";
import CarouselComponent from "../carouselComponent/CarouselComponent";
import { motion } from "motion/react";

import p1 from "@/app/assets/p1.jpg";
import p2 from "@/app/assets/p2.jpg";
import p3 from "@/app/assets/p3.jpg";
import p4 from "@/app/assets/p4.jpg";
import p5 from "@/app/assets/p5.jpg";
import p6 from "@/app/assets/p6.jpg";
import p7 from "@/app/assets/p7.jpg";
import p8 from "@/app/assets/p8.jpg";
import { useTranslations } from "next-intl";

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const data = [
    {
      id: 1,
      image: p1,
      title: "E-commerce Redesign",
      desc: "Faster checkout, modern UI, +27% conv.",
    },
    {
      id: 2,
      image: p2,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
    },
    {
      id: 3,
      image: p3,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
    },
    {
      id: 4,
      image: p4,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
    },
    {
      id: 5,
      image: p5,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
    },
    {
      id: 6,
      image: p6,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
    },
    {
      id: 7,
      image: p7,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
    },
    {
      id: 8,
      image: p8,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
    },
  ];
  return (
    <div className="w-full min-h-fit xl:min-h-screen bg-main-black2 text-main-white pt-8 xl:pt-20 border-b border-white/10">
      <div className="flex flex-col gap-6 md:gap-8 xl:gap-12 justify-start items-center container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="uppercase py-3 px-4 border rounded-full text-main-primary"
        >
          {t("Our Portfolio")}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:max-w-[80%] xl:max-w-[50%] font-bold text-center capitalize"
        >
          {t("Some of Our Works")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/70 text-base md:text-lg text-center lg:max-w-[70%] xl:max-w-[50%]"
        >
          {t(
            "From high-performance web apps and e-commerce to data dashboards,here’s a quick snapshot of projects we’ve crafted with speed,scalability, and clean design"
          )}
        </motion.p>

        <CarouselComponent items={data} />
      </div>
    </div>
  );
}
