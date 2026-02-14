import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Gefferson Souza - Senior Backend Engineer",
  description: "Building high-performance backends and compiler tools.",
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
