import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { reviews } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Reviews — What owners say",
  description:
    "Real reviews of Null Peak, Kathmandu web design agency. Muscle Mania Fitness Center saw more walk-in members after launch.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-16">
        <SectionHeading
          eyebrow="Reviews"
          title="Owners, in their own words."
          lede="Only real testimonials. Nothing invented."
        />
      </section>
      <Container className="mt-10 grid gap-4 md:grid-cols-2">
        {reviews.map((r) => (
          <Reveal key={r.name}>
            <figure className="card h-full p-6 sm:p-8">
              <div aria-label="5 out of 5 stars" className="font-bold tracking-widest text-peak-400">
                ★★★★★
              </div>
              <blockquote className="mt-3 leading-relaxed">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
                — {r.name}, {r.role}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </Container>
      {/* TODO: add more real testimonials to src/content/reviews.ts */}
      <Container className="mt-10 text-center">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Worked with us? We&apos;d love your words here.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/contact">Become our next review</Button>
        </div>
      </Container>
    </>
  );
}
