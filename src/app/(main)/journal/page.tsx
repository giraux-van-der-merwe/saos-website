import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Between Trips — Journal",
  description: "Stories, tips, and inspiration from the overlanding community.",
};

export default function JournalPage() {
  return (
    <>
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Between Trips</h1>
          <p className="mt-4 text-khaki text-lg">
            Stories, tips, and gear guides from the overlanding community.
          </p>
        </div>
      </section>
      <section className="bg-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center text-evergreen/50">
          <p className="text-lg">Journal posts coming soon.</p>
        </div>
      </section>
    </>
  );
}
