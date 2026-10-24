# HomeCompanions.uk

> Dedicated, compassionate home support & companionship services across Bristol and the South West.

HomeCompanions.uk provides trusted, DBS-checked companions to help seniors and individuals maintain independence at home. Unlike rushed clinical care visits, our companions focus on meaningful human connection, unhurried time, and practical assistance.

---

## 🗺️ Sitemap Architecture

Built in accordance with the official HomeCompanions.uk IA specification:

```
HomeCompanions.uk
│
├── / (Home Page)
│   ├── Hero / Introduction with trust credentials
│   ├── Key Services preview
│   ├── Why Choose Us (Asymmetric Bento Grid)
│   ├── Testimonials Preview
│   ├── Call to Action (Enquiry Island)
│   └── Footer Links & Accreditations
│
├── /about (About Us)
│   ├── Our founding story, values & vetting standards
│   ├── /faq (Frequently Asked Questions with category filters)
│   └── /testimonials (Verified family reviews across Bristol & South West)
│
├── /areas (Areas Covered)
│   ├── Service coverage across Bristol & the South West
│   ├── Interactive Bristol Postcode Checker (BS1–BS40, BA1–BA2)
│   └── Safe transport & travel policy
│
├── /types-of-support (Support Spectrum)
│   ├── /types-of-support/trips (Taking Trips & Outings)
│   ├── /types-of-support/gardening (Gardening & Outdoor Wellbeing)
│   ├── /types-of-support/appointments (Appointments Escort & Hospital Visits)
│   ├── /types-of-support/housework (Housework, Meals & Tidying)
│   └── /types-of-support/dog-walking (Dog Walking & Pet Care)
│
└── /contact (Contact & Coordination)
    ├── Ask a Question (Direct inquiry form)
    ├── Make an Enquiry (Structured service & routine selector)
    └── Direct Bristol Office telephone & address
```

---

## 🎨 UI/UX Pro Max & Anti-AI Slop Implementation

This codebase strictly implements high-end human-first design directives:

- **No AI Mesh Gradients**: Refined palette rooted in British coastal and stone tones (Deep Slate `#0F172A`, Reassuring Sky `#0284C7`, Rose Heart `#E11D48`, British Sage `#059669`, Warm Amber `#D97706`).
- **No Monotonous Centered Hero**: Asymmetric hero layout pairing warm editorial typography with an interactive companion profile card.
- **Asymmetric Bento Grids**: Dynamic hierarchy on Home and Why Us sections with multi-column span highlights.
- **Concentric Double-Bezel Radii**: Nested cards (`rounded-[2rem]` outer container with concentric inner cards and hairline rings).
- **Nested Button Architecture**: Pill CTAs with nested circular icon badges.
- **High-Character Typography**: Google Fonts pairing `Plus Jakarta Sans` (accessible, friendly sans) with `Newsreader` (warm British editorial serif).
- **Zero Emojis as UI Icons**: 100% crisp, lightweight SVG icons via `lucide-react`.
- **Macro-Whitespace**: Generous vertical spacing (`py-20` to `py-32`) giving content breathing room and dignity.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, Partial Prerendering)
- **Library**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Package Manager**: pnpm

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/andrych17/homecompanions.git
cd homecompanions
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

To create an optimized production build:

```bash
pnpm build
pnpm start
```

---

## 📄 License & Ownership

Copyright © 2026 HomeCompanions.uk. All rights reserved.
Registered in England & Wales.
