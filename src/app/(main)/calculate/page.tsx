import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { calculatePageQuery } from "@/sanity/lib/queries";
import type { PageSingleton } from "@/types/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityClient.fetch<PageSingleton | null>(calculatePageQuery).catch(() => null);
  return {
    title: page?.seo?.metaTitle ?? "Calculate My Storage | SAOS",
    description: page?.seo?.metaDescription ?? "Find out how much storage space you need for your vehicle and overlanding gear.",
  };
}

export default async function CalculatePage() {
  const page = await sanityClient.fetch<PageSingleton | null>(calculatePageQuery).catch(() => null);

  return (
    <main className="min-h-screen bg-parchment">
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl leading-tight">
            {page?.pageHeading ?? "Calculate My Storage"}
          </h1>
          {page?.pageIntro && (
            <p className="mt-6 text-lg text-khaki leading-relaxed">{page.pageIntro}</p>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-evergreen/50">
          <p className="text-lg">Storage calculator coming soon.</p>
        </div>
      </section>
    </main>
  );
}
