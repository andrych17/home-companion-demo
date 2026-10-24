# Home Companion Demo

> Independent support worker for older people in Nottingham & surrounding areas. Friendly | Reliable | Here to Help.

Sample site built from the client's flyer. The phone number and the five services come from that flyer. The email, reviews and family names are placeholders. Photos are the client's artwork plus Unsplash stock (sources in `src/assets/photos/CREDITS.md`).

---

## 🗺️ Sitemap Architecture

Content and service list follow the client's flyer:

```
Home Companion Demo
│
├── / (Home Page)
│   ├── Hero (navy panel, "Loneliness can affect anyone", call now)
│   ├── Five services preview
│   ├── Why Choose Us (Asymmetric Bento Grid)
│   ├── Testimonials Preview
│   ├── Call to Action (Enquiry Island)
│   └── Footer Links & Accreditations
│
├── /about (About Us)
│   ├── Our founding story, values & vetting standards
│   ├── /faq (Frequently Asked Questions with category filters)
│   └── /testimonials (Family stories across Nottingham)
│
├── /areas (Areas Covered)
│   ├── Coverage across Nottingham & surrounding areas
│   ├── Interactive postcode checker (NG1–NG16)
│   └── Safe transport & travel policy
│
├── /types-of-support (Support Spectrum)
│   ├── /types-of-support/appointments (Transport to Appointments)
│   ├── /types-of-support/shopping (Shopping & Errands)
│   ├── /types-of-support/outings (Companionship & Outings)
│   ├── /types-of-support/community (Community Activities)
│   └── /types-of-support/prescriptions (Prescription Collection)
│
└── /contact (Contact & Coordination)
    ├── Ask a Question (Direct inquiry form)
    ├── Make an Enquiry (Structured service & routine selector)
    └── Call now: 07438 318947
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
git clone https://github.com/andrych17/home-companion-demo.git
cd home-companion-demo
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

Sample site for a client pitch. The phone number (07438 318947) is the client's real number from the flyer. The email still uses the `.example` domain. Old service URLs (`/types-of-support/trips`, `housework`, `gardening`, `dog-walking`) redirect to the new pages in `next.config.ts`.
