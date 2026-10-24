import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LogoMark({
  className = "",
  heartClassName,
}: {
  className?: string;
  heartClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 3.5L3.5 15.5H7.5V31.5H28.5V15.5H32.5L18 3.5Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={heartClassName}
        d="M18 24.5C18 24.5 12 20.5 12 16.5C12 14.29 13.79 12.5 16 12.5C17.2 12.5 18 13.2 18 13.2C18 13.2 18.8 12.5 20 12.5C22.21 12.5 24 14.29 24 16.5C24 20.5 18 24.5 18 24.5Z"
        fill="#F43F5E"
      />
    </svg>
  );
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      aria-label="Home Companion, home"
      className={`group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap ${className}`}
    >
      <LogoMark
        className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 spring-transition group-hover:-rotate-6 ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      />
      <span
        className={`font-serif text-[1.2rem] sm:text-[1.4rem] font-medium leading-none tracking-tight ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        Home Companion
      </span>
    </Link>
  );
}
