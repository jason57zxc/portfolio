"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
import profileImg from '@/public/profile.jpeg'

type Props = {}

export default function Intro({ }: Props) {

    const { setActiveSection, setTimeLastClick } = useActiveSectionContext()
    const { ref } = useSectionInView({
        section: 'Home'
    })
    const t = useTranslations('Intro')
    const locale = useLocale()

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={profileImg}
                            alt="Jason's Profile"
                            quality="80"
                            priority={true}
                            draggable={false}
                            className="h-28 w-28 rounded-2xl object-cover border-[0.35rem] border-white shadow-xl"
                        ></Image>
                    </motion.div>
                    <motion.span
                        className="absolute -bottom-2 -right-2 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        🐶
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className={`mb-10 mt-4 px-4 text-2xl
                ${locale === 'zh' ? '' : 'font-medium'} 
                ${locale === 'zh' ? 'text-left' : 'text-center'} 
                !leading-[1.5] sm:text-4xl`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {/* <span className="font-bold">Hello, I&apos;m Jason.</span> I&apos;m a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">2 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>. */}
                {t.rich('intro', {
                    bold: (chunks) => <span className="font-bold">{chunks}</span>,
                    br: () => <br />
                })}
            </motion.h1>

            {/* <span className="font-bold"> */}

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-md font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    draggable={false}
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
                    rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 
                    active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeLastClick(Date.now())
                    }}
                >
                    {/* Contact me here */}
                    {t('contactMe')}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 
                    rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 
                    transition cursor-pointer borderBlack  dark:bg-white/10"
                    href={`/jason57zxc_CV_${locale ? locale : 'zh'}.pdf`}
                    download
                    draggable={false}
                >
                    {/* Download CV */}
                    {t('downloadCV')}
                    {/* <HiDownload className="opacity-70 group-hover:translate-y-1 transition" /> */}
                    <HiDownload className="opacity-70 group-hover:scale-110 transition" />
                </a>

                {/* <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 
                    text-lg rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition 
                    cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://linkedin.com"
                    target="_blank"
                    draggable={false}
                >
                    <BsLinkedin />
                </a> */}

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 
                    text-lg rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition 
                    cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/jason57zxc"
                    target="_blank"
                    draggable={false}
                    aria-label="GitHub"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>

        </section >
    )
} 