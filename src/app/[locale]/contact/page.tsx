"use client";
import ContactUs from "@/components/conatct/ContactUs";
import SplitText from "@/components/SplitText";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const locale = useLocale();
  const t = useTranslations("contact");
  return (
    <div className="flex flex-col bg-main-black">
      <div className="h-[170px] sm:h-[200px] lg:h-[235px] justify-end py-6 xl:py-0 xl:h-[63vh] flex flex-col items-center xl:justify-center bg-main-black2 text-main-primary">
        {locale === "en" ? (
          <SplitText
            text={t("Contact Us")}
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
        ) : (
          <motion.h1
            dir="rtl"
            className="font-extrabold text-[clamp(44px,10vw,128px)] relative bg-clip-text text-transparent bg-gradient-to-b from-orange-300 to-[#F18A1D]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("Contact Us")}
          </motion.h1>
        )}
      </div>
      <ContactUs />;
    </div>
  );
}
