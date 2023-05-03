import { poems } from "@/poems";
import { createOpenGraphImage } from "@/utilities/createOpenGraphImage";
import { generateMetadataFromSlug } from "@/utilities/generateMetadataFromSlug";

export default async function og({ params }: { params: { slug: string } }) {
  const poem = poems.find((poem) => poem.slug === params.slug);

  return createOpenGraphImage({
    ...generateMetadataFromSlug(params.slug),
    color: poem?.classNames.color,
  });
}
