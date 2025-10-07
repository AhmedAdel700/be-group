"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import TiltedCard from "@/components/TittedCard";
import SplitText from "@/components/SplitText";
import { Link } from "@/navigations";
import { servicesData } from "@/data/servicesData";
import { useLocale, useTranslations } from "next-intl";

type CardInfo = {
  id: number;
  title: string;
  blurb: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  content: React.ReactNode;
};

export default function Page() {
  const locale = useLocale();
  const t = useTranslations("services");
  // scroll-motion variants (added)
  const easeOut = [0.22, 1, 0.36, 1] as const;
  const listVar = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
      },
    }),
    []
  );
  const itemVar = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24, scale: 0.98 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: easeOut },
      },
    }),
    []
  );

  const CARDS: CardInfo[] = useMemo(
    () =>
      servicesData.map((service) => ({
        id: service.id,
        title: service.title,
        Icon: service.icon,
        blurb: service.blurb,
        content: service.content,
        image: service.image,
      })),
    []
  );

  return (
    <section className="min-h-screen bg-main-black2 text-main-white flex flex-col items-center">
      <div className="w-full bg-main-black2 text-main-primary flex flex-col items-center justify-end xl:justify-center py-6 xl:py-0 h-[140px] sm:h-[180px] lg:h-[220px] xl:h-[63vh]">
        {locale === "en" ? (
          <SplitText
            text={t("Our Services")}
            tag="h1"
            className="font-extrabold leading-[1.2] text-[clamp(44px,10vw,128px)] relative"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0} // fire as soon as it's on screen
            rootMargin="0px" // no waiting
            textAlign="center"
            initialHidden // start hidden → show on mount
          />
        ) : (
          <motion.h1
            dir="rtl"
            className="font-extrabold text-[clamp(44px,10vw,128px)] relative bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-[#F18A1D]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("Our Services")}
          </motion.h1>
        )}
      </div>

      {/* scroll-animated cards list (added) */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-10 pb-12"
        variants={listVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      >
        {CARDS.map(({ id, title, blurb, Icon }) => {
          const service = servicesData.find((s) => s.id === id);
          return (
            <motion.div key={id} variants={itemVar}>
              <Link href={`/services/${service?.slug}`}>
                <TiltedCard
                  altText={title}
                  containerHeight="320px"
                  containerWidth="320px"
                  imageHeight="320px"
                  imageWidth="320px"
                  rotateAmplitude={12}
                  scaleOnHover={1.12}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent
                  overlayContent={
                    <div className="h-[320px] w-[320px] rounded-[15px] overflow-hidden bg-main-black">
                      <div className="h-full w-full rounded-[15px] border border-main-secondary bg-white/5 backdrop-blur-sm flex flex-col items-center pt-6 justify-start gap-4 text-center">
                        <span className="inline-flex items-center justify-center h-20 w-20 rounded-full border border-main-primary/30 bg-main-primary/10">
                          <Icon className="h-10 w-10 text-main-primary" />
                        </span>
                        <div className="flex flex-col items-center gap-2">
                          <h3 className="text-xl font-semibold">{title}</h3>
                          <p className="text-sm opacity-80 max-w-[240px]">
                            {blurb}
                          </p>
                        </div>
                        <div className="text-xs uppercase tracking-wide text-main-primary/80 mt-auto mb-5">
                          Click for details
                        </div>
                      </div>
                    </div>
                  }
                />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
