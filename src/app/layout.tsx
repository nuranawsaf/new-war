import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";

export const metadata: Metadata = {
  title: "Arafat Hosen",
};

import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${outfit.variable} ${cormorant.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
