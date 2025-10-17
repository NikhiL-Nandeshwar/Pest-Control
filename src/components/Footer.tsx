"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white mt-10">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Metro Pest Management</h2>
          <p className="text-sm text-emerald-100 leading-relaxed">
            Your trusted partner in eco-friendly pest control.
            We protect your home and business with safe, effective, and reliable solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-emerald-100">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/about-section" className="hover:text-white">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Work Showcase</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-emerald-100">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+919850080303" className="hover:text-white transition">
                +91 98500 80303
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:admin@metropestmanagement.in" className="hover:text-white transition">
                admin@metropestmanagement.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <a
                href="https://www.google.com/maps/search/Rajarampuri,+10th+Lane,+Kolhapur,+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Rajarampuri, 10th Lane, Kolhapur, Maharashtra
              </a>
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-white"><Facebook size={18} /></Link>
            <Link href="#" className="hover:text-white"><Instagram size={18} /></Link>
            <Link href="#" className="hover:text-white"><Twitter size={18} /></Link>
          </div>
        </div>
      </div>

      <Separator className="bg-emerald-600" />
      <div className="text-center py-4 text-sm text-emerald-100">
        © {new Date().getFullYear()} Metro Pest Control. All rights reserved.
      </div>
    </footer>
  )
}
