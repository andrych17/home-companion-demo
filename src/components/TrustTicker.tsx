import React from "react";
import { ShieldCheck, CheckCircle2, Clock, HeartHandshake, Award } from "lucide-react";

export default function TrustTicker() {
  const credentials = [
    {
      icon: ShieldCheck,
      title: "Enhanced Police DBS",
      subtitle: "100% background vetted",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      icon: Award,
      title: "£5,000,000 Insured",
      subtitle: "Full public liability cover",
      color: "text-sky-600 bg-sky-50 border-sky-100",
    },
    {
      icon: Clock,
      title: "Zero Rushed Visits",
      subtitle: "Minimum 1-hour dedicated time",
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
    {
      icon: HeartHandshake,
      title: "Same Familiar Face",
      subtitle: "No rotating agency strangers",
      color: "text-rose-600 bg-rose-50 border-rose-100",
    },
    {
      icon: CheckCircle2,
      title: "Free Chemistry Chat",
      subtitle: "In-home meeting over tea",
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-1 rounded-2xl bg-slate-900/5 ring-1 ring-slate-900/10">
        <div className="bg-white rounded-[calc(1rem-0.25rem)] py-4 px-4 sm:px-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-3 ${
                    i > 0 ? "pt-3 md:pt-0 md:pl-4" : ""
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${c.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 leading-snug">
                      {c.title}
                    </div>
                    <div className="text-[11px] text-slate-500 leading-snug">
                      {c.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
