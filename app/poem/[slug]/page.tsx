import { CallToActionButton } from "@/components/CallToActionButton";
import { Container } from "@/components/Container";
import { HeroPattern } from "@/components/HeroPattern";
import { PoemGenerator } from "@/components/PoemGenerator";
import { poemTypesWithoutRandom } from "@/poems";
import { generateMetadataFromSlug } from "@/utilities/generateMetadataFromSlug";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateMetadataFromSlug(params.slug);
}

export default function PoemPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const poemType = poemTypesWithoutRandom.find(
    (poemType) => poemType.slug === params.slug
  );

  if (poemType === undefined) {
    return notFound();
  }

  return (
    <Container className="pt-16 pb-24">
      <HeroPattern className={poemType.classNames.background} />
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="-my-2 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 backdrop-blur-lg">
          More than 1,000 poems generated
        </div>
      </div>
      <h1
        className={twMerge(
          "sm:text-center text-4xl/snug sm:text-5xl/snug md:text-6xl/snug font-bold tracking-tight mb-16 sm:mb-24 lg:mb-32",
          poemType.classNames.title
        )}
      >
        {poemType.name} Generator
      </h1>
      <PoemGenerator type={poemType.name} />
      <dl className="mt-24 sm:mt-32 space-y-8 divide-y divide-gray-900/10">
        <div className="pt-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-1">
            What is {poemType.indefiniteArticle} {poemType.name.toLowerCase()}?
          </dt>
          <dd className="mt-4 lg:col-span-2 lg:mt-0">
            <p className="text-base leading-7 text-gray-600">
              {poemType.description}
            </p>
          </dd>
        </div>
        <div className="pt-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-1">
            What is {poemType.indefiniteArticle} {poemType.name.toLowerCase()}{" "}
            generator?
          </dt>
          <dd className="mt-4 lg:col-span-2 lg:mt-0">
            <p className="text-base leading-7 text-gray-600 mb-4">
              <span className="capitalize">{poemType.indefiniteArticle}</span>{" "}
              {poemType.name.toLowerCase()} generator enables you to generate{" "}
              {poemType.name.toLowerCase()}s in seconds using artificial
              intelligence. Follow these {3 + poemType.options.length} steps to
              generate {poemType.indefiniteArticle}{" "}
              {poemType.name.toLowerCase()}:
            </p>
            <ol className="list-decimal text-base leading-7 text-gray-600 marker:tracking-tighter">
              <li className="pl-1 ml-5 mb-3">
                <strong className="font-semibold">
                  Select the type of poem:
                </strong>{" "}
                In this case, select "{poemType.name}" from the drop-down list.
              </li>
              {poemType.options.map((option) => {
                return (
                  <li key={option.name} className="pl-1 ml-5 mb-3">
                    <strong className="font-semibold">
                      Enter the {option.label.toLowerCase()}:
                    </strong>{" "}
                    {option.hint}
                  </li>
                );
              })}
              <li className="pl-1 ml-5 mb-3">
                <strong className="font-semibold">Describe your poem:</strong>{" "}
                You should include the theme or subject of the{" "}
                {poemType.name.toLowerCase()} and any relevant information you
                want to be included, such as the characters' backgrounds or the
                setting of the poem.
              </li>
              <li className="pl-1 ml-5 mb-3">
                <strong className="font-semibold">Generate the poem:</strong>{" "}
                Click the big "Generate" button and watch as the artificial
                intelligence generates your poem for you. When it's finished,
                you can share the poem with the world, or if you're not happy,
                regenerate another {poemType.name.toLowerCase()} about the same
                topic.
              </li>
            </ol>
          </dd>
        </div>
        <div className="pt-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-1">
            How do you write {poemType.indefiniteArticle}{" "}
            {poemType.name.toLowerCase()}?
          </dt>
          <dd className="mt-4 lg:col-span-2 lg:mt-0">
            <p className="text-base leading-7 text-gray-600 mb-4">
              Here are the steps to write write {poemType.indefiniteArticle}{" "}
              {poemType.name.toLowerCase()}:
            </p>
            <ol className="list-decimal text-base leading-7 text-gray-600 marker:tracking-tighter mb-8">
              {poemType.steps.map((step) => {
                const summaryPosition = step.indexOf(":");
                const [summary, complete] = [
                  step.substring(0, summaryPosition),
                  step.substring(summaryPosition + 1),
                ];
                return (
                  <li key={step} className="pl-1 ml-5 mb-3">
                    <strong className="font-semibold">{summary}:</strong>
                    {complete}
                  </li>
                );
              })}
            </ol>
            Or, generate {poemType.indefiniteArticle}{" "}
            {poemType.name.toLowerCase()} using artificial intelligence:
            <div className="mt-4">
              <CallToActionButton
                type={poemType.name}
                className="inline-block w-auto"
              >
                Generate {poemType.indefiniteArticle}{" "}
                {poemType.name.toLowerCase()}
              </CallToActionButton>
            </div>
          </dd>
        </div>
        <div className="pt-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-1">
            Example of {poemType.indefiniteArticle}{" "}
            {poemType.name.toLowerCase()}
          </dt>
          <dd className="mt-4 lg:col-span-2 lg:mt-0">
            <blockquote className="relative text-base leading-7 text-gray-600 whitespace-pre">
              <div
                className={twMerge(
                  "inline-block",
                  poemType.name === "Diamante" && "text-center"
                )}
              >
                {poemType.example.text}
              </div>
            </blockquote>
            <p className="mt-16 uppercase text-sm text-gray-700">
              <span className="text-gray-400">By</span>{" "}
              {poemType.example.author}
            </p>
          </dd>
        </div>
      </dl>
    </Container>
  );
}
