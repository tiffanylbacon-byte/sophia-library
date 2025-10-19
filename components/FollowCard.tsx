// components/FollowCard.tsx
import Link from "next/link";
import type { Follow } from "@/lib/follow-alongs/followAlongs";
import HoverBloom from "@/components/motion/HoverBloom";

export function FollowCard({ item }: { item: Follow }) {
  const badge =
    item.status === "active"
      ? "bg-emerald-100 text-emerald-800"
      : item.status === "complete"
      ? "bg-blue-100 text-blue-800"
      : "bg-amber-100 text-amber-900";

  return (
    <HoverBloom className="group">
      <article className="glass bloom ring-soft rounded-xl p-4 transition hover:shadow-soft">
        <header className="mb-3 flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight">
            <Link href={`/follow-alongs/${item.slug}`} className="hover:underline">
              {item.title}
            </Link>
          </h3>
          <span className={`rounded-full px-2 py-0.5 text-xs ${badge}`}>
            {item.status}
          </span>
        </header>

        <p className="text-sm text-neutral-700">{item.summary}</p>

        <footer className="mt-4 text-xs text-neutral-500">
          Updated {new Date(item.updatedAt).toLocaleDateString()}
        </footer>
      </article>
    </HoverBloom>
  );
}
