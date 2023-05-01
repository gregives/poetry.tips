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
