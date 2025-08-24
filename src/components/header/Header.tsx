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

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [anim, setAnim] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      setShow(true);
      requestAnimationFrame(() => setAnim(true));
    } else {
      setAnim(false);
      const t = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  useEffect(() => {
    if (show) panelRef.current?.focus();
  }, [show]);

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
      <header className="h-[72px] py-2 px-4 lg:px-16 flex justify-between items-center">
        <Image
          src={resolvedTheme === "dark" ? LogoDark : LogoLight}
          alt="Robotics Logo"
          width={90}
          height={56}
          priority
        />

        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex text-xs font-bold text-main-text">
            <li className="h-full w-[85px]">
              <Link href="/">Home</Link>
            </li>
            <li className="h-full w-[85px]">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="h-full w-[85px]">
              <Link href="/market">Market</Link>
            </li>
            <li className="h-full w-[85px]">
              <Link href="/club">Club</Link>
            </li>
            <li className="h-full w-[85px]">
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
      </header>

      {show && (
        <div
          aria-modal="true"
          role="dialog"
          aria-label="Mobile menu"
          className="fixed inset-0 z-50 flex items-start justify-center top-16"
        >
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
              anim ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          />

          <div
            ref={panelRef}
            tabIndex={-1}
            className={`
              relative z-10 w-[92%] max-w-sm
              rounded-2xl bg-black-tint-2 dark:bg-black-tint-10 text-main-text
              outline-none p-4 origin-top right-0
              transition duration-200 ease-out
              ${anim ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
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
          </div>
        </div>
      )}
    </>
  );
}
