import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meta Blend | Remote Staffing & Outstaffing Agency",
  description: "Build world-class remote teams with Meta Blend. We connect ambitious companies with top-tier talent across support, tech, design, and operations.",
  keywords: ["remote staffing", "outstaffing", "BPO", "hiring", "virtual assistants", "customer support", "tech staffing"],
  alternates: {
    canonical: "https://metablend.com",
  },
  openGraph: {
    title: "Meta Blend | Remote Staffing & Outstaffing Agency",
    description: "Build world-class remote teams with Meta Blend. We connect ambitious companies with top-tier talent.",
    url: "https://metablend.com",
    siteName: "Meta Blend",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Blend | Remote Staffing & Outstaffing Agency",
    description: "Build world-class remote teams with Meta Blend.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Meta Blend",
    url: "https://metablend.com",
    description: "Build world-class remote teams with Meta Blend. We connect ambitious companies with top-tier talent across support, tech, design, and operations.",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@metablend.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "CA",
      },
      {
        "@type": "PostalAddress",
        addressCountry: "BH",
      },
      {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
    ],
    sameAs: [
      "https://linkedin.com/company/metablend",
      "https://twitter.com/metablend",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
