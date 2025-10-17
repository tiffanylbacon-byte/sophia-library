// app/layout.tsx
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Sophia Christos",
  description: "Books · Clinical Follow-Alongs · Music",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="sc-body">
        <header className="sc-header">
          <h1 className="sc-title">Sophia Christos</h1>
          <nav className="sc-nav">
            <Link href="/" className="sc-link">Home</Link>
            <Link href="/books" className="sc-link">Books</Link>
            {/* keep <a> for external links only:
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="sc-link">External</a>
            */}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
