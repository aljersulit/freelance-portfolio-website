"use server";
import { sendEmail } from "@/lib/nodemailer"; // Adjust path as needed

import { z } from "zod";

const FormSchema = z.object({
	name: z.string(),
	email: z.string(),
	company: z.string().nullable(),
	message: z.string(),
});

export async function sendContactEmail(
	// prevState: { message: string; success: boolean } | undefined,
	formData: FormData
) {
	const { name, company, email, message } = FormSchema.parse({
		name: formData.get("name"),
		company: formData.get("company"),
		email: formData.get("email"),
		message: formData.get("message"),
	});

	console.log("In the server", name, company, email, message);
	// const name = formData.get('name') as string;
	// const company = formData.get('company') as string | null;
	// const email = formData.get('email') as string;
	// const message = formData.get('message') as string;

	// if (!name || !email || !message) {
	//   return { success: false, message: 'Please fill out all required fields.' };
	// }

	// Email to you (aljeromesulit12@gmail.com)
	const adminMailOptions = {
		from: process.env.GMAIL_USER, // aljersulit@outlook.com
		to: process.env.ADMIN_EMAIL,
		subject: `Portfolio Contact Form Submission from ${name}`,
		text: `Name: ${name}\nCompany: ${
			company || "N/A"
		}\nEmail: ${email}\nMessage: ${message}`,
		html: `<p><strong>Name:</strong> ${name}</p><p><strong>Company:</strong> ${
			company || "N/A"
		}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
	};

	// Confirmation email to the user
	const userMailOptions = {
		from: process.env.GMAIL_USER,
		to: email,
		subject: "Thank you for contacting me!",
		text: `Dear ${name},\n\nThank you for reaching out. I have received your message and will get back to you as soon as possible.\n\nYour Message:\n${message}`,
		html: `<p>Dear ${name},</p><p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p><p><strong>Your Message:</strong><br>${message}</p>`,
	};

	try {
		const adminMailRes = await sendEmail(adminMailOptions);
		const userEmailRes = await sendEmail(userMailOptions);
		console.log("Admin", adminMailRes);
		console.log("User", userEmailRes);
		// return { success: true, message: 'Emails sent successfully!' };
	} catch (error) {
		console.error("Error sending emails:", error);
		// return { success: false, message: 'Failed to send emails.' };
	}
}
