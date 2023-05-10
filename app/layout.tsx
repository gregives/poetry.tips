import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getServerSession } from "@/utilities/getServerSession";
import { generateMetadataFromSlug } from "@/utilities/generateMetadataFromSlug";
import Script from "next/script";

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
        <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </head>
        <body
          className={`h-full flex flex-col text-gray-900 ${inter.className}`}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-DQVQT5DW9P"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-DQVQT5DW9P');
            `}
          </Script>
          <Script id="favicon" strategy="afterInteractive">
            {`
              const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
              function updateFavicon({ matches }) {
                if (matches) {
                  document.querySelector('[rel="icon"]')?.setAttribute('href', '/favicon-dark.svg')
                } else {
                  document.querySelector('[rel="icon"]')?.setAttribute('href', '/favicon.svg')
                }
              }
              updateFavicon(mediaQuery);
              mediaQuery.addEventListener("change", updateFavicon);
            `}
          </Script>
        </body>
      </html>
    </SessionProvider>
  );
}
