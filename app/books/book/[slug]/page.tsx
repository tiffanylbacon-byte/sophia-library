// lib/books.ts
export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  status?: "draft" | "canary" | "published";
  tags?: string[];
  cover?: string;       // optional image URL
  description?: string; // for detail page
};

export const books: Book[] = [
  {
    slug: "mirrorwave-codex",
    title: "Mirrorwave Codex",
    subtitle: "Mythic-scientific rites for nervous system coherence",
    status: "canary",
    tags: ["codex", "healing", "frequency"],
    description:
      "A living codex of rites, tables, and harmonics for biofield coherence and gentle nervous system repair.",
  },
  {
    slug: "phoenix-codex",
    title: "The Phoenix Codex",
    subtitle: "Trauma transmutation, sovereignty, return to signal",
    status: "draft",
    tags: ["memoir", "alchemy"],
    description:
      "Autobiographical + clinical notes weaving trauma alchemy into a stepwise return-to-signal methodology.",
  },
  {
    slug: "celestia-nova",
    title: "Celestia Nova",
    subtitle: "City blueprint for a harmonious civilization",
    status: "draft",
    tags: ["city", "design", "constitution"],
    description:
      "Foundational design, law, and frequency infrastructure for a post-scarcity city-state prototype.",
  },
];
