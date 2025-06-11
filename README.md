# Freelance Portfolio Website

A modern, responsive portfolio website built for **Alyssa Joy Sulit**, a professional Social Media Manager. This project showcases a seamless collaboration between design and development, featuring smooth animations, interactive elements, and a fully functional contact system.

## 🌟 Live Demo

**[View Live Website](https://aljoydigital.com)**

## 📋 Project Overview

This portfolio website serves a dual purpose:

- **For Alyssa**: A professional platform to showcase her skills, experience, and services as a Social Media Manager to potential employers and clients
- **For Development**: A demonstration of modern web development practices and NextJS capabilities

## ✨ Key Features

- **Fully Responsive Design** - Optimized for all devices and screen sizes
- **Scroll-Based Animations** - Smooth, engaging animations triggered by scroll events
- **Interactive Contact Form** - Complete form submission system with validation
- **Email Notifications** - Automated email system for both client and admin notifications
- **Spam Protection** - Google reCAPTCHA integration for security
- **Modern UI/UX** - Clean, professional design optimized for user experience
- **Performance Optimized** - Fast loading times and smooth interactions

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React-based web framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Motion](https://motion.dev/) - Animation library for React
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) - Smooth scroll library
- **Email Service**: [Nodemailer](https://nodemailer.com/) - Email sending functionality
- **Email Templates**: [React Email](https://react.email/) - Modern email templates
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant form library
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Security**: [Google reCAPTCHA](https://www.google.com/recaptcha/) - Spam protection

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aljersulit/freelance-portfolio-website.git
   cd freelance-portfolio-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add:

   ```env
   # Email Configuration
   SMTP_USER=your_email@gmail.com
   SMTP_PASSWORD=your_app_password

   # Google reCAPTCHA
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

   # Admin Email
   ADMIN_EMAIL=admin@example.com
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📧 Contact Form Features

The contact form includes:

- **Form Validation** - Client-side validation using Zod schemas
- **Spam Protection** - Google reCAPTCHA integration
- **Email Templates** - Custom HTML email templates built with React Email
- **Dual Notifications** - Sends confirmation to client and notification to admin
- **Error Handling** - Comprehensive error handling and user feedback

## 🎨 Design Credits

The beautiful design for this website was created by **Alyssa Joy Sulit** using Figma. The design perfectly captures her professional brand and showcases her expertise in visual communication and user experience design.

## 🚀 Deployment

This website is deployed on [Vercel](https://vercel.com/), taking advantage of seamless NextJS integration and automatic deployments from GitHub.

## 🤝 Contributing

This is a personal portfolio project, but if you have suggestions or find any issues, feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Alyssa Joy Sulit** - For the incredible design and creative direction
- **Next.js Team** - For the amazing framework
- **Vercel** - For seamless deployment
- **All contributors** - To the open-source libraries used in this project

## 📞 Contact

**Developer**: [aljersulit](https://github.com/aljersulit)

**Portfolio Owner**: Alyssa Joy Sulit - Social Media Manager

- Website: [aljoydigital.com](https://aljoydigital.com/)

---

⭐ If you found this project helpful or interesting, please consider giving it a star!
