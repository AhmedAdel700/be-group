"use client";

import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Clock,
  Zap,
  Wifi,
  ChevronsDown,
  ChevronsUp,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showMore ? contentRef.current.scrollHeight : 0);
    }
  }, [showMore]);

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("title")}</h2>

            {/* Always visible paragraphs */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed transition-all duration-500">
              <span className="font-semibold">{t("paragraph1.brand")}</span> {t("paragraph1.content")}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed transition-all duration-500">
              {t("paragraph2.prefix")} <span className="font-semibold">{t("paragraph2.brand")}</span> {t("paragraph2.content")}
            </p>

            {/* Transitioned wrapper */}
            <div
              className="transition-all duration-700 ease-in-out overflow-hidden"
              style={{ maxHeight: `${height}px`, opacity: showMore ? 1 : 0 }}
            >
              <div ref={contentRef} className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("paragraph3.prefix")} <span className="font-semibold">{t("paragraph3.brand")}</span> {t("paragraph3.content")}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">{t("paragraph4.brand")}</span> {t("paragraph4.content")}
                </p>
              </div>
            </div>

            {/* Show More/Less Toggle */}
            <button
              onClick={() => setShowMore(!showMore)}
              className={`flex items-center text-base font-semibold ${showMore && "mt-4"}`}
              style={{ color: "#2A4D8A" }}
            >
              {showMore ? t("toggle.hide") : t("toggle.show")}
              {showMore ? (
                <ChevronsUp
                  className="w-5 h-5 mr-2 rtl:ml-2"
                  style={{ color: "#2A4D8A" }}
                />
              ) : (
                <ChevronsDown
                  className="w-5 h-5 mr-2 rtl:ml-2"
                  style={{ color: "#2A4D8A" }}
                />
              )}
            </button>

            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                {t("badges.energyStandards")}
              </Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                {t("badges.aiSupported")}
              </Badge>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: t("features.comprehensiveAutomation"), color: "text-blue-600" },
                  { icon: Wifi, title: t("features.directIntegration"), color: "text-green-600" },
                  {
                    icon: Shield,
                    title: t("features.highSecurity"),
                    color: "text-purple-600",
                  },
                  {
                    icon: Clock,
                    title: t("features.timeSaving"),
                    color: "text-orange-600",
                  },
                ].map(({ icon: Icon, title, color }, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-4 text-center shadow-sm"
                  >
                    <Icon className={`w-8 h-8 ${color} mx-auto mb-2`} />
                    <h4 className="font-bold text-sm sm:text-base md:text-lg">{title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
