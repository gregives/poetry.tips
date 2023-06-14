import { poemTypesWithoutRandom } from "@/poems";

export function generateMetadataFromSlug(slug?: string) {
  const poem = poemTypesWithoutRandom.find((poem) => poem.slug === slug);
  const path = poem === undefined ? "" : `/poem/${slug}`;
  const poemName = poem?.name ?? "Poem";

  const title = `AI ${poemName} Generator`;
  const description = `Automatically generate ${poemName.toLowerCase()}s using artificial intelligence. Just describe the theme of your poem and the free ${poemName.toLowerCase()} generator will do the rest.`;

  return {
    title: `${title} — Best ${poemName} Maker 2023`,
    description,
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Poetry Tips",
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [`${path}/opengraph-image`],
    },
  };
}
