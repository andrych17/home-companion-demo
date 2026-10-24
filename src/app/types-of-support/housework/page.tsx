import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Phone,
  Coffee,
  Heart,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Housework & Tidying Support | HomeCompanions.uk Bristol",
  description:
    "Gentle household help, bed linen changes, laundry, meal preparation, and decluttering to keep seniors living safely and comfortably in Bristol.",
};

export default function HouseworkPage() {
  const houseworkTasks = [
    {
      title: "Bed Linen Changing & Fresh Beds",
      desc: "Changing heavy duvet covers and fitted sheets, turning mattresses, and airing bedrooms for deep, clean comfort.",
    },
    {
      title: "Laundry, Washing & Ironing",
      desc: "Washing loads, hanging laundry to dry, folding neatly into wardrobes, and careful ironing of favorite clothes.",
    },
    {
      title: "Nutritious Light Meals & Tea",
      desc: "Preparing wholesome lunches, warm soups, boiling fresh tea, and enjoying a relaxing sit-down meal together.",
    },
    {
      title: "Light Cleaning & Vacuuming",
      desc: "Vacuuming carpets, wiping kitchen counters, polishing furniture, and keeping living rooms tidy and dust-free.",
    },
    {
      title: "Fridge & Larder Safety Audits",
      desc: "Checking expiration dates, discarding spoiled food, and writing shopping lists for favorite essentials.",
    },
    {
      title: "Hallway Decluttering & Fall Prevention",
      desc: "Clearing walkway clutter, securing rugs, and ensuring walking frames and paths are completely free of trip hazards.",
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-[11px] font-semibold uppercase tracking-wider border border-sky-100">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Home Comfort & Housework</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Keeping the home comfortable, clean, and{" "}
            <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
              safe
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            Household chores that once felt effortless can become tiring or
            dangerous as mobility changes. Our companions provide the patient
            extra help needed to keep homes spotless, safe, and welcoming,
            accompanied by warm conversation.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact?service=housework"
              className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow transition-all flex items-center gap-2"
            >
              <span>Enquire About Housework Support</span>
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
              Domestic Support With a Friendly, Caring Touch
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Unlike anonymous commercial cleaning services that rush through
                with headphones on, our companions treat your loved one’s home
                with profound respect and companionship.
              </p>
              <p>
                We work collaboratively: if your mother enjoys folding tea towels
                while chatting about her grandchildren, we do it together at the
                kitchen table. If changing a heavy king-size duvet cover causes
                back pain, our companion handles it with pleasure.
              </p>
              <p>
                We also act as caring eyes and ears. We gently check that the
                heating is set comfortably, food in the fridge is fresh, and
                there are no trailing cords or loose floor rugs that could cause
                a dangerous fall.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bed linen changes & heavy lifting help</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Nutritious light meal & tea preparation</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fall hazard removal & decluttering</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Enhanced DBS & £5M Insured</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
              <div className="double-bezel-inner bg-[#0F172A] text-white p-8 sm:p-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                  <Home className="w-4 h-4" />
                  <span>Respectful Independence</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  Your Home, Your Rules
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We never rearrange drawers or change routines without your
                  express permission. Your loved one remains in complete control
                  of their space.
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Using your preferred cleaning products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Consistent companion who knows where items belong</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Zero pressure or rushed tasks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Housework Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Everyday Household Tasks We Assist With
          </h2>
          <p className="text-slate-600 text-sm">
            Customize your visits: combine laundry and dusting with afternoon tea
            or garden time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {houseworkTasks.map((task, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm">
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
          Combine Housework with Other Support
        </h3>
        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
          Pair household support with a gentle dog walk or weekly grocery
          shopping in the same afternoon.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/types-of-support/trips"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Weekly Grocery Trips →
          </Link>
          <Link
            href="/types-of-support/dog-walking"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Dog Walking & Pet Care →
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
