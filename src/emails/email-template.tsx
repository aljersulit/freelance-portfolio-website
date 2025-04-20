import * as React from 'react';
import {
  Html,
  Head,
  Tailwind,
  Body,
  Container,
  Row,
  Text,
  Hr,
  Font,
  Heading,
  Section,
  Link,
  Button,
  Column,
  Img,
} from '@react-email/components';
import EmailTemplateIcon from '@/components/svg/EmailTemplateIcon';
import EmailLinkedin from '@/components/svg/EmailLinkedin';
import EmailInstagram from '@/components/svg/EmailInstagram';
import EmailFacebook from '@/components/svg/EmailFacebook';
interface EmailTemplateProps {
  fullName: string;
  company?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ fullName = 'Test Name', company, message }) => (
  <Html lang='en'>
    <Head>
      <Font
        fontFamily='Roboto'
        fallbackFontFamily='Verdana'
        webFont={{
          url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle='normal'
      />
    </Head>
    <Body>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                foreground: '#000000',
                background: '#f5f5f5',
                primary: {
                  DEFAULT: '#a89bf3',
                  foreground: '#f2f2f2',
                },
                secondary: {
                  foreground: '#3a3c5b',
                },
              },
            },
          },
        }}
      >
        <Container className='bg-background px-[40px] py-[50px] text-foreground'>
          <Row>
            <EmailTemplateIcon className='relative -left-[6px]' />
            <Text className='m-0 text-[17.5px]'>
              Your Brand's Growth Partner in Digital Marketing & Creative Design
            </Text>
          </Row>
          <Hr className='my-[16px] border-t-[4px] border-gray-500' />
          <Section>
            <Heading as='h1' className='text-[46px] text-secondary-foreground'>
              Thanks for reaching out!
            </Heading>
            <Text className='text-[23px] font-semibold'>Hi {fullName},</Text>
            <Text
              className='text-[20px]'
              style={{
                margin: '35px 0px',
              }}
            >
              Thanks for getting in touch! I&apos;ve received your message and I&apos;m excited to learn more about how
              I can help you.
            </Text>
            <div
              style={{
                marginBottom: '30px',
              }}
            >
              <Text
                className='text-[18px]'
                style={{
                  marginBlock: '5px',
                }}
              >
                &bull; I usually respond within <span className='font-bold'>24-48 hours.</span>
              </Text>
              <Text
                className='text-[18px]'
                style={{
                  marginTop: '10px',
                  marginBottom: '0px',
                }}
              >
                &bull; Want to chat sooner?
              </Text>
            </div>
            <Button
              href='https://calendly.com/aljoydigital/30min'
              className='w-full bg-primary py-[20px] text-center text-[24px] uppercase text-primary-foreground'
            >
              Schedule a 30-min call
            </Button>
            <div className='mt-[46px]'>
              <Text className='text-center text-[27px] font-medium'>Check out my creative work on Behance</Text>
              <Button
                style={{
                  padding: '13px 36px',
                  margin: '23px auto 0px auto',
                }}
                className='block w-fit rounded-md border border-solid border-foreground text-[18px] font-semibold text-secondary-foreground'
              >
                Explore More
              </Button>
            </div>
            <Text
              className='text-[23px]'
              style={{
                marginTop: '56px',
              }}
            >
              Warm regards,
            </Text>
          </Section>

          <Section
            style={{
              marginTop: '36px',
            }}
          >
            <Row>
              <div className='flex flex-wrap justify-center gap-[37px]'>
                <div className=''>
                  <Img alt='My profile photo' height='136px' src='/static/profile.png' className='mx-auto' />
                  <Link
                    href='https://www.aljoydigital.com/'
                    className='block text-center text-[14px] font-semibold leading-[1.1] text-gray-900 underline'
                    style={{
                      marginTop: '9px',
                    }}
                  >
                    aljoydigital.com
                  </Link>
                  <div className='mt-[14px] flex justify-center gap-[6px]'>
                    <EmailLinkedin className='h-[23px]' />
                    <EmailInstagram className='h-[23px]' />
                    <EmailFacebook className='h-[23px]' />
                  </div>
                </div>
                <div className='max-w-[320px]'>
                  <Heading as='h2' className='m-0 text-[37px] font-semibold'>
                    Aljoy Alfaro Sulit
                  </Heading>
                  <Text className='text-[15px]'>Digital Marketing Strategist | Graphic Designer</Text>
                  <Hr className='my-[16px] border-t-[4px] border-gray-500' />
                  <div>
                    <Link href='tel:+639760694712' className='block text-[15px] leading-[1.7] text-inherit'>
                      +63 976 069 4712
                    </Link>
                    <Link href='mailto:aljoysulit@gmail.com' className='block text-[15px] leading-[1.7] text-inherit'>
                      aljoysulit@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </Row>
          </Section>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default EmailTemplate;
