import type { MetadataRoute } from "next";

const baseUrl = "https://www.bulaindustrie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/activities",
    "/sustainability",
    "/projects",
    "/news",
    "/contact",
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticPages];
}
