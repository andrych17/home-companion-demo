"use client";

import React, { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

// Branded splash on the first page load only. Client-side navigations keep the
// root layout mounted, so it never shows again during a visit.
const MIN_VISIBLE_MS = 700; // measured from navigation start, avoids a flash
const MAX_WAIT_MS = 3000; // don't let one slow asset hold the page hostage
const FADE_MS = 500;

export default function Preloader() {
  const [phase, setPhase] = useState<"visible" | "leaving" | "gone">("visible");

  useEffect(() => {
    const timers: number[] = [];
    let hiding = false;

    const hide = () => {
      if (hiding) return;
      hiding = true;
      const wait = Math.max(0, MIN_VISIBLE_MS - performance.now());
      timers.push(
        window.setTimeout(() => {
          setPhase("leaving");
          timers.push(window.setTimeout(() => setPhase("gone"), FADE_MS));
        }, wait),
      );
    };

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    timers.push(window.setTimeout(hide, MAX_WAIT_MS));

    return () => {
      window.removeEventListener("load", hide);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`preloader fixed inset-0 z-[100] flex items-center justify-center bg-[#FBFBFC] transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        phase === "leaving" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <LogoMark
          className="w-14 h-14 text-slate-900"
          heartClassName="preloader-heart"
        />

        <div className="flex items-center gap-2.5">
          <span className="font-serif text-3xl font-medium leading-none tracking-tight text-slate-950">
            Home Companion
          </span>
        </div>

        <div className="w-40 h-1 rounded-full bg-slate-200 overflow-hidden">
          <div className="preloader-bar h-full w-1/3 rounded-full bg-sky-600" />
        </div>

        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
