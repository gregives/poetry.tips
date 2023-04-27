import { Container } from "@/components/Container";
import { HeroPattern } from "@/components/HeroPattern";
import { poems } from "@/poems";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <Container className="py-24">
      <HeroPattern />
      <h1 className="text-center text-4xl sm:text-6xl leading-snug sm:leading-snug font-bold tracking-tight text-gray-800 mb-24 sm:mb-32 lg:mb-40">
        Poem Generator
      </h1>
      <div className="rounded-lg grid sm:grid-cols-2 gap-4">
        {poems.map((poem) => (
          <div
            key={poem.name}
            className={twMerge(
              "group relative p-6 focus-within:ring-2 rounded-xl",
              poem.classNames.focus,
              poem.classNames.background
            )}
          >
            <h2
              className={twMerge(
                "text-xl font-semibold tracking-tight leading-6",
                poem.classNames.title
              )}
            >
              <Link href={poem.href} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                {poem.name}
              </Link>
            </h2>
            <p
              className={twMerge(
                "mt-8 text-sm opacity-80 saturate-50",
                poem.classNames.title
              )}
            >
              {poem.description}
            </p>
            <span
              className={twMerge(
                "pointer-events-none absolute right-6 top-6 opacity-30 group-hover:opacity-60",
                poem.classNames.title
              )}
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
