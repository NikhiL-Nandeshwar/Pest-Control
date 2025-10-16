"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // NEW

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about-section" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true); // MARK AS MOUNTED
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null; // WAIT UNTIL CLIENT MOUNT

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/20"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <span className="font-raleway text-xl text-emerald-700 font-bold">METRO</span>
          <span className="text-sm text-emerald-700 -mt-1">Pest Control</span>
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6 border-none">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <NavigationMenuItem key={item.href} className="border-none">
                  <Link
                    href={item.href}
                    className={`font-medium text-emerald-700 hover:text-emerald-900 transition-colors pb-1 border-b-2 ${
                      isActive ? "border-emerald-700" : "border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
