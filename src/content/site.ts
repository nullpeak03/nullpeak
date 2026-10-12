// Single source of truth for brand, contact + nav.
// Edit here — no component changes needed.
export const site = {
  name: "NULL PEAK .",
  shortName: "Null Peak",
  tagline: "From Zero to Found.",
  description:
    "Kathmandu-based digital agency. We take local businesses from invisible (zero) to found and growing (peak) — websites, Google presence, apps, AI agents.",
  locale: "en",
  // TODO: set canonical domain once decided (currently Vercel URL).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nullpeak.vercel.app",
  email: "hello@nullpeak.com",
  phoneDisplay: "+977 9868958081",
  phoneIntl: "9779868958081",
  whatsapp: "https://wa.me/9779868958081",
  instagram: "https://instagram.com/nullpeak",
  instagramHandle: "@nullpeak",
  address: "Kathmandu, Nepal",
  // Google Search Console verification placeholder (Phase 5).
  // TODO: paste real token into .env as NEXT_PUBLIC_GSC_VERIFICATION
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}
