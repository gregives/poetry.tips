import { articles as slugs } from "@/app/sitemap";
import { Metadata } from "@/components/ArticleHeader";
import { Container } from "@/components/Container";
import { HeroPattern } from "@/components/HeroPattern";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  // @ts-ignore
  openGraph: {
    title: "Blog",
  },
  twitter: {
    title: "Blog",
  },
};

export default async function BlogPage() {
  const articles = (
    await Promise.all(slugs.map((slug) => import(`@/markdown/${slug}.mdx`)))
  )
    .map<Metadata>(({ metadata }, index) => ({
      ...metadata,
      slug: slugs[index],
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Container className="pt-16 pb-24">
      <HeroPattern className="bg-gradient-to-br from-gray-50 to-gray-100" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 className="sm:text-center text-4xl/snug sm:text-5xl/snug md:text-6xl/snug font-bold tracking-tight text-gray-800 mb-16 sm:mb-24 lg:mb-32">
          Blog
        </h1>
        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative rounded-3xl aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 bg-gray-50">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="rounded-3xl object-cover"
                />
                <div className="absolute inset-0 rounded-3xl shadow-inner bg-gradient-to-br from-white/20" />
              </div>
              <div>
                <div className="flex flex-wrap items-center text-xs">
                  <time
                    dateTime={new Date(article.date).toISOString()}
                    className="w-full sm:w-auto text-gray-500 mr-6 mb-2"
                  >
                    {new Date(article.date).toLocaleDateString("en-GB", {
                      dateStyle: "long",
                    })}
                  </time>
                  {article.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-lg px-2 py-1 bg-gray-100 text-gray-700 -ml-1 mr-3 mb-2"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="group relative max-w-xl">
                  <h2 className="mt-3 text-lg/snug sm:text-xl/snug md:text-2xl/snug font-semibold text-gray-900 group-hover:text-gray-600">
                    <a
                      href={`/blog/${article.slug}`}
                      className="rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
                    >
                      <span className="absolute inset-0" />
                      {article.title}
                    </a>
                  </h2>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {article.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
