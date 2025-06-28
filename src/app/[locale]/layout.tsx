import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Almarai } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "جازتك - نظام إدارة محطات الوقود",
  description:
    "نظام جازتك لإدارة وأتمتة إجراءات محطات الوقود وتخطيط موارد المنشأة",
  icons: {
    icon: "/gastech-logo.svg",
  },
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
      className={almarai.className}
    >
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N49F3245');`}
        </Script>
      </head>
      <body className={almarai.className}>
        <NextIntlClientProvider messages={messages}>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N49F3245"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          {children}

          <Toaster
            position="top-center"
            toastOptions={{
              unstyled: true,
              className: "md:!w-[350px]",
              classNames: {
                toast:
                  "bg-white dark:bg-gray-800 rounded shadow-lg p-4 flex items-start",
                title: "font-semibold text-gray-900 dark:text-gray-100",
                description:
                  "font-medium text-gray-600 dark:text-gray-300 mt-1",
                error: "bg-red-200 text-white border border-red-300",
                icon: "mx-2 text-black",
              },
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
