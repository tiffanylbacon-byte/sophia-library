export default function SkeletonCard() {
  return (
    <div className="glass bloom ring-soft rounded-xl p-4 animate-pulse">
      <div className="h-5 w-1/2 rounded bg-neutral-200/60 mb-2" />
      <div className="h-4 w-2/3 rounded bg-neutral-200/50 mb-4" />
      <div className="h-24 w-full rounded bg-neutral-200/40" />
    </div>
  );
}
