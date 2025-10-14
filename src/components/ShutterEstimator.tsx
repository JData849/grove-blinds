'use client'

import { useMemo, useState } from 'react'

type Material = 'uk' | 'pvc' | 'hardwood'

const MATERIAL_RATE_GBP: Record<Material, number> = {
  // £ per m² — tweak these to your real guide prices
  uk: 330,        // UK Made Shutters
  pvc: 285,       // Waterproof / PVC
  hardwood: 350,  // Hardwood Paulownia
}

export function ShutterEstimator() {
  const [width, setWidth] = useState<string>('')   // cm
  const [height, setHeight] = useState<string>('') // cm
  const [material, setMaterial] = useState<Material>('uk')

  const areaM2 = useMemo(() => {
    const w = Math.max(0, Number(width))
    const h = Math.max(0, Number(height))
    if (!w || !h) return 0
    return (w * h) / 10000 // cm² → m²
  }, [width, height])

  const rate = MATERIAL_RATE_GBP[material]
  const price = areaM2 * rate

  const currency = (n: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n)

  return (
    <section id="calculator" className="bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <span className="uppercase tracking-widest text-brand text-sm font-medium">Estimate</span>
        <h2 className="text-4xl font-black tracking-tight mt-2">Shutter Price Estimator</h2>
        <p className="text-lg text-gray-600 mt-3">
          Enter your window measurements for an instant estimate. (Final cost confirmed after a free design visit.)
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
          <div>
            <label htmlFor="width" className="block text-sm font-medium text-gray-700">Width (cm)</label>
            <input
              id="width"
              type="number"
              inputMode="decimal"
              min={0}
              placeholder="e.g. 120"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mt-2 focus-visible:ring-2 focus-visible:ring-brand"
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (cm)</label>
            <input
              id="height"
              type="number"
              inputMode="decimal"
              min={0}
              placeholder="e.g. 150"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mt-2 focus-visible:ring-2 focus-visible:ring-brand"
            />
          </div>
        </div>

        <div className="mt-6 text-left">
          <label htmlFor="material" className="block text-sm font-medium text-gray-700">Material</label>
          <select
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value as Material)}
            className="w-full border rounded-lg px-4 py-2 mt-2 focus-visible:ring-2 focus-visible:ring-brand"
          >
            <option value="uk">UK Made Shutters</option>
            <option value="pvc">Waterproof / PVC</option>
            <option value="hardwood">Hardwood Paulownia</option>
          </select>
        </div>

        <div className="mt-10 bg-white rounded-3xl shadow-lg p-8 text-left">
          <p className="text-lg text-gray-700">
            Area:&nbsp;<span className="font-semibold">{areaM2.toFixed(2)}</span> m²
          </p>
          <p className="text-2xl font-black mt-3">
            Estimated Price:&nbsp;<span className="text-gray-900">{currency(price)}</span>
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Guide only. Includes measuring & installation; excludes unusual access, shaping, or special finishes.
          </p>

          <a
            href="#quote"
            className="mt-6 inline-flex items-center rounded-full bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm"
          >
            Book a Free Design Visit
          </a>
        </div>
      </div>
    </section>
  )
}
