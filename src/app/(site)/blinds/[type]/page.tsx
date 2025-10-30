import Image from "next/image";
import { Header, Footer } from "@/components/Header";
import { AreasForm } from "@/components/AreasForm";
import { blindTypes } from "@/lib/styles";
import { CoverageSection } from "@/components/CoverageSection";
import { FinalQuote } from "@/components/FinalQuote";
import type { Metadata } from "next"


export async function generateMetadata({
  params,
}: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params
  const item = blindTypes.find(b => b.slug === type)
  if (!item) return { title: "Blinds", alternates: { canonical: "/blinds" } }

  return {
    title: item.name,
    description: item.blurb,
    alternates: { canonical: `/blinds/${item.slug}` },
    openGraph: { url: `/blinds/${item.slug}`, title: item.name, description: item.blurb },
    twitter: { card: "summary_large_image" },
  }
}
export function generateStaticParams() {
  return blindTypes.map((b) => ({ type: b.slug }));
}

export default async function BlindType({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const item = blindTypes.find((b) => b.slug === type);
  if (!item) return null;
  return (
      <div>
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro + Cover */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl font-black tracking-tight">{item.name}</h1>

            {/* Benefits-only (8 bullets) */}
            {item.benefits?.length ? (
              <ul className="mt-6 space-y-2 text-gray-700">
                {item.benefits.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-brand">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <a
              href="#quote"
              className="mt-8 inline-flex items-center rounded-full bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm"
            >
              Request Free Quote
            </a>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
            <Image src={item.cover} alt={item.name} fill className="object-cover" />
          </div>
        </div>

        {/* Gallery */}
        {item.gallery?.length ? (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {item.gallery.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-gray-200">
                <Image src={src} alt={`${item.name} example ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        ) : null}
      </main>

      <CoverageSection />
      <FinalQuote />
        {/* Hidden shadow form for Netlify build detection */}
  
      <Footer />
    </div>
  );
}
