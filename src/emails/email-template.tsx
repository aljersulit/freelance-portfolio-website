import * as React from 'react';
import { Html, Head, Tailwind, Body, Container } from '@react-email/components';
import EmailTemplateIcon from '@/components/svg/EmailTemplateIcon';

interface EmailTemplateProps {
  fullName: string;
  company?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ fullName, company, message }) => (
  <Html lang='en'>
    <Head />
    <Body>
      <Tailwind>
        <Container className='bg-gray-400'>
          <EmailTemplateIcon />
          <h1>
            Welcome, {fullName}! From {company}
          </h1>
          <p>{message}</p>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default EmailTemplate;
