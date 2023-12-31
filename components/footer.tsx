import { useNow, useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    const t = useTranslations('Footer')
    const now = useNow()

    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                {/* Copyright &copy; 2023 jason57zxc. All rights reserved. */}
                {t('copyright', {
                    year: now.getFullYear()
                })}
            </small>
            <p className="text-xs mx-12">
                {/* <span className="font-semibold">About this website:</span> built with
                React & Next.js, TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, Vercel hosting. */}
                {
                    t.rich('about', {
                        bold: (chunks) => <span className="font-semibold">{chunks}</span>
                    })
                }
            </p>
        </footer>
    )
}