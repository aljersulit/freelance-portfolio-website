import nodemailer from 'nodemailer';

function getTransportObject() {
  const environment = process.env.NODE_ENV;
  let transportObject = null;

  switch (environment) {
    case 'development':
      transportObject = {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'jeremie.pagac39@ethereal.email',
          pass: 'TWnQ6TXuvY4fM2CaRu',
        },
      };
      break;
    case 'production':
      transportObject = {
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASSWORD,
        },
      };
    default:
      throw new Error('NODE_ENV environment variable not properly set.');
  }

  return transportObject;
}

export async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
  try {
    const transporter = nodemailer.createTransport(getTransportObject());

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw error;
  }
}
