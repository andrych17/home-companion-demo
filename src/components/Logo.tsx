import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "badge";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  // Variant badge: dark navy pill box like the top header in the design sitemap image
  if (variant === "badge") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center gap-3 bg-[#0F172A] text-white px-4 py-2.5 rounded-2xl shadow-sm hover:bg-[#1E293B] transition-all duration-200 group ${className}`}
        aria-label="Home Companion Demo home"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* House outline */}
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <path
              d="M18 3.5L3.5 15.5H7.5V31.5H28.5V15.5H32.5L18 3.5Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Heart inside */}
            <path
              d="M18 24.5C18 24.5 12 20.5 12 16.5C12 14.29 13.79 12.5 16 12.5C17.2 12.5 18 13.2 18 13.2C18 13.2 18.8 12.5 20 12.5C22.21 12.5 24 14.29 24 16.5C24 20.5 18 24.5 18 24.5Z"
              fill="#F43F5E"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-tight text-white leading-tight">
            Home Companion <span className="text-sky-300">Demo</span>
          </span>
          <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
            Bristol & South West
          </span>
        </div>
      </Link>
    );
  }

  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Home Companion Demo home"
    >
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
          isDark
            ? "bg-slate-800 text-white"
            : "bg-slate-900 text-white shadow-sm ring-1 ring-slate-900/10"
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path
            d="M18 4L4.5 15H8V30.5H28V15H31.5L18 4Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 24C18 24 12.5 20 12.5 16.5C12.5 14.5 14 13 16 13C17.1 13 18 13.7 18 13.7C18 13.7 18.9 13 20 13C22 13 23.5 14.5 23.5 16.5C23.5 20 18 24 18 24Z"
            fill="#F43F5E"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className={`text-lg font-bold tracking-tight leading-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Home Companion <span className="text-sky-600">Demo</span>
        </span>
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
          DBS Verified Companions
        </span>
      </div>
    </Link>
  );
}
