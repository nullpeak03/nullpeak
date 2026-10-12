"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur-md" style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--bg) 82%, transparent)" }}>
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Null Peak home">
            <Image
              src="/logo.png"
              alt="Null Peak logo — M shaped like a mountain peak"
              width={36}
              height={36}
              sizes="36px"
              className="h-9 w-9 rounded-lg object-cover"
            />
            <span className="font-display text-sm font-bold tracking-[0.18em]">
              NULL PEAK <span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-peak-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="btn-base hidden bg-peak-400 px-5 py-2 text-sm text-ink-950 hover:bg-peak-300 sm:inline-flex"
            >
              Get a Free Quote
            </Link>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border px-3 md:hidden"
              style={{ borderColor: "var(--line)" }}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open ? (
          <nav id="mobile-menu" aria-label="Mobile" className="pb-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium"
                    style={{ background: "var(--surface)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-base mt-2 w-full bg-peak-400 text-ink-950"
                >
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base mt-2 w-full border"
                  style={{ borderColor: "var(--line)" }}
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
