"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Storage & Services", href: "/storage-services" },
  { label: "Our Facility", href: "/our-facility" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled
            ? "bg-transparent shadow-none"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-4">

          {/* Logo — full SVG primary, renders black on white nav */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/primary.svg"
              alt="Southern Africa Overlanding Storage"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? "text-cinnamon font-semibold"
                    : scrolled
                    ? "text-parchment hover:text-cinnamon"
                    : "text-evergreen hover:text-cinnamon"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Between Adventures + Calculate CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Link
              href="/journal"
              className={`text-sm font-bold whitespace-nowrap transition-colors ${
                scrolled
                  ? "text-parchment hover:text-cinnamon"
                  : "text-evergreen hover:text-cinnamon"
              } ${pathname === "/journal" ? "text-cinnamon" : ""}`}
            >
              Between Adventures with SAOS
            </Link>
            <Link
              href="/calculate"
              className="bg-cinnamon text-parchment text-sm font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap hover:bg-opacity-90 transition-colors"
            >
              Calculate My Storage
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`xl:hidden p-2 transition-colors ${
              scrolled ? "text-parchment" : "text-evergreen"
            } hover:text-cinnamon`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden mx-auto max-w-7xl mt-1 rounded-xl bg-white shadow-lg px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm border-b border-khaki/20 transition-colors ${
                pathname === link.href
                  ? "text-cinnamon font-semibold"
                  : "text-evergreen hover:text-cinnamon"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/journal"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-bold border-b border-khaki/20 text-evergreen hover:text-cinnamon"
          >
            Between Adventures with SAOS
          </Link>
          <Link
            href="/calculate"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block text-center bg-cinnamon text-parchment text-sm font-semibold px-5 py-3 rounded-lg"
          >
            Calculate My Storage
          </Link>
        </div>
      )}
    </header>
  );
}
