"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  { src: "/gallery/pest-spray.webp", alt: "Technician spraying pest control" },
  { src: "/gallery/termite-treatment.webp", alt: "Termite control service" },
  { src: "/gallery/home-sanitization.webp", alt: "Sanitization service" },
  { src: "/gallery/office-disinfection.webp", alt: "Office disinfection service" },
  { src: "/gallery/eco.png", alt: "Environment-friendly products" },
  { src: "/gallery/equipment.webp", alt: "Professional pest control equipments" },
];

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

        {/* Gallery Grid using ShadCN Cards */}
        <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((img) => (
            <Card
              key={img.src}
              className="overflow-hidden rounded-3xl shadow-md border border-emerald-100 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-t-3xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-emerald-800/80 text-white font-semibold text-center text-lg py-2 backdrop-blur-sm">
                    {img.alt}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
