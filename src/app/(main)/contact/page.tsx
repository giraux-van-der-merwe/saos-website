import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Southern Africa Overlanding Storage team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-khaki text-lg">
            We'd love to hear from you.
          </p>
        </div>
      </section>
      <section className="bg-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center text-evergreen/50">
          <p className="text-lg">Contact form coming soon.</p>
        </div>
      </section>
    </>
  );
}
