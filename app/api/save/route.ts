import { Poem } from "@/types";
import { firestore } from "@/utilities/firestore";
import { getServerSession } from "@/utilities/getServerSession";
import { FieldValue } from "firebase-admin/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  const email = session?.user?.email;

  if (typeof email !== "string") {
    return;
  }

  const poem: Poem = await request.json();

  const {
    docs: [user],
  } = await firestore
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get();

  if (user.data().credits === 0) {
    throw new Error("User has no credits");
  }

  const credits =
    user.data().credits === "Unlimited"
      ? "Unlimited"
      : (user.data().credits ?? 5) - 1;

  await firestore
    .collection("users")
    .doc(user.id)
    .update({
      credits,
      poems: FieldValue.arrayUnion(poem),
    });

  return new NextResponse("Success");
}
