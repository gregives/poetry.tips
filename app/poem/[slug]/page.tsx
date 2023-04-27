import { Container } from "@/components/Container";
import { HeroPattern } from "@/components/HeroPattern";
import { poems } from "@/poems";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function PoemPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const poem = poems.find((poem) => poem.slug === params.slug);

  if (poem === undefined) {
    return notFound();
  }

  return (
    <Container className="py-24">
      <HeroPattern className={poem.classNames.background} />
      <h1
        className={twMerge(
          "sm:text-center text-4xl sm:text-6xl leading-snug sm:leading-snug font-bold tracking-tight mb-24 sm:mb-32 lg:mb-40",
          poem.classNames.title
        )}
      >
        {poem.name} Generator
      </h1>
      <div className="divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          {poem.name} Facts
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          <div className="pt-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-1">
              What is {poem.indefiniteArticle} {poem.name.toLowerCase()}?
            </dt>
            <dd className="mt-4 lg:col-span-2 lg:mt-0">
              <p className="text-base leading-7 text-gray-600">
                {poem.description}
              </p>
            </dd>
          </div>
          <div className="pt-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-1">
              Example of {poem.indefiniteArticle} {poem.name.toLowerCase()}
            </dt>
            <dd className="mt-4 lg:col-span-2 lg:mt-0">
              <p className="text-base leading-7 text-gray-600 whitespace-pre-line">
                {poem.example}
              </p>
            </dd>
          </div>
          <div className="pt-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-1">
              How do you write {poem.indefiniteArticle}{" "}
              {poem.name.toLowerCase()}?
            </dt>
            <dd className="mt-4 lg:col-span-2 lg:mt-0">
              <ol className="list-decimal text-base leading-8 text-gray-600">
                {poem.steps.map((step) => (
                  <li key={step} className="pl-1 ml-4">
                    {step}
                  </li>
                ))}
              </ol>
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  );
}
