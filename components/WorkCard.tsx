"use client";
import Link from "next/link";
import { useState } from "react";

export type WorkItem = {
  slug: string;
  title: string;
  kind: "clinical" | "essay" | "guide";
  blurb?: string;
};

const accent: Record<WorkItem["kind"], string> = {
  clinical: "from-emerald-200 via-teal-200 to-lime-100",
  essay: "from-amber-200 via-rose-200 to-pink-100",
  guide: "from-indigo-200 via-sky-200 to-cyan-100",
};

export default function WorkCard({ item }: { item: WorkItem }) {
  const [hovered, setHovered] = useState(false);
  const bg = accent[item.kind];

  return (
    <Link
      href={`/work/${item.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Open ${item.title}`}
      className="group relative block overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
    >
      <div
        className={`pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-r ${bg} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60`}
      />
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-wide text-neutral-600">
        <span>{item.kind}</span>
        <span className="rounded-full bg-neutral-100 px-2 py-1 text-neutral-700 transition-colors group-hover:bg-neutral-200">
          {hovered ? "Open →" : "View"}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-neutral-900">{item.title}</h3>
      {item.blurb && <p className="mt-2 line-clamp-2 text-sm text-neutral-700">{item.blurb}</p>}
    </Link>
  );
}
