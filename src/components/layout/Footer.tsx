import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-evergreen text-parchment">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold text-parchment">
              Southern Africa<br />Overlanding Storage
            </h3>
            <p className="mt-3 text-sm text-khaki leading-relaxed">
              Purpose-built secure storage for overlanders and adventure
              travellers across Southern Africa.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-khaki mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-parchment hover:text-cinnamon transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-parchment hover:text-cinnamon transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-khaki mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm text-parchment">
              <li>
                <a
                  href="mailto:info@saos.co.za"
                  className="hover:text-cinnamon transition-colors"
                >
                  info@saos.co.za
                </a>
              </li>
              <li>
                <a
                  href="tel:+27000000000"
                  className="hover:text-cinnamon transition-colors"
                >
                  +27 00 000 0000
                </a>
              </li>
            </ul>

            {/* Social links — placeholders */}
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-khaki hover:text-cinnamon transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.563 9.875v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.887h-2.33v6.988A10.002 10.002 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-khaki hover:text-cinnamon transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-pine-teal pt-6 text-center text-xs text-khaki">
          © {new Date().getFullYear()} Southern Africa Overlanding Storage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
