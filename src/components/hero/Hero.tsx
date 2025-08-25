"use client";

import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const SplineRobot = dynamic(() => import("../SplineRobot"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="
        min-h-fit xl:h-[calc(100vh-85px)]
        flex flex-col xl:flex-row items-center justify-between
        gap-10 px-4 lg:px-10 py-10 container mx-auto
        bg-gradient-to-r from-[#F4F4F4] to-[#FDFDFD]
        dark:bg-gradient-to-r dark:from-[#1A1A1A] dark:to-[#1A1A1A]
        border border-main-white rounded-2xl mb-4 relative
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-6 order-2 xl:order-1 shrink-0"
      >
        <h1 className="text-main-text !font-noe text-5xl max-w-[500px] leading-[64px]">
          Where Technology Meets Imagination
        </h1>

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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full h-full rounded-xl overflow-hidden order-1 xl:order-2"
      >
        {/* <SplineRobot /> */}
      </motion.div>
    </section>
  );
}
