import { poems } from "@/poems";

export type Options = {
  prompt: string;
  type: (typeof poems)[number]["name"] | "Random Poem";
};

export type Poem = {
  options: Options;
  response: string;
  createdAt: number;
};

export type User = {
  id: string;
  email: string;
  name: string;
  poems?: Poem[];
  credits?: number | "Unlimited";
};
