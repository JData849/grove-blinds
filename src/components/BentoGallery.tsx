import Image from "next/image"

export function BentoGallery() {
  const items = [
    {
      caption: "Leigh • Living Room",
      tag: "Shutters",
      src: "/images/leighlivingroom.webp",
    },
    {
      caption: "Lowton • Bedroom",
      tag: "Blinds",
      src: "/images/lowtonbedroom.webp",
    },
    {
      caption: "Golborne • Kitchen",
      tag: "Blinds",
      src: "/images/golbournekitchen.webp",
    },
    {
      caption: "Tyldesley • Conservatory",
      tag: "Blinds",
      src: "/images/conservatorytyldesley.webp",
    },
    {
      caption: "Birchwood • Bathroom",
      tag: "Shutters",
      src: "/images/birchwoodbathroom.webp",
    },
    {
      caption: "Atherton • Front room",
      tag: "Shutters",
      src: "/images/athertonfrontroom.webp",
    },
  ]

  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Recent installs</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <figure
              key={idx}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-gray-50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="p-4 text-sm text-gray-700 flex items-center justify-between">
                <span>{item.caption}</span>
                <span className="inline-flex items-center gap-1 text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {item.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
