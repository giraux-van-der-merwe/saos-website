import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { ourFacilityPageQuery } from "@/sanity/lib/queries";
import type { PageSingleton } from "@/types/sanity";

interface OurFacilityPageData extends PageSingleton {
  galleryHeading?: string;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityClient.fetch<OurFacilityPageData | null>(ourFacilityPageQuery).catch(() => null);
  return {
    title: page?.seo?.metaTitle ?? "Our Facility | SAOS",
    description: page?.seo?.metaDescription ?? "Take a look at our secure, purpose-built overlanding storage facility.",
  };
}

export default async function OurFacilityPage() {
  const page = await sanityClient.fetch<OurFacilityPageData | null>(ourFacilityPageQuery).catch(() => null);

  return (
    <main className="min-h-screen bg-parchment">
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl leading-tight">
            {page?.pageHeading ?? "Our Facility"}
          </h1>
          {page?.pageIntro && (
            <p className="mt-6 text-lg text-khaki leading-relaxed">{page.pageIntro}</p>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center text-evergreen/50">
          <p className="text-lg">Facility details and photos coming soon.</p>
        </div>
      </section>
    </main>
  );
}
