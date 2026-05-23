import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT ?? '465');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? smtpUser;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;

    if (!smtpUser || !smtpPass || !toEmail || !fromEmail) {
      return NextResponse.json(
        { error: 'Email server is not configured. Please set SMTP environment variables.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `You received a new portfolio contact submission.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ ok: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong while sending your message. Please try again.' },
      { status: 500 }
    );
  }
}
