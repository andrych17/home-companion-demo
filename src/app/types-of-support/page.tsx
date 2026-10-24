import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Car,
  Flower2,
  CalendarCheck,
  Sparkles,
  Dog,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Types of Support | Tailored Home Companionship Bristol",
  description:
    "Explore our 5 core companion support services: Taking Trips, Gardening, Appointments, Housework, and Dog Walking across Bristol and the South West.",
};

export default function TypesOfSupportPage() {
  const services = [
    {
      title: "Taking Trips",
      href: "/types-of-support/trips",
      description:
        "Enjoying days out, scenic country drives, garden centres, family visits, or weekly shopping around Bristol.",
      icon: Car,
      badge: "Outings & Leisure",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-100",
      highlights: [
        "Door-to-door escort in clean, insured vehicles",
        "Trips to Bristol Harbourside, Clifton, and Bath",
        "Gentle assistance with shopping bags and pushchairs",
        "Flexible half-day and full-afternoon excursions",
      ],
    },
    {
      title: "Gardening Support",
      href: "/types-of-support/gardening",
      description:
        "Light garden maintenance, planting seasonal flowers, patio pot care, and enjoying the fresh air together in the garden.",
      icon: Flower2,
      badge: "Outdoor Wellbeing",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      highlights: [
        "Weeding, pruning, and watering pots and raised beds",
        "Sweeping paths and patio spaces to prevent slips",
        "Encouraging safe outdoor exercise and fresh air",
        "Working alongside your loved one at their own pace",
      ],
    },
    {
      title: "Appointments Escort",
      href: "/types-of-support/appointments",
      description:
        "Reliable door-to-door accompaniment for GP appointments, hospital clinics, hairdressers, and optician visits.",
      icon: CalendarCheck,
      badge: "Healthcare & Errands",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      highlights: [
        "Escort to Southmead Hospital, BRI, and local GPs",
        "Patience in waiting rooms and calm support throughout",
        "Writing down doctor notes to share with family",
        "Safe return home with prescription collection",
      ],
    },
    {
      title: "Housework & Tidying",
      href: "/types-of-support/housework",
      description:
        "Light household tasks to keep home safe, clean, and welcoming—from fresh linens and laundry to making warm lunches.",
      icon: Sparkles,
      badge: "Home Comfort",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
      highlights: [
        "Light cleaning, vacuuming, and dusting living spaces",
        "Washing, ironing, and changing bed sheets",
        "Nutritious light meal and hot tea preparation",
        "De-cluttering walkways to prevent trip hazards",
      ],
    },
    {
      title: "Dog Walking & Pet Care",
      href: "/types-of-support/dog-walking",
      description:
        "Keeping beloved pets active, happy, and fed when walking or bending has become difficult for their owners.",
      icon: Dog,
      badge: "Pet Companionship",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
      highlights: [
        "Gentle neighborhood walks for family dogs",
        "Feeding, brushing, and fresh water replenishment",
        "Accompanying owners on walks with their dogs",
        "Transport to local Bristol veterinary clinics",
      ],
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-800 text-[11px] font-semibold uppercase tracking-wider border border-slate-900/10">
            <span>Tailored Support Spectrum</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Companionship tailored to your{" "}
            <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
              exact routine
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            We provide practical, social, and emotional support designed around
            what matters most to your loved one. Explore our 5 core services
            below to see how we can assist.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(3, 5).map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* How Visits Work */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-white p-8 sm:p-12 shadow-sm space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                How We Deliver Every Visit
              </h2>
              <p className="text-slate-600 text-sm">
                Our standards are designed around dignity, safety, and
                unhurried human connection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Free In-Home Intro
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We visit you for tea, discuss your preferred routine, and
                  introduce your dedicated companion before any commitment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Unhurried Visits
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No 15-minute rushing. Visits start at 1 hour minimum, giving
                  plenty of time for calm conversation and thorough support.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Family Updates
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You receive friendly notes after visits confirming what was
                  achieved and how your loved one is feeling and eating.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Enhanced DBS & £5,000,000 Insured across all services</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1E293B] transition-colors"
              >
                <span>Discuss Your Family’s Needs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
