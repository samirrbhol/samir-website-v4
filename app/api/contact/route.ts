import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return new NextResponse("Missing fields", { status: 400 });
  }

  const host = process.env.SMTP_HOST || "smtp.mail.me.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER || process.env.TO_EMAIL;
  const pass = process.env.SMTP_PASS;
  const to = process.env.TO_EMAIL || "samirrbhol82@icloud.com";

  if (!user || !pass || !to) {
    return new NextResponse("Email not configured", { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host, port, secure: port === 465, auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Website Contact <${to}>`,
      to,
      replyTo: email,
      subject: `[Website] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return new NextResponse("Mailer error: " + err.message, { status: 500 });
  }
}
