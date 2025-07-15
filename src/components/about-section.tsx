"use client";

import missionIcon from "@/app/assets/mission.svg";
import valuesIcon from "@/app/assets/values.svg";
import visionIcon from "@/app/assets/vision.svg";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-main-primary">
            {t("About Se-University")}
          </h2>
          <p className="text-xl font-medium text-black-tint-80 max-w-3xl leading-relaxed">
            {t(
              "We are dedicated to providing world-class education that empowers students to achieve their dreams and build successful careers in the digital age"
            )}
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 bg-p-tints-tint-60 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 gap-4"
          >
            <Image
              src={missionIcon}
              alt="mission-icon"
              width={316}
              height={201}
              className="w-[316px] h-[201px]"
            />
            <h3 className="text-[32px] font-bold text-main-white">
              {t("Our Mission")}
            </h3>
            <p className="text-main-white font-medium leading-relaxed">
              {t(
                "To democratize quality education by making it accessible affordable and engaging for learners worldwide through innovative online learning experiences"
              )}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 bg-p-tints-tint-60 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 gap-4"
          >
            <Image
              src={visionIcon}
              alt="vision-icon"
              width={316}
              height={201}
              className="w-[316px] h-[201px]"
            />
            <h3 className="text-[32px] font-bold text-main-white">
              {t("Our Vision")}
            </h3>
            <p className="text-main-white font-medium leading-relaxed">
              {t(
                "To become the leading global platform for professional development and academic excellence fostering a community of lifelong learners"
              )}
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 bg-p-tints-tint-60 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 gap-4"
          >
            <Image
              src={valuesIcon}
              alt="vision-icon"
              width={316}
              height={201}
              className="w-[316px] h-[201px]"
            />
            <h3 className="text-[32px] font-bold text-main-white">
              {t("Our Values")}
            </h3>
            <p className="text-main-white font-medium leading-relaxed">
              {t(
                "Excellence innovation inclusivity and student success drive everything we do We believe in the transformative power of education"
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
