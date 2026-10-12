import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Container>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-mega text-balance sm:text-5xl">
          {title}
        </h2>
        {lede ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--muted)" }}>
            {lede}
          </p>
        ) : null}
      </Reveal>
    </Container>
  );
}
