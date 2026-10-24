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
import PostcodeChecker from "@/components/PostcodeChecker";

export default function HomePage() {
  const services = [
    {
      title: "Taking Trips",
      href: "/types-of-support/trips",
      image: photos.trips,
      description:
        "Enjoying days out, scenic country drives, trips to garden centres, family visits, or weekly shopping around Bristol.",
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
      image: photos.gardening,
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
      image: photos.appointments,
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
      image: photos.housework,
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
      image: photos.dogWalking,
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

  const testimonialsPreview = [
    {
      quote:
        "Having Claire visit Mum twice a week in Redland has transformed all our lives. Mum has her spark back, loves their garden centre trips, and I no longer worry constantly while at work.",
      author: "Rachel Thompson",
      relationship: "Daughter of client in Redland, Bristol",
      service: "Taking Trips & Housework",
      rating: 5,
    },
    {
      quote:
        "David accompanied my father to his cardiology appointments at Southmead. Calm, punctual, and took clear notes for us. Truly dignified support without feeling like an agency intrusion.",
      author: "Mark Evans",
      relationship: "Son of client in Henleaze",
      service: "Appointments Escort",
      rating: 5,
    },
    {
      quote:
        "Sarah doesn't just walk Bella the retriever; she sits down for tea and listens to Mum’s stories about 1950s Bristol. It’s genuine companionship from the heart.",
      author: "Eleanor Vance",
      relationship: "Family in Clifton Village",
      service: "Dog Walking & Companionship",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION (Asymmetric, Anti-AI-slop design) */}
      <section className="relative pt-12 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (col-span-12 lg:col-span-7) */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 text-slate-800 text-[11px] font-semibold uppercase tracking-wider border border-slate-900/10">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Dedicated Companionship Across Bristol & South West</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08]">
                Warm, dignified home support that feels like{" "}
                <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
                  family
                </span>
                .
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                We provide trusted, DBS-checked companions to help seniors and
                loved ones maintain independence at home. From scenic outings
                and hospital appointments to light gardening, housework, and dog
                walking.
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
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200/90 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call Bristol Office: 0117 496 0123</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Enhanced DBS Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>£5M Insured & Reference Vetted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Free In-Home Chemistry Meeting</span>
                </div>
              </div>
            </div>

            {/* Right Card (col-span-12 lg:col-span-5) - Double-bezel companion profile preview */}
            <div className="col-span-12 lg:col-span-5">
              <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
                <div className="double-bezel-inner bg-white p-7 sm:p-8 shadow-sm overflow-hidden">
                  <div className="relative -mx-7 -mt-7 sm:-mx-8 sm:-mt-8 mb-6 aspect-[16/9] bg-slate-100">
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
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Featured Companion Match
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Available This Week
                    </span>
                  </div>

                  <div className="pt-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center font-bold text-lg shadow-sm shrink-0">
                        <span>HC</span>
                        <span className="text-[9px] uppercase tracking-wider text-sky-300 font-normal">
                          Bristol
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-900 text-base">
                            Claire M.
                          </h3>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs font-medium text-slate-600">
                            Clifton & Redland
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Companion with Home Companion for 3+ years
                        </p>
                        <div className="flex items-center gap-1 text-amber-500 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                          <span className="text-xs font-bold text-slate-700 ml-1">
                            5.0 (24 reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 text-xs text-slate-700 leading-relaxed border border-slate-100 italic">
                      “I love spending quiet afternoons helping with garden pots,
                      sharing a pot of Earl Grey tea, and driving clients to Ashton
                      Court for scenic strolls.”
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Enhanced DBS</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Business Driving</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Dementia Aware</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Pet Friendly</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact?companion=Claire"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs transition-colors"
                      >
                        <span>Request an introduction with a companion like Claire</span>
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

      {/* 2. KEY SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold uppercase tracking-wider border border-sky-100">
            <span>Tailored Home Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Support Your Loved Ones Every Day
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every person is unique. Whether your loved one needs support with
            outdoor gardening, dependable appointment escorts, or just friendly
            company for trips out, we tailor our visits completely to their
            routine.
          </p>
        </div>

        {/* 5 Core Services Grid */}
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

        <div className="mt-12 text-center">
          <Link
            href="/types-of-support"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 underline underline-offset-4"
          >
            <span>Compare all 5 support types & pricing details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Asymmetric Bento Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-100">
              <span>The Home Companion Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Families Across Bristol Trust Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We started Home Companion with a simple belief: elderly family
              members deserve dignified companionship from individuals who truly
              care, without the hurried 15-minute visits of typical care
              agencies.
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

      {/* 4. POSTCODE & AREA COVERAGE PREVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PostcodeChecker />
      </section>

      {/* 5. TESTIMONIALS (PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider border border-amber-100">
            <span>Client & Family Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stories From Local Bristol Families
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experiences from daughters, sons, and seniors across Clifton,
            Redland, Henleaze, and the wider South West.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsPreview.map((t, idx) => (
            <div
              key={idx}
              className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 flex flex-col justify-between"
            >
              <div className="double-bezel-inner bg-white p-7 sm:p-8 flex flex-col justify-between h-full shadow-sm">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    “{t.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-slate-900">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500">{t.relationship}</div>
                  <div className="text-[11px] font-semibold text-sky-700 mt-1">
                    Service: {t.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-sky-700"
          >
            <span>Read all 40+ client stories & reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. CALL TO ACTION (ENQUIRY ISLAND) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-1.5 rounded-[2.5rem] bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="bg-[#0F172A] text-white rounded-[calc(2.5rem-0.375rem)] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-xl">
            <div className="max-w-2xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider border border-slate-700">
                <span>Free, Friendly In-Home Consultation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Give your loved one the gift of companionship and independence.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact our friendly Bristol coordination team today. We will
                discuss your loved one’s routine, answer all your questions, and
                arrange a relaxed, no-pressure introductory meeting.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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
            </div>

            {/* Subtle decorative background ring */}
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-sky-900/20 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
