"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center py-3 px-2.5 ">
        <Link href="/" className="font-bold text-xl text-emerald-700">
          Metro Pest Control
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem><Link href="/">Home</Link></NavigationMenuItem>
            <NavigationMenuItem><Link href="/services">Services</Link></NavigationMenuItem>
            <NavigationMenuItem><Link href="/about">About</Link></NavigationMenuItem>
            <NavigationMenuItem><Link href="/contact">Contact</Link></NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
