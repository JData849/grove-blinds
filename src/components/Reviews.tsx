// src/components/Reviews.tsx
import Link from "next/link"
import Image from "next/image"
export function Reviews() {
  // TODO: replace with your real Google Business Profile reviews URL
  const googleReviewsUrl =
    "https://www.google.com/search?sca_esv=14e63447f7ec96c7&sxsrf=AE3TifPPkvzGuaxIiYxnHOKhPO96wVhN7w:1760393228719&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4zjKK_DMIsD1TOo7SZLaAtQj1j8W9DMpmdyWSxPMC4idJp1uJTtcViow-lbMXPbTclDcKK2SaZs_WpiOj-sM41Cgmx5BF2yBLefBZ6q_X_V6klJIw%3D%3D&q=The+Grove+Blind+and+Shutter+Co.+Reviews&sa=X&ved=2ahUKEwiaj8Dol6KQAxWwQkEAHeTrJ2YQ0bkNegQIIxAD&biw=2560&bih=1271&dpr=1#"

  const quotes = [
    "“What a pleasure from start to finish with total professionalism from Gavin and Gareth at The Grove Blind and Shutter Company. Super happy with the vertical blinds I had fitted to my six large windows. Modern , no dust catching chains and with an easy wand control...fab!!! I was given great advice with no hard sell and the greatest of care was taken respectively when in my home from measuring to fitting. Thank you so much !!! I can highly recommend this small family business and already have to my family.”",
    "“Bought blinds for my kitchen and patio doors from Grove Blinds and would highly recommend then, the service is fantastic. The blinds are great value for money, fitted so quickly and look amazing. Gavin kept me fully informed of the order/fitting and was very professional. Would definitely use them again if I needed too.”",
    "“We are absolutely made up with our new blinds! Fantastic customer service, great price, and so much care and attention to detail throughout the whole process from quote to fitting! They set the room off perfectly and give us the privacy we wanted whilst still letting lots of light into our new extension area! Thank you so much for everything! We would 100% recommend, and use your services again!”",
  ]

  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Loved by local homeowners
          </h2>

          <Link
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:shadow-soft"
            aria-label="See all reviews on Google (opens in a new tab)"
          >
            {/* Simple Google 'G' badge */}
<span className="relative inline-block h-5 w-5 overflow-hidden rounded-full ring-1 ring-gray-200">
              <Image
                src="/images/google.webp"
                alt="Google"
                fill
                className="object-cover"
                sizes="20px"
                priority={false}
              />
            </span>
            See all reviews on Google
          </Link>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-6"
            >
              <div className="flex items-center gap-2 text-brand">★★★★★</div>
              <p className="mt-3 text-sm text-gray-700">{q}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
