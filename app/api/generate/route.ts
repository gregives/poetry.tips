import { createOpenAIStream } from "@/utilities/createOpenAIStream";
import { firestore } from "@/utilities/firestore";
import { getServerSession } from "@/utilities/getServerSession";
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { Options, Poem } from "@/types";

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  const email = session?.user?.email;

  if (typeof email !== "string") {
    return;
  }

  const query = firestore
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get();

  const options: Options = await request.json();

  const content = `Write a ${
    options.type === "Random poem" ? "poem" : options.type.toLowerCase()
  } about ${options.prompt}`;

  const onClose = async (response: string) => {
    const {
      docs: [user],
    } = await query;

    const poem: Poem = {
      options,
      response,
      createdAt: Date.now(),
    };

    await firestore
      .collection("users")
      .doc(user.id)
      .update({
        poems: FieldValue.arrayUnion(poem),
      });
  };

  const stream = await createOpenAIStream(
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content,
        },
      ],
      stream: true,
    },
    onClose
  );

  return new NextResponse(stream);
}
