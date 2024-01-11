"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { projectsData } from '@/lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Locales } from '@/lib/types'

type Props = (typeof projectsData)[number]

// type Props = {
//     project: (typeof projectsData)[number]
// }

export default function Project({
    id,
    title,
    description,
    tags,
    imageUrl
}
    : Props) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.25 1"]
    })
    const t = useTranslations(`Projects.projectsData`)
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg flex
            overflow-hidden relative sm:min-h-[20rem]
            hover:bg-gray-200 transition
            dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="mt-4 mb-7 mx-5 sm:ml-10 sm:mr-2 sm:mt-10 sm:w-[50%] flex flex-col h-auto ">
                    <h3 className="text-2xl font-semibold">
                        {t(`${id}.title`)}
                    </h3>
                    <p className="my-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {t(`${id}.description`)}
                        {/* {t('description')} */}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {
                            tags
                                .map((tag: string, index: number) => (
                                    <li
                                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] 
                                    tracking-wider text-white dark:text-white/70
                                    rounded-full"
                                        key={index}
                                    >
                                        {tag}
                                    </li>
                                ))
                        }
                    </ul>
                    {/* <Image
                        src={imageUrl}
                        alt={`${title} Project`}
                        quality={95}
                        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                            transition 
                            group-hover:scale-[1.04]
                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:-rotate-2

                            group-even:group-hover:translate-x-3
                            group-even:group-hover:translate-y-3
                            group-even:group-hover:rotate-2

                            group-even:right-[initial] group-even:-left-40"
                    /> */}

                </div>
                <div className="mt-4 mb-7 mx-5 hidden sm:block h-auto overflow-hidden w-[50%] 
                sm:mr-2 sm:ml-2 sm:mt-10] group-even:-order-1">
                    <Image
                        src={imageUrl}
                        alt={`${t(`${id}.title`)} Project`}
                        quality={90}
                        draggable={false}
                        className="max-h-[20rem] object-contain object-center
                            rounded-lg
                            transition 
                            group-hover:scale-[1.08]"
                    />

                    {/* group-hover:-translate-x-3
                    group-hover:translate-y-3

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3 */}
                </div>
            </section>
        </motion.div>
    )
}