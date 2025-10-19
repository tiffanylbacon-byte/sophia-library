"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "mirrorwave";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("sc-theme") as Theme) || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light","dark","mirrorwave");
    root.classList.add(theme);
    localStorage.setItem("sc-theme", theme);
  }, [theme]);

  // expose setter via window for quick testing if you want
  useEffect(() => {
    (window as any).__setTheme = setTheme;
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const ThemeContext = {
  // tiny context without external libs
  Provider: ({ value, children }: any) => children,
} as any;
