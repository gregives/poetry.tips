import Stripe from "stripe";

if (process.env.STRIPE_API_KEY === undefined) {
  throw new Error("Missing Stripe API key");
}

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2022-11-15",
});
