import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import PhotoFrame from "@/components/PhotoFrame";
import { services, serviceHref, type Service } from "@/lib/services";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const serviceMetadata = (s: Service): Metadata => ({
  title: s.title,
  description: s.page.metaDescription,
});

export default function ServicePage({ service }: { service: Service }) {
  const { page, accent, icon: Icon } = service;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${accent.badge}`}
            >
              <Icon className={`w-3.5 h-3.5 ${accent.icon}`} />
              <span>{service.title}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {page.headline[0]}
              <span
                className={`font-serif italic font-normal underline decoration-wavy decoration-2 ${accent.headline}`}
              >
                {page.headline[1]}
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed pt-2">{page.intro}</p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow transition-all flex items-center gap-2"
              >
                <span>Ask about {service.title.toLowerCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <PhotoFrame photo={service.photo} eager />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {page.storyTitle}
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {page.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              {page.checks.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
              <div className="double-bezel-inner bg-[#0F172A] text-white p-8 sm:p-10 space-y-6">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold uppercase tracking-wider ${accent.panelLabel}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{page.panel.label}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">{page.panel.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{page.panel.text}</p>
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  {page.panel.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{page.listTitle}</h2>
          <p className="text-slate-600 text-sm">{page.listIntro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {page.list.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${accent.number}`}
              >
                {idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross links */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-slate-200/80">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Need more than one kind of help?</h3>
        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
          Most visits mix a few things together, like an appointment, a bit of shopping and a cup of
          tea back home.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={serviceHref(s)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
            >
              {s.title} →
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
