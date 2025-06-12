import type React from "react";
import type { Metadata } from "next";
import { Almarai } from "next/font/google";
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
      <body className={almarai.className}>{children}</body>
    </html>
  );
}
