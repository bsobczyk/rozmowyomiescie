import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rozmowy o mieście - Dąbrowa Górnicza",
  description: "Cykliczne spotkania i debaty o przyszłości Dąbrowy Górniczej.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Navbar />
        <main className="container my-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

