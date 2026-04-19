import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Facility",
  description: "Take a look at our secure, purpose-built overlanding storage facility.",
};

export default function OurFacilityPage() {
  return (
    <>
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Our Facility</h1>
          <p className="mt-4 text-khaki text-lg">
            Built from the ground up for overlanders.
          </p>
        </div>
      </section>
      <section className="bg-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center text-evergreen/50">
          <p className="text-lg">Facility details and photos coming soon.</p>
        </div>
      </section>
    </>
  );
}
