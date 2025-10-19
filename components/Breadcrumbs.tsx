import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="text-xs text-neutral-500 flex items-center gap-2">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {it.href ? <Link href={it.href} className="hover:underline">{it.label}</Link> : <span>{it.label}</span>}
          {i < items.length - 1 && <span>•</span>}
        </span>
      ))}
    </nav>
  );
}
