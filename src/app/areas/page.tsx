import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Car,
  Phone,
  ArrowRight,
  Compass,
} from "lucide-react";
import PostcodeChecker from "@/components/PostcodeChecker";

export const metadata: Metadata = {
  title: "Areas Covered | Bristol & South West Companionship Support",
  description:
    "Explore our home companionship and support service coverage across Bristol (BS1–BS40), Bath (BA1, BA2), South Gloucestershire, and North Somerset.",
};

export default function AreasPage() {
  const hubs = [
    {
      region: "North & West Bristol",
      postcodes: "BS6, BS8, BS9, BS10",
      areas: [
        "Clifton & Clifton Village",
        "Redland & Cotham",
        "Henleaze & Westbury-on-Trym",
        "Stoke Bishop & Sneyd Park",
        "Southmead & Brentry",
      ],
      desc: "Our primary hub with large numbers of active companions for immediate same-week visits.",
    },
    {
      region: "Central & East Bristol",
      postcodes: "BS1, BS2, BS5, BS7, BS16",
      areas: [
        "Harbourside & City Centre",
        "Bishopston & Gloucester Road",
        "St Andrews & Montpelier",
        "Fishponds & Stapleton",
        "Eastville & St George",
      ],
      desc: "Frequent visits for hospital appointments at the BRI and trips to Bristol Harbourside.",
    },
    {
      region: "South Bristol",
      postcodes: "BS3, BS4, BS13, BS14",
      areas: [
        "Bedminster & Southville",
        "Totterdown & Windmill Hill",
        "Brislington & Knowle",
        "Bishopsworth & Headley Park",
        "Hengrove & Whitchurch",
      ],
      desc: "Active companions providing light housework, dog walking, and shopping escorts.",
    },
    {
      region: "North Somerset & Coastal",
      postcodes: "BS20, BS21, BS48",
      areas: [
        "Portishead Marina & Town",
        "Clevedon Seafront & Hill",
        "Nailsea & Backwell",
        "Pill & Abbots Leigh",
        "Long Ashton & Failand",
      ],
      desc: "Popular for coastal strolls, garden maintenance, and companionship for rural properties.",
    },
    {
      region: "Bath & South Gloucestershire",
      postcodes: "BA1, BA2, BS30, BS31",
      areas: [
        "Bath City & Combe Down",
        "Keynsham & Saltford",
        "Bitton & Warmley",
        "Kingswood & Hanham",
        "Emersons Green & Downend",
      ],
      desc: "Dedicated companion routes connecting Bath, Keynsham, and eastern Bristol.",
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-800 text-[11px] font-semibold uppercase tracking-wider border border-slate-900/10">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Regional Coverage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Companionship across Bristol and the{" "}
            <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
              South West
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            We provide local companions who live in and know your neighbourhood.
            Whether your loved one lives in Clifton, Henleaze, Bedminster,
            Portishead, or Bath, we have vetted companions ready to assist.
          </p>
        </div>
      </section>

      {/* Interactive Postcode Tool */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PostcodeChecker />
      </section>

      {/* Regional Hubs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Bristol & South West Hubs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Companions are locally based to ensure punctuality, local knowledge,
            and reliable continuity of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <div
              key={hub.region}
              className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10 flex flex-col justify-between"
            >
              <div className="double-bezel-inner bg-white p-7 sm:p-8 flex flex-col justify-between h-full shadow-sm">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 text-xs font-bold border border-sky-100">
                      {hub.postcodes}
                    </span>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active Hub
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {hub.region}
                  </h3>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {hub.desc}
                  </p>

                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Towns & Suburbs:
                    </div>
                    {hub.areas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={`/contact?area=${encodeURIComponent(hub.region)}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-slate-900 hover:text-sky-700 transition-colors"
                  >
                    <span>Request a companion in {hub.region}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel & Transport Assurance */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 border border-slate-200/80">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-sky-600 flex items-center justify-center border border-slate-200 shrink-0 shadow-sm">
              <Car className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                Safe Door-to-Door Escort & Travel Policy
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Many of our companions have business-insured personal vehicles
                specifically authorized to escort clients to GP surgeries,
                hospitals (Southmead, BRI), hairdressers, or scenic country
                destinations. All journeys are door-to-door, meaning the
                companion assists from inside your hallway until your loved one
                is safely seated and settled back home.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Business Driving Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Clean Driving Licences Checked
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Zero Public Transport Stress
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Not sure if your specific address is covered?
        </h2>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          Give our Bristol coordination team a call or enter your postcode in
          our enquiry form. We frequently accommodate adjacent villages.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow transition-all"
          >
            Enquire About Your Location
          </Link>
          <a
            href="tel:01178901234"
            className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>0117 890 1234</span>
          </a>
        </div>
      </section>
    </div>
  );
}
