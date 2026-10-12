// Pricing is law — must match the brief exactly.
export type Package = {
  name: string;
  price: string;
  tag?: string;
  features: string[];
};

export const packages: Package[] = [
  {
    name: "Basic",
    price: "NPR 8,999",
    features: [
      "4–5 page website (Home, Services, About, Reviews, Contact)",
      ".com.np domain for 1 year",
      "Google Search Console setup (we make you visible on Google)",
      "Mobile friendly",
      "WhatsApp button so customers can message directly",
      "Your 4.8★ Google reviews added to the website",
    ],
  },
  {
    name: "Standard",
    price: "NPR 12,329",
    tag: "Most Popular",
    features: [
      "Everything in Basic, plus:",
      "Google Maps listing improvement",
      "Facebook page setup",
      "1 month free maintenance",
    ],
  },
];

export const paymentNote =
  "Payment is flexible. Half now, the rest after the website is ready.";

export const domainNote =
  ".com.np requires a citizenship copy (individuals) or company registration documents (businesses); we help submit it for free.";

export const customCard = {
  title: "Apps / AI / SaaS",
  body: "Mobile apps, web apps, AI agents and automation are custom work. Tell us what you need — we give a clear, fixed quote.",
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What do I need to provide?",
    a: "Just your business name, photos, services and prices, and your logo if you have one. We write the words and handle the rest.",
  },
  {
    q: "How long does it take?",
    a: "Most business websites launch in 7–14 days after we have your photos and details. Custom apps and AI take longer — we give a date before we start.",
  },
  {
    q: "Do I own my website and domain?",
    a: "Yes. The domain is yours and the website is yours. We hand over everything.",
  },
  {
    q: "What happens after the free month?",
    a: "Nothing forced. If you want us to keep updating things, we offer simple monthly care. Otherwise the site keeps running on your domain + hosting.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. Start with Basic and move to Standard any time. We only charge the difference in work.",
  },
  {
    q: "Do you build custom apps or AI?",
    a: "Yes — web apps, mobile apps, WhatsApp/Instagram reply bots and workflow automation. Those are custom quotes. Talk to us.",
  },
];
