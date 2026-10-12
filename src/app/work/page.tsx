import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/work";

export const metadata: Metadata = {
  title: "Work — Real businesses in Nepal",
  description:
    "See what Null Peak built: Muscle Mania Fitness Center gym website + Google presence, and more. Real work, no fake clients.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-16">
        <SectionHeading
          eyebrow="Work"
          title="Real work. Real businesses."
          lede="We only show real projects. No fake clients, no stock mockups."
        />
      </section>
      <Container className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Reveal key={p.slug}>
            <article className="card h-full p-6 transition-all duration-150 hover:-translate-y-1 hover:border-peak-400/40 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">
                  {p.category}
                </p>
                <span
                  className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-widest"
                  style={{ borderColor: "var(--line)", color: "var(--muted)" }}
                >
                  {p.status === "live" ? "● Live" : "◌ In progress"}
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {p.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/work/${p.slug}`}
                  className="btn-base border"
                  style={{ borderColor: "var(--line)" }}
                >
                  Case study
                </Link>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base bg-peak-400 text-sm text-ink-950"
                  >
                    Visit site ↗
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </Container>
      {/* TODO: add project screenshots to /public/work/ when available */}
    </>
  );
}
