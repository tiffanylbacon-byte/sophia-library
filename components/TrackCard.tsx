// components/TrackCard.tsx
import Link from "next/link";
import type { Track } from "@/lib/tracks";
import HoverBloom from "@/components/motion/HoverBloom";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border px-2 py-0.5 text-[11px] leading-4">
      {children}
    </span>
  );
}

export default function TrackCard({ track }: { track: Track }) {
  return (
    <HoverBloom className="group">
      <Link
        href={`/music/${track.slug}`}
        className="block overflow-hidden rounded-2xl glass bloom ring-soft transition hover:shadow-soft"
      >
        <div className="aspect-[3/2] w-full bg-gradient-to-br from-neutral-100 to-neutral-200" />
        <div className="p-4">
          <h3 className="text-base font-semibold tracking-tight">{track.title}</h3>
          {track.subtitle && (
            <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{track.subtitle}</p>
          )}

          {track.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {track.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          ) : null}

          {track.length && (
            <p className="mt-3 text-xs text-neutral-500">{track.length}</p>
          )}
        </div>

        <div className="border-t px-4 py-2 text-xs text-neutral-500">
          <span className="transition group-hover:text-neutral-700">Play →</span>
        </div>
      </Link>
    </HoverBloom>
  );
}
