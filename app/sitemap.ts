import { MetadataRoute } from "next";
import { poems } from "@/poems";

export const articles: string[] = [
  "10-reasons-why-using-a-poem-generator-can-boost-your-creativity",
  "how-to-use-an-acrostic-poem-generator",
  "rhyming-poem-generator-enhance-your-poetic-versatility",
  "haiku-poem-generator-the-zen-art-of-poetic-composition",
  "sonnet-poem-generator-how-to-write-your-own-shakespearean-sonnet",
  "limerick-poem-generator-a-playful-and-witty-poetry-style",
  "the-pros-and-cons-of-using-a-poem-generator-for-poetry-writing",
  "love-poem-generator-create-romantic-poems-in-seconds",
  "the-evolution-of-poetry-writing-from-pen-and-paper-to-ai-poem-generators",
  "the-ethics-of-ai-poetry-should-we-consider-ai-generated-poems-as-art",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.poetry.tips",
      lastModified: new Date(),
    },
    ...poems.map((poem) => ({
      url: `https://www.poetry.tips/poem/${poem.slug}`,
      lastModified: new Date(),
    })),
    {
      url: "https://www.poetry.tips/blog",
      lastModified: new Date(),
    },
    ...articles.map((slug) => ({
      url: `https://www.poetry.tips/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
