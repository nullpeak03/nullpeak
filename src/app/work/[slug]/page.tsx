import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { projects } from "@/content/work";
import { site, whatsappLink } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return {
    title: p ? `${p.name} — Case study` : "Case study",
    description: p?.summary ?? "Null Peak case study.",
    alternates: { canonical: `/work/${params.slug}` },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <article className="pt-16">
      <Container>
        <p className="eyebrow">{p.category}</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-mega sm:text-6xl">
          {p.name}
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.url ? (
            <Button href={p.url} external>
              Visit live site ↗
            </Button>
          ) : null}
          <Button
            href={whatsappLink(`Namaste! I saw ${p.name} and I want something like that.`)}
            external
            variant="ghost"
          >
            I want this
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <section className="card p-6" aria-label="Problem">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">Problem</h2>
            <p className="mt-3 leading-relaxed">{p.problem}</p>
          </section>
          <section className="card p-6" aria-label="What we built">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">What we built</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {p.built.map((b) => (
                <li key={b} className="flex gap-2"><span aria-hidden="true">✓</span> {b}</li>
              ))}
            </ul>
          </section>
          <section className="card p-6" aria-label="Result">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">Result</h2>
            <p className="mt-3 leading-relaxed">{p.result}</p>
          </section>
        </div>

        <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
          Questions? <a className="underline" href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp us</a> — we reply fast.
        </p>
      </Container>
    </article>
  );
}
