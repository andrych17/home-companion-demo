import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Phone, Check, Heart } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { photos } from "@/lib/photos";
import { services, serviceHref } from "@/lib/services";
import { AREA, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import BentoWhyUs from "@/components/BentoWhyUs";
import TrustTicker from "@/components/TrustTicker";
import CareEstimator from "@/components/CareEstimator";

export default function HomePage() {
  const testimonialsPreview = [
    {
      quote:
        "The weekly visits have given Mum her spark back. She looks forward to Tuesdays, and I no longer worry constantly while I'm at work.",
      author: "Rachel T.",
      relationship: "Daughter of a client in West Bridgford",
      service: "Companionship & Outings",
      rating: 5,
    },
    {
      quote:
        "Dad was driven to QMC for his clinic, kept company the whole time and brought home safely. We even got clear notes from the consultation.",
      author: "Mark E.",
      relationship: "Son of a client in Beeston",
      service: "Transport to Appointments",
      rating: 5,
    },
    {
      quote:
        "Mum's prescriptions are collected every month, and there's always time for a cup of tea and a chat. It's genuine companionship.",
      author: "Eleanor V.",
      relationship: "Family in Arnold",
      service: "Prescription Collection",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 overflow-hidden">
      {/* 1. HERO, modelled on the client's reference panel. The photo already
          carries its own navy edge and pink arc, so the panel uses the same navy. */}
      <section className="lg:max-w-7xl lg:mx-auto lg:px-8 lg:pt-6">
        <div className="relative isolate overflow-hidden bg-[#061638] text-white lg:rounded-[2rem]">
          <div className="absolute right-0 top-0 h-[430px] w-[47%] sm:h-[560px] sm:w-[40%] lg:h-full lg:w-auto lg:aspect-[331/700] xl:aspect-[331/560]">
            <Image
              src={photos.heroWindow.src}
              alt={photos.heroWindow.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 460px, 47vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover"
              style={{ objectPosition: photos.heroWindow.position }}
            />
          </div>

          <div className="relative px-5 sm:px-10 lg:px-16 pt-10 pb-12 sm:pt-14 lg:py-16 lg:max-w-[34rem] xl:max-w-[40rem] lg:box-content">
            <div className="max-w-[56%] min-h-[370px] sm:max-w-[58%] sm:min-h-[490px] lg:max-w-none lg:min-h-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-[10px] font-medium uppercase tracking-[0.2em]">
                <Heart className="w-3 h-3 text-[#E0457B] fill-[#E0457B]" />
                <span>Independent Support Worker</span>
              </div>
              <p className="mt-3 font-serif italic text-lg sm:text-2xl text-white/85 leading-snug">
                {AREA}
              </p>

              <h1 className="mt-6 text-[1.85rem] sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Loneliness can affect{" "}
                <span className="text-[#F2A65A]">
                  anyone
                  {/* Plus Jakarta ExtraBold leaves a wide gap before full stops */}
                  <span className="-ml-[0.06em]">.</span>
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-xl font-medium text-[#5CC8D6] leading-snug">
                But no one should have to face it alone.
              </p>
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 lg:max-w-md">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={serviceHref(s)}
                    className="group flex items-center gap-3 rounded-xl px-3.5 py-2.5 bg-white/[0.06] ring-1 ring-white/10 hover:bg-white/[0.12] spring-transition"
                  >
                    <Check className="w-4 h-4 text-[#9BD35A] shrink-0" strokeWidth={3} />
                    <span className="flex-1 text-sm font-semibold">{s.title}</span>
                    <s.icon className="w-4 h-4 text-white/50 group-hover:text-white spring-transition" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center justify-center gap-3 bg-[#F29A3F] hover:bg-[#F6AC5C] text-[#061638] pl-5 pr-2.5 py-2.5 rounded-full font-bold text-sm spring-transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call now: {PHONE_DISPLAY}</span>
                <span className="w-8 h-8 rounded-full bg-[#061638] text-white flex items-center justify-center spring-transition group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/25 font-semibold text-sm spring-transition"
              >
                Send an enquiry
              </Link>
            </div>

            <p className="mt-7 flex items-center gap-3 text-sm sm:text-base font-medium">
              <Heart className="w-7 h-7 text-[#E0457B] shrink-0" strokeWidth={1.5} />
              <span className="text-white/85">
                Friendly <span className="text-white/30">|</span> Reliable{" "}
                <span className="text-white/30">|</span>{" "}
                <span className="text-[#E0457B]">Here to Help</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUST & CREDIBILITY TICKER */}
      <TrustTicker />

      {/* 3. SERVICES, the same five as the flyer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold uppercase tracking-wider border border-sky-100">
            <span>How We Can Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Practical help and good company
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every visit is unhurried and planned around your loved one’s own routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(3).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
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
              <span>Friendly · Reliable · Here to Help</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Nottingham Families Trust Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              One familiar, DBS-checked face instead of a rota of strangers.
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
            Stories From Local Families
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From West Bridgford, Beeston, Arnold and across Nottingham.
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
            <span>Read more client stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. CALL TO ACTION, with the flyer photo in the reference's arc style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-1.5 rounded-[2.5rem] bg-slate-900/5 ring-1 ring-slate-900/10">
          <div className="bg-[#061638] text-white rounded-[calc(2.5rem-0.375rem)] p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#5CC8D6] text-xs font-semibold uppercase tracking-wider ring-1 ring-white/15">
                  <span>Free, friendly first visit</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  A little time can change{" "}
                  <span className="text-[#F2A65A]">someone’s day</span>
                </h2>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  Call or send a message. We’ll talk through your loved one’s
                  routine and arrange a relaxed first visit over a cup of tea.
                  Covering Nottingham and surrounding areas, NG1–NG16.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={PHONE_HREF}
                    className="group inline-flex items-center justify-center gap-3 bg-[#F29A3F] hover:bg-[#F6AC5C] text-[#061638] pl-6 pr-2.5 py-2.5 rounded-full font-bold text-sm spring-transition"
                  >
                    <span>Call now: {PHONE_DISPLAY}</span>
                    <span className="w-8 h-8 rounded-full bg-[#061638] text-white flex items-center justify-center spring-transition group-hover:translate-x-1">
                      <Phone className="w-4 h-4" />
                    </span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm ring-1 ring-white/25 spring-transition"
                  >
                    Make an online enquiry
                  </Link>
                </div>

                <div className="text-[11px] text-white/50 pt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Calls returned the same day • No contract lock-in</span>
                </div>
              </div>

              <div className="hidden lg:flex lg:col-span-5 justify-center">
                <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full p-2 ring-4 ring-[#F29A3F]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={photos.flyerSupport.src}
                      alt={photos.flyerSupport.alt}
                      fill
                      placeholder="blur"
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
