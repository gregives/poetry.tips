import { poemTypes } from "@/poems";
import type Stripe from "stripe";

export type PoemType = (typeof poemTypes)[number];

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Options = {
  type: PoemType["name"];
  prompt: string;
} & Partial<Record<PoemType["options"][number]["name"], string>>;

export type Poem = {
  options: Options;
  response: string;
  createdAt: number;
};

export type User = {
  id: string;
  email: string;
  name: string;
  customer?: Stripe.Customer;
  poems?: Poem[];
  credits?: number | "Unlimited";
};
