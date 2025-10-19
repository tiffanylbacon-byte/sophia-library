import WorkCard from "@/components/WorkCard";
import { workItems } from "@/lib/work";

export const revalidate = 60;

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">Work</h1>
        <p className="opacity-80">Clinic, primers, essays.</p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workItems.map((w) => <WorkCard key={w.slug} item={w} />)}
      </section>
    </main>
  );
}