'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { shutterStyles, blindTypes } from "@/lib/styles"
import { Route } from "next"
type Tab = "shutters" | "blinds"

function Tile({
  href, title, blurb, src, badge,
}: { href: string; title: string; blurb: string; src: string; badge: "Shutters" | "Blinds" }) {
  return (
    <Link
      href={href as Route}
      className="group block overflow-hidden rounded-2xl border border-gray-100 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium ring-1 ring-gray-200">
          {badge}
        </span>
      </div>
      <div className="p-4">
        <p className="font-semibold line-clamp-1">{title}</p>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{blurb}</p>
      </div>
    </Link>
  )
}

export function StylesGrid() {
  const [tab, setTab] = useState<Tab>("shutters")
  const current = tab === "shutters" ? shutterStyles : blindTypes

  return (
    <section id="styles" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Styles we offer</h2>
          <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 text-sm">
            <button
              onClick={() => setTab("shutters")}
              className={`rounded-full px-3 py-1.5 ${tab==="shutters" ? "bg-brand text-gray-900" : "hover:bg-gray-50"}`}
            >
              Shutters
            </button>
            <button
              onClick={() => setTab("blinds")}
              className={`rounded-full px-3 py-1.5 ${tab==="blinds" ? "bg-brand text-gray-900" : "hover:bg-gray-50"}`}
            >
              Blinds
            </button>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.map((s) => (
            <Tile
              key={s.slug}
              href={`/${tab}/${s.slug}`}
              title={s.name}
              blurb={s.blurb}
              src={s.cover}
              badge={tab === "shutters" ? "Shutters" : "Blinds"}
            />
          ))}
        </div>

        {/* deep-link CTAs */}
        <div className="mt-8 flex gap-3">
          <Link href="/shutters" className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">View all shutters</Link>
          <Link href="/blinds" className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">View all blinds</Link>
        </div>
      </div>
    </section>
  )
}
