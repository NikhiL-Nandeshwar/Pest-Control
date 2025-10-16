"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const galleryImages = [
  { src: "/gallery/pest-spray.jpg", alt: "Technician spraying pest control" },
  { src: "/gallery/termite-treatment.jpg", alt: "Termite control service" },
  { src: "/gallery/home-sanitization.jpg", alt: "Home sanitization service" },
  { src: "/gallery/office-disinfection.jpg", alt: "Office disinfection service" },
  { src: "/gallery/eco-friendly.jpg", alt: "Eco-friendly pest control products" },
  { src: "/gallery/equipments.jpg", alt: "Professional pest control equipment" },

]

export default function GallerySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
          Our Work
        </h1>

        <p className="text-emerald-700 max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
          A glimpse of our professional pest control services — homes, hotels, and offices kept safe and pest-free with eco-friendly methods.
        </p>

        <Separator className="mx-auto max-w-[180px] bg-emerald-300 mb-16" />

        {/* Staggered Gallery */}
        <div className="grid gap-20 sm:grid-cols-2 md:grid-cols-2 auto-rows-fr">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={cn(
                "relative overflow-hidden rounded-3xl shadow-md border border-emerald-100",
                i % 2 === 0 ? "mt-0" : "mt-16",
                "hover:scale-105 transition-transform duration-300 ease-out"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={200}
                height={200}
                className="object-cover w-full rounded-3xl"
              />
              {/* Always visible caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-emerald-800/80 text-white text-lg font-semibold px-4 py-2 backdrop-blur-sm">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
