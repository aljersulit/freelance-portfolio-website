'use client';

import { useActionState, useEffect } from 'react';
import { sendContactEmail, FormState } from '@/lib/actions';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const initialState: FormState = {
    status: {},
    errors: {},
    contactFormData: {
      firstname: '',
      lastname: '',
      email: '',
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
    console.log(formState);
  }, [formState.status]);

  return (
    <form
      action={action}
      aria-labelledby='form-message'
      className='space-y-4 font-montserrat text-sm lg:w-[28rem] xl:w-[40rem]'
    >
      <div className='flex gap-1'>
        <div className='flex-1'>
          <Label className='lg:text-sm xl:text-xl'>
            First Name
            <Input
              type='text'
              name='firstname'
              className='mt-1 w-full rounded-sm border-border bg-secondary px-2 text-lg focus-visible:border-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              defaultValue={!errors.firstname ? contactFormData.firstname : ''}
              aria-describedby='firstname-error'
            />
          </Label>
          <div id='firstname-error' aria-live='polite' aria-atomic='true'>
            {errors?.firstname && <p className='mt-2 text-sm text-red-500'>{errors?.firstname[0]}</p>}
          </div>
        </div>
        <div className='flex-1'>
          <Label className='lg:text-sm xl:text-xl'>
            Last Name
            <Input
              type='text'
              name='lastname'
              className='mt-1 w-full rounded-sm border-border bg-secondary px-2 text-lg focus-visible:border-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
              defaultValue={!errors.lastname ? contactFormData.lastname : ''}
              aria-describedby='lastname-error'
            />
          </Label>
          <div id='lastname-error' aria-live='polite' aria-atomic='true'>
            {errors?.lastname && <p className='mt-2 text-sm text-red-500'>{errors?.lastname[0]}</p>}
          </div>
        </div>
      </div>
      <div>
        <Label className='lg:text-sm xl:text-xl'>
          Email
          <Input
            type='text'
            name='email'
            className='mt-1 w-full rounded-sm border-border bg-secondary px-2 text-lg focus-visible:border-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
            defaultValue={!errors.email ? contactFormData.email : ''}
            aria-describedby='email-error'
          />
        </Label>
        <div id='email-error' aria-live='polite' aria-atomic='true'>
          {errors?.email && <p className='mt-2 text-sm text-red-500'>{errors?.email[0]}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor='message' className='lg:text-sm xl:text-xl'>
          Message
        </Label>
        <Textarea
          id='message'
          name='message'
          className='mt-2 h-40 resize-none rounded-sm border-border bg-secondary px-2 py-1 text-lg focus-visible:border-ring focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
          defaultValue={!errors.message ? contactFormData.firstname : ''}
          aria-labelledby='form-message-error'
        />
        <div id='form-message-error' aria-live='polite' aria-atomic='true'>
          {errors?.message && <p className='mt-2 text-sm text-red-500'>{errors?.message[0]}</p>}
        </div>
      </div>
      <Button
        variant='default'
        size='lg'
        type='submit'
        disabled={isPending}
        className='font-light uppercase disabled:cursor-not-allowed lg:text-base'
      >
        {isPending ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
}
