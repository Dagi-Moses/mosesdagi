import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// POST /api/contact
export async function POST(req: NextRequest) {
  try {
    const { name, email, message, pageUrl, app } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing email credentials in environment variables");
      return NextResponse.json(
        { error: "Email service misconfiguration" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2",
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: "nodetechnologiessolution@gmail.com",
      replyTo: email,
      subject: `New Contact message from ${app}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Page URL:</strong> <a href="${pageUrl}">${pageUrl}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
