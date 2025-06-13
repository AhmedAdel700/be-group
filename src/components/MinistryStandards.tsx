import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MinistryStandards() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          معايير واشتراطات وزارة الطاقة
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          لتأهيل محطات الوقود وضمان الجودة والكفاءة التشغيلية
        </p>
        <Badge className="mt-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-1 text-sm">
          وزارة الطاقة
        </Badge>
      </div>

      <div className="grid lg:grid-cols-1 gap-16 items-start">
        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                نظام جازتك GasTech
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
              يمتاز نظام جازتك{" "}
              <span className="font-semibold text-blue-700">GasTech</span>{" "}
              بامتثاله للمعايير التالية، والتي تشترط وزارة الطاقة توفرها حتى
              تكون المنشأة مؤهلة لإدارة محطات الوقود:
            </p>

            <div className="space-y-6 text-gray-700 my-8">
              {[
                "إعـداد نظـام للربط الإلكتروني المركزي مســــــؤول عن أخـذ قراءات المضــــــخــات، ومعرفــة الكميات المباعة من الوقود من كل مضـــــخة، والتحكم للتغيير اللحظي وعن بُعد لأســـــعار منتجات الطاقة في المضـــــخات والشـــــاشـــــات الخارجية الخاصـــــة بعرض أســـــعار منتجات الطاقة في محطات الوقود التابعة للمنشأة (Forecourt Controller).",
                "الالتزام بــالربط المركزي الموحــد لجميع الأنظمــة التي تتطلــب الجهــات المعنيــة ربطهــا، كتعديل الأسعار على المضخات وشاشة الأسعار في لحظتها عن بعد، وغيره من الأنظمة.",
                "إعـــداد نظـــام آلي لمراقبـــة الوقود في الخزانـــات عن طريق اســــــتخـــدام مقيـــاس الخزان الأوتوماتيكي (ATG) يسمح برصد المخزون في الوقت الفعلي عن بعد.",
                "إعداد نظام إدارة النقل (System Management Transportation) يدير طلبات الوقود من وقت الطلب إلى تفريغ المنتج في خزانات المحطة.",
                "توفير نظام تخطيط موارد المؤســـــســـــة (ERP) للموارد البشـــــرية ومبيعات التجزئة، يغطي ت ً جميع الأنظمة تلقائيا بالنظام بما في ُ أعمال الوقود وغير الوقود بصــورة عامة، حيث ربط ذلك نقاط البيع، وأنظمة الدفع المختلفة، والنقد، ونظام الدفع الإلكتروني، والمضـــــخات، والنظام الآلي لأخذ قراءات الخزانات، وغيرها.",
                "أن تكون جميع الاتصــالات بين أنظمة التشــغيل الآلي والبرامج والأجهزة الأخرى قائمة على السحابة.(cloud based)",
                "تطبيقات للجوال (أبل وأندوريد) تتضمن معلومات حول المنشأة مثل المنتجات المعروضة وأسعارها ومواقع المحطات وساعات العمل والعروض وشكاوى العملاء.",
              ].map((standard, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-blue-50 rounded-full p-1 mt-1 flex-shrink-0">
                    <ChevronLeft className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-base leading-relaxed">{standard}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow-sm overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full opacity-20 -mr-8 -mt-8"></div>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-blue-900">
                    الامتثال الكامل
                  </h3>
                </div>
                <p className="text-blue-800 relative z-10">
                  نظام جازتك متوافق بالكامل مع جميع معايير واشتراطات وزارة
                  الطاقة لتأهيل محطات الوقود
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-none shadow-sm overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 rounded-full opacity-20 -mr-8 -mt-8"></div>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg text-emerald-900">
                    تحديثات مستمرة
                  </h3>
                </div>
                <p className="text-emerald-800 relative z-10">
                  نظامنا مصمم ليكون مهيأ لأية تطويرات إضافية ومواكباً كذلك لأحدث
                  التقنيات
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-lg text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5 bg-repeat"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full opacity-20 -mr-32 -mb-32"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-center">
                المعايير والاشتراطات المدعومة
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
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
                    className="flex items-center space-x-3 space-x-reverse bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0" />
                    <span className="text-white font-medium">{standard}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-1.5">
                  متوافق 100% مع معايير وزارة الطاقة
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
