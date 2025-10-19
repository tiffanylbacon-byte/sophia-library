import TrackCard from "@/components/TrackCard";
import { tracks } from "@/lib/tracks";

export const revalidate = 60;

export default function MusicPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">Music</h1>
        <p className="opacity-80">Frequency pieces for coherence and calm.</p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((t) => <TrackCard key={t.slug} track={t} />)}
      </section>
    </main>
  );
}
