function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const sitekey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

      if (!sitekey) {
        resolve(null);
        return;
      }

      const token = await grecaptcha.execute(sitekey, {
        action: 'contact-me',
      });
      resolve(token);
    });
  });
}
