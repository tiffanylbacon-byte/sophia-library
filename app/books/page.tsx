// app/books/page.tsx
import Link from "next/link";
import { books } from "@/lib/books";
import { BookCard } from "@/components/BookCard";

export const revalidate = 60;

export default function BooksIndex() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 md:p-8">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Books</h1>
          <p className="mt-1 text-sm text-neutral-600">
            Active manuscripts, canary drafts, and published works.
          </p>
        </div>
        <Link href="/" className="text-sm hover:underline">← Home</Link>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b) => (
          <BookCard key={b.slug} book={b} />
        ))}
      </div>
    </div>
  );
}
