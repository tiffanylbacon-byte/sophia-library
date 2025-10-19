// components/AudioPlayer.tsx
"use client";

import { useRef, useState } from "react";

export default function AudioPlayer({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="mb-2 text-sm text-neutral-600">{title}</div>
      <audio
        ref={ref}
        src={src}
        preload="none"
        controls
        className="w-full"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="mt-2 text-xs text-neutral-500">
        {playing ? "Now playing…" : "Paused"}
      </div>
    </div>
  );
}
