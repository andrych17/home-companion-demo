import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accreditation strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 border-b border-slate-800/80">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-white">Enhanced DBS</div>
              <div className="text-slate-400">100% vetted carers</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-6 h-6 text-sky-400 shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-white">£5M Insured</div>
              <div className="text-slate-400">Full public liability</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
            <MapPin className="w-6 h-6 text-amber-400 shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-white">Local Bristol Team</div>
              <div className="text-slate-400">South West based</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Heart className="w-6 h-6 text-rose-400 shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-white">Dementia Friendly</div>
              <div className="text-slate-400">Trained & empathetic</div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-slate-800/80">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="badge" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              Providing heartfelt companionship and practical home support
              across Bristol and the South West. Helping loved ones maintain
              their independence, daily joy, and familiar comfort at home.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 text-xs text-slate-300 border border-slate-700/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Accepting new client enquiries in BS1–BS40 & BA1–BA2</span>
              </div>
            </div>
          </div>

          {/* Types of Support */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Types of Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/types-of-support/trips"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Taking Trips & Outings
                </Link>
              </li>
              <li>
                <Link
                  href="/types-of-support/gardening"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Gardening & Outdoors
                </Link>
              </li>
              <li>
                <Link
                  href="/types-of-support/appointments"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Appointments Escort
                </Link>
              </li>
              <li>
                <Link
                  href="/types-of-support/housework"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Housework & Tidying
                </Link>
              </li>
              <li>
                <Link
                  href="/types-of-support/dog-walking"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Dog Walking & Pet Care
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/types-of-support"
                  className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                >
                  <span>Explore all services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Trust */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              About & Trust
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Areas & Postcode Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Ask a Question
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Bristol Office
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="tel:01174960123"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span className="font-semibold text-white group-hover:text-sky-300">
                  0117 496 0123
                </span>
              </a>
              <a
                href="mailto:hello@homecompanion.example"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>hello@homecompanion.example</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>1 Example Lane, Bristol BS0&nbsp;0AA</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">
                  Mon – Sat: 8:00am – 7:00pm
                  <br />
                  Sunday: On-call visits
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Home Companion Demo. Demo site: the business, contact details, and reviews are fictional.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Make an Enquiry
            </Link>
            <Link href="/faq" className="hover:text-slate-400 transition-colors">
              Privacy & Safeguarding
            </Link>
            <Link href="/areas" className="hover:text-slate-400 transition-colors">
              Bristol & South West
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
