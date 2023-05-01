import { initFirestore } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";

if (
  process.env.FIREBASE_PROJECT_ID === undefined ||
  process.env.FIREBASE_CLIENT_EMAIL === undefined ||
  process.env.FIREBASE_PRIVATE_KEY === undefined
) {
  throw new Error("Missing Firebase environment variables");
}

export const firestore = initFirestore({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replaceAll("\\n", "\n"),
  }),
});
