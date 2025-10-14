// src/app/sitemap.ts
import type { MetadataRoute } from "next"
import { cities } from "@/lib/locations"
import { shutterStyles, blindTypes } from "@/lib/styles"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  const now = new Date()

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // hub pages
    { url: `${base}/shutters`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blinds`,   lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // areas
    ...cities.map((c) => ({
      url: `${base}/areas/${c}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),

    // shutter styles
    ...shutterStyles.map((s) => ({
      url: `${base}/shutters/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),

    // blind types
    ...blindTypes.map((b) => ({
      url: `${base}/blinds/${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ]
}
