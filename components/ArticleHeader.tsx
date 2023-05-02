"use client";

import { Heading1, Paragraph } from "@/mdx-components";
import Image from "next/image";

export type Metadata = {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  image: string;
};

export function ArticleHeader({ metadata }: { metadata: Metadata }) {
  return (
    <>
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] mb-8 bg-gray-50">
        <Image
          src={metadata.image}
          alt=""
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 rounded-xl shadow-inner bg-gradient-to-br from-white/20" />
      </div>
      <div className="flex flex-wrap items-center">
        <time
          dateTime={new Date(metadata.date).toISOString()}
          className="w-full sm:w-auto text-sm md:text-base text-gray-500 mr-6 mb-2"
        >
          {new Date(metadata.date).toLocaleDateString("en-GB", {
            dateStyle: "long",
          })}
        </time>
        {metadata.tags.map((tag) => (
          <div
            key={tag}
            className="rounded-lg px-2 py-1 bg-gray-50 text-gray-600 text-sm md:text-base -ml-1 mr-3 mb-2"
          >
            {tag}
          </div>
        ))}
      </div>
      <Heading1>{metadata.title}</Heading1>
      <Paragraph>{metadata.description}</Paragraph>
    </>
  );
}
