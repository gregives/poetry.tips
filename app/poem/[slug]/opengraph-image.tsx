import { poemTypesWithoutRandom } from "@/poems";
import { createOpenGraphImage } from "@/utilities/createOpenGraphImage";
import { generateMetadataFromSlug } from "@/utilities/generateMetadataFromSlug";

export default async function og({ params }: { params: { slug: string } }) {
  const poemType = poemTypesWithoutRandom.find(
    (poemType) => poemType.slug === params.slug
  );

  return createOpenGraphImage({
    ...generateMetadataFromSlug(params.slug),
    color: poemType?.classNames.color,
  });
}
