"use client";

import AI from "@/app/assets/AI.svg";
import Tech from "@/app/assets/Tech.svg";
import Car from "@/app/assets/Car.svg";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const sectionVar: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const headingVar: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

const cardVar: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

const imageVar: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, delay: 0.05 },
  },
};

export default function Research() {
  const cardData = [
    {
      title: "Artificial Intelligence (AI)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: AI,
    },
    {
      title: "Development of Technology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: Tech,
    },
    {
      title: "Technological Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: Car,
    },
  ];

  return (
    <section className="w-full bg-main-white dark:bg-[#1A1A1A] py-10 min-h-[80vh] flex justify-center items-center">
      <div className="container mx-auto px-4 xl:px-0 flex flex-col gap-14">
        <motion.h2
          variants={headingVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-main-text !font-noe text-[28px]"
        >
          Research, <span className="!font-objektiv">Insight & </span> Updates
        </motion.h2>

        <motion.div
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVar}
              className="w-full h-fit flex flex-col gap-6 shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] rounded-2xl border border-main-white"
            >
              <motion.div variants={imageVar}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={421}
                  height={209}
                  className="w-full rounded-2xl"
                />
              </motion.div>

              <div className="flex flex-col gap-6 px-6 pb-6">
                <h3 className="text-main-text font-bold text-lg">
                  {card.title}
                </h3>
                <p className="text-black-tint-80 text-base font-normal">
                  {card.description}
                </p>

                <div className="text-main-primary flex items-center gap-2 font-semibold text-base">
                  Learn more <ChevronRight color="#D0295D" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
