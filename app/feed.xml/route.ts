import { books } from "@/lib/books";

export async function GET() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://sophia-library.vercel.app").replace(/\/$/,"");
  const items = books.map(b => `
    <item>
      <title>${escapeXml(b.title)}</title>
      <link>${base}/books/${b.slug}</link>
      <guid>${base}/books/${b.slug}</guid>
      <pubDate>${new Date(b.updatedAt || Date.now()).toUTCString()}</pubDate>
      <description>${escapeXml(b.description || "")}</description>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"><channel>
    <title>Sophia Christos · Books</title>
    <link>${base}</link>
    <description>Books feed</description>
    ${items}
  </channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
function escapeXml(s: string) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
}
