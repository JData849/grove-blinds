import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://groveblinds.netlify.app"
  const isProd = process.env.NODE_ENV === "production"

  return isProd
    ? {
        rules: [{ userAgent: "*", allow: "/" }],     // no Disallow for prod
        sitemap: `${base}/sitemap.xml`,
      }
    : {
        rules: [{ userAgent: "*", disallow: "/" }],  // block staging/preview
        sitemap: `${base}/sitemap.xml`,
      }
}
