"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import {
  Clock,
  Car,
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  HeartHandshake,
  ShoppingBasket,
  Users,
} from "lucide-react";

export default function CareEstimator() {
  const [frequency, setFrequency] = useState<number>(2); // 1, 2, or 3+ days
  const [focus, setFocus] = useState<string>("outings");

  const frequencies = [
    { days: 1, label: "1 Day / Week", hours: "2–3 hrs/wk", popular: false },
    { days: 2, label: "2 Days / Week", hours: "4–6 hrs/wk", popular: true },
    { days: 3, label: "3+ Days / Week", hours: "8–12 hrs/wk", popular: false },
  ];

  const focusOptions = [
    {
      id: "outings",
      label: "Company & Outings",
      icon: HeartHandshake,
      note: "Chats at home, cafés, parks and days out",
    },
    {
      id: "appointments",
      label: "Appointments",
      icon: Car,
      note: "QMC, City Hospital, GP clinics & notes",
    },
    {
      id: "shopping",
      label: "Shopping & Errands",
      icon: ShoppingBasket,
      note: "Weekly shop, post office, bank & prescriptions",
    },
    {
      id: "community",
      label: "Community Activities",
      icon: Users,
      note: "Lunch clubs, classes and coffee mornings",
    },
  ];

  // Pricing calculations
  const hourlyRate = 24;
  const hoursPerDay = 2.5;
  const totalWeeklyHours = frequency * hoursPerDay;
  const estimatedWeekly = totalWeeklyHours * hourlyRate;

  return (
    <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
      <div className="double-bezel-inner bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold uppercase tracking-wider border border-sky-100 mb-3">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Interactive Care Plan Builder</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Tailor Your Loved One’s Weekly Support
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Select desired visit frequency and support focus for an instant estimate.
              </p>
            </div>

            {/* Step 1: Frequency Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                1. How often would you like companionship visits?
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {frequencies.map((f) => (
                  <button
                    key={f.days}
                    type="button"
                    onClick={() => setFrequency(f.days)}
                    className={`relative p-3 rounded-2xl text-left border transition-all ${
                      frequency === f.days
                        ? "bg-[#0F172A] text-white border-[#0F172A] shadow-sm"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80"
                    }`}
                  >
                    {f.popular && (
                      <span className="absolute -top-2 right-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider shadow-xs">
                        Most Popular
                      </span>
                    )}
                    <div className="font-bold text-xs sm:text-sm">{f.label}</div>
                    <div
                      className={`text-[11px] ${
                        frequency === f.days ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {f.hours}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Focus Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                2. What is your primary support focus?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {focusOptions.map((opt) => {
                  const Icon = opt.icon;
                  const active = focus === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFocus(opt.id)}
                      className={`p-3 rounded-2xl text-left border transition-all flex items-start gap-2.5 ${
                        active
                          ? "bg-sky-50 border-sky-300 ring-1 ring-sky-300 text-slate-900"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                          active
                            ? "bg-sky-600 text-white"
                            : "bg-white text-slate-600 border border-slate-200"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs truncate">
                          {opt.label}
                        </div>
                        <div className="text-[10px] text-slate-500 line-clamp-1">
                          {opt.note}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Instant Live Estimate Card */}
          <div className="lg:col-span-5">
            <div className="p-1 rounded-3xl bg-slate-900/5 ring-1 ring-slate-900/10">
              <div className="bg-[#0F172A] text-white rounded-[calc(1.5rem-0.25rem)] p-6 sm:p-7 shadow-lg relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sky-500/15 blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Transparent Estimate
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                    No Contract Lock-in
                  </span>
                </div>

                <div className="py-6 space-y-1">
                  <div className="text-xs text-slate-400">Estimated Weekly Investment</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      £{estimatedWeekly}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      / week (~{totalWeeklyHours} hrs)
                    </span>
                  </div>
                  <div className="text-[11px] text-sky-400 font-medium pt-1">
                    Standard rate: £{hourlyRate}/hr • Min 1 hr visit • Billed weekly
                  </div>
                </div>

                <div className="space-y-2.5 pb-6 border-b border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Same dedicated companion every week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real-time visit updates & photos to family</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Enhanced DBS & £5M insurance included</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <Link
                    href={`/contact?frequency=${frequency}days&focus=${focus}`}
                    className="group w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#0F172A] font-bold text-xs transition-all shadow-sm"
                  >
                    <span>Check Companion Availability</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={PHONE_HREF}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-slate-300 hover:text-white font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Or call {PHONE_DISPLAY} for friendly advice</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
