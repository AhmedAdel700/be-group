"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div
              onClick={() => {
                const hero = document.getElementById("hero");
                if (hero) {
                  const headerOffset = 80;
                  const elementPosition = hero.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
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
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse justify-end flex-1">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={(e) => {
                e.preventDefault();
                const about = document.getElementById("about");
                if (about) {
                  const headerOffset = 80;
                  const elementPosition = about.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              عن جازتك
            </a>
            <a
              href="#standards"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={(e) => {
                e.preventDefault();
                const standards = document.getElementById("standards");
                if (standards) {
                  const headerOffset = 80;
                  const elementPosition = standards.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              معايير وزارة الطاقة
            </a>
            <a
              href="#why-us"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={(e) => {
                e.preventDefault();
                const whyUs = document.getElementById("why-us");
                if (whyUs) {
                  const headerOffset = 80;
                  const elementPosition = whyUs.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              لماذا جازتك
            </a>
            <a
              href="#packages"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={(e) => {
                e.preventDefault();
                const packages = document.getElementById("packages");
                if (packages) {
                  const headerOffset = 80;
                  const elementPosition = packages.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              الباقات
            </a>
            <a
              href="#why-company"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={(e) => {
                e.preventDefault();
                const whyCompany = document.getElementById("why-company");
                if (whyCompany) {
                  const headerOffset = 80;
                  const elementPosition = whyCompany.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              لماذا نحن
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={(e) => {
                e.preventDefault();
                const contact = document.getElementById("contact");
                if (contact) {
                  const headerOffset = 80;
                  const elementPosition = contact.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              تواصل معنا
            </a>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
              onClick={() => {
                // Add your download logic here
                window.open('/company-profile.pdf', '_blank'); //placeholder for the pdf file
              }}
            >
              تحميل ملف الشركة
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
