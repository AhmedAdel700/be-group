"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
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
              نظام جازتك لإدارة وأتمتة إجراءات محطات الوقود وتخطيط موارد المنشأة
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
  );
}
