import { DM_Sans, Tajawal } from 'next/font/google';
import type React from 'react';
import { Toaster } from "@/components/ui/sonner";

import MainHeader from '@/components/header/Header';
import { NextIntlClientProvider } from 'next-intl';
import { Providers } from '../store/provider';
import { getMessages } from 'next-intl/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/options';
import '../styles/globals.css';

const DMSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--en-font-family', // You can reuse the same variable name for consistency
  display: 'swap',
});

const Tajwal = Tajawal({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--ar-font-family',
  display: 'swap',
});

export const metadata = {
  title: 'Se-University',
  description:
    'Se-University is a modern, multilingual online education platform designed to empower learners worldwide with high-quality, accessible, and engaging diploma programs.',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const session = await getServerSession(authOptions);

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={`${locale === 'ar' ? Tajwal.variable : DMSans.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers session={session}>
            <MainHeader />
            {children}
            <Toaster />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
