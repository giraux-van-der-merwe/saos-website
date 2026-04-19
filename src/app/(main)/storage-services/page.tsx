import type { Metadata } from "next";
import Link from "next/link";
import { sanityClient } from "@/sanity/lib/client";
import { storageServicesPageQuery, servicesQuery } from "@/sanity/lib/queries";
import type { Service, PageSingleton } from "@/types/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityClient.fetch<PageSingleton | null>(storageServicesPageQuery).catch(() => null);
  return {
    title: page?.seo?.metaTitle ?? "Storage & Services | SAOS",
    description: page?.seo?.metaDescription ?? "Explore all storage and overlanding services offered by Southern Africa Overlanding Storage in Johannesburg.",
  };
}

export default async function StorageServicesPage() {
  const [page, services] = await Promise.all([
    sanityClient.fetch<PageSingleton | null>(storageServicesPageQuery).catch(() => null),
    sanityClient.fetch<Service[]>(servicesQuery).catch(() => []),
  ]);

  return (
    <main className="min-h-screen bg-parchment">
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl leading-tight">
            {page?.pageHeading ?? "Storage & Services"}
          </h1>
          {page?.pageIntro && (
            <p className="mt-6 text-lg text-khaki leading-relaxed">{page.pageIntro}</p>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const cardContent = (
                  <>
                    {s.icon && <span className="text-3xl">{s.icon}</span>}
                    <h2 className="font-heading text-xl font-semibold text-evergreen mt-3 mb-2">{s.title}</h2>
                    <p className="text-sm text-evergreen/70 leading-relaxed">{s.description}</p>
                    {s.slug?.current && (
                      <span className="mt-4 inline-block text-xs font-semibold text-cinnamon">Learn more →</span>
                    )}
                  </>
                );
                return s.slug?.current ? (
                  <Link
                    key={s._id}
                    href={`/storage-services/${s.slug.current}`}
                    className="bg-white rounded-xl p-6 border border-khaki/20 shadow-sm hover:shadow-md hover:border-cinnamon/40 transition-all"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div key={s._id} className="bg-white rounded-xl p-6 border border-khaki/20 shadow-sm">
                    {cardContent}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-evergreen/60">Services coming soon.</p>
          )}
        </div>
      </section>
    </main>
  );
}
