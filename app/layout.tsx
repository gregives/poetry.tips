import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { getServerSession } from "@/utilities/getServerSession";
import { generatePoemMetadata } from "@/utilities/generatePoemMetadata";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = generatePoemMetadata();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`text-gray-900 ${inter.className}`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
