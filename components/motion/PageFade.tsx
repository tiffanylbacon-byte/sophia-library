"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const easing = [0.16, 1, 0.3, 1];

export default function PageFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR hydration flashes
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{children}</>;

  // Respect reduced motion (browser/OS setting)
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const duration = prefersReduced ? 0.01 : 0.35;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // change on route to trigger transition
        initial={{ opacity: 0, y: prefersReduced ? 0 : 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: prefersReduced ? 0 : -6 }}
        transition={{ duration, ease: easing }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
