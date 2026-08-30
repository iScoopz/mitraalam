import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV. MITRA ALAM | High-Quality Indonesian Frozen Seafood Exporter",
  description: "Fresh from the Ocean, Frozen to Perfection. CV. Mitra Alam is a premier HACCP and US FDA certified frozen seafood processor and exporter based in Makassar, Indonesia.",
  keywords: [
    "CV. Mitra Alam",
    "Frozen Seafood Indonesia",
    "Seafood Exporter Makassar",
    "HACCP Seafood Indonesia",
    "FDA Certified Seafood",
    "Frozen Octopus",
    "Frozen Cuttlefish",
    "Frozen Squid",
    "Red Snapper",
    "Demersal Fish",
    "Pelagic Fish",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#041822] text-[#f1f5f9] antialiased selection:bg-cyan-400 selection:text-[#041822]">
        {children}
      </body>
    </html>
  );
}
