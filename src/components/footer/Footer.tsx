"use client";

import Image from "next/image";
import { Link } from "@/navigations";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import clsx from "clsx";
import { motion } from "motion/react";

import logo from "@/app/assets/20879.webp";
import partner1 from "@/app/assets/1.png";
import partner2 from "@/app/assets/02.png";
import partner3 from "@/app/assets/3.png";

const SocialIcon: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={clsx(
        "group relative w-12 h-12 rounded-full flex items-center justify-center",
        "border border-white/80 text-white overflow-hidden",
        "transition-transform hover:scale-[1.02] active:scale-[0.98]"
      )}
    >
      {/* White background that expands on hover */}
      <span
        className={clsx(
          "absolute inset-0 rounded-full bg-white",
          "scale-0 group-hover:scale-100 transition-transform duration-500"
        )}
      />
      {/* Icon */}
      <span
        className={clsx(
          "relative z-[1] transition-colors duration-300 group-hover:text-black"
        )}
      >
        {children}
      </span>
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-5 bg-main-black text-white px-4 md:px-8 xl:px-20 py-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center"
      >
        <Image
          src={logo}
          alt="Be Group Logo"
          width={150}
          height={150}
          className="rounded-md"
          priority
        />
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex gap-4 flex-wrap items-center justify-center text-center"
      >
        <div className="flex items-center gap-2 cursor-target">
          <Mail size={18} className="text-main-secondary shrink-0" />
          <Link
            href="mailto:info@begroup.com"
            className="hover:underline text-xs sm:text-sm md:text-base"
          >
            info@begroup.com
          </Link>
        </div>
        <div className="flex items-center gap-2 cursor-target">
          <Phone size={18} className="text-main-secondary shrink-0" />
          <Link
            href="tel:+201012345678"
            className="text-xs sm:text-sm md:text-base"
          >
            +20 101 234 5678
          </Link>
        </div>
        <div className="flex items-start gap-2 justify-center cursor-target">
          <MapPin size={18} className="text-main-secondary shrink-0" />
          <span className="text-xs sm:text-sm md:text-base">
            Office 12, Fifth Settlement, New Cairo, Egypt
          </span>
        </div>
      </motion.div>

      {/* Social */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-4 items-center"
      >
        <div className="text-white/90 font-medium">Follow us</div>
        <div className="flex items-center gap-3">
          {/* Wrap each icon with motion.div for stagger */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.0 }}
            className="cursor-target"
          >
            <SocialIcon href="https://youtube.com" label="YouTube">
              <Youtube size={22} />
            </SocialIcon>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="cursor-target"
          >
            <SocialIcon href="https://facebook.com" label="Facebook">
              <Facebook size={22} />
            </SocialIcon>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="cursor-target"
          >
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <Linkedin size={22} />
            </SocialIcon>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="cursor-target"
          >
            <SocialIcon href="https://twitter.com" label="Twitter">
              <Twitter size={22} />
            </SocialIcon>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="cursor-target"
          >
            <SocialIcon href="https://instagram.com" label="Instagram">
              <Instagram size={22} />
            </SocialIcon>
          </motion.div>
        </div>
      </motion.div>

      {/* Partners */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-4 items-center"
      >
        <div className="text-white/90 font-medium">Our Partners</div>
        <div className="flex items-center justify-center gap-4 lg:gap-10 flex-wrap">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src={partner1}
              alt="Partner 1"
              width={100}
              height={40}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <Image
              src={partner3}
              alt="Partner 3"
              width={100}
              height={40}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.16 }}
          >
            <Image
              src={partner2}
              alt="Partner 2"
              width={60}
              height={40}
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col lg:flex-row justify-between items-center gap-2 border-t border-white/10 pt-6"
      >
        <div className="text-white/70 text-xs sm:text-sm text-center">
          Made By <span className="text-main-primary">Be Group</span> © 2025 All
          Rights Reserved
        </div>
        <div className="flex items-center gap-6 text-white/60 text-xs sm:text-sm">
          <Link href="#" className="hover:underline cursor-target">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline cursor-target">
            Terms
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
