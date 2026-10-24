import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";

export default function AgencyComparison() {
  const points = [
    {
      feature: "Companion Consistency",
      standard: "Revolving door of unfamiliar agency carers",
      homeCompanion: "One dedicated companion hand-matched to your loved one",
    },
    {
      feature: "Visit Duration",
      standard: "Rushed 15-minute stopwatch pop-ins",
      homeCompanion: "Minimum 1 to 2 hours of relaxed, unhurried time",
    },
    {
      feature: "Family Reassurance",
      standard: "Infrequent updates or paper logs left behind",
      homeCompanion: "Instant smartphone notes & photos after every visit",
    },
    {
      feature: "Commitment & Terms",
      standard: "Rigid 6-12 month contracts & cancellation fees",
      homeCompanion: "Flexible weekly schedule; pause or adjust anytime",
    },
    {
      feature: "Scope of Companionship",
      standard: "Clinical tasks only; no leisure or outings",
      homeCompanion: "Outings, scenic drives, gardening, tea & joyful conversation",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-800 text-xs font-semibold uppercase tracking-wider border border-slate-900/10">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>The Home Companion Standard</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          How We Differ from Traditional Care Agencies
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Real companionship is about genuine trust and connection, never rushed checklists.
        </p>
      </div>

      <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 overflow-hidden">
        <div className="double-bezel-inner bg-white overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200/80 p-4 sm:p-6 text-xs sm:text-sm font-bold">
            <div className="col-span-4 text-slate-500 uppercase tracking-wider text-[11px]">
              Key Dimension
            </div>
            <div className="col-span-4 text-slate-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <span>Standard Care Agencies</span>
            </div>
            <div className="col-span-4 text-sky-900 uppercase tracking-wider text-[11px] font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-600 inline-block" />
              <span>Home Companion Bristol</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {points.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-12 p-4 sm:p-6 items-center text-xs sm:text-sm hover:bg-slate-50/50 transition-colors"
              >
                <div className="col-span-4 font-bold text-slate-900 pr-2">
                  {p.feature}
                </div>
                <div className="col-span-4 text-slate-500 flex items-start gap-2 pr-3">
                  <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="leading-snug">{p.standard}</span>
                </div>
                <div className="col-span-4 text-slate-900 font-semibold flex items-start gap-2 bg-sky-50/30 -my-4 sm:-my-6 p-4 sm:p-6 border-l border-sky-100">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug text-slate-950">
                    {p.homeCompanion}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
