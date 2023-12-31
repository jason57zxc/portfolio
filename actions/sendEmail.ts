"use server"

import { Resend } from "resend";

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

    try {
        await resend.emails.send({
            from: 'Protfolio Contact <onboarding@resend.dev>',
            to: 'jason57zxc@gmail.com',
            subject: 'Hello World',
            // html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
            text: message,
            reply_to: senderEmail,
        });
    } catch (error: any) {
        console.log(error);
        return {
            error: error?.message || error,
        }
    }


}