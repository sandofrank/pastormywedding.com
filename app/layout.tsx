import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pastormywedding.com"),
  title: {
    default: "Temecula Wedding Officiant | Pastor My Wedding | Wine Country Ceremonies",
    template: "%s | Pastor My Wedding",
  },
  description:
    "Pastor Jeff Johnson - Temecula Wine Country's trusted wedding officiant for over 20 years. Serving Temecula Valley wineries, Murrieta, Menifee, Wildomar, Lake Elsinore & all of Southern California. Personalized Christian & non-denominational ceremonies.",
  keywords: [
    "Temecula wedding officiant",
    "Temecula Wine Country wedding",
    "wedding officiant near me",
    "Temecula Valley wedding pastor",
    "winery wedding officiant",
    "Murrieta wedding officiant",
    "Menifee wedding officiant",
    "Wildomar wedding officiant",
    "Lake Elsinore wedding officiant",
    "Southern California wedding officiant",
    "Christian wedding officiant",
    "non-denominational wedding",
    "wedding ceremony Temecula",
    "marriage officiant",
    "wedding minister Temecula",
    "Faulkner Winery wedding",
    "Europa Village wedding",
    "Ponte Winery wedding",
    "Villa de Amore wedding",
    "Peltzer Winery wedding",
  ],
  authors: [{ name: "Pastor Jeff Johnson" }],
  creator: "Pastor My Wedding",
  publisher: "Pastor My Wedding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Temecula Wedding Officiant | Pastor My Wedding",
    description:
      "Pastor Jeff Johnson - Temecula Wine Country's trusted wedding officiant for over 20 years. Professional, personable ceremonies at wineries throughout the valley.",
    url: "https://www.pastormywedding.com",
    siteName: "Pastor My Wedding",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/pastor-jeff.jpg",
        width: 800,
        height: 600,
        alt: "Pastor Jeff Johnson - Temecula Wedding Officiant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temecula Wedding Officiant | Pastor My Wedding",
    description:
      "Pastor Jeff Johnson - Temecula Wine Country's trusted wedding officiant for over 20 years.",
    images: ["/images/pastor-jeff.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.pastormywedding.com",
  },
  category: "Wedding Services",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.pastormywedding.com",
  name: "Pastor My Wedding",
  image: "https://www.pastormywedding.com/images/pastor-jeff.jpg",
  description:
    "Professional wedding officiant serving Temecula Wine Country and Southern California for over 20 years. Christian and non-denominational ceremonies.",
  url: "https://www.pastormywedding.com",
  telephone: "+1-951-218-5925",
  email: "email@pastormywedding.com",
  areaServed: [
    { "@type": "City", name: "Temecula" },
    { "@type": "City", name: "Murrieta" },
    { "@type": "City", name: "Menifee" },
    { "@type": "City", name: "Wildomar" },
    { "@type": "City", name: "Lake Elsinore" },
    { "@type": "City", name: "Fallbrook" },
    { "@type": "City", name: "Hemet" },
    { "@type": "City", name: "San Diego" },
    { "@type": "State", name: "California" },
  ],
  priceRange: "$400-$600",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Officiant Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Ceremony",
          description: "Complete wedding ceremony without rehearsal",
        },
        price: "400",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Ceremony with Rehearsal",
          description: "Full wedding ceremony plus rehearsal",
        },
        price: "500",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Extended Wedding Package",
          description: "Wedding ceremony with rehearsal plus additional location fee",
        },
        price: "600",
        priceCurrency: "USD",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2c3e50" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
