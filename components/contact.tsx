"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './contact-submit-button'
import { useTranslations } from 'next-intl'
import { MotionSection } from './client/Motion'

type Props = {}

export default function Contact({ }: Props) {
    const { ref } = useSectionInView({
        section: 'Contact'
    })
    const myEmail = 'jason57zxc@gmail.com'
    const t = useTranslations('Contact')
    return (
        <MotionSection
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>
                {/* Contact me */}
                {t('title')}
            </SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                {/* Please contact me directly at{" "}
                <a className="underline" href={`mailto:${myEmail}`}>
                    {myEmail}
                </a>{" "}
                or through this form. */}
                {
                    t.rich('subtitle', {
                        email: (chunks) =>
                            <a
                                className="underline"
                                href={`mailto:${myEmail}`}
                                draggable={false}>
                                {myEmail}
                                {chunks}
                            </a>
                    })
                }
            </p>

            <form
                action={async (formData) => {
                    console.log(formData)
                    await sendEmail(formData)
                }}
                className="mt-10 flex flex-col dark:text-black">
                <input
                    className="h-14 px-4 rounded-lg borderBlack
                    dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder={t('placeholderEmail')}
                //placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4
                    dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder={t('placeholderMessage')}
                    //placeholder="Your message"
                    required
                    maxLength={2000}
                />
                {/* <button>Submit</button> */}
                <SubmitBtn />
            </form>
        </MotionSection>
    )
}