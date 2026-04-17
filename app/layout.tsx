import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import MagneticCursor from "@/components/MagneticCursor";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Femi Jimoh — Product Designer & Engineer",
  description:
    "Product designer, design engineer, and technical PM with 5 years of experience. Based in Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full bg-white text-[#111] antialiased font-sans">
        <MagneticCursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
