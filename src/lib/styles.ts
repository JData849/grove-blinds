// src/lib/styles.ts

export type ShutterStyleSlug =
  | "full-height"
  | "tier-on-tier"
  | "cafe-style"
  | "solid-panel"
  | "waterproof"

export type BlindTypeSlug =
  | "roller-day-and-night"
  | "roman"
  | "venetian"

export interface StyleItem {
  slug: string
  name: string
  blurb: string           // short card text for homepage tiles
  description: string     // kept for SEO; UI shows benefits list
  benefits: string[]      // 8 concise bullets rendered on style pages
  cover: string           // public path to a 4:3 or 1:1 cover image
  gallery: string[]       // public paths for gallery grid
}

/* ------------------- SHUTTERS ------------------- */
export const shutterStyles: StyleItem[] = [
  {
    slug: "full-height",
    name: "Full-height Shutters",
    blurb: "Elegant coverage for full privacy and insulation.",
    description:
      "Full-height shutters span the entire window for a sleek, architectural finish that instantly elevates any room.",
    benefits: [
      "Full coverage for maximum privacy and insulation.",
      "Clean, architectural sightlines from top to bottom.",
      "Optional mid-rail aligned to your window mullions.",
      "Louvre sizes 47–89 mm to tune light and look.",
      "Hidden tilt (sleek) or centre rod (classic) control.",
      "Superb for bedrooms and living rooms.",
      "Factory-smooth painted or stained finishes.",
      "Millimetre-perfect measuring and installation."
    ],
    cover: "/images/styles/full-height/cover.webp",
    gallery: [
      "/images/styles/full-height/1.webp",
      "/images/styles/full-height/2.webp",
      "/images/styles/full-height/3.webp"
    ]
  },
  {
    slug: "tier-on-tier",
    name: "Tier-on-tier Shutters",
    blurb: "Independent top & bottom panels for flexible light control.",
    description:
      "Tier-on-tier splits the window into upper and lower sections that open independently for ultimate flexibility.",
    benefits: [
      "Independent upper/lower panels for flexible control.",
      "Keep privacy below while flooding light above.",
      "Ideal for street-facing rooms and bay windows.",
      "Open fully to frame the view on bright days.",
      "Engineered panel widths to prevent sag over time.",
      "Hidden tilt or centre rods to match your style.",
      "Colour-matched hinges and discreet hardware.",
      "Best balance of daylight, privacy, and airflow."
    ],
    cover: "/images/styles/tier-on-tier/cover.webp",
    gallery: [
      "/images/styles/tier-on-tier/1.webp",
      "/images/styles/tier-on-tier/2.webp",
      "/images/styles/tier-on-tier/3.webp"
    ]
  },
  {
    slug: "cafe-style",
    name: "Café-style Shutters",
    blurb: "Half-height privacy with open views above.",
    description:
      "Café-style shutters dress only the lower half of the window for privacy without losing daylight or sky views.",
    benefits: [
      "Lower-half coverage; open glass above for sky and light.",
      "Aligns to transoms/sightlines for a tailored look.",
      "Great for kitchens, dining rooms, and living spaces.",
      "Daytime privacy without darkening the room.",
      "Pairs beautifully with Romans/curtains for evenings.",
      "Light, welcoming, boutique aesthetic.",
      "Durable sprayed finishes; easy maintenance.",
      "Cost-efficient way to add street-level privacy."
    ],
    cover: "/images/styles/cafe-style/cover.webp",
    gallery: [
      "/images/styles/cafe-style/1.webp",
      "/images/styles/cafe-style/2.webp",
      "/images/styles/cafe-style/3.webp"
    ]
  },
  {
    slug: "solid-panel",
    name: "Solid Panel Shutters",
    blurb: "Classic, draught-reducing solid timber panels.",
    description:
      "Solid panels deliver a heritage look with excellent darkening and draught reduction for restful rooms.",
    benefits: [
      "Near-blackout darkness when closed.",
      "Noticeable draught and noise reduction.",
      "Authentic heritage aesthetic for period homes.",
      "Panels fold back neatly to reveal full glazing.",
      "Paint or stain to match cabinetry and trim.",
      "Robust joinery for long-term stability.",
      "Ideal for bedrooms, nurseries, and snug lounges.",
      "Luxurious, substantial feel versus louvred styles."
    ],
    cover: "/images/styles/solid-panel/cover.webp",
    gallery: [
      "/images/styles/solid-panel/1.webp",
      "/images/styles/solid-panel/2.webp",
      "/images/styles/solid-panel/3.webp"
    ]
  },
  {
    slug: "waterproof",
    name: "Waterproof Shutters",
    blurb: "Moisture-resistant; perfect for kitchens & bathrooms.",
    description:
      "Waterproof shutters deliver timber looks with durable, moisture-safe materials for humid spaces.",
    benefits: [
      "Moisture-resistant materials for baths and kitchens.",
      "Stainless/treated hardware resists tarnishing.",
      "Withstands steam, splashes, and daily humidity.",
      "Wipe-clean, colour-stable finishes.",
      "Looks like timber with extra resilience.",
      "Hidden tilt available for sleek lines.",
      "Made around tiles/sills for a tight seal.",
      "Durable, low-maintenance, family-proof."
    ],
    cover: "/images/styles/waterproof/cover.webp",
    gallery: [
      "/images/styles/waterproof/1.webp",
      "/images/styles/waterproof/2.webp",
      "/images/styles/waterproof/3.webp"
    ]
  }
]

