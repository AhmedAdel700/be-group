"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Fuel,
  BarChart3,
  Shield,
  Smartphone,
  Settings,
  TrendingUp,
  Users,
  Clock,
  Star,
  Zap,
  Database,
  Wifi,
  Monitor,
} from "lucide-react";
import Image from "next/image";
import ConsultationForm from "@/components/consultation-form";
import ContactForm from "@/components/contact-form";
import MinistryStandards from "@/components/ministry-standards";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Image
                src="/gastech-logo.svg"
                alt="جازتك"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                عن جازتك
              </a>
              <a
                href="#standards"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                معايير وزارة الطاقة
              </a>
              <a
                href="#why-us"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                لماذا جازتك
              </a>
              <a
                href="#why-company"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                لماذا نحن
              </a>
              <a
                href="#packages"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                الباقات
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                تواصل معنا
              </a>
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-600 hover:bg-blue-700"
              >
                اطلب استشارتك المجانية
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
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

      {/* Features Grid */}
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

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                عن جازتك
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                (جازتك GasTech) هو حل تقني شامل ومتكامل يساهم في أتمتة الاجراءات
                والعمليات داخل محطات الوقود من طلبيات شراء واستلام الوقود،
                مروراً بتزويد الخزانات بالوقود ثم بيعه من خلال المضخات وإصدار
                الفواتير وإغلاق الورديات في وقت وجيز، ومن ثم تقليل نسب الأخطاء
                البشرية و خفض التكاليف وتحقيق الرقابة الداخلية.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                يوفر (جازتك GasTech) حلولاً تحقق الترابط الكامل والمباشر بين
                أجهزة المحطات والأنظمة والتطبيقات والمركز الرئيسي، مما يسهم ذلك
                وبشكل لحظي في قراءة معلومات المضخات ومراقبة خزانات الوقود وتغيير
                الأسعار، وكذلك إدارة المحطات والتحكم الكامل عن بعد.
              </p>
              <div className="flex items-center space-x-4 space-x-reverse">
                <Badge className="bg-blue-100 text-blue-800">
                  متوافق مع معايير وزارة الطاقة
                </Badge>
                <Badge className="bg-green-100 text-green-800">
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

      {/* Ministry Standards Section */}
      <section id="standards" className="py-16 bg-gray-50">
        <MinistryStandards />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              لماذا جازتك
            </h2>
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

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              باقات جازتك
            </h2>
            <p className="text-xl text-gray-600">
              اختر الباقة المناسبة لاحتياجات محطتك
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Gas-Tech Core",
                stations: "3 محطات",
                licenses: "6 رخص",
                users: "5 مستخدم",
                features: [
                  "رخصة نظام جازتك لإدارة المحطات",
                  "إدارة مبيعات المحطات",
                  "إدارة مخزون المحطات",
                  "إدارة خزانات المحطات",
                  "إدارة المضخات والشاشات الخارجية",
                  "إدارة أسعار منتجات الطاقة",
                  "عقد الصيانة السنوية - أول سنة",
                ],
                notIncluded: [
                  "نظام الحسابات العامة",
                  "نظام الموارد البشرية",
                  "نظام النقليات",
                  "نظام الصيانة",
                ],
              },
              {
                name: "Gas-Tech Plus",
                stations: "5 محطات",
                licenses: "10 رخص",
                users: "15 مستخدم",
                popular: true,
                features: [
                  "جميع مميزات الباقة الأساسية",
                  "نظام الحسابات العامة",
                  "نظام الموارد البشرية",
                  "عقد الصيانة السنوية - أول سنة",
                ],
                notIncluded: [
                  "نظام النقليات",
                  "نظام الصيانة",
                  "خدمات الترابط مع الطرف الثالث",
                ],
              },
              {
                name: "Gas-Tech Extra",
                stations: "7 محطات",
                licenses: "12 رخصة",
                users: "50 مستخدم",
                features: [
                  "جميع مميزات الباقات السابقة",
                  "نظام النقليات",
                  "نظام الصيانة",
                  "خدمات الترابط مع الطرف الثالث",
                  "عقد الصيانة السنوية - أول سنة",
                ],
                notIncluded: [],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`card-hover relative flex flex-col ${
                  pkg.popular ? "border-blue-500 border-2" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 right-4 bg-blue-600">
                    الأكثر شعبية
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    {pkg.name}
                  </CardTitle>
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between">
                      <span>عدد المحطات:</span>
                      <span className="font-bold">{pkg.stations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>رخص نقاط البيع:</span>
                      <span className="font-bold">{pkg.licenses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>عدد المستخدمين:</span>
                      <span className="font-bold">{pkg.users}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="space-y-3 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 space-x-reverse"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {pkg.notIncluded.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 space-x-reverse opacity-50"
                      >
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400">
                          ✗
                        </div>
                        <span className="text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-6"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    اطلب هذه الباقة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              اطلب استشارتك المجانية
            </h2>
            <p className="text-xl text-gray-600">
              تواصل معنا للحصول على استشارة مجانية وعرض مخصص لمحطتك
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="h-full">
              <ConsultationForm />
            </div>
            <div className="h-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Company Section */}
      <section id="why-company" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا نحن</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                نحن GasTech، رواد الابتكار في مجال تكنولوجيا محطات الوقود. تأسست
                شركتنا على رؤية واضحة تهدف إلى تحسين كفاءة العمليات داخل محطات
                الوقود من خلال تقديم حلول تكنولوجية متكاملة ومتقدمة.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                لأننا نملك الخبرة، الشغف، والقدرة على تحويل التحديات إلى فرص من
                خلال حلولنا الذكية والمتكاملة. يعمل فريقنا المتخصص بلا كلل لضمان
                أن كل محطة وقود تستخدم تطبيق GASTECH تستفيد من تكنولوجيا متقدمة
                تجعل عملياتها أكثر سلاسة، دقة، وكفاءة.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                نحن نؤمن بالشفافية والابتكار والتفاني. نسعى جاهدين لتقديم أفضل
                الخدمات لعملائنا وضمان أقصى قدر من الرضا.
              </p>
            </div>
            <div className="grid gap-6">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/white-logo.svg"
                alt="جازتك"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">
                نظام جازتك لإدارة وأتمتة إجراءات محطات الوقود وتخطيط موارد
                المنشأة
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white">
                    عن جازتك
                  </a>
                </li>
                <li>
                  <a href="#standards" className="hover:text-white">
                    معايير وزارة الطاقة
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-white">
                    لماذا جازتك
                  </a>
                </li>
                <li>
                  <a href="#why-company" className="hover:text-white">
                    لماذا نحن
                  </a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-white">
                    الباقات
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">الخدمات</h4>
              <ul className="space-y-2 text-gray-400">
                <li>إدارة المحطات</li>
                <li>إدارة المضخات</li>
                <li>إدارة الخزانات</li>
                <li>نظام ERP متكامل</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Phone className="w-5 h-5" />
                  <span>+966 XX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Mail className="w-5 h-5" />
                  <span>info@gastech.sa</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <MapPin className="w-5 h-5" />
                  <span>الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 جازتك. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
