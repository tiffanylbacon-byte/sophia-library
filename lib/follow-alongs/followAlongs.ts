// lib/follow-alongs/followAlongs.ts
export type Follow = {
  slug: string;
  title: string;
  summary: string;
  status: "active" | "paused" | "complete";
  updatedAt: string; // ISO date
  cover?: string;
};

export const followAlongs: Follow[] = [
  {
    slug: "did-stabilization-alpha",
    title: "DID Stabilization (Alpha)",
    summary:
      "Parasympathetic lock-in set, endocrine calm, and skin barrier repair. Tracking entrainments → coherence.",
    status: "active",
    updatedAt: "2025-10-17",
  },
  {
    slug: "psoriasis-axis-reset",
    title: "Psoriasis Axis Reset",
    summary:
      "Three-axis realignment + mitochondrial harmonics; observing skin, minerals, and immune markers.",
    status: "active",
    updatedAt: "2025-10-16",
  },
];
