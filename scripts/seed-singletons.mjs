import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "s0kg7aow",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// ── Site Settings ──────────────────────────────────────────────────────────────
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteName: "Southern Africa Overlanding Storage",
  tagline: "Your basecamp between African trips.",
  contactEmail: "info@saos.co.za",
  contactPhone: "+27 61 455 8784",
  address: {
    city: "Johannesburg",
    province: "Gauteng",
    country: "South Africa",
  },
  socialLinks: {
    whatsapp: "27614558784",
  },
};

// ── Home Page ──────────────────────────────────────────────────────────────────
const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroHeadline: "Park your rig. Catch your flight. Come back ready to roll.",
  heroSupportText:
    "Secure, under-watch storage 28 km from O.R. Tambo — plus the airport pickups, services, and on-the-ground help that keep your African overland trip alive between flights home.",
  heroCtaPrimary: "Enquire about storage",
  heroCtaSecondary: "WhatsApp the team",
  trustStats: [
    { _key: "stat-1", value: "24/7 monitored", label: "Secure facility" },
    { _key: "stat-2", value: "28 km", label: "From O.R. Tambo International" },
    { _key: "stat-3", value: "14+ countries", label: "Overlanders stored with us" },
    { _key: "stat-4", value: "Personal handover", label: "Every vehicle, every time" },
  ],
  solutionHeading: "Think of us less as storage. More as your basecamp on the continent.",
  solutionBody:
    "Southern Africa Overlander Storage was built by people who've done the trip — for people who are still in the middle of theirs.\n\nDrop your vehicle off the day before your flight. We pick you up at OR Tambo when you fly back in. Your rig is washed, charged, licensed, serviced, and parked exactly where you left it.\n\nNo friend doing you a favour. No yard with a padlock and a prayer. A small team that knows your vehicle by name and answers the WhatsApp at 7am.",
  servicesHeading: "Storage is just the start. Let's make sure you're ready.",
  howItWorksHeading: "Booking with us is the easy part of your trip.",
  howItWorksSteps: [
    {
      _key: "step-1",
      stepNumber: "01",
      title: "Tell us about your trip",
      description: "Fill in a 2-minute form. Vehicle, dates, what you need beyond storage. We reply same day on weekdays.",
    },
    {
      _key: "step-2",
      stepNumber: "02",
      title: "Drop off your rig",
      description: "Bring it to the facility, or arrange a collection. We do a walk-through together so we know exactly what's yours and what's where.",
    },
    {
      _key: "step-3",
      stepNumber: "03",
      title: "Fly home, get on with life",
      description: "Monthly check reports land in your inbox. Anything urgent, we WhatsApp before you ask.",
    },
    {
      _key: "step-4",
      stepNumber: "04",
      title: "We pick you up. Your rig is ready.",
      description: "Land at OR Tambo, hop in our vehicle, sign back in, drive out. Most people are back on the road within 2 hours of touchdown.",
    },
  ],
  whySaosHeading: "Why overlanders pick us over the alternatives.",
  whySaosPoints: [
    {
      _key: "why-1",
      title: "vs leaving it with a friend",
      description:
        "Friends are great. Friends also forget to start the engine for six months, don't have a workshop on-site, and won't answer the customs office. We do all three before breakfast.",
    },
    {
      _key: "why-2",
      title: "vs a generic storage yard",
      description:
        "Storage yards store cars. We store overland rigs — and we know the difference between a Hilux on holiday and a Defender mid-Cairo-to-Cape. The team has actually built, broken, and rebuilt vehicles like yours.",
    },
    {
      _key: "why-3",
      title: "vs doing nothing until you land",
      description:
        "Every week your vehicle sits unattended is a week of small problems compounding. By the time you fly back in, \"I'll deal with it then\" has cost you a fortnight of your trip. We catch it while you're still at home.",
    },
  ],
  founderHeading: "We are overlanders too. That is the whole reason this exists.",
  founderBody:
    "Hi — Antonie here.\n\nA few years back I parked my own rig in Joburg between trips. Spent the entire flight home worrying about it. Spent half the next trip un-doing what nine months of neglect had done to it.\n\nSo we built the place I wished existed.\n\nThe team here are overlanders, mechanics, and South Africans who actually like solving problems before they become emergencies. We answer the phone. We send the photo. We pick you up at the airport. We get your paperwork sorted before you land.\n\nBecause the time you've saved for this trip is short. And we'd rather you spent it driving than fixing.",
  finalCtaHeading: "Your next African trip starts the day you book the storage.",
  finalCtaBody:
    "Tell us about your vehicle and your dates. We'll come back to you within one business day with a tailored plan, a quote, and a real name to ask for when you land.",
};

