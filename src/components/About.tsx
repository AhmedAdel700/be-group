"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Clock,
  Zap,
  Wifi,
  ChevronsDown,
  ChevronsUp,
} from "lucide-react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">عن جازتك</h2>

            {/* Always visible paragraphs */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed transition-all duration-500">
              <span className="font-semibold">(جازتك GasTech)</span> هو حل تقني
              شامل ومتكامل يساهم في أتمتة الاجراءات والعمليات داخل محطات الوقود
              من طلبيات شراء واستلام الوقود، مروراً بتزويد الخزانات بالوقود ثم
              بيعه من خلال المضخات وإصدار الفواتير وإغلاق الورديات في وقت وجيز،
              ومن ثم تقليل نسب الأخطاء البشرية و خفض التكاليف وتحقيق الرقابة
              الداخلية.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed transition-all duration-500">
              يوفر <span className="font-semibold">(جازتك GasTech)</span> حلولاً
              تحقق الترابط الكامل والمباشر بين أجهزة المحطات والأنظمة والتطبيقات
              والمركز الرئيسي، مما يسهم ذلك وبشكل لحظي في قراءة معلومات المضخات
              ومراقبة خزانات الوقود وتغيير الأسعار، وكذلك إدارة المحطات والتحكم
              الكامل عن بعد.
            </p>

            {/* Conditionally rendered extra paragraphs */}
            <div
              className={`overflow-hidden transition-all duration-700 ${
                showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                صمم <span className="font-semibold">(جازتك GasTech)</span>{" "}
                موافقاً لمعايير واشتراطات وزارة الطاقة ومهيأ لأية تطويرات إضافية
                ومواكباً كذلك لأحدث التقنيات، مما أسهم ذلك في الاعتماد عليه من
                قبل العديد من منشآت محطات الوقود وذلك في إدارة عملياتهم
                واجراءاتهم اليومية.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold">(جازتك GasTech)</span> هو أحد
                منتجات شركة بي تك الرائدة والمتخصصة في حلول التحول الرقمي وتقديم
                خدمات تكنولوجيا المعلومات ذات الصلة.
              </p>
            </div>

            {/* Show More/Less Toggle */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center text-base font-semibold"
              style={{ color: "#2A4D8A" }}
            >
              {showMore ? "إخفاء التفاصيل" : "عرض المزيد"}
              {showMore ? (
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

            <div className="mt-6 flex items-center space-x-4 space-x-reverse">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                متوافق مع معايير وزارة الطاقة
              </Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                مدعوم بالذكاء الاصطناعي
              </Badge>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "أتمتة شاملة", color: "text-blue-600" },
                  { icon: Wifi, title: "ترابط مباشر", color: "text-green-600" },
                  {
                    icon: Shield,
                    title: "أمان عالي",
                    color: "text-purple-600",
                  },
                  {
                    icon: Clock,
                    title: "توفير الوقت",
                    color: "text-orange-600",
                  },
                ].map(({ icon: Icon, title, color }, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-4 text-center shadow-sm"
                  >
                    <Icon className={`w-8 h-8 ${color} mx-auto mb-2`} />
                    <h4 className="font-bold">{title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
