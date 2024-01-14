
import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { RiTranslate } from 'react-icons/ri'

type Props = {

}

export default function LocaleSwitcher({ }: Props) {

    const locale = useLocale()
    const lang = locale === 'en' ? 'zh' : 'en'
    console.log('locale lang:', lang)
    console.log('locale locale:', locale)
    return (
        <Link
            aria-label="Switch Language"
            draggable={false}
            href={{
                pathname: `/${lang}`,
            }}
            locale={lang}
            hrefLang={lang}
            className="bg-white w-[3rem] h-[3rem] bg-opacity-80 
            backdrop-blur-[0.5rem] border border-white border-opacity-40 
            shadow-2xl rounded-full flex items-center justify-center 
            hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        >
            <RiTranslate />
        </Link>
    )
}
