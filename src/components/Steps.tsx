export function Steps() {
  const data = [
    { t: '1. Design Visit', d: 'We measure, advise on styles, and show finishes. All in the comfort of your own home.' },
    { t: '2. Hand‑Finished', d: 'Your shutters are crafted to order for a perfect fit.' },
    { t: '3. Expert Fitting', d: 'Professional installation with a manufacturers warranty included.' }
  ]
  return (
    <section id="process" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">How it works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map((s) => (
            <div key={s.t} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-brand/30 flex items-center justify-center font-bold text-gray-900">{s.t.split('.')[0]}</div>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}