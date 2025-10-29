"use client";

import { ShieldCheck, Leaf, Clock, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Certified Methods",
    desc: "We use safe, certified, professional chemicals that are safe for kids and pets.",
  },
  {
    icon: Leaf,
    title: "Sustainable Approach",
    desc: "Our professional and sustainable pest control ensures safety for your businesses and the environment.",
  },
  {
    icon: Clock,
    title: "Quick & Reliable Service",
    desc: "Get same-day inspection and fast pest removal by trained professionals.",
  },
  {
    icon: Award,
    title: "Experienced Professionals",
    desc: "With years of field expertise, we ensure effective, long-lasting pest control results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-800">Why Choose Us</h2>
        <p className="text-emerald-700 mt-2 mb-12">
          The Trusted Choice for Professional & Reliable Pest Control
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition border border-emerald-100"
            >
              <div className="flex justify-center mb-4">
                <Icon className="text-emerald-700 w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-800">{title}</h3>
              <p className="text-emerald-700 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
