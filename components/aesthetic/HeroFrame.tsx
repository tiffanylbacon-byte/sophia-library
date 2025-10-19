"use client";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

export default function HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <RevealOnScroll>
      <div className="glass ring-soft rounded-3xl p-8 md:p-10 shadow-soft">
        {children}
      </div>
    </RevealOnScroll>
  );
}
