import { createTransport } from "nodemailer";
import type { NextAuthOptions } from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import EmailProvider, {
  SendVerificationRequestParams,
} from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { firestore } from "./firestore";

if (
  process.env.GOOGLE_CLIENT_ID === undefined ||
  process.env.GOOGLE_CLIENT_SECRET === undefined
) {
  throw new Error("Missing Google environment variables");
}

async function sendVerificationRequest({
  identifier,
  url,
  provider,
}: SendVerificationRequestParams) {
  const { host } = new URL(url);
  const escapedHost = host.replace(/\./g, "&#8203;.");

  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: '"poetry.tips" <contact@poetry.tips>',
    subject: `Log in to ${host}`,
    text: `Click the link below to log in to ${host}\n\n${url}\n\n`,
    html: `<body>Click the link below to log in to ${escapedHost}<br/><br/><a href="${url}">Log in to ${escapedHost}</a><br/><br/></body>`,
  });

  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
}

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(firestore),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
