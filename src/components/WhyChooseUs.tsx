"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  BarChart3,
  Shield,
  Smartphone,
  TrendingUp,
  Clock,
  Database,
  Wifi,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا جازتك</h2>
          <p className="text-xl text-gray-600">
            المميزات التي تجعلنا الخيار الأمثل لمحطات الوقود
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "متكامل مع هيئة الزكاة والضريبة والجمارك (ZATCA)",
              desc: "توافق كامل مع متطلبات الفوترة الإلكترونية",
              icon: Shield,
            },
            {
              title: "الربط المركزي الإلكتروني والتحكم عن بعد",
              desc: "إدارة جميع المحطات من مكان واحد",
              icon: Wifi,
            },
            {
              title: "لأمتثاله لمعايير واشتراطات وزارة الطاقة",
              desc: "يلبي جميع المتطلبات الحكومية لتأهيل المحطات",
              icon: CheckCircle,
            },
            {
              title: "ربط فواتير نقاط البيع بالمضخات",
              desc: "إصدار الفواتير بشكل آلي ومترابط",
              icon: BarChart3,
            },
            {
              title: "قياس الخزانات الأوتوماتيكي",
              desc: "مراقبة مستويات الوقود وإدارة المخزون لحظياً",
              icon: Database,
            },
            {
              title: "التحديث اللحظي لأسعار الوقود",
              desc: "تحديث الأسعار في المضخات واللوحات فوراً",
              icon: TrendingUp,
            },
            {
              title: "تحقيق الخدمة الذاتية",
              desc: "خدمة العملاء بأكثر من طريقة ووسيلة",
              icon: Smartphone,
            },
            {
              title: "حفظ وتخزين البيانات",
              desc: "استقرار العمل حتى وقت انقطاع الانترنت",
              icon: Database,
            },
            {
              title: "سرعة إغلاق الورديات",
              desc: "إنجاز المهام في وقت وجيز",
              icon: Clock,
            },
          ].map((item, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
