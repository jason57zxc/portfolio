import './globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "react-hot-toast";

import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeContextProvider from '@/context/theme-context'

import Header from '@/components/header'
import Footer from '@/components/footer'
import SwitchGroup from '@/components/switch-group'

import type { Metadata } from "next";
import type { Locales } from '@/lib/types';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: "Jason57zxc's Portfolio",
  description: "This is jason57zxc's Portfolio page.",
  generator: "Next.js",
  manifest: "/manifest.json",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  keywords: ["nextjs", "pwa", "next-pwa", "jason57zxc"],
  authors: [
    { name: "jason57zxc" },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon_x256.png" },
    { rel: "icon", url: "icons/icon_x256.png" },
  ],
};

type Props = {
  children: React.ReactNode,
  params: {
    locale: Locales
  }
}

export default function RootLayout({
  children,
  params: { locale }
}:
  Props) {
  console.log('layout:', locale)
  const messages = useMessages();
  return (
    <html lang={locale} className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950
      relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#9dd6ed] absolute top-[-6rem] right-[2rem] -z-10 h-[31.25rem] w-[31.25rem]
        rounded-full blur-[8rem] sm:w-[68.75rem] lg:right-[4rem] dark:bg-[#38224d]"></div>
        <div className="bg-[#c2f5c2] absolute top-[-1rem] -z-10 left-[-40rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-30rem] lg:left-[-20rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#684025]"></div>
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
        >
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <SwitchGroup />
              <Toaster position="top-center" />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
