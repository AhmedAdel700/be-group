"use client";
import { motion } from "motion/react";
import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "@/navigations";

type LogoItem = {
  src: string | StaticImageData;
  alt?: string;
  href?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

type LogoCarouselProps = {
  logos: LogoItem[];
  locale?: "ar" | "en" | string;
  delayMs?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export default function LogoCarousel({
  logos,
  locale = typeof window !== "undefined"
    ? document.documentElement.lang || "en"
    : "en",
  delayMs = 2500,
  className = "",
  pauseOnHover = true,
}: LogoCarouselProps) {
  const isRTL = locale?.toLowerCase().startsWith("ar");

  const autoplay = React.useRef(
    Autoplay({
      delay: delayMs,
      stopOnInteraction: false,
      stopOnMouseEnter: pauseOnHover,
      playOnInit: true,
    })
  );

  React.useEffect(() => {
    autoplay.current.options.delay = delayMs;
    autoplay.current.options.stopOnMouseEnter = pauseOnHover;
  }, [delayMs, pauseOnHover]);

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className={className}>
      <div className="w-full flex justify-center items-center flex-col text-main-white gap-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="uppercase py-3 px-4 border rounded-full"
        >
          Our Clients
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:max-w-[80%] xl:max-w-[50%] font-bold text-center capitalize"
        >
          Some Our Clients
        </motion.h2>
      </div>

      <Carousel
        opts={{
          align: "center",
          containScroll: "trimSnaps",
          loop: true,
          direction: isRTL ? "rtl" : "ltr",
          dragFree: false,
          skipSnaps: false,
        }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        {/* Remove the default left negative margin and item padding */}
        <CarouselContent className="ms-0 gap-2 [&>div]:ps-0">
          {logos.map((logo, idx) => (
            <CarouselItem
              key={`${logo.src}-${idx}`}
              // smaller basis so items take less width
              className="ps-0 basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-[12%]"
            >
              <div className="flex min-h-[10rem] w-full items-center justify-center">
                <Link
                  href={logo?.href || "."}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center"
                  aria-label={logo.alt || "Logo"}
                >
                  <div className="flex flex-col items-center w-full">
                    {/* Line aligned to start */}
                    <div className="flex w-full">
                      <span className="block w-full h-[2px] rounded-full bg-main-primary mb-1" />
                    </div>

                    {/* Image */}
                    <div className="relative flex items-center justify-center w-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt || "Logo"}
                        width={logo.width || 120}
                        height={logo.height || 60}
                        priority={logo.priority}
                        className="h-52 w-auto object-contain relative z-10"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent rounded-lg" />
                    </div>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
