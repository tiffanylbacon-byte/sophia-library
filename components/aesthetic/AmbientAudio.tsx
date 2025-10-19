"use client";

import { useEffect, useRef, useState } from "react";

export default function AmbientAudio({
  src = "/audio/ambient-528hz.mp3",
}: { src?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sc-ambient") === "1";
    setOn(saved);
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (on) {
      a.play().catch(() => {});
      localStorage.setItem("sc-ambient", "1");
    } else {
      a.pause();
      localStorage.setItem("sc-ambient", "0");
    }
  }, [on]);

  return (
    <div className="fixed bottom-4 right-4 z-40 glass bloom rounded-full px-3 py-1.5 text-xs">
      <button onClick={() => setOn(v => !v)} className="hover:underline">
        {on ? "Ambient: on" : "Ambient: off"}
      </button>
      <audio ref={audioRef} src={src} loop preload="none" />
    </div>
  );
}
