"use client";

import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Zap, Wifi } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">عن جازتك</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold">(جازتك GasTech)</span> هو حل تقني
              شامل ومتكامل يساهم في أتمتة الاجراءات والعمليات داخل محطات الوقود
              من طلبيات شراء واستلام الوقود، مروراً بتزويد الخزانات بالوقود ثم
              بيعه من خلال المضخات وإصدار الفواتير وإغلاق الورديات في وقت وجيز،
              ومن ثم تقليل نسب الأخطاء البشرية و خفض التكاليف وتحقيق الرقابة
              الداخلية.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              يوفر <span className="font-semibold">(جازتك GasTech)</span> حلولاً
              تحقق الترابط الكامل والمباشر بين أجهزة المحطات والأنظمة والتطبيقات
              والمركز الرئيسي، مما يسهم ذلك وبشكل لحظي في قراءة معلومات المضخات
              ومراقبة خزانات الوقود وتغيير الأسعار، وكذلك إدارة المحطات والتحكم
              الكامل عن بعد.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              صمم <span className="font-semibold">(جازتك GasTech)</span> موافقاً
              لمعايير واشتراطات وزارة الطاقة ومهيأ لأية تطويرات إضافية ومواكباً
              كذلك لأحدث التقنيات، مما أسهم ذلك في الاعتماد عليه من قبل العديد
              من منشآت محطات الوقود وذلك في إدارة عملياتهم واجراءاتهم اليومية.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold">(جازتك GasTech)</span> هو أحد
              منتجات شركة بي تك الرائدة والمتخصصة في حلول التحول الرقمي وتطوير
              البرمجيات وتقديم خدمات تكنولوجيا المعلومات ذات الصلة.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                متوافق مع معايير وزارة الطاقة
              </Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                مدعوم بالذكاء الاصطناعي
              </Badge>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-bold">أتمتة شاملة</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Wifi className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-bold">ترابط مباشر</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-bold">أمان عالي</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-bold">توفير الوقت</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
