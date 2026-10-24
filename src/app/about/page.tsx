import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Heart,
  ShieldCheck,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  HelpCircle,
  MessageSquareHeart,
  CheckCircle2,
  Phone,
} from "lucide-react";
import PhotoFrame from "@/components/PhotoFrame";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Home Companion, an independent support worker helping older people across Nottingham stay independent, connected and happy at home.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Human Connection First",
      desc: "We prioritize real conversation, shared hobbies, and emotional well-being above clinical check-boxes.",
      icon: Heart,
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Consistent Familiar Faces",
      desc: "Zero rotation of random strangers. We introduce one dedicated primary companion for long-term trust.",
      icon: Users,
      color: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
      title: "Rigorous Safeguarding",
      desc: "Enhanced DBS police checks, professional references, £5M liability insurance, and dementia awareness training.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Family Transparency",
      desc: "Clear visit updates and peaceful reassurance for sons, daughters, and relatives, whether living near or far.",
      icon: Sparkles,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
  ];

  return (
    <div className="space-y-24 py-12 sm:py-20 pb-24">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-800 text-[11px] font-semibold uppercase tracking-wider border border-slate-900/10">
              <span>About Home Companion</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Founded on the belief that everyone deserves a{" "}
              <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
                trusted friend
              </span>{" "}
              at home.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed pt-2">
              Home Companion was set up in Nottingham to fill the gap between
              rushed 15-minute agency visits and full-time care: friendly,
              practical help and genuine company that lets older people stay
              in the homes they love.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <PhotoFrame photo={photos.aboutGarden} aspect="aspect-[4/5]" eager />
          </div>
        </div>
      </section>

      {/* 2. Story & Ethos (Asymmetric split) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why We Are Different From Traditional Care Agencies
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Many Nottingham families know the feeling. A different agency
                worker turns up every day, rushes through a checklist in 15
                minutes and barely has time to ask how Mum is feeling.
              </p>
              <p>
                What most older people really want isn’t clinical care. It’s
                someone to sit down with a cup of tea, help with the weekly shop,
                give a lift to the doctor’s and walk round Wollaton Park without
                feeling like a burden.
              </p>
              <p>
                Home Companion is built on exactly that: one friendly, reliable,
                familiar face with time to listen, whether the conversation is
                about baking, old films or Forest’s latest result.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80">
              <div>
                <div className="text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Enhanced DBS vetted
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900">1 Hour+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Unrushed visit lengths
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-sky-700">1 to 1</div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Consistent matching
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
              <div className="double-bezel-inner bg-[#0F172A] text-white p-8 sm:p-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-sky-300">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Our Companion Vetting Standard
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We hire fewer than 8% of applicants. We only employ companions
                  we would wholeheartedly trust to care for our own parents and
                  grandparents.
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>In-person character & empathy interviews</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Enhanced DBS criminal background checks</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Two verified professional & character references</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dementia Friends awareness certification</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Safe driving & business car insurance audits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Guiding Principles
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every decision we make is rooted in empathy, respect, and local
            community care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10"
              >
                <div className="double-bezel-inner bg-white p-6 sm:p-7 flex flex-col justify-between h-full shadow-sm">
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 ${v.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Sub-Navigation Cards matching the sitemap: FAQ and Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200/80 pt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
              Explore More
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Learn More About Working With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* FAQ card */}
            <Link
              href="/faq"
              className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 group hover:-translate-y-1 spring-transition"
            >
              <div className="double-bezel-inner bg-white p-8 flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors flex items-center gap-2">
                    <span>Frequently Asked Questions</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Have questions about rates, visit lengths, DBS verification,
                    or scheduling? Read our clear, honest answers.
                  </p>
                  <span className="inline-block text-xs font-bold text-sky-700 mt-4 underline underline-offset-4">
                    View FAQ Guide →
                  </span>
                </div>
              </div>
            </Link>

            {/* Testimonials card */}
            <Link
              href="/testimonials"
              className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 group hover:-translate-y-1 spring-transition"
            >
              <div className="double-bezel-inner bg-white p-8 flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 shrink-0">
                  <MessageSquareHeart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors flex items-center gap-2">
                    <span>Client Testimonials</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Read stories from daughters, sons and older people
                    across Nottingham and surrounding areas.
                  </p>
                  <span className="inline-block text-xs font-bold text-rose-700 mt-4 underline underline-offset-4">
                    Read Client Reviews →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 border border-slate-200/80">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Ready to find the right companion for your family?
          </h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
            We offer a completely free in-home meeting so you can get to know us
            with zero obligations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow transition-all"
            >
              Arrange a Free Consultation
            </Link>
            <a
              href="tel:07438318947"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>07438 318947</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
