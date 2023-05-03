import type { NextAuthOptions } from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";
import { firestore } from "./firestore";

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
  secret: process.env.NEXTAUTH_SECRET,
};
