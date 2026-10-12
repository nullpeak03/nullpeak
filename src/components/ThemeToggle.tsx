"use client";

import { useEffect, useState } from "react";

function currentTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("np-theme");
  if (saved === "light" || saved === "dark") return saved;
  return "dark"; // dark-first brand
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.style.colorScheme = theme;
    window.localStorage.setItem("np-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "light"}
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border px-3 text-sm"
      style={{ borderColor: "var(--line)" }}
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      <span className="sr-only">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

// Runs before paint to avoid theme flash. Keep in <head>.
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('np-theme')||'dark';if(t==='light'){document.documentElement.classList.add('light')}document.documentElement.style.colorScheme=t}catch(e){}})()`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
