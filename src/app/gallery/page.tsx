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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4"
        >
          Our Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-emerald-700 max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
        >
          Experience the precision, care, and professionalism behind every pest-free space we create.
          From homes to hotels, every project reflects our dedication to hygiene and safety.
        </motion.p>

        <Separator className="mx-auto max-w-[180px] bg-emerald-300 mb-16" />

        {/* Gallery Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: i * 0.07,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className={cn(
                "relative overflow-hidden rounded-3xl group shadow-sm border border-emerald-100",
                "hover:shadow-lg hover:shadow-emerald-100/60 transition-all duration-300"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="object-cover w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out" />
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-white font-semibold text-lg bg-emerald-800/80 px-5 py-2 rounded-xl backdrop-blur-sm shadow-md"
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
