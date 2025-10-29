"use client"

import { motion } from "framer-motion"
import { Building2, Home, Hotel, MapPin } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

// About us section
export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-white py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[url('/patterns/map-light.svg')] bg-cover bg-center opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 leading-tight">
              Metro <span className="text-emerald-600">Pest Management Services</span>
            </h2>

            <p className="text-emerald-700 text-lg mb-6 leading-relaxed">
              We are a professional pest management company operating across{" "}
              <span className="font-semibold">Maharashtra, Goa, and Karnataka</span>, 
              delivering safe and effective pest management solutions for homes, 
              hotels, offices, and industries.
            </p>

            <p className="text-emerald-700 text-lg mb-8 leading-relaxed">
              Our mission is simple — to create healthier, pest-free environments using
              eco-friendly products and trained technicians. With a focus on safety, hygiene,
              and customer satisfaction, we continue to expand across India.
            </p>

            <Separator className="max-w-[180px] bg-emerald-300 mb-10" />

            <div className="grid grid-cols-2 gap-6 text-left">
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start gap-3"
              >
                <Home className="text-emerald-700 w-8 h-8" />
                <div>
                  <h4 className="font-semibold text-emerald-900">Hospitals</h4>
                  <p className="text-emerald-700 text-sm">Safe pest control for hospitals and healthcare facilities.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start gap-3"
              >
                <Hotel className="text-emerald-700 w-8 h-8" />
                <div>
                  <h4 className="font-semibold text-emerald-900">Hotels</h4>
                  <p className="text-emerald-700 text-sm">Odorless, discreet services for premium spaces.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start gap-3"
              >
                <Building2 className="text-emerald-700 w-8 h-8" />
                <div>
                  <h4 className="font-semibold text-emerald-900">Commercial & Offices</h4>
                  <p className="text-emerald-700 text-sm">Maintain a clean, pest-free work environment.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-start gap-3"
              >
                <MapPin className="text-emerald-700 w-8 h-8" />
                <div>
                  <h4 className="font-semibold text-emerald-900">Expanding Reach</h4>
                  <p className="text-emerald-700 text-sm">Soon expanding to more states across India.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/about/team.jpg"
                alt="EcoShield Pest Control Team"
                width={600}
                height={400}
                className="object-cover w-full h-[400px] hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-emerald-900/20 hover:bg-emerald-900/10 transition" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white shadow-md rounded-2xl px-6 py-4 flex items-center gap-3 border border-emerald-100"
            >
              <MapPin className="text-emerald-600 w-6 h-6" />
              <p className="text-emerald-800 font-medium">Serving 3+ States & Growing</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
