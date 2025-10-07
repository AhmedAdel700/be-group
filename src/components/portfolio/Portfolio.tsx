"use client";
import CarouselComponent from "../carouselComponent/CarouselComponent";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ProjectTypes } from "@/types/apiDataTypes";

export default function Portfolio({
  projectsData,
}: {
  projectsData: ProjectTypes[];
}) {
  const t = useTranslations("portfolio");
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

        <CarouselComponent projectsData={projectsData} />
      </div>
    </div>
  );
}
