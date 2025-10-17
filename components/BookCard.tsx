// components/BookCard.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export type Book = {
  slug: string;
  title: string;
  tagline?: string;
  status?: "Draft" | "In Progress" | "Published";
  accent?: "violet" | "amber" | "indigo" | "emerald";
};

const accentClass: Record<NonNullable<Book["accent"]>, string> = {
  violet: "from-violet-200 to-fuchsia-200",
  amber: "from-amber-200 to-yellow-200",
  indigo: "from-indigo-200 to-sky-200",
  emerald: "from-emerald-200 to-teal-200",
};

export function BookCard({ book }: { book: Book }) {
  const [hovered, setHovered] = useState(false);
  const bg = accentClass[book.accent ?? "violet"];

  return (
    <Link
      href={`/book/${book.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block overflow-hidden rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className={`pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60 bg-gradient-to-r ${bg}`} />
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium tracking-wide text-neutral-600 uppercase">{book.status ?? "Draft"}</span>
        <span className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-700">{hovered ? "Open →" : "Read"}</span>
      </div>
      <h3 className="text-lg font-semibold leading-snug">{book.title}</h3>
      {book.tagline && <p className="mt-2 line-clamp-2 text-sm text-neutral-700">{book.tagline}</p>}
    </Link>
  );
}
