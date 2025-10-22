import { notFound } from 'next/navigation'
import { Header, Footer } from '@/components/Header'
import { AreasForm } from '@/components/AreasForm'
import { cities, cityPretty, normaliseCity } from '@/lib/locations'

export function generateStaticParams() {
  return cities.map((city) => ({ city }))
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const key = normaliseCity(city)
  if (!key) return notFound()
  const pretty = cityPretty[key]

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-black tracking-tight">Shutters & blinds in {pretty}</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Luxury, made-to-measure shutters and blinds for homes in {pretty} and across Greater Manchester.
          Expert advice, precise measuring, and professional fitting.
        </p>
        <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-gray-700">
          <li>✓ Full-height • Tier-on-tier • Café-style • Waterproof</li>
          <li>✓ Venetian • Roman • Vertical • Perfect Fit • Day & Night Rollers</li>
          <li>✓ Manufacturers warranty and local aftercare</li>
          <li>✓ Local team, trusted by homeowners</li>
        </ul>
      </main>
      <AreasForm />
      <Footer />
    </div>
  )
}
