import { Tajawal } from "next/font/google";
import localFont from "next/font/local";
import type React from "react";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const objektiv = localFont({
  src: [
    {
      path: "../fonts/ObjektivMk3_Trial_Hair.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/ObjektivMk3_Trial_Th.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/ObjektivMk3_Trial_Lt.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ObjektivMk3_Trial_Rg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ObjektivMk3_Trial_Md.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ObjektivMk3_Trial_SBd.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ObjektivMk3_Trial_Bd.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ObjektivMk3_Trial_XBd.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/ObjektivMk3_Trial_Blk.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--en-font-family",
  display: "swap",
});

const noeDisplay = localFont({
  src: [
    {
      path: "../fonts/fonnts.com-NoeDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--noe-font-family",
  display: "swap",
});

const Tajwal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--ar-font-family",
  display: "swap",
});

export const metadata = {
  title: "Be Group - Digital Marketing Agency",
  description: "We Provide Digital Marketing Solutions For Your Business",
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
      className={`${locale === "ar" ? Tajwal.variable : objektiv.variable} ${
        noeDisplay.variable
      }`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
