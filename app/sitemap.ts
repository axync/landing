import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://axync.xyz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add additional routes here as the app grows
  ];
}
