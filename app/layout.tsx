import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { OpeningTheme } from "@/components/layout/OpeningTheme";
import { ScrollToTopOnLoad } from "@/components/layout/ScrollToTopOnLoad";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Stack Developer | Portfolio",
  description: "A modern, interactive portfolio showcasing full-stack development projects and skills. Built with Next.js, React, and Tailwind CSS.",
  keywords: "developer, portfolio, full-stack, web development, react, next.js",
  authors: [{ name: "Developer" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Full Stack Developer Portfolio",
    description: "Showcasing modern web development projects and expertise",
    siteName: "Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer Portfolio",
    description: "Showcasing modern web development projects and expertise",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0e27] text-slate-100 dark">
        <OpeningTheme />
        <CursorGlow />
        <ScrollToTopOnLoad />
        {children}
      </body>
    </html>
  );
}
