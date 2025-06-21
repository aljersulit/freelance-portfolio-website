import ContactForm from '@/components/ContactForm';
import { roboto, playfairDisplay } from '@/app/(frontend)/font';
import Mail from '@/components/svg/Mail';
import Location from '@/components/svg/Location';
import ExpandingContainer from '@/components/ExpandingContainer';

export default function ContactSection() {
  return (
    <section className='pt-[35px] sm:pt-[70px] lg:py-[100px] xl:py-[180px]'>
      <ExpandingContainer animationTrigger='onScrollDown'>
        <header className='mx-[20px] rounded-xl border-[2px] border-primary bg-accent-foreground py-[20px] sm:mx-[100px] lg:mx-[120px] lg:border-[6px] lg:py-[50px] xl:mx-auto xl:w-[1105px] xl:rounded-3xl xl:py-[78px]'>
          <h2
            className={`${playfairDisplay.className} text-balance text-center text-2xl font-normal leading-[1.3] md:text-4xl xl:text-[3.375rem] xl:leading-snug`}
          >
            Let&apos;s turn your digital presence into your biggest asset!
          </h2>
        </header>
      </ExpandingContainer>
      <div className='mt-[52px] sm:mt-[80px] xl:mt-[166px]' id='contact'>
        <h2
          className={`${roboto.className} text-center text-3xl font-semibold text-secondary-foreground sm:text-4xl xl:text-[4.375rem]`}
        >
          Get In Touch
        </h2>
        <div className='mt-[22px] justify-center gap-5 lg:flex lg:px-[50px] xl:mt-[52px]'>
          <aside className='mx-[20px] mb-[23px] flex flex-col justify-between gap-5 rounded-md bg-primary px-[16px] py-[12px] text-[#ffffff] text-primary-foreground sm:mx-[100px] sm:rounded-xl sm:py-[22px] md:mx-[50px] md:mb-[42px] md:px-[20px] md:py-[28px] lg:m-0 lg:w-[280px] xl:w-[413px] xl:rounded-2xl xl:px-[40px] xl:pb-[33px] xl:pt-[58px]'>
            <div>
              <h4
                className={`${roboto.className} text-2xl font-semibold leading-none md:text-balance md:text-3xl xl:text-[3.4375rem] xl:leading-none`}
              >
                Want to work with me?
              </h4>
              <h5
                className={`${roboto.className} mt-[10px] text-base font-medium leading-[1.1] md:text-lg lg:text-xl xl:text-3xl`}
              >
                I&apos;d love to here from you!
              </h5>
              <p className='mt-[10px] text-[0.625rem] leading-[1.2] text-[#EEEEEE] md:text-sm lg:text-xs xl:text-sm'>
                Please fill up the form and I will get back to you shortly.
              </p>
            </div>

            <div className='max-md:hidden'>
              <address
                className={`${roboto.className} rounded-lg bg-accent px-[19px] py-[22px] text-base md:text-sm lg:text-xs xl:text-base`}
              >
                <a href='mailto:aljoysulit@gmail.com' className='flex items-center gap-3 not-italic'>
                  <span>
                    <Mail className='h-5' />
                  </span>
                  aljoysulit@gmail.com
                </a>
                <p className='mt-[15px] flex items-center gap-3 not-italic'>
                  <span>
                    <Location className='h-5' />
                  </span>
                  Bulacan | Philippines
                </p>
              </address>
              <a
                href='https://calendly.com/aljoydigital/30min'
                target='_blank'
                rel='noopener noreferrer'
                className={`${roboto.className} mt-[20px] block cursor-dot rounded-full border border-primary-foreground text-center font-bold uppercase transition-colors hover:bg-accent md:py-2 lg:text-sm xl:py-4 xl:text-base`}
              >
                Schedule a call
              </a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
