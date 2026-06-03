"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const { error } = await resend.emails.send({
      from: "TechMend Website <onboarding@resend.dev>",
      to: ["samidouca@gmail.com"], // Change this to the client's email AFTER verifying a domain
      subject: `New Quote Request from ${formData.name}`,
      text: `
        You have a new message from the website!
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "Not provided"}
        
        Message:
        ${formData.message}
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { error: error.message };
    }
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send email" };
  }
}