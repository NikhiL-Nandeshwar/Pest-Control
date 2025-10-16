"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const galleryImages = [
  { src: "/gallery/pest-spray.jpg", alt: "Technician spraying pest control" },
  { src: "/gallery/termite-treatment.jpg", alt: "Termite control service" },
  { src: "/gallery/home-sanitization.jpg", alt: "Home sanitization service" },
  { src: "/gallery/office-disinfection.jpg", alt: "Office disinfection service" },
  { src: "/gallery/equipments.jpg", alt: "Professional pest control equipment" },
  { src: "/gallery/eco-friendly.jpg", alt: "Eco-friendly pest control products" },
]

export default function GallerySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4"
        >
          Our Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-emerald-700 max-w-2xl mx-auto mb-14 text-lg"
        >
          A glimpse of how we keep homes, offices, and industries pest-free —
          using safe, hygienic, and effective methods.
        </motion.p>

        <Separator className="mx-auto max-w-[180px] bg-emerald-300 mb-16" />

        {/* Gallery grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className={cn(
                "relative overflow-hidden rounded-3xl group shadow-sm border border-emerald-100",
                "hover:shadow-emerald-200/50 transition-all duration-300"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-white font-semibold text-lg bg-emerald-800/80 px-5 py-2 rounded-xl backdrop-blur-md"
                >
                  {img.alt}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
