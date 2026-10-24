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
  Heart,
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
      {/* 1. HERO: full-bleed photo first. Desktop overlays the copy on a
          navy wash from the left; mobile stacks the copy under the photo. */}
      <section className="relative isolate bg-[#0F172A] text-white">
        <div className="relative h-[62svh] min-h-[380px] max-h-[600px] lg:max-h-none lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
          <Image
            src={photos.heroSupport.src}
            alt={photos.heroSupport.alt}
            fill
            placeholder="blur"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
            style={{ objectPosition: photos.heroSupport.position }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/10 to-transparent lg:bg-gradient-to-r lg:from-[#0F172A]/90 lg:via-[#0F172A]/45 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-12 lg:mt-0 lg:pb-0 lg:min-h-[calc(100svh-76px)] lg:flex lg:items-center">
          <div className="max-w-[34rem] space-y-5 lg:py-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md text-[10px] font-medium uppercase tracking-[0.2em]">
              <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
              <span>Bristol & the South West</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Growing older at home
              <span className="block font-serif italic font-normal text-amber-300">
                and never alone.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              A friendly, DBS-checked companion for outings, appointments,
              housework or just a good chat over tea.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-[#0F172A] pl-6 pr-2.5 py-3 rounded-full font-bold text-sm spring-transition"
              >
                <span>Arrange a free introduction</span>
                <span className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center spring-transition group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <a
                href="tel:01174960123"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/25 backdrop-blur-md font-semibold text-sm spring-transition"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>0117 496 0123</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/75 font-medium">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                ))}
                <span className="ml-1 text-white">4.9/5 from 80+ families</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Enhanced DBS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-300" />
                <span>£5M insured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small human note pinned to the photo, desktop only */}
        <figure className="hidden lg:block absolute bottom-10 right-8 xl:right-12 max-w-[17rem] p-1.5 rounded-[1.5rem] bg-white/10 ring-1 ring-white/20 backdrop-blur-md">
          <div className="rounded-[calc(1.5rem-0.375rem)] bg-white/90 px-5 py-4 text-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
            <blockquote className="font-serif italic text-[15px] leading-snug">
              “Tuesdays with Claire are the best part of my week.”
            </blockquote>
            <figcaption className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Margaret, 84 · Redland
            </figcaption>
          </div>
        </figure>
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
