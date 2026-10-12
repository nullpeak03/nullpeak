import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container } from "./Container";
import { PeakMark } from "./PeakMark";

export function Footer() {
  return (
    <footer className="rule-peak mt-24" aria-label="Footer">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-bold tracking-[0.18em]">
              NULL PEAK <span style={{ color: "var(--accent)" }}>.</span>
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
              {site.tagline}
            </p>
            <PeakMark className="mt-4 h-8 w-20 text-peak-400" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Kathmandu-based. We take local businesses from zero to found —
              websites, Google presence, apps, AI agents.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Pages</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-peak-400">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-sm hover:text-peak-400">
                  Privacy &amp; Terms
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Talk to us</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:text-peak-400" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-peak-400" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="hover:text-peak-400" href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram {site.instagramHandle}
                </a>
              </li>
              <li style={{ color: "var(--muted)" }}>{site.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:justify-between" style={{ borderColor: "var(--line)", color: "var(--muted)" }}>
          <p>© {new Date().getFullYear()} Null Peak, Kathmandu. All rights reserved.</p>
          <p>From zero to found.</p>
        </div>
      </Container>
    </footer>
  );
}
