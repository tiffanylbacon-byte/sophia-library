"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProgressProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar
        height="2px"
        color="#0a0a0a"
        options={{ showSpinner: false, easing: "ease", speed: 500 }}
        shallowRouting
      />
      {children}
    </>
  );
}
