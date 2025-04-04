'use client';

import { useActionState, useEffect } from 'react';
import { sendContactEmail, FormState } from '@/lib/actions';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { roboto } from '@/app/font';

export default function ContactForm() {
  const initialState: FormState = {
    status: {},
    errors: {},
    contactFormData: {
      firstname: '',
      lastname: '',
      email: '',
      service: '',
      message: '',
    },
  };
  const [formState, action, isPending] = useActionState(sendContactEmail, initialState);

  const { errors, status, contactFormData } = formState;

  useEffect(() => {
    const { type, message } = status;

    switch (type) {
      case 'Success':
        toast.success(message);
        break;
      case 'Error':
        toast.error(message);
        break;
      default:
        toast(message);
    }
  }, [status]);

  return (
    <form
      action={action}
      aria-labelledby='form-message'
      className='w-[779px] rounded-2xl bg-form px-[32px] py-[38px] text-secondary-foreground'
    >
      <div className='flex gap-1'>
        <div className='flex-1'>
          <Label className={`${roboto.className} text-base font-medium`}>
            First Name
            <Input
              type='text'
              name='firstname'
              className='mt-3 w-full rounded-md bg-input px-2 text-lg transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary'
              defaultValue={!errors.firstname ? contactFormData.firstname : ''}
              aria-describedby='firstname-error'
            />
          </Label>
          <div id='firstname-error' aria-live='polite' aria-atomic='true'>
            {errors?.firstname && <p className='mt-2 text-xs text-red-500'>{errors?.firstname[0]}</p>}
          </div>
        </div>
        <div className='flex-1'>
          <Label className={`${roboto.className} text-base font-medium`}>
            Last Name
            <Input
              type='text'
              name='lastname'
              className='mt-3 w-full rounded-md bg-input px-2 text-lg transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary'
              defaultValue={!errors.lastname ? contactFormData.lastname : ''}
              aria-describedby='lastname-error'
            />
          </Label>
          <div id='lastname-error' aria-live='polite' aria-atomic='true'>
            {errors?.lastname && <p className='mt-2 text-xs text-red-500'>{errors?.lastname[0]}</p>}
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <Label className={`${roboto.className} text-base font-medium`}>
          Email
          <Input
            type='text'
            name='email'
            className='mt-3 w-full rounded-md bg-input px-2 text-lg transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary'
            defaultValue={!errors.email ? contactFormData.email : ''}
            aria-describedby='email-error'
          />
        </Label>
        <div id='email-error' aria-live='polite' aria-atomic='true'>
          {errors?.email && <p className='mt-2 text-xs text-red-500'>{errors?.email[0]}</p>}
        </div>
      </div>
      <div className='mt-5'>
        <Label htmlFor='service' className={`${roboto.className} text-base font-medium`}>
          I&apos;m interested in...
          <select
            defaultValue={!errors.service ? contactFormData.service : ''}
            name='service'
            id='service'
            className='mt-3 w-full rounded-md bg-input px-2 py-[0.65rem] text-sm transition focus:ring-transparent focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary'
          >
            <option disabled value=''>
              -- Select a service --
            </option>
            <option value='Social Media Management'>Social Media Management</option>
            <option value='Content Creation'>Content Creation</option>
            <option value='Graphic Design'>Graphic Design</option>
            <option value='Video Editing'>Video Editing</option>
          </select>
        </Label>
        <div id='form-service-error' aria-live='polite' aria-atomic='true'>
          {errors?.service && <p className='mt-2 text-xs text-red-500'>{errors?.service[0]}</p>}
        </div>
      </div>
      <div className='mt-5'>
        <Label htmlFor='message' className={`${roboto.className} text-base font-medium`}>
          Message
        </Label>
        <Textarea
          id='message'
          name='message'
          className='mt-3 h-40 resize-none rounded-md bg-input px-2 py-1 text-lg transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary'
          defaultValue={!errors.message ? contactFormData.firstname : ''}
          aria-labelledby='form-message-error'
        />
        <div id='form-message-error' aria-live='polite' aria-atomic='true'>
          {errors?.message && <p className='mt-2 text-xs text-red-500'>{errors?.message[0]}</p>}
        </div>
      </div>
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
        disabled={isPending}
        className={`${roboto.className} w-full cursor-dot rounded-full bg-[#3A3C5B] py-4 text-base font-bold uppercase text-primary-foreground hover:bg-accent disabled:cursor-not-allowed`}
      >
        {isPending ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
}
