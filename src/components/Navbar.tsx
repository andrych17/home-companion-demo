"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Car,
  Flower2,
  CalendarCheck,
  Sparkles,
  Dog,
  ShieldCheck,
  HelpCircle,
  MessageSquareHeart,
  Users,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const supportLinks = [
    {
      title: "Taking Trips",
      href: "/types-of-support/trips",
      desc: "Social outings, errands, shopping & days out",
      icon: Car,
      color: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      title: "Gardening Support",
      href: "/types-of-support/gardening",
      desc: "Light garden care, planting & outdoor companionship",
      icon: Flower2,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      title: "Appointments Escort",
      href: "/types-of-support/appointments",
      desc: "GP, hospital, hairdresser & dental accompaniment",
      icon: CalendarCheck,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      title: "Housework & Tidying",
      href: "/types-of-support/housework",
      desc: "Light cleaning, laundry, meal prep & home comfort",
      icon: Sparkles,
      color: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
      title: "Dog Walking & Pets",
      href: "/types-of-support/dog-walking",
      desc: "Pet exercise, gentle dog walks & feeding help",
      icon: Dog,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
  ];

  const aboutLinks = [
    {
      title: "About Our Team",
      href: "/about",
      desc: "Our ethos, companion vetting & personal matching",
      icon: Users,
    },
    {
      title: "FAQ & Pricing",
      href: "/faq",
      desc: "Clear answers on visits, DBS checks & rates",
      icon: HelpCircle,
    },
    {
      title: "Family Testimonials",
      href: "/testimonials",
      desc: "Real stories from families across Bristol",
      icon: MessageSquareHeart,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBFBFC]/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro banner */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Bristol & South West Team Available Today
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400">
              Enhanced DBS Checked & Fully Insured
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href="tel:01178901234"
              className="inline-flex items-center gap-1.5 text-white hover:text-sky-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>0117 890 1234</span>
            </a>
            <span className="text-slate-600">|</span>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Support Hours: 8am - 7pm
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo variant="badge" />

          {/* Desktop Nav Items */}
          <nav
            className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-700"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl transition-colors ${
                isActive("/")
                  ? "text-sky-700 font-semibold bg-sky-50"
                  : "hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl transition-colors ${
                  isActive("/about") || isActive("/faq") || isActive("/testimonials")
                    ? "text-sky-700 font-semibold bg-sky-50"
                    : "hover:text-slate-950 hover:bg-slate-100"
                }`}
                aria-expanded={aboutDropdownOpen}
              >
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="p-2 bg-white rounded-2xl shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
                    {aboutLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-500 leading-snug">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/areas"
              className={`px-3.5 py-2 rounded-xl transition-colors ${
                isActive("/areas")
                  ? "text-sky-700 font-semibold bg-sky-50"
                  : "hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              Areas Covered
            </Link>

            {/* Types of Support Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSupportDropdownOpen(true)}
              onMouseLeave={() => setSupportDropdownOpen(false)}
            >
              <Link
                href="/types-of-support"
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl transition-colors ${
                  isActive("/types-of-support")
                    ? "text-sky-700 font-semibold bg-sky-50"
                    : "hover:text-slate-950 hover:bg-slate-100"
                }`}
                aria-expanded={supportDropdownOpen}
              >
                <span>Types of Support</span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200" />
              </Link>

              {supportDropdownOpen && (
                <div className="absolute top-full left-0 w-96 pt-2 z-50">
                  <div className="p-3 bg-white rounded-2xl shadow-xl border border-slate-100 ring-1 ring-slate-900/5">
                    <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Tailored In-Home Services
                      </span>
                      <Link
                        href="/types-of-support"
                        className="text-xs text-sky-600 font-medium hover:underline flex items-center gap-1"
                      >
                        View all <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="space-y-1">
                      {supportLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div
                              className={`p-2 rounded-xl border ${item.color} shrink-0`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-slate-500 leading-snug">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl transition-colors ${
                isActive("/contact")
                  ? "text-sky-700 font-semibold bg-sky-50"
                  : "hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action button (Nested Pill with circle icon) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#0F172A] hover:bg-[#1E293B] text-white pl-5 pr-2 py-2 rounded-full font-semibold text-sm shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <span>Make an Enquiry</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-8 space-y-4">
          <div className="grid grid-cols-1 gap-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-xl font-medium text-sm ${
                isActive("/") ? "bg-sky-50 text-sky-700" : "text-slate-700"
              }`}
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              About & Trust
            </div>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              About Us
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              FAQ
            </Link>
            <Link
              href="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Testimonials
            </Link>

            <div className="pt-2 pb-1 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Support Services
            </div>
            <Link
              href="/types-of-support"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              All Types of Support
            </Link>
            {supportLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="pl-6 pr-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-50 flex items-center justify-between"
              >
                <span>{item.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}

            <div className="pt-2 pb-1 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Coverage & Contact
            </div>
            <Link
              href="/areas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Areas Covered (Bristol & South West)
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:01178901234"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call 0117 890 1234</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#0F172A] text-white font-semibold text-sm"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
