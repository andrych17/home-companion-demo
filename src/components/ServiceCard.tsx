import React from "react";
import Link from "next/link";
import { LucideIcon, ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  badgeColor?: string;
  highlights: string[];
}

export default function ServiceCard({
  title,
  href,
  description,
  icon: Icon,
  badge,
  badgeColor = "bg-sky-50 text-sky-700 border-sky-100",
  highlights,
}: ServiceCardProps) {
  return (
    <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 group hover:-translate-y-1 spring-transition">
      <div className="double-bezel-inner bg-white p-7 sm:p-8 flex flex-col justify-between h-full shadow-sm">
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${badgeColor}`}
            >
              {badge}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
            {title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {description}
          </p>

          <ul className="space-y-2 mb-8 border-t border-slate-100 pt-4">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs text-slate-600"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center justify-between w-full text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors"
          >
            <span>Learn more about {title.toLowerCase()}</span>
            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-sky-50 group-hover:text-sky-700 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
