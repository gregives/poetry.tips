import { firestore } from "@/utilities/firestore";
import { getServerSession } from "@/utilities/getServerSession";
import { stripe } from "@/utilities/stripe";
import { redirect } from "next/navigation";
import Stripe from "stripe";

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

  const customer: Stripe.Customer = user.data().customer;

  if (!customer) {
    redirect("/credits");
  }

  const billingPortal = await stripe.billingPortal.sessions.create({
    customer: customer.id,
    return_url: "https://www.poetry.tips/credits",
  });

  redirect(billingPortal.url);
}
