export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Sophia Library — Live ✅</h1>
        <p>Deployed via Vercel — {new Date().toISOString()}</p>
      </div>
    </main>
  );
}