// ── Other Page Singletons ──────────────────────────────────────────────────────
const pageSingletons = [
  {
    _id: "storageServicesPage",
    _type: "storageServicesPage",
    pageHeading: "Storage & Services",
    pageIntro: "Purpose-built options for every type of overlanding setup. From basic secure storage to full trip management — pick what you need.",
  },
  {
    _id: "ourFacilityPage",
    _type: "ourFacilityPage",
    pageHeading: "Our Facility",
    pageIntro: "Built from the ground up for overlanders. Secure, monitored, and 28 km from OR Tambo.",
    galleryHeading: "Take a look around.",
  },
  {
    _id: "partnersPage",
    _type: "partnersPage",
    pageHeading: "Our Partners",
    pageIntro: "Trusted names in the overlanding and adventure travel community — people and businesses we work with and recommend.",
  },
  {
    _id: "journalPage",
    _type: "journalPage",
    pageHeading: "Between Adventures",
    pageIntro: "Stories, tips, and gear guides from the overlanding community.",
  },
  {
    _id: "faqPageContent",
    _type: "faqPageContent",
    pageHeading: "Frequently Asked Questions",
    pageIntro: "Everything you need to know before storing with us. Don't see your question? WhatsApp us.",
  },
  {
    _id: "contactPage",
    _type: "contactPage",
    pageHeading: "Get in Touch",
    pageIntro: "Tell us about your vehicle and your trip. We'll come back to you within one business day.",
  },
  {
    _id: "calculatePage",
    _type: "calculatePage",
    pageHeading: "Calculate My Storage",
    pageIntro: "Tell us about your rig and your dates. We'll work out what you need and send a tailored quote.",
  },
];

// ── Service slug patches ───────────────────────────────────────────────────────
const serviceSlugs = [
  { id: "service-1", slug: "secure-storage" },
  { id: "service-2", slug: "airport-pickup-drop-off" },
  { id: "service-3", slug: "monthly-vehicle-checks" },
  { id: "service-4", slug: "wash-detail" },
  { id: "service-5", slug: "licensing-paperwork" },
  { id: "service-6", slug: "service-repairs" },
];

async function seed() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error("❌ SANITY_API_TOKEN is not set. Run: SANITY_API_TOKEN=<token> node scripts/seed-singletons.mjs");
    process.exit(1);
  }

  const docs = [siteSettings, homePage, ...pageSingletons];
  const createMutations = docs.map((doc) => ({ createOrReplace: doc }));

  try {
    const result = await client.mutate(createMutations);
    console.log(`✓ Seeded ${result.results.length} singleton documents`);
  } catch (err) {
    console.error("❌ Singleton seed failed:", err.message);
    process.exit(1);
  }

  // Patch service slugs
  let slugPatched = 0;
  for (const { id, slug } of serviceSlugs) {
    try {
      await client.patch(id).set({ slug: { _type: "slug", current: slug } }).commit();
      slugPatched++;
    } catch {
      console.warn(`  ⚠ Could not patch ${id} — document may not exist yet`);
    }
  }
  console.log(`✓ Patched slugs on ${slugPatched}/${serviceSlugs.length} service documents`);
  console.log("\nDone! Open saos-website.sanity.studio to review the seeded content.");
}

seed();
