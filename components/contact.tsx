"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './contact-submit-button'
import { useTranslations } from 'next-intl'
import { MotionSection } from './client/Motion'
import toast from "react-hot-toast"

type Props = {}

export default function Contact({ }: Props) {
    const section = 'Contact'
    const { ref } = useSectionInView({
        section
    })
    const myEmail = 'jason57zxc@gmail.com'
    const t = useTranslations(section)
    const formRef = React.useRef<HTMLFormElement>(null);
    return (
        <MotionSection
            ref={ref}
            id={section.toLowerCase()}
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
                ref={formRef}
                action={async (formData) => {
                    const { error } = await sendEmail(formData)
                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success(t('successMsg'))
                    formRef.current?.reset()
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