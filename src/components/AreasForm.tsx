'use client'
import { track } from '@/lib/analytics'
import React from 'react'

export function AreasForm() {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(form).entries())
    track('lead_submitted', data as any)
    alert("Thanks! We'll be in touch shortly.")
  }

  return (
    <section id="quote" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Request your free quote</h2>
        <p className="mt-2 text-gray-600">
          Tell us about your windows and we’ll arrange a convenient time to visit.
        </p>

        <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-6">
          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
            <input required name="name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Full name" />
            <input required name="postcode" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Postcode" />

            <input required name="phone" inputMode="tel" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Phone" />
            <input required name="email" type="email" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Email" />

            <textarea name="message" rows={4} className="sm:col-span-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Tell us about your windows…" />

            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm hover:opacity-90">
              Request Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
