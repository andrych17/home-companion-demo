import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { serviceHref, type Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  const { title, summary: description, icon: Icon, badge, highlights, photo: image } = service;
  const href = serviceHref(service);
  const badgeColor = service.accent.badge;

  return (
    <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 group hover:-translate-y-1 spring-transition flex flex-col">
      <div className="double-bezel-inner bg-white p-6 sm:p-7 flex flex-col justify-between h-full shadow-sm overflow-hidden">
        <div>
          <div className="relative -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-5 aspect-[16/10] overflow-hidden bg-slate-100">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 spring-transition"
              style={{ objectPosition: image.position }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                From £24/hr
              </span>
              <span className="text-[10px] font-medium text-slate-200">
                Min 1 hr
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badgeColor}`}
            >
              {badge}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-sky-700 transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>

          {/* Scannable Visual Micro-tags instead of long paragraphs */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {highlights.slice(0, 3).map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 text-[11px] font-medium text-slate-600 border border-slate-100"
              >
                <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate max-w-[200px]">{item}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors"
          >
            <span>Explore {title.toLowerCase()}</span>
            <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0F172A] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
