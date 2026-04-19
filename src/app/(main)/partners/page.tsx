import type { Metadata } from "next";
import Image from "next/image";
import { sanityClient } from "@/sanity/lib/client";
import { partnersPageQuery, partnersQuery } from "@/sanity/lib/queries";
import type { Partner, PageSingleton } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityClient.fetch<PageSingleton | null>(partnersPageQuery).catch(() => null);
  return {
    title: page?.seo?.metaTitle ?? "Partners | SAOS",
    description: page?.seo?.metaDescription ?? "Our trusted partners in the overlanding and adventure travel community.",
  };
}

export default async function PartnersPage() {
  const [page, partners] = await Promise.all([
    sanityClient.fetch<PageSingleton | null>(partnersPageQuery).catch(() => null),
    sanityClient.fetch<Partner[]>(partnersQuery).catch(() => []),
  ]);

  return (
    <main className="min-h-screen bg-parchment">
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl leading-tight">
            {page?.pageHeading ?? "Partners"}
          </h1>
          {page?.pageIntro && (
            <p className="mt-6 text-lg text-khaki leading-relaxed">{page.pageIntro}</p>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {partners.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((p) => (
                <div key={p._id} className="bg-white rounded-xl p-6 border border-khaki/20 shadow-sm">
                  {p.logo && (
                    <div className="h-16 mb-4 relative">
                      <Image
                        src={urlFor(p.logo).height(64).url()}
                        alt={p.logo.alt ?? p.name}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  )}
                  <h2 className="font-heading text-lg font-semibold text-evergreen">{p.name}</h2>
                  {p.description && <p className="mt-2 text-sm text-evergreen/70 leading-relaxed">{p.description}</p>}
                  {p.website && (
                    <a href={p.website} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs font-semibold text-cinnamon hover:underline">
                      Visit website →
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-evergreen/60">Partner profiles coming soon.</p>
          )}
        </div>
      </section>
    </main>
  );
}
