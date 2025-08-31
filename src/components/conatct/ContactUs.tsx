"use client";

import Image from "next/image";
import conactImage from "@/app/assets/contact.jpg";
import { MapPin, Mail, Smartphone } from "lucide-react";
import ContactForm from "./ContactForm";
import { motion, type Variants } from "framer-motion";

// ===== Easing / shared timing =====
const easeOut = [0.22, 1, 0.36, 1] as const;

// ===== Variants (different from fade-up) =====
const containerVar: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const leftInSpring: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.7 },
  },
};

const rightInSpring: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.7 },
  },
};

// Clip-mask "wipe" reveal
const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0 round 8px)" },
  show: {
    clipPath: "inset(0 0 0% 0 round 8px)",
    transition: { duration: 0.8, ease: easeOut },
  },
};

// Subtle scale-in for media
const scaleIn: Variants = {
  hidden: { scale: 1.06, opacity: 0.8 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

// Pop + blur reveal for cards/items
const popBlurIn: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function ContactUs() {
  return (
    <section className="w-full min-h-fit xl:min-h-screen bg-main-black2 text-main-white border-b border-white/10 px-4 py-10 xl:py-24">
      <motion.div
        className="flex flex-col gap-8 xl:gap-20 justify-start items-center container mx-auto"
        variants={containerVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Top row with text + image */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-28 items-start w-full">
          {/* Text column */}
          <motion.div
            className="w-full xl:w-[30%] flex flex-col gap-8"
            variants={leftInSpring}
          >
            <h2 className="text-7xl capitalize text-center sm:text-start">
              Let’s work <br /> together
            </h2>

            <p className="text-lg text-white/80 text-center sm:text-start">
              Our team is ready to discuss your project requirements, explore
              collaboration opportunities, and answer any questions you may
              have. We value transparency and responsiveness. Expect a reply
              within 24–48 hours from our dedicated support team.
            </p>

            <p className="text-lg text-white/80 text-center sm:text-start">
              Please fill in the quick form and we will be in touch with you as
              soon as possible.
            </p>
          </motion.div>

          {/* Image column (mask reveal + scale-in) */}
          <motion.div
            className="w-full xl:w-[70%] rounded-[8px] overflow-hidden will-change-[clip-path]"
            variants={rightInSpring}
            style={{ contain: "paint" }}
          >
            <motion.div variants={maskReveal}>
              <motion.div variants={scaleIn}>
                <Image
                  src={conactImage}
                  alt="Contact us image"
                  className="w-full h-auto object-cover rounded-[8px]"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex flex-col xl:flex-row gap-8 xl:gap-28 w-full items-stretch"
          variants={containerVar}
        >
          {/* Contact Info — self-scoped animation */}
          <motion.div
            className="w-full xl:w-[30%] border border-white/30 rounded-lg overflow-hidden"
            variants={popBlurIn}
            inherit={false} // ⬅️ stop parent variant propagation
            initial="hidden" // ⬅️ only this block controls itself
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }} // ⬅️ fire when ~40% in view
          >
            <div className="grid grid-rows-3 grid-cols-[30%_70%] divide-x divide-y divide-white/30 text-white relative h-full min-h-[240px]">
              <span className="pointer-events-none absolute top-0 bottom-0 left-[30%] w-px bg-white/30" />

              {/* Icon cell */}
              <motion.div
                className="flex justify-center items-center p-4"
                variants={popBlurIn}
              >
                {/* float only while in view */}
                <motion.div
                  whileInView={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  viewport={{ margin: "-10% 0px -10% 0px" }}
                >
                  <MapPin size={28} />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center p-4 text-lg"
                variants={popBlurIn}
              >
                123 Main Street, Cairo, Egypt
              </motion.div>

              <motion.div
                className="flex justify-center items-center p-4"
                variants={popBlurIn}
              >
                <motion.div
                  whileInView={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  viewport={{ margin: "-10% 0px -10% 0px" }}
                >
                  <Mail size={28} />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center p-4 text-lg"
                variants={popBlurIn}
              >
                contact@company.com
              </motion.div>

              <motion.div
                className="flex justify-center items-center p-4"
                variants={popBlurIn}
              >
                <motion.div
                  whileInView={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  viewport={{ margin: "-10% 0px -10% 0px" }}
                >
                  <Smartphone size={28} />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center p-4 text-lg"
                variants={popBlurIn}
              >
                +20 100 123 4567
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form (unchanged) */}
          <motion.div className="w-full xl:w-[70%]" variants={popBlurIn}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
