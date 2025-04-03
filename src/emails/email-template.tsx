import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  company?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ fullName, company, message }) => (
  <div>
    <h1>
      Welcome, {fullName}! From {company}
    </h1>
    <p>{message}</p>
  </div>
);
