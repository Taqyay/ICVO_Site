import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Back to Inter for sharpness
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Ultra-sharp Sans
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ICVO | Technology Enabler",
  description: "Redefining the relationship between humanity and innovation. Intentional AI Consultancy.",
  keywords: ["Technology Enabler", "Intentional AI Consultancy", "Social Value Technology", "Strategic AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground flex flex-col min-h-screen font-sans selection:bg-primary/20`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
