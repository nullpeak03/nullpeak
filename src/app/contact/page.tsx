import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — Get a Free Quote",
  description:
    "Get a free quote for your website, app or AI agent. WhatsApp +977 9868958081, hello@nullpeak.com, Kathmandu Nepal. We reply fast.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-16">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your business."
          lede="Fill the form — it opens WhatsApp with your message ready. Or reach us directly below."
        />
      </section>

      <Container className="mt-10 grid items-start gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <QuoteForm />

        <div className="grid gap-4">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="card block p-6 transition-all duration-150 hover:-translate-y-1 hover:border-peak-400/40"
          >
            <h2 className="font-display font-bold">WhatsApp — fastest</h2>
            <p className="mt-1 font-display text-lg font-bold text-peak-400">{site.phoneDisplay}</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>Tap to chat now. Replies in hours.</p>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="card block p-6 transition-all duration-150 hover:-translate-y-1 hover:border-peak-400/40"
          >
            <h2 className="font-display font-bold">Email</h2>
            <p className="mt-1 font-display text-lg font-bold text-peak-400">{site.email}</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>We reply within a day.</p>
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="card block p-6 transition-all duration-150 hover:-translate-y-1 hover:border-peak-400/40"
          >
            <h2 className="font-display font-bold">Instagram</h2>
            <p className="mt-1 font-display text-lg font-bold text-peak-400">{site.instagramHandle}</p>
            <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>See our latest work.</p>
          </a>
          <p className="px-2 text-center font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
            {site.address}
          </p>
        </div>
      </Container>
    </>
  );
}
