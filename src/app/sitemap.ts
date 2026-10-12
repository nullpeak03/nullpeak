import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = ["", "/services", "/work", "/pricing", "/reviews", "/about", "/contact", "/privacy"];
  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
