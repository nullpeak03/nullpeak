import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { packages, paymentNote, domainNote, customCard, faqs } from "@/content/pricing";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing — NPR 8,999 Basic · NPR 12,329 Standard",
  description:
    "Simple website pricing Nepal: Basic NPR 8,999, Standard NPR 12,329 (Most Popular). Half now, rest after launch. Apps & AI = custom quote.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <section className="pt-16">
        <SectionHeading
          eyebrow="Pricing"
          title="One clear price. No surprises."
          lede={paymentNote}
        />
      </section>

      <Container className="mt-10 grid gap-4 md:grid-cols-2">
        {packages.map((p) => (
          <Reveal key={p.name}>
            <article
              className="card relative h-full p-6 sm:p-8"
              style={p.tag ? { boxShadow: "var(--tw-shadow)", borderColor: "rgba(125,211,252,0.4)" } : undefined}
            >
              {p.tag ? (
                <p className="absolute -top-3 left-6 rounded-full bg-peak-400 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-ink-950">
                  {p.tag}
                </p>
              ) : null}
              <h2 className="font-display text-lg font-bold">{p.name}</h2>
              <p className="mt-1 font-display text-4xl font-bold text-peak-400 sm:text-5xl">{p.price}</p>
              <ul className="mt-5 space-y-2.5 text-[15px]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 leading-relaxed">
                    <span aria-hidden="true" className="text-peak-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href={whatsappLink(`Namaste Null Peak! I want the ${p.name} package (${p.price}).`)}
                  external
                >
                  Choose {p.name}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </Container>

      <Container className="mt-4 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6">
            <h2 className="font-display font-bold">{customCard.title}</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{customCard.body}</p>
            <div className="mt-4">
              <Button href="/contact" variant="ghost">Get a custom quote</Button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="card h-full p-6">
            <h2 className="font-display font-bold">About .com.np domains</h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{domainNote}</p>
          </div>
        </Reveal>
      </Container>

      <section aria-label="FAQ" className="mt-16">
        <SectionHeading eyebrow="FAQ" title="Common questions." />
        <Container className="mt-8 grid gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="card group p-5 sm:p-6">
              <summary className="cursor-pointer list-none font-display font-semibold [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span aria-hidden="true" className="text-peak-400">+</span>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>{f.a}</p>
            </details>
          ))}
        </Container>
      </section>

      <Container className="mt-10 text-center text-sm" style={{ color: "var(--muted)" }}>
        <p>Still unsure? <a className="underline" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a> — free advice, no pressure.</p>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
