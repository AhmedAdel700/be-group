"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("whyUs");
  
  return (
    <section id="why-company" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
        </div>
        <div className="grid gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t("paragraph1.prefix")} <span className="font-semibold">{t("paragraph1.brand")}</span> {t("paragraph1.content")}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t("paragraph2.content")} <span className="font-semibold">{t("paragraph2.brand")}</span> {t("paragraph2.suffix")}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t("paragraph3")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">{t("cards.innovation.title")}</h3>
                <p className="text-gray-600">
                  {t("cards.innovation.description")}
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">{t("cards.quality.title")}</h3>
                <p className="text-gray-600">
                  {t("cards.quality.description")}
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">{t("cards.partnership.title")}</h3>
                <p className="text-gray-600">
                  {t("cards.partnership.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
