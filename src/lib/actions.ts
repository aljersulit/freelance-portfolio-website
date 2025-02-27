"use server";
import { sendEmail } from "@/lib/nodemailer";

import { z } from "zod";

const FormSchema = z.object({
	name: z.string(),
	email: z.string(),
	company: z.string().nullable(),
	message: z.string(),
});

export type State = {
	errors?: {
		name?: string[];
		company?: string[];
		email?: string[];
	};
	message?: string | null;
};

export async function sendContactEmail(prevState: State, formData: FormData) {
	const validatedFields = FormSchema.safeParse({
		name: formData.get("name"),
		company: formData.get("company"),
		email: formData.get("email"),
		message: formData.get("message"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing Fields. Failed to Send Email.",
		};
	}

	const { name, email, company, message } = validatedFields.data;

	// const adminMailOptions = {
	// 	from: process.env.GMAIL_USER,
	// 	to: process.env.ADMIN_EMAIL,
	// 	subject: `Portfolio Contact Form Submission from ${name}`,
	// 	text: `Name: ${name}\nCompany: ${
	// 		company || "N/A"
	// 	}\nEmail: ${email}\nMessage: ${message}`,
	// 	html: `<p><strong>Name:</strong> ${name}</p><p><strong>Company:</strong> ${
	// 		company || "N/A"
	// 	}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
	// };

	const userMailOptions = {
		from: `AljoyDigital<${process.env.GMAIL_USER}>`,
		to: email,
		subject: "Thank you for contacting me!",
		text: `Dear ${name},\n\nThank you for reaching out. I have received your message and will get back to you as soon as possible.\n\nYour Message:\n${message}`,
		html: `<p>Dear ${name},</p><p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p><p><strong>Your Message:</strong><br>${message}</p>`,
	};

	try {
		// const adminMailRes = await sendEmail(adminMailOptions);
		const userEmailRes = await sendEmail(userMailOptions);
		// console.log("Admin", adminMailRes);
		console.log("User", userEmailRes);
		return { message: "Email sent successfully!" };
	} catch (error) {
		console.error("Error sending emails:", error);
		return {
			message: "Failed to send email. Please try again.",
		};
	}
}




