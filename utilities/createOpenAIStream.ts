import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type OpenAIStreamPayload = {
  model: string;
  messages: Message[];
  temperature?: number;
  top_p?: number;
  n?: number;
  stream?: boolean;
  stop?: string | string[];
  max_tokens?: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  user?: string;
};

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

if (process.env.OPENAI_API_KEY === undefined) {
  throw new Error("Missing OpenAI environment variables");
}

export async function createOpenAIStream(payload: OpenAIStreamPayload) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  let counter = 0;

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;

          // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
          if (data === "[DONE]") {
            controller.close();
            return;
          }

          try {
            const { choices } = JSON.parse(data);
            const text = choices[0]?.delta?.content ?? "";

            if (counter < 2 && (text.match(/\n/) || []).length) {
              // This is a prefix character `\n\n`, do nothing
              return;
            }

            const queue = textEncoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (error) {
            // Maybe parse error
            controller.error(error);
          }
        }
      }

      const parser = createParser(onParse);

      for await (const chunk of response.body as any) {
        parser.feed(textDecoder.decode(chunk));
      }
    },
  });

  return stream;
}
