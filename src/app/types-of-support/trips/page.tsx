import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Car,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Taking Trips & Outings Support | HomeCompanions.uk Bristol",
  description:
    "Accompanied trips, social outings, scenic drives, shopping, and visits to family across Bristol, Bath, and the South West in insured vehicles.",
};

export default function TripsPage() {
  const tripIdeas = [
    {
      title: "Scenic Country Drives & Walks",
      desc: "Enjoying the fresh air at Leigh Woods, Ashton Court Estate, Clevedon Pier, or the Chew Valley lakes.",
    },
    {
      title: "Garden Centres & Farm Shops",
      desc: "Visiting trusted local nurseries in North Somerset or Almondsbury for plants, afternoon tea, and scones.",
    },
    {
      title: "Visiting Family & Old Friends",
      desc: "Door-to-door escort to visit children, grandchildren, or lifelong friends who live across town.",
    },
    {
      title: "Harbourside Strolls & Culture",
      desc: "Gentle walks around Bristol Harbourside, visiting the M Shed or Bristol Museum and Art Gallery with zero rushing.",
    },
    {
      title: "Weekly Grocery & High Street Shopping",
      desc: "Support choosing groceries, carrying heavy shopping bags, and browsing favorite shops on Clifton or Gloucester Road.",
    },
    {
      title: "Lunch Out & Traditional Pub Visits",
      desc: "Enjoying a Sunday roast or pub lunch in a cozy country setting with a friendly, conversational companion.",
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[11px] font-semibold uppercase tracking-wider border border-rose-100">
            <Car className="w-3.5 h-3.5 text-rose-500" />
            <span>Outings & Companionship</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Taking Trips & Outings in{" "}
            <span className="font-serif italic font-normal text-rose-700 underline decoration-rose-300 decoration-wavy decoration-2">
              Bristol & Beyond
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            Getting out of the house brings fresh perspectives, joyful
            conversations, and vital connection to the world. Our companions
            provide safe, door-to-door transport in business-insured vehicles for
            leisure, shopping, and scenic adventures.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact?service=trips"
              className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow transition-all flex items-center gap-2"
            >
              <span>Enquire About Trip Companionship</span>
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

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Dignified, Door-to-Door Outings Built Around Your Pace
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Many seniors become isolated simply because driving has become
                too stressful or public transport feels overwhelming and
                hurried.
              </p>
              <p>
                With HomeCompanions, your loved one never feels rushed. The
                companion arrives at the door, assists with coats and walking
                sticks, opens car doors, gently handles folding wheelchairs if
                needed, and stays right by their side throughout the entire
                outing.
              </p>
              <p>
                Whether it is sitting on a sheltered bench watching boats on the
                Floating Harbour or picking up fresh fruit at a local farm shop,
                every trip is an opportunity to laugh, reminisce, and enjoy the
                beauty of the South West.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Business-insured personal vehicles</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mobility aid & walking stick assistance</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Assistance carrying shopping bags</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Visit notes & photos sent to family</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
              <div className="double-bezel-inner bg-[#0F172A] text-white p-8 sm:p-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Transport Safety Guarantee</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  Safe, Reliable & Insured Escort
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We check clean driving records, MOT status, and comprehensive
                  business insurance policies for all vehicle trips.
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>No reliance on unknown taxi drivers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Always the same trusted companion driver</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Safe accompaniment back inside their living room</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Outings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Favorite Bristol Outing Destinations
          </h2>
          <p className="text-slate-600 text-sm">
            Here are some of the most loved outings our companions take with
            clients every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tripIdeas.map((idea, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{idea.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {idea.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross link to other services */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-slate-200/80">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Combine Outings with Other Support
        </h3>
        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
          Many families combine taking trips with hospital appointments or
          household help on the same afternoon visit.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/types-of-support/appointments"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Appointments Escort →
          </Link>
          <Link
            href="/types-of-support/housework"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Housework Support →
          </Link>
          <Link
            href="/types-of-support/gardening"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Gardening Support →
          </Link>
        </div>
      </section>
    </div>
  );
}
