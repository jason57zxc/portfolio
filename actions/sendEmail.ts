"use server"

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!senderEmail || typeof senderEmail !== 'string') {
        return {
            error: "Invalid Sender Email"
        }
    }
    if (!message || typeof message !== 'string') {
        return {
            error: "Invalid Message"
        }
    }

    let data
    try {
        data = await resend.emails.send({
            from: 'Protfolio Contact <onboarding@resend.dev>',
            to: 'jason57zxc@gmail.com',
            subject: 'Protfolio Page Message',
            //text: message,
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
        if (data.error) {
            return {
                error: data.error.message
            }
        }
    } catch (error: unknown) {
        let message: string;

        if (error instanceof Error) {
            message = error.message;
        } else if (error && typeof error === "object" && "message" in error) {
            message = String(error.message);
        } else if (typeof error === "string") {
            message = error;
        } else {
            message = "Something went wrong";
        }

        return {
            error: message
        };
    }
    return { data }

}