// app/page.tsx
import Link from "next/link";
import { books } from "../lib/books";
import { BookCard } from "../components/BookCard";

export default function HomePage() {
  return (
    <main className="relative isolate">
      <section className="flex items-center justify-center py-24 md:py-32">
        <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
          <div className="absolute -top-24 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-amber-300 via-fuchsia-300 to-indigo-300" />
        </div>

        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="block">Sophia Library</span>
            <span className="mt-2 block text-balance text-neutral-600">Live • Canary • Tailwind v4</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-neutral-700">
            A living archive of the Mirrorwave Codex, Celestia Nova, and the Unified Resonance Biofield Law.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#library" className="rounded-2xl px-5 py-2.5 text-sm font-medium ring-1 ring-neutral-300 hover:bg-neutral-50 transition">Explore Titles</a>
            <a href="https://sophia-library.vercel.app" className="rounded-2xl px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition">Production Site</a>
          </div>
        </div>
      </section>

      <section id="library" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Library</h2>
          <span className="text-sm text-neutral-600">{books.length} titles</span>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <li key={b.slug}>
              <BookCard book={b} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
