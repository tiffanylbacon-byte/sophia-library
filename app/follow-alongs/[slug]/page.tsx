// app/follow-alongs/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { followAlongs } from "@/lib/follow-alongs/followAlongs";

export const revalidate = 60;

export function generateStaticParams() {
  return followAlongs.map((fa) => ({ slug: fa.slug }));
}

export default function FollowAlongShow({
  params,
}: {
  params: { slug: string };
}) {
  const fa = followAlongs.find((f) => f.slug === params.slug);
  if (!fa) return notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6 md:p-8">
      <nav className="text-sm">
        <Link href="/follow-alongs" className="hover:underline">
          ← All Follow-Alongs
        </Link>
      </nav>

      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{fa.title}</h1>
        <p className="text-sm text-neutral-600">
          Status: <span className="font-medium">{fa.status}</span> · Updated{" "}
          {new Date(fa.updatedAt).toLocaleDateString()}
        </p>
        <p className="text-neutral-800">{fa.summary}</p>
      </header>

      <section className="prose prose-neutral max-w-none">
        <p>
          This is a minimal detail page. You can expand this with day-by-day
          notes, tables, charts, frequency sets, and coherence markers.
        </p>
      </section>
    </div>
  );
}
