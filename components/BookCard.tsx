// components/BookCard.tsx
import Link from "next/link";
import type { Book } from "@/lib/books";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border px-2 py-0.5 text-[11px] leading-4">
      {children}
    </span>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[3/2] w-full bg-gradient-to-br from-neutral-100 to-neutral-200" />
      <div className="p-4">
        <div className="flex items-center gap-2">
          {book.status === "canary" && <Badge>Canary</Badge>}
          {book.status === "published" && <Badge>Published</Badge>}
          {book.status === "draft" && <Badge>Draft</Badge>}
        </div>
        <h3 className="mt-2 text-base font-semibold tracking-tight">{book.title}</h3>
        {book.subtitle && (
          <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{book.subtitle}</p>
        )}
        {book.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {book.tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-neutral-50 px-2 py-0.5 text-xs text-neutral-700 ring-1 ring-inset ring-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="border-t px-4 py-2 text-xs text-neutral-500">
        <span className="transition group-hover:text-neutral-700">Open →</span>
      </div>
    </Link>
  );
}
