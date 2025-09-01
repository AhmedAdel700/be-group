"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import whyUsImage from "@/app/assets/whyUs.jpg";
import { Gem, Palette, Pencil, Star } from "lucide-react";
import { motion } from "motion/react";

type MarqueeGroupProps = {
  text: string;
  count?: number;
  ariaHidden?: boolean;
};

export default function WhyChooseUs() {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const text = isRTL ? "لماذا تختارنا؟" : "Why Choose Us?";

  return (
    <section className="w-full min-h-fit xl:min-h-screen bg-main-black text-main-white py-8 xl:py-20 border-b border-white/10 overflow-hidden">
      <div
        className={`relative h-[100px] md:h-[200px] flex items-center marquee-mask select-none`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div
          className={`marquee-track ${isRTL ? "marquee-rtl" : "marquee-ltr"}`}
          aria-hidden="false"
        >
          <MarqueeGroup text={text} count={8} />
          <MarqueeGroup text={text} ariaHidden count={8} />
        </div>
      </div>

      <div className="px-4 sm:px-0 sm:container pt-10 flex flex-col gap-24 mx-auto xl:ps-20">
        {/* image (fade-in only) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-center sm:justify-start sm:ps-4"
        >
          <Image
            src={whyUsImage}
            alt="why choose us image"
            className="rounded-[150px] sm:max-w-[50%] lg:max-w-full"
            width={525}
          />
        </motion.div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl sm:px-6 lg:px-8">
            {/* first row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-16 lg:gap-32">
              {/* 01 (fade-in only) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="flex gap-4 items-center">
                  <h5 className="self-start font-medium text-xl">01</h5>
                  <Gem
                    size={65}
                    strokeWidth={1}
                    className="text-main-primary"
                  />
                </div>

                <div className="flex">
                  <div className="hidden sm:block w-12"></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-5xl font-bold">Unique</h3>
                    <h3 className="text-5xl font-normal text-main-primary">
                      Design
                    </h3>
                  </div>
                </div>

                <div className="flex mt-12">
                  <div className="hidden sm:block w-12"></div>
                  <p className="w-full sm:w-full leading-relaxed">
                    We create designs that are more than just visuals — they are
                    experiences carefully crafted to stand out. Every detail is
                    thoughtfully considered, from colors and typography to
                    layout and user interaction, ensuring originality and
                    elegance in every project. Our focus on individuality means
                    that what you receive is not only functional but also
                    visually distinctive, leaving a strong and lasting
                    impression.
                  </p>
                </div>
              </motion.div>

              {/* 02 (keeps md:translate-y-[-150px], fade-in only) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6 md:translate-y-[-150px]"
              >
                <div className="flex gap-4 items-center">
                  <h5 className="self-start font-medium text-xl">02</h5>
                  <Pencil
                    size={65}
                    strokeWidth={1}
                    className="text-main-primary"
                  />
                </div>

                <div className="flex">
                  <div className="hidden sm:block w-12"></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-5xl font-bold">Quality</h3>
                    <h3 className="text-5xl font-normal text-main-primary">
                      Code
                    </h3>
                  </div>
                </div>

                <div className="flex mt-12">
                  <div className="hidden sm:block w-12"></div>
                  <p className="w-full sm:w-full leading-relaxed">
                    Great products start with great code. We write clean,
                    reliable, and scalable code that follows industry best
                    practices and modern standards. By focusing on performance,
                    security, and maintainability, we ensure your solution is
                    built for today’s needs and ready for tomorrow’s growth.
                    Every line is written with care to minimize errors, maximize
                    efficiency, and create a foundation that can handle
                    complexity with ease.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* second row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-16 lg:gap-32 mt-24">
              {/* 03 (fade-in only) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="flex gap-4 items-center">
                  <h5 className="self-start font-medium text-xl">03</h5>
                  <Palette
                    size={65}
                    strokeWidth={1}
                    className="text-main-primary"
                  />
                </div>

                <div className="flex">
                  <div className="hidden sm:block w-12"></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-5xl font-bold">Clean and</h3>
                    <h3 className="text-5xl font-normal text-main-primary">
                      Minimal
                    </h3>
                  </div>
                </div>

                <div className="flex mt-12">
                  <div className="hidden sm:block w-12"></div>
                  <p className="w-full sm:w-full leading-relaxed">
                    We believe simplicity is the ultimate sophistication. Our
                    designs follow a clean and minimal philosophy, stripping
                    away unnecessary clutter and focusing on what truly matters.
                    This approach ensures clarity, elegance, and ease of use,
                    allowing your brand’s identity to shine. By combining
                    minimal aesthetics with powerful functionality, we create
                    solutions that feel modern, refined, and timeless.
                  </p>
                </div>
              </motion.div>

              {/* 04 (keeps md:translate-y-[-150px], fade-in only) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6 md:translate-y-[-150px]"
              >
                <div className="flex gap-4 items-center">
                  <h5 className="self-start font-medium text-xl">04</h5>
                  <Star
                    size={65}
                    strokeWidth={1}
                    className="text-main-primary"
                  />
                </div>

                <div className="flex">
                  <div className="hidden sm:block w-12"></div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-5xl font-bold">Premium</h3>
                    <h3 className="text-5xl font-normal text-main-primary">
                      Support
                    </h3>
                  </div>
                </div>

                <div className="flex mt-12">
                  <div className="hidden sm:block w-12"></div>
                  <p className="w-full sm:w-full leading-relaxed">
                    Our commitment doesn’t stop at delivery — we stand by you
                    with premium support whenever you need it. From quick
                    responses to complex problem-solving, our team is dedicated
                    to keeping your project running smoothly. We value
                    relationships and strive to provide guidance, updates, and
                    assistance that make your experience worry-free. With us,
                    you gain a reliable partner who ensures your journey is as
                    seamless as the final result.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeGroup({
  text,
  count = 5,
  ariaHidden = false,
}: MarqueeGroupProps) {
  return (
    <div className="marquee-group" aria-hidden={ariaHidden ? "true" : "false"}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="mx-4 lg:mx-8 xl:mx-12 text-5xl md:text-7xl xl:text-[150px] font-medium whitespace-nowrap"
        >
          {text}
        </span>
      ))}
    </div>
  );
}
