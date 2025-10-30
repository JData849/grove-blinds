import Image from "next/image"
import Link from "next/link"
import { Header, Footer } from "@/components/Header"

import { shutterStyles } from "@/lib/styles"
import { ShutterEstimator } from "@/components/ShutterEstimator"
import { CoverageSection } from "@/components/CoverageSection"
import { Metadata, Route } from "next"
import { FinalQuote } from "@/components/FinalQuote"

export const metadata: Metadata = {
  title: "Shutters",
  description: "Made-to-measure plantation shutters, expertly fitted across Greater Manchester.",
  alternates: { canonical: "/shutters" },
}

function Tile({
  href,
  title,
  blurb,
  src,
}: {
  href: string
  title: string
  blurb: string
  src: string
}) {
  return (
    <Link
      href={href as Route}
      className="group block overflow-hidden rounded-2xl border border-gray-100 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600 mt-1">{blurb}</p>
      </div>
    </Link>
  )
}

export default function ShuttersLanding() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Made-to-measure <span className="text-brand">shutters</span>, fitted to perfection
            </h1>
            <p className="mt-4 text-gray-700 max-w-xl">
              Premium plantation shutters that elevate light, privacy and insulation — crafted for
              Greater Manchester homes and professionally installed by our family team.
            </p>
            <a
              href="#quote"
              className="mt-6 inline-flex items-center rounded-full bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm"
            >
              Book a Free Design Visit
            </a>
          </div>

          {/* Swap image if you prefer; this uses your local hero */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
            <Image
              src="/images/recentinstall.webp"
              alt="Grove shutters installation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* GENERAL BENEFITS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-black tracking-tight">Why choose shutters?</h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
            <li>✓ Precision light control with adjustable louvres.</li>
            <li>✓ Excellent privacy without sacrificing daylight.</li>
            <li>✓ Added insulation and improved energy efficiency.</li>
            <li>✓ Bespoke, millimetre-perfect measuring and fitting.</li>
            <li>✓ Durable sprayed finishes — easy to keep pristine.</li>
            <li>✓ Safe, cord-free operation — family friendly.</li>
            <li>✓ Tailored to tricky bays, arches and large spans.</li>
            <li>✓ Timeless curb appeal that adds long-term value.</li>
            <li>✓ Manufacturers warranty and friendly local aftercare.</li>
          </ul>
        </div>
      </section>

      {/* STYLES GRID (shutters only) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-black tracking-tight">Shutter styles</h2>
          <p className="mt-2 text-gray-600">
            Explore the look and benefits of each style — every option is made to measure.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shutterStyles.map((s) => (
              <Tile
                key={s.slug}
                href={`/shutters/${s.slug}`}
                title={s.name}
                blurb={s.blurb}
                src={s.cover}
              />
            ))}
          </div>
        </div>
      </section>

      <ShutterEstimator />
      <CoverageSection />
      <FinalQuote />
        {/* Hidden shadow form for Netlify build detection */}
      <form name="quote" data-netlify="true" hidden aria-hidden="true">
        <input name="name" />
        <input name="postcode" />
        <input name="phone" />
        <input name="email" />
        <textarea name="message" />
        <input name="consent" />
      </form>
      <Footer />
    </div>
  )
}
