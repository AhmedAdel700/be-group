import { Public_Sans, Tajawal } from "next/font/google";
import type React from "react";

import MainHeader from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../styles/globals.css";

const PublicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--en-font-family",
  display: "swap",
});

const Tajwal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--ar-font-family",
  display: "swap",
});

export const metadata = {
  title: "Se-University",
  description:
    "Se-University is a modern, multilingual online education platform designed to empower learners worldwide with high-quality, accessible, and engaging diploma programs.",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${locale === "ar" ? Tajwal.variable : PublicSans.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <MainHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
