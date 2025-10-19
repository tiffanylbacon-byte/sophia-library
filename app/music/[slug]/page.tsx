// app/music/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import AudioPlayer from "@/components/AudioPlayer";
import { tracks } from "@/lib/tracks";

export const revalidate = 60;

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://sophia-library.vercel.app";

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const track = tracks.find((t) => t.slug === params.slug);
  const title = track ? `${track.title} · Music · Sophia Christos` : "Music · Sophia Christos";
  const description = track?.summary ?? "Frequency piece for coherence and calm.";
  const url = `${BASE}/music/${params.slug}`;
  const og = `${BASE}/og?t=${encodeURIComponent(track?.title ?? "Music · Sophia Christos")}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, type: "music.song",
      images: [{ url: og }],
    },
    twitter: {
      card: "summary_large_image",
      title, description, images: [og],
    },
  };
}

export default function MusicShow({ params }: { params: { slug: string } }) {
  const track = tracks.find((t) => t.slug === params.slug);
  if (!track) return notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-6 p-6 md:p-10">
      <div className="flex items-center gap-3 text-xs text-neutral-500">
        <Link href="/music" className="hover:underline">← All Music</Link>
        {track.updatedAt ? (
          <>
            <span>•</span>
            <span>Updated {new Date(track.updatedAt).toLocaleDateString()}</span>
          </>
        ) : null}
      </div>

      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{track.title}</h1>
        {track.summary && <p className="mt-2 text-neutral-600">{track.summary}</p>}
        {track.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {track.tags.map((t) => (
              <span key={t} className="rounded-md bg-neutral-50 px-2 py-0.5 text-xs text-neutral-700 ring-1 ring-inset ring-neutral-200">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <AudioPlayer src={track.src} title={track.title} />

      {track.notes ? (
        <section className="prose prose-neutral max-w-none">
          <p>{track.notes}</p>
        </section>
      ) : null}
    </article>
  );
}
