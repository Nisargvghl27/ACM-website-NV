import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Alert Email to the ACM Team
    const adminMailOptions = {
      // Use the 'from' field to set the display name
      from: `"ACM SVNIT Contact Form" <${process.env.EMAIL_USER}>`, 
      to: "acm@svnit.ac.in",
      subject: `New Inquiry from: ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    // 2. Professional Confirmation Email to the User
    const userMailOptions = {
      from: `"ACM SVNIT" <${process.env.EMAIL_USER}>`, // This makes it say "ACM SVNIT" in the inbox
      to: email,
      subject: "We've received your message! | ACM SVNIT",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb; }
            .header { background: linear-gradient(135deg, #1d4ed8, #0891b2); padding: 30px 20px; text-align: center; }
            .logo { max-width: 120px; height: auto; margin-bottom: 15px; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; }
            .content { padding: 40px 30px; color: #374151; line-height: 1.6; }
            .content h2 { color: #111827; font-size: 20px; margin-top: 0; }
            .message-box { background-color: #f3f4f6; border-left: 4px solid #3b82f6; padding: 15px 20px; margin: 25px 0; border-radius: 0 8px 8px 0; font-style: italic; color: #4b5563; }
            .footer { background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b; }
            .social-links { margin-top: 10px; }
            .social-links a { color: #3b82f6; text-decoration: none; margin: 0 10px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://res.cloudinary.com/dic4befjx/image/upload/v1778856434/logo_ibzlho.png" alt="ACM SVNIT Logo" class="logo" />
              <h1>Message Received</h1>
            </div>
            
            <div class="content">
              <h2>Hello ${firstName},</h2>
              <p>Thank you for reaching out to the <strong>ACM Student Chapter at SVNIT</strong>. We're thrilled to hear from you!</p>
              <p>This email is just to confirm that our team has successfully received your message. One of our core team members will review your inquiry and get back to you as soon as possible.</p>
              
              <p style="margin-top: 30px; font-weight: 600; color: #111827;">Here is a copy of your message:</p>
              <div class="message-box">
                "${message}"
              </div>
              
              <p>Keep learning, keep building.</p>
              <p style="font-weight: 600; margin-top: 5px;">— The ACM SVNIT Tech Team</p>
            </div>
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} ACM NIT Surat Student Chapter. All rights reserved.</p>
              <div class="social-links">
                <a href="https://acm.svnit.ac.in">Visit Website</a> | 
                <a href="https://www.linkedin.com/company/acmnitsurat/">LinkedIn</a> | 
                <a href="https://github.com/acm-svnit">GitHub</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}