import nodemailer from 'nodemailer';
// import oAuth2Client from '@/lib/oauth2';

export async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
  try {
    // const accessToken = await oAuth2Client.getAccessToken();

    // const transporter = nodemailer.createTransport(
    //   {
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false,
    //     auth: {
    //       type: 'OAuth2',
    //       user: process.env.GMAIL_USER,
    //       clientId: process.env.GOOGLE_CLIENT_ID,
    //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //       refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    //       accessToken: accessToken as string,
    //     },
    //   },
    // );

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'wilber.grimes24@ethereal.email',
        pass: 'KER3p7YSxfhSX2gSw9',
      },
    });

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw error;
  }
}
