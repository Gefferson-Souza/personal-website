import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { keywords, profile, siteUrl } from "@/lib/profile";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

const title = "Gefferson Souza | Backend Engineer (Node.js, NestJS)";
const description =
  "Backend engineer (Node.js, TypeScript, NestJS, PostgreSQL). Offline-first, multi-tenant retail systems and Brazilian tax e-invoicing. Goiânia, UTC-3.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.shortName,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  colorScheme: "dark",
};

// Person (schema.org). Sem telefone e sem e-mail de propósito.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.shortName,
  url: siteUrl,
  jobTitle: profile.jobTitle,
  worksFor: { "@type": "Organization", name: profile.employer },
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goiânia",
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Católica de Brasília",
  },
  knowsAbout: [
    "Node.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "RabbitMQ",
    "Event-driven architecture",
    "Multi-tenancy",
    "Offline-first systems",
    "REST APIs",
    "Rust",
  ],
  knowsLanguage: ["pt-BR", "en"],
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} dark`}>
      <body className="bg-term-bg text-term-text font-mono antialiased">
        <script
          type="application/ld+json"
          // Escapa "<" para que o JSON nunca feche a tag <script>.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-term-text focus:px-4 focus:py-2 focus:text-term-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
