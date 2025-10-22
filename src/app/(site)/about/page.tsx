import Image from "next/image"
import { Header, Footer } from "@/components/Header"
import { AreasForm } from "@/components/AreasForm"
import { CoverageSection } from "@/components/CoverageSection"
import { FinalQuote } from "@/components/FinalQuote"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "About Us",
  description: "Family-run, local shutter & blind specialists with 25+ years’ combined experience.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="mx-auto mb-6 flex items-center justify-center">
            {/* Replace with your real logo file */}
            <Image
              src="/images/logo.webp"
              alt="Grove Blind & Shutter"
              width={800}
              height={400}
              className="opacity-90"
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About <span className="text-brand">Grove Blind & Shutter</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We’re a <strong>family-run</strong>, <strong>Greater Manchester</strong> business
            specialising in made-to-measure <strong>shutters</strong> and <strong>blinds</strong>.
            With more than <strong>25 years of combined trade experience</strong>, we measure
            precisely, fit beautifully, and look after you for the long run.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-brand" />
            Local • Trusted • Boutique Service
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-3 sm:grid-cols-3 gap-6 text-center">
          {[
            { k: "Combined Experience", v: "25+ yrs" },
            { k: "Avg. Rating", v: "4.9/5" },
            { k: "Guarantee", v: "Manufacturers Warranty" },
          ].map((s) => (
            <div key={s.k}>
              <p className="text-2xl font-black tracking-tight">{s.v}</p>
              <p className="text-xs text-gray-500 mt-1">{s.k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Our Story</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Grove started with a simple idea: <em>beautiful window dressings, fitted properly</em>.
              Over the years, we’ve built our reputation the right way—by showing up on time,
              measuring to the millimetre, and treating every home as if it were our own.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Today, our small, specialist team brings together joinery know-how and design sense.
              We help you choose the right style. Full-height, tier-on-tier, café-style,
              waterproof shutters or venetian, Roman, vertical, roller Day & Night blinds. The result is a finish
              that looks seamless and works perfectly for years.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
            {/* Swap with a real team image when ready */}
            <Image
              src="/images/family.webp"
              alt="The Grove family team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-black tracking-tight text-center">What We Stand For</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Family, not faceless",
                d: "We’re local, accountable, and here when you need us. No call centres—just people who care.",
              },
              {
                t: "Made-to-measure, always",
                d: "Every window is different. We template tricky bays, align mid-rails to mullions, and specify panel widths that last.",
              },
              {
                t: "Craft & care",
                d: "Clean lines, tight tolerances, and neat caulking. We protect floors, tidy up, and leave things perfect.",
              },
              {
                t: "Honest guidance",
                d: "We’ll tell you what will work best—materials, louvre sizes, hardware—so you get quality that fits your home.",
              },
              {
                t: "Premium finishes",
                d: "Durable sprayed coatings, colour-matched hardware, and options that age gracefully.",
              },
              {
                t: "Aftercare you can rely on",
                d: "Friendly support and a full manufacturers warranty. We’re here for the long run.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl bg-brand/30 flex items-center justify-center font-bold text-gray-900">
                  ✓
                </div>
                <h3 className="mt-4 font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <CoverageSection />
      <FinalQuote />
      <Footer />
    </div>
  )
}
