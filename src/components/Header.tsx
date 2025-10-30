"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import clsx from "clsx"

const PHONES = [
  { display: "01942 644007", tel: "+441942644007" },
  { display: "01925 877007", tel: "+441925877007" },
]

const HOURS: { day: string; open: string; close: string; closed?: boolean }[] = [
  { day: "Mon–Fri", open: "09:00", close: "17:00" },
  { day: "Sat", open: "", close: "", closed: true },
  { day: "Sun", open: "", close: "", closed: true },
]

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/groveblindandshutterco/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100067845190925" },
]

function PhoneBadge({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("flex flex-col sm:flex-row sm:items-center sm:gap-3 text-sm font-semibold text-gray-900", className)}>
      {PHONES.map((p) => (
        <a key={p.tel} href={`tel:${p.tel}`} className="hover:underline">
          {p.display}
        </a>
      ))}
    </div>
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
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GROVE Blind & Shutter Co.",
    "areaServed": ["Greater Manchester", "Cheshire"],
    "telephone": PHONES.map(p => p.tel),
    "openingHoursSpecification": HOURS.map(h => {
      const base: any = {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": daysFromLabel(h.day),
      }
      if (!h.closed) {
        base.opens = h.open || ""
        base.closes = h.close || ""
      }
      return base
    }),
    "serviceType": "Made-to-measure blinds and shutters with in-home consultation",
    "sameAs": SOCIAL.map(s => s.href)
  }), [])

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
              <li key={h.day} className="flex justify-between text-sm text-gray-600">
                <span>{h.day}</span>
                <span>{h.closed ? "Closed" : `${h.open}–${h.close}`}</span>
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

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {SOCIAL.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Grove Blind & Shutter. All rights reserved.
          </p>
          <div className="text-sm text-gray-500">Crafted by Abel & Co.</div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </footer>
  )
}