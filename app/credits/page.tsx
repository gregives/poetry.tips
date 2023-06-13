import { Container } from "@/components/Container";
import { HeroPattern } from "@/components/HeroPattern";
import { firestore } from "@/utilities/firestore";
import { redirect } from "next/navigation";
import { getServerSession } from "@/utilities/getServerSession";
import { twMerge } from "tailwind-merge";
import { stripe } from "@/utilities/stripe";
import Link from "next/link";

type Tier = {
  name: string;
  href: string;
  description: string;
  fullPrice: string;
  salePrice: string;
};

const origin =
  process.env.VERCEL_ENV === "preview" &&
  typeof process.env.VERCEL_GIT_COMMIT_REF === "string"
    ? `https://poetry-tips-git-${process.env.VERCEL_GIT_COMMIT_REF}-gregives.vercel.app`
    : "https://www.poetry.tips";

export const metadata = {
  alternates: {
    canonical: "/credits",
  },
};

export default async function CreditsPage() {
  const session = await getServerSession();
  const email = session?.user?.email;

  if (typeof email !== "string") {
    redirect("/");
  }

  const { data: products } = await stripe.products.list();

  const tiers = (
    await Promise.all(
      products.map(async (product) => {
        if (typeof product.default_price !== "string") {
          return;
        }

        const price = await stripe.prices.retrieve(product.default_price);

        const { url: href } = await stripe.checkout.sessions.create({
          customer_email: email,
          success_url: `${origin}/generate`,
          cancel_url: `${origin}/credits`,
          line_items: [
            {
              price: price.id,
              quantity: 1,
            },
          ],
          mode: "payment",
          discounts: [
            {
              promotion_code: "promo_1N8Lh0JUwy0YXRzBRsHsdOqG",
            },
          ],
        });

        if (href === null || price.unit_amount === null) {
          return;
        }

        return {
          name: product.name,
          href,
          description: product.description,
          fullPrice: `$${price.unit_amount / 100}`,
          salePrice: `$${price.unit_amount / 200}`,
        };
      })
    )
  )
    .filter((tier): tier is Tier => tier !== undefined)
    .sort((a, b) => a.name.localeCompare(b.name));

  const {
    docs: [user],
  } = await firestore
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get();

  const credits: number | "Unlimited" = user.data().credits ?? 5;

  return (
    <Container className="pt-16 pb-24">
      <HeroPattern className="bg-gradient-to-br from-green-50 to-green-100" />
      <h1 className="text-3xl/snug sm:text-4xl/snug font-bold tracking-tight mb-4">
        {credits === 0
          ? "You've ran out of credits"
          : `You've got ${credits.toString().toLowerCase()} credits`}
      </h1>
      <p>
        {credits !== 0 ? (
          <>
            <Link
              href="/"
              className="text-green-600 rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-gray-800"
            >
              Why not generate a poem?
            </Link>{" "}
            {credits !== "Unlimited" && "Or top your credits up below."}
          </>
        ) : (
          "If you want to generate any more poems, you'll need to buy some more credits below."
        )}
      </p>
      <div className="mt-8 sm:mt-12 isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={twMerge(
              index === 1 ? "ring-2 ring-green-600" : "ring-1 ring-gray-200",
              "flex flex-col rounded-3xl p-6"
            )}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3
                className={twMerge(
                  index === 1 ? "text-green-600" : "text-gray-900",
                  "text-lg font-semibold leading-8"
                )}
              >
                {tier.name}
              </h3>
              {index === 1 ? (
                <p className="rounded-full bg-green-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-600">
                  Most popular
                </p>
              ) : null}
            </div>
            <p className="mt-4 text-sm flex-1 leading-6 text-gray-600">
              {tier.description}
            </p>
            <p className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
              {tier.salePrice !== tier.fullPrice && (
                <s className="text-gray-300 blur-[1.5px]">{tier.fullPrice}</s>
              )}{" "}
              {tier.salePrice}
            </p>
            <a
              href={tier.href}
              className={twMerge(
                index === 1
                  ? "bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-md shadow-green-500/10 ring-1 ring-green-800/5"
                  : "bg-gradient-to-br from-green-50 to-green-100 hover:from-transparent hover:to-green-50 text-green-600 shadow-md shadow-green-500/10 ring-1 ring-green-800/5",
                "mt-6 block w-full rounded-xl py-3 px-4 font-medium focus:outline-none focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-green-600"
              )}
            >
              Buy {tier.name.toLowerCase()}
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}
