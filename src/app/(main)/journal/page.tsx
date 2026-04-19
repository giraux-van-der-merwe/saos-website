import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/sanity/lib/client";
import { journalPageQuery, postsQuery } from "@/sanity/lib/queries";
import type { Post, PageSingleton } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata(): Promise<Metadata> {
  const page = await sanityClient.fetch<PageSingleton | null>(journalPageQuery).catch(() => null);
  return {
    title: page?.seo?.metaTitle ?? "Between Adventures — Journal | SAOS",
    description: page?.seo?.metaDescription ?? "Stories, tips, and inspiration from the overlanding community.",
  };
}

export default async function JournalPage() {
  const [page, posts] = await Promise.all([
    sanityClient.fetch<PageSingleton | null>(journalPageQuery).catch(() => null),
    sanityClient.fetch<Post[]>(postsQuery).catch(() => []),
  ]);

  return (
    <main className="min-h-screen bg-parchment">
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl leading-tight">
            {page?.pageHeading ?? "Between Adventures"}
          </h1>
          {page?.pageIntro && (
            <p className="mt-6 text-lg text-khaki leading-relaxed">{page.pageIntro}</p>
          )}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post._id} href={`/journal/${post.slug.current}`} className="group bg-white rounded-xl overflow-hidden border border-khaki/20 shadow-sm hover:shadow-md transition-all">
                  {post.coverImage && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={urlFor(post.coverImage).width(600).height(338).url()}
                        alt={post.coverImage.alt ?? post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.publishedAt && (
                      <p className="text-xs text-khaki mb-2">{new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                    )}
                    <h2 className="font-heading text-lg font-semibold text-evergreen group-hover:text-cinnamon transition-colors">{post.title}</h2>
                    {post.excerpt && <p className="mt-2 text-sm text-evergreen/70 leading-relaxed line-clamp-3">{post.excerpt}</p>}
                    <span className="mt-4 inline-block text-xs font-semibold text-cinnamon">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-evergreen/60">Journal posts coming soon.</p>
          )}
        </div>
      </section>
    </main>
  );
}
