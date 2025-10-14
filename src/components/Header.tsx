"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import clsx from "clsx"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo → home */}
        <Link href="/" aria-label="Grove Blind & Shutter — Home" className="flex items-center gap-3">
          <div className="relative h-8 w-[140px] sm:w-[160px]">
            {/* Replace with your real logo path/size */}
            <Image
              src="/images/logo.webp"
              alt="Grove Blind & Shutter"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-gray-700">About</Link>
          <Link href="/shutters" className="hover:text-gray-700">Shutters</Link>
          <Link href="/blinds" className="hover:text-gray-700">Blinds</Link>
          <a href="#quote" className="inline-flex items-center rounded-full bg-brand px-4 py-2 font-semibold text-gray-900 shadow-sm hover:opacity-90">
            Free Quote
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-900">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={clsx("md:hidden border-t border-gray-100 bg-white", open ? "block" : "hidden")}>
        <nav className="px-4 py-4 space-y-2 text-sm">
          <Link href="/about" className="block rounded-xl px-3 py-2 hover:bg-gray-50">About</Link>
          <Link href="/shutters" className="block rounded-xl px-3 py-2 hover:bg-gray-50">Shutters</Link>
          <Link href="/blinds" className="block rounded-xl px-3 py-2 hover:bg-gray-50">Blinds</Link>
          <a
            href="#quote"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-brand px-4 py-2 font-semibold text-gray-900 shadow-sm hover:opacity-90"
          >
            Free Quote
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Grove Blind & Shutter. All rights reserved.</p>
        <div className="text-sm text-gray-500">Crafted by Abel & Co.</div>
      </div>
    </footer>
  )
}
