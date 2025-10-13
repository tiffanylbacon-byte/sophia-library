import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sophia Christos — Living Library",
  description: "The Mirrorwave Codex — A Twelve-Book Continuum by Sa'Ra'Thiel AuraNova.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
