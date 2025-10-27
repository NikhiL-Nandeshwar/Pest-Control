"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Termite Control",
    description:
      "Protect the foundation, furniture, and wooden structures from costly termite damage. Our team uses advanced, eco-safe solutions that eliminate termite colonies and prevent recurrence.",
    image: "/services/termite.jpg",
  },
  {
    title: "Mosquito Control",
    description:
      "Say goodbye to mosquito bites and diseases like dengue, malaria, and chikungunya. We provide long-lasting treatment using WHO-approved repellents and safe indoor applications.",
    image: "/services/mosquito.png",
  },
  {
    title: "Rodent Control",
    description:
      "Our rodent control service ensures a safe, clean, and rodent-free environment. We identify entry points, deploy traps and repellents, and provide prevention strategies.",
    image: "/services/rodent-control.jpg",
  },
  {
    title: "Cockroach & Ant Control",
    description:
      "A targeted gel and spray treatment to remove cockroaches and ants without odor or mess — safe for children, pets, and kitchens.",
    image: "/services/cockroach.webp",
  },
  {
    title: "Bed Bug Treatment",
    description:
      "We use heat and non-toxic sprays to eradicate bed bugs from mattresses, sofas, and fabrics, ensuring a peaceful, itch-free sleep.",
    image: "/services/bed-bug.webp",
  },
]

export default function ServicesPage() {
  return (
    <section className="bg-gradient-to-b from-white via-emerald-50 to-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-emerald-800 mb-4"
          >
            Our Professional Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-emerald-700 text-lg max-w-2xl mx-auto"
          >
            We provide comprehensive pest control solutions designed to safeguard your
            hotels, hospitals, and industries with advanced, professional methods.
          </motion.p>
        </div>
      </div>

      <Separator className="mx-auto max-w-[200px] bg-emerald-300 mb-16" />

      {/* Service Sections */}
      <div className="container mx-auto px-6 space-y-24">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-10 items-center ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="object-cover w-full h-[350px] hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-emerald-950/10 hover:bg-emerald-900/20 transition duration-300" />
            </div>

            {/* Text */}
            <div className={`${i % 2 === 1 ? "lg:pl-10" : "lg:pr-10"}`}>
              <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                {service.title}
              </h2>
              <p className="text-emerald-700 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold group"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-32 bg-gray-100 py-16 text-center text-emerald-800"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Protect Your Property — Start Today
        </h2>
        <p className="text-emerald-600 mb-8 max-w-2xl mx-auto">
          From hotels, hospitals to large industries, we have custom pest control plans for every space and needs.
        </p>
        <Link
          href="/contact"
          className="bg-white border border-emerald-500 text-emerald-800 font-semibold px-8 py-3 rounded-full hover:bg-emerald-50 transition-all"
        >
          Let's Get in Touch
        </Link>
      </motion.div>
    </section>
  )
}
