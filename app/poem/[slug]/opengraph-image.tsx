import { poems } from "@/poems";
import { createOpenGraphImage } from "@/utilities/createOpenGraphImage";
import { generatePoemMetadata } from "@/utilities/generatePoemMetadata";

export default async function og({ params }: { params: { slug: string } }) {
  const poem = poems.find((poem) => poem.slug === params.slug);

  return createOpenGraphImage({
    ...generatePoemMetadata(params.slug),
    color: poem?.classNames.color,
  });
}

export const runtime = "edge";
