import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem, MotionButton } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Our Facility — The Overlander Basecamp near OR Tambo | SAOS",
  description:
    "Your vehicle lives inside a repurposed aircraft hangar at Fly Inn Estate — a gated fly-in community 21 km north of O.R. Tambo, midway between Johannesburg and Pretoria.",
};

const WHATSAPP_URL =
  "https://wa.me/27614558784?text=Hi%20SAOS%20%E2%80%94%20I'm%20thinking%20about%20storing%20my%20vehicle%20with%20you.%20Can%20we%20chat%3F";

const locationStats = [
  { value: "21 km", label: "North of O.R. Tambo International" },
  { value: "~38 km", label: "To Johannesburg (Sandton)" },
  { value: "~25 km", label: "To Pretoria CBD" },
  { value: "Gated estate", label: "Private fly-in community, boom-controlled" },
];

const facilityPhotos = [
  { src: "/images/facility/20251218_145018.jpg", caption: "The boom gate at Fly Inn Estate. First layer of access." },
  { src: "/images/facility/20251218_150532.jpg", caption: "The hangar from the outside. Purpose-built for aircraft, repurposed for rigs." },
  { src: "/images/facility/20260211_095053.jpg", caption: "Inside the hangar. Clear span, height for roof tents up, space to walk around." },
  { src: "/images/facility/20260312_140216.jpg", caption: "A vehicle during its monthly check. Battery, tyres, fluids, photographed for the owner." },
  { src: "/images/facility/20260313_124939.jpg", caption: "Handover in progress. App open, walk-through logged, nothing un-recorded." },
  { src: "/images/facility/IMG_1553.JPG", caption: "Every vehicle gets a proper walk-through at drop-off and pickup." },
];

export default function OurFacilityPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-parchment pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="p" className="text-xs font-semibold uppercase tracking-widest text-cinnamon mb-4">
            Our Facility
          </FadeUp>
          <FadeUp as="h1" delay={0.05} className="font-heading text-4xl font-bold text-evergreen sm:text-5xl leading-tight">
            A repurposed aircraft hangar. Inside a private fly-in estate.
          </FadeUp>
          <FadeUp delay={0.1} className="mt-6 text-evergreen/70 leading-relaxed text-lg max-w-2xl">
            Your rig lives at Fly Inn Estate — a gated country aviation community roughly midway between Johannesburg and Pretoria, 21 km north of O.R. Tambo. Inside a hangar. Out of the weather. Quiet, private, and about as secure as residential storage gets.
          </FadeUp>
          <FadeUp delay={0.15} className="mt-8 flex flex-wrap gap-4">
            <MotionButton>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cinnamon text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Book a video walkthrough
              </a>
            </MotionButton>
            <MotionButton>
              <Link
                href="/calculate"
                className="inline-block border border-evergreen text-evergreen px-8 py-3 rounded-lg font-semibold hover:bg-evergreen hover:text-parchment transition-colors"
              >
                Calculate my storage
              </Link>
            </MotionButton>
          </FadeUp>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            Fly Inn Estate, Elandsfontein AH.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-6 text-khaki leading-relaxed">
            Fly Inn Estate is a private country aviation community in Elandsfontein, Gauteng. The kind of place where residents own their hangars and park the Cessna in the driveway. It&apos;s not a street you stumble onto. You arrive on six kilometres of gravel road, past the Serengeti Golf Estate, through the boom, and into a gated residential estate built around an airstrip.
          </FadeUp>
        </div>
        <StaggerContainer className="mx-auto max-w-7xl mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {locationStats.map((stat) => (
            <StaggerItem key={stat.value}>
              <p className="text-xl font-bold text-parchment">{stat.value}</p>
              <p className="text-base text-khaki mt-1">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Inside the Hangar ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold text-evergreen sm:text-4xl leading-tight">
            Inside a hangar. Not a yard. Not a shade net. Inside.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-8 space-y-5 text-evergreen/70 leading-relaxed">
            <p>The storage space is a repurposed aircraft hangar with a clear-span interior, no pillars in the middle to work around, and plenty of height for roof tents up, ladders out, and the occasional 6×6 oddity.</p>
            <p>Every vehicle is kept inside. Not under a shade net. Not parked next to three other cars. Inside a closed, covered, dry hangar, on a floor that doesn&apos;t move when the Joburg summer hits.</p>
            <p>If you&apos;re bringing something unusual — a bus conversion, a 6×6, a motorcycle-and-sidecar — tell us in the enquiry so we can plan the spot.</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Handover & Record-keeping ── */}
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            Every vehicle logged. Every time. Through the app.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-8 space-y-5 text-khaki leading-relaxed">
            <p>Drop-off and pickup happen through the <strong className="text-parchment">SAOS app</strong>. We walk around the vehicle with you, photograph every panel, record condition, mileage, fuel level, keys, spares, tools, and any personal items left behind.</p>
            <p>Everything is timestamped, stored against your account, and visible to both of us. You always have a current record of what shape your rig was in, on exactly which date, with exactly which photos.</p>
            <p>It&apos;s the reason nothing goes missing. And it&apos;s the reason we can tell you, down to the photograph, what state your vehicle was in any given month.</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Coordinated Work ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold text-evergreen sm:text-4xl leading-tight">
            We don&apos;t turn the wrenches. We make sure the right people do.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-8 space-y-5 text-evergreen/70 leading-relaxed">
            <p>There isn&apos;t a workshop on-site. SAOS keeps direct industry relationships with the workshops, panel shops, auto-electricians, and specialists in the area. We make sure that your vehicle is worked on by people who know what they are doing and are worth paying for.</p>
            <p>When your vehicle needs anything — a service, a Carnet-timed inspection, an electrical fault chased down — we brief the partner, move the vehicle, supervise the job, and double-check the work before it&apos;s signed off. You get one point of contact, no unnecessary invoices, and one clean channel of communication.</p>
          </FadeUp>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold sm:text-4xl max-w-xl leading-tight">
            Take a proper look.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-3 text-khaki max-w-xl leading-relaxed">
            The best decision you can make before booking is to see the place. If you can&apos;t visit in person, we&apos;ll walk the facility on video for you.
          </FadeUp>
          <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilityPhotos.map((photo) => (
              <StaggerItem key={photo.src}>
                <div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-khaki/20">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-evergreen/0 group-hover:bg-evergreen/70 transition-colors duration-300 flex items-end p-4">
                    <p className="text-parchment text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp delay={0.1} className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-parchment text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Want the video walkthrough? Ask for one
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-cinnamon text-parchment py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <FadeUp as="h2" className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            Come and see for yourself.
          </FadeUp>
          <FadeUp delay={0.05} className="mt-4 text-parchment/80 max-w-xl mx-auto leading-relaxed">
            If you&apos;re in Johannesburg, we&apos;ll make the coffee and walk you through the gate. If you&apos;re not, send a WhatsApp and we&apos;ll walk the hangar on video — same quality as being here, minus the coffee.
          </FadeUp>
          <FadeUp delay={0.1} className="mt-8 flex flex-wrap gap-4 justify-center">
            <MotionButton>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-evergreen text-parchment px-10 py-3 rounded-lg font-semibold hover:bg-pine-teal transition-colors"
              >
                WhatsApp the team
              </a>
            </MotionButton>
            <MotionButton>
              <Link
                href="/calculate"
                className="inline-block border border-parchment text-parchment px-10 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Calculate my storage
              </Link>
            </MotionButton>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
