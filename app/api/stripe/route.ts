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

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      if (session.customer_email === null) {
        throw new Error(`Checkout session ${session.id} has no customer email`);
      }

      const {
        data: [purchase],
      } = await stripe.checkout.sessions.listLineItems(session.id);

      if (purchase?.price?.product === undefined) {
        throw new Error(
          `Product does not exist on checkout session ${session.id}`
        );
      }

      const product =
        typeof purchase.price.product === "string"
          ? await stripe.products.retrieve(purchase.price.product)
          : purchase.price.product;

      if (product.deleted) {
        throw new Error(`Product ${product.id} has been deleted`);
      }

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
          : (user.data().credits ?? 3) + parseInt(product.metadata.credits, 10);

      await firestore.collection("users").doc(user.id).update({
        credits,
      });

      break;
    }
    case "customer.subscription.created":
    case "customer.subscription.deleted":
    case "customer.subscription.updated": {
      const subscription = event.data.object;

      let customer = subscription.customer;
      if (typeof customer === "string") {
        customer = await stripe.customers.retrieve(customer);
      }

      if (customer.deleted) {
        throw new Error(`Customer ${customer.id} has been deleted`);
      }

      if (customer.email === null) {
        throw new Error(`Customer ${customer.id} has no email`);
      }

      const {
        docs: [user],
      } = await firestore
        .collection("users")
        .where("email", "==", customer.email)
        .limit(1)
        .get();

      const credits = ["canceled", "unpaid"].includes(subscription.status)
        ? 0
        : "Unlimited";

      await firestore.collection("users").doc(user.id).update({
        customer,
        credits,
      });

      break;
    }
  }

  return new NextResponse("Success");
}
