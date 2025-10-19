"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "mirrorwave";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const saved = (localStorage.getItem("sc-theme") as Theme) || "light";
    setTheme(saved);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light","dark","mirrorwave");
    root.classList.add(theme);
    localStorage.setItem("sc-theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      {(["light","dark","mirrorwave"] as Theme[]).map(t => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`rounded-full px-2 py-1 text-xs ring-1 hover:ring-2 transition
            ${theme===t ? "font-semibold" : ""}`}
          aria-pressed={theme===t}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