/* ------------------- BLINDS ------------------- */
export const blindTypes: StyleItem[] = [
  {
    slug: "roller-day-and-night",
    name: "Roller Day & Night (Zebra)",
    blurb: "Dual sheer/opaque bands tune privacy and light.",
    description:
      "Zebra blinds use alternating sheer and opaque bands to fine-tune privacy and daylight.",
    benefits: [
      "Dual sheer/opaque bands tune privacy and light.",
      "View out by day, near-blackout alignment by night.",
      "Slim cassette with colour-matched bottom bar.",
      "Chain or motorised control (smart-home ready).",
      "Excellent glare control for screens.",
      "Large fabric library: textures, plains, prints.",
      "Low maintenance; easy dust/wipe clean.",
      "Minimal, modern look for open-plan spaces."
    ],
    cover: "/images/styles/roller-day-and-night/cover.webp",
    gallery: [
      "/images/styles/roller-day-and-night/1.webp",
      "/images/styles/roller-day-and-night/2.webp"
    ]
  },
  {
    slug: "roman",
    name: "Roman Blinds",
    blurb: "Soft, tailored fabric folds for a luxurious feel.",
    description:
      "Roman blinds add warmth and texture with tailored fabric folds and premium lining options.",
    benefits: [
      "Tailored fabric folds add softness and warmth.",
      "Lined, interlined, or blackout options.",
      "Improves acoustics in echo-prone rooms.",
      "Huge fabric choice to match interiors.",
      "Optional pelmets, borders, and trims.",
      "Chain or motorised operation.",
      "Perfect for bays, bedrooms, and lounges.",
      "Designer, boutique finish with real presence."
    ],
    cover: "/images/styles/roman/cover.webp",
    gallery: [
      "/images/styles/roman/1.webp",
      "/images/styles/roman/2.webp"
    ]
  },
  {
    slug: "venetian",
    name: "Venetian Blinds",
    blurb: "Precise light control with warm wood or sleek aluminium.",
    description:
      "Venetian blinds provide precise tilt control with real wood warmth or aluminium practicality.",
    benefits: [
      "Precise tilt for light and privacy control.",
      "Real wood warmth or sleek aluminium practicality.",
      "Multiple slat widths for classic or bold looks.",
      "Aluminium excels in kitchens and bathrooms.",
      "Privacy without fully darkening the room.",
      "Colour-matched tapes/cords for a tailored feel.",
      "Durable, easy-clean slats and hardware.",
      "Smart, versatile choice for almost any room."
    ],
    cover: "/images/styles/venetian/cover.webp",
    gallery: [
      "/images/styles/venetian/1.webp",
      "/images/styles/venetian/2.webp"
    ]
  }
]
