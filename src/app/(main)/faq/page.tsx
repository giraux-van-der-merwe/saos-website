import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { faqPageContentQuery, faqsQuery } from "@/sanity/lib/queries";
import type { Faq, PageSingleton } from "@/types/sanity";
import FaqAccordion from "@/components/homepage/FaqAccordion";

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityClient.fetch<PageSingleton | null>(faqPageContentQuery).catch(() => null);
  return {
    title: page?.seo?.metaTitle ?? "FAQ | SAOS",
    description: page?.seo?.metaDescription ?? "Frequently asked questions about Southern Africa Overlanding Storage.",
  };
}

export default async function FaqPage() {
  const [page, faqs] = await Promise.all([
    sanityClient.fetch<PageSingleton | null>(faqPageContentQuery).catch(() => null),
    sanityClient.fetch<Faq[]>(faqsQuery).catch(() => []),
  ]);

  return (
    <main className="min-h-screen bg-parchment">
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl leading-tight">
            {page?.pageHeading ?? "Frequently Asked Questions"}
          </h1>
          {page?.pageIntro && (
            <p className="mt-6 text-lg text-khaki leading-relaxed">{page.pageIntro}</p>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {faqs.length > 0 ? (
            <FaqAccordion faqs={faqs} />
          ) : (
            <p className="text-evergreen/60">FAQ content coming soon.</p>
          )}
        </div>
      </section>
    </main>
  );
}
