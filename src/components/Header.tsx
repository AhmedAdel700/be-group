"use client";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer"
            >
              <Image
                src="/gastech-logo.svg"
                alt="جازتك"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
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
              href="#packages"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              الباقات
            </a>
            <a
              href="#why-company"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              لماذا نحن
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              تواصل معنا
            </a>
            {/* <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700"
            >
              اطلب استشارتك المجانية
            </Button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
