import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { HelpCircle, Phone, FileQuestion } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find clear answers on companion matching, Enhanced DBS vetting, hourly rates, visit lengths, and coverage across Bristol and the South West.",
};

export default function FAQPage() {
  return (
    <div className="space-y-16 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-800 text-[11px] font-semibold uppercase tracking-wider border border-slate-900/10">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Questions & Clear Answers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Everything you need to know about our{" "}
            <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
              companion support
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            Clear, honest information about how we work, vetting, visit
            pricing, and how we care for your loved ones in Bristol and the
            South West.
          </p>
        </div>
      </section>

      {/* Main Accordion Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      {/* Escalation Box for Unresolved Questions */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="double-bezel-inner bg-[#0F172A] text-white p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-slate-700">
                <FileQuestion className="w-3.5 h-3.5" />
                <span>Have a Specific Question?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Can’t find the answer you’re looking for?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our local Bristol team is on hand Monday to Saturday to answer
                any specific questions regarding your loved one’s unique
                routine or medical circumstances.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] font-bold text-sm shadow text-center transition-all"
              >
                Ask a Question Online
              </Link>
              <a
                href="tel:01174960123"
                className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call 0117 496 0123</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
