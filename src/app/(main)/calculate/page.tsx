import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculate My Storage",
  description: "Find out how much storage space you need for your vehicle and overlanding gear.",
};

export default function CalculatePage() {
  return (
    <>
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Calculate My Storage</h1>
          <p className="mt-4 text-khaki text-lg">
            Tell us about your rig and we'll find the right storage size for you.
          </p>
        </div>
      </section>
      <section className="bg-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-evergreen/50">
          <p className="text-lg">Storage calculator coming soon.</p>
        </div>
      </section>
    </>
  );
}
