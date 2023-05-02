import { MetadataRoute } from "next";
import { poems } from "@/poems";

export const articles: string[] = [
  "10-reasons-why-using-a-poem-generator-can-boost-your-creativity",
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
    ...articles.map((slug) => ({
      url: `https://www.poetry.tips/blog/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
