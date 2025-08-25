"use client";

import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import TextType from "../TextType";

const SplineRobot = dynamic(() => import("../SplineRobot"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="
        min-h-fit xl:h-[calc(100vh-115px)]
        flex flex-col xl:flex-row items-start xl:items-center justify-between
        gap-10 px-4 lg:px-10 py-10 lg:mx-6
        bg-gradient-to-r from-[#F4F4F4] to-[#FDFDFD]
        dark:bg-gradient-to-r dark:from-[#1A1A1A] dark:to-[#1A1A1A]
        border border-main-white rounded-2xl relative my-5 overflow-hidden
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="order-1 xl:order-2 relative w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-full flex-shrink-0 self-center"
      >
        <SplineRobot />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-6 order-2 xl:order-1 shrink-0 relative z-20"
      >
        <TextType
          text="Where Technology Meets Imagination"
          as="h1"
          className="text-main-text !font-noe text-5xl max-w-[500px] leading-[64px] h-[128px]"
          typingSpeed={75}
          showCursor={true}
          cursorCharacter="|"
          loop={true}
        />

        <p className="text-black-tint-80 dark:text-black-tint-20 font-medium italic text-base max-w-[650px]">
          Immerse yourself in a curated collection of cutting-edge robots that
          push the limits of your imagination.
        </p>

        <div className="flex items-center gap-2 relative z-[60]">
          <Button className="!bg-main-primary text-white font-semibold text-base w-[108px] h-[38px] rounded-[8px]">
            About Us
          </Button>
          <Button className="!bg-main-secondary text-white font-semibold text-base w-[108px] h-[38px] rounded-[8px]">
            Contact Us
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
