"use client";

export default function MotionGlyphs() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-10"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#111" stopOpacity="0.25" />
          <stop offset="1" stopColor="#111" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g>
        {/* concentric circles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx="50" cy="40"
            r={8 + i * 6}
            fill="none"
            stroke="url(#lg)"
            strokeWidth="0.2"
          />
        ))}
        {/* slow rotating triangle */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50" to="360 50 50"
            dur="60s" repeatCount="indefinite"
          />
          <polygon
            points="50,15 20,85 80,85"
            fill="none"
            stroke="url(#lg)"
            strokeWidth="0.2"
          />
        </g>
      </g>
    </svg>
  );
}
