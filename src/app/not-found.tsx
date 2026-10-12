import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PeakMark } from "@/components/PeakMark";

const popular = [
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Work", "/work"],
  ["Contact", "/contact"],
] as const;

export default function NotFound() {
  return (
    <section className="pt-24 text-center" aria-labelledby="nf-title">
      <Container>
        <PeakMark className="mx-auto h-12 w-32 text-peak-400" />
        <p className="eyebrow mt-6">0 — nothing here</p>
        <h1
          id="nf-title"
          className="mx-auto mt-3 max-w-xl font-display text-5xl font-bold tracking-mega text-balance sm:text-6xl"
        >
          Lost on the way to the peak?
        </h1>
        <p className="mx-auto mt-4 max-w-md" style={{ color: "var(--muted)" }}>
          This page doesn&apos;t exist. Let&apos;s get you back to base camp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="ghost">Talk to us</Button>
        </div>
        <nav aria-label="Popular pages" className="mt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
            Popular pages
          </p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {popular.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-block min-h-[44px] rounded-full border px-5 py-2 text-sm font-medium hover:border-peak-400 hover:text-peak-400"
                  style={{ borderColor: "var(--line)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
