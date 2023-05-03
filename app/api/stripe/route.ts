/// <reference types="stripe-event-types" />
import { firestore } from "@/utilities/firestore";
import { stripe } from "@/utilities/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

if (process.env.STRIPE_ENDPOINT_SECRET === undefined) {
  throw new Error("Missing Stripe endpoint secret");
}

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");

  const event = stripe.webhooks.constructEvent(
    await request.text(),
    // @ts-expect-error
    signature,
    process.env.STRIPE_ENDPOINT_SECRET
  ) as Stripe.DiscriminatedEvent;

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const {
      data: [purchase],
    } = await stripe.checkout.sessions.listLineItems(session.id);

    if (typeof purchase?.price?.product !== "string") {
      throw new Error("Could not find purchased product");
    }

    const product = await stripe.products.retrieve(purchase.price.product);

    const {
      docs: [user],
    } = await firestore
      .collection("users")
      .where("email", "==", session.customer_email)
      .limit(1)
      .get();

    const credits =
      product.metadata.credits === "Unlimited"
        ? "Unlimited"
        : (user.data().credits ?? 5) + parseInt(product.metadata.credits, 10);

    await firestore.collection("users").doc(user.id).update({
      credits,
    });
  }

  return new NextResponse("Success");
}
