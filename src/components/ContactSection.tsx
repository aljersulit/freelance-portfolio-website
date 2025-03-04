import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id='contact'>
      <div className='flex justify-center gap-4 border-2 py-24'>
        <header className='mt-8 pr-12 lg:w-[28rem] xl:w-[40rem]'>
          <h2 className='mb-6 font-notoSerifDisplay lg:text-5xl xl:text-7xl'>Get in touch</h2>
          <p className='text-pretty tracking-wider lg:text-base xl:text-2xl'>
            If you wish to inquire about a service, please fill out the form and I will contact you as soon as possible.
          </p>
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
