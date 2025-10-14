export function FeatureSplit() {
  return (
    <section id="shutters" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Premium shutters, tailored to your space</h2>
          <p className="mt-4 text-gray-600">From bay windows to bi‑fold doors, we measure, design, and fit for a flawless result. Choose finishes and hardware with guidance from our friendly owners.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-brand inline-flex items-center justify-center">✓</span><span>Tier‑on‑tier, full‑height, cafe‑style options</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-brand inline-flex items-center justify-center">✓</span><span>Moisture‑resistant for kitchens & bathrooms</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-brand inline-flex items-center justify-center">✓</span><span>Professional installation and aftercare</span></li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="#quote" className="inline-flex items-center rounded-full bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm hocus:opacity-90">Book a Design Visit</a>
            <a href="#work" className="inline-flex items-center rounded-full px-5 py-3 font-semibold border border-gray-200 hocus:bg-white">View Gallery</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[4/5] rounded-2xl bg-[url('/images/split1.webp')] bg-cover bg-center" />
          <div className="aspect-[4/5] rounded-2xl bg-[url('/images/split2.webp')] bg-cover bg-center" />
          <div className="aspect-[4/5] rounded-2xl bg-[url('/images/split3.webp')] bg-cover bg-center" />
          <div className="aspect-[4/5] rounded-2xl bg-[url('/images/split4.webp')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  )
}