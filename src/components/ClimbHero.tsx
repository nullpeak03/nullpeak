"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Signature hero visual: a single line climbs from "0" to "▲".
 * - On load: line draws (pathLength 0 → 1), dot lands on peak, labels fade up.
 * - On scroll: subtle parallax fade (scrubbed to hero scroll).
 * - Reduced motion: static final state, no animation.
 * Decorative SVG is aria-hidden; meaning lives in the headline + list.
 */
export function ClimbHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, reduce ? 1 : 0.25]);

  const line = "M8 148 C 60 148, 70 148, 96 140 S 150 118, 176 96 S 226 44, 252 30 S 292 8, 312 8";

  return (
    <div ref={ref} className="relative">
      <motion.div style={reduce ? undefined : { y, opacity }}>
        <svg
          viewBox="0 0 320 160"
          fill="none"
          aria-hidden="true"
          role="presentation"
          className="h-auto w-full"
        >
          {/* faint contour grid */}
          <g stroke="currentColor" opacity="0.08" strokeWidth="1">
            <path d="M0 40 H320 M0 80 H320 M0 120 H320" />
            <path d="M60 0 V160 M130 0 V160 M200 0 V160 M270 0 V160" />
          </g>
          {/* Himalayan silhouette whisper */}
          <path
            d="M0 158 L60 110 L95 132 L140 84 L185 124 L230 70 L270 108 L320 60 L320 160 L0 160 Z"
            fill="currentColor"
            opacity="0.05"
          />
          {/* track */}
          <path d={line} stroke="currentColor" strokeWidth="2" opacity="0.18" strokeLinecap="round" />
          {/* climbing line */}
          {reduce ? (
            <path d={line} stroke="#7DD3FC" strokeWidth="3" strokeLinecap="round" />
          ) : (
            <motion.path
              d={line}
              stroke="#7DD3FC"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            />
          )}
          {/* zero ring */}
          <circle cx="8" cy="148" r="7" stroke="#7DD3FC" strokeWidth="2.5" opacity="0.6" />
          {/* peak dot */}
          {reduce ? (
            <circle cx="312" cy="8" r="5" fill="#7DD3FC" />
          ) : (
            <motion.circle
              cx="312"
              cy="8"
              r="5"
              fill="#7DD3FC"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 400, damping: 18 }}
              style={{ transformOrigin: "312px 8px" }}
            />
          )}
        </svg>

        {/* endpoint labels */}
        <div aria-hidden="true" className="mt-1 flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.22em]">
          {reduce ? (
            <>
              <span style={{ color: "var(--muted)" }}>0 · invisible</span>
              <span className="text-peak-400">▲ · found</span>
            </>
          ) : (
            <>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{ color: "var(--muted)" }}
              >
                0 · invisible
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.4 }}
                className="text-peak-400"
              >
                ▲ · found
              </motion.span>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
