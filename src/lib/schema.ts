import { z } from 'zod';

export const FormSchema = z.object({
  firstname: z.string().min(1, { message: 'Please enter your first name.' }),
  lastname: z.string().min(1, { message: 'Please enter your last name.' }),
  email: z.string().min(1, { message: 'Please enter your email' }).email({ message: 'Invalid email address.' }),
  service: z.enum(['Social Media Management', 'Content Creation', 'Graphic Design', 'Video Editing', 'All'], {
    message: 'Please choose a service',
    required_error: 'Please choose a service',
    invalid_type_error: 'Please choose a service',
  }),
  message: z.string().min(1, { message: 'Please enter your message.' }),
});
