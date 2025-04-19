"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// In production, use environment variables
const resend = new Resend("re_123456789")

type ContactFormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
  newsletter: boolean
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Send confirmation email to the user
    await resend.emails.send({
      from: "Artistic Photography <contact@artistic.com>",
      to: data.email,
      subject: "Thank you for contacting Artistic Photography",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">Thank You for Contacting Us!</h1>
          <p>Dear ${data.name},</p>
          <p>We've received your message and will get back to you as soon as possible, usually within 24-48 hours.</p>
          
          <h2 style="color: #7c3aed; margin-top: 20px;">Your Message Details:</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
          ${data.service ? `<p><strong>Service Interested In:</strong> ${data.service}</p>` : ""}
          <p><strong>Message:</strong> ${data.message}</p>
          
          <p style="margin-top: 20px;">If you have any urgent questions, please call us at +234 (907) 807-3945.</p>
          
          <p>Best regards,<br>
          The Artistic Photography Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Artistic Photography<br>
            123 Photography Lane<br>
            New York, NY 10001</p>
            ${data.newsletter ? "<p>You have subscribed to our newsletter. You can unsubscribe at any time by clicking the unsubscribe link in our emails.</p>" : ""}
          </div>
        </div>
      `,
    });

    // Send notification email to the business
    await resend.emails.send({
      from: "Contact Form <contact@artistic.com>",
      to: "admin@artistic.com", // Your business email
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">New Contact Form Submission</h1>
          
          <h2 style="color: #7c3aed; margin-top: 20px;">Contact Details:</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
          ${data.service ? `<p><strong>Service Interested In:</strong> ${data.service}</p>` : ""}
          <p><strong>Message:</strong> ${data.message}</p>
          <p><strong>Newsletter Signup:</strong> ${data.newsletter ? "Yes" : "No"}</p>
          
          <p style="margin-top: 20px;">Please respond to this inquiry within 24 hours.</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send email")
  }
}
