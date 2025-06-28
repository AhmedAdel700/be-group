"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, ChevronLeft, ChevronsDown, ChevronsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function MinistryStandards() {
  const t = useTranslations("ministryStandards");
  const [showAll, setShowAll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const standards = [
    t("standards.electronicIntegration"),
    t("standards.centralLinking"),
    t("standards.fuelMonitoring"),
    t("standards.transportManagement"),
    t("standards.erpSystem"),
    t("standards.cloudBased"),
    t("standards.mobileApps"),
  ];

  const firstTwo = standards.slice(0, 2);
  const rest = standards.slice(2);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(showAll ? contentRef.current.scrollHeight : 0);
    }
  }, [showAll]);

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <Badge className="mt-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-1 text-sm">
          {t("badge")}
        </Badge>
      </div>

      <div className="grid lg:grid-cols-1 gap-16 items-start">
        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t("systemTitle")}
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
              {t("description.prefix")}{" "}
              <span className="font-semibold text-blue-700">{t("description.brand")}</span>{" "}
              {t("description.content")}
            </p>

            <div className="space-y-6 text-gray-700 my-4">
              {firstTwo.map((standard, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-blue-50 rounded-full p-1 mt-1 flex-shrink-0">
                    <ChevronLeft className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-base leading-relaxed">{standard}</p>
                </div>
              ))}

              {/* Transitioned wrapper */}
              <div
                className="transition-all duration-700 ease-in-out overflow-hidden"
                style={{ maxHeight: `${height}px`, opacity: showAll ? 1 : 0 }}
              >
                <div ref={contentRef} className="space-y-6">
                  {rest.map((standard, index) => (
                    <div key={index + 2} className="flex gap-4 items-start">
                      <div className="bg-blue-50 rounded-full p-1 mt-1 flex-shrink-0">
                        <ChevronLeft className="w-4 h-4 text-blue-600" />
                      </div>
                      <p className="text-base leading-relaxed">{standard}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Show/Hide button */}
            <div className="text-center">
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

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow-sm overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full opacity-20 -mr-8 -mt-8"></div>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-blue-900">
                    {t("cards.compliance.title")}
                  </h3>
                </div>
                <p className="text-blue-800 relative z-10">
                  {t("cards.compliance.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-none shadow-sm overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 rounded-full opacity-20 -mr-8 -mt-8"></div>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg text-emerald-900">
                    {t("cards.updates.title")}
                  </h3>
                </div>
                <p className="text-emerald-800 relative z-10">
                  {t("cards.updates.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-lg text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5 bg-repeat"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full opacity-20 -mr-32 -mb-32"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-center">
                {t("supportedStandards.title")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                {[
                  t("supportedStandards.items.electronicIntegration"),
                  t("supportedStandards.items.pumpReadings"),
                  t("supportedStandards.items.fuelPriceChange"),
                  t("supportedStandards.items.tankMonitoring"),
                  t("supportedStandards.items.transportManagement"),
                  t("supportedStandards.items.retailSales"),
                  t("supportedStandards.items.paymentManagement"),
                  t("supportedStandards.items.maintenanceManagement"),
                  t("supportedStandards.items.customerLoyalty"),
                  t("supportedStandards.items.mobileApps"),
                  t("supportedStandards.items.selfService"),
                  t("supportedStandards.items.electronicInvoicing"),
                  t("supportedStandards.items.hrManagement"),
                  t("supportedStandards.items.resourcePlanning"),
                ].map((standard, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 space-x-reverse bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0" />
                    <span className="text-white font-medium">{standard}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-1.5">
                  {t("supportedStandards.badge")}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
