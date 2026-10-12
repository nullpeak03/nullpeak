"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/content/site";

const BUSINESS_TYPES = [
  "Gym / Fitness",
  "Clinic / Health",
  "Restaurant / Café",
  "Shop / Retail",
  "School / Education",
  "Startup / Tech",
  "Other",
] as const;

const INTERESTS = [
  "Basic",
  "Standard",
  "Custom app",
  "AI agent",
  "Not sure",
] as const;

type Errors = Partial<Record<"name" | "phone" | "message" | "form", string>>;

const RATE_LIMIT_MS = 60_000; // 1 message per minute per browser
const RATE_KEY = "np-quote-last";

/**
 * WhatsApp-first quote form (no backend, no secrets — keeps the site static).
 * - Validation with inline errors + aria-describedby.
 * - Honeypot field ("company_website") traps bots; filled → silent "success".
 * - Basic rate limit via localStorage timestamp.
 * - On submit: opens WhatsApp with a prefilled message, shows success state.
 * To add email later (Resend/Formspree): POST the same payload in handleSubmit.
 */
export function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState<string>(BUSINESS_TYPES[0]);
  const [interest, setInterest] = useState<string>("Not sure");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sentLink, setSentLink] = useState<string | null>(null);

  function validate(): Errors {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please tell us your name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15)
      e.phone = "Please enter a valid phone / WhatsApp number.";
    if (message.trim().length > 0 && message.trim().length < 10)
      e.message = "A few more words help us reply better (10+ characters).";
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (sending) return;

    // Honeypot: act successful, send nothing.
    if (honeypot.trim() !== "") {
      setSentLink(site.whatsapp);
      return;
    }

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    // Rate limit.
    try {
      const last = Number(window.localStorage.getItem(RATE_KEY) ?? 0);
      if (Date.now() - last < RATE_LIMIT_MS) {
        setErrors({ form: "You just sent a request — please wait a minute before sending another." });
        return;
      }
    } catch {
      // localStorage unavailable — continue without rate limiting.
    }

    setSending(true);
    const text =
      `Namaste Null Peak! I'm ${name.trim()} (${phone.trim()}).\n` +
      `Business: ${businessType}\n` +
      `Interested in: ${interest}\n` +
      (message.trim() ? `Details: ${message.trim()}` : "Details: (I'll explain on chat)");
    const link = whatsappLink(text);

    try {
      window.localStorage.setItem(RATE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    window.open(link, "_blank", "noopener,noreferrer");
    setSentLink(link);
    setSending(false);
  }

  // Success state.
  if (sentLink) {
    return (
      <div
        className="card p-6 sm:p-8"
        role="status"
        aria-live="polite"
        aria-label="Quote request ready"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-peak-400">
          ✓ Request ready
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold">
          Thanks {name.trim().split(" ")[0] || "there"}! Your message is ready.
        </h2>
        <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
          WhatsApp should have opened with your quote request. If not, tap below —
          just press send. We reply fast, usually within hours.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={sentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base bg-peak-400 text-ink-950 hover:bg-peak-300"
          >
            Open WhatsApp message
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Quote request — " + (name.trim() || "new enquiry"))}`}
            className="btn-base border"
            style={{ borderColor: "var(--line)" }}
          >
            Or email us instead
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setSentLink(null);
            setMessage("");
            setErrors({});
          }}
          className="mt-5 text-sm underline underline-offset-4 hover:text-peak-400"
        >
          Send another request
        </button>
      </div>
    );
  }

  const inputCls =
    "mt-1 w-full rounded-xl border bg-transparent px-4 py-3 text-base min-h-[44px]";
  const errCls = "mt-1 text-sm font-medium text-red-400";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card p-6 sm:p-8"
      aria-label="Get a free quote"
    >
      <h2 className="font-display text-2xl font-bold">Get a free quote</h2>
      <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
        Fill this in — it opens WhatsApp with your message ready. No spam, ever.
      </p>

      {/* Honeypot — hidden from humans, traps bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label>
          Website (leave blank)
          <input
            type="text"
            name="company_website"
            autoComplete="off"
            tabIndex={-1}
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="q-name" className="font-display text-sm font-semibold">
            Your name *
          </label>
          <input
            id="q-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Binod Maharjan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "q-name-err" : undefined}
            className={inputCls}
            style={{ borderColor: errors.name ? "#f87171" : "var(--line)" }}
          />
          {errors.name ? <p id="q-name-err" className={errCls} role="alert">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="q-phone" className="font-display text-sm font-semibold">
            Phone / WhatsApp *
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="e.g. 9868958081"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "q-phone-err" : undefined}
            className={inputCls}
            style={{ borderColor: errors.phone ? "#f87171" : "var(--line)" }}
          />
          {errors.phone ? <p id="q-phone-err" className={errCls} role="alert">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="q-biz" className="font-display text-sm font-semibold">
            Business type
          </label>
          <select
            id="q-biz"
            name="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className={inputCls}
            style={{ borderColor: "var(--line)", background: "var(--surface)" }}
          >
            {BUSINESS_TYPES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="font-display text-sm font-semibold">
            I&apos;m interested in
          </legend>
          <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label="Package interest">
            {INTERESTS.map((opt) => {
              const active = interest === opt;
              return (
                <label
                  key={opt}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "bg-peak-400 text-ink-950" : ""
                  }`}
                  style={!active ? { borderColor: "var(--line)" } : { borderColor: "transparent" }}
                >
                  <input
                    type="radio"
                    name="interest"
                    value={opt}
                    checked={active}
                    onChange={() => setInterest(opt)}
                    className="sr-only"
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="q-msg" className="font-display text-sm font-semibold">
            Message <span style={{ color: "var(--muted)" }}>(optional)</span>
          </label>
          <textarea
            id="q-msg"
            name="message"
            rows={4}
            placeholder="Tell us about your business — what you sell, where you are, what you need."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "q-msg-err" : undefined}
            className={`${inputCls} resize-y`}
            style={{ borderColor: errors.message ? "#f87171" : "var(--line)" }}
          />
          {errors.message ? <p id="q-msg-err" className={errCls} role="alert">{errors.message}</p> : null}
        </div>

        {errors.form ? (
          <p className={errCls} role="alert">{errors.form}</p>
        ) : null}

        <button
          type="submit"
          disabled={sending}
          className="btn-base w-full bg-peak-400 text-ink-950 hover:bg-peak-300 disabled:opacity-60"
        >
          {sending ? "Preparing…" : "Send via WhatsApp →"}
        </button>
        <p className="text-center text-xs" style={{ color: "var(--muted)" }}>
          Opens WhatsApp with your message prefilled — you press send. Nothing is stored online.
        </p>
      </div>
    </form>
  );
}
