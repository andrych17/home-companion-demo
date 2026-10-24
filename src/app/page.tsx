import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  Flower2,
  CalendarCheck,
  Sparkles,
  Dog,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
  CheckCircle2,
  Check,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { photos } from "@/lib/photos";
import BentoWhyUs from "@/components/BentoWhyUs";
import TrustTicker from "@/components/TrustTicker";
import CareEstimator from "@/components/CareEstimator";

export default function HomePage() {
  const featuredServices = [
    {
      title: "Taking Trips & Outings",
      href: "/types-of-support/trips",
      image: photos.trips,
      description:
        "Enjoying days out, country drives, garden centres, and weekly shopping around Bristol.",
      icon: Car,
      badge: "Outings & Leisure",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-100",
      highlights: [
        "Door-to-door escort in clean, insured car",
        "Trips to Clifton, Harbourside & Bath",
        "Assistance with shopping bags",
      ],
    },
    {
      title: "Appointments Escort",
      href: "/types-of-support/appointments",
      image: photos.appointments,
      description:
        "Reliable door-to-door accompaniment for GP clinics, Southmead, and BRI hospital appointments.",
      icon: CalendarCheck,
      badge: "Healthcare & Errands",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
      highlights: [
        "Escort to Southmead Hospital & BRI",
        "Calm waiting room companionship",
        "Clear notes taken for family",
      ],
    },
    {
      title: "Home Support & Garden",
      href: "/types-of-support/housework",
      image: photos.housework,
      description:
        "Light household tasks to keep home safe and welcoming—fresh linens, warm lunches, and patio care.",
      icon: Sparkles,
      badge: "Home Comfort",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
      highlights: [
        "Light cleaning & fresh bed linens",
        "Nutritious warm tea & lunch prep",
        "De-cluttering walkways for safety",
      ],
    },
  ];

  const testimonialsPreview = [
    {
      quote:
        "Having Claire visit Mum twice a week in Redland has given Mum her spark back. I no longer worry constantly while at work.",
      author: "Rachel Thompson",
      relationship: "Daughter of client in Redland, Bristol",
      service: "Taking Trips & Housework",
      rating: 5,
    },
    {
      quote:
        "David accompanied my father to Southmead Hospital. Calm, punctual, and took clear notes for our family. Dignified support.",
      author: "Mark Evans",
      relationship: "Son of client in Henleaze",
      service: "Appointments Escort",
      rating: 5,
    },
    {
      quote:
        "Sarah doesn't just walk the dog; she sits down for tea and listens to Mum’s stories. It’s genuine companionship from the heart.",
      author: "Eleanor Vance",
      relationship: "Family in Clifton Village",
      service: "Dog Walking & Companionship",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 overflow-hidden">
      {/* 1. HERO SECTION (Asymmetric, Anti-AI-slop design with Ambient Glow) */}
      <section className="relative pt-6 sm:pt-14">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(14,165,233,0.12),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (col-span-12 lg:col-span-7) */}
            <div className="col-span-12 lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 text-slate-800 text-[11px] font-semibold uppercase tracking-wider border border-slate-900/10">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>★ 4.9/5 Rated by 80+ Bristol Families • DBS Vetted</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08]">
                Warm, dignified home support that feels like{" "}
                <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
                  family
                </span>
                .
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                Trusted, police-checked companions to help seniors maintain
                independence at home. From scenic outings and hospital visits to
                light gardening, housework, and dog walking.
              </p>

              {/* Action Buttons (Double-nested CTA) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-[#1E293B] text-white pl-6 pr-2.5 py-3.5 rounded-full font-bold text-sm shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <span>Arrange a Free Introduction</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>

                <a
                  href="tel:01174960123"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200/90 shadow-xs transition-all"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call Bristol Office: 0117 496 0123</span>
                </a>
              </div>

              {/* Social Proof & Trust Badges */}
              <div className="pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-900 ml-1">4.9/5 TrustScore</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Enhanced Police DBS</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>£5M Insured</span>
                </div>
              </div>
            </div>

            {/* Right Card (col-span-12 lg:col-span-5) - Double-bezel companion profile preview */}
            <div className="col-span-12 lg:col-span-5">
              <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
                <div className="double-bezel-inner bg-white p-6 sm:p-7 shadow-sm overflow-hidden">
                  <div className="relative -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-5 aspect-[16/10] bg-slate-100">
                    <Image
                      src={photos.companionVisit.src}
                      alt={photos.companionVisit.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      loading="eager"
                      fetchPriority="high"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-1.5 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active in Clifton & Redland</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium">
                        Same Companion Always
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center font-bold text-sm shadow-xs shrink-0">
                        <span>HC</span>
                        <span className="text-[8px] uppercase tracking-wider text-sky-300 font-normal">
                          Bristol
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900 text-base">
                            Claire M.
                          </h3>
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                            Verified DBS
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          Dedicated Companion • 3+ years with local families
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 text-xs text-slate-700 leading-relaxed border border-slate-100 italic">
                      “I love spending quiet afternoons sharing a pot of Earl Grey tea, helping in the garden, and taking scenic strolls around Ashton Court.”
                    </div>

                    {/* Visual Feature Tags */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Enhanced DBS</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Insured Driver</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Dementia Aware</span>
                      </div>
                      <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Pet Friendly</span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <Link
                        href="/contact?companion=Claire"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs transition-colors"
                      >
                        <span>Meet a companion like Claire</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & CREDIBILITY TICKER */}
      <TrustTicker />

      {/* 3. CORE SERVICES SECTION (Compact 3-Card Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold uppercase tracking-wider border border-sky-100">
            <span>Tailored Home Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Support Your Loved Ones Every Day
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every visit is completely unhurried and tailored to your loved one’s personal routine.
          </p>
        </div>

        {/* 3 Core Featured Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/types-of-support"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 underline underline-offset-4"
          >
            <span>Explore all 5 support types including gardening & pet care</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. INTERACTIVE CARE ESTIMATOR (Dynamic Calculator) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CareEstimator />
      </section>

      {/* 5. WHY CHOOSE US (Asymmetric Bento Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-100">
              <span>The Home Companion Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Families Across Bristol Trust Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe elderly family members deserve dignified companionship from individuals who truly care.
            </p>
          </div>
          <div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-sky-700"
            >
              <span>Read our story & standards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <BentoWhyUs />
      </section>

      {/* 6. TESTIMONIALS (PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider border border-amber-100">
            <span>Client & Family Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stories From Local Bristol Families
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experiences from daughters, sons, and seniors across Clifton, Redland, and Henleaze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsPreview.map((t, idx) => (
            <div
              key={idx}
              className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 flex flex-col justify-between"
            >
              <div className="double-bezel-inner bg-white p-6 sm:p-7 flex flex-col justify-between h-full shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      Verified Client
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-xs sm:text-sm text-slate-900">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-slate-500">{t.relationship}</div>
                  <div className="text-[11px] font-semibold text-sky-700 mt-0.5">
                    Service: {t.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-700"
          >
            <span>Read all 40+ client stories & reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. COMPACT CALL TO ACTION WITH POSTCODE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-1.5 rounded-[2.5rem] bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="bg-[#0F172A] text-white rounded-[calc(2.5rem-0.375rem)] p-8 sm:p-12 relative overflow-hidden shadow-xl">
            {/* Ambient Glow */}
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
            <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="max-w-2xl space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-slate-700">
                <span>Free, Friendly In-Home Consultation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Give your loved one companionship, laughter, and independence.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact our Bristol coordination team today. We’ll discuss your loved
                one’s routine and arrange a relaxed, zero-pressure introductory
                tea chat. Covering BS1–BS40 and Bath BA1/BA2.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-[#0F172A] pl-6 pr-2.5 py-3.5 rounded-full font-bold text-sm shadow transition-all duration-300"
                >
                  <span>Make an Online Enquiry</span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>

                <a
                  href="tel:01174960123"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call 0117 496 0123</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-400 pt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Average callback response: under 2 hours • No contract lock-in</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
