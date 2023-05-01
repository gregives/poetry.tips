import NextAuth, { NextAuthOptions } from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firestore } from "@/utilities/firestore";
import GoogleProvider from "next-auth/providers/google";

if (
  process.env.GOOGLE_CLIENT_ID === undefined ||
  process.env.GOOGLE_CLIENT_SECRET === undefined
) {
  throw new Error("Missing Google environment variables");
}

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(firestore),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
