import { EmailTemplate, EmailTemplateSchema } from '@/components/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse<null>) {
  try {
    const emailParse = EmailTemplateSchema.safeParse(req.body);
    if (!emailParse.success) {
      return res.status(400).end();
    }
    const { error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'rajritesh03@gmail.com',
      subject: 'New Message | Ritesh Portfolio',
      react: EmailTemplate(emailParse.data),
    });

    if (error) {
      return res.status(500).end();
    }

    return res.status(200).end();
  } catch {}
}
