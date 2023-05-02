import { Container } from "@/components/Container";
import { ArticleHeader } from "@/components/ArticleHeader";
import { notFound } from "next/navigation";
import { HeroPattern } from "@/components/HeroPattern";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  try {
    const { metadata } = await import(`@/blog/${params.slug}.mdx`);

    return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        title: metadata.title,
        description: metadata.description,
      },
      twitter: {
        title: metadata.title,
        description: metadata.description,
      },
    };
  } catch {
    return {};
  }
}

export default async function Article({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  try {
    const { default: Content, metadata } = await import(
      `@/blog/${params.slug}.mdx`
    );

    return (
      <Container className="pt-16 pb-24">
        <HeroPattern className="bg-gradient-to-br from-gray-50 to-gray-100" />
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <ArticleHeader metadata={metadata} />
          <Content />
        </div>
      </Container>
    );
  } catch {
    notFound();
  }
}
