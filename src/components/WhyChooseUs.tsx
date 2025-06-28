"use client";

import { useState, useRef, useEffect } from "react";
import {
  Shield,
  Wifi,
  CheckCircle,
  BarChart3,
  Database,
  TrendingUp,
  Smartphone,
  Cloud,
  Clock,
  Users,
  Activity,
  Bell,
  Thermometer,
  Ruler,
  Link2,
  Fuel,
  Truck,
  ChevronsDown,
  ChevronsUp,
} from "lucide-react";
import { useTranslations } from "next-intl";

type Feature = {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const features: Feature[] = [
    {
      title: t("features.zatca.title"),
      desc: t("features.zatca.desc"),
      icon: Shield,
    },
    {
      title: t("features.centralIntegration.title"),
      desc: t("features.centralIntegration.desc"),
      icon: Wifi,
    },
    {
      title: t("features.energyStandards.title"),
      desc: t("features.energyStandards.desc"),
      icon: CheckCircle,
    },
    {
      title: t("features.posIntegration.title"),
      desc: t("features.posIntegration.desc"),
      icon: BarChart3,
    },
    {
      title: t("features.tankMeasurement.title"),
      desc: t("features.tankMeasurement.desc"),
      icon: Database,
    },
    {
      title: t("features.priceUpdate.title"),
      desc: t("features.priceUpdate.desc"),
      icon: TrendingUp,
    },
    {
      title: t("features.selfService.title"),
      desc: t("features.selfService.desc"),
      icon: Smartphone,
    },
    {
      title: t("features.dataStorage.title"),
      desc: t("features.dataStorage.desc"),
      icon: Cloud,
    },
    {
      title: t("features.shiftClosure.title"),
      desc: t("features.shiftClosure.desc"),
      icon: Clock,
    },
    {
      title: t("features.customerLoyalty.title"),
      desc: t("features.customerLoyalty.desc"),
      icon: Users,
    },
    {
      title: t("features.erpSystem.title"),
      desc: t("features.erpSystem.desc"),
      icon: Activity,
    },
    {
      title: t("features.digitalTransformation.title"),
      desc: t("features.digitalTransformation.desc"),
      icon: CheckCircle,
    },
    {
      title: t("features.maintenanceAlerts.title"),
      desc: t("features.maintenanceAlerts.desc"),
      icon: Bell,
    },
    {
      title: t("features.waterTemperature.title"),
      desc: t("features.waterTemperature.desc"),
      icon: Thermometer,
    },
    {
      title: t("features.tankCalculation.title"),
      desc: t("features.tankCalculation.desc"),
      icon: Ruler,
    },
    {
      title: t("features.systemIntegration.title"),
      desc: t("features.systemIntegration.desc"),
      icon: Link2,
    },
    {
      title: t("features.driverFuelMonitoring.title"),
      desc: t("features.driverFuelMonitoring.desc"),
      icon: Fuel,
    },
    {
      title: t("features.transportManagement.title"),
      desc: t("features.transportManagement.desc"),
      icon: Truck,
    },
  ];

  const firstSix = features.slice(0, 6);
  const rest = features.slice(6);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showAll ? contentRef.current.scrollHeight : 0);
    }
  }, [showAll]);

  return (
    <section id="why-us" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
          <p className="text-xl text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        {/* First 6 features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {firstSix.map((item, index) => (
            <FeatureCard item={item} key={index} />
          ))}
        </div>

        {/* Transitioned wrapper */}
        <div
          className="transition-all duration-700 ease-in-out overflow-hidden"
          style={{ maxHeight: `${height}px`, opacity: showAll ? 1 : 0 }}
        >
          <div
            ref={contentRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
          >
            {rest.map((item, index) => (
              <FeatureCard item={item} key={index + 6} />
            ))}
          </div>
        </div>

        {/* Always stays last */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center mx-auto text-base font-semibold"
            style={{ color: "#2A4D8A" }}
          >
            {showAll ? t("toggle.hide") : t("toggle.show")}
            {showAll ? (
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
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item }: { item: Feature }) {
  return (
    <div className="p-6 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 transition-all duration-200 h-[135px] lg:h-[100px] hover:scale-[1.02]">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <item.icon className="w-6 h-6 text-blue-600 mt-1" />
        </div>
        <div className="text-right">
          <h3 className="font-bold text-lg mb-1 text-gray-800">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}
