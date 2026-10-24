"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, CheckCircle2, AlertCircle, ArrowRight, MapPin } from "lucide-react";

export default function PostcodeChecker() {
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<{
    status: "idle" | "available" | "unavailable";
    area?: string;
    details?: string;
  }>({ status: "idle" });

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = postcode.trim().toUpperCase();
    if (!clean) return;

    // Check Bristol (BS1-BS40) and Bath (BA1-BA2)
    const isBristol = clean.startsWith("BS");
    const isBath = clean.startsWith("BA1") || clean.startsWith("BA2");

    if (isBristol || isBath) {
      let areaName = "Bristol & Immediate Environs";
      if (clean.startsWith("BS8") || clean.startsWith("BS6")) areaName = "Clifton, Cotham & Redland";
      else if (clean.startsWith("BS9") || clean.startsWith("BS10")) areaName = "Westbury-on-Trym, Henleaze & Southmead";
      else if (clean.startsWith("BS1") || clean.startsWith("BS2")) areaName = "Central Bristol & Harbourside";
      else if (clean.startsWith("BS3") || clean.startsWith("BS4")) areaName = "Bedminster, Southville & Brislington";
      else if (clean.startsWith("BS5") || clean.startsWith("BS7")) areaName = "Bishopston, St Andrews & Eastville";
      else if (clean.startsWith("BS16") || clean.startsWith("BS15")) areaName = "Fishponds, Kingswood & Downend";
      else if (clean.startsWith("BS20") || clean.startsWith("BS21")) areaName = "Portishead & Clevedon";
      else if (clean.startsWith("BS30") || clean.startsWith("BS31")) areaName = "Keynsham & Bitton";
      else if (isBath) areaName = "Bath & North East Somerset";

      setResult({
        status: "available",
        area: areaName,
        details: "Active companions available with same-week introductory visits.",
      });
    } else {
      setResult({
        status: "unavailable",
        area: clean,
        details:
          "We currently focus on Bristol and immediate South West areas. Enquire anyway and we'll check partner availability.",
      });
    }
  };

  return (
    <div className="p-1.5 rounded-3xl bg-slate-900/5 ring-1 ring-slate-900/10">
      <div className="bg-white rounded-[calc(1.5rem-0.375rem)] p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700 mb-2">
          <MapPin className="w-4 h-4" />
          <span>Local Area Coverage Finder</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Check Companion Availability in Your Postcode
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Enter your or your loved one’s postcode (e.g. BS8, BS9, BS3, BA1) to
          verify our companion presence in your neighbourhood.
        </p>

        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="e.g. BS8 3HA or BS9"
              aria-label="Enter UK Postcode"
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white text-sm font-medium transition-all"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm transition-all shadow-sm hover:shadow shrink-0"
          >
            Check Postcode
          </button>
        </form>

        {result.status === "available" && (
          <div className="mt-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-bold text-emerald-950">
                Service Available in {result.area}
              </div>
              <p className="text-xs text-emerald-800 mt-0.5 leading-relaxed">
                {result.details}
              </p>
              <div className="mt-3">
                <Link
                  href={`/contact?postcode=${encodeURIComponent(postcode)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-950 underline underline-offset-4"
                >
                  <span>Book an introductory companion meeting</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {result.status === "unavailable" && (
          <div className="mt-5 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-bold text-amber-950">
                Postcode Area Outside Standard Hub
              </div>
              <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">
                {result.details}
              </p>
              <div className="mt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-950 underline underline-offset-4"
                >
                  <span>Speak with our regional coordinator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Popular coverage list */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Immediate Coverage:</span>
          {["Clifton (BS8)", "Henleaze (BS9)", "Bishopston (BS7)", "Redland (BS6)", "Bedminster (BS3)", "Keynsham (BS31)", "Portishead (BS20)", "Bath (BA1/BA2)"].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                const pc = tag.match(/\((.*?)\)/)?.[1] || "";
                setPostcode(pc);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
