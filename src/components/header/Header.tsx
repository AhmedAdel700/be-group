"use client";

// import universityLogo from "@/app/assets/university-logo.svg";
import logo from "@/app/assets/logo.svg";
import { usePathname, useRouter } from "@/navigations";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, LogOut, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { scrollToSectionWithOffset } from "@/lib/utils";

export default function MainHeader() {
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

    scrollToSectionWithOffset(sectionId, 70);
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
    const search = typeof window !== "undefined" ? window.location.search : "";
    router.replace(pathname + search, { locale: newLocale });
  };

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (pathname === "/" && target) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        scrollToSectionWithOffset(target, 70);
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
    const search = typeof window !== "undefined" ? window.location.search : "";
    router.replace(pathname + search, { locale: newLocale });
  };

  if (pathname.includes("/enrollment-status")) {
    // Custom header for enrollment-status page
    return (
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-4">
              <div className="w-full flex items-center justify-center">
                <Image src={logo} alt="Logo" width={120} height={120} />{" "}
                {/* Increased size */}
              </div>
            </Link>
            {/* Header Actions */}
            <div className="flex items-center gap-4">
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center focus:outline-none gap-4"
          >
            <div className=" w-full flex items-center justify-center">
              <Image src={logo} alt="Logo" width={120} height={120} />{" "}
              {/* Increased size */}
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 font-medium">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-black-tint-80 hover:text-main-primary transition-colors duration-200"
            >
              {t("Diplomas")}
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="text-black-tint-80 hover:text-main-primary transition-colors duration-200"
            >
              {t("Contact Us")}
            </button>
            
          </nav>
          <nav className="hidden md:flex items-center gap-4 font-medium">
            
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
              <Button className="bg-main-primary hover:bg-p-shades-shade-80">
                {t("Sign In")}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="md:hidden border-t border-gray-200 py-4 bg-white fixed inset-0 top-[81px] z-40"
            >
              <nav className="flex flex-col gap-y-6 p-4 bg-main-white">
                <button
                  onClick={() => scrollToSection("courses")}
                  className="text-black-tint-80 hover:text-main-primary transition-colors duration-200 text-start"
                >
                  {t("Diplomas")}
                </button>
                <button
                  onClick={() => scrollToSection("footer")}
                  className="text-start text-black-tint-80 hover:text-main-primary transition-colors duration-200"
                >
                  {t("Contact Us")}
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-1 w-full bg-transparent h-9"
                >
                  <Globe className="w-4 h-4" />
                  <span>{locale === "en" ? t("Arabic") : t("English")}</span>
                </Button>
                <Link href={`/${locale}/signin`} passHref legacyBehavior>
                  <Button
                    className="bg-main-primary hover:bg-p-shades-shade-80 w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
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
