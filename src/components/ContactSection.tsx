import ContactForm from './ContactForm';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id='contact' data-main>
      <header className='flex h-[650px] flex-col justify-center bg-[#f5f5f5] pt-14'>
        <h2 className='pl-24 font-notoSerifDisplay text-7xl uppercase tracking-wider'>Ready to elevate your brand?</h2>
        <div className='mt-4 flex items-center justify-center gap-24'>
          <p className='w-max border-b-[3px] border-accent px-2 pb-5 text-5xl text-black'>Let&apos;s work together!</p>
          <Image src='/photo3.jpg' alt='My third photo' width={802} height={1004} className='w-60 rounded-md' />
        </div>
      </header>
      <div className='flex justify-center gap-4 py-24' id='contact'>
        <div className='mt-8 pr-12 lg:w-[28rem] xl:w-[40rem]'>
          <h3 className='mb-6 font-notoSerifDisplay lg:text-5xl xl:text-7xl'>Get in touch</h3>
          <p className='text-pretty tracking-wider lg:text-base xl:text-2xl'>
            If you wish to inquire about a service, please fill out the form and I will contact you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
