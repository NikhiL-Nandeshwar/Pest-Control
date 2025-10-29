"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

// Navbar Component
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // For mobile menu

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about-section" },
    { label: "Work Showcase", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-white/20"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo + Tagline */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-16">
              <img
                src="/logo/logo_metro_pest.png"
                alt="Metro Pest Control Logo"
                className="object-contain w-full h-full"
              />
            </div>
            {/* <span className="text-[8px] text-emerald-700 font-semibold tracking-wider">
              PESTS OUT, PEACE IN
            </span> */}
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6 border-none">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href} className="border-none">
                    <Link
                      href={item.href}
                      className={`font-medium text-emerald-700 hover:text-emerald-900 transition-colors pb-1 border-b-2 ${isActive ? "border-emerald-700" : "border-transparent"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-emerald-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md w-full px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-emerald-700 font-medium py-2 border-b-2 ${isActive ? "border-emerald-700" : "border-transparent"
                  }`}
                onClick={() => setMobileOpen(false)} // close menu on click
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
