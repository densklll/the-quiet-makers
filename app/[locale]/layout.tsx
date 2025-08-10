import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { I18nProvider } from '../components/I18nProvider';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, SupportedLocale } from '@/lib/i18n';

export const dynamicParams = false;
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((l) => ({ locale: l }));
}

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'The Quiet Makers',
  description: 'A new-generation platform that makes philanthropy convenient, transparent and inspiring using AI and Blockchain.',
};

export default function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const locale = (SUPPORTED_LOCALES.includes(params.locale as SupportedLocale) ? params.locale : DEFAULT_LOCALE) as SupportedLocale;
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <I18nProvider locale={locale}>
          <main className="min-h-screen">{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}