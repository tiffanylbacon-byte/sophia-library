// app/manifest.ts
import type { MetadataRoute } from "next";

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://sophia-library.vercel.app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sophia Christos",
    short_name: "Sophia",
    description: "Books · Clinical Follow-Alongs · Music",
    start_url: "/",
    scope: "/",
    id: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    dir: "ltr",
    lang: "en",
    categories: ["books", "health", "music", "education"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", purpose: "any" },
      { src: "/mask-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
    screenshots: [
      { src: "/screenshot-home.png", sizes: "1280x720", type: "image/png", form_factor: "wide" },
    ],
    protocol_handlers: [
      { protocol: "web+sophia", url: `${BASE}/?q=%s` }
    ]
  };
}
