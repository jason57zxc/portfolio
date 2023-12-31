"use client"
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import SectionHeading from '@/components/section-heading'
import Project from '@/components/project'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { Locales } from '@/lib/types'

type Props = {}

export default function Projects({ }: Props) {
    const section = 'Projects'
    const { ref } = useSectionInView({
        section
    })
    const t = useTranslations(section)
    const locale = useLocale()
    //const data = projectsData[locale as Locales]

    return (
        <section
            ref={ref}
            id={section.toLowerCase()}
            className="scroll-mt-28 mb-28">
            <SectionHeading>{t('title')}</SectionHeading>

            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                            {/* <Project project={project} /> */}
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

// type ProjectProps = {
//     title: string;
//     description: string;
//     tags: string[];
//     imageUrl: string;
// }
