import { firestore } from "@/utilities/firestore";
import { getServerSession } from "@/utilities/getServerSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  const email = session?.user?.email;

  if (typeof email !== "string") {
    return;
  }

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

  const url = request.nextUrl.clone();
  url.pathname = "/api/generate";

  return NextResponse.redirect(url, 307);
}
