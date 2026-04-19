import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/sanity/lib/client";
import { faqsQuery, servicesQuery, reviewsQuery } from "@/sanity/lib/queries";
import type { Faq, Service, Review } from "@/types/sanity";
import FaqAccordion from "@/components/homepage/FaqAccordion";

export const metadata: Metadata = {
  title: "Vehicle Storage for Overlanders in Johannesburg | SAOS",
  description:
    "Secure 4x4 storage near OR Tambo, Johannesburg. Airport pickup, monthly checks, servicing and licensing — your trusted basecamp between Africa trips.",
};

const fallbackServices: Service[] = [
  { _id: "1", title: "Secure storage", icon: "", description: "Monitored, fenced, under-cover bays. Your vehicle is checked, not just parked.", order: 1 },
  { _id: "2", title: "Airport pickup and drop-off", icon: "", description: "Land tired. Skip the Uber. We meet you at OR Tambo and have you at the rig in 35 minutes.", order: 2 },
  { _id: "3", title: "Monthly vehicle checks", icon: "", description: "Battery turned over, tyres rotated, fluids checked. We send you the photo so you sleep easy on the long-haul.", order: 3 },
  { _id: "4", title: "Wash and detail before pickup", icon: "", description: "Show up to a clean rig. Not the dust-bowl you parked nine months ago.", order: 4 },
  { _id: "5", title: "Licensing and paperwork", icon: "", description: "Carnet expiring? Licence due? Customs query? We handle the South African admin so you don't lose a trip to bureaucracy.", order: 5 },
  { _id: "6", title: "Service and repairs", icon: "", description: "On-site fixes and trusted mechanics in our network. We project-manage; you keep planning the next leg.", order: 6 },
];

const fallbackFaqs: Faq[] = [
  { _id: "1", question: "How long can I leave my vehicle with you?", answer: "Anywhere from one week to multiple years. Most clients store between 3–12 months while they're back home between trips. There's no minimum.", order: 1 },
  { _id: "2", question: "Is it actually safe? Like, really safe?", answer: "Yes. Fenced facility, monitored 24/7, controlled access, located on a quiet road we know well. Your rig is also checked weekly — security isn't just walls; it's noticing when something is off.", order: 2 },
  { _id: "3", question: "What does it cost?", answer: "Pricing depends on vehicle size, length of stay, and which services you bundle in. Tell us about your trip in the enquiry form and we'll send a tailored quote within one business day. A pricing calculator is on the way.", order: 3 },
  { _id: "4", question: "Can you collect my vehicle from the port or shipping agent?", answer: "Yes. We work with most of the major shipping agents in Durban, Cape Town and Walvis Bay. We handle the collection, the paperwork, and the drive back to the facility.", order: 4 },
  { _id: "5", question: "I've never been to South Africa. What if I land and panic?", answer: "Send us your flight details. We'll be at OR Tambo with your name on a board. By the time you've cleared customs, your trip is already underway.", order: 5 },
  { _id: "6", question: "What happens in an emergency back home and I need to extend my stay?", answer: "Email or WhatsApp us. We adjust your booking, send a new schedule, and keep going. No drama, no penalty paperwork.", order: 6 },
  { _id: "7", question: "Do you store motorbikes? Trailers? Roof tents?", answer: "Yes to all three. Storage isn't only for full overland rigs — many clients leave gear, trailers, or bikes between trips.", order: 7 },
];

const fallbackReviews: Review[] = [
  { _id: "1", quote: "We left our Defender for 11 months between two trips. Came back to a vehicle that started first turn, full tank, washed, with the licence already renewed. We were on the N1 north before lunch.", authorName: "Marie & Pieter", country: "Belgium", vehicle: "Land Rover Defender 110", storedSince: "2023", order: 1 },
  { _id: "2", quote: "Antonie sent me a photo of my Hilux every month. By month four I stopped worrying. By month seven I started planning the next trip from my couch in Sydney.", authorName: "James", country: "Australia", vehicle: "Toyota Hilux", storedSince: "2024", order: 2 },
  { _id: "3", quote: "I had a customs problem I didn't even know existed. The team caught it, fixed it, and emailed me the paperwork. I was 9,000 km away. That's not storage. That's a partner.", authorName: "Tom", country: "UK", vehicle: "Iveco Daily 4x4", storedSince: "2022", order: 3 },
];

