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
  Section,
  Button,
  Img,
} from '@react-email/components';

interface AdminNotificationEmailProps {
  firstname?: string;
  lastname?: string;
  email?: string;
  message?: string;
}

export default function AdminNotificationEmail({
  firstname = 'John',
  lastname = 'Doe',
  email = 'johndoe123@email.com',
  message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae ipsum ac nisi finibus bibendum convallis non nisi. Nam eget bibendum magna. Ut ullamcorper leo vel malesuada mollis. Orci varius.',
}: AdminNotificationEmailProps) {
  const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.aljoydigital.com' : '/static';
  return (
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
        <Tailwind>
          <Container className='px-[12px]'>
            <Row>
              <Img alt='AljoyDigital Logo' src={`${baseURL}/email_top_logo.png`} className='relative -left-[6px]' />
              <Text className='m-0 text-[17.5px]'>
                Your Brand&apos;s Growth Partner in Digital Marketing & Creative Design
              </Text>
            </Row>
            <Hr className='my-[16px] border-t-[4px] border-gray-500' />
            <Section>
              <Text className='rounded-[24px] border-[4px] border-solid border-[#a89bf3] bg-[#e2f26b] py-[16px] text-center text-[22px] font-semibold leading-relaxed tracking-wider'>
                <span className='text-[28px]'>Hi Aljoy</span>, <br /> A new message from a client has been sent.
              </Text>
              <Text>
                <span className='font-semibold'>Name: </span>
                {`${firstname} ${lastname}`}
              </Text>
              <Text>
                <span className='font-semibold'>Email: </span>
                {`${email}`}
              </Text>
              <Text>
                <span className='font-semibold'>Message: </span>
                {`${message}`}
              </Text>
              <Button
                href={`mailto:${email}`}
                className='mx-auto block w-fit rounded-[8px] bg-[#a89bf3] px-[45px] py-[12px] text-[22px] font-semibold uppercase tracking-wider text-[#f2f2f2]'
              >
                Reply
              </Button>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}
