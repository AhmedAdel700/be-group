"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Packages() {
  const t = useTranslations("packages");
  
  const packages = [
    {
      name: t("core.name"),
      // stations: "3 محطات",
      // licenses: "6 رخص",
      // users: "5 مستخدم",
      features: [
        t("core.features.stationSales"),
        t("core.features.stationInventory"),
        t("core.features.stationTanks"),
        t("core.features.pumpsDisplays"),
        t("core.features.purchases"),
        t("core.features.energyPrices"),
        t("core.features.shifts"),
        t("core.features.facilityRentals"),
        t("core.features.posApp"),
        t("core.features.reports"),
      ],
      notIncluded: [
        t("core.notIncluded.generalAccounting"),
        t("core.notIncluded.humanResources"),
        t("core.notIncluded.transport"),
        t("core.notIncluded.maintenance"),
      ],
    },
    {
      name: t("plus.name"),
      // stations: "5 محطات",
      // licenses: "10 رخص",
      // users: "15 مستخدم",
      popular: true,
      features: [
        t("plus.features.allCoreFeatures"),
        t("plus.features.generalAccounting"),
        t("plus.features.humanResources"),
        t("plus.features.maintenanceContract"),
      ],
      notIncluded: [
        t("plus.notIncluded.transport"),
        t("plus.notIncluded.maintenance"),
        t("plus.notIncluded.thirdPartyIntegration"),
      ],
    },
    {
      name: t("extra.name"),
      // stations: "7 محطات",
      // licenses: "12 رخصة",
      // users: "50 مستخدم",
      features: [
        t("extra.features.allPreviousFeatures"),
        t("extra.features.transport"),
        t("extra.features.maintenance"),
        t("extra.features.thirdPartyIntegration"),
        t("extra.features.maintenanceContract"),
      ],
      notIncluded: [],
    },
  ];

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
          <p className="text-xl text-gray-600">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {packages?.map((pkg, index) => (
            <Card
              key={index}
              className={`card-hover relative flex flex-col ${
                pkg.popular ? "border-blue-500 border-2" : ""
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 right-4 bg-blue-600">
                  {t("popularBadge")}
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                {/* <div className="space-y-2 mt-4">
                  <div className="flex justify-between">
                    <span>عدد المحطات:</span>
                    <span className="font-bold">{pkg.stations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>رخص نقاط البيع:</span>
                    <span className="font-bold">{pkg.licenses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>عدد المستخدمين:</span>
                    <span className="font-bold">{pkg.users}</span>
                  </div>
                </div> */}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="space-y-3 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 opacity-50"
                    >
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400">
                        ✗
                      </div>
                      <span className="text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full mt-6"
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                >
                  {t("requestPackage")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
