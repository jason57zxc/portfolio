import './globals.css'
import { Inter } from 'next/font/google'

import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "react-hot-toast";

import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeContextProvider from '@/context/theme-context'

import Header from '@/components/header'
import Footer from '@/components/footer'
import SwitchGroup from '@/components/switch-group'
import { Locales } from '@/lib/types';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jason Portfolio',
  description: "This is Jason's Portfolio page.",
}

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

  const messages = useMessages();
  return (
    <html lang={locale} className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950
      relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
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
