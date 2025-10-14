import { Header, Footer } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FeatureSplit } from '@/components/FeatureSplit'
import { BentoGallery } from '@/components/BentoGallery'
import { Steps } from '@/components/Steps'
import { Reviews } from '@/components/Reviews'
import { AreasForm } from '@/components/AreasForm'
import { StylesGrid } from '@/components/stylesGrid'
import { CoverageSection } from '@/components/CoverageSection'
import { FinalCTA } from '@/components/finalCTA'
import { FinalQuote } from '@/components/FinalQuote'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Luxury Shutters & Blinds in Greater Manchester",
  description: "Family-run specialists with 25+ years’ combined experience. Free in-home design visits.",
  alternates: { canonical: "/" },
}
export default function Page() {
  return (
    <div className="bg-white text-gray-900">
      <div className="w-full bg-brand text-gray-900 text-sm py-2 text-center">
        <span className="font-medium">Proudly serving Greater Manchester & surrounding areas • Free in‑home design consultation</span>
      </div>
      <Header />
      <Hero />
      <FeatureSplit />
      <StylesGrid />
      <BentoGallery />
      <Steps />
      <Reviews />
<CoverageSection />
<FinalQuote />
<Footer />
    </div>
  )
}