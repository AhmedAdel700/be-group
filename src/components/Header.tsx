"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Globe, Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "../navigations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      sessionStorage.setItem("scrollTarget", sectionId);
      router.push("/");
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    if (pathname !== "/") {
      return router.push("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    // Preserve query parameters when switching locale
    const search = typeof window !== 'undefined' ? window.location.search : '';
    router.replace(pathname + search, { locale: newLocale });
  };

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (pathname === "/" && target) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsMenuOpen(false);
    }
  }, [pathname]);

  // Enrollment-status header logic
  const [language, setLanguage] = useState(locale);

  useEffect(() => {
    setLanguage(locale);
  }, [locale]);

  const handleLogout = () => {
    router.push(`/`);
  };

  const toggleEnrollmentLanguage = () => {
    const newLocale = language === "en" ? "ar" : "en";
    setLanguage(newLocale);
    const search = typeof window !== 'undefined' ? window.location.search : '';
    router.replace(pathname + search, { locale: newLocale });
  };

  if (pathname.includes("/enrollment-status")) {
    // Custom header for enrollment-status page
    return (
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#001C71] to-[#0EC5C7] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SU</span>
              </div>
              <span className="text-xl font-bold text-[#001C71]">
                Se-University
              </span>
            </Link>
            {/* Header Actions */}
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleEnrollmentLanguage}
                className="flex items-center bg-transparent"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "en" ? "العربية" : "English"}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              >
                <LogOut className="w-4 h-4" />
                <span>{language === "en" ? "Logout" : "تسجيل الخروج"}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center focus:outline-none gap-4"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-[#001C71] to-[#0EC5C7] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SU</span>
            </div>
            <span className="text-xl font-bold text-[#001C71]">
              Se-University
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-gray-700 hover:text-[#001C71] transition-colors duration-200"
            >
              {t("Courses")}
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-gray-700 hover:text-[#001C71] transition-colors duration-200"
            >
              {t("Contact Us")}
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-transparent h-9"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === "en" ? t("Arabic") : t("English")}</span>
            </Button>
            <Link href={`/${locale}/signin`}>
              <Button className="bg-[#001C71] hover:bg-[#001C71]/90">
                {t("Sign In")}
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
              <nav className="flex flex-col gap-y-6">
                <button
                  onClick={() => scrollToSection("courses")}
                  className="text-gray-700 hover:text-[#001C71] transition-colors duration-200 text-start"
                >
                  {t("Courses")}
                </button>
                <button
                  onClick={() => scrollToSection("footer")}
                  className="text-start text-gray-700 hover:text-[#001C71] transition-colors duration-200"
                >
                  {t("Contact Us")}
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 w-full bg-transparent h-9"
                >
                  <Globe className="w-4 h-4" />
                  <span>{locale === "en" ? t("Arabic") : t("English")}</span>
                </Button>
                <Link href={`/${locale}/signin`}>
                  <Button className="bg-[#001C71] hover:bg-[#001C71]/90 w-full">
                    {t("Sign In")}
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
