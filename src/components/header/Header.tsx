"use client";

import Image from "next/image";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import LogoLight from "@/app/assets/logoLight.svg";
import LogoDark from "@/app/assets/logoDark.svg";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/navigations";
import menuDark from "@/app/assets/menuDark.svg";
import menuLight from "@/app/assets/menuLight.svg";
import { X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const headerVar: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const overlayVar: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const panelVar: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: -8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: easeOut },
  },
  exit: { opacity: 0, scale: 0.98, y: -8, transition: { duration: 0.2 } },
};

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!mounted) {
    return (
      <header className="h-[72px] py-2 px-16 flex justify-between items-center">
        <Image src={LogoLight} alt="Robotics Logo" width={90} height={56} />
        <ThemeSwitch />
      </header>
    );
  }

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        variants={headerVar}
        initial="hidden"
        animate="show"
        className="h-[72px] py-2 px-4 lg:px-8 mx-auto flex justify-between items-center z-[100] relative"
      >
        <Image
          src={resolvedTheme === "dark" ? LogoDark : LogoLight}
          alt="Robotics Logo"
          width={90}
          height={56}
          priority
        />

        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex text-xs font-bold text-main-text gap-[48px]">
            <li className="h-full">
              <Link href="/">Home</Link>
            </li>
            <li className="h-full">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="h-full">
              <Link href="/market">Market</Link>
            </li>
            <li className="h-full">
              <Link href="/club">Club</Link>
            </li>
            <li className="h-full">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <ThemeSwitch />
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10"
        >
          <Image
            src={resolvedTheme === "dark" ? menuDark : menuLight}
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <div
            aria-modal="true"
            role="dialog"
            aria-label="Mobile menu"
            className="fixed inset-0 z-[100] flex items-start justify-center top-16"
          >
            <motion.div
              variants={overlayVar}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute inset-0 bg-black/50"
              onClick={closeMenu}
            />

            <motion.div
              ref={panelRef}
              tabIndex={-1}
              variants={panelVar}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
                relative z-10 w-[92%] max-w-sm
                rounded-2xl bg-black-tint-2 dark:bg-black-tint-10 text-main-text
                outline-none p-4 origin-top right-0
              "
            >
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black-tint-5 dark:hover:bg-black-tint-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-main-primary"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-4">
                <Image
                  src={resolvedTheme === "dark" ? LogoDark : LogoLight}
                  alt="Robotics Logo"
                  width={90}
                  height={56}
                />

                <nav className="mt-2">
                  <ul className="flex flex-col gap-2 text-sm font-bold">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/courses", label: "Courses" },
                      { href: "/market", label: "Market" },
                      { href: "/club", label: "Club" },
                      { href: "/contact", label: "Contact Us" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="
                            block rounded-xl
                            px-4 py-3
                            bg-transparent
                            hover:bg-black-tint-5 dark:hover:bg-black-tint-20
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-main-primary
                            transition
                          "
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="pt-2 border-t border-black-tint-10 dark:border-black-tint-20 flex items-center justify-between">
                  <span className="text-xs opacity-80">Theme</span>
                  <ThemeSwitch />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
