import type React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../styles/globals.css";
import MainHeader from "@/components/Header";

export const metadata = {
  title: "Se-University",
  description: "Se-University",
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
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MainHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
