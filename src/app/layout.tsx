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
    icon: '/gastech-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={almarai.className}>
      <body className={almarai.className}>
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
