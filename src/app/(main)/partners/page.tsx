import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description: "Our trusted partners in the overlanding and adventure travel community.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Partners</h1>
          <p className="mt-4 text-khaki text-lg">
            Trusted names in the overlanding community.
          </p>
        </div>
      </section>
      <section className="bg-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center text-evergreen/50">
          <p className="text-lg">Partner profiles coming soon.</p>
        </div>
      </section>
    </>
  );
}
