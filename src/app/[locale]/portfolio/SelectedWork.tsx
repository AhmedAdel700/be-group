"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import placeHolder from "@/app/assets/6.png";

type WorkItem = {
  id: string | number;
  image: string | StaticImageData;
  title: string;
  desc: string;
};

export default function SelectedWork() {
  const locale = useLocale();

  const selectedWorks: WorkItem[] = [
    {
      id: 1,
      image: placeHolder,
      title: "E-commerce Redesign",
      desc: "Faster checkout, modern UI, +27% conv.",
    },
    {
      id: 2,
      image: placeHolder,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
    },
    {
      id: 3,
      image: placeHolder,
      title: "Mobile App Development",
      desc: "Cross-platform solution with native performance.",
    },
    {
      id: 4,
      image: placeHolder,
      title: "Brand Identity System",
      desc: "Complete visual identity and design system.",
    },
    {
      id: 5,
      image: placeHolder,
      title: "Brand Identity System",
      desc: "Complete visual identity and design system.",
    },
    {
      id: 6,
      image: placeHolder,
      title: "Brand Identity System",
      desc: "Complete visual identity and design system.",
    },
  ];

  // shared timings
  const baseHidden = { opacity: 0, y: 30 };
  const baseShow = { opacity: 1, y: 0 };

  return (
    <motion.div
      // keep container static so it doesn't trigger children
      className="w-full xl:py-12 px-4 sm:px-6"
    >
      <div className="container mx-auto">
        {/* 2 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {selectedWorks.map((item, index) => {
            const isFirstTwo = index < 2;

            return (
              <motion.div
                key={item.id}
                // FIRST TWO: animate on mount (page load)
                {...(isFirstTwo
                  ? {
                      initial: baseHidden,
                      animate: baseShow,
                      transition: { duration: 0.6, delay: index * 0.12 },
                    }
                  : {
                      // OTHERS: animate when scrolled into view
                      initial: baseHidden,
                      whileInView: baseShow,
                      viewport: { once: true, amount: 0.25 },
                      transition: { duration: 0.6, delay: 0.08 },
                    })}
              >
                <Card className="group h-full rounded-[4px] border-none overflow-hidden bg-transparent cursor-pointer shadow-none">
                  <CardContent className="p-0 flex flex-col">
                    {/* Image */}
                    <div className="relative w-full overflow-hidden rounded-[4px]">
                      <div className="relative w-full aspect-[16/10]">
                        <Image
                          src={item.image}
                          alt={item.title || `Work ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                          sizes="(min-width:768px) 50vw, 100vw"
                          // prioritize only first two for LCP
                          priority={isFirstTwo}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`py-4 flex flex-col gap-2 mt-2 transform transition-transform duration-500 ease-out ${
                        locale === "en"
                          ? "group-hover:translate-x-3"
                          : "group-hover:-translate-x-3"
                      }`}
                    >
                      <h3 className="text-white text-base sm:text-xl font-semibold leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
