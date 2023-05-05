import { createOpenAIStream } from "@/utilities/createOpenAIStream";
import { NextRequest, NextResponse } from "next/server";
import { Options } from "@/types";

export async function POST(request: NextRequest) {
  const options: Options = await request.json();

  const content = `Write a ${
    options.type === "Random Poem" ? "poem" : options.type.toLowerCase()
  } about ${options.prompt}`;

  const stream = await createOpenAIStream({
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
