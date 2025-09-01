// app/components/Hero.tsx
"use client";

import { useLocale } from "next-intl";
import Prism from "../Prism";
import SplitText from "../SplitText";
import { Button } from "../ui/button";
import { motion, type Variants, cubicBezier } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";
import { Link } from "@/navigations";

export default function Hero() {
  const locale = useLocale();

  const WhatsAppIcon = ({
    size = 26,
    className = "",
  }: {
    size?: number;
    className?: string;
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.77 11.77 0 0 0 12.02 0C5.42 0 .06 5.36.06 11.96c0 2.11.56 4.14 1.62 5.94L0 24l6.28-1.65c1.73.94 3.68 1.43 5.7 1.43 6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.22-3.42-8.34ZM11.98 21.2a9.2 9.2 0 0 1-4.68-1.27l-.34-.2-3.74.98 1-3.64-.22-.36A9.17 9.17 0 1 1 11.98 21.2Z" />
      <path d="M16.89 13.62c-.22-.12-1.31-.68-1.52-.76-.2-.07-.34-.11-.49.11-.14.2-.55.74-.67.9-.12.15-.24.17-.45.06-.22-.12-.87-.32-1.66-1.03-.61-.54-1.02-1.2-1.14-1.4-.12-.2-.01-.31.09-.41.1-.1.2-.24.3-.36.1-.12.13-.21.2-.36.07-.15.03-.27-.02-.38-.06-.11-.46-1.18-.63-1.61-.17-.42-.33-.36-.45-.36h-.52c-.17 0-.39.06-.58.28-.2.22-.75.73-.75 1.78 0 1.05.76 2.04.87 2.18.12.14 1.49 2.27 3.64 3.2.51.22.91.35 1.22.45.51.17.98.14 1.35.08.41-.06 1.3-.52 1.48-1.01.18-.5.18-.92.13-1.01-.05-.08-.2-.14-.42-.25Z" />
    </svg>
  );

  const dir = locale === "ar" ? 1 : -1;
  const easeOut = cubicBezier(0.22, 1, 0.36, 1);

  const ctaContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const ctaItem: Variants = {
    hidden: { opacity: 0, x: 28 * dir },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: easeOut },
    },
  };

  const arrowItem: Variants = {
    hidden: { opacity: 0, x: -20 * dir },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-screen bg-main-black2 text-main-primary">
      {/* Floating CTA buttons */}
      <motion.div
        variants={ctaContainer}
        initial="hidden"
        animate="show"
        className={`fixed ${
          locale === "en" ? "left-5" : "right-5"
        } bottom-5 flex flex-col gap-5 z-[100]`}
      >
        {/* WhatsApp CTA */}
        <motion.div variants={ctaItem}>
          <Button
            asChild
            className="!rounded-[6px] h-10 px-3 bg-main-secondary text-black hover:bg-[#F18A1D]/90 shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2"
            >
              <WhatsAppIcon size={24} className="text-black" />
            </Link>
          </Button>
        </motion.div>

        {/* Phone CTA */}
        <motion.div variants={ctaItem}>
          <Button
            asChild
            className="!rounded-[6px] h-10 px-3 bg-main-secondary text-black hover:bg-[#F18A1D]/90 shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link
              href="tel:+201234567890"
              aria-label="Call us"
              className="flex items-center gap-2"
            >
              <Phone size={24} className="text-black" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        variants={arrowItem}
        initial="hidden"
        animate="show"
        onClick={() => {
          window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth",
          });
        }}
        aria-label="Scroll to next section"
        className={`absolute bottom-16 ${
          locale === "en" ? "right-5" : "left-5"
        } z-[100] rounded-full border border-main-secondary w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]`}
      >
        <ArrowDown size={24} />
      </motion.button>

      <div className="relative w-full h-[100vh] flex items-center justify-center">
        {/* <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        /> */}

        {/* Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-block">
            <SplitText
              text="Be Group"
              tag="h1"
              className="font-extrabold leading-[1.2] text-[clamp(44px,10vw,128px)] relative"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              initialHidden={true}
            />
          </div>

          <div className="inline-block">
            <SplitText
              text="We Provide Digital Marketing"
              tag="p"
              className="mt-5 font-semibold leading-[1.3] text-[clamp(20px,5.5vw,56px)] max-w-[90ch]"
              delay={100}
              duration={0.6}
              initialHidden={true}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            {/* Progress line */}
            <div className="mt-6 h-[4px] bg-main-primary origin-left scale-x-0 grow-line w-[90%] mx-auto" />

            <motion.div
              className="mt-8 flex flex-col lg:flex-row justify-around items-center gap-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
            >
              <h4 className="uppercase text-main-white text-sm sm:text-lg">
                Digital Services has never been easier
              </h4>
              <Button
                className="uppercase bg-main-white text-main-text hover:bg-white/90 p-6 border !rounded-[4px]"
                variant="default"
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Discover Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
