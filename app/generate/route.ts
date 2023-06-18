import { firestore } from "@/utilities/firestore";
import { getServerSession } from "@/utilities/getServerSession";
import { redirect } from "next/navigation";

export async function GET() {
  const session = await getServerSession();
  const email = session?.user?.email;

  if (typeof email !== "string") {
    redirect("/");
  }

  const {
    docs: [user],
  } = await firestore
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get();

  const credits: number | "Unlimited" = user.data().credits ?? 3;

  if (credits === 0) {
    redirect("/credits");
  } else {
    redirect("/saved?generate=true");
  }
}
