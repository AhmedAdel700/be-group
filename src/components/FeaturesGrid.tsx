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
function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

const features = [
  {
    category: "التشغيل",
    items: [
      {
        icon: Fuel,
        title: "إدارة المحطات",
        desc: "إدارة شاملة لجميع عمليات المحطة",
      },
      {
        icon: Settings,
        title: "إدارة المضخات",
        desc: "تحكم كامل في المضخات والشاشات",
      },
      {
        icon: Database,
        title: "إدارة الخزانات",
        desc: "مراقبة مستويات الوقود لحظياً",
      },
      {
        icon: Fuel,
        title: "إدارة النقليات",
        desc: "طلبات الوقود والنقل",
      },
    ],
  },
  {
    category: "الإدارة",
    items: [
      {
        icon: TrendingUp,
        title: "إدارة الأسعار",
        desc: "تحديث أسعار الوقود لحظياً",
      },
      {
        icon: Monitor,
        title: "إدارة الشاشات",
        desc: "اللوحات الإعلانية والشاشات الخارجية",
      },
      {
        icon: Settings,
        title: "إدارة الصيانة",
        desc: "متابعة الأعطال والصيانة الدورية",
      },
      {
        icon: Users,
        title: "الموارد البشرية",
        desc: "إدارة الموظفين والورديات",
      },
    ],
  },
  {
    category: "الخدمة الذاتية والمالية",
    items: [
      {
        icon: Smartphone,
        title: "الخدمة الذاتية",
        desc: "تطبيقات الجوال والخدمة الذاتية",
      },
      {
        icon: Shield,
        title: "الحسابات والمالية",
        desc: "نظام محاسبي متكامل",
      },
      {
        icon: Database,
        title: "إدارة المخزون",
        desc: "المشتريات وإدارة المخزون",
      },
      {
        icon: BarChart3,
        title: "إدارة المبيعات",
        desc: "نقاط البيع وتقارير المبيعات",
      },
    ],
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-16 bg-gray-50" id="units">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            وحدات النظام
          </h2>
          <p className="text-xl text-gray-600">
            نظام شامل ومتكامل لإدارة جميع جوانب محطة الوقود
          </p>
        </div>

        {features.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-right">
              {group.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.items.map((feature, index) => (
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
        ))}
      </div>
    </section>
  );
}
