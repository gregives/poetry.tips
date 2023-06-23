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

const ESCAPED_HOST = "poetry&#8203;.tips";

async function sendVerificationRequest({
  identifier,
  url,
  provider,
}: SendVerificationRequestParams) {
  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: '"Poetry Tips" <contact@poetry.tips>',
    subject: "Welcome to poetry.tips",
    text: `At ${ESCAPED_HOST} we don't use passwords, just click the link below to log in\n\n${url}\n\n`,
    html: `<body>At ${ESCAPED_HOST} we don't use passwords, just click the link below to log in<br/><br/><a href="${url}">Log in to ${ESCAPED_HOST}</a><br/><br/></body>`,
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
