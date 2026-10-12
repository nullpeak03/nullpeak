import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces — dark-first. Light mode overrides via CSS vars.
        ink: {
          950: "#060A12", // page bg (near-black w/ blue tint)
          900: "#0A101C",
          850: "#0E1626",
          800: "#131C30",
          700: "#1E2A45",
        },
        paper: "#F6F7F9", // light-mode page bg
        // Single vivid accent: Himalayan ice blue
        peak: {
          300: "#A8DEFF",
          400: "#7DD3FC",
          500: "#4EA8FF",
          600: "#2B7FD4",
        },
        snow: "#F2F5F7",
        mist: "#9AA7B8",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "76rem", // 1216px editorial measure
      },
      letterSpacing: {
        mega: "-0.04em",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 50px -20px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(125,211,252,0.35), 0 8px 40px -8px rgba(78,168,255,0.55)",
      },
      keyframes: {
        climb: {
          "0%": { strokeDashoffset: "320" },
          "100%": { strokeDashoffset: "0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        climb: "climb 1.6s ease-out forwards",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
