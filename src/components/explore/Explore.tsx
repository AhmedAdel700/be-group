"use client";

import Image from "next/image";
import coin from "@/app/assets/Crypto.svg";
import futuristic from "@/app/assets/Futuristic.svg";
import book from "@/app/assets/Book.svg";
import labtop from "@/app/assets/Labtop.svg";
import { motion, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const sectionVar: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeCardVar: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

const fadeImageVar: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut, delay: 0.05 },
  },
};

export default function Explore() {
  const cardData = [
    {
      title: "Educational Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: coin,
    },
    {
      title: "Networking Opportunities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: futuristic,
    },
    {
      title: "Educational Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: book,
    },
    {
      title: "Reliable certificate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: labtop,
    },
  ];

  return (
    <section className="w-full bg-main-white dark:bg-[#1A1A1A] py-10">
      <div className="container mx-auto px-4 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          viewport={{ once: true, amount: 0.2 }}
          className="xl:max-w-[567px]"
        >
          <h2 className="text-main-text font-normal text-[28px]">
            Explore the World of Robotics{" "}
            <span className="!font-noe">Research & Development</span>
          </h2>
        </motion.div>

        <motion.div
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 w-full flex flex-wrap justify-center gap-8"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeCardVar}
              className="
                relative w-[350px] h-[420px]
                rounded-[8px]
                border border-black-tint-90 dark:border-black-tint-2
                bg-black-tint-2 dark:bg-black-tint-90
                overflow-hidden transition hover:shadow-lg
                flex flex-col justify-start cursor-pointer
              "
            >
              <div className="p-8 z-10 flex flex-col gap-6">
                <h3 className="text-main-text text-lg !font-noe">
                  {card.title}
                </h3>
                <p className="text-main-text text-base font-medium">
                  {card.description}
                </p>
              </div>

              <motion.div
                variants={fadeImageVar}
                className="absolute bottom-0 right-0"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="object-contain w-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
