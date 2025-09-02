"use client";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useLocale } from "next-intl";
import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import MultiLineUnderline from "../MultiLineUnderline";
import { Link } from "@/navigations";

type BlogItem = {
  id: string | number;
  image: string | StaticImageData;
  desc: string;
  date: string;
};

export default function OurBlogs({ items = [] }: { items?: BlogItem[] }) {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // cards enter from logical "start" + up
  const cardVar = {
    hidden: { opacity: 0, x: isRTL ? 40 : -40, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay: 0.15 * i, ease: easeOut },
    }),
  };

  // Measure card height and enable step transforms only on lg+ to keep smaller screens clean
  const gridRef = React.useRef<HTMLDivElement | null>(null);
  const [cardH, setCardH] = React.useState(0);
  const [isLg, setIsLg] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)"); // lg
    const updateIsLg = () => setIsLg(mql.matches);
    updateIsLg();
    mql.addEventListener("change", updateIsLg);
    return () => mql.removeEventListener("change", updateIsLg);
  }, []);

  React.useEffect(() => {
    if (!gridRef.current) return;

    const measure = () => {
      const cards = Array.from(
        gridRef.current!.querySelectorAll<HTMLElement>(".js-card")
      );
      if (!cards.length) return;
      const maxH = Math.max(...cards.map((el) => el.offsetHeight));
      setCardH(maxH);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(gridRef.current);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  // Helper: style object for step wrapper
  const stepStyle = (step: 0 | 1 | 2): React.CSSProperties =>
    isLg && cardH
      ? {
          // step = 2 => 70%, step = 1 => 35%, step = 0 => 0%
          transform: `translateY(${cardH * 0.35 * step}px)`,
          willChange: "transform",
        }
      : {};

  // Helper to safely read item fields
  const get = (idx: number) => items[idx];

  return (
    <section className="w-full min-h-fit lg:max-h-screen bg-main-black text-main-white flex flex-col gap-6 md:gap-8 xl:gap-0 justify-start items-center py-10 xl:pt-16 border-b border-white/10">
      <div className="sm:container mx-auto flex flex-col gap-6">
        <div className="w-full flex flex-col gap-8 items-start px-4 xl:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="uppercase py-3 px-4 border rounded-full"
          >
            Our Blog
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-7xl lg:max-w-[80%] xl:max-w-[50%] font-bold text-center capitalize"
          >
            Latest News
          </motion.h2>

          {/* Short description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/70 text-base md:text-lg text-start lg:max-w-[60%] xl:max-w-[50%]"
          >
            Insights, tips, and updates from our team—covering design,
            development, and product growth. Dive in for quick reads and
            practical takeaways.
          </motion.p>

          <Link href={"/blog"} className="z-50">
            <Button
              className="uppercase bg-main-white text-main-text hover:bg-white/90 p-6 border !rounded-[4px] z-50 cursor-target"
              variant="default"
            >
              VIEW BLOG
            </Button>
          </Link>
        </div>

        {/* Ladder cards — first = lowest step (70%), second = 35%, third = 0% */}
        <div
          ref={gridRef}
          className={`w-full px-4 xl:px-6 lg:-mt-32 xl:-mt-48 grid grid-cols-1 md:grid-cols-3 gap-6 ${
            isRTL ? "md:[direction:rtl]" : ""
          }`}
          style={
            cardH
              ? ({
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ["--card-h" as any]: `${cardH}px`,
                } as React.CSSProperties)
              : undefined
          }
        >
          {/* Step 1 — lowest (70%) */}
          <div style={stepStyle(2)}>
            <motion.article
              custom={0}
              variants={cardVar}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="w-full js-card cursor-pointer"
            >
              <div className="group rounded-[6px] overflow-hidden cursor-target">
                {/* IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {get(0)?.image ? (
                    <Image
                      src={get(0)!.image}
                      alt={get(0)?.desc ?? "Blog image"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-[6px]"
                      sizes="(min-width:1024px) 33vw, 100vw"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10" />
                  )}
                </div>

                <div className="py-5 flex flex-col gap-4 mt-2">
                  <h3 className="text-xl font-semibold leading-tight cursor-pointer">
                    <MultiLineUnderline
                      color="#fff"
                      thickness={1}
                      gap={6}
                      duration={500}
                      delay={140}
                      rtl={isRTL}
                    >
                      {get(0)?.desc}
                    </MultiLineUnderline>
                  </h3>
                  <div className="text-base text-white/90">{get(0)?.date}</div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Step 2 — middle (35%) */}
          <div style={stepStyle(1)}>
            <motion.article
              custom={1}
              variants={cardVar}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="w-full cursor-pointer"
            >
              <div className="group  rounded-[6px] overflow-hidden cursor-target cursor-pointer">
                {/* IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {get(1)?.image ? (
                    <Image
                      src={get(1)!.image}
                      alt={get(1)?.desc ?? "Blog image"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105  rounded-[6px]"
                      sizes="(min-width:1024px) 33vw, 100vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10" />
                  )}
                </div>

                <div className="py-5 flex flex-col gap-4 mt-2">
                  <h3 className="text-xl font-semibold leading-tight cursor-pointer">
                    <MultiLineUnderline
                      color="#fff"
                      thickness={1}
                      gap={6}
                      duration={500}
                      delay={140}
                      rtl={isRTL}
                    >
                      {get(1)?.desc}
                    </MultiLineUnderline>
                  </h3>
                  <div className="text-base text-white/90">{get(1)?.date}</div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Step 3 — highest (0%) */}
          <div style={stepStyle(0)}>
            <motion.article
              custom={2}
              variants={cardVar}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="w-full js-card cursor-pointer"
            >
              <div className="group rounded-[6px] overflow-hidden cursor-target">
                {/* IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {get(2)?.image ? (
                    <Image
                      src={get(2)!.image}
                      alt={get(2)?.desc ?? "Blog image"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-[6px]"
                      sizes="(min-width:1024px) 33vw, 100vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/10" />
                  )}
                </div>

                <div className="py-5 flex flex-col gap-4 mt-2">
                  <h3 className="text-xl font-semibold leading-tight cursor-pointer">
                    <MultiLineUnderline
                      color="#fff"
                      thickness={1}
                      gap={6}
                      duration={500}
                      delay={140}
                      rtl={isRTL}
                    >
                      {get(2)?.desc}
                    </MultiLineUnderline>
                  </h3>
                  <div className="text-base text-white/90">{get(2)?.date}</div>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Spacer to ensure the lowest stepped card is fully scrollable/visible */}
          {isLg && cardH > 0 && (
            <div
              aria-hidden
              className="col-span-full"
              style={{ height: `${cardH * 0.7}px` }} // 70% of card height (max drop)
            />
          )}
        </div>
      </div>
    </section>
  );
}
