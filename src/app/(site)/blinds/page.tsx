import Image from "next/image"
import Link from "next/link"
import { Header, Footer } from "@/components/Header"
import { blindTypes } from "@/lib/styles"
import { CoverageSection } from "@/components/CoverageSection"
import { FinalQuote } from "@/components/FinalQuote"
import { Metadata, Route } from "next"
export const metadata: Metadata = {
  title: "Blinds",
  description: "Day & Night, Roman and Venetian blinds — precision measured and professionally installed.",
  alternates: { canonical: "/blinds" },
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

export default function BlindsLanding() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Made-to-measure <span className="text-brand">blinds</span>, beautifully finished
            </h1>
            <p className="mt-4 text-gray-700 max-w-xl">
              Roller Day & Night, Roman and Venetian blinds — measured to the millimetre and installed by our family team for a flawless fit.
            </p>
            <a
              href="#quote"
              className="mt-6 inline-flex items-center rounded-full bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm"
            >
              Book a Free Design Visit
            </a>
          </div>

          {/* Hero image – swap to any preferred blind photo */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
            <Image
              src="/images/styles/roller-day-and-night/cover.webp"
              alt="Grove blinds installation"
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
          <h2 className="text-3xl font-black tracking-tight">Why choose blinds?</h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
            <li>✓ Tailored light, privacy and glare control.</li>
            <li>✓ Huge choice of fabrics, textures and colours.</li>
            <li>✓ Chain or motorised operation (smart-ready).</li>
            <li>✓ Safe, tidy and low-maintenance finishes.</li>
            <li>✓ Precise measuring for bays, recesses and doors.</li>
            <li>✓ Options for blackout, dim-out and sheer.</li>
            <li>✓ Ideal for kitchens, bathrooms, bedrooms and offices.</li>
            <li>✓ Professional fitting and local aftercare.</li>
            <li>✓ Manufacturers Warranty for peace of mind.</li>
          </ul>
        </div>
      </section>

      {/* STYLES GRID (blinds only) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-black tracking-tight">Blind styles</h2>
          <p className="mt-2 text-gray-600">
            Explore the look and benefits of each option — every blind is made to measure.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blindTypes.map((b) => (
              <Tile
                key={b.slug}
                href={`/blinds/${b.slug}`}
                title={b.name}
                blurb={b.blurb}
                src={b.cover}
              />
            ))}
          </div>
        </div>
      </section>

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
