import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Public_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Chatbot } from "@/components/Chatbot";
import { ThemeScript } from "@/components/ThemeToggle";
import { site } from "@/content/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});
const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F7F9" },
    { media: "(prefers-color-scheme: dark)", color: "#060A12" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Null Peak . — From Zero to Found | Web Design Nepal",
    template: "%s | Null Peak .",
  },
  description: site.description,
  keywords: [
    "web design Nepal",
    "website Kathmandu",
    "affordable website Nepal",
    "Google Maps listing Nepal",
    "AI agent Nepal",
    ".com.np domain",
  ],
  openGraph: {
    type: "website",
    siteName: "Null Peak .",
    title: "Null Peak . — From Zero to Found",
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Null Peak . — From Zero to Found",
    description: site.description,
    images: ["/opengraph-image"],
  },
  verification: site.gscVerification
    ? { google: site.gscVerification }
    : undefined,
};

// Organization + LocalBusiness schema for every page.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#org`,
      name: "Null Peak",
      url: site.url,
      email: site.email,
      logo: `${site.url}/logo.png`,
      sameAs: [site.instagram],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#local`,
      name: "Null Peak",
      slogan: site.tagline,
      url: site.url,
      email: site.email,
      telephone: `+${site.phoneIntl}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      priceRange: "NPR 8,999 - NPR 12,329",
      sameAs: [site.instagram, site.whatsapp],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-peak-400 focus:px-5 focus:py-2 focus:text-sm focus:font-bold focus:text-ink-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Chatbot />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
