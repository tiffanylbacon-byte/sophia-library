// app/books/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/lib/books";
import type { Book } from "@/lib/books";

export const revalidate = 60;

// Prefer an env var if you set one on Vercel; fallback to your project domain
const BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://sophia-library.vercel.app";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug === params.slug);
  const title = book ? `${book.title} · Sophia Christos` : "Book · Sophia Christos";
  const description = book?.subtitle ?? book?.description ?? "Book detail";
  const url = `${BASE}/books/${params.slug}`;
  const ogImage = `${BASE}/og?t=${encodeURIComponent(book?.title ?? "Sophia Christos")}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = books.find((b) => b.slug === params.slug) as Book | undefined;
  if (!book) return notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-6 p-6 md:p-10">
      <div className="flex items-center gap-3 text-xs text-neutral-500">
        <Link href="/books" className="hover:underline">
          ← Back to Books
        </Link>
        <span>•</span>
        <span className="capitalize">{book.status ?? "draft"}</span>
        {book.updatedAt ? (
          <>
            <span>•</span>
            <span>Updated {new Date(book.updatedAt).toLocaleDateString()}</span>
          </>
        ) : null}
      </div>

      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{book.title}</h1>
        {book.subtitle && (
          <p className="mt-2 text-neutral-600">{book.subtitle}</p>
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
      </header>

      {book.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={book.title}
          src={book.cover}
          className="aspect-[3/2] w-full rounded-2xl border object-cover"
        />
      ) : (
        <div className="aspect-[3/2] w-full rounded-2xl border bg-gradient-to-br from-neutral-100 to-neutral-200" />
      )}

      <section className="prose prose-neutral max-w-none">
        <p>{book.description ?? "Details coming soon."}</p>
      </section>
    </article>
  );
}
