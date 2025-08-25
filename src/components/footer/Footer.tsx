"use client";

import { Link } from "@/navigations";
import Image from "next/image";
import LogoLight from "@/app/assets/logoLight.svg";
import LogoDark from "@/app/assets/logoDark.svg";
import Sent from "@/app/assets/sent.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const footerVar: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
};

const colVar: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const linksVar: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const linkVar: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const tailVar: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut, delay: 0.1 },
  },
};

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.footer
      variants={footerVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="px-4 xl:px-0 container mx-auto py-10 flex flex-col gap-[72px]"
    >
      <div className="flex justify-between items-center flex-wrap gap-y-10">
        <motion.div variants={colVar}>
          <Image
            src={!mounted || resolvedTheme === "light" ? LogoLight : LogoDark}
            alt="Robotics Logo"
            width={170}
            height={106}
            priority
          />
        </motion.div>

        <motion.div
          variants={colVar}
          className="flex flex-col items-start gap-8"
        >
          <h4 className="font-bold text-base text-main-text">Quick Links</h4>

          <motion.div
            variants={linksVar}
            className="grid grid-cols-3 gap-8 text-main-text text-base"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/courses", label: "Courses" },
              { href: "/about", label: "About Us" },
              { href: "/market", label: "Market" },
              { href: "/contact", label: "Contact Us" },
            ].map((l) => (
              <motion.div key={l.href} variants={linkVar}>
                <Link className="text-black-tint-20" href={l.href}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={colVar}
          className="flex flex-col items-start gap-8"
        >
          <h4 className="font-bold text-base text-main-text">Subscribe</h4>
          <p className="font-bold text-base text-black-tint-20">
            Don’t miss our future updates! Get Subscribed Today!
          </p>

          <div className="flex items-center gap-2 w-full">
            <Input
              type="email"
              placeholder="example@gmail.com"
              className="w-[90%] xl:w-[385px] h-[40px] border border-black-tint-10 rounded-[8px] bg-black-tint-3 text-main-text placeholder:text-black-tint-50"
            />

            <Button className="!bg-main-primary text-main-white w-10 h-10 rounded-[8px] !p-0">
              <Image
                src={Sent}
                alt="Sent"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={tailVar}
        className="border-t border-black-tint-10 w-full h-[60px] sm:h-[47px] text-black-tint-70 text-base font-normal flex items-end leading-normal"
      >
        All Rights Reserved to Robotic © Developed by BeTech 2025
      </motion.div>
    </motion.footer>
  );
}
