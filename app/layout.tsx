import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { OpeningTheme } from "@/components/layout/OpeningTheme";
import { ScrollToTopOnLoad } from "@/components/layout/ScrollToTopOnLoad";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Abhay Pal — AI-Focused Software Engineer",
  description: "Portfolio of Abhay Pal — AI-focused Software Engineer building production web apps, RAG pipelines, and real-time systems.",
  keywords: "Abhay Pal, software engineer, AI, full-stack, Next.js, React, LangChain, RAG, portfolio",
  authors: [{ name: "Abhay Pal" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abhay Pal — AI-Focused Software Engineer",
    description: "Building production web apps & AI-powered systems.",
    siteName: "Abhay Pal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Pal — AI-Focused Software Engineer",
    description: "Building production web apps & AI-powered systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fabhaytech1960back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></head>
      <body className="min-h-full flex flex-col bg-[#fafaf9] text-[#080503] antialiased">
        <OpeningTheme />
        <CursorGlow />
        <ScrollToTopOnLoad />
        {children}
      </body>
    </html>
  );
}
