// ============================================================
// Innovia Member Landing — data model + content
// One entry per market/landing page. The [slug].astro route
// generates a static page for each member in this array.
// ============================================================

export interface Stat {
  value: string;          // "18"
  unit?: string;          // "yr", "+", "day", "★"
  label: string;          // "In the Valley"
}

export interface Review {
  quote: string;
  name: string;           // "Miranda L."
  role: string;           // "Board President · Single-family HOA"
  initials: string;       // "ML"
}

export interface Faq {
  q: string;
  a: string;              // may contain inline HTML (rendered with set:html)
}

export interface Member {
  slug: string;                       // URL segment: /find-a-management-company/<slug>/

  // ---- SEO / head ----
  metaTitle: string;                  // ≤ ~60 chars
  metaDescription: string;            // ≤ ~155 chars
  canonical: string;                  // absolute URL
  ogImage?: string;                   // absolute or site-root path

  // ---- Header / hero ----
  city: string;                       // header locator, e.g. "Phoenix, AZ"
  region: string;                     // hero crumb, e.g. "Phoenix & Maricopa County, AZ"
  headlineCity: string;               // H1 lead word, e.g. "Phoenix"
  stats: Stat[];                      // exactly 4 reads best

  // ---- Service area ----
  serviceAreaLabel: string;           // map overlay label
  areaBlurb: string;                  // paragraph under the section heading
  serviceCities: string[];            // coverage list chips

  // ---- Proof ----
  reviews: Review[];                  // board/homeowner reviews
  faqs: Faq[];                        // also feeds FAQ JSON-LD

  // ---- Contact (footer + schema) ----
  phoneDisplay: string;               // "(602) 555-0140"
  phoneTel: string;                   // "+16025550140"
  email: string;
  hoursNote: string;                  // "Mon–Fri · 8am–5pm MST · Phoenix, AZ"
  address: {
    street: string;
    locality: string;
    region: string;                   // state code, e.g. "AZ"
    postalCode: string;
    country: string;                  // "US"
  };

  // ---- Structured data ----
  businessName: string;               // legal/operating name behind the page
  rating: { value: string; count: string };
  areaServed: string[];               // cities for schema areaServed
  county: string;                     // e.g. "Maricopa County"
}

export const members: Member[] = [
  {
    slug: "phoenix",
    metaTitle: "HOA Management in Phoenix, AZ · Innovia Co-op",
    metaDescription:
      "Innovia-backed HOA & condo management in Phoenix & Maricopa County — independent local managers, national resources. Request a free proposal. Response in 2 business days.",
    canonical: "https://innoviaco-op.com/find-a-management-company/phoenix/",
    ogImage: "/assets/og/option-1-type-led.png",

    city: "Phoenix, AZ",
    region: "Phoenix & Maricopa County, AZ",
    headlineCity: "Phoenix",
    stats: [
      { value: "18", unit: "yr", label: "In the Valley" },
      { value: "120", unit: "+", label: "Communities" },
      { value: "2", unit: "day", label: "Proposal time" },
      { value: "4.8", unit: "★", label: "Avg. board rating" },
    ],

    serviceAreaLabel: "Service Area · Maricopa County, AZ",
    areaBlurb:
      "Boots-on-the-ground coverage throughout Phoenix and Maricopa County. If your community is on this map, a local manager can be on-site.",
    serviceCities: [
      "Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Tempe",
      "Glendale", "Peoria", "Goodyear", "Queen Creek", "Surprise", "Avondale",
    ],

    reviews: [
      { quote: "By far the best HOA management company I’ve dealt with in 14 years. Easy to work and communicate with, they handle any problem efficiently, and their professionalism is astounding.", name: "Miranda L.", role: "Board President · Single-family HOA", initials: "ML" },
      { quote: "Changing our management company was the best decision our board ever made. Years later that statement still holds true — a team of exceptional professionals.", name: "Dennis B.", role: "Treasurer · Condominium Association", initials: "DB" },
      { quote: "They fulfill their promises. Services are delivered on time and with real care — and if you have an issue, they give you guidance so you know you’re not being taken advantage of. For busy people, that’s priceless.", name: "Danielle A.", role: "Board Member · Townhome Community", initials: "DA" },
      { quote: "Excellent service since 2018. Before that we had a bad experience with another provider and were nervous about handing it over — they eliminated our concerns immediately, with real integrity and professionalism.", name: "Cindy M.", role: "Board President · Planned Community", initials: "CM" },
      { quote: "As president of our subdivision I could not be more pleased. The service is superior and I’ve experienced nothing but complete professionalism in resolving any issue. I couldn’t serve my community effectively without them.", name: "Charlie F.", role: "Board President · Master-planned HOA", initials: "CF" },
      { quote: "Our manager is committed to resolving issues quickly and judiciously — intelligent, thoughtful, and kind with everyone. As board president, I couldn’t ask for a better team to work with.", name: "David B.", role: "Board President · Condominium Association", initials: "DB" },
    ],

    faqs: [
      { q: "What does it cost to get a proposal?", a: "Nothing. A proposal and an initial conversation are free with no obligation. You’ll get a clear scope and transparent pricing tailored to your community’s size and needs." },
      { q: "How is an Innovia-backed company different from a big national?", a: "We’re independently owned and locally operated — your manager and your decisions stay here. Through the Innovia cooperative we add what the nationals have: pooled vendor pricing, manager training, and benchmarking data from 80+ companies and 1.4M+ households nationwide. You get local service <em>and</em> national resources, without becoming an account number." },
      { q: "We’re mid-contract with our current company. Can we still talk?", a: "Absolutely. Many boards explore options before a contract ends so they’re ready to make a smooth, well-timed transition. We’ll review your current agreement’s notice terms with you and map out a clean handoff — no disruption to homeowners." },
      { q: "How fast will someone respond?", a: "A local manager responds within two business days — often the same day. You’ll always reach a real person, not a national call center." },
      { q: "What size communities do you manage?", a: "From small self-managed associations making their first hire to master-planned communities of 1,000+ homes. The cooperative’s resources mean we can scale service to fit your community — and price it fairly either way." },
      { q: "Will switching disrupt our homeowners?", a: "A good transition is invisible to most owners. We handle records transfer, banking, the homeowner portal, and vendor handoffs on a defined timeline, and we communicate every change clearly so dues, requests, and service never skip a beat." },
    ],

    phoneDisplay: "(602) 555-0140",
    phoneTel: "+16025550140",
    email: "hello@example.com",
    hoursNote: "Mon–Fri · 8am–5pm MST · Phoenix, AZ",
    address: {
      street: "2200 E Camelback Rd, Suite 300",
      locality: "Phoenix",
      region: "AZ",
      postalCode: "85016",
      country: "US",
    },

    businessName: "Innovia Co-op — Phoenix",
    rating: { value: "4.8", count: "120" },
    areaServed: ["Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert", "Tempe"],
    county: "Maricopa County",
  },

  // ---- Add more markets by copying the object above and editing the fields ----
  // { slug: "tampa", metaTitle: "...", city: "Tampa, FL", ... },
];

export function getMember(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}
