"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AchievementSection() {
  const t = useTranslations("achievements");
  return (
    <section className="bg-main-black2 min-h-[45vh] w-full flex justify-center items-center border-b border-white/10 py-8">
      <div className="w-full mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-main-white gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="uppercase py-3 px-4 border rounded-full text-main-primary"
          >
            {t("Achievements")}
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-7xl lg:max-w-[80%] xl:max-w-[65%] font-bold text-center capitalize"
          >
            {t("Achievements of company")}
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 xl:gap-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="py-4 xl:py-8 flex flex-col gap-2 justify-center items-center text-center"
          >
            <h3 className="text-4xl text-main-primary font-bold">3000+</h3>
            <p className="text-gray-600 text-lg sm:text-base lg:text-lg">
              Successful Projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="py-4 xl:py-8 flex flex-col gap-2 justify-center items-center text-center"
          >
            <h3 className="text-4xl text-main-primary font-bold">95%</h3>
            <p className="text-gray-600 text-lg sm:text-base lg:text-lg">
              Customer Satisfaction Rate
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="py-4 xl:py-8 flex flex-col gap-2 justify-center items-center text-center"
          >
            <h3 className="text-4xl text-main-primary font-bold">200+</h3>
            <p className="text-gray-600 text-lg sm:text-base lg:text-lg">
              Employees
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="py-4 xl:py-8 flex flex-col gap-2 justify-center items-center text-center"
          >
            <h3 className="text-4xl text-main-primary font-bold">3</h3>
            <p className="text-gray-600 text-lg sm:text-base lg:text-lg">
              Countries of Operation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
