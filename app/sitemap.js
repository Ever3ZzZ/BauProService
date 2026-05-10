import { siteConfig } from "./lib/siteConfig";

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
