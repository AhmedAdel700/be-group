"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const partnersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        partnersRef.current &&
        !partnersRef.current.contains(event.target as Node)
      ) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = [
      "hero",
      "units",
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
        section.getBoundingClientRect().top + window.scrollY - 40;

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
    { id: "units", label: "وحدات النظام" },
    { id: "about", label: "عن جازتك" },
    { id: "standards", label: "معايير وزارة الطاقة" },
    { id: "why-us", label: "لماذا جازتك" },
    { id: "packages", label: "الباقات" },
    { id: "why-company", label: "لماذا نحن" },
    { id: "partners", label: "شركاء النجاح" },
    { id: "footer", label: "تواصل معنا" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => {
              setIsAutoScrolling(true);
              setActiveSection("");
              window.scrollTo({ top: 0, behavior: "smooth" });
              setTimeout(() => setIsAutoScrolling(false), 800);
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-8 justify-end flex-1 relative">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`font-semibold text-sm xl:text-base transition-colors duration-200 ${
                  activeSection === id
                    ? "text-[#2A4D8A]"
                    : "text-gray-700 hover:text-[#2A4D8A]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {label}
              </a>
            ))}
            <Button
              className="bg-[#2A4D8A] hover:bg-blue-900 text-sm xl:text-base text-white px-6 py-2 rounded-md font-medium"
              onClick={() => scrollToSection("contact")}
            >
              اطلب استشارتك المجانية
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Menu size={24} color="#2A4D8A" className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col mt-8 gap-2">
                  {navItems.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`h-12 flex items-center px-4 rounded-md font-medium text-lg transition-colors duration-200 ${
                        activeSection === id
                          ? "text-[#2A4D8A] bg-blue-100 font-semibold"
                          : "text-gray-700 hover:text-[#2A4D8A] hover:bg-gray-100"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(id);
                        setOpen(false);
                      }}
                    >
                      {label}
                    </a>
                  ))}
                  <Button
                    className="bg-[#2A4D8A] hover:bg-blue-900 text-sm xl:text-base text-white px-6 py-2 rounded-md font-medium"
                    onClick={() => scrollToSection("contact")}
                  >
                    اطلب استشارتك المجانية
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
