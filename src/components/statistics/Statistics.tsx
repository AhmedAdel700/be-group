"use client";

import { motion, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const sectionVar: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const headingVar: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const statVar: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function Statistics() {
  const statisticsData = [
    { title: "Trust Worthy", number: "+165,489", text: "Students" },
    { title: "Reliable", number: "98%", text: "Graduation Rate" },
    { title: "Scalable", number: "+254", text: "Clients Rating" },
    { title: "QUALITY", number: "560", text: "Awards Won" },
  ];

  return (
    <section className="w-full bg-white/30 backdrop-blur-[500px] dark:bg-[#1A1A1A] py-10">
      <div className="container mx-auto px-4 xl:px-0">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVar}
          className="flex flex-col gap-2"
        >
          <motion.h2
            variants={headingVar}
            className="text-main-text font-normal text-[28px] xl:max-w-[500px]"
          >
            The perfect combination of
          </motion.h2>
          <motion.h2
            variants={headingVar}
            className="!font-noe text-main-text text-[28px]"
          >
            Technology, Product, Talent, and Resources
          </motion.h2>
        </motion.div>

        <motion.div
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 w-full grid md:grid-cols-2 items-center gap-8"
        >
          {statisticsData.map((data, index) => (
            <motion.div
              key={index}
              variants={statVar}
              className="flex flex-col gap-4 pb-4 border-b border-main-text text-main-text font-medium"
            >
              <h3 className="text-2xl uppercase">{data.title}</h3>
              <span className="text-[40px]">{data.number}</span>
              <h5 className="text-base">{data.text}</h5>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
