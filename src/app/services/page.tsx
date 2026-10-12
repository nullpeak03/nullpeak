import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { services, customNote } from "@/content/services";
import { whatsappLink, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services — Websites, Google, Apps & AI",
  description:
    "Websites, .com.np domain + hosting, Google Maps, e-commerce with eSewa/Khalti, web apps, mobile apps, AI agents. Plain prices, Kathmandu-based.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@type": "Organization", name: "Null Peak", url: site.url },
        areaServed: "Kathmandu, Nepal",
      },
    })),
  };
  return (
    <>
      <section className="pt-16">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to get found."
          lede="Pick what you need. Every service ends with a Talk to us link — no forms, just WhatsApp."
        />
      </section>
      <Container className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 2) * 0.06}>
            <article
              id={s.slug}
              className="card h-full scroll-mt-24 p-6 transition-all duration-150 hover:-translate-y-1 hover:border-peak-400/40 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">{s.title}</h2>
              <p className="mt-2 leading-relaxed">{s.description}</p>
              <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>{s.forWhom}</p>
              <div className="mt-5">
                <Button
                  href={whatsappLink(`Namaste Null Peak! I want: ${s.title}. Please tell me more.`)}
                  external
                  variant="ghost"
                >
                  Talk to us
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </Container>
      <Container className="mt-8">
        <p className="card p-6 text-center font-display font-semibold">{customNote}</p>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
