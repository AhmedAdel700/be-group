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

export default function FeaturesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            وحدات النظام
          </h2>
          <p className="text-xl text-gray-600">
            نظام شامل ومتكامل لإدارة جميع جوانب محطة الوقود
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
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
              icon: BarChart3,
              title: "إدارة المبيعات",
              desc: "نقاط البيع والتقارير المالية",
            },
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
              icon: Smartphone,
              title: "الخدمة الذاتية",
              desc: "تطبيقات الجوال والخدمة الذاتية",
            },
            {
              icon: Users,
              title: "الموارد البشرية",
              desc: "إدارة الموظفين والورديات",
            },
            {
              icon: Shield,
              title: "الحسابات والمالية",
              desc: "نظام محاسبي متكامل",
            },
            {
              icon: Settings,
              title: "إدارة الصيانة",
              desc: "متابعة الأعطال والصيانة الدورية",
            },
            {
              icon: Fuel,
              title: "إدارة النقليات",
              desc: "طلبات الوقود والنقل",
            },
            {
              icon: Database,
              title: "إدارة المخزون",
              desc: "المشتريات وإدارة المخزون",
            },
          ].map((feature, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
