// app/page.tsx
export const revalidate = 60;

export default function Page() {
  return (
    <main className="sc-main">
      <section className="sc-hero">
        <h2 className="sc-hero-title">Sophia Library / Canary</h2>
        <p className="sc-hero-sub">Books · Clinical Follow-Alongs · Music</p>
      </section>
    </main>
  );
}
