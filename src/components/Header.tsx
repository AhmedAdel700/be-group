"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [showPartnersDropdownDesktop, setShowPartnersDropdownDesktop] =
    useState(false);
  const [showPartnersDropdownMobile, setShowPartnersDropdownMobile] =
    useState(false);
  const partnersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        partnersRef.current &&
        !partnersRef.current.contains(event.target as Node)
      ) {
        setShowPartnersDropdownDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "standards",
      "why-us",
      "packages",
      "why-company",
      "partners",
      "contact",
    ];

    const handleScroll = () => {
      if (isAutoScrolling) return;

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAutoScrolling]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - 80;

      setIsAutoScrolling(true);
      setActiveSection(id);

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsAutoScrolling(false);
      }, 800);
    }
  };

  const navItems = [
    { id: "about", label: "عن جازتك" },
    { id: "standards", label: "معايير وزارة الطاقة" },
    { id: "why-us", label: "لماذا جازتك" },
    { id: "packages", label: "الباقات" },
    { id: "why-company", label: "لماذا نحن" },
    { id: "partners", label: "شركاء النجاح" },
    { id: "contact", label: "تواصل معنا" },
  ];

  const partners = [
    { src: "/gastech-logo.svg", alt: "GasTech Partner 1" },
    { src: "/gastech-logo.svg", alt: "GasTech Partner 2" },
    { src: "/gastech-logo.svg", alt: "GasTech Partner 3" },
    { src: "/gastech-logo.svg", alt: "GasTech Partner 4" },
    { src: "/gastech-logo.svg", alt: "GasTech Partner 5" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => scrollToSection("hero")}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse justify-end flex-1 relative">
            {navItems.map(({ id, label }) =>
              id === "partners" ? (
                <div key={id} className="relative" ref={partnersRef}>
                  <button
                    onClick={() =>
                      setShowPartnersDropdownDesktop(
                        !showPartnersDropdownDesktop
                      )
                    }
                    className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                      activeSection === id || showPartnersDropdownDesktop
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {label}
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        showPartnersDropdownDesktop ? "rotate-180" : "rotate-0"
                      }`}
                      size={16}
                    />
                  </button>

                  <div
                    className={`absolute top-full -left-full mt-6 bg-white shadow-lg border p-4 grid grid-cols-5 gap-4 z-50 w-[600px] place-items-center transition-all duration-300 ease-in-out transform ${
                      showPartnersDropdownDesktop
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible pointer-events-none"
                    }`}
                  >
                    {partners.map((partner, index) => (
                      <Image
                        key={index}
                        src={partner.src}
                        alt={partner.alt}
                        width={60}
                        height={60}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`font-medium transition-colors duration-200 ${
                    activeSection === id
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                >
                  {label}
                </a>
              )
            )}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
              onClick={() => window.open("/company-profile.pdf", "_blank")}
            >
              تحميل ملف الشركة
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu
                  size={24}
                  color="rgb(41 103 205)"
                  className="cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px">
                <nav className="flex flex-col mt-8 gap-2">
                  {navItems.map(({ id, label }) =>
                    id === "partners" ? (
                      <div key={id} className="relative">
                        <button
                          onClick={() =>
                            setShowPartnersDropdownMobile(
                              !showPartnersDropdownMobile
                            )
                          }
                          className={`h-12 flex items-center justify-between px-4 rounded-md w-full font-medium text-lg transition-colors duration-200 ${
                            activeSection === id || showPartnersDropdownMobile
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                          }`}
                        >
                          {label}
                          <ChevronDown
                            className={`transition-transform duration-300 ${
                              showPartnersDropdownMobile
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                            size={20}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
                            showPartnersDropdownMobile
                              ? "max-h-64 opacity-100 scale-100 p-2"
                              : "max-h-0 opacity-0 scale-95 p-0"
                          } bg-white grid grid-cols-3 gap-4 place-items-center`}
                        >
                          {partners.map((partner, index) => (
                            <Image
                              key={index}
                              src={partner.src}
                              alt={partner.alt}
                              width={60}
                              height={60}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={id}
                        href={`#${id}`}
                        className={`h-12 flex items-center px-4 rounded-md font-medium text-lg transition-colors duration-200 ${
                          activeSection === id
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(id);
                          setShowPartnersDropdownMobile(false);
                        }}
                      >
                        {label}
                      </a>
                    )
                  )}
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium mt-4"
                    onClick={() =>
                      window.open("/company-profile.pdf", "_blank")
                    }
                  >
                    تحميل ملف الشركة
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
