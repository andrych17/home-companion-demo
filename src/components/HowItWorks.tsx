import React from "react";
import Link from "next/link";
import { Coffee, UserCheck, HeartHandshake, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Coffee,
      title: "Free In-Home Chemistry Chat",
      desc: "We visit your home for a relaxed cup of tea. We listen to your loved one’s background, favourite hobbies, and preferred weekly routine.",
      badge: "Zero Obligation",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      num: "02",
      icon: UserCheck,
      title: "Hand-Matched Companion",
      desc: "We assign a dedicated, DBS-checked companion based on shared temperament and life interests—ensuring a natural, joyful connection from day one.",
      badge: "Same Face Always",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
    },
    {
      num: "03",
      icon: HeartHandshake,
      title: "Regular Visits & Peace of Mind",
      desc: "Visits begin at your pace. After each visit, we send gentle notes and photo updates so the whole family stays connected and reassured.",
      badge: "Real-time Updates",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold uppercase tracking-wider border border-sky-100">
          <span>Simple, Human Process</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Getting Started is as Gentle as Sharing a Cup of Tea
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          No long questionnaires or bureaucratic paperwork. Just three easy steps to companionship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 flex flex-col"
            >
              <div className="double-bezel-inner bg-white p-7 sm:p-8 flex flex-col justify-between h-full shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-slate-300 font-serif">
                      {step.num}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${step.badgeColor}`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-bold text-sky-700 flex items-center gap-1">
                  <span>Step {idx + 1} of 3</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-[#1E293B] text-white pl-6 pr-2.5 py-3.5 rounded-full font-bold text-sm shadow-sm transition-all"
        >
          <span>Arrange an Introductory Tea & Chat</span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </Link>
      </div>
    </section>
  );
}
