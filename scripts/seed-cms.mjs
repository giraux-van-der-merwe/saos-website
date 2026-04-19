import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "s0kg7aow",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const services = [
  { _id: "service-1", _type: "service", order: 1, isActive: true, title: "Secure storage", icon: "", description: "Monitored, fenced, under-cover bays. Your vehicle is checked, not just parked." },
  { _id: "service-2", _type: "service", order: 2, isActive: true, title: "Airport pickup & drop-off", icon: "", description: "Land tired. Skip the Uber. We meet you at OR Tambo and have you at the rig in 35 minutes." },
  { _id: "service-3", _type: "service", order: 3, isActive: true, title: "Monthly vehicle checks", icon: "", description: "Battery turned over, tyres rotated, fluids checked. We send you the photo so you sleep easy on the long-haul." },
  { _id: "service-4", _type: "service", order: 4, isActive: true, title: "Wash & detail before pickup", icon: "", description: "Show up to a clean rig. Not the dust-bowl you parked nine months ago." },
  { _id: "service-5", _type: "service", order: 5, isActive: true, title: "Licensing & paperwork", icon: "", description: "Carnet expiring? Licence due? Customs query? We handle the South African admin so you don't lose a trip to bureaucracy." },
  { _id: "service-6", _type: "service", order: 6, isActive: true, title: "Service & repairs", icon: "", description: "On-site fixes and trusted mechanics in our network. We project-manage; you keep planning the next leg." },
];

const faqs = [
  { _id: "faq-1", _type: "faq", order: 1, isActive: true, question: "How long can I leave my vehicle with you?", answer: "Anywhere from one week to multiple years. Most clients store between 3–12 months while they're back home between trips. There's no minimum." },
  { _id: "faq-2", _type: "faq", order: 2, isActive: true, question: "Is it actually safe? Like, really safe?", answer: "Yes. Fenced facility, monitored 24/7, controlled access, located on a quiet road we know well. Your rig is also checked weekly — security isn't just walls; it's noticing when something is off." },
  { _id: "faq-3", _type: "faq", order: 3, isActive: true, question: "What does it cost?", answer: "Pricing depends on vehicle size, length of stay, and which services you bundle in. Tell us about your trip in the enquiry form and we'll send a tailored quote within one business day. A pricing calculator is on the way." },
  { _id: "faq-4", _type: "faq", order: 4, isActive: true, question: "Can you collect my vehicle from the port or shipping agent?", answer: "Yes. We work with most of the major shipping agents in Durban, Cape Town and Walvis Bay. We handle the collection, the paperwork, and the drive back to the facility." },
  { _id: "faq-5", _type: "faq", order: 5, isActive: true, question: "I've never been to South Africa. What if I land and panic?", answer: "Send us your flight details. We'll be at OR Tambo with your name on a board. By the time you've cleared customs, your trip is already underway." },
  { _id: "faq-6", _type: "faq", order: 6, isActive: true, question: "What happens in an emergency back home and I need to extend my stay?", answer: "Email or WhatsApp us. We adjust your booking, send a new schedule, and keep going. No drama, no penalty paperwork." },
  { _id: "faq-7", _type: "faq", order: 7, isActive: true, question: "Do you store motorbikes? Trailers? Roof tents?", answer: "Yes to all three. Storage isn't only for full overland rigs — many clients leave gear, trailers, or bikes between trips." },
];

const reviews = [
  { _id: "review-1", _type: "review", order: 1, isActive: true, authorName: "Marie & Pieter", country: "Belgium", vehicle: "Land Rover Defender 110", storedSince: "2023", quote: "We left our Defender for 11 months between two trips. Came back to a vehicle that started first turn, full tank, washed, with the licence already renewed. We were on the N1 north before lunch." },
  { _id: "review-2", _type: "review", order: 2, isActive: true, authorName: "James", country: "Australia", vehicle: "Toyota Hilux", storedSince: "2024", quote: "Antonie sent me a photo of my Hilux every month. By month four I stopped worrying. By month seven I started planning the next trip from my couch in Sydney." },
  { _id: "review-3", _type: "review", order: 3, isActive: true, authorName: "Tom", country: "UK", vehicle: "Iveco Daily 4x4", storedSince: "2022", quote: "I had a customs problem I didn't even know existed. The team caught it, fixed it, and emailed me the paperwork. I was 9,000 km away. That's not storage. That's a partner." },
];

async function seed() {
  const all = [...services, ...faqs, ...reviews];
  const mutations = all.map((doc) => ({ createOrReplace: doc }));

  try {
    const result = await client.mutate(mutations);
    console.log(`✓ Seeded ${result.results.length} documents`);
    console.log(`  ${services.length} services`);
    console.log(`  ${faqs.length} FAQs`);
    console.log(`  ${reviews.length} reviews`);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

seed();
