"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.6 }}
      className="relative"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200">
        <Image
          src="/images/recentinstall.webp"
          alt="Custom-fitted shutters in a bay window"
          fill
          priority
          fetchPriority="high"
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-200">
        <p className="text-xs text-gray-500">Recent install • Lowton</p>
        <p className="text-sm font-medium">Full-height shutters</p>
      </div>
    </motion.div>
  )
}
