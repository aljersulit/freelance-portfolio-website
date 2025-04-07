export async function getCaptchaToken() {
  return new Promise<string | null>((resolve) => {
    grecaptcha.ready(async () => {
      const sitekey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

      if (!sitekey) {
        console.error('Captcha site key not found');
        resolve(null);
        return;
      }

      const token = await grecaptcha.execute(sitekey, {
        action: 'submit',
      });
      resolve(token);
    });
  });
}

export async function verifyCaptchaToken(token: string) {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error('Secret key not found.');
    return null;
  }

  try {
    const url = new URL('https://www.google.com/recaptcha/api/siteverify');
    url.searchParams.append('secret', secretKey);
    url.searchParams.append('response', token);

    const res = await fetch(url, {
      method: 'POST',
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('API Error:', errorData);
      throw new Error(`HTTP error! status: ${res.status}, details: ${JSON.stringify(errorData)}`);
    }

    const captchaResponse = await res.json();
    return captchaResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
