import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Star, MessageSquareHeart, Phone, CheckCircle2 } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client & Family Testimonials",
  description:
    "Stories from families who use Home Companion across Nottingham and surrounding areas.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Mum used to spend whole afternoons staring out of the window. Now she has a Tuesday outing to look forward to: a coffee in West Bridgford, a stroll along the Trent, and a proper natter on the way home. She has her spark back.",
      author: "Rachel T.",
      role: "Daughter of client (84)",
      location: "West Bridgford (NG2)",
      service: "Companionship & Outings",
      date: "October 2026",
    },
    {
      quote:
        "Dad had a mild stroke last year and was dreading his follow-ups at QMC on his own. Now he's picked up from the front door, walked to the clinic and brought home again, with the doctor's advice written down for us.",
      author: "Mark E.",
      role: "Son of client (79)",
      location: "Beeston (NG9)",
      service: "Transport to Appointments",
      date: "September 2026",
    },
    {
      quote:
        "Mum has early-stage dementia and can be shy with new people. Two big agencies sent someone different every time and it upset her badly. Seeing the same friendly face each week has made all the difference.",
      author: "Eleanor V.",
      role: "Daughter of client (81)",
      location: "Wollaton (NG8)",
      service: "Companionship & Outings",
      date: "August 2026",
    },
    {
      quote:
        "Since his hip operation Peter couldn't manage the bus to his lunch club. Now he gets there every Thursday, sees his old friends and comes home full of stories. It's given him a reason to get dressed up again.",
      author: "Margaret C.",
      role: "Wife of client (77)",
      location: "Arnold (NG5)",
      service: "Community Activities",
      date: "October 2026",
    },
    {
      quote:
        "I live in London and my aunt lives alone in Carlton. Knowing her weekly shop, the post office and the bank are all taken care of means I can finally sleep at night. The little update texts are lovely too.",
      author: "James H.",
      role: "Nephew of client (88)",
      location: "Carlton (NG4)",
      service: "Shopping & Errands",
      date: "September 2026",
    },
    {
      quote:
        "Mum is on several medications and kept running out because she couldn't get to the pharmacy. Her prescriptions are now collected on time every month and checked off with her at the kitchen table.",
      author: "Hannah D.",
      role: "Daughter of client (73)",
      location: "Hucknall (NG15)",
      service: "Prescription Collection",
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
            Hear from families across Nottingham who found{" "}
            <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
              peace of mind
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            How a friendly, reliable face helps older people stay independent,
            connected and happy at home.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <div className="text-sm font-bold text-slate-800">
              Rated 5 stars by local families
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
            Would a little help make a difference for someone you love?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6">
            Start with a free, relaxed tea and chat visit so you can meet
            beforehand. No pressure, no contract.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] font-bold text-sm shadow transition-all"
            >
              Arrange a Free Visit
            </Link>
            <a
              href={PHONE_HREF}
              className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call now: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
