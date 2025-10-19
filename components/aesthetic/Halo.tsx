"use client";

import { useEffect, useRef } from "react";

export default function Halo() {
  const ref = useRef<HTMLDivElement>(null);

  // slow, subtle drift
  useEffect(() => {
    let t = 0;
    let raf = 0;
    const el = ref.current!;
    const loop = () => {
      t += 0.0025;
      const x = Math.sin(t) * 4;   // px shift
      const y = Math.cos(t * 0.6) * 4;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-95"
      style={{
        background:
          "var(--mw-grad, radial-gradient(800px 600px at 10% -10%, #d1d5db33, transparent 60%))",
        maskImage:
          "radial-gradient(120% 100% at 50% 28%, black 62%, transparent 100%)",
        transition: "filter 600ms ease",
        filter: "saturate(1.05) contrast(1.01)",
      }}
    />
  );
}
