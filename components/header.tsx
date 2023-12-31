'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useLocale, useTranslations } from 'next-intl'

type Props = {}

export default function Header({ }: Props) {
    const { activeSection, setActiveSection, setTimeLastClick } = useActiveSectionContext()
    const locale = useLocale()
    const t = useTranslations('Header')
    console.log(locale)
    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[5.5rem] w-full -translate-x-1/2
                rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 
                shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
                sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
                dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}>

                <nav className="z-50 flex justify-center items-center h-full w-full py-2 sm:py-0">
                    <ul className={`flex flex-wrap items-center justify-center 
                    h-full w-full text-[0.9rem] font-medium text-gray-500 
                    sm:flex-nowrap 
                    ${locale === 'zh' ?
                            'gap-x-2 sm:gap-x-7 md:gap-x-8' :
                            'gap-x-3.5 sm:gap-x-5 md:gap-x-5'
                        } `}
                    >
                        {
                            links.map((link, index) => (
                                <motion.li key={link.hash}
                                    className="flex items-center justify-center relative
                                    h-1/2 sm:h-3/4"
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}>
                                    <Link
                                        draggable={false}
                                        href={link.hash}
                                        className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition
                                    whitespace-nowrap
                                    ${activeSection === link.name ? 'text-gray-950 dark:text-gray-200' : ''}
                                    dark:text-gray-500 dark:hover:text-gray-300`}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setTimeLastClick(Date.now())
                                        }}>
                                        {t(link.name)}
                                        {link.name === activeSection && (
                                            <motion.span
                                                className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                                layoutId="activeSection"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            ></motion.span>
                                        )}
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </ul>
                </nav>
            </motion.div>
        </header>
    )
}