import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Star, MessageSquareHeart, Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Client & Family Testimonials | HomeCompanions.uk Bristol",
  description:
    "Read genuine reviews and heartfelt stories from families who use HomeCompanions across Bristol, Bath, and the South West.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Claire visits Mum twice a week in Redland. Mum used to spend entire afternoons staring out the window, but now she has her spark back. They bake scones together, visit local garden nurseries, and Claire even sends me a quick photo so I can see Mum smiling. The peace of mind is priceless.",
      author: "Rachel Thompson",
      role: "Daughter of client (84)",
      location: "Redland, Bristol (BS6)",
      service: "Taking Trips & Housework",
      date: "October 2026",
    },
    {
      quote:
        "My father had a mild stroke last year and was anxious about attending cardiology follow-ups at Southmead Hospital alone. David has been his rock. He escorts him from the front door, stays calmly by his side in the clinic, and writes down the doctor's instructions for our family.",
      author: "Mark Evans",
      role: "Son of client (79)",
      location: "Henleaze, Bristol (BS9)",
      service: "Appointments Escort",
      date: "September 2026",
    },
    {
      quote:
        "Mum has early-stage vascular dementia and can be very timid with new people. We tried two large care agencies before, but having a different person turn up every time caused huge distress. HomeCompanions matched her with Sarah, and the consistency has been an absolute miracle. They are like old friends.",
      author: "Eleanor Vance",
      role: "Daughter of client (81)",
      location: "Clifton Village, Bristol (BS8)",
      service: "Companionship & Dog Walking",
      date: "August 2026",
    },
    {
      quote:
        "My husband's arthritis made it impossible for him to tend his beloved rose beds. Liam comes by every Thursday. Together they prune, sweep the patio, and pot seasonal geraniums. It has given Peter a reason to go outside and feel useful again.",
      author: "Margaret Collins",
      role: "Wife of client (77)",
      location: "Bishopston, Bristol (BS7)",
      service: "Gardening & Outdoors",
      date: "October 2026",
    },
    {
      quote:
        "Living in London while my elderly aunt lives in Bath was keeping me awake at night. HomeCompanions set up weekly visits to help her with laundry, grocery shopping, and changing her bed sheets. Their visit notes are detailed and thoughtful. Highly recommended.",
      author: "James Henderson",
      role: "Nephew of client (88)",
      location: "Bath & North East Somerset (BA1)",
      service: "Housework & Grocery Trips",
      date: "September 2026",
    },
    {
      quote:
        "Buster is Mum’s border terrier and her whole world. When Mum broke her wrist, she was terrified Buster would have to be rehomed. Fiona stepped in to walk Buster daily and bring Mum lunch. They both adore her.",
      author: "Hannah Davies",
      role: "Daughter of client (73)",
      location: "Bedminster, Bristol (BS3)",
      service: "Dog Walking & Pet Care",
      date: "July 2026",
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-800 text-[11px] font-semibold uppercase tracking-wider border border-slate-900/10">
            <MessageSquareHeart className="w-3.5 h-3.5 text-rose-500" />
            <span>Family Stories & Real Feedback</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Hear from families across Bristol who found{" "}
            <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
              peace of mind
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            Read how our dedicated companions bring warmth, conversation, and
            daily practical support to seniors in their own homes.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div className="text-sm font-bold text-slate-800">
              4.98 / 5.0 Rating Across 45+ Verified Families
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 flex flex-col justify-between"
            >
              <div className="double-bezel-inner bg-white p-7 sm:p-8 flex flex-col justify-between h-full shadow-sm">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {t.date}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-slate-900">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                  <div className="text-xs text-slate-500">{t.location}</div>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-700">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{t.service}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] text-white">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Would you like to introduce a companion to your loved one?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6">
            We arrange a free, relaxed tea and chat visit so your family can
            meet their prospective companion beforehand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] font-bold text-sm shadow transition-all"
            >
              Arrange a Free Visit
            </Link>
            <a
              href="tel:01178901234"
              className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call 0117 890 1234</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
