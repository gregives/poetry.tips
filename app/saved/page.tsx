import { Container } from "@/components/Container";
import { HeroPattern } from "@/components/HeroPattern";
import { PoemResult } from "@/components/PoemResult";
import { firestore } from "@/utilities/firestore";
import { redirect } from "next/navigation";
import { PoemCard } from "@/components/PoemCard";
import { getServerSession } from "@/utilities/getServerSession";
import { Poem } from "@/types";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/saved",
  },
};

export default async function SavedPage() {
  const session = await getServerSession();
  const email = session?.user?.email;

  if (typeof email !== "string") {
    redirect("/");
  }

  const {
    docs: [user],
  } = await firestore
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get();

  const savedPoems: Poem[] = user.data().poems ?? [];

  return (
    <Container className="pt-16 pb-24">
      <div className="fixed inset-[-50%] -z-10 bg-gray-100" />
      <HeroPattern className="bg-gradient-to-br from-blue-50 to-blue-100" />
      <h1 className="text-3xl/snug sm:text-4xl/snug font-bold tracking-tight mb-4">
        Generated poems
      </h1>
      {savedPoems.length > 0 && (
        <p>
          Here are all the poems that you&apos;ve generated.{" "}
          <Link
            href="/"
            className="text-blue-600 rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-gray-800"
          >
            Generate another?
          </Link>
        </p>
      )}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 peer">
        {user.data().credits !== 0 && <PoemResult />}
        {savedPoems
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((savedPoem) => (
            <PoemCard key={savedPoem.response} poem={savedPoem}>
              {savedPoem.response}
            </PoemCard>
          ))}
      </div>
      <div className="relative hidden peer-empty:block text-center rounded-3xl backdrop-blur-md px-6 py-12 border-2 border-dashed border-gray-300 hover:border-gray-400">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          No poems
        </h3>
        <p className="mt-4 text-sm text-gray-500">
          Get started by generating a poem for free.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl py-3 px-4 font-medium bg-gradient-to-br from-indigo-400 to-indigo-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-lg shadow-indigo-500/50 border-b-2 border-b-black/20"
          >
            <span className="absolute inset-0"></span>
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Generate poem
          </Link>
        </div>
      </div>
    </Container>
  );
}
