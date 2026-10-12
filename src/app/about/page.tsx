import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About — Built in Nepal, for Nepali business",
  description:
    "Null Peak is founder-led in Kathmandu. We exist so local shops, gyms, clinics and startups get found on Google and grow.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Plain words", "No jargon. If a first-time owner can't understand it, we rewrite it."],
  ["Fast on phones", "Most Nepali visitors are on mobile data. We build light and fast."],
  ["Honest prices", "Two packages, clear features. No hidden costs."],
  ["Found on Google", "A pretty site that nobody finds is useless. We fix discovery first."],
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16">
        <SectionHeading
          eyebrow="About"
          title="Founder-led. Built in Nepal."
          lede="Null Peak exists for one reason: helping local businesses get found. Null = zero, Peak = the top. We take you from invisible to growing."
        />
      </section>
      <Container className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold">Why we exist</h2>
          <p className="mt-3 leading-relaxed">
            Too many good shops in Kathmandu are invisible online. No website.
            No Google Maps. Customers search, find someone else, and walk away.
            We fix that — simply, affordably, fast.
          </p>
          <h2 className="mt-6 font-display text-xl font-bold">How we work</h2>
          <p className="mt-3 leading-relaxed">
            Talk → Design → Launch → Get Found. We write the words, handle the
            domain papers, set up Google, and stay on WhatsApp until you are happy.
          </p>
        </div>
        {/* Founder card — photo still TODO, name + bio are real */}
        <div className="card flex min-h-[280px] flex-col items-center justify-center p-8 text-center" aria-label="Founder">
          {/* TODO: add founder photo at /public/founder.jpg */}
          <div
            className="flex h-28 w-28 items-center justify-center rounded-full border font-display text-3xl font-bold text-peak-400"
            style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}
            role="img"
            aria-label="Photo of Hirdendra Acharya, coming soon"
          >
            ▲
          </div>
          <p className="mt-4 font-display text-xl font-bold">Hirdendra Acharya</p>
          <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
            Founder, Null Peak · Kathmandu
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Builds fast websites and AI products in Nepal — including HiPath AI —
            so local businesses get found and grow.
          </p>
          <p className="mt-2 max-w-xs font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
            TODO: founder photo → /public/founder.jpg
          </p>
        </div>
      </Container>
      <Container className="mt-4 grid gap-4 sm:grid-cols-2">
        {values.map(([t, d]) => (
          <div key={t} className="card p-6">
            <h3 className="font-display font-bold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{d}</p>
          </div>
        ))}
      </Container>
      <Container className="mt-8">
        <Button href={site.whatsapp} external>
          Say namaste on WhatsApp
        </Button>
      </Container>
    </>
  );
}