const steps = [
  { number: "01", title: "Tell us about your trip", body: "Fill in a 2-minute form. Vehicle, dates, what you need beyond storage. We reply same day on weekdays." },
  { number: "02", title: "Drop off your rig", body: "Bring it to the facility, or arrange a collection. We do a walk-through together so we know exactly what's yours and what's where." },
  { number: "03", title: "Fly home, get on with life", body: "Monthly check reports land in your inbox. Anything urgent, we WhatsApp before you ask." },
  { number: "04", title: "We pick you up. Your rig is ready.", body: "Land at OR Tambo, hop in our vehicle, sign back in, drive out. Most people are back on the road within 2 hours of touchdown." },
];

const differentiators = [
  { heading: "vs leaving it with a friend", body: "Friends are great. Friends also forget to start the engine for six months, don't have a workshop on-site, and won't answer the customs office. We do all three before breakfast." },
  { heading: "vs a generic storage yard", body: "Storage yards store cars. We store overland rigs — and we know the difference between a Hilux on holiday and a Defender mid-Cairo-to-Cape. The team has actually built, broken, and rebuilt vehicles like yours." },
  { heading: "vs doing nothing until you land", body: "Every week your vehicle sits unattended is a week of small problems compounding. By the time you fly back in, \"I'll deal with it then\" has cost you a fortnight of your trip. We catch it while you're still at home." },
];

const facilityPhotos = [
  { src: "/images/facility/20251218_145018.jpg", caption: "The yard. 28 km from OR Tambo, off the main road, fenced and watched." },
  { src: "/images/facility/20251218_150532.jpg", caption: "Under-cover bays. Your rig sits out of the sun, not under it." },
  { src: "/images/facility/20260211_095053.jpg", caption: "Monthly check in progress. Battery, tyres, fluids, photos." },
  { src: "/images/facility/20260312_140216.jpg", caption: "The workshop. Most things we fix here. The rest goes to people we trust." },
  { src: "/images/facility/20260313_124939.jpg", caption: "The gate. There's always someone here. That's the point." },
  { src: "/images/facility/IMG_1553.JPG", caption: "Every vehicle gets a proper walk-through at drop-off and pickup." },
];

const extraServices = [
  "South African vehicle licensing and renewals",
  "Carnet de Passage support",
  "Import / export and cross-border paperwork",
  "Vehicle servicing, minor and major",
  "Tyre, battery and fluid replacements",
  "Pre-trip inspection reports",
  "Wash, polish, and interior detail",
  "Local network: shipping agents, panel beaters, route planners",
  "Storage for trailers, roof tents, and gear between trips",
];

const WHATSAPP_URL = "https://wa.me/27614558784?text=Hi%20SAOS%20%E2%80%94%20I'm%20thinking%20about%20storing%20my%20vehicle%20with%20you.%20Can%20we%20chat%3F";

