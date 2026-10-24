"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { photos, type Photo } from "@/lib/photos";

type MenuKey = "about" | "support";

const supportLinks: { title: string; href: string; desc: string; photo: Photo }[] = [
  {
    title: "Taking trips",
    href: "/types-of-support/trips",
    desc: "Outings, errands, shopping and days out",
    photo: photos.trips,
  },
  {
    title: "Gardening support",
    href: "/types-of-support/gardening",
    desc: "Light garden care and fresh air together",
    photo: photos.gardening,
  },
  {
    title: "Appointments escort",
    href: "/types-of-support/appointments",
    desc: "GP, hospital, dentist and optician visits",
    photo: photos.appointments,
  },
  {
    title: "Housework & tidying",
    href: "/types-of-support/housework",
    desc: "Laundry, light cleaning and a warm lunch",
    photo: photos.housework,
  },
  {
    title: "Dog walking & pets",
    href: "/types-of-support/dog-walking",
    desc: "Gentle walks, feeding and vet trips",
    photo: photos.dogWalking,
  },
];

const aboutLinks = [
  { title: "About us", href: "/about", desc: "Who we are and how we vet companions" },
  { title: "FAQ & pricing", href: "/faq", desc: "Visits, DBS checks and rates" },
  { title: "Testimonials", href: "/testimonials", desc: "Stories from families across Bristol" },
];

const PHONE_DISPLAY = "0117 496 0123";
const PHONE_HREF = "tel:01174960123";

function ServiceLink({
  item,
  onNavigate,
}: {
  item: (typeof supportLinks)[number];
  onNavigate: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group/item flex items-center gap-3 rounded-xl p-2 hover:bg-slate-900/[0.04] transition-colors"
    >
      <span className="relative w-14 h-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={item.photo.src}
          alt=""
          fill
          sizes="56px"
          className="object-cover spring-transition group-hover/item:scale-105"
          style={{ objectPosition: item.photo.position }}
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
        <span className="block text-xs text-slate-500 leading-snug">{item.desc}</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);
  const aboutActive = ["/about", "/faq", "/testimonials"].some(isActive);
  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  // Mobile drawer: lock page scroll, close on Escape or when the desktop nav takes over
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [mobileOpen]);

  const linkClass = (active: boolean) =>
    `relative inline-flex items-center gap-1 px-3 py-2 text-[15px] transition-colors after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-rose-500 after:transition-opacity ${
      active
        ? "text-slate-950 font-semibold after:opacity-100"
        : "text-slate-600 hover:text-slate-950 after:opacity-0"
    }`;

  // Hover opens on mouse only; touch and keyboard use the button
  const dropdownProps = (key: MenuKey) => ({
    onPointerEnter: (e: React.PointerEvent) => e.pointerType === "mouse" && setOpenMenu(key),
    onPointerLeave: (e: React.PointerEvent) => e.pointerType === "mouse" && setOpenMenu(null),
    onBlur: (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null);
    },
    onKeyDown: (e: React.KeyboardEvent) => e.key === "Escape" && setOpenMenu(null),
  });

  const panelClass = (open: boolean) =>
    `absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
      open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 invisible pointer-events-none"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#FBFBFC]/90 backdrop-blur-md border-b border-slate-900/[0.06]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[110] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16 lg:h-[76px] xl:grid xl:grid-cols-[1fr_auto_1fr]">
          <Logo />

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            <div className="relative" {...dropdownProps("support")}>
              <button
                type="button"
                aria-expanded={openMenu === "support"}
                aria-controls="menu-support"
                onClick={() => setOpenMenu(openMenu === "support" ? null : "support")}
                className={linkClass(isActive("/types-of-support"))}
              >
                Types of support
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 spring-transition ${
                    openMenu === "support" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div id="menu-support" className={panelClass(openMenu === "support")}>
                <div className="w-[560px] rounded-2xl bg-white p-2 ring-1 ring-slate-900/[0.08] shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]">
                  <div className="grid grid-cols-2 gap-1">
                    {supportLinks.map((item) => (
                      <ServiceLink key={item.href} item={item} onNavigate={closeAll} />
                    ))}
                    <Link
                      href="/types-of-support"
                      onClick={closeAll}
                      className="flex flex-col justify-center rounded-xl bg-[#0F172A] px-4 py-3 text-white hover:bg-[#1E293B] transition-colors"
                    >
                      <span className="font-serif text-lg leading-tight">Not sure what fits?</span>
                      <span className="text-xs text-slate-300">Compare all types of support</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" {...dropdownProps("about")}>
              <button
                type="button"
                aria-expanded={openMenu === "about"}
                aria-controls="menu-about"
                onClick={() => setOpenMenu(openMenu === "about" ? null : "about")}
                className={linkClass(aboutActive)}
              >
                About
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 spring-transition ${
                    openMenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div id="menu-about" className={panelClass(openMenu === "about")}>
                <div className="w-72 rounded-2xl bg-white p-2 ring-1 ring-slate-900/[0.08] shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      className="block rounded-xl px-3 py-2.5 hover:bg-slate-900/[0.04] transition-colors"
                    >
                      <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                      <span className="block text-xs text-slate-500">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/areas" className={linkClass(isActive("/areas"))}>
              Areas covered
            </Link>
            <Link href="/contact" className={linkClass(isActive("/contact"))}>
              Contact
            </Link>
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center justify-end gap-5">
            <a href={PHONE_HREF} className="group hidden xl:flex flex-col items-end leading-tight">
              <span className="text-[11px] text-slate-500">Bristol team, 8am to 7pm</span>
              <span className="text-[15px] font-semibold tabular-nums text-slate-900 group-hover:text-sky-700 transition-colors">
                {PHONE_DISPLAY}
              </span>
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
            >
              Make an enquiry
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-1">
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-900/5"
            >
              <Phone className="w-[18px] h-[18px]" />
            </a>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-10 items-center gap-2 rounded-full px-2.5 sm:pl-3 sm:pr-4 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-900/5"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden sm:inline">{mobileOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-[#FBFBFC] border-t border-slate-900/[0.06]"
        >
          <div className="max-w-xl mx-auto px-5 pt-6 pb-10 space-y-8">
            <section>
              <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Types of support
              </p>
              <div className="mt-2">
                {supportLinks.map((item) => (
                  <ServiceLink key={item.href} item={item} onNavigate={closeAll} />
                ))}
              </div>
              <Link
                href="/types-of-support"
                onClick={closeAll}
                className="mt-2 inline-block px-2 text-sm font-semibold text-sky-700 underline underline-offset-4"
              >
                Compare all types of support
              </Link>
            </section>

            <section>
              <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Get to know us
              </p>
              <ul className="mt-2 divide-y divide-slate-900/[0.06]">
                {[...aboutLinks, { title: "Areas covered", href: "/areas" }, { title: "Contact", href: "/contact" }].map(
                  (item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={`block px-2 py-3 font-serif text-2xl ${
                          isActive(item.href) ? "text-rose-600" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </section>

            <div className="grid gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/15"
              >
                <Phone className="w-4 h-4" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                onClick={closeAll}
                className="flex items-center justify-center rounded-full bg-[#0F172A] py-3.5 text-sm font-semibold text-white"
              >
                Make an enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
