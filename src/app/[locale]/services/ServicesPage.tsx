"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import TiltedCard from "@/components/TittedCard";
import SplitText from "@/components/SplitText";
import { Link } from "@/navigations";
import { useLocale, useTranslations } from "next-intl";
import { ServicesApiResponse } from "@/types/servicesApiTypes";
import Image from "next/image";

export default function ServicesPage({
  ServicesApiData,
}: {
  ServicesApiData: ServicesApiResponse;
}) {
  const locale = useLocale();
  const t = useTranslations("services");

  // scroll-motion variants
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

  // ✅ Map API data dynamically
  const CARDS = useMemo(
    () =>
      ServicesApiData.data.services.map((service) => ({
        id: service.id,
        title: service.name,
        blurb: service.short_desc,
        image: service.image,
        icon: service.icon,
        slug: service.slug,
      })),
    [ServicesApiData]
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
            threshold={0}
            rootMargin="0px"
            textAlign="center"
            initialHidden
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

      <motion.div
        className="flex flex-wrap items-center justify-center gap-10 pb-12"
        variants={listVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      >
        {CARDS.map(({ id, title, icon, slug }) => (
          <motion.div key={id} variants={itemVar}>
            <Link href={`/services/${slug}`}>
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
                  <div className="relative h-[320px] w-[320px] rounded-[15px] overflow-hidden">
                    <Image
                      src={icon}
                      alt={title}
                      fill
                      className="object-cover"
                    />

                    <div className="relative z-10 h-full w-full rounded-[15px] border-[2px] border-main-secondary flex flex-col items-center pt-6 justify-start gap-4 text-center">
                      <div className="flex flex-col items-center gap-2"></div>

                      <div className="text-base uppercase w-full tracking-wide text-main-primary mt-auto mb-5 bg-black/85 p-2">
                        {title}
                      </div>
                    </div>
                  </div>
                }
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
