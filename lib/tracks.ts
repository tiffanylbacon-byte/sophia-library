// lib/tracks.ts
export type Track = {
  slug: string;
  title: string;
  subtitle?: string;
  length?: string;  // e.g. "4:27"
  tags?: string[];
  cover?: string;
};

export const tracks: Track[] = [
  {
    slug: "528hz-heart",
    title: "528 Hz – Heart Field Calibration",
    subtitle: "Love frequency • DNA repair tone",
    length: "6:12",
    tags: ["528 Hz", "healing", "love"],
  },
  {
    slug: "369-plasma",
    title: "369 Hz – Plasma Sequence I",
    subtitle: "Tesla harmonic pattern • creative expansion",
    length: "7:42",
    tags: ["369 Hz", "plasma", "creativity"],
  },
  {
    slug: "1111-gateway",
    title: "1111 Hz – Gateway Alignment",
    subtitle: "Portal resonance • coherence",
    length: "5:55",
    tags: ["1111 Hz", "alignment", "meditation"],
  },
];
