"use client";

import React, { useEffect, useState } from "react";

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
        <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner w-20 h-20 bg-[#0F172A] flex items-center justify-center">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              aria-hidden="true"
            >
              <path
                d="M18 3.5L3.5 15.5H7.5V31.5H28.5V15.5H32.5L18 3.5Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="preloader-heart"
                d="M18 24.5C18 24.5 12 20.5 12 16.5C12 14.29 13.79 12.5 16 12.5C17.2 12.5 18 13.2 18 13.2C18 13.2 18.8 12.5 20 12.5C22.21 12.5 24 14.29 24 16.5C24 20.5 18 24.5 18 24.5Z"
                fill="#F43F5E"
              />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <div className="text-lg font-bold tracking-tight text-slate-900">
            Home Companion <span className="text-sky-600">Demo</span>
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
            Bristol & South West
          </div>
        </div>

        <div className="w-40 h-1 rounded-full bg-slate-200 overflow-hidden">
          <div className="preloader-bar h-full w-1/3 rounded-full bg-sky-600" />
        </div>

        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
