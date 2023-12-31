"use client"

import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';
import { useSectionInView, useTheme } from '@/lib/hooks';
import { useLocale, useTranslations } from 'next-intl';
import { experiencesData } from '@/lib/data';
import { Locales } from '@/lib/types';

type Props = {}


export default function Experience({ }: Props) {
    const section = 'Experience'
    const { ref, inView } = useSectionInView({
        section
    })
    const t = useTranslations(section)
    const t_experienceDt = useTranslations(`${section}.experienceData`)
    const { theme } = useTheme()
    //const locale = useLocale()
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        if (!isVisible) {
            setIsVisible(inView)
        }
    }, [inView, isVisible])
    //const data = experiencesData[locale as Locales]

    return (
        <section
            ref={ref}
            id={section.toLowerCase()}
            className="mb-28 scroll-mt-28 text-center w-full lg:max-w-[85%] xl:max-w-none sm:mb-40">
            <SectionHeading>{t('title')}</SectionHeading>

            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <VerticalTimelineElement
                            visible={isVisible}
                            contentStyle={{
                                background:
                                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            // date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">{t_experienceDt(`${item.id}.${item.title}`)}</h3>
                            <p className="font-normal !mt-0">{`${t_experienceDt(`${item.id}.${item.location}`)}    ${item.date}`}</p>
                            {typeof item.description === 'string' &&
                                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                                    {t_experienceDt(`${item.id}.${item.description}`)}
                                </p>
                            }

                            {typeof item.description === 'object' &&
                                <ul className="!mt-1 ml-3.5">
                                    {
                                        item.description.map((d, index) => (
                                            <li className='list-disc text-gray-700 dark:text-white/75' key={index}>
                                                <p className='!mt-0 !font-normal text-gray-700 dark:text-white/75'>
                                                    {t_experienceDt(`${item.id}.description.${d}`)}
                                                </p>
                                            </li>

                                        ))
                                    }
                                </ul>
                            }
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}