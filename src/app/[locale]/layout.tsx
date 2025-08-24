import { DM_Sans, Tajawal } from "next/font/google";
import type React from "react";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../styles/globals.css";
import { ThemeProviders } from "@/app/theme/ThemeProvidors";

const DMSans = DM_Sans({
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
  title: "Robotics",
  description: "Robotics Landing Page",
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
      className={`${locale === "ar" ? Tajwal.variable : DMSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            {children}
            <Toaster position="top-center" />
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
