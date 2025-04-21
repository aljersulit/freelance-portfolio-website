'use server';
import { sendEmail } from '@/lib/nodemailer';
import { verifyCaptchaToken } from '@/lib/captcha';
import { z } from 'zod';
import { FormSchema } from '@/lib/schema';
import EmailTemplate from '@/emails/email-template';
import { render } from '@react-email/components';

type ContactFormResponse = {
  success: boolean;
  message: string;
  errors?: Record<keyof z.infer<typeof FormSchema>, string[]>;
};

export async function sendContactEmail(
  formData: z.infer<typeof FormSchema>,
  token: string,
): Promise<ContactFormResponse> {
  const validatedFields = FormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Validation failed',
      errors: validatedFields.error.flatten().fieldErrors as Record<keyof z.infer<typeof FormSchema>, string[]>,
    };
  }

  const { firstname, lastname, email, message } = validatedFields.data;

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

  try {
    const emailHtml = await render(EmailTemplate({}));

    const userMailOptions = {
      from: `AljoyDigital <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: emailHtml,
    };
    // const adminMailRes = await sendEmail(adminMailOptions);
    const captchaResponse = await verifyCaptchaToken(token);

    if (!captchaResponse.success) {
      console.error(captchaResponse['error-codes']);
      return {
        success: false,
        message: 'Captcha verification failed. Please try again later.',
      };
    }

    const userEmailRes = await sendEmail(userMailOptions);
    // console.log("Admin", adminMailRes);
    console.log('User', userEmailRes);
    if (!userEmailRes) {
      return {
        success: false,
        message: 'Something went wrong. Please try again later.',
      };
    }

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    };
  }
}
