import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Britannia Institute | Excellence in Education",
  description: "Leading UK educational institute offering professional courses and certificates",
  keywords: ["education", "UK", "institute", "courses", "certificate", "professional development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Preloader />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold z-50"></div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
