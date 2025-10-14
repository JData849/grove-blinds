import React from "react"

export function CoverageSection() {
  return (
    <section id="coverage" className="bg-white text-gray-800 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Areas We Cover</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Grove Blinds &amp; Shutters proudly serves homes and businesses across Greater Manchester and the North West.
            From Tyldesley and Leigh to Warrington, Worsley, and beyond — if you’re in the region, we’re likely nearby.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-gray-200">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1wvGnNlpStM-gK4ap664eKE4ub3CMSIg&ehbc=2E312F&noprof=1"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[460px]"
            style={{ border: 0, marginTop: -52 }}
            title="Grove Blind & Shutter coverage map"
          />
        </div>
      </div>
    </section>
  )
}
