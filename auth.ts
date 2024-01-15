// Using beta feature of NextAuth
// Please refer to: https://authjs.dev/guides/upgrade-to-v5

// To send magic login links we are using nodemailer, which does not work in an edge environment.
// As a work around we seperated out the AuthJS configurations into two files.
// Using @/auth.js file with middleware will results in errors, as middleware operates
// in an edge environment. Consequently, configurations compatible with the edge have been
// separated into config/auth/index.ts. For more information, read here: https://authjs.dev/guides/upgrade-to-v5#edge-compatibility

import NextAuth from "next-auth";
import config from "@/config/auth";
import EmailProvider from "next-auth/providers/email";
console.log(process.env);
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  ...config,
  providers: [
    ...config.providers,
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST as string,
        port: process.env.SMTP_PORT as string,
        auth: {
          user: process.env.SMTP_USER as string,
          pass: process.env.SMTP_PASSWORD as string,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
});
