"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
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

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { id: "about", label: "عن جازتك" },
                { id: "standards", label: "معايير وزارة الطاقة" },
                { id: "why-us", label: "لماذا جازتك" },
                { id: "why-company", label: "لماذا نحن" },
                { id: "packages", label: "الباقات" },
                { id: "partners", label: "شركاء النجاح" },
              ].map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
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

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 shrink-0" />
                <div className="flex gap-2" dir="rtl">
                  <a
                    href="tel:966566765222"
                    className="hover:underline cursor-pointer"
                    dir="ltr"
                  >
                    966 566 765 222
                  </a>
                  <span className="font-semibold">-</span>
                  <a
                    href="tel:966569765744"
                    className="hover:underline cursor-pointer"
                    dir="ltr"
                  >
                    966 569 765 744
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 shrink-0 self-start" />
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:support@gastech.com.sa"
                    className="hover:underline cursor-pointer"
                  >
                    support@gastech.com.sa
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  الرياض - شارع وادي هجر – حي الملقا - 13524
                </span>
              </div>
            </div>

            <div className="flex items-center xl:items-end flex-col xl:flex-row justify-between gap-4">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/966566765222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#2A4D8A] hover:bg-blue-900 transition-all text-white px-4 py-2 rounded-md font-medium"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                  <h5 className="text-xs">تواصل عبر واتساب</h5>
                </div>
              </a>
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/gastechai/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-gray-400 hover:bg-slate-400 transition-all"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="Linkedin"
                    width={21}
                    height={21}
                  />
                </a>
                <a
                  href="https://x.com/GastechAj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-gray-400 hover:bg-slate-400 transition-all"
                >
                  <Image
                    src="/x.svg"
                    alt="X (Twitter)"
                    width={15}
                    height={15}
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61572542068792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-gray-400 hover:bg-slate-400 transition-all"
                >
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={22}
                    height={22}
                  />
                </a>
                <a
                  href="https://www.instagram.com/qastechai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded bg-gray-400 hover:bg-slate-400 transition-all"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={21}
                    height={21}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            Powered By
            <Link
              target="_blank"
              href={"https://betech.com.sa"}
              className="mx-1"
            >
              <span className="text-slate-100">BeTech</span>
            </Link>
            &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
