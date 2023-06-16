/// <reference types="stripe-event-types" />
import { firestore } from "@/utilities/firestore";
import { stripe } from "@/utilities/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

if (process.env.STRIPE_ENDPOINT_SECRET === undefined) {
  throw new Error("Missing Stripe endpoint secret");
}

async function getStripeCustomer(
  customer: string | Stripe.Customer | Stripe.DeletedCustomer | null
) {
  if (customer === null) {
    throw new Error("Customer does not exist");
  }

  if (typeof customer === "string") {
    customer = await stripe.customers.retrieve(customer);
  }

  if (customer.deleted) {
    throw new Error(`Customer ${customer.id} has been deleted`);
  }

  if (customer.email === null) {
    throw new Error(`Customer ${customer.id} has no associated email address`);
  }

  return customer;
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
      const customer = await getStripeCustomer(session.customer);

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
        .where("email", "==", customer.email)
        .limit(1)
        .get();

      const credits =
        product.metadata.credits === "Unlimited"
          ? "Unlimited"
          : (user.data().credits ?? 5) + parseInt(product.metadata.credits, 10);

      await firestore.collection("users").doc(user.id).update({
        customer,
        credits,
      });

      break;
    }
    case "customer.subscription.created":
    case "customer.subscription.deleted":
    case "customer.subscription.updated": {
      const subscription = event.data.object;
      const customer = await getStripeCustomer(subscription.customer);

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
