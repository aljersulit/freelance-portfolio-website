'use server';
import { sendEmail } from '@/lib/nodemailer';

import { z } from 'zod';

const FormSchema = z.object({
  firstname: z.string().min(1, { message: 'Please enter your first name.' }),
  lastname: z.string().min(1, { message: 'Please enter your last name.' }),
  email: z.string().nonempty({ message: 'Please enter your email.' }).email({ message: 'Invalid email' }),
  company: z.string().optional(),
  message: z.string().min(1, { message: 'Please enter your message.' }),
});

export type FormState = {
  errors: {
    firstname?: string[];
    lastname?: string[];
    email?: string[];
    message?: string[];
  };
  status: {
    type?: 'Success' | 'Error';
    message?: string;
  };
  contactFormData: {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
  };
};

export async function sendContactEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const contactFormData = {
    firstname: formData.get('firstname') as string,
    lastname: formData.get('lastname') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };
  const validatedFields = FormSchema.safeParse(contactFormData);

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
      status: {
        type: 'Error',
        message: 'Missing or invalid fields. Failed to send email.',
      },
      contactFormData,
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

  const userMailOptions = {
    from: `AljoyDigital<${process.env.GMAIL_USER}>`,
    to: email,
    subject: 'Thank you for contacting me!',
    text: `Dear ${firstname} ${lastname},\n\nThank you for reaching out. I have received your message and will get back to you as soon as possible.\n\nYour Message:\n${message}`,
    html: `<p>Dear ${firstname} ${lastname},</p><p>Thank you for reaching out. I have received your message and will get back to you as soon as possible.</p><p><strong>Your Message:</strong><br>${message}</p>`,
  };

  try {
    // const adminMailRes = await sendEmail(adminMailOptions);
    const userEmailRes = await sendEmail(userMailOptions);
    // console.log("Admin", adminMailRes);
    console.log('User', userEmailRes);
    return {
      ...prevState,
      errors: {},
      status: { type: 'Success', message: 'Email sent successfully!' },
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    return {
      ...prevState,
      errors: {},
      status: {
        type: 'Error',
        message: 'Failed to send email. Please try again.',
      },
    };
  }
}
