"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/white-logo.svg"
              alt="جازتك"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              نظام جازتك لإدارة وأتمتة إجراءات محطات الوقود وتخطيط موارد المنشأة
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  عن جازتك
                </a>
              </li>
              <li>
                <a
                  href="#standards"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("standards");
                  }}
                >
                  معايير وزارة الطاقة
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("why-us");
                  }}
                >
                  لماذا جازتك
                </a>
              </li>
              <li>
                <a
                  href="#why-company"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("why-company");
                  }}
                >
                  لماذا نحن
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("packages");
                  }}
                >
                  الباقات
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white">
                  شركاء النجاح
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">الخدمات</h4>
            <ul className="space-y-2 text-gray-400">
              <li>توريد وربط الأجهزة</li>
              <li>التدريب والدعم الفني</li>
              <li>إنشاء الأنظمة</li>
              <li>تطوير البرمجيات</li>
              <li>استشارات تقنية</li>
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
  );
}
