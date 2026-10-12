# Null Peak . — From Zero to Found

Kathmandu-based digital agency site. Next.js 14 App Router + TypeScript + Tailwind CSS 3. Dark-first, ice-blue accent, Space Grotesk + Public Sans.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Edit content (no code needed)

- `src/content/site.ts` — brand, phone, WhatsApp, Instagram, URL
- `src/content/services.ts` — services
- `src/content/pricing.ts` — packages, FAQ (must match brief exactly)
- `src/content/work.ts` — projects + stats
- `src/content/reviews.ts` — testimonials

Add a project: append to `projects` in `src/content/work.ts` (a `/work/<slug>` case-study page is generated automatically + appears in the sitemap).

## Contact form

WhatsApp-first (no backend): `src/components/QuoteForm.tsx` — validation,
honeypot + 60s rate limit, prefilled `wa.me` send, success state.
To add email later (Resend/Formspree): POST the same payload in `handleSubmit`.

Test the flow: empty submit → inline errors; valid submit → WhatsApp opens + success panel; second submit within 60s → rate-limit message.

## SEO

- Unique title/description + canonical per page, `metadataBase` from `NEXT_PUBLIC_SITE_URL`.
- OG/Twitter cards via generated `/opengraph-image` (brand card, 1200×630).
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`.
- JSON-LD: Organization + LocalBusiness (layout), Service list (`/services`), FAQPage (`/pricing`).
- Keywords: web design Nepal, website Kathmandu, affordable website Nepal, Google Maps listing Nepal, AI agent Nepal.
- GSC: set `NEXT_PUBLIC_GSC_VERIFICATION` in `.env` (see `.env.example`).
- Analytics: Vercel Analytics in root layout (no cookies, privacy-friendly).

## Performance

- Fully static (all routes prerendered). Shared JS ~87KB; fonts via `next/font` with `display: swap`; `next/image` for logo; animations in `framer-motion` only, disabled under `prefers-reduced-motion`.
- To verify: `npm run build && npm start`, then in Chrome DevTools → Lighthouse → Mobile. Target 95+ in all four categories.

## Accessibility

- Skip-to-content link, semantic landmarks/headings, single `h1` per page, visible `:focus-visible` ring, 44px+ touch targets, `aria-live` form feedback, decorative SVGs `aria-hidden`, AA contrast in both themes.

## QA checklist (before every deploy)

- [ ] `npm run lint` clean, `npm run build` passes
- [ ] Prices match brief: Basic NPR 8,999 · Standard NPR 12,329 + Most Popular
- [ ] Spot-check 375px / 768px / 1440px (DevTools device toolbar)
- [ ] Contact form: error → success → rate-limit states
- [ ] No fake clients/numbers — only real data, TODOs marked
- [ ] `curl` sitemap, robots, OG image return 200

## Deploy (Vercel)

1. Push to GitHub, Import in Vercel (framework preset: Next.js).
2. Env: `NEXT_PUBLIC_SITE_URL=https://nullpeak.vercel.app` (switch to custom domain when ready — it flows into canonicals, sitemap, schema).
3. Deploy. Verify `/sitemap.xml`, `/robots.txt`, `/opengraph-image`.
4. Optional: enable Vercel Speed Insights; submit sitemap in Google Search Console.

## Design system

- Dark bg `#060A12`, surface `#0A101C`, accent ice-blue `#7DD3FC` / `#4EA8FF`, light mode via `.light` class + `localStorage np-theme`.
- Fonts via `next/font/google`: Space Grotesk (display), Public Sans (body), JetBrains Mono (labels).
- Components: `Container, SectionHeading, Button, Reveal, ClimbHero (0→▲ hero), Counters, QuoteForm, Chatbot (rule-based FAQ + WhatsApp handoff), Header, Footer, WhatsAppFloat, PeakMark, ThemeToggle`.
- Logo: `public/logo.png` (also used for manifest icon + schema.org logo).

## TODO placeholders

- Founder photo → `/public/founder.jpg` (`src/app/about/page.tsx`)
- Extra real testimonials (`src/content/reviews.ts`)
- Project screenshots (`/public/work/`)
- GSC token (`.env` → `NEXT_PUBLIC_GSC_VERIFICATION`)
- English/Nepali toggle (behind a flag — not built yet)
