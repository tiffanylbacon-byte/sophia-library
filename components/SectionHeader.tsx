export default function SectionHeader({
  title, subtitle,
}: { title: string; subtitle?: string }) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mw-gold">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>}
    </header>
  );
}
