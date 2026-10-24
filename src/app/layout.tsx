import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: {
    template: "%s | HomeCompanions.uk",
    default: "HomeCompanions.uk | Compassionate Home Support & Companionship in Bristol & South West",
  },
  description:
    "Trusted, DBS-checked companionship and home support services across Bristol and the South West. From taking trips and appointments to light gardening, housework, and dog walking.",
  keywords: [
    "Home companionship Bristol",
    "Elderly home support South West",
    "Companion carer Bristol",
    "DBS checked companions",
    "Senior appointment escort Bristol",
    "Gardening and housework support",
    "Dog walking for seniors Bristol",
  ],
  authors: [{ name: "HomeCompanions.uk" }],
  metadataBase: new URL("https://homecompanions.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://homecompanions.uk",
    siteName: "HomeCompanions.uk",
    title: "HomeCompanions.uk | Compassionate Home Support & Companionship",
    description:
      "Empowering independence with compassionate companionship across Bristol and the South West.",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
