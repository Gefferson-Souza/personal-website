import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

const siteUrl = "https://gefferson-souza-dev.vercel.app";
const title = "Gefferson Souza | Backend Engineer: Node.js, NestJS, TypeScript, Rust";
const description =
  "Backend engineer building resilient, offline-first systems and fiscal integrations with Node.js, NestJS and Rust. Creator of Tyrus and GoiásScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Gefferson Souza",
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} dark`}>
      <body className="bg-term-bg text-term-text font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
