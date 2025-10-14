'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeroImage } from './HeroImage'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
            <span className="h-2 w-2 rounded-full bg-brand"/>Premium Shutters and Blinds
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Luxury, made‑to‑measure <span className="underline decoration-brand decoration-8 underline-offset-8">shutters</span> for every room
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Hand‑crafted finishes, expert fitting, and a boutique service tailored to Greater Manchester and surrounding areas homes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#quote" className="inline-flex items-center rounded-full bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm hocus:opacity-90">Get a Free In‑Home Quote</a>
            <a href="#work" className="inline-flex items-center rounded-full px-5 py-3 font-semibold border border-gray-200 hocus:bg-gray-50">See Our Work</a>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-brand"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              4.9 Star local reviews
            </div>
          </div>
        </div>
  <HeroImage />
      </div>
    </section>
  )
}