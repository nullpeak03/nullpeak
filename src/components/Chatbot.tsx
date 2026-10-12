"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { packages, faqs, domainNote } from "@/content/pricing";
import { services } from "@/content/services";
import { projects } from "@/content/work";
import { site, whatsappLink } from "@/content/site";

type MsgLink = { label: string; href: string; external?: boolean };
type Msg = { role: "bot" | "user"; text: string; links?: MsgLink[] };

const QUICK = ["Prices?", "What do you build?", "How long?", "Talk to human"] as const;

function greeting(): Msg {
  return {
    role: "bot",
    text: "Namaste! I'm the Null Peak assistant. Ask me about prices, services, or timelines — or tap a topic below.",
  };
}

// Keyword-matched answers, drawn from the same content files as the pages
// so the bot never drifts from the site. Anything unsure → human handoff.
function answer(raw: string): Msg {
  const q = raw.toLowerCase();

  if (/\b(hi|hello|namaste|hey|yo)\b/.test(q) && q.length < 20) return greeting();

  if (/price|cost|npr|basic|standard|package|charge|fee/.test(q)) {
    return {
      role: "bot",
      text: `Simple: Basic ${packages[0].price} (website + domain + Google setup), Standard ${packages[1].price} (adds Maps, Facebook page, 1 month care). Half now, rest after launch. Apps & AI are custom quotes.`,
      links: [{ label: "Full pricing →", href: "/pricing" }],
    };
  }
  if (/domain|com\.np|citizenship/.test(q)) {
    return { role: "bot", text: domainNote, links: [{ label: "Pricing →", href: "/pricing" }] };
  }
  if (/long|time|duration|fast|deadline|when/.test(q)) {
    return {
      role: "bot",
      text: "Business websites usually launch in 7–14 days after we have your photos and details. Apps & AI get a timeline in the written quote.",
    };
  }
  if (/human|talk|contact|call|whatsapp|phone|email|instagram|quote/.test(q)) {
    return {
      role: "bot",
      text: `Fastest is WhatsApp ${site.phoneDisplay}. Email ${site.email} works too — we reply within a day. Or use the quote form and we get your details ready.`,
      links: [
        { label: "WhatsApp us →", href: site.whatsapp, external: true },
        { label: "Quote form →", href: "/contact" },
      ],
    };
  }
  if (/service|website|web|app|ai|bot|ecommerce|e-commerce|shop|google|map|hosting/.test(q)) {
    return {
      role: "bot",
      text: `We do: ${services.map((s) => s.title).join(" · ")}. Need something custom? Tell us, we build it.`,
      links: [{ label: "All services →", href: "/services" }],
    };
  }
  if (/work|project|client|gym|muscle|hipath|prime/.test(q)) {
    return {
      role: "bot",
      text: `Real work only: ${projects.map((p) => p.name).join(", ")}.`,
      links: [{ label: "See work →", href: "/work" }],
    };
  }
  if (/review|rating|testimonial|trust|star/.test(q)) {
    return {
      role: "bot",
      text: "Muscle Mania's owner says new members walked in after the website + Google launch. 4.8★ reviews included.",
      links: [{ label: "Reviews →", href: "/reviews" }],
    };
  }
  if (/owner|founder|who|team|hirdendra/.test(q)) {
    return {
      role: "bot",
      text: "Null Peak is founder-led by Hirdendra Acharya, built in Kathmandu for Nepali businesses.",
      links: [{ label: "About →", href: "/about" }],
    };
  }
  if (/faq|question/.test(q)) {
    const f = faqs[0];
    return {
      role: "bot",
      text: `Good question — e.g. "${f.q}" ${f.a}`,
      links: [{ label: "All FAQs →", href: "/pricing" }],
    };
  }

  // Fallback: honest handoff, never a fake answer.
  return {
    role: "bot",
    text: "I only know the basics (prices, services, timelines). For anything else, a human replies fast on WhatsApp — tap below and just press send.",
    links: [
      {
        label: "Ask on WhatsApp →",
        href: whatsappLink(`Namaste Null Peak! I have a question: ${raw.slice(0, 200)}`),
        external: true,
      },
    ],
  };
}

export function Chatbot() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([greeting()]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else btnRef.current?.focus();
  }, [open ]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [msgs, typing, open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function send(text: string) {
    const clean = text.trim();
    if (!clean || typing) return;
    setMsgs((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    if (reduce) {
      setMsgs((m) => [...m, answer(clean)]);
      return;
    }
    setTyping(true);
    window.setTimeout(() => {
      setMsgs((m) => [...m, answer(clean)]);
      setTyping(false);
    }, 450);
  }

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="np-chat"
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="fixed bottom-5 left-5 z-50 inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-full border px-5 py-3 font-display text-sm font-bold shadow-card transition-transform hover:scale-105 active:scale-95"
        style={{ borderColor: "var(--line)", background: "var(--surface)" }}
      >
        <span aria-hidden="true" className="text-peak-400">✦</span>
        {open ? "Close" : "Chat"}
      </button>

      {open ? (
        <section
          id="np-chat"
          role="dialog"
          aria-label="Null Peak chat assistant"
          className="card fixed bottom-20 left-4 right-4 z-50 flex max-h-[70vh] min-h-[380px] flex-col overflow-hidden sm:left-5 sm:right-auto sm:w-[380px]"
          style={{ background: "var(--surface)" }}
        >
          <header className="flex items-center justify-between gap-3 border-b px-4 py-3" style={{ borderColor: "var(--line)" }}>
            <div>
              <p className="font-display text-sm font-bold">Null Peak assistant</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-peak-400">
                ● Online — replies instantly
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border"
              style={{ borderColor: "var(--line)" }}
            >
              <span aria-hidden="true">✕</span>
            </button>
          </header>

          <div ref={logRef} aria-live="polite" aria-label="Chat messages" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user" ? "bg-peak-400 text-ink-950" : "border"
                  }`}
                  style={m.role === "bot" ? { borderColor: "var(--line)", background: "var(--surface-2)" } : undefined}
                >
                  {m.text}
                </div>
                {m.links ? (
                  <div className="mt-1.5 flex flex-wrap gap-2" style={{ justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                    {m.links.map((l) =>
                      l.external ? (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold underline decoration-peak-400 decoration-2 underline-offset-4 hover:text-peak-400"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          key={l.label}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="text-xs font-semibold underline decoration-peak-400 decoration-2 underline-offset-4 hover:text-peak-400"
                        >
                          {l.label}
                        </Link>
                      )
                    )}
                  </div>
                ) : null}
              </div>
            ))}
            {typing ? (
              <div className="text-left" aria-label="Assistant is typing">
                <span className="inline-block animate-pulse-soft rounded-2xl border px-4 py-2.5 text-sm" style={{ borderColor: "var(--line)" }}>
                  •••
                </span>
              </div>
            ) : null}
          </div>

          <div className="flex gap-2 overflow-x-auto px-4 pb-1" aria-label="Suggested topics">
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="min-h-[44px] shrink-0 rounded-full border px-4 text-xs font-semibold hover:border-peak-400 hover:text-peak-400"
                style={{ borderColor: "var(--line)" }}
              >
                {q}
              </button>
            ))}
          </div>

          <form
            className="flex gap-2 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <label htmlFor="np-chat-input" className="sr-only">
              Type your question
            </label>
            <input
              ref={inputRef}
              id="np-chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about prices…"
              autoComplete="off"
              className="min-h-[44px] flex-1 rounded-full border bg-transparent px-4 text-sm"
              style={{ borderColor: "var(--line)" }}
            />
            <button
              type="submit"
              aria-label="Send message"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-peak-400 px-5 text-sm font-bold text-ink-950"
            >
              <span aria-hidden="true">↑</span>
            </button>
          </form>
        </section>
      ) : null}
    </>
  );
}
