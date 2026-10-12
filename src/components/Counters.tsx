"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

/**
 * Count-up stats. SSR renders final values (SEO + no-JS safe);
 * client animates 0 → value once when scrolled into view.
 * Reduced motion: no animation.
 */
export function Counters({ stats }: { stats: readonly Stat[] }) {
  return (
    <dl className="card grid grid-cols-3 gap-4 p-6 text-center sm:p-10">
      {stats.map((s) => (
        <Counter key={s.label} stat={s} />
      ))}
    </dl>
  );
}

function Counter({ stat }: { stat: Stat }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState<number | null>(null); // null = show final (SSR/first paint)

  useEffect(() => {
    if (!inView || reduce) return;
    setN(0);
    const target = stat.value;
    const dur = 1200;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, stat.value]);

  const shown = n ?? stat.value;

  return (
    <div ref={ref} className="flex flex-col">
      <dt className="order-2 mt-2 block text-xs sm:text-sm" style={{ color: "var(--muted)" }}>
        {stat.label}
      </dt>
      <dd
        className="order-1 font-display text-3xl font-bold text-peak-400 sm:text-5xl"
        aria-label={`${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""} ${stat.label}`}
      >
        {stat.prefix}
        <span aria-hidden="true">{shown}</span>
        {stat.suffix}
      </dd>
    </div>
  );
}
