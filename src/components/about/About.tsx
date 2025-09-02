"use client";

import Image from "next/image";
import about1 from "@/app/assets/9.png";
import about2 from "@/app/assets/about.webp";
import about3 from "@/app/assets/6.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link, usePathname } from "@/navigations";


export default function About() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-main-black text-main-white flex flex-col gap-6 md:gap-8 xl:gap-12 justify-start items-center py-10 xl:py-24 border-b border-white/10"
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="uppercase py-3 px-4 border rounded-full"
      >
        About Agency
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-7xl lg:max-w-[80%] xl:max-w-[65%] font-bold text-center capitalize"
      >
        Group of Creators and Minimalism Lovers
      </motion.h2>

      {/* Grid */}
      <div className="container mx-auto grid xl:grid-cols-3 gap-6 place-items-stretch h-auto xl:h-[550px]">
        {/* Images block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center items-start"
        >
          <div className="relative w-[75%] mb-12 sm:w-full xl:mb-0 max-w-[450px] xl:max-w-[350px] mx-auto aspect-[3/4] xl:aspect-auto xl:h-[90%]">
            <Image
              src={about1}
              alt="about image 1"
              fill
              className="object-cover rounded-[8px] -translate-x-[20px] md:translate-x-[-50px] xl:translate-x-[0px]"
            />
            <Image
              src={about2}
              alt="about image 2"
              fill
              className="object-cover rounded-[8px] translate-x-[20px] md:translate-x-[50px] translate-y-[40px] md:translate-y-[100px] xl:translate-y-[50px] z-10"
            />
          </div>
        </motion.div>

        {/* Column 2: Text + Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="h-auto xl:h-full flex flex-col justify-between items-start gap-4 text-start px-4 xl:px-0 xl:ms-16 flex-1 w-full"
        >
          <h2 className="text-3xl mt-5 lg:mt-0 md:text-4xl font-bold">
            Be Group
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold">
            Digital Services has never been easier.
          </h3>

          <h4 className="font-medium">What We Do?</h4>
          <ul className="list-disc text-white/80 leading-relaxed flex flex-col gap-4 text-xs md:text-sm lg:text-base ps-4">
            <li>Digital assets audit</li>
            <li>Research & competitive analysis</li>
            <li>Target audience segmentation</li>
            <li>Customer persona & content personalization strategy</li>
            <li>Digital communications strategy</li>
            <li>Creative, social media & digital advertising strategy</li>
            <li>Business intelligence & reporting tools</li>
          </ul>

          {/* Conditional button */}
          <Link href={isAboutPage ? "/services" : "/about"} className="w-full">
            <Button className="uppercase bg-white text-main-black2 hover:bg-white/90 px-6 py-6 rounded-[4px] w-full sm:w-[200px] xl:w-full cursor-target">
              {isAboutPage ? "View Services" : "Learn More"}
            </Button>
          </Link>
        </motion.div>

        {/* Third image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden xl:block relative w-full max-w-[200px] mx-auto aspect-[3/4] xl:aspect-auto xl:h-full"
        >
          <Image
            src={about3}
            alt="about image 3"
            fill
            className="object-cover rounded-[8px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
