import type { Metadata } from "next"
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://groveblinds.netlify.app"),
  title: { default: "Grove Blinds & Shutters", template: "%s · Grove Blinds & Shutters" },
  description: "Luxury, made-to-measure shutters and blinds across Greater Manchester and surrounding areas.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Set body to our sans; we’ll use serif for headings */}
      <body className={'${playfair.variable} ${jakarta.variable} font-sans min-h-dvh bg-white text-gray-900 antialiased'}>
        {children}
      </body>
    </html>
  )
}
