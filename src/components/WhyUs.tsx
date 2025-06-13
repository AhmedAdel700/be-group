"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Star } from "lucide-react";

export default function WhyUs() {
  return (
    <section id="why-company" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا نحن</h2>
        </div>
        <div className="grid gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              نحن <span className="font-semibold">GasTech</span>، رواد الابتكار في مجال تكنولوجيا محطات
              الوقود. تأسست شركتنا على رؤية واضحة تهدف إلى تحسين كفاءة العمليات
              داخل محطات الوقود من خلال تقديم حلول تكنولوجية متكاملة ومتقدمة.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              لأننا نملك الخبرة، الشغف، والقدرة على تحويل التحديات إلى فرص من
              خلال حلولنا الذكية والمتكاملة. يعمل فريقنا المتخصص بلا كلل لضمان
              أن كل محطة وقود تستخدم تطبيق <span className="font-semibold">GASTECH</span> تستفيد من
              تكنولوجيا متقدمة تجعل عملياتها أكثر سلاسة، دقة، وكفاءة.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              نحن نؤمن بالشفافية والابتكار والتفاني. نسعى جاهدين لتقديم أفضل
              الخدمات لعملائنا وضمان أقصى قدر من الرضا.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">الابتكار المستمر</h3>
                <p className="text-gray-600">
                  نسعى دائماً للبحث عن طرق جديدة لتحسين وتطوير تقنياتنا لتلبية
                  احتياجات السوق المتغيرة.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">الجودة العالية</h3>
                <p className="text-gray-600">
                  جميع منتجاتنا وخدماتنا مُصممة ومُصنعة وفق أعلى معايير الجودة
                  لضمان الأداء المثالي.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="font-bold text-xl mb-3">الشراكة الفعالة</h3>
                <p className="text-gray-600">
                  نعتبر كل عميل شريكاً في النجاح، ونعمل على بناء علاقات طويلة
                  الأمد تعتمد على الثقة المتبادلة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
