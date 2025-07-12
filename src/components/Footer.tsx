"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import universityLogo from "@/app/assets/university-logo-white.svg";
import Image from "next/image";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

 

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001C71] via-[#001C71] to-[#5F289E]">
        {/* Animated Shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-20 w-32 h-32 border border-[#0EC5C7]/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-24 h-24 border border-[#0EC5C7]/20 rounded-lg"
        />

        {/* Floating Dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-2 h-2 bg-[#0EC5C7] rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001C71]/90 to-transparent" />
      </div>

      <div className="relative z-10 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src={universityLogo}
                  alt="University Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-p-tints-tint-10 mb-6 max-w-md"
              >
                {t(
                  "Empowering learners worldwide with quality education and innovative online learning experiences Transform your future with Se-University"
                )}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-p-tints-tint-10 hover:text-[#0EC5C7] transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[#0EC5C7]">
                {t("Quick Links")}
              </h3>
              <div className="flex flex-col gap-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-p-tints-tint-10 hover:text-white transition-colors duration-200"
                >
                  <Link
                    href={`/${locale}`}
                    className="text-p-tints-tint-10 hover:text-[#0EC5C7] inline-block"
                  >
                    {t("Home")}
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-p-tints-tint-10 hover:text-white transition-colors duration-200"
                >
                  <Link
                    href="#diplomas"
                    className="text-p-tints-tint-10 hover:text-[#0EC5C7] inline-block"
                  >
                    {t("Diplomas")}
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-p-tints-tint-10 hover:text-white transition-colors duration-200"
                >
                  <Link
                    href={`/${locale}/signin`}
                    className="text-p-tints-tint-10 hover:text-[#0EC5C7] inline-block"
                  >
                    {t("Sign In")}
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[#0EC5C7]">
                {t("Contact Us")}
              </h3>
              <div className="flex flex-col gap-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-p-tints-tint-10 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-[#0EC5C7]" />
                  <span>info@se-university.com</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-p-tints-tint-10 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-[#0EC5C7]" />
                  <span>+1 (555) 123-4567</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center"
          >
            <motion.p
              className="text-p-tints-tint-10 text-sm flex items-center gap-1 text-center"
              // whileHover={{ scale: 1.05 }}
            >
              {t("All rights reserved")} © {t("Se-University")}{" "}
              {new Date().getFullYear()}. {t("Developed by")}{" "}
              <Link
                className="hover:text-white text-[#0EC5C7] font-semibold transition-all"
                href="https://betech.com.sa/"
              >
                {t("Be Tech")}
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
