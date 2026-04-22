import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sony WH-1000XM6 | Silence, perfected.",
  description: "Flagship wireless noise cancelling headphones, re-engineered for a world that never stops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#050505] text-white selection:bg-[#00D6FF] selection:text-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
