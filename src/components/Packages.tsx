"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      name: "Gas-Tech Core",
      // stations: "3 محطات",
      // licenses: "6 رخص",
      // users: "5 مستخدم",
      features: [
        "إدارة مبيعات المحطات",
        "إدارة مخزون المحطات",
        "إدارة خزانات المحطات",
        "إدارة المضخات والشاشات الخارجية",
        "إدارة المشتريات",
        "إدارة أسعار منتجات الطاقة",
        "إدارة الورديات",
        "إدارة إيجارات المرافق والأقساط",
        "تطبيق نقاط البيع لماكينات الدفع",
        "التقارير",
      ],
      notIncluded: [
        "نظام الحسابات العامة",
        "نظام الموارد البشرية",
        "نظام النقليات",
        "نظام الصيانة",
      ],
    },
    {
      name: "Gas-Tech Plus",
      // stations: "5 محطات",
      // licenses: "10 رخص",
      // users: "15 مستخدم",
      popular: true,
      features: [
        "جميع مميزات الباقة الأساسية",
        "نظام الحسابات العامة",
        "نظام الموارد البشرية",
        "عقد الصيانة السنوية - أول سنة",
      ],
      notIncluded: [
        "نظام النقليات",
        "نظام الصيانة",
        "خدمات الترابط مع الطرف الثالث",
      ],
    },
    {
      name: "Gas-Tech Extra",
      // stations: "7 محطات",
      // licenses: "12 رخصة",
      // users: "50 مستخدم",
      features: [
        "جميع مميزات الباقات السابقة",
        "نظام النقليات",
        "نظام الصيانة",
        "خدمات الترابط مع الطرف الثالث",
        "عقد الصيانة السنوية - أول سنة",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">باقات جازتك</h2>
          <p className="text-xl text-gray-600">
            اختر الباقة المناسبة لاحتياجات محطتك
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
                  الأكثر شعبية
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
                      className="flex items-start space-x-2 space-x-reverse"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 space-x-reverse opacity-50"
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
                  اطلب هذه الباقة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
