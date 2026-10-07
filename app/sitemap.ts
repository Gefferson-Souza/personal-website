import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://gefferson-souza-dev.vercel.app/", changeFrequency: "monthly", priority: 1 }];
}
