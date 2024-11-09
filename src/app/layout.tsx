import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import FooterAddress from "@/components/FooterAddress";
import Nav from "@/components/Nav";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Nav />
        {children}
        <FooterAddress />
      </body>
    </html>
  );
}
