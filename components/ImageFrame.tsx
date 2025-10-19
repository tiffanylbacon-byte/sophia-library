// Usage: <ImageFrame src="/cover.jpg" alt="..." ratio="3/2" />
export default function ImageFrame({
  src, alt, ratio = "3/2",
}: { src: string; alt: string; ratio?: `${number}/${number}` }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border`} style={{ aspectRatio: ratio }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}
