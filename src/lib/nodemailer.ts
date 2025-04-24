import nodemailer from 'nodemailer';

export async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
  const transportObject =
    process.env.NODE_ENV === 'production'
      ? {
          service: 'gmail',
          host: 'smtp.gmail.com',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
          },
        }
      : {
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
            user: 'jeremie.pagac39@ethereal.email',
            pass: 'TWnQ6TXuvY4fM2CaRu',
          },
        };

  try {
    const transporter = nodemailer.createTransport(transportObject);

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw error;
  }
}
