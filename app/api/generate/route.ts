import { createOpenAIStream } from "@/utilities/createOpenAIStream";
import { NextRequest, NextResponse } from "next/server";
import { Options } from "@/types";
import { poemTypes } from "@/poems";

export async function POST(request: NextRequest) {
  const options: Options = await request.json();
  const poemType = poemTypes.find((poemType) => poemType.name === options.type);

  if (poemType === undefined) {
    throw new Error("Unrecognised poem type");
  }

  const stream = await createOpenAIStream({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: poemType.generatePrompt(options as any),
      },
    ],
    stream: true,
  });

  return new NextResponse(stream);
}

export const runtime = "edge";
