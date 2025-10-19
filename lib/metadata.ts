export function ogImage(title: string, base =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://sophia-library.vercel.app")) {
  return `${base.replace(/\/$/,"")}/og?t=${encodeURIComponent(title)}`;
}
