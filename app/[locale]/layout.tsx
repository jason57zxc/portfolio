import './globals.css'
import { Inter } from 'next/font/google'

import { NextIntlClientProvider, useMessages } from "next-intl";
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
        <div className="bg-[#9dd6ed] absolute top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[8rem] sm:w-[68.75rem] lg:right-[4rem] dark:bg-[#8850c1]"></div>
        <div className="bg-[#c2f5c2] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 
        2xl:left-[-5rem] dark:bg-[#734629]"></div>
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
              {/* <LocaleSwitcher /> */}
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
