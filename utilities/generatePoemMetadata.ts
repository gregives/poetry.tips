import { poems } from "@/poems";

export function generatePoemMetadata(slug?: string) {
  const poem = poems.find((poem) => poem.slug === slug);
  const poemName = poem?.name ?? "Poem";

  return {
    title: `AI ${poemName} Generator`,
    description: `Automatically generate ${poemName.toLowerCase()}s using artificial intelligence. Just describe the theme of your poem and the poem generator will do all the rhyming and syllables for you.`,
  };
}
