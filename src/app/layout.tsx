import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mitraalam.com"),
  title: "CV. MITRA ALAM | High-Quality Indonesian Frozen Seafood Exporter",
  description: "Fresh from the Ocean, Frozen to Perfection. CV. Mitra Alam is a premier HACCP, GMP, and US FDA registered frozen seafood processor and exporter based in Makassar, South Sulawesi, Indonesia.",
  keywords: [
    "CV. Mitra Alam",
    "Mitra Alam Seafood",
    "Frozen Seafood Indonesia",
    "Seafood Exporter Makassar",
    "HACCP Seafood Indonesia",
    "FDA Registered Seafood Processor",
    "GMP Certified Seafood",
    "Frozen Octopus Indonesia",
    "Frozen Cuttlefish",
    "Frozen Loligo Squid",
    "Red Snapper Exporter",
    "Indonesian Demersal Fish",
    "Pelagic Fish Exporter",
    "Spanish Mackerel Tenggiri",
    "Cold Storage Makassar",
    "Air Blast Freezer ABF Indonesia",
  ],
  alternates: {
    canonical: "https://mitraalam.com",
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
  icons: {
    icon: [
      { url: "/assets/1. COVER/logo-01.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/assets/1. COVER/logo-01.png",
    apple: "/assets/1. COVER/logo-01.png",
  },
  openGraph: {
    title: "CV. MITRA ALAM | High-Quality Indonesian Frozen Seafood Exporter",
    description: "Fresh from the Ocean, Frozen to Perfection. CV. Mitra Alam is a premier HACCP and US FDA certified frozen seafood processor and exporter based in Makassar, Indonesia.",
    url: "https://mitraalam.com",
    siteName: "CV. MITRA ALAM",
    images: [
      {
        url: "/assets/1. COVER/logo-01.png",
        width: 800,
        height: 600,
        alt: "CV. MITRA ALAM Frozen Seafood",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. MITRA ALAM | High-Quality Indonesian Frozen Seafood Exporter",
    description: "Fresh from the Ocean, Frozen to Perfection. CV. Mitra Alam is a premier HACCP and US FDA certified frozen seafood processor and exporter based in Makassar, Indonesia.",
    images: ["/assets/1. COVER/logo-01.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FoodEstablishment"],
  name: "CV. MITRA ALAM",
  alternateName: "Mitra Alam Frozen Seafood",
  url: "https://mitraalam.com",
  logo: "https://mitraalam.com/assets/1.%20COVER/logo-01.png",
  description: "CV. Mitra Alam is a premier Indonesian seafood processor and exporter specializing in high-quality frozen cephalopods, demersal, and pelagic fish with HACCP, GMP, and US FDA certification.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Kima 10 Kav E 1A, Daya, Kec. Biringkanaya",
    addressLocality: "Makassar",
    addressRegion: "Sulawesi Selatan",
    postalCode: "90241",
    addressCountry: "ID",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+628114619717",
      contactType: "sales & customer support",
      email: "mitraalam017@gmail.com",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Indonesian"],
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "US FDA Registration",
      credentialCategory: "Food & Drug Safety Registration",
      recognizedBy: {
        "@type": "Organization",
        name: "U.S. Food and Drug Administration",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "HACCP Food Safety Certification",
      credentialCategory: "Food Safety Management",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "GMP Quality Certification",
      credentialCategory: "Good Manufacturing Practice",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#041822] text-[#f1f5f9] antialiased selection:bg-cyan-400 selection:text-[#041822]">
        {children}
      </body>
    </html>
  );
}
