import { siteConfig } from "./lib/siteConfig";

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    {
      url: `${siteConfig.siteUrl}/trockenbau-bad-kissingen`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.siteUrl}/trockenbau-handwerker-innenausbau-bad-kissingen`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.siteUrl}/innenausbau-bad-kissingen`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
},

    {
      url: `${siteConfig.siteUrl}/spachtelarbeiten-bad-kissingen`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
