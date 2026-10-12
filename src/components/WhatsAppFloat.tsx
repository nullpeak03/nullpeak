import { site } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Null Peak on WhatsApp (${site.phoneDisplay})`}
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-full bg-peak-400 px-5 py-3 font-display text-sm font-bold text-ink-950 shadow-glow transition-transform hover:scale-105 active:scale-95"
    >
      <span aria-hidden="true" className="text-base">◉</span>
      WhatsApp
    </a>
  );
}
