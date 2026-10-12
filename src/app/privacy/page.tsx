import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy & Terms — Plain language",
  description:
    "Simple privacy and terms for Null Peak, Kathmandu. What we collect, what we don't, how payment works, and who owns your website.",
  alternates: { canonical: "/privacy" },
};

const privacy = [
  [
    "What we collect",
    "Only what you send us: your name, phone number, and message — so we can reply. If you chat on WhatsApp, Instagram, or email, those platforms handle your data under their own policies.",
  ],
  [
    "What we never do",
    "We never sell your details. We never share them with advertisers. We never add you to spam lists.",
  ],
  [
    "Analytics",
    "We use privacy-friendly analytics (no cross-site tracking, no ad cookies). It only tells us which pages are popular, so we can improve.",
  ],
  [
    "How long we keep it",
    "Enquiry messages: until your project is done, then deleted on request. Project files (photos, text you gave us): as long as your website needs them.",
  ],
  [
    "Your rights",
    "Ask us any time what we hold about you, and we will show you, fix it, or delete it. Email hello@nullpeak.com.",
  ],
] as const;

const terms = [
  [
    "What you get",
    "Exactly what your package lists — nothing less. Basic (NPR 8,999) and Standard (NPR 12,329) contents are on the Pricing page. Custom apps and AI get a written quote before we start.",
  ],
  [
    "Payment",
    "Half to start, the rest after your website is ready and you approve it. We accept eSewa, Khalti, and bank transfer.",
  ],
  [
    "You own everything",
    "Your domain is registered in your name. Your website files are yours. We hand over logins and access at launch.",
  ],
  [
    "Domains (.com.np)",
    "Free registration needs a citizenship copy (individuals) or company papers (businesses), per the .np rules. We help submit for free — approval times are set by the registrar, not us.",
  ],
  [
    "Timelines",
    "Business websites: usually 7–14 days after we have your photos and details. Delays happen only if content or domain papers arrive late — we tell you early.",
  ],
  [
    "After the free month",
    "Standard includes 1 month of free maintenance (small text/photo fixes). After that: nothing forced. Your site keeps running. Paid care plans are available if you want us to keep updating things.",
  ],
  [
    "Fair limits",
    "Package prices cover normal business sites. Big extras (online shop, second language, custom features) are quoted separately — always before we build.",
  ],
  [
    "Law",
    "These terms follow the laws of Nepal. Problems first get solved by talking — message us and we fix it.",
  ],
] as const;

export default function PrivacyPage() {
  return (
    <section className="pt-16">
      <Container>
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-mega text-balance sm:text-5xl">
          Privacy &amp; Terms, in plain words.
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Short sentences. No jargon. Last updated October 2026.
        </p>

        <h2 className="mt-12 font-display text-2xl font-bold">Privacy</h2>
        <div className="mt-5 grid max-w-3xl gap-4">
          {privacy.map(([t, d]) => (
            <section key={t} className="card p-6" aria-label={t}>
              <h3 className="font-display font-bold">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{d}</p>
            </section>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">Terms</h2>
        <div className="mt-5 grid max-w-3xl gap-4">
          {terms.map(([t, d]) => (
            <section key={t} className="card p-6" aria-label={t}>
              <h3 className="font-display font-bold">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{d}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 max-w-xl text-sm" style={{ color: "var(--muted)" }}>
          Questions about any of this?{" "}
          <a className="underline underline-offset-4 hover:text-peak-400" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or{" "}
          <a className="underline underline-offset-4 hover:text-peak-400" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
