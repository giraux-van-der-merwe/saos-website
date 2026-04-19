import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storage & Services",
  description: "Explore our range of secure vehicle and overlanding gear storage options and services.",
};

export default function StorageServicesPage() {
  return (
    <>
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Storage & Services</h1>
          <p className="mt-4 text-khaki text-lg">
            Purpose-built options for every type of overlanding setup.
          </p>
        </div>
      </section>
      <section className="bg-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center text-evergreen/50">
          <p className="text-lg">Storage options and pricing coming soon.</p>
        </div>
      </section>
    </>
  );
}
