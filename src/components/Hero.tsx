"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-white/20 text-white mb-4">
              معايير واشتراطات وزارة الطاقة لتأهيل محطات الوقود
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              نظام جازتك
              <br />
              <span className="text-yellow-300">
                لإدارة وأتمتة إجراءات محطات الوقود
              </span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              نظام مدعوم بالذكاء الاصطناعي وانترنت الأشياء يحقق التحول الرقمي
              والأتمتة الشاملة لجميع الإجراءات
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                اطلب استشارتك المجانية
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                تعرف على المزيد
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                مميزات النظام الرئيسية
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="text-yellow-300 w-6 h-6" />
                  <span>تحكم كامل في إدارة المحطات عن بعد</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="text-yellow-300 w-6 h-6" />
                  <span>مترابط مع مضخات وخزانات المحطات بشكل مباشر</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="text-yellow-300 w-6 h-6" />
                  <span>نظام مدعوم بالذكاء الاصطناعي وانترنت الأشياء</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="text-yellow-300 w-6 h-6" />
                  <span>يحقق التحول الرقمي والأتمتة الشاملة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
