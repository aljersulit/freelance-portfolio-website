'use client';

import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormSchema } from '@/lib/schema';
import { sendContactEmail } from '@/lib/actions';
import { getCaptchaToken } from '@/lib/captcha';
import { toast } from 'sonner';
import { roboto } from '@/app/font';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    try {
      setIsSubmitting(true);
      const token = await getCaptchaToken();
      if (!token) {
        toast.error('Something went wrong. Please try again');
        return;
      }
      const result = await sendContactEmail(values, token);

      if (result.success) {
        toast.success(result.message);

        form.reset();
      } else {
        toast.error(result.message);

        if (result.errors) {
          (Object.entries(result.errors) as [keyof z.infer<typeof FormSchema>, string[]][]).forEach(
            ([fieldName, errorMessages]) => {
              form.setError(fieldName, {
                type: 'server',
                message: errorMessages[0] || 'Invalid input',
              });
            },
          );
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='rounded-sm bg-form px-[32px] py-[14px] text-secondary-foreground md:rounded-xl lg:py-[28px] xl:w-[779px] xl:rounded-2xl xl:py-[38px]'
      >
        <div className='flex gap-3 max-sm:flex-col'>
          <FormField
            control={form.control}
            name='firstname'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormLabel className={`${roboto.className} text-xs font-medium md:text-base`}>First Name</FormLabel>
                <FormControl>
                  <Input
                    className='rounded-sm bg-input transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary lg:h-8 lg:rounded-md lg:text-lg xl:h-12 xl:rounded-md'
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
                <FormLabel className={`${roboto.className} text-xs font-medium md:text-base`}>Last Name</FormLabel>
                <FormControl>
                  <Input
                    className='rounded-sm bg-input transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary lg:h-8 lg:rounded-md lg:text-lg xl:h-12 xl:rounded-md'
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
              <FormLabel className={`${roboto.className} text-xs font-medium md:text-base`}>Email</FormLabel>
              <FormControl>
                <Input
                  className='rounded-sm bg-input transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary lg:h-8 lg:rounded-md lg:text-lg xl:h-12 xl:rounded-md'
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
              <FormLabel className={`${roboto.className} text-xs font-medium md:text-base`}>
                I&apos;m interested in...
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='rounded-sm bg-input transition focus:ring-transparent focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary lg:h-8 lg:rounded-md lg:text-lg xl:h-12 xl:rounded-md'>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='Social Media Management'>Social Media Management</SelectItem>
                  <SelectItem value='Content Creation'>Content Creation</SelectItem>
                  <SelectItem value='Graphic Design'>Graphic Design</SelectItem>
                  <SelectItem value='Video Editing'>Video Editing</SelectItem>
                  <SelectItem value='All Services'>All Services</SelectItem>
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
              <FormLabel className={`${roboto.className} text-xs font-medium md:text-base`}>Message</FormLabel>
              <FormControl>
                <Textarea
                  className='mt-3 h-[117px] resize-none rounded-sm bg-input px-2 py-1 text-lg transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary xl:rounded-md'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className={`${roboto.className} my-5 text-sm font-normal xl:text-base xl:font-medium`}>
          This site is protected by reCAPTCHA and{' '}
          <a href='https://www.google.com/intl/en/policies/privacy/' target='_blank' className='text-[#1677F0]'>
            Google&apos;s Privacy Policy
          </a>{' '}
          and{' '}
          <a href='https://www.google.com/intl/en/policies/terms/' target='_blank' className='text-[#1677F0]'>
            Terms
          </a>
          .
        </p>
        <Button
          type='submit'
          disabled={isSubmitting}
          className={`${roboto.className} w-full cursor-dot rounded-full bg-secondary-foreground py-2 text-sm font-bold uppercase text-primary-foreground hover:bg-accent disabled:cursor-not-allowed xl:py-4 xl:text-base`}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </Form>
  );
}
