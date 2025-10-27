"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/leaf-pattern.svg')] opacity-5 bg-repeat"></div>

      <div className="container relative mx-auto px-6 py-28 md:flex md:items-center md:justify-between">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:max-w-xl space-y-6 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 leading-tight">
            Safe. Effective.<br /> Reliable. <br />
            <span className="text-emerald-600">Pest Control Solutions</span>
          </h1>
          <p className="text-emerald-700 text-lg leading-relaxed">
            We safeguard homes, hotels, and workplaces with expert pest control — combining
            modern technology, skilled professionals, and eco-friendly practices for lasting protection.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-2 sm:items-center">
            <Link
              href="/contact"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Let’s Get in Touch
            </Link>
            <Link
              href="/services"
              className="text-emerald-700 font-medium hover:text-emerald-900 underline-offset-4 hover:underline transition"
            >
              Explore Our Services →
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-0 md:ml-10 relative"
        >
          <div className="absolute inset-0 bg-emerald-600/20 rounded-full blur-3xl w-96 h-96 mx-auto"></div>
          <Image
            src="/gallery/eco-friendly.jpg"
            alt="Professional pest control illustration"
            width={650}
            height={650}
            className="relative z-10 drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>

      {/* Decorative Bottom Curve */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ecfdf5"
          fillOpacity="1"
          d="M0,224L80,218.7C160,213,320,203,480,197.3C640,192,800,192,960,213.3C1120,235,1280,277,1360,298.7L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}
