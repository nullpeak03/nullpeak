// "0 → ▲" wordmark motif: null (zero ring) climbing to peak.
// Decorative — hide from screen readers.
export function PeakMark({ className = "h-8 w-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 40"
      fill="none"
      aria-hidden="true"
      className={className}
      role="presentation"
    >
      <circle cx="14" cy="24" r="9" stroke="currentColor" strokeWidth="2.5" opacity="0.45" />
      <path
        d="M27 30 L52 30 L62 12 L72 26 L78 20 L89 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M62 12 L62 6 M59 8 L65 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
