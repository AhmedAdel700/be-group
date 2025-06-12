"use client";

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
} from "lucide-react";

const features = [
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
    title: "متوافق مع معايير واشتراطات وزارة الطاقة",
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
    title: "تحقيق الخدمة الذاتية بأكثر من طريقة",
    desc: "خدمة العملاء بأكثر من وسيلة (ذاتي/تطبيقي)",
    icon: Smartphone,
  },
  {
    title: "حفظ وتخزين البيانات واستقرار العمل",
    desc: "استمرار العمل حتى مع انقطاع الإنترنت",
    icon: Cloud,
  },
  {
    title: "سرعة إغلاق الورديات",
    desc: "إنجاز مهام الإغلاق في وقت وجيز",
    icon: Clock,
  },
  {
    title: "زيادة ولاء العملاء",
    desc: "عروض وميزات تعزز تجربة العميل",
    icon: Users,
  },
  {
    title: "منظومة ERP متكاملة",
    desc: "تكامل بين الموارد البشرية، المالية، العمليات",
    icon: Activity,
  },
  {
    title: "أتمتة الإجراءات والتحول الرقمي",
    desc: "رقمنة العمليات لتحقيق الكفاءة",
    icon: CheckCircle,
  },
  {
    title: "استلام تنبيهات الصيانة والأعطال",
    desc: "تنبيهات تلقائية لحالة المعدات",
    icon: Bell,
  },
  {
    title: "رصد نسبة الماء والحرارة",
    desc: "تحكم دقيق في حالة الخزانات",
    icon: Thermometer,
  },
  {
    title: "الاحتساب التلقائي لمقاسات الخزان",
    desc: "حساب تلقائي للحجم دون تدخل بشري",
    icon: Ruler,
  },
  {
    title: "التكامل مع الأنظمة الأخرى",
    desc: "الربط مع الأنظمة الحكومية والداخلية",
    icon: Link2,
  },
  {
    title: "مراقبة استهلاك وقود السائقين",
    desc: "رصد وتحليل استهلاك الوقود",
    icon: Fuel,
  },
  {
    title: "إدارة النقل وطلبات الوقود",
    desc: "تنظيم عملية النقل وطلبات التوريد",
    icon: Truck,
  },
];

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
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 transition-all duration-200 h-[135px] lg:h-[100px] hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-600 mt-1" />
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