export default async function HomePage() {
  const [cmsServices, cmsFaqs, cmsReviews] = await Promise.all([
    sanityClient.fetch<Service[]>(servicesQuery).catch(() => []),
    sanityClient.fetch<Faq[]>(faqsQuery).catch(() => []),
    sanityClient.fetch<Review[]>(reviewsQuery).catch(() => []),
  ]);

  const services = cmsServices.length > 0 ? cmsServices : fallbackServices;
  const faqs = cmsFaqs.length > 0 ? cmsFaqs : fallbackFaqs;
  const reviews = cmsReviews.length > 0 ? cmsReviews : fallbackReviews;

  return (
    <>
      {/* ── Hero: text above, image below, fits viewport ── */}
      <div className="min-h-screen flex flex-col bg-parchment">
        {/* Text area */}
        <div className="flex-none px-4 pt-2 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cinnamon mb-4">
              Overlanding Vehicle Storage in Johannesburg
            </p>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
              {/* Col 1: H1 — left, unchanged */}
              <h1 className="font-heading text-4xl font-bold text-evergreen sm:text-5xl" style={{ lineHeight: 1.1 }}>
                Park your rig.<br />
                Catch your flight.<br />
                <span className="text-cinnamon">Come back ready to roll.</span>
              </h1>
              {/* Col 2: support text — pushed right to align with nav right edge */}
              <div className="lg:pl-10 lg:pr-8">
                <p className="text-base text-evergreen/70 leading-relaxed">
                  Secure, under-watch storage 28 km from O.R. Tambo — plus the airport pickups, services, and on-the-ground help that keep your African overland trip alive between flights home.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    data-red-cta
                    className="inline-block bg-cinnamon text-parchment px-7 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    Enquire about storage
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-evergreen text-evergreen px-7 py-3 rounded-lg font-semibold hover:bg-evergreen hover:text-parchment transition-colors"
                  >
                    WhatsApp the team
                  </a>
                </div>
                <p className="mt-4 text-sm text-evergreen/50">
                  Trusted by overlanders from 14+ countries · Mon–Sat · We answer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image fills remaining viewport */}
        <div className="flex-1 relative min-h-64">
          <Image
            src="/images/hero.png"
            alt="SAOS secure storage facility and African landscape"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* ── Trust strip ── */}
      <section className="bg-pine-teal text-parchment py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { stat: "24/7 monitored", label: "Secure facility" },
            { stat: "28 km", label: "From O.R. Tambo International" },
            { stat: "14+ countries", label: "Overlanders stored with us" },
            { stat: "Personal handover", label: "Every vehicle, every time" },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-xl font-bold text-parchment">{item.stat}</p>
              <p className="text-base text-khaki mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem agitation ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-khaki mb-3">
            The part of overlanding nobody talks about.
          </p>
          <h2 className="font-heading text-3xl font-bold text-evergreen sm:text-4xl leading-tight">
            Your Land Rover lands in Johannesburg.<br />Your flight home leaves in 8 hours.<br />Now what?
          </h2>
          <div className="mt-8 space-y-5 text-evergreen/80 leading-relaxed">
            <p>You've shipped your rig 14,000 km. You've burned the leave. You've planned the route across three borders.</p>
            <p>Then the trip ends and reality kicks in: you're flying home next week, your vehicle isn't going with you, and the visa clock starts again the moment you board.</p>
            <p>Most people figure they'll "leave it with a friend." A few weeks turns into nine months. The battery dies. The licence expires. The tyres flat-spot. Customs sends a letter nobody opens.</p>
            <p>By the time you're back at OR Tambo with a fresh duffel bag, the trip you came for is already half-eaten by problems you could have handed to someone else.</p>
            <p className="font-semibold text-evergreen">There's a better way to do this.</p>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cinnamon mb-3">The fix.</p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            Think of us less as storage.<br />More as your basecamp on the continent.
          </h2>
          <div className="mt-8 space-y-5 text-khaki leading-relaxed">
            <p>Southern Africa Overlander Storage was built by people who've done the trip — for people who are still in the middle of theirs.</p>
            <p>Drop your vehicle off the day before your flight. We pick you up at OR Tambo when you fly back in. Your rig is washed, charged, licensed, serviced, and parked exactly where you left it.</p>
            <p>No friend doing you a favour. No yard with a padlock and a prayer. A small team that knows your vehicle by name and answers the WhatsApp at 7am.</p>
          </div>
          <Link href="/contact" className="mt-8 inline-block border border-parchment text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Tell us about your trip
          </Link>
        </div>
      </section>

      {/* ── Services (CMS) ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-khaki mb-3">Services</p>
          <h2 className="font-heading text-3xl font-bold text-evergreen sm:text-4xl max-w-2xl leading-tight">
            Storage is just the start. Let's make sure you're ready.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s._id} className="bg-white rounded-xl p-6 border border-khaki/20 shadow-sm">
                {s.icon && <span className="text-3xl">{s.icon}</span>}
                <h3 className="font-heading text-lg font-semibold text-evergreen mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-evergreen/70 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-evergreen/60 max-w-2xl">
            Pick what you need. Skip what you don't. Most clients bundle storage with pickup and monthly checks — your enquiry is where we figure that out together.
          </p>
          <Link
            href="/calculate"
            data-red-cta
            className="mt-6 inline-block bg-cinnamon text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Calculate my Storage
          </Link>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-khaki mb-3">The whole thing, in 4 steps.</p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl max-w-xl leading-tight">
            Booking with us is the easy part of your trip.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <p className="font-heading text-5xl font-bold text-cinnamon opacity-60">{step.number}</p>
                <h3 className="font-heading text-lg font-semibold text-parchment mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-khaki leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            data-red-cta
            className="mt-12 inline-block bg-cinnamon text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Start step 1, enquire now
          </Link>
        </div>
      </section>

      {/* ── Why SAOS ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-3xl font-bold text-evergreen sm:text-4xl max-w-2xl leading-tight">
            Why overlanders pick us over the alternatives.
          </h2>
          <p className="mt-3 text-evergreen/60 max-w-xl">There aren't many people doing this in Southern Africa. Here's the difference between us and the rest.</p>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.heading} className="border-t-2 border-cinnamon pt-6">
                <h3 className="font-heading text-lg font-semibold text-evergreen mb-3">{d.heading}</h3>
                <p className="text-sm text-evergreen/70 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews (CMS) ── */}
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl max-w-xl leading-tight">
            The kind of people who trust us with their rig.
          </h2>
          <p className="mt-3 text-khaki">Real overlanders. Real trips. Real reasons they're back for round two.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r._id} className="bg-pine-teal rounded-xl p-6 flex flex-col gap-4">
                <div className="h-14 w-14 rounded-full bg-khaki/30 flex items-center justify-center text-2xl">
                  {r.photo ? (
                    <Image src={r.photo.asset as string} alt={r.authorName} fill className="object-cover rounded-full" />
                  ) : (
                    <span>👤</span>
                  )}
                </div>
                <p className="text-parchment/90 leading-relaxed italic text-sm">"{r.quote}"</p>
                <div className="mt-auto text-xs text-khaki">
                  <p className="font-semibold text-parchment">{r.authorName}{r.country ? `, ${r.country}` : ""}</p>
                  {(r.vehicle || r.storedSince) && (
                    <p>{[r.vehicle, r.storedSince ? `Stored since ${r.storedSince}` : ""].filter(Boolean).join(" · ")}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-khaki">
            Want to talk to one of them before you book?{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-cinnamon hover:underline">We'll connect you.</a>
          </p>
        </div>
      </section>

      {/* ── Facility gallery ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-3xl font-bold text-evergreen sm:text-4xl max-w-xl leading-tight">
            Take a look at where your vehicle will live.
          </h2>
          <p className="mt-3 text-evergreen/60 max-w-xl">Most decisions happen here. We get it. So have a proper look.</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilityPhotos.map((photo) => (
              <div key={photo.src} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-khaki/20">
                <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-evergreen/0 group-hover:bg-evergreen/70 transition-colors duration-300 flex items-end p-4">
                  <p className="text-parchment text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border border-evergreen text-evergreen px-8 py-3 rounded-lg font-semibold hover:bg-evergreen hover:text-parchment transition-colors">
            Want a video walkthrough? Ask for one
          </a>
        </div>
      </section>

      {/* ── Founder story ── */}
      <section className="bg-pine-teal text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            We are overlanders too.<br />That is the whole reason this exists.
          </h2>
          <div className="mt-8 space-y-5 text-khaki leading-relaxed">
            <p>Hi — Antonie here.</p>
            <p>A few years back I parked my own rig in Joburg between trips. Spent the entire flight home worrying about it. Spent half the next trip un-doing what nine months of neglect had done to it.</p>
            <p>So we built the place I wished existed.</p>
            <p>The team here are overlanders, mechanics, and South Africans who actually like solving problems before they become emergencies. We answer the phone. We send the photo. We pick you up at the airport. We get your paperwork sorted before you land.</p>
            <p>Because the time you've saved for this trip is short. And we'd rather you spent it driving than fixing.</p>
          </div>
          <div className="mt-8 h-48 w-full rounded-xl bg-evergreen/40 flex items-center justify-center text-khaki text-sm">
            Team photo coming soon
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-cinnamon text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Get in touch with Antonie directly
          </a>
        </div>
      </section>

      {/* ── Beyond storage ── */}
      <section className="bg-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-khaki mb-3">One more thing.</p>
          <h2 className="font-heading text-3xl font-bold text-evergreen sm:text-4xl max-w-2xl leading-tight">
            The stuff most people only realise they need once they're already gone.
          </h2>
          <ul className="mt-8 space-y-3">
            {extraServices.map((s) => (
              <li key={s} className="flex items-start gap-3 text-evergreen/80">
                <span className="mt-0.5 text-cinnamon font-bold">✓</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-evergreen/60">
            If you're not sure whether we do it, ask. Half the things on this list started as a client asking "can you help with..."
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border border-evergreen text-evergreen px-8 py-3 rounded-lg font-semibold hover:bg-evergreen hover:text-parchment transition-colors">
            Ask us about a specific service
          </a>
        </div>
      </section>

      {/* ── FAQ (CMS) ── */}
      <section className="bg-evergreen text-parchment py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl max-w-xl leading-tight">
            The questions everyone asks before booking.
          </h2>
          <div className="mt-10">
            <FaqAccordion faqs={faqs} />
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border border-parchment text-parchment px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Don't see your question? WhatsApp us
          </a>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-cinnamon text-parchment py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl leading-tight">
            Your next African trip starts the day you book the storage.
          </h2>
          <p className="mt-4 text-parchment/80 max-w-xl mx-auto leading-relaxed">
            Tell us about your vehicle and your dates. We'll come back to you within one business day with a tailored plan, a quote, and a real name to ask for when you land.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-evergreen text-parchment px-10 py-3 rounded-lg font-semibold hover:bg-pine-teal transition-colors">
              Enquire about storage
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-parchment text-parchment px-10 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              WhatsApp +27 61 455 8784
            </a>
          </div>
          <p className="mt-4 text-sm text-parchment/70">No deposit to enquire. No pushy follow-ups. Just an answer.</p>
        </div>
      </section>
    </>
  );
}
