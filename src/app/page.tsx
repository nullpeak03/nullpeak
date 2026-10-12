import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ClimbHero } from "@/components/ClimbHero";
import { Counters } from "@/components/Counters";
import { services, customNote } from "@/content/services";
import { packages, paymentNote } from "@/content/pricing";
import { projects, stats } from "@/content/work";
import { reviews } from "@/content/reviews";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Web Design Nepal — From Zero to Found",
  description:
    "Null Peak builds fast, affordable websites for Nepali businesses — plus Google Maps, e-commerce, apps and AI agents. Kathmandu-based. Get a free quote on WhatsApp.",
  alternates: { canonical: "/" },
};

const steps = [
  ["01 · Talk", "Message us on WhatsApp. Tell us about your business in your own words."],
  ["02 · Design", "We design and write everything in simple words. You approve."],
  ["03 · Launch", "We launch your site + domain in 7–14 days. Fast on phones."],
  ["04 · Get Found", "Google setup done. Customers search, find you, call you."],
] as const;

export default function Home() {
  return (
    <>
      {/* HERO — headline + climbing 0→▲ visual */}
      <section aria-labelledby="hero-title" className="pt-12 sm:pt-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow">0 → ▲ &nbsp;·&nbsp; Kathmandu, Nepal</p>
              <h1
                id="hero-title"
                className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-mega text-balance sm:text-7xl"
              >
                We take your business from{" "}
                <span style={{ color: "var(--muted)" }}>zero</span> to{" "}
                <span className="text-peak-400">found.</span>
              </h1>
              <p
                className="mt-6 max-w-xl text-lg leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                No website? Customers can&apos;t find you. We build fast websites,
                fix your Google presence, and bring you more calls — in plain,
                simple language.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Get a Free Quote</Button>
                <Button
                  href={whatsappLink("Namaste Null Peak! I need a website for my business.")}
                  external
                  variant="ghost"
                >
                  Chat on WhatsApp
                </Button>
              </div>
              <ul
                className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em]"
                style={{ color: "var(--muted)" }}
                aria-label="Why trust us"
              >
                <li>✓ 15+ projects</li>
                <li>✓ Loads in &lt;2s</li>
                <li>✓ Replies in hours</li>
              </ul>
            </div>
            <Reveal delay={0.15} aria-hidden={false}>
              <ClimbHero />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section aria-label="Why you need this" className="mt-20 sm:mt-28">
        <SectionHeading
          eyebrow="The problem"
          title="No website? Customers can't find you."
          lede="Most customers search on their phone first. If Google can't find you, they pick someone else."
        />
        <Container className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
                Without us — zero
              </p>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed">
                <li>✕ No website — you look closed online.</li>
                <li>✕ Not on Google Maps — locals walk past you.</li>
                <li>✕ No WhatsApp button — customers give up.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full border-peak-400/40 p-6 sm:p-8" style={{ borderColor: "rgba(125,211,252,0.4)" }}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">
                With Null Peak — found
              </p>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed">
                <li><span aria-hidden="true" className="text-peak-400">✓</span> Fast website that works on cheap phones.</li>
                <li><span aria-hidden="true" className="text-peak-400">✓</span> Google Search + Maps setup, done for you.</li>
                <li><span aria-hidden="true" className="text-peak-400">✓</span> WhatsApp button — customers message in 1 tap.</li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SERVICES OVERVIEW */}
      <section aria-label="Services overview" className="mt-20 sm:mt-28">
        <SectionHeading eyebrow="What we do" title="Simple services, clear prices." />
        <Container className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <Reveal key={s.slug}>
              <Link
                href="/services"
                aria-label={`${s.title} — see all services`}
                className="card group block h-full p-6 transition-all duration-150 hover:-translate-y-1 hover:border-peak-400/50 hover:shadow-glow"
              >
                <h3 className="font-display text-lg font-bold">
                  {s.title}{" "}
                  <span aria-hidden="true" className="inline-block text-peak-400 transition-transform duration-150 group-hover:translate-x-1">→</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.short}
                </p>
              </Link>
            </Reveal>
          ))}
        </Container>
        <Container className="mt-6">
          <p className="text-sm" style={{ color: "var(--muted)" }}>{customNote}</p>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section aria-label="How it works" className="mt-20 sm:mt-28">
        <SectionHeading eyebrow="How it works" title="Talk → Design → Launch → Get Found." />
        <Container className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="card relative h-full p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">{t}</p>
                <p className="mt-2 text-sm leading-relaxed">{d}</p>
                {i < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 hidden h-px w-6 lg:block"
                    style={{ background: "rgba(125,211,252,0.4)" }}
                  />
                ) : null}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* WORK */}
      <section aria-label="Featured work" className="mt-20 sm:mt-28">
        <SectionHeading eyebrow="Work" title="Real businesses, found on Google." />
        <Container className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <article className="card group h-full p-6 transition-all duration-150 hover:-translate-y-1 hover:border-peak-400/50 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">{p.category}</p>
                  <span
                    className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-widest"
                    style={{ borderColor: "var(--line)", color: "var(--muted)" }}
                  >
                    {p.status === "live" ? "● Live" : "◌ In progress"}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/work/${p.slug}`}
                    className="btn-base border px-5 py-2 text-sm"
                    style={{ borderColor: "var(--line)" }}
                  >
                    Case study →
                  </Link>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold underline decoration-peak-400 decoration-2 underline-offset-4 hover:text-peak-400"
                    >
                      Visit live site ↗
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* STATS */}
      <section aria-label="Stats" className="mt-20 sm:mt-28">
        <Container>
          <Reveal>
            <Counters stats={stats} />
          </Reveal>
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
            Honest numbers only — no fake awards
          </p>
        </Container>
      </section>

      {/* TESTIMONIAL */}
      <section aria-label="Testimonial" className="mt-20 sm:mt-28">
        <Container>
          <Reveal>
            <figure className="card p-8 sm:p-12">
              <div aria-label="5 out of 5 stars" className="font-bold tracking-widest text-peak-400">
                ★★★★★
              </div>
              <blockquote className="mt-3 max-w-2xl font-display text-xl font-medium leading-relaxed sm:text-2xl">
                “{reviews[0].quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
                — {reviews[0].name}, {reviews[0].role}
              </figcaption>
              <Link
                href="/reviews"
                className="mt-6 inline-block text-sm font-semibold underline decoration-peak-400 decoration-2 underline-offset-4 hover:text-peak-400"
              >
                Read all reviews →
              </Link>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* PRICING TEASER */}
      <section aria-label="Pricing teaser" className="mt-20 sm:mt-28">
        <SectionHeading eyebrow="Pricing" title="One clear price. No surprises." lede={paymentNote} />
        <Container className="mt-8 grid gap-4 md:grid-cols-2">
          {packages.map((p) => (
            <Reveal key={p.name}>
              <article
                className="card relative h-full p-6 transition-all duration-150 hover:-translate-y-1 sm:p-8"
                style={p.tag ? { borderColor: "rgba(125,211,252,0.4)" } : undefined}
              >
                {p.tag ? (
                  <p className="absolute -top-3 left-6 rounded-full bg-peak-400 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-ink-950">
                    {p.tag}
                  </p>
                ) : null}
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-1 font-display text-4xl font-bold text-peak-400 sm:text-5xl">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex gap-2 leading-relaxed">
                      <span aria-hidden="true" className="text-peak-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/pricing" variant="ghost">See full pricing</Button>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* FINAL CTA */}
      <section aria-label="Get started" className="mt-20 sm:mt-28">
        <Container>
          <Reveal>
            <div className="card p-8 text-center sm:p-14">
              <h2 className="mx-auto max-w-xl font-display text-3xl font-bold tracking-mega text-balance sm:text-5xl">
                Ready to go from zero to found?
              </h2>
              <p className="mx-auto mt-4 max-w-md" style={{ color: "var(--muted)" }}>
                Message us today. We reply fast, in simple words.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact">Get a Free Quote</Button>
                <Button href={site.whatsapp} external variant="ghost">
                  WhatsApp {site.phoneDisplay}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
