import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getServerSession } from "@/utilities/getServerSession";
import { generateMetadataFromSlug } from "@/utilities/generateMetadataFromSlug";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = generateMetadataFromSlug();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <html lang="en" className="h-full">
        <body
          className={`h-full flex flex-col text-gray-900 ${inter.className}`}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}

export const runtime = "edge";
