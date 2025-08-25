"use client";

import Image from "next/image";
import aboutImage from "@/app/assets/about.svg";
import { motion, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const containerVar: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeVar: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: easeOut },
  },
};

const imageVar: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: easeOut, delay: 0.1 },
  },
};

export default function About() {
  return (
    <section
      className="
        lg:flex flex-col items-center justify-center
        gap-10 xl:gap-6 px-4 xl:px-0 container mx-auto py-10
        xl:flex-row xl:justify-between xl:items-center
        min-h-[60vh] xl:min-h-[80vh]
      "
    >
      <motion.div
        className="flex flex-col gap-8 max-w-[642px] text-start"
        variants={containerVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-[28px] text-main-text !font-noe"
          variants={fadeVar}
        >
          About our company
        </motion.h2>

        <motion.p
          className="font-medium text-base text-black-tint-80"
          variants={fadeVar}
        >
          Robotics.sa is more than just a platform; it’s a community-driven hub
          that fosters collaboration, knowledge exchange, and inspiration.
          Whether you’re a researcher pushing the boundaries of technology or a
          curious mind eager to learn, Robotics.sa is your go-to destination for
          all things related to Robotics Research and Development.
        </motion.p>

        <motion.p
          className="font-medium text-base text-black-tint-80"
          variants={fadeVar}
        >
          Embark on a journey with us as we explore the limitless possibilities
          of robotics, where innovation meets imagination, and the future is
          crafted by the minds of today. Welcome to Robotics.sa – Shaping
          Tomorrow’s Robotics Landscape, Today.
        </motion.p>
      </motion.div>

      <motion.div
        variants={imageVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src={aboutImage}
          alt="About Robotics.sa"
          width={596}
          height={392}
          className="hidden lg:block"
          priority={false}
        />
      </motion.div>
    </section>
  );
}
