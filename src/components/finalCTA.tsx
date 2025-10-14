import React from "react"

export function FinalCTA() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Ready to transform your windows?
        </h2>
        <p className="mt-2 text-gray-700">
          Book a free in-home design visit — we’ll measure, show samples and give tailored advice.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#quote" className="inline-flex items-center rounded-full bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm hover:opacity-90">
            Request Free Quote
          </a>
          <a href="tel:+44XXXXXXXXXX" className="inline-flex items-center rounded-full border border-gray-200 px-5 py-3 font-semibold hover:bg-white">
            Call our team
          </a>
        </div>
      </div>
    </section>
  )
}
