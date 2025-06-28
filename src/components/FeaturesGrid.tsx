"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Fuel,
  BarChart3,
  Shield,
  Smartphone,
  Settings,
  TrendingUp,
  Users,
  Database,
  Monitor,
} from "lucide-react";
import { useTranslations } from "next-intl";

function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function FeaturesGrid() {
  const t = useTranslations("featuresGrid");
  
  const features = [
    {
      icon: Fuel,
      title: t("features.stationManagement.title"),
      desc: t("features.stationManagement.desc"),
    },
    {
      icon: Settings,
      title: t("features.pumpManagement.title"),
      desc: t("features.pumpManagement.desc"),
    },
    {
      icon: Database,
      title: t("features.tankManagement.title"),
      desc: t("features.tankManagement.desc"),
    },
    {
      icon: Fuel,
      title: t("features.transportManagement.title"),
      desc: t("features.transportManagement.desc"),
    },
    {
      icon: TrendingUp,
      title: t("features.priceManagement.title"),
      desc: t("features.priceManagement.desc"),
    },
    {
      icon: Monitor,
      title: t("features.displayManagement.title"),
      desc: t("features.displayManagement.desc"),
    },
    {
      icon: Settings,
      title: t("features.maintenanceManagement.title"),
      desc: t("features.maintenanceManagement.desc"),
    },
    {
      icon: Users,
      title: t("features.humanResources.title"),
      desc: t("features.humanResources.desc"),
    },
    {
      icon: Smartphone,
      title: t("features.selfService.title"),
      desc: t("features.selfService.desc"),
    },
    {
      icon: Shield,
      title: t("features.accounting.title"),
      desc: t("features.accounting.desc"),
    },
    {
      icon: Database,
      title: t("features.inventoryManagement.title"),
      desc: t("features.inventoryManagement.desc"),
    },
    {
      icon: BarChart3,
      title: t("features.salesManagement.title"),
      desc: t("features.salesManagement.desc"),
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="units">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl border-0 shadow-md hover:bg-white group"
              )}
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-blue-700" />
                <h4 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
