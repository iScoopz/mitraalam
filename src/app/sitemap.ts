import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mitraalam.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/assets/1.%20COVER/logo-01.png`,
        `${baseUrl}/assets/3.%20PRODUCT/octopus.webp`,
        `${baseUrl}/assets/3.%20PRODUCT/cuttlefish-jpeg.webp`,
        `${baseUrl}/assets/3.%20PRODUCT/squid-jpeg.webp`,
        `${baseUrl}/assets/3.%20PRODUCT/snapper-jpg.webp`,
        `${baseUrl}/assets/3.%20PRODUCT/grouper-jpg.webp`,
        `${baseUrl}/assets/3.%20PRODUCT/spanish%20mackerel-jpeg.webp`,
        `${baseUrl}/assets/4.%20STORY/IMG_7531.webp`,
        `${baseUrl}/assets/5.%20COMMITMENT/5-02.webp`,
      ],
    },
  ];
}
