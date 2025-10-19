// app/layout.tsx
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import PageFade from "@/components/motion/PageFade";
import ProgressProvider from "@/components/motion/ProgressProvider";

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
        <ProgressProvider>
          <PageFade>
            <header className="sc-header">
              <h1 className="sc-title">Sophia Christos</h1>
              <nav className="sc-nav">
                <a href="/">Home</a>
                <a href="/books">Books</a>
                <a href="/music">Music</a>
              </nav>
            </header>
            <main>{children}</main>
          </PageFade>
        </ProgressProvider>
      </body>
    </html>
  );
}
