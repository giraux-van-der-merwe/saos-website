import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { contactPageQuery } from "@/sanity/lib/queries";
import type { PageSingleton } from "@/types/sanity";

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityClient.fetch<PageSingleton | null>(contactPageQuery).catch(() => null);
  return {
    title: page?.seo?.metaTitle ?? "Contact | SAOS",
    description: page?.seo?.metaDescription ?? "Get in touch with the Southern Africa Overlanding Storage team.",
  };
}

export default async function ContactPage() {
  const page = await sanityClient.fetch<PageSingleton | null>(contactPageQuery).catch(() => null);

  return (
    <main className="min-h-screen bg-parchment">
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl leading-tight">
            {page?.pageHeading ?? "Contact Us"}
          </h1>
          {page?.pageIntro && (
            <p className="mt-6 text-lg text-khaki leading-relaxed">{page.pageIntro}</p>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-evergreen/50">
          <p className="text-lg">Contact form coming soon.</p>
        </div>
      </section>
    </main>
  );
}
