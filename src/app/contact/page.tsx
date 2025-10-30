"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-emerald-50 to-white pt-24 pb-16 px-6">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-emerald-700 mb-2">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you — drop us a message or visit us!
        </p>
      </motion.div>

      {/* Contact Form + Info */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/80 backdrop-blur-md shadow-xl border-none">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-emerald-700">Email</h4>
                  <p className="text-gray-600">admin@metropest.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-emerald-700">Phone</h4>
                  <p className="text-gray-600">+91 98500 80303</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-emerald-600" />
                <div>
                  <h4 className="font-semibold text-emerald-700">Address</h4>
                  <p className="text-gray-600">
                    Metro Pest Management Services, Rajarampuri 8th Lane, Kolhapur, Maharashtra
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-4"
        >
          <div>
            <label className="text-emerald-700 font-medium">Name</label>
            <Input {...register("name")} placeholder="Your Name" className="mt-1" />
          </div>
          <div>
            <label className="text-emerald-700 font-medium">Email</label>
            <Input {...register("email")} placeholder="you@example.com" className="mt-1" />
          </div>
          <div>
            <label className="text-emerald-700 font-medium">Message</label>
            <Textarea {...register("message")} placeholder="Type your message..." className="mt-1" />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button type="submit" className="w-full mt-2 bg-emerald-700 hover:bg-emerald-800 hover:cursor-pointer text-white font-semibold py-2">
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-20 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15286.558108935615!2d74.23240376102845!3d16.694912430402123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100135cbbb3b1%3A0x5e50b5b751d11201!2sMetro%20Pest%20Management%20Services!5e0!3m2!1sen!2sin!4v1760607912469!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </main>
  );
}
