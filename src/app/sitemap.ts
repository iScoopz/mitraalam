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
        `${baseUrl}/assets/3.%20PRODUCT/octopus.jpeg`,
        `${baseUrl}/assets/3.%20PRODUCT/cuttlefish.jpeg`,
        `${baseUrl}/assets/3.%20PRODUCT/squid.jpeg`,
        `${baseUrl}/assets/3.%20PRODUCT/snapper.jpg`,
        `${baseUrl}/assets/3.%20PRODUCT/grouper.jpg`,
        `${baseUrl}/assets/3.%20PRODUCT/spanish%20mackerel.jpeg`,
        `${baseUrl}/assets/4.%20STORY/IMG_7531.JPG`,
        `${baseUrl}/assets/5.%20COMMITMENT/5-02.png`,
      ],
    },
  ];
}
