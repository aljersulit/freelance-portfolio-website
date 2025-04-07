'use client';

import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormSchema } from '@/lib/schema';
import { sendContactEmail } from '@/lib/actions';
import { toast } from 'sonner';
import { roboto } from '@/app/font';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [formStatus, setFormStatus] = useState<{
  //   success?: boolean;
  //   message?: string;
  // } | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      service: undefined,
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    // setFormStatus(null);

    try {
      const result = await sendContactEmail(values);

      if (result.success) {
        toast.success(result.message);

        form.reset();

        // setFormStatus({
        //   success: true,
        //   message: result.message,
        // });
      } else {
        toast.error(result.message);

        if (result.errors) {
          Object.entries(result.errors).forEach(([key, value]) => {
            form.setError(key as any, {
              type: 'server',
              message: Array.isArray(value) ? value[0] : value,
            });
          });
        }

        // setFormStatus({
        //   success: false,
        //   message: result.message,
        // });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An unexpected error occurred. Please try again.');

      // setFormStatus({
      //   success: false,
      //   message: 'An unexpected error occurred. Please try again.',
      // });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-[779px] rounded-2xl bg-form px-[32px] py-[38px] text-secondary-foreground'
      >
        <div className='flex gap-3'>
          <FormField
            control={form.control}
            name='firstname'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className={`${roboto.className} text-base font-medium`}>First Name</FormLabel>
                <FormControl>
                  <Input
                    className='rounded-md bg-input transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary lg:h-12 lg:text-lg'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastname'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className={`${roboto.className} text-base font-medium`}>Last Name</FormLabel>
                <FormControl>
                  <Input
                    className='rounded-md bg-input transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary lg:h-12 lg:text-lg'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='mt-5'>
              <FormLabel className={`${roboto.className} text-base font-medium`}>Email</FormLabel>
              <FormControl>
                <Input
                  className='rounded-md bg-input transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary lg:h-12 lg:text-lg'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='service'
          render={({ field }) => (
            <FormItem className='mt-5'>
              <FormLabel className={`${roboto.className} text-base font-medium`}>I'm interested in...</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='rounded-md bg-input transition focus:ring-transparent focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary lg:h-12 lg:text-lg'>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Social Media Management'>Social Media Management</SelectItem>
                  <SelectItem value='Content Creation'>Content Creation</SelectItem>
                  <SelectItem value='Graphic Design'>Graphic Design</SelectItem>
                  <SelectItem value='Video Editing'>Video Editing</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='mt-5'>
              <FormLabel className={`${roboto.className} text-base font-medium`}>Message</FormLabel>
              <FormControl>
                <Textarea
                  className='mt-3 h-[117px] resize-none rounded-md bg-input px-2 py-1 text-lg transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className={`${roboto.className} my-5 text-base font-medium`}>
          This site is protected by reCAPTCHA and{' '}
          <a href='#' target='_blank' rel='noopener noreferrer' className='text-[#1677F0]'>
            Google&apos;s Privacy Policy
          </a>{' '}
          and{' '}
          <a href='#' target='_blank' rel='noopener noreferrer' className='text-[#1677F0]'>
            Terms
          </a>
          .
        </p>
        <Button
          type='submit'
          disabled={isSubmitting}
          className={`${roboto.className} w-full cursor-dot rounded-full bg-[#3A3C5B] py-4 text-base font-bold uppercase text-primary-foreground hover:bg-accent disabled:cursor-not-allowed`}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </Form>
  );
}
