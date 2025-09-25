import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trade Logger",
  description: "Minimal workspace for trade tracking and analysis.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1 px-4 py-10 sm:px-8">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
