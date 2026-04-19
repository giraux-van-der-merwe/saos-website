import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Secure Overlanding Storage in Southern Africa | SAOS",
  description:
    "Southern Africa Overlanding Storage — purpose-built, secure storage for your vehicle and gear between adventures.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Your Adventure Deserves a<br />
            <span className="text-cinnamon">Safe Base Camp</span>
          </h1>
          <p className="mt-6 text-lg text-khaki max-w-2xl mx-auto leading-relaxed">
            Purpose-built secure storage for overlanders and adventure
            travellers across Southern Africa. Between trips, your vehicle and
            gear are in trusted hands.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculate"
              className="inline-block bg-cinnamon text-parchment px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
            >
              Calculate My Storage
            </Link>
            <Link
              href="/storage-services"
              className="inline-block border border-parchment text-parchment px-8 py-3 rounded font-semibold hover:bg-pine-teal transition-colors"
            >
              View Storage Options
            </Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-parchment py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              title: "Secure & Monitored",
              body: "24/7 CCTV, access control, and on-site security so your equipment stays safe.",
            },
            {
              title: "Built for Overlanders",
              body: "Designed specifically for rooftop tents, trailers, bikes, and full rigs — not just boxes.",
            },
            {
              title: "Between Trips",
              body: "Flexible month-to-month agreements that work around your adventure calendar.",
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center px-4">
              <div className="mx-auto mb-4 h-1 w-12 bg-cinnamon rounded" />
              <h3 className="font-heading text-xl font-semibold text-evergreen mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-evergreen/70 leading-relaxed">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Ready to secure your rig?
        </h2>
        <p className="mt-4 text-khaki max-w-xl mx-auto">
          Find the right storage option for your vehicle and gear in minutes.
        </p>
        <Link
          href="/calculate"
          className="mt-8 inline-block bg-cinnamon text-parchment px-10 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
