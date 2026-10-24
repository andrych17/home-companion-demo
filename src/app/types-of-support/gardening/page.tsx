import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Flower2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gardening & Outdoor Support | HomeCompanions.uk Bristol",
  description:
    "Light garden maintenance, seasonal potting, patio sweeping, and companion gardening to keep seniors safely connected to nature across Bristol.",
};

export default function GardeningPage() {
  const gardenTasks = [
    {
      title: "Side-by-Side Companion Gardening",
      desc: "Working alongside your loved one at their pace—potting bulbs, trimming stems, and chatting about their favorite plants.",
    },
    {
      title: "Light Weeding & Border Care",
      desc: "Keeping front and back flower borders neat and manageable without heavy or strenuous digging.",
    },
    {
      title: "Patio & Pathway Slip Prevention",
      desc: "Sweeping fallen leaves, tidying twigs, and clearing mossy flags so paths remain safe and slip-free.",
    },
    {
      title: "Potting, Hanging Baskets & Planters",
      desc: "Refreshing patio containers with vibrant seasonal flowers, fresh compost, and regular watering.",
    },
    {
      title: "Garden Enjoyment & Tea Outdoors",
      desc: "Setting out cushions, wiping patio tables, and preparing a fresh pot of tea to enjoy the garden together.",
    },
    {
      title: "Indoor Houseplant Care",
      desc: "Watering, feeding, and dusting treasured indoor orchids, ferns, and windowsill herbs.",
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold uppercase tracking-wider border border-emerald-100">
            <Flower2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Outdoor Wellbeing & Gardening</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Nurturing gardens, fresh air, and{" "}
            <span className="font-serif italic font-normal text-emerald-800 underline decoration-emerald-300 decoration-wavy decoration-2">
              outdoor joy
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            A neglected garden is often a major source of sorrow for elderly
            green-fingered enthusiasts. Our companions provide the extra hands,
            steady support, and cheerful company needed to keep gardens thriving
            and safe.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact?service=gardening"
              className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow transition-all flex items-center gap-2"
            >
              <span>Enquire About Gardening Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:01178901234"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call 0117 890 1234</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              More Than Just Gardening: Therapeutic Outdoor Time
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Studies show that spending just 30 minutes in a garden reduces
                blood pressure, improves mood, and stimulates cognitive recall
                for seniors living with memory loss or dementia.
              </p>
              <p>
                We do not operate like a commercial landscaping crew with noisy
                mowers. Instead, our companions work gently alongside your loved
                one. If your mother loves her hydrangeas, they will prune and deadhead
                together, discussing the names of varieties and enjoying the
                sunshine.
              </p>
              <p>
                Equally important is fall prevention: our companions ensure garden
                paths are kept free of slippery leaves, wet moss, and hosepipes,
                creating a secure environment for daily fresh-air strolls.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Therapeutic side-by-side companionship</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Patio sweeping & fall prevention</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Trips to local Bristol garden nurseries</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Enhanced DBS vetted companions</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
              <div className="double-bezel-inner bg-[#0F172A] text-white p-8 sm:p-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <Leaf className="w-4 h-4" />
                  <span>Practical Scope</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  What Gardening Support Includes
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We specialize in light, safe, domestic garden tasks that bring
                  immediate joy and safety to everyday life.
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Pruning, deadheading & gentle weeding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Seasonal potting & container planting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Raking, path sweeping & leaf tidying</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Watering & greenhouse care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Gardening Activities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Common Gardening & Outdoor Support Tasks
          </h2>
          <p className="text-slate-600 text-sm">
            Everything is tailored to your garden layout and your loved one’s
            physical comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardenTasks.map((task, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{task.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {task.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross link */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-slate-200/80">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Pair with Other Companion Services
        </h3>
        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
          Combine garden care with afternoon tea and light housework, or a trip
          to pick up fresh plants from the garden centre.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/types-of-support/trips"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Garden Centre Trips →
          </Link>
          <Link
            href="/types-of-support/housework"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Housework Support →
          </Link>
          <Link
            href="/types-of-support/dog-walking"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Dog Walking Support →
          </Link>
        </div>
      </section>
    </div>
  );
}
