"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image, { type StaticImageData } from "next/image";

// Images
import p1 from "@/app/assets/p1.jpg";
import p2 from "@/app/assets/p2.jpg";
import p3 from "@/app/assets/p3.jpg";
import p4 from "@/app/assets/p4.jpg";
import p5 from "@/app/assets/p5.jpg";
import p6 from "@/app/assets/p6.jpg";

// Types
type WorkItem = {
  id: string | number;
  image: string | StaticImageData;
  title: string;
  desc: string;
  type: "development" | "dashboard" | "branding"; // Add more if needed
};

export default function SelectedWork() {
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<"all" | WorkItem["type"]>(
    "all"
  );

  const selectedWorks: WorkItem[] = [
    {
      id: 1,
      image: p1,
      title: "E-commerce Redesign",
      desc: "Faster checkout, modern UI, +27% conv.",
      type: "development",
    },
    {
      id: 2,
      image: p2,
      title: "Analytics Dashboard",
      desc: "Real-time KPIs with granular filters.",
      type: "dashboard",
    },
    {
      id: 3,
      image: p3,
      title: "Mobile App Development",
      desc: "Cross-platform solution with native performance.",
      type: "development",
    },
    {
      id: 4,
      image: p4,
      title: "Brand Identity System",
      desc: "Complete visual identity and design system.",
      type: "branding",
    },
    {
      id: 5,
      image: p5,
      title: "Brand Identity System",
      desc: "Complete visual identity and design system.",
      type: "branding",
    },
    {
      id: 6,
      image: p6,
      title: "Brand Identity System",
      desc: "Complete visual identity and design system.",
      type: "branding",
    },
  ];

  const filteredWorks =
    activeFilter === "all"
      ? selectedWorks
      : selectedWorks.filter((item) => item.type === activeFilter);

  // Animation settings
  const baseHidden = { opacity: 0, y: 30 };
  const baseShow = { opacity: 1, y: 0 };

  return (
    <motion.div className="w-full xl:py-12 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col gap-8 lg:gap-12">
        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {["all", "development", "dashboard", "branding"].map((filter) => (
            <button
              key={filter}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={() => setActiveFilter(filter as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium border border-main-primary transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-main-primary text-black"
                  : "border-white text-white hover:bg-white/10"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredWorks.map((item, index) => {
            const isFirstTwo = index < 2;

            return (
              <motion.div
                key={item.id}
                {...(isFirstTwo
                  ? {
                      initial: baseHidden,
                      animate: baseShow,
                      transition: { duration: 0.6, delay: index * 0.12 },
                    }
                  : {
                      initial: baseHidden,
                      whileInView: baseShow,
                      viewport: { once: true, amount: 0.25 },
                      transition: { duration: 0.6, delay: 0.08 },
                    })}
              >
                <Card className="group h-full rounded-[4px] border-none overflow-hidden bg-transparent cursor-pointer shadow-none cursor-target">
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
