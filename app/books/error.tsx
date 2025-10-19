"use client";
export default function Error({ error }: { error: Error }) {
  return (
    <div className="mx-auto max-w-3xl p-8">
      <h2 className="text-xl font-semibold">Something went sideways.</h2>
      <p className="mt-2 text-neutral-600">{error.message}</p>
      <a href="/books" className="mt-4 inline-block rounded-lg border px-4 py-2 hover:bg-neutral-50">
        Back to Books
      </a>
    </div>
  );
}
