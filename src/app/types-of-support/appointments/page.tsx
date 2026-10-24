import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Appointments Escort Support | HomeCompanions.uk Bristol",
  description:
    "Reliable, door-to-door accompaniment for GP, hospital, optician, and hairdresser appointments across Bristol in insured vehicles with note-taking support.",
};

export default function AppointmentsPage() {
  const commonAppointments = [
    {
      title: "Hospital Clinics & Outpatient Visits",
      desc: "Accompaniment to Southmead Hospital, Bristol Royal Infirmary (BRI), Bristol Eye Hospital, or South Bristol Community Hospital.",
    },
    {
      title: "GP Surgeries & Health Reviews",
      desc: "Door-to-door escort, patient check-in at reception, and calm reassurance in crowded waiting areas.",
    },
    {
      title: "Optician & Hearing Aid Clinics",
      desc: "Assisting with sight tests, frame fittings, and hearing aid adjustments across Bristol.",
    },
    {
      title: "Dentist & Chiropody / Podiatry",
      desc: "Helping seniors access regular dental checks and foot health appointments without mobility strain.",
    },
    {
      title: "Hairdresser, Barber & Salon Trips",
      desc: "Dignified accompaniment to favorite salons in Clifton, Redland, or Henleaze for a wash, cut, and chat.",
    },
    {
      title: "Pharmacy & Prescription Collection",
      desc: "Collecting repeat medications and ensuring scripts are safely placed in their familiar home location.",
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold uppercase tracking-wider border border-amber-100">
            <CalendarCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Healthcare & Errands Escort</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Calm, dependable escort for{" "}
            <span className="font-serif italic font-normal text-amber-800 underline decoration-amber-300 decoration-wavy decoration-2">
              every appointment
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            Attending clinical appointments can be confusing and stressful for
            seniors, and working adult children cannot always take half a day
            off. Our companions provide patient, door-to-door accompaniment,
            waiting room support, and clear communication.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact?service=appointments"
              className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow transition-all flex items-center gap-2"
            >
              <span>Enquire About Appointment Escort</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:01178901234"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call 0117 890 1234</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              From Front Door to Doctor’s Room and Safely Home
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Hospital corridors and GP waiting rooms can feel daunting.
                Parking near Southmead or the BRI is often a nightmare, causing
                intense anxiety for older drivers.
              </p>
              <p>
                Our companions remove all that stress. We arrive early at your
                loved one’s home, help them gather their appointment letters,
                hearing aids, and glasses, drive them smoothly, drop them right
                at the accessible entrance, and stay with them every step of the
                way.
              </p>
              <p>
                If your family requests it, the companion can sit in the
                consultation room, take notes of the doctor’s recommendations or
                next steps, and immediately send an update to family members.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Door-to-door escort in business-insured cars</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Waiting room accompaniment & reassurance</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Doctor note-taking for family updates</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pharmacy prescription collection on the return</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
              <div className="double-bezel-inner bg-[#0F172A] text-white p-8 sm:p-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Family Feedback Loop</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  Clear Notes for Busy Families
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Working adult children often worry about forgotten details:
                  “Did the doctor change Dad’s medication? When is his next
                  scan?”
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Summary of follow-up dates & instructions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Notification the moment they are safely home</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Prescriptions verified and checked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Common Appointments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Appointments We Regularly Attend
          </h2>
          <p className="text-slate-600 text-sm">
            Our companions are familiar with all major hospital routes and
            parking procedures across Bristol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonAppointments.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross link */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-slate-200/80">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Need Multiple Services in One Visit?
        </h3>
        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
          Pair an appointment escort with a relaxing lunch out or home tidying
          before returning.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/types-of-support/trips"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Taking Trips & Outings →
          </Link>
          <Link
            href="/types-of-support/housework"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Housework & Meals →
          </Link>
          <Link
            href="/types-of-support/dog-walking"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Dog Walking Support →
          </Link>
        </div>
      </section>
    </div>
  );
}
