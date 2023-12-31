"use client"
import React from 'react'
import SectionHeading from '@/components/section-heading'
import { useSectionInView } from '@/lib/hooks'
import { MotionSection } from './client/Motion'
import { useTranslations } from 'next-intl'

type Props = {}

export default function About({ }: Props) {
    const section = 'About'
    const { ref } = useSectionInView({
        section,
        threshold: 0.85
    })
    const t = useTranslations(section)

    return (
        <MotionSection
            ref={ref}
            className="mb-28 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id={section.toLowerCase()}
        >
            <SectionHeading>{t('title')}</SectionHeading>

            {t.rich(('content'), {
                p: chunks => <p className="mb-3">{chunks}</p>,
                b: chunks => <b>{chunks}</b>
            })}
        </MotionSection>
    )
}