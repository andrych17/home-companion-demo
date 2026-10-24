import React, { Suspense } from "react";
import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us & Make an Enquiry",
  description:
    "Ask a question or make an enquiry about support for an older relative across Nottingham and surrounding areas. Free first visit.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading form...</div>}>
      <ContactContent searchParams={searchParams} />
    </Suspense>
  );
}

async function ContactContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const initialType =
    resolvedParams.type === "question" ? "question" : "enquiry";
  const preselectedService =
    typeof resolvedParams.service === "string"
      ? resolvedParams.service
      : "";

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-800 text-[11px] font-semibold uppercase tracking-wider border border-slate-900/10">
            <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            We are here to help your family find the{" "}
            <span className="font-serif italic font-normal text-sky-800 underline decoration-sky-300 decoration-wavy decoration-2">
              right support
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            Whether you have a quick question or want to arrange a free first
            visit over a cup of tea, fill in the form below or simply call.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left/Center, Contact Details on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form column (lg:col-span-8) */}
          <div className="lg:col-span-8">
            <EnquiryForm
              initialType={initialType}
              preselectedService={preselectedService}
            />
          </div>

          {/* Contact Details sidebar (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct telephone card */}
            <div className="p-7 rounded-3xl bg-[#0F172A] text-white space-y-4 shadow-sm">
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                Direct Line
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Prefer to speak to a human right away?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Friendly, straightforward advice from someone who knows
                Nottingham well, with no pressure and no sales talk.
              </p>
              <div className="pt-2">
                <a
                  href="tel:07438318947"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
                >
                  <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Call Us (Mon–Sat)</div>
                    <div className="text-base font-bold text-white">
                      07438 318947
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Office location & hours */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-5">
              <h4 className="font-bold text-slate-900 text-base">
                Areas & Hours
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">
                      Nottingham & Surrounding Areas
                    </div>
                    <div>Home visits across NG1 to NG16</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Email Us</div>
                    <a
                      href="mailto:hello@homecompanion.example"
                      className="text-sky-700 hover:underline"
                    >
                      hello@homecompanion.example
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">
                      Operating Hours
                    </div>
                    <div>Monday – Friday: 8:00 AM – 7:00 PM</div>
                    <div>Saturday: 9:00 AM – 5:00 PM</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Sunday: Pre-arranged on-call companion visits
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Prompt 2-hour response guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free tea & chemistry introductory visit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>No long-term lock-in contracts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
