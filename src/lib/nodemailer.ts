import nodemailer from "nodemailer";
import oAuth2Client from "@/lib/oauth2";

interface OAuth2TransportOptions extends nodemailer.TransportOptions {
	host: string;
	port: number;
	secure: boolean;
	auth: {
		type: "OAuth2";
		user: string | undefined;
		clientId: string | undefined;
		clientSecret: string | undefined;
		refreshToken: string | undefined;
		accessToken: string;
	};
}

interface EtherealEmailTestTransportOptions
	extends nodemailer.TransportOptions {
	host: string;
	port: number;
	auth: {
		user: string;
		pass: string;
	};
}

export async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
	try {
		const accessToken = await oAuth2Client.getAccessToken();

		let mailConfig:
			| OAuth2TransportOptions
			| EtherealEmailTestTransportOptions;

		if (process.env.NODE_ENV === "production") {
			mailConfig = {
				host: "smtp.gmail.com",
				port: 587,
				secure: false,
				auth: {
					type: "OAuth2",
					user: process.env.GMAIL_USER,
					clientId: process.env.GOOGLE_CLIENT_ID,
					clientSecret: process.env.GOOGLE_CLIENT_SECRET,
					refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
					accessToken: accessToken as string,
				},
			};
		} else {
			mailConfig = {
				host: "smtp.ethereal.email",
				port: 587,
				auth: {
					user: "jett.hoppe65@ethereal.email",
					pass: "wSXuMczctQzpXCV9pS",
				},
			};
		}

		const transporter = nodemailer.createTransport(mailConfig);

		const result = await transporter.sendMail(mailOptions);
		return result;
	} catch (error) {
		throw error;
	}
}

