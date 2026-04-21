import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem, MotionButton } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "About SAOS | Southern Africa Overlanding Storage",
  description:
    "Meet Antonie and Aldin — two young South African founders building a trusted support network for the overlanding community, starting with a secure hangar-based basecamp near Johannesburg.",
};

const WHATSAPP_URL =
  "https://wa.me/27614558784?text=Hi%20SAOS%20%E2%80%94%20I'm%20thinking%20about%20storing%20my%20vehicle%20with%20you.%20Can%20we%20chat%3F";

const values = [
  {
    heading: "Trust is built quietly.",
    body: "We tell you what we did, what we found, and what it cost. If something went wrong, you hear it from us first.",
  },
  {
    heading: "Your vehicle is treated as ours.",
    body: "Not a line on a spreadsheet. When we check it, we check it the way we would check our own.",
  },
  {
    heading: "Relationships over transactions.",
    body: "Most of our clients came through another overlander's WhatsApp. We earn that referral every single time — which is the only marketing strategy that actually matters.",
  },
  {
    heading: "Clarity over persuasion.",
    body: "You'll never get a hard sell from us. You'll get a straight answer, a clear quote, and the room to make your own call.",
  },
];

const whoWeAreFor = [
  "You want your vehicle kept trip-ready, not just stored.",
  "You'd rather get one straight answer than three inflated quotes.",
  "You value a small, involved team over a big, impersonal one.",
  "You want your rig treated the way we'd want ours treated.",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-parchment pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="p" className="text-xs font-semibold uppercase tracking-widest text-cinnamon mb-4">
            About SAOS
          </FadeUp>
          <FadeUp as="h1" delay={0.05} className="font-heading text-4xl font-bold text-evergreen sm:text-5xl leading-tight">
            Who looks after your vehicle when you go back home?
          </FadeUp>
          <FadeUp delay={0.1} className="mt-6 text-evergreen/70 leading-relaxed text-lg max-w-2xl">
            Southern Africa Overlander Storage was started by two young South Africans — Antonie Zeevaart and Aldin van Beest — who noticed that overlanders coming through Southern Africa didn&apos;t always get the safety and support they needed after they flew home. Not a friend&apos;s yard. Not a general storage facility. A place where someone actually cared.
          </FadeUp>
          <FadeUp delay={0.15} className="mt-8 flex flex-wrap gap-4">
            <MotionButton>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cinnamon text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                WhatsApp us
              </a>
            </MotionButton>
            <MotionButton>
              <Link
                href="/our-facility"
                className="inline-block border border-evergreen text-evergreen px-8 py-3 rounded-lg font-semibold hover:bg-evergreen hover:text-parchment transition-colors"
              >
                See the facility
              </Link>
            </MotionButton>
          </FadeUp>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            An industry gap we decided to close.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-8 space-y-5 text-khaki leading-relaxed">
            <p>Both of us grew up loving 4x4s and the outdoors. Family weekends in the bushveld, camping trips, and the kind of 4x4 culture you only get if you were raised near it. Meeting overlanders from across the world opened our eyes to how far people will go to experience the depth of Africa in their own rig.</p>
            <p>We also noticed that many overlanders were struggling with the same problem: extraordinary trips across Africa, then months of quiet worry about a vehicle sitting neglected in somebody&apos;s friend&apos;s yard while they flew home.</p>
            <p>The support we&apos;d have wanted in their position wasn&apos;t always available. So we built it.</p>
          </FadeUp>
        </div>
      </section>

      {/* ── The Founders ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold text-evergreen sm:text-4xl leading-tight">
            Two founders who answer their own phone.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-8 space-y-5 text-evergreen/70 leading-relaxed">
            <p>SAOS is run and administered by Antonie and Aldin themselves. No management layer, no customer service department, no handover between shifts. When you call, one of us picks up.</p>
            <p><strong className="text-evergreen">Antonie Zeevaart</strong> runs OLG — a 4x4 aftermarket business that started as a passion for equipment and grew into a business. He knows the workshops, the parts suppliers, the electrical specialists, the panel shops and which of them do work worth paying for.</p>
            <p><strong className="text-evergreen">Aldin van Beest</strong> is a qualified Millwright with a background in car-assembly manufacturing. He knows how vehicles are put together, and more usefully, what starts to go wrong when they sit unused for months at a time. Aldin builds the systems that help us look after your vehicle.</p>
            <p>We are passionate about overlanders — the people and the vehicles.</p>
          </FadeUp>
          <div className="mt-10 h-56 w-full rounded-xl bg-evergreen/10 flex items-center justify-center text-evergreen/40 text-sm">
            Team photo coming soon
          </div>
        </div>
      </section>

      {/* ── What We Care About ── */}
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold sm:text-4xl max-w-2xl leading-tight">
            A few things we hold to, even when nobody is watching.
          </FadeUp>
          <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.heading} className="border-t-2 border-cinnamon pt-6">
                <h3 className="font-heading text-lg font-semibold text-parchment mb-3">{v.heading}</h3>
                <p className="text-sm text-khaki leading-relaxed">{v.body}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── What We're Building ── */}
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            Not just one hangar. A support network across Southern Africa.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-8 space-y-5 text-khaki leading-relaxed">
            <p>SAOS is the first node of something bigger. The vision is a trusted support network for overlanders right across Southern Africa: a chain of people, workshops, shipping agents, and local experts that a traveller can rely on, wherever they are on the continent.</p>
            <p>Starting point: a secure hangar-based basecamp near Johannesburg, run by two people who care about getting it right. From there, we grow. We&apos;d rather build this slowly and well than quickly and badly.</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Who We're For ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold text-evergreen sm:text-4xl leading-tight">
            We&apos;re a good fit if:
          </FadeUp>
          <FadeUp delay={0.05}>
            <ul className="mt-8 space-y-4">
              {whoWeAreFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-evergreen/80">
                  <span className="mt-0.5 text-cinnamon font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-8 p-6 bg-evergreen/5 rounded-xl border border-evergreen/10">
            <p className="text-evergreen/80 leading-relaxed">
              <strong className="text-evergreen">We&apos;re probably not the cheapest storage solution in Southern Africa — and we&apos;re not trying to be.</strong> If price is your only metric, you&apos;ll find cheaper elsewhere. If peace of mind is your metric, we&apos;ll likely pay for ourselves in the first small problem we catch.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-cinnamon text-parchment py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            Come and say hello before you book.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-4 text-parchment/80 max-w-xl mx-auto leading-relaxed">
            No pressure, no quote forms. Send a WhatsApp, tell us what trip you&apos;re on, and we&apos;ll take it from there.
          </FadeUp>
          <FadeUp delay={0.1} className="mt-8 flex flex-wrap gap-4 justify-center">
            <MotionButton>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-evergreen text-parchment px-10 py-3 rounded-lg font-semibold hover:bg-pine-teal transition-colors"
              >
                WhatsApp us
              </a>
            </MotionButton>
            <MotionButton>
              <Link
                href="/contact"
                className="inline-block border border-parchment text-parchment px-10 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Tell us about your trip
              </Link>
            </MotionButton>
          </FadeUp>
          <FadeUp delay={0.15} className="mt-4 text-sm text-parchment/70">
            One business day reply. No deposit to enquire. No follow-up pressure.
          </FadeUp>
        </div>
      </section>
    </>
  );
}
