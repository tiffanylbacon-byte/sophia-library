// app/books/loading.tsx
import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl p-4">
      {/* page title skeleton */}
      <div className="mb-6 h-8 w-48 animate-pulse rounded bg-neutral-200" />

      {/* card grid skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
