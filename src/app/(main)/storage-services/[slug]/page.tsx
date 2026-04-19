import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityClient } from "@/sanity/lib/client";
import { serviceBySlugQuery, servicesQuery } from "@/sanity/lib/queries";
import type { Service } from "@/types/sanity";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await sanityClient.fetch<Service[]>(servicesQuery).catch(() => []);
  return services
    .filter((s) => s.slug?.current)
    .map((s) => ({ slug: s.slug!.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await sanityClient.fetch<Service | null>(serviceBySlugQuery, { slug }).catch(() => null);
  if (!service) return {};
  return {
    title: `${service.title} | SAOS`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await sanityClient.fetch<Service | null>(serviceBySlugQuery, { slug }).catch(() => null);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-parchment">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <Link href="/storage-services" className="text-sm text-evergreen/60 hover:text-evergreen transition-colors">
          ← All services
        </Link>
        <div className="mt-8">
          {service.icon && <span className="text-5xl">{service.icon}</span>}
          <h1 className="font-heading text-4xl font-bold text-evergreen mt-4 sm:text-5xl leading-tight">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-evergreen/70 leading-relaxed">{service.description}</p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-block bg-cinnamon text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Enquire about this service
          </Link>
          <Link
            href="/storage-services"
            className="inline-block border border-evergreen text-evergreen px-8 py-3 rounded-lg font-semibold hover:bg-evergreen hover:text-parchment transition-colors"
          >
            View all services
          </Link>
        </div>
      </div>
    </main>
  );
}
