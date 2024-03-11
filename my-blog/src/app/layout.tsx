import { Header } from "@/app/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/app/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div
          className="w-full overflow-y-auto"
          style={{ height: "calc(100vh - 100px)" }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
