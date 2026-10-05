import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mitraalam.com"),
  title: {
    default: "Mitra Alam | CV Mitra Alam - Indonesian Frozen Seafood Exporter Makassar",
    template: "%s | CV Mitra Alam",
  },
  description:
    "Mitra Alam (CV Mitra Alam) adalah eksportir dan pabrik pengolahan seafood beku resmi berstandar HACCP, GMP, & US FDA di Makassar, Sulawesi Selatan. Melayani ekspor dan pasokan Gurita (Octopus), Cumi (Squid), Sotong (Cuttlefish), Kakap Merah (Snapper), dan Kerapu (Grouper).",
  applicationName: "CV Mitra Alam",
  authors: [{ name: "CV Mitra Alam", url: "https://mitraalam.com" }],
  creator: "CV Mitra Alam",
  publisher: "CV Mitra Alam",
  category: "Business & Industrial > Food & Beverage > Seafood Supplier",
  keywords: [
    "Mitra Alam",
    "CV Mitra Alam",
    "Mitra Alam Makassar",
    "CV Mitra Alam Makassar",
    "Mitra Alam Seafood",
    "CV Mitra Alam Seafood",
    "Mitra Alam Frozen Seafood",
    "Pabrik Mitra Alam",
    "Cold Storage Mitra Alam",
    "Indonesian Frozen Seafood Exporter",
    "Frozen Seafood Supplier Indonesia",
    "Seafood Exporter Makassar",
    "Eksportir Seafood Beku Indonesia",
    "Supplier Hasil Laut Makassar",
    "Supplier Ikan Beku Makassar",
    "Pabrik Pengolahan Ikan Makassar",
    "Cold Storage Makassar Lantebung",
    "Cold Storage Makassar KIMA",
    "HACCP Seafood Indonesia",
    "US FDA Registered Seafood Processor",
    "GMP Certified Seafood Exporter",
    "Frozen Octopus Indonesia",
    "Eksportir Gurita Makassar",
    "Octopus cyaneus exporter",
    "Frozen Cuttlefish Sepia",
    "Frozen Loligo Squid",
    "Red Snapper Exporter Indonesia",
    "Indonesian Demersal Fish",
    "Pelagic Fish Exporter",
    "Spanish Mackerel Tenggiri",
    "Grouper Exporter Indonesia",
    "Air Blast Freezer ABF Indonesia",
    "Indonesian Fish Processing Plant",
  ],
  alternates: {
    canonical: "https://mitraalam.com",
    languages: {
      "x-default": "https://mitraalam.com",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-token",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/1.%20COVER/logo-01.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/assets/1.%20COVER/logo-01.png",
    apple: "/assets/1.%20COVER/logo-01.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mitra Alam | CV Mitra Alam - Indonesian Frozen Seafood Exporter Makassar",
    description:
      "Fresh from the Ocean, Frozen to Perfection. Mitra Alam (CV Mitra Alam) is a premier HACCP, GMP, and US FDA certified frozen seafood processor and exporter based in Makassar, South Sulawesi, Indonesia.",
    url: "https://mitraalam.com",
    siteName: "Mitra Alam",
    images: [
      {
        url: "https://mitraalam.com/assets/1.%20COVER/logo-01.png",
        width: 1200,
        height: 630,
        alt: "CV Mitra Alam - Indonesian Frozen Seafood Exporter and Processor Makassar",
      },
    ],
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitra Alam | CV Mitra Alam - Indonesian Frozen Seafood Exporter Makassar",
    description:
      "High-Quality Indonesian Frozen Seafood. HACCP, GMP, & US FDA Registered Processor in Makassar, South Sulawesi, Indonesia.",
    images: ["https://mitraalam.com/assets/1.%20COVER/logo-01.png"],
  },
  other: {
    "geo.region": "ID-SN",
    "geo.placename": "Makassar, Sulawesi Selatan",
    "geo.position": "-5.109033;119.516782",
    "ICBM": "-5.109033, 119.516782",
    "language": "Indonesian, English",
    "revisit-after": "3 days",
    "rating": "General",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "WholesaleStore"],
      "@id": "https://mitraalam.com/#organization",
      name: "CV Mitra Alam",
      legalName: "CV Mitra Alam",
      alternateName: [
        "Mitra Alam",
        "Mitra Alam Makassar",
        "CV. Mitra Alam",
        "Mitra Alam Seafood",
        "CV Mitra Alam Seafood",
        "Mitra Alam Frozen Seafood",
        "CV Mitra Alam Makassar",
      ],
      url: "https://mitraalam.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mitraalam.com/assets/1.%20COVER/logo-01.png",
        caption: "CV Mitra Alam Logo",
      },
      image: "https://mitraalam.com/assets/1.%20COVER/logo-01.png",
      description:
        "CV Mitra Alam (Mitra Alam) is a premier Indonesian seafood processor and exporter specializing in high-quality frozen cephalopods (octopus, squid, cuttlefish), demersal, and pelagic fish with HACCP, GMP, and US FDA certification.",
      foundingDate: "2017",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Lantebung No. 9",
        addressLocality: "Makassar",
        addressRegion: "Sulawesi Selatan",
        postalCode: "90244",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -5.109033,
        longitude: 119.516782,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      priceRange: "$$$$",
      telephone: "+628114619717",
      email: "mitraalam9@gmail.com",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+628114619717",
          contactType: "Sales & Export Inquiries",
          email: "mitraalam9@gmail.com",
          areaServed: [
            "Worldwide",
            "China",
            "Vietnam",
            "United States",
            "South Korea",
            "Taiwan",
            "Japan",
            "Indonesia",
          ],
          availableLanguage: ["English", "Indonesian"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+6282190931111",
          contactType: "Customer Support & WhatsApp Inquiries",
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
            name: "U.S. Food and Drug Administration (Registration: 12621818410)",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "HACCP Food Safety Certification",
          credentialCategory: "Food Safety Management",
          recognizedBy: {
            "@type": "Organization",
            name: "BKIPM / Ministry of Marine Affairs and Fisheries Indonesia (Cert: 095/096/097/PM/HACCP/PB/07/26)",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "GMP Quality Certification",
          credentialCategory: "Good Manufacturing Practice",
        },
      ],
      knowsAbout: [
        "Frozen Cephalopods Export",
        "Frozen Octopus Processing",
        "Loligo Squid Export",
        "Frozen Cuttlefish Processing",
        "Red Snapper Fillet Export",
        "Grouper Export",
        "Air Blast Quick Freezing",
        "Cold Storage Management",
      ],
      sameAs: [
        "https://www.instagram.com/cv.mitraalam?igsi=NHR0NDE3bGNxZjli",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mitraalam.com/#website",
      url: "https://mitraalam.com",
      name: "Mitra Alam",
      alternateName: [
        "CV Mitra Alam",
        "Mitra Alam Makassar",
        "CV. Mitra Alam",
        "Mitra Alam Seafood",
      ],
      description: "Indonesian Frozen Seafood Exporter & Processing Plant",
      publisher: {
        "@id": "https://mitraalam.com/#organization",
      },
      inLanguage: ["en-US", "id-ID"],
    },
    {
      "@type": "WebPage",
      "@id": "https://mitraalam.com/#webpage",
      url: "https://mitraalam.com",
      name: "Mitra Alam | CV Mitra Alam - Indonesian Frozen Seafood Exporter & Supplier",
      isPartOf: {
        "@id": "https://mitraalam.com/#website",
      },
      about: {
        "@id": "https://mitraalam.com/#organization",
      },
      description:
        "Mitra Alam (CV Mitra Alam) is a leading Indonesian frozen seafood exporter certified by HACCP, GMP, and US FDA in Makassar, Indonesia.",
      breadcrumb: {
        "@id": "https://mitraalam.com/#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mitraalam.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://mitraalam.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://mitraalam.com/#about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Certifications",
          item: "https://mitraalam.com/#certification",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Products",
          item: "https://mitraalam.com/#product",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Facilities",
          item: "https://mitraalam.com/#facilities",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Contact",
          item: "https://mitraalam.com/#contact",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://mitraalam.com/#productlist",
      name: "Export Seafood Products by CV Mitra Alam",
      itemListElement: [
        {
          "@type": "Product",
          position: 1,
          name: "Frozen Indonesian Octopus (Octopus cyaneus)",
          description:
            "Wild-caught premium grade Indonesian octopus, thoroughly gutted, eye & beak removed, ball-rolled (IQF) or block frozen (BQF).",
          image: "https://mitraalam.com/assets/3.%20PRODUCT/octopus.jpeg",
          category: "Cephalopod",
          brand: {
            "@type": "Brand",
            name: "CV Mitra Alam",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "0",
            priceValidUntil: "2027-12-31",
            itemCondition: "https://schema.org/NewCondition",
            description: "Wholesale export quote available upon request",
            url: "https://mitraalam.com/#product",
          },
        },
        {
          "@type": "Product",
          position: 2,
          name: "Frozen Cuttlefish (Sepia esculenta)",
          description:
            "Tender, snow-white wild Indonesian cuttlefish, whole cleaned or skinless fillet, flash-frozen with IQF or plate freezer.",
          image: "https://mitraalam.com/assets/3.%20PRODUCT/cuttlefish.jpeg",
          category: "Cephalopod",
          brand: {
            "@type": "Brand",
            name: "CV Mitra Alam",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "0",
            priceValidUntil: "2027-12-31",
            itemCondition: "https://schema.org/NewCondition",
            description: "Wholesale export quote available upon request",
            url: "https://mitraalam.com/#product",
          },
        },
        {
          "@type": "Product",
          position: 3,
          name: "Frozen Loligo Squid (Loligo sp.)",
          description:
            "Directly sourced from clean Indonesian waters, fresh Loligo squid packed in pristine quick-frozen blocks (BQF) or whole cleaned tube & tentacle.",
          image: "https://mitraalam.com/assets/3.%20PRODUCT/squid.jpeg",
          category: "Cephalopod",
          brand: {
            "@type": "Brand",
            name: "CV Mitra Alam",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "0",
            priceValidUntil: "2027-12-31",
            itemCondition: "https://schema.org/NewCondition",
            description: "Wholesale export quote available upon request",
            url: "https://mitraalam.com/#product",
          },
        },
        {
          "@type": "Product",
          position: 4,
          name: "Frozen Snapper (Lutjanus spp.)",
          description:
            "Prime snapper sustainably harvested from Indonesian archipelago waters, available as whole round, WGGS, or skin-on scaled fillet.",
          image: "https://mitraalam.com/assets/3.%20PRODUCT/snapper.jpg",
          category: "Demersal Fish",
          brand: {
            "@type": "Brand",
            name: "CV Mitra Alam",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "0",
            priceValidUntil: "2027-12-31",
            itemCondition: "https://schema.org/NewCondition",
            description: "Wholesale export quote available upon request",
            url: "https://mitraalam.com/#product",
          },
        },
        {
          "@type": "Product",
          position: 5,
          name: "Frozen Grouper (Epinephelus spp.)",
          description:
            "Rich and firm white meat grouper, fast-chilled immediately after dock landing in Makassar and blast frozen at -35°C.",
          image: "https://mitraalam.com/assets/3.%20PRODUCT/grouper.jpg",
          category: "Demersal Fish",
          brand: {
            "@type": "Brand",
            name: "CV Mitra Alam",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "0",
            priceValidUntil: "2027-12-31",
            itemCondition: "https://schema.org/NewCondition",
            description: "Wholesale export quote available upon request",
            url: "https://mitraalam.com/#product",
          },
        },
        {
          "@type": "Product",
          position: 6,
          name: "Frozen Spanish Mackerel / Tenggiri (Scomberomorus commerson)",
          description:
            "High-oil-content pelagic Spanish mackerel, premium cut for sashimi, steaks, and culinary export markets.",
          image:
            "https://mitraalam.com/assets/3.%20PRODUCT/spanish%20mackerel.jpeg",
          category: "Pelagic Fish",
          brand: {
            "@type": "Brand",
            name: "CV Mitra Alam",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "0",
            priceValidUntil: "2027-12-31",
            itemCondition: "https://schema.org/NewCondition",
            description: "Wholesale export quote available upon request",
            url: "https://mitraalam.com/#product",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://mitraalam.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What seafood products does CV Mitra Alam export from Indonesia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CV Mitra Alam specializes in exporting premium Indonesian frozen seafood including Cephalopods (Octopus cyaneus, Cuttlefish Sepia esculenta, Loligo Squid), Demersal fish (Red Snapper, Grouper, Parrotfish, Leatherjacket, Rabbitfish), and Pelagic fish (Spanish Mackerel Tenggiri, Mackerel Scad). All products are processed under strict HACCP and GMP standards.",
          },
        },
        {
          "@type": "Question",
          name: "Is CV Mitra Alam certified for seafood export to the USA, China, and Vietnam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, CV Mitra Alam is fully registered with the US FDA (Registration: 12621818410), China (CIDN18PP2310200112 / CR 999 - 27), Vietnam (VR. A/B-559-27), South Korea (No 25 - 114), and Taiwan (IT 036-27). We also hold official HACCP certifications for Cephalopods, Demersal, and Pelagic fish.",
          },
        },
        {
          "@type": "Question",
          name: "What packaging specifications and options are available for export?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We accommodate flexible packaging specifications tailored to client requirements, including Individual Quick Freezing (IQF) in plain bags or rider bags, Individually Vacuum Packed (IVP), Individually Wrapped (IWP), Block Quick Frozen (BQF) in master cartons (10 kg / 20 lbs / 30 lbs), and custom private labelling upon agreement.",
          },
        },
        {
          "@type": "Question",
          name: "Where is CV Mitra Alam located and what is your cold storage capacity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our processing plant and cold storage are strategically located at Jl. Lantebung No. 9, Makassar, South Sulawesi 90244, just minutes from the Port of Makassar. Our facilities feature 3 Air Blast Freezers (ABF) (~3.5 tons/cycle) and cold storage capacity of 108 Tons maintained at -20°C to -25°C.",
          },
        },
        {
          "@type": "Question",
          name: "How can international buyers request a quote or product catalog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact our export sales division directly via WhatsApp at +6282190931111 / +628114619717, or email us at mitraalam9@gmail.com. We provide comprehensive FOB / CIF quotations and product specification sheets promptly.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
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
