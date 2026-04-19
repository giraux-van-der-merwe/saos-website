import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Southern Africa Overlanding Storage.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-pine-teal text-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        </div>
      </section>
      <section className="bg-parchment py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-evergreen/50">
          <p className="text-lg">Privacy policy content coming soon.</p>
        </div>
      </section>
    </>
  );
}
