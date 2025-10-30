"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import clsx from "clsx"

const PHONES: string[] = ["01942 644007", "01925 877007"]
const EMAIL = "info@groveblindsuk.com"

const HOURS: { label: string; days: string[]; open?: string; close?: string }[] = [
  { label: "Mon–Fri", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "09:00", close: "17:00" },
  { label: "Sat", days: ["Saturday"] }, // closed
  { label: "Sun", days: ["Sunday"] },   // closed
]

const SOCIAL: { label: "Instagram" | "Facebook"; href: string }[] = [
  { label: "Instagram", href: "https://www.instagram.com/groveblindandshutterco/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100067845190925" },
]

function PhoneBadge({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("flex flex-col sm:flex-row sm:items-center sm:gap-3 text-sm font-semibold text-gray-900", className)}>
      {PHONES.map((num) => {
        const tel = num.replace(/\s+/g, "")
        return (
          <a key={num} href={`tel:${tel}`} aria-label={`Call ${num}`} className="hover:underline">
            {num}
          </a>
        )
      })}
    </div>
  )
}

function SocialIcon({ name, className = "h-5 w-5" }: { name: "Instagram" | "Facebook"; className?: string }) {
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Z" />
        <path d="M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Z" />
        <circle cx="17.5" cy="6.5" r="1.25" />
      </svg>
    )
  }
  // Facebook
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 21.5v-7h2.4l.4-3h-2.8V9.3c0-.87.24-1.47 1.5-1.47H16.5V5.1c-.26-.03-1.16-.1-2.2-.1-2.18 0-3.8 1.33-3.8 3.78V11.5H8v3h2.5v7h3Z" />
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Grove Blind & Shutter — Home" className="flex items-center gap-3">
          <div className="relative h-8 w-[140px] sm:w-[160px]">
            <Image src="/images/logo.webp" alt="Grove Blind & Shutter" fill className="object-contain" priority />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-gray-700">About</Link>
          <Link href="/shutters" className="hover:text-gray-700">Shutters</Link>
          <Link href="/blinds" className="hover:text-gray-700">Blinds</Link>
          <PhoneBadge />
          <a href="#quote" className="inline-flex items-center rounded-full bg-brand px-4 py-2 font-semibold text-gray-900 shadow-sm hover:opacity-90">
            Free Quote
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-900">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className={clsx("md:hidden border-t border-gray-100 bg-white", open ? "block" : "hidden")}>
        <nav className="px-4 py-4 space-y-2 text-sm">
          <Link href="/about" className="block rounded-xl px-3 py-2 hover:bg-gray-50">About</Link>
          <Link href="/shutters" className="block rounded-xl px-3 py-2 hover:bg-gray-50">Shutters</Link>
          <Link href="/blinds" className="block rounded-xl px-3 py-2 hover:bg-gray-50">Blinds</Link>
          <PhoneBadge className="mt-2" />
          <a href="#quote" className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-brand px-4 py-2 font-semibold text-gray-900 shadow-sm hover:opacity-90">
            Free Quote
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  const jsonLd = useMemo(() => {
    const openingHoursSpecification = HOURS
      .filter(h => h.open && h.close)
      .map(h => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.open,
        closes: h.close,
      }))

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GROVE Blind & Shutter Co.",
      areaServed: ["Greater Manchester", "Cheshire"],
      telephone: PHONES[0],
      email: EMAIL,
      contactPoint: [
        ...PHONES.map(num => ({
          "@type": "ContactPoint",
          telephone: num,
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: ["en-GB"],
        })),
        {
          "@type": "ContactPoint",
          email: EMAIL,
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: ["en-GB"],
        },
      ],
      openingHoursSpecification,
      serviceType: "Made-to-measure blinds and shutters with in-home consultation",
      sameAs: SOCIAL.map(s => s.href),
    }
  }, [])

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand and phone */}
        <div>
          <div className="relative h-8 w-40 mb-4">
            <Image src="/images/logo.webp" alt="Grove Blind & Shutter" fill className="object-contain" />
          </div>
          <PhoneBadge />
          <p className="mt-3 text-sm text-gray-500">
            Online only — free in-home consultations across Greater Manchester and Cheshire.
          </p>
        </div>

        {/* Opening times */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Opening times</h3>
          <ul className="mt-3 space-y-2">
            {HOURS.map((h) => (
              <li key={h.label} className="flex justify-between text-sm text-gray-600">
                <span>{h.label}</span>
                <span>{h.open && h.close ? `${h.open}–${h.close}` : "Closed"}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link href="/shutters" className="text-gray-600 hover:text-gray-900">Shutters</Link></li>
            <li><Link href="/blinds" className="text-gray-600 hover:text-gray-900">Blinds</Link></li>
            <li><a href="#quote" className="text-gray-600 hover:text-gray-900">Free Quote</a></li>
          </ul>
        </div>

        {/* Social + Email */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
          <ul className="mt-3 space-y-3 text-sm">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <SocialIcon name={s.label} />
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-gray-900">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Grove Blind & Shutter. All rights reserved.</p>
          <div className="text-sm text-gray-500">Crafted by Abel & Co.</div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </footer>
  )
}
