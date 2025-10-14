import type { Metadata } from 'next'

export const site = {
  name: 'Grove Blind & Shutter',
  url: 'https://www.example.com',
  description: 'Luxury, made-to-measure shutters for Greater Manchester homes.',
  ogImage: '/images/og.jpg'
}

export const defaultMetadata: Metadata = {
  title: {
    default: site.name,
    template: '%s · ' + site.name
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    images: [{ url: site.ogImage, width: 1200, height: 630 }]
  },
  icons: { icon: '/favicon.ico' },
  robots: { index: true, follow: true }
}