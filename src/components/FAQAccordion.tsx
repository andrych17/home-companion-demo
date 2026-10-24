"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category: "getting-started" | "safety" | "services" | "pricing";
}

const faqs: FAQItem[] = [
  {
    category: "getting-started",
    q: "What is the difference between a home companion and a registered care agency?",
    a: "A home companion focuses on social companionship, practical support, emotional well-being, and daily independence—such as taking trips, doctor appointment accompaniment, light housework, meal preparation, gardening, and dog walking. While we do not provide invasive clinical or personal nursing care (like catheter care or lifting), our companions provide the vital human connection, warmth, and household help that prevents loneliness and keeps seniors living happily at home.",
  },
  {
    category: "getting-started",
    q: "Can we meet our matched companion before starting regular visits?",
    a: "Yes, absolutely. We insist on a complimentary, no-obligation introductory visit in the comfort of your home. You and your family get to sit down over a cup of tea, chat, and ensure there is genuine chemistry and comfort before any service begins.",
  },
  {
    category: "safety",
    q: "How thoroughly are your companions vetted and background-checked?",
    a: "Safeguarding is our number one priority. Every companion undergoes an Enhanced DBS check (Disclosure and Barring Service with adult barred list check), two verified professional and character references, face-to-face identity validation, and £5,000,000 public liability insurance coverage.",
  },
  {
    category: "safety",
    q: "Are companions trained in dementia and memory loss awareness?",
    a: "Yes. Our companions receive comprehensive training in compassionate dementia communication, patience, managing memory lapses, creating calming routines, and recognizing subtle health or environmental changes that need flagging to family members.",
  },
  {
    category: "services",
    q: "Can the companion drive my loved one to hospital and clinic appointments?",
    a: "Yes. Companions with business-insured vehicles can escort clients door-to-door to Southmead Hospital, Bristol Royal Infirmary (BRI), St Michael's, GP surgeries, or dental clinics. The companion assists from the front door, stays by their side in the waiting room, takes notes if requested, and escorts them safely back inside their home.",
  },
  {
    category: "services",
    q: "What does light gardening and housework support include?",
    a: "It includes the practical tasks that keep a home pleasant and safe: sweeping paths, watering pots, deadheading flowers, tidying beds, laundry, ironing, preparing fresh lunches, clearing cluttered hallways to prevent slips, and changing bed linens.",
  },
  {
    category: "pricing",
    q: "What are your visit lengths and pricing structure?",
    a: "We believe meaningful support cannot be rushed into 15 or 30-minute slots. Our visits start at a minimum of 1 hour (most families choose 2 to 4 hour blocks). Rates are transparent and straightforward, typically starting from £24 to £28 per hour depending on visit timing and specific transport requirements, with no hidden sign-up fees or tie-in contracts.",
  },
  {
    category: "getting-started",
    q: "What happens if our regular companion is unwell or on holiday?",
    a: "Because consistency matters, we assign a primary companion alongside an introduced 'buddy companion' who has already met your loved one. If your regular companion is unwell, we will always discuss with you beforehand and arrange trusted coverage or reschedule according to your preference.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-6">
      {/* Category filter buttons */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {[
          { id: "all", label: "All Questions" },
          { id: "getting-started", label: "Getting Started" },
          { id: "safety", label: "DBS & Safeguarding" },
          { id: "services", label: "Trips & Services" },
          { id: "pricing", label: "Pricing & Visits" },
        ].map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setSelectedCategory(cat.id);
              setOpenIndex(null);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-[#0F172A] text-white shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.q}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white border-sky-200 shadow-sm ring-1 ring-sky-500/20"
                  : "bg-white border-slate-200/80 hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-sky-100 text-sky-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                  <p className="pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
