import type React from "react";
import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={almarai.className}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TS84ZX87');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={almarai.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TS84ZX87"
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
              description: "font-medium text-gray-600 dark:text-gray-300 mt-1",
              error: "bg-red-200 text-white border border-red-300",
              icon: "mx-2 text-black",
            },
          }}
        />
      </body>
    </html>
  );
}
