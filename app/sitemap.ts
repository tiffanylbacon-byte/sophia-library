// app/sitemap.ts
import type { MetadataRoute } from "next";
import { books } from "@/lib/books";
import { followAlongs } from "@/lib/follow-alongs/followAlongs";
import { tracks } from "@/lib/tracks";

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://sophia-library.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ Static routes — adjust if you add more top-level pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: new Date() },
    { url: `${BASE}/books`, lastModified: new Date() },
    { url: `${BASE}/follow-alongs`, lastModified: new Date() },
    { url: `${BASE}/music`, lastModified: new Date() },
    { url: `${BASE}/clinic`, lastModified: new Date() },
  ];

  // ✅ Dynamic: Books
  const bookPages = books.map((b) => ({
    url: `${BASE}/books/${b.slug}`,
    lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
  }));

  // ✅ Dynamic: Clinical Follow-Alongs
  const faPages = followAlongs.map((fa) => ({
    url: `${BASE}/follow-alongs/${fa.slug}`,
    lastModified: new Date(fa.updatedAt),
  }));

  // ✅ Dynamic: Music Tracks
  const trackPages = tracks.map((t) => ({
    url: `${BASE}/music/${t.slug}`,
    lastModified: t.updatedAt ? new Date(t.updatedAt) : new Date(),
  }));

  // ✅ Merge all
  return [...staticPages, ...bookPages, ...faPages, ...trackPages];
}
