"use client";

import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      title: "Termite Control",
      description: "Protect your wooden furniture and structures from termite damage.",
      link: "/services/termite-control",
    },
    {
      title: "Mosquito Control",
      description: "Keep your place safe from mosquito-borne diseases.",
      link: "/services/mosquito-control",
    },
    {
      title: "Rodent Control",
      description: "Eliminate rats and mice safely and effectively.",
      link: "/services/rodent-control",
    },
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-800">Our Services</h2>
        <p className="text-emerald-700 mt-2">
          Comprehensive pest control solutions for your hotels, hospitals and businesses.
        </p>
      </div>
      <div className="container mx-auto px-6 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
}
