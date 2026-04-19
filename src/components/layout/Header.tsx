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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // true = a red CTA is visible in the viewport, so nav button stays plain
  const [redCtaVisible, setRedCtaVisible] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Watch for red CTA buttons in the viewport
  useEffect(() => {
    const targets = document.querySelectorAll("[data-red-cta]");
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => setRedCtaVisible(entries.some((e) => e.isIntersecting)),
      { threshold: 0.1 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) =>
    `px-3 py-2 rounded text-base font-medium transition-colors whitespace-nowrap ${
      pathname === href ? "text-cinnamon" : scrolled ? "text-parchment hover:text-cinnamon" : "text-evergreen hover:text-cinnamon"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-2xl px-5 sm:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-evergreen/50 backdrop-blur-md shadow-none"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="flex h-24 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/primary.svg"
              alt="Southern Africa Overlanding Storage"
              width={240}
              height={72}
              className={`h-14 w-auto object-contain transition-all duration-300 ${scrolled ? "brightness-0 invert" : ""}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Between Adventures + Calculate */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Between Adventures - styled like Calculate but parchment/plain */}
            <Link
              href="/journal"
              className={`text-base font-bold px-5 py-2.5 rounded-lg whitespace-nowrap border transition-colors ${
                scrolled
                  ? "border-parchment text-parchment hover:bg-parchment/10"
                  : "border-evergreen text-evergreen hover:bg-evergreen/10"
              } ${pathname === "/journal" ? "text-cinnamon border-cinnamon" : ""}`}
            >
              Between Adventures with SAOS
            </Link>

            {/* Calculate - red when no red CTA visible, plain when red CTA is on screen */}
            <Link
              href="/calculate"
              className={`text-base font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap transition-colors ${
                redCtaVisible
                  ? scrolled
                    ? "border border-parchment text-parchment hover:bg-parchment/10"
                    : "border border-evergreen text-evergreen hover:bg-evergreen/10"
                  : "bg-cinnamon text-parchment hover:bg-opacity-90"
              }`}
            >
              Calculate My Storage
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`xl:hidden p-2 transition-colors ${scrolled ? "text-parchment" : "text-evergreen"} hover:text-cinnamon`}
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
        <div className="xl:hidden mx-auto max-w-7xl mt-1 rounded-2xl bg-white shadow-lg px-5 pb-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-base border-b border-khaki/20 transition-colors ${
                pathname === link.href ? "text-cinnamon font-semibold" : "text-evergreen hover:text-cinnamon"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/journal"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-base font-bold border-b border-khaki/20 text-evergreen hover:text-cinnamon"
          >
            Between Adventures with SAOS
          </Link>
          <Link
            href="/calculate"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center bg-cinnamon text-parchment text-base font-semibold px-5 py-3 rounded-lg"
          >
            Calculate My Storage
          </Link>
        </div>
      )}
    </header>
  );
}
