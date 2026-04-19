import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Southern Africa Overlanding Storage and our mission.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">About SAOS</h1>
          <p className="mt-4 text-khaki text-lg">
            Built by overlanders, for overlanders.
          </p>
        </div>
      </section>
      <section className="bg-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-evergreen/50">
          <p className="text-lg">Our story coming soon.</p>
        </div>
      </section>
    </>
  );
}
