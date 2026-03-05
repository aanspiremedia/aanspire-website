import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aanspire | Building Digital Products That Power Industries",
  description: "Aanspire is a technology parent company creating scalable solutions in sports, infrastructure, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.className} antialiased bg-[#05080a] text-white selection:bg-[#20B2AA]/30 selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
