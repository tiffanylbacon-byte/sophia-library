"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const p = usePathname();
  const active = p === href || (href !== "/" && p.startsWith(href));
  return (
    <Link href={href} className={`hover:underline ${active ? "font-medium underline" : ""}`}>
      {children}
    </Link>
  );
}
