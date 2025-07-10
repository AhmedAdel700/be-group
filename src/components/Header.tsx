"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useLocale } from "next-intl";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const locale = useLocale();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#001C71] to-[#0EC5C7] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SU</span>
            </div>
            <span className="text-xl font-bold text-[#001C71]">
              Se-University
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-gray-700 hover:text-[#001C71] transition-colors duration-200"
            >
              {language === "en" ? "Courses" : "الدورات"}
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-gray-700 hover:text-[#001C71] transition-colors duration-200"
            >
              {language === "en" ? "Contact Us" : "اتصل بنا"}
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-transparent"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>
            <Link href={`/${locale}/signin`}>
              <Button className="bg-[#001C71] hover:bg-[#001C71]/90">
                {language === "en"
                  ? "Sign In / Register"
                  : "تسجيل الدخول / التسجيل"}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("courses")}
                  className="text-left text-gray-700 hover:text-[#001C71] transition-colors duration-200"
                >
                  {language === "en" ? "Courses" : "الدورات"}
                </button>
                <button
                  onClick={() => scrollToSection("footer")}
                  className="text-left text-gray-700 hover:text-[#001C71] transition-colors duration-200"
                >
                  {language === "en" ? "Contact Us" : "اتصل بنا"}
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 w-fit bg-transparent"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === "en" ? "العربية" : "English"}</span>
                </Button>
                <Link href={`/${locale}/signin`}>
                  <Button className="bg-[#001C71] hover:bg-[#001C71]/90 w-full">
                    {language === "en"
                      ? "Sign In / Register"
                      : "تسجيل الدخول / التسجيل"}
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
