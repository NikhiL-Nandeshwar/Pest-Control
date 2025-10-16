"use client";

import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition bg-white">
      <h3 className="text-xl font-semibold text-emerald-800 mb-2">{title}</h3>
      <p className="text-emerald-700 mb-4">{description}</p>
      <Link
        href={link}
        className="text-emerald-700 font-medium hover:underline"
      >
        Learn More →
      </Link>
    </div>
  );
}
