import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

// Vercel sets this at build time; fall back to localhost for local builds
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    template: "%s | Home Companion",
    default: "Home Companion | Independent Support Worker in Nottingham & Surrounding Areas",
  },
  description:
    "Friendly, reliable support for older people across Nottingham: transport to appointments, shopping and errands, companionship and outings, community activities and prescription collection.",
  keywords: [
    "Independent support worker Nottingham",
    "Elderly companionship Nottingham",
    "Transport to appointments Nottingham",
    "Shopping help for older people",
    "Prescription collection Nottingham",
    "DBS checked support worker",
  ],
  authors: [{ name: "Home Companion" }],
  metadataBase: new URL(siteUrl),
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Home Companion",
    title: "Home Companion | Compassionate Home Support & Companionship",
    description:
      "Friendly, reliable support for older people across Nottingham and surrounding areas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${plusJakartaSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FBFBFC] text-slate-900 selection:bg-sky-100 selection:text-sky-900">
        <Preloader />
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
