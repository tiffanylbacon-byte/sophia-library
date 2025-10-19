export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl p-10 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-neutral-600">The page you’re looking for doesn’t exist.</p>
      <a className="mt-6 inline-block text-sm hover:underline" href="/">← Go Home</a>
    </div>
  );
}
