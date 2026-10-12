// Edit services without touching components.
export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  forWhom: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Websites",
    short: "4–5 page business sites that load fast on phones.",
    description:
      "A simple, fast website for your business: Home, Services, About, Reviews, Contact. Written in plain language so customers understand you in seconds.",
    forWhom: "For: gyms, clinics, restaurants, shops, schools.",
  },
  {
    slug: "domain-hosting",
    title: "Domain + Hosting",
    short: ".com.np setup, done for you.",
    description:
      "We register your .com.np domain and put your site online. We help submit the citizenship or company papers for free.",
    forWhom: "For: first-time owners who want zero paperwork stress.",
  },
  {
    slug: "google-presence",
    title: "Google presence",
    short: "Be found on Google Search and Maps.",
    description:
      "Search Console setup, Google Maps / Business listing improvement, plus Facebook page setup so customers find and trust you.",
    forWhom: "For: any shop customers search for by location.",
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    short: "Sell online with eSewa / Khalti ready.",
    description:
      "A small online shop for your products with digital payments from Nepal. Simple to update, easy to order on WhatsApp too.",
    forWhom: "For: retailers, bakeries, clothing, handicrafts.",
  },
  {
    slug: "web-apps",
    title: "Web Apps & SaaS",
    short: "Custom tools that run in the browser.",
    description:
      "Bookings, dashboards, billing helpers — custom web apps built around how your team actually works. Custom quote.",
    forWhom: "For: startups and growing teams.",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    short: "Android + iOS apps for your idea.",
    description:
      "From idea to Play Store. Simple first versions, then grow. Custom quote.",
    forWhom: "For: startups testing a new idea.",
  },
  {
    slug: "ai-agents",
    title: "AI Agents & automation",
    short: "Reply bots + workflow automation.",
    description:
      "WhatsApp / Instagram reply bots, chatbots, and workflow automation that answer customers when you are busy. Custom quote.",
    forWhom: "For: businesses drowning in repeat DMs.",
  },
];

export const customNote =
  "Need something custom? Tell us, we build it.";
