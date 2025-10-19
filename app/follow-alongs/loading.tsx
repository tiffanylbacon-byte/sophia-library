import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6 md:p-8">
      <header className="h-10 w-64 rounded bg-neutral-200/60" />
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
      </section>
    </div>
  );
}
