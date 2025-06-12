import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

export default function MinistryStandards() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          معايير واشتراطات وزارة الطاقة
        </h2>
        <p className="text-xl text-gray-600">لتأهيل محطات الوقود</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            يمتاز نظام <span className="font-semibold">جازتك</span>{" "}
            <span className="font-semibold">GasTech</span> بتوافقه لمعايير
            واشتراطات وزارة الطاقة لتأهيل محطات الوقود تقنياً، والمتعلقة بالربط
            المركزي - قراءات المضخات - تغيير أسعار الوقود - مراقبة الخزانات -
            النقليات - مبيعات التجزئة - إدارة المدفوعات - إدارة الصيانة والأعطال
            - ولاء العملاء - تطبيقات الجوال - الخدمة الذاتية - الفواتير
            الإلكترونية – الموارد البشرية – أنظمة تخطيط الموارد ...الخ
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h3 className="font-bold text-lg">الامتثال الكامل</h3>
                </div>
                <p className="text-gray-700">
                  نظام جازتك متوافق بالكامل مع جميع معايير واشتراطات وزارة
                  الطاقة لتأهيل محطات الوقود
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3 className="font-bold text-lg">تحديثات مستمرة</h3>
                </div>
                <p className="text-gray-700">
                  نظامنا مصمم ليكون مهيأ لأية تطويرات إضافية ومواكباً كذلك لأحدث
                  التقنيات
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            المعايير والاشتراطات المدعومة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "الربط المركزي الإلكتروني",
              "قراءات المضخات",
              "تغيير أسعار الوقود",
              "مراقبة الخزانات",
              "إدارة النقليات",
              "مبيعات التجزئة",
              "إدارة المدفوعات",
              "إدارة الصيانة والأعطال",
              "برامج ولاء العملاء",
              "تطبيقات الجوال",
              "الخدمة الذاتية",
              "الفواتير الإلكترونية",
              "إدارة الموارد البشرية",
              "أنظمة تخطيط الموارد",
            ].map((standard, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 space-x-reverse"
              >
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-800">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
