// FinalQuote.tsx
"use client"

import React from "react"
import { track } from "@/lib/analytics"

type Props = { context?: string; phone?: string }

// Encode helper for Netlify x-www-form-urlencoded
function encode(data: Record<string, FormDataEntryValue>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(String(data[k])))
    .join("&")
}

export function FinalQuote({ context, phone = "+44XXXXXXXXXX" }: Props) {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const raw = Object.fromEntries(new FormData(form).entries())

    // honeypot
    if ((raw as any).website) return

    // analytics
    track("lead_submitted", raw as any)

    // POST to Netlify
    const payload = { "form-name": "quote", ...raw }
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(payload),
    })

    alert("Thanks! We'll be in touch shortly.")
    form.reset()
  }

  return (
    <section id="quote" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Ready to transform your windows?</h2>
          <p className="mt-2 text-gray-700">Book a free in-home design visit — we’ll measure, show samples and give tailored advice.</p>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 mx-auto max-w-4xl">
          <form
            id="quote-form"
            name="quote"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="website"
            onSubmit={onSubmit}
            className="grid sm:grid-cols-2 gap-4"
          >
            {/* required for Netlify to identify the form name */}
            <input type="hidden" name="form-name" value="quote" />
            {context ? <input type="hidden" name="context" value={context} /> : null}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <label className="sr-only" htmlFor="name">Full name</label>
            <input required id="name" name="name" placeholder="Full name"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />

            <label className="sr-only" htmlFor="postcode">Postcode</label>
            <input required id="postcode" name="postcode" placeholder="Postcode"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />

            <label className="sr-only" htmlFor="phone">Phone</label>
            <input required id="phone" name="phone" inputMode="tel" placeholder="Phone"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />

            <label className="sr-only" htmlFor="email">Email</label>
            <input required id="email" name="email" type="email" placeholder="Email"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Tell us about your windows…"
              className="sm:col-span-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />

            <label className="sm:col-span-2 flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-gray-300" defaultChecked />
              I’m happy for Grove Blind & Shutter to contact me about my enquiry.
            </label>

            <button type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 font-semibold text-gray-900 shadow-sm hover:opacity-90">
              Request Free Quote
            </button>
          </form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">Manufacturers Warranty • Local aftercare • No hard sell</div>
      </div>
    </section>
  )
}
