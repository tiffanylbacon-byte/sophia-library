// app/page.tsx
import Link from "next/link";
import { books } from "@/lib/books";
import { BookCard } from "@/components/BookCard";

export default function Page() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="rounded-3xl border bg-gradient-to-br from-white to-neutral-50 p-8 md:p-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Sophia Library / Canary
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Books, clinical follow-alongs, & music —
            <br className="hidden sm:block" />
            a living archive of the <span className="whitespace-nowrap">Sophia Christos</span> work.
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Browse active manuscripts, codices, and protocol notes. Canary
            builds update often; expect polish to evolve in real-time.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/books"
              className="rounded-xl border bg-black px-4 py-2 text-white hover:bg-neutral-800"
            >
              Explore Books
            </Link>
            <Link
              href="/music"
              className="rounded-xl border px-4 py-2 hover:bg-neutral-50"
            >
              Music
            </Link>
            <Link
              href="/clinic"
              className="rounded-xl border px-4 py-2 hover:bg-neutral-50"
            >
              Clinical Follow-Alongs
            </Link>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Featured</h2>
          <Link href="/books" className="text-sm text-neutral-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <BookCard key={b.slug} book={b} />
          ))}
        </div>
      </section>
    </div>
  );
}
