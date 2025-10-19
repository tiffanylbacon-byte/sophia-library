// app/follow-alongs/page.tsx
import Link from "next/link";
import { followAlongs } from "@/lib/follow-alongs/followAlongs";
import { FollowCard } from "@/components/FollowCard";

export const revalidate = 60;

export default function FollowAlongsIndex() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 md:p-8">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Clinical Follow-Alongs
          </h1>
          <p className="mt-1 text-sm text-neutral-600">
            Live cases, coherence metrics, and protocol notes.
          </p>
        </div>
        <Link href="/" className="text-sm hover:underline">
          ← Home
        </Link>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {followAlongs.map((fa) => (
          <FollowCard key={fa.slug} item={fa} />
        ))}
      </section>
    </div>
  );
}
