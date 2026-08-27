import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELIA | Luxury Portfolio & Creative Studio",
  description: "A Taste of Excellence Made with Passion. Mediterranean-inspired luxury personal portfolio and creative showcase.",
  keywords: ["Portfolio", "Creative Studio", "Mediterranean Design", "Next.js", "Elia Portfolio", "UI UX Design"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAF7F0] text-[#1E293B] antialiased selection:bg-[#D4AF37] selection:text-[#061527]">
        {children}
      </body>
    </html>
  );
}
