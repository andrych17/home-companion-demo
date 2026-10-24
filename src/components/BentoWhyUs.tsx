import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Smartphone,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";

export default function BentoWhyUs() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-5">
        {/* Main Highlight Card (col-span-12 lg:col-span-7) */}
        <div className="col-span-12 lg:col-span-7 double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-white p-7 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-semibold uppercase tracking-wider border border-rose-100">
                <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
                <span>Meaningful Human Connection</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                One Consistent Companion, Not a Revolving Door of Strangers
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Most agencies send whichever carer happens to be on shift. We believe real companionship requires trust, shared laughter, and a familiar, warm face at the door. We carefully match your loved one with a dedicated companion based on shared interests, temperament, and life stories.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-extrabold text-slate-900">98%</div>
                <div className="text-xs text-slate-500 font-medium">Companion match satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">Zero</div>
                <div className="text-xs text-slate-500 font-medium">15-minute rushed visits</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold text-rose-600">1-on-1</div>
                <div className="text-xs text-slate-500 font-medium">Dedicated care & attention</div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Card 1 (col-span-12 lg:col-span-5) */}
        <div className="col-span-12 lg:col-span-5 double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-[#0F172A] text-white p-7 sm:p-10 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-[11px] font-semibold uppercase tracking-wider border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Gold-Standard Safeguarding</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
                Enhanced DBS & Rigorous Vetting
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Every companion undergoes enhanced police criminal record checks, in-person interviews, professional reference verification, and comprehensive training in safeguarding and dementia awareness.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>£5,000,000 Public Liability Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Strict photo ID & continuous oversight</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Emergency protocols & family alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card (col-span-12 sm:col-span-6 lg:col-span-5) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-white p-7 sm:p-8 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Family Peace of Mind & Visit Notes
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Whether you live down the road in Bishopston or across the globe in Australia, we send gentle post-visit summaries so you always know how your loved one is doing, eating, and feeling.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Real-time family reassurance</span>
              <span className="text-emerald-600">Included free</span>
            </div>
          </div>
        </div>

        {/* Fourth Card (col-span-12 sm:col-span-6 lg:col-span-7) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-7 double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-white p-7 sm:p-8 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Local Bristol & South West Companions
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our companions live locally in Bristol and the surrounding South West counties. We know the quietest times at the Bristol Museum, the step-free entrances to Ashton Court cafe, and how to navigate Southmead and Bristol Royal Infirmary without stress.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/areas"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900"
              >
                <span>View Bristol postcodes & coverage map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs text-slate-500">BS1–BS40 & Bath BA1/BA2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
