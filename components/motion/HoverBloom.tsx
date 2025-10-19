"use client";

export default function HoverBloom({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* bloom field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition duration-400 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(480px 160px at 50% 110%, color-mix(in oklab, var(--mw-violet, #a78bfa), transparent 70%), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
