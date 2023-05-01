import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { getServerSession } from "@/utilities/getServerSession";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Poem Generator",
  description:
    "Automatically generate poems using artificial intelligence. Just describe the theme of your poem and the poem generator will do all the rhyming and syllables for you.",
};

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
