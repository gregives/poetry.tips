import { Container } from "@/components/Container";
import { HeroPattern } from "@/components/HeroPattern";

export const metadata = {
  alternates: {
    canonical: "/privacy",
  },
};

export default async function PrivacyPage() {
  const { default: Content } = await import("@/markdown/policies/privacy.mdx");

  return (
    <Container className="pt-16 pb-24">
      <HeroPattern className="bg-gradient-to-br from-gray-50 to-gray-100" />
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <Content />
      </div>
    </Container>
  );
}
