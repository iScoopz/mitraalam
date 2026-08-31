import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mitraalam.com"),
  title: {
    default: "CV. MITRA ALAM | Indonesian Frozen Seafood Exporter & Supplier",
    template: "%s | CV. MITRA ALAM",
  },
  description:
    "CV. Mitra Alam is a premier HACCP, GMP, and US FDA certified frozen seafood processor & exporter based in Makassar, South Sulawesi, Indonesia. Specializing in Octopus, Squid, Cuttlefish, Red Snapper, Grouper, and Pelagic Fish for global export.",
  applicationName: "CV. MITRA ALAM",
  authors: [{ name: "CV. MITRA ALAM", url: "https://mitraalam.com" }],
  creator: "CV. MITRA ALAM",
  publisher: "CV. MITRA ALAM",
  category: "Business & Industrial > Food & Beverage > Seafood Supplier",
  keywords: [
    "CV. Mitra Alam",
    "CV Mitra Alam Makassar",
    "Mitra Alam Seafood",
    "Indonesian Frozen Seafood Exporter",
    "Frozen Seafood Supplier Indonesia",
    "Seafood Exporter Makassar",
    "Eksportir Seafood Beku Indonesia",
    "Supplier Hasil Laut Makassar",
    "HACCP Seafood Indonesia",
    "US FDA Registered Seafood Processor",
    "GMP Certified Seafood Exporter",
    "Frozen Octopus Indonesia",
    "Octopus cyaneus exporter",
    "Frozen Cuttlefish Sepia",
    "Frozen Loligo Squid",
    "Red Snapper Exporter Indonesia",
    "Indonesian Demersal Fish",
    "Pelagic Fish Exporter",
    "Spanish Mackerel Tenggiri",
    "Grouper Exporter Indonesia",
    "Cold Storage Makassar KIMA",
    "Air Blast Freezer ABF Indonesia",
    "Indonesian Fish Processing Plant",
  ],
  alternates: {
    canonical: "https://mitraalam.com",
    languages: {
      "en-US": "https://mitraalam.com",
      "id-ID": "https://mitraalam.com",
    },
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
      { url: "/assets/1. COVER/logo-01.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/assets/1. COVER/logo-01.png",
    apple: "/assets/1. COVER/logo-01.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "CV. MITRA ALAM | Indonesian Frozen Seafood Exporter & Supplier",
    description:
      "Fresh from the Ocean, Frozen to Perfection. CV. Mitra Alam is a premier HACCP, GMP, and US FDA certified frozen seafood processor and exporter based in Makassar, Indonesia.",
    url: "https://mitraalam.com",
    siteName: "CV. MITRA ALAM",
    images: [
      {
        url: "/assets/1. COVER/logo-01.png",
        width: 1200,
        height: 630,
        alt: "CV. MITRA ALAM - Indonesian Frozen Seafood Exporter",
      },
    ],
    locale: "en_US",
    alternateLocale: ["id_ID"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. MITRA ALAM | Indonesian Frozen Seafood Exporter",
    description:
      "High-Quality Indonesian Frozen Seafood. HACCP, GMP, & US FDA Registered Processor in Makassar, Indonesia.",
    images: ["/assets/1. COVER/logo-01.png"],
  },
  other: {
    "geo.region": "ID-SN",
    "geo.placename": "Makassar, Sulawesi Selatan",
    "geo.position": "-5.109033;119.516782",
    "ICBM": "-5.109033, 119.516782",
    "language": "English, Indonesian",
    "revisit-after": "7 days",
    "rating": "General",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "FoodEstablishment"],
      "@id": "https://mitraalam.com/#organization",
      name: "CV. MITRA ALAM",
      alternateName: [
        "Mitra Alam Frozen Seafood",
        "CV Mitra Alam",
        "Mitra Alam Seafood Makassar",
      ],
      url: "https://mitraalam.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mitraalam.com/assets/1.%20COVER/logo-01.png",
        caption: "CV. MITRA ALAM Logo",
      },
      image: "https://mitraalam.com/assets/1.%20COVER/logo-01.png",
      description:
        "CV. Mitra Alam is a premier Indonesian seafood processor and exporter specializing in high-quality frozen cephalopods (octopus, squid, cuttlefish), demersal, and pelagic fish with HACCP, GMP, and US FDA certification.",
      foundingDate: "2017",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Kima 10 Kav E 1A, Daya, Kec. Biringkanaya",
        addressLocality: "Makassar",
        addressRegion: "Sulawesi Selatan",
        postalCode: "90241",
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
      name: "CV. MITRA ALAM",
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
      name: "CV. MITRA ALAM | Indonesian Frozen Seafood Exporter & Supplier",
      isPartOf: {
        "@id": "https://mitraalam.com/#website",
      },
      about: {
        "@id": "https://mitraalam.com/#organization",
      },
      description:
        "CV. Mitra Alam is a leading Indonesian frozen seafood exporter certified by HACCP, GMP, and US FDA in Makassar, Indonesia.",
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
      name: "Export Seafood Products by CV. MITRA ALAM",
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
            name: "CV. MITRA ALAM",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "Contact for Quote",
            itemCondition: "https://schema.org/NewCondition",
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
            name: "CV. MITRA ALAM",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "Contact for Quote",
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
            name: "CV. MITRA ALAM",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "Contact for Quote",
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
            name: "CV. MITRA ALAM",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "Contact for Quote",
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
            name: "CV. MITRA ALAM",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "Contact for Quote",
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
            name: "CV. MITRA ALAM",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            price: "Contact for Quote",
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
          name: "What seafood products does CV. Mitra Alam export from Indonesia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CV. Mitra Alam specializes in exporting premium Indonesian frozen seafood including Cephalopods (Octopus cyaneus, Cuttlefish Sepia esculenta, Loligo Squid), Demersal fish (Red Snapper, Grouper, Parrotfish, Leatherjacket, Rabbitfish), and Pelagic fish (Spanish Mackerel Tenggiri, Mackerel Scad). All products are processed under strict HACCP and GMP standards.",
          },
        },
        {
          "@type": "Question",
          name: "Is CV. Mitra Alam certified for seafood export to the USA, China, and Vietnam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, CV. Mitra Alam is fully registered with the US FDA (Registration: 12621818410), China (CIDN18PP2310200112 / CR 999 - 27), Vietnam (VR. A/B-559-27), South Korea (No 25 - 114), and Taiwan (IT 036-27). We also hold official HACCP certifications for Cephalopods, Demersal, and Pelagic fish.",
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
          name: "Where is CV. Mitra Alam located and what is your cold storage capacity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our processing plant and cold storage are strategically located in the KIMA Industrial Estate (Jl. Kima 10 Kav E 1A, Makassar, South Sulawesi, Indonesia), just minutes from the Port of Makassar. Our facilities feature 3 Air Blast Freezers (ABF) (~3.5 tons/cycle) and cold storage capacity of 108 Tons maintained at -20°C to -25°C.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://mitraalam.com" />
        <meta name="geo.region" content="ID-SN" />
        <meta name="geo.placename" content="Makassar" />
        <meta name="geo.position" content="-5.109033;119.516782" />
        <meta name="ICBM" content="-5.109033, 119.516782" />
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
