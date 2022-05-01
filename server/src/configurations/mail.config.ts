import { registerAs } from '@nestjs/config';

export const mailConfig = registerAs('mail', () => ({
  transport: {
    host: process.env.MAIL_HOST,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  },
  defaults: {
    from: `"No Reply" ${process.env.MAIL_USER}`,
  },
}));
