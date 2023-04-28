import { poems } from "@/poems";
import { OpenAIStream } from "@/utilities/OpenAIStream";
import { NextRequest, NextResponse } from "next/server";

export type Options = {
  prompt: string;
  type: (typeof poems)[number]["name"] | "Random poem";
};

export async function POST(request: NextRequest) {
  const { prompt, type }: Options = await request.json();

  const content = `Write a ${
    type === "Random poem" ? "poem" : type.toLowerCase()
  } about ${prompt}`;

  const stream = await OpenAIStream({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content,
      },
    ],
    stream: true,
  });

  return new NextResponse(stream);
}

export const runtime = "edge";
