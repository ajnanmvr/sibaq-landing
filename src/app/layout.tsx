import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import FooterAddress from "@/components/Footer";
import Nav from "@/components/Nav";
import { ApolloWrapper } from "@/components/ApolloWrapper";

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
      <body
        className={`${dm_sans.variable} text-black select-none font-sans tracking-tighter`}
      >
        <ApolloWrapper>
          <Nav />
          {children}
          <FooterAddress />
        </ApolloWrapper>
      </body>
      <GoogleAnalytics gaId={process.env.GA_ID!} />
    </html>
  );
}
