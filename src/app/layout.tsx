import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { DM_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "aos/dist/aos.css";
import FooterAddress from "@/components/Footer";
import Nav from "@/components/Nav";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIBĀQ 2025 | Darul Huda National Arts Fest",
  description:
    "SIBĀQ 2025, the Darul Huda National Arts Fest, is a biennial intercollegiate festival celebrating creativity, tradition, and cultural heritage. Featuring skill-oriented contests in diverse fields, it fosters talent, critical thinking, and extracurricular excellence among students, making it an integral part of Darul Huda Islamic University’s commitment to holistic education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Sibaq 2025" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${dm_sans.variable} text-black select-none font-sans tracking-tighter`}
      >
        <Nav />
        <main> {children}</main>
        <FooterAddress />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID!} />
    </html>
  );
}
