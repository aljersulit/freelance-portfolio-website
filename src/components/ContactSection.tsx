import ContactForm from '@/components/ContactForm';
import { playfairDisplay, roboto } from '@/app/font';
import Mail from '@/components/svg/Mail';
import Location from '@/components/svg/Location';

export default function ContactSection() {
  return (
    <section className='py-[180px]'>
      <header className='mx-auto w-[1105px] rounded-3xl border-4 border-primary bg-accent-foreground py-[78px]'>
        <h2
          className={`${playfairDisplay.className} text-balance text-center text-[3.375rem] font-normal leading-[1.3]`}
        >
          Let&apos;s turn your digital presence into your biggest asset!
        </h2>
      </header>
      <div className='mt-[166px]' id='contact'>
        <h2 className={`${roboto.className} text-center text-[4.375rem] font-semibold text-secondary-foreground`}>
          Get In Touch
        </h2>
        <div className='flex justify-center gap-5'>
          <aside className='w-[413px] rounded-2xl bg-[#a89bf3] px-10 pb-[33px] pt-[58px] text-primary-foreground'>
            <h4 className={`${roboto.className} text-[3.4375rem] font-semibold leading-none`}>Want to work with me?</h4>
            <h5 className={`${roboto.className} mt-[10px] text-3xl font-medium leading-[1.1]`}>
              I&apos;d love to here from you!
            </h5>
            <p className='mt-[10px] text-sm leading-[1.2] text-[#EEEEEE]'>
              Please fill up the form and I will get back to you shortly.
            </p>
            <address className={`${roboto.className} mt-[200px] rounded-lg bg-[#8c81cb] px-[19px] py-[22px]`}>
              <a href='mailto:aljoysulit@gmail.com' className='flex items-center gap-3 text-base not-italic'>
                <span>
                  <Mail className='h-5' />
                </span>
                aljoysulit@gmail.com
              </a>
              <p className='mt-[15px] flex items-center gap-3 text-base not-italic'>
                <span>
                  <Location className='h-5' />
                </span>
                Bulacan | Philippines
              </p>
            </address>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-dot mt-[20px] block rounded-full border border-primary-foreground py-4 text-center uppercase transition-colors hover:bg-[#8c81cb]'
            >
              Schedule a call
            </a>
          </aside>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
