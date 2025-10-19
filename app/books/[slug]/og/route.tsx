import { ImageResponse } from "next/og";
import { books } from "@/lib/books";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const book = books.find(b => b.slug === params.slug);
  const title = book?.title ?? "Sophia Library";
  const subtitle = book?.subtitle ?? "Books · Clinical Follow-Alongs · Music";

  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: 64, background: "linear-gradient(135deg,#fff,#f4f4f5)"
      }}>
        <div style={{ fontSize: 24, color: "#71717a" }}>Sophia Library</div>
        <div style={{ fontWeight: 800, fontSize: 64, lineHeight: 1.1 }}>{title}</div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#3f3f46" }}>{subtitle}</div>
      </div>
    ),
    size
  );
}
