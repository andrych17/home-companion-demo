import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Smartphone,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";

export default function BentoWhyUs() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-5">
        {/* Main Highlight Card (col-span-12 lg:col-span-7) */}
        <div className="col-span-12 lg:col-span-7 double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-white p-7 sm:p-9 flex flex-col justify-between h-full relative overflow-hidden shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-semibold uppercase tracking-wider border border-rose-100">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
                <span>Meaningful Human Connection</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                One Consistent Companion, Never a Revolving Door of Strangers
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Most agencies send whichever carer happens to be on shift. We hand-match your loved one with one dedicated companion based on shared hobbies, temperament, and life stories.
              </p>
            </div>

            {/* Stat Counters & Family Quote */}
            <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-slate-900">98%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Match satisfaction</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-emerald-600">1-on-1</div>
                  <div className="text-[11px] text-slate-500 font-medium">Dedicated companion</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-sky-600">Zero</div>
                  <div className="text-[11px] text-slate-500 font-medium">15-min rushed pop-ins</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-amber-950 italic flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>“Mum feels like she gained a trusted niece, not an agency worker.” — Family in Beeston</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Card: Simulated Smartphone Reassurance (col-span-12 lg:col-span-5) */}
        <div className="col-span-12 lg:col-span-5 double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden shadow-sm">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-[11px] font-semibold uppercase tracking-wider border border-slate-700">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Real-Time Family Reassurance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Post-Visit Notes & Photos Sent to Your Phone
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Whether you’re at work across town or living abroad, you get a short update after every visit.
              </p>
            </div>

            {/* Simulated Smartphone Alert Mockup */}
            <div className="mt-5 p-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Home Companion Visit Log
                </span>
                <span>Today, 2:45 PM</span>
              </div>
              <p className="text-slate-200 leading-relaxed text-[11px]">
                “Visited Mum in West Bridgford. We picked up her prescription, then had tea and cake by the river at Victoria Embankment. Mum was smiling and ate a full lunch.”
              </p>
              <div className="flex items-center gap-2 pt-1 text-[10px] text-emerald-400 font-semibold">
                <ImageIcon className="w-3 h-3" />
                <span>2 photos uploaded to family portal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card: Vetting & Safety (col-span-12 sm:col-span-6 lg:col-span-5) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-white p-6 sm:p-8 flex flex-col justify-between h-full shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Gold-Standard Vetting & Safety
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every companion is in-person interviewed, police-vetted, and fully insured.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Enhanced Police DBS Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>£5,000,000 Public Liability Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Dementia Awareness & Safeguarding Vetted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Card: Minimum 1-Hour Visits (col-span-12 sm:col-span-6 lg:col-span-7) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-7 double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-white p-6 sm:p-8 flex flex-col justify-between h-full shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Unhurried, Dignified Time (Min. 1 Hour)
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                No 15-minute stopwatch rush. Companions have ample time to listen, make proper tea, play scrabble, or take relaxed walks at your loved one’s pace.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500">Flexible 1 to 4 hr slots</span>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900"
              >
                <span>Read our story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
