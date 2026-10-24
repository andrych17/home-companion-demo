import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Dog,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Phone,
  Heart,
  Bone,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dog Walking & Pet Care Support | HomeCompanions.uk Bristol",
  description:
    "Gentle dog walking, pet feeding, and accompanied park strolls so seniors across Bristol can keep their cherished pets happily at home.",
};

export default function DogWalkingPage() {
  const petServices = [
    {
      title: "Gentle Neighbourhood Dog Walks",
      desc: "Daily or weekly walks around local Bristol parks—The Downs, Ashton Court, Blaise Castle, or local greens.",
    },
    {
      title: "Accompanied Owner & Pet Strolls",
      desc: "Walking alongside your loved one while handling the lead, ensuring they still enjoy walks together safely without risk of pulling.",
    },
    {
      title: "Daily Pet Feeding & Fresh Water",
      desc: "Replenishing meals, washing bowls, and ensuring regular feeding routines when bending down causes joint pain.",
    },
    {
      title: "Brushing, Coat Care & Comfort",
      desc: "Gentle grooming, brushing loose fur, checking paws, and keeping dogs and cats comfortable and pampered.",
    },
    {
      title: "Veterinary Clinic Escort",
      desc: "Transport and escort to local Bristol veterinary surgeries for vaccinations, health checks, and medication pickup.",
    },
    {
      title: "Cat, Bird & Small Pet Support",
      desc: "Cleaning cat litter boxes, refilling bird feeders, and ensuring beloved companion animals are thriving.",
    },
  ];

  return (
    <div className="space-y-20 py-12 sm:py-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-semibold uppercase tracking-wider border border-indigo-100">
            <Dog className="w-3.5 h-3.5 text-indigo-600" />
            <span>Pet Care & Companionship</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Keeping beloved pets happy and together at{" "}
            <span className="font-serif italic font-normal text-indigo-800 underline decoration-indigo-300 decoration-wavy decoration-2">
              home
            </span>
            .
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            A dog or cat is often a senior’s closest daily companion and source
            of unconditional love. When arthritis or reduced stamina makes dog
            walking tough, our companions step in to ensure pets get healthy
            exercise and owners never face the heartbreak of rehoming.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact?service=dog-walking"
              className="px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm shadow transition-all flex items-center gap-2"
            >
              <span>Enquire About Dog Walking Support</span>
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
              Protecting the Lifelong Bond Between Owner & Pet
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                One of the greatest fears elderly pet owners experience is that
                they will be forced to give up their dog or cat because they can
                no longer walk them twice a day or bend down to fill bowls.
              </p>
              <p>
                HomeCompanions exists to protect that sacred bond. Our
                animal-loving companions take your dog for leisurely, safe
                walks in familiar local parks. Even better: we frequently
                accompany owners, allowing them to walk alongside their pet at an
                easy pace while the companion holds the lead securely.
              </p>
              <p>
                After the walk, the companion wipes muddy paws, replenishes water
                bowls, and sits down with your loved one for tea while the dog
                happily curls up at their feet.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated animal-loving companions</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Accompanied walks to avoid trip & pull hazards</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bristol vet escort in insured vehicles</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Enhanced DBS checked & £5M insured</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="double-bezel bg-slate-900/5 ring-1 ring-slate-900/10">
              <div className="double-bezel-inner bg-[#0F172A] text-white p-8 sm:p-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                  <Bone className="w-4 h-4" />
                  <span>The Pet Lifeline</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  No Rehoming, No Guilt
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Keeping a pet lowers depression, prevents cognitive decline,
                  and provides priceless daily purpose for seniors living alone.
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Safe exercise for high-energy family dogs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Gentle routines matched to older dogs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Post-walk photos sent to family members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Dog Walking & Pet Tasks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How We Care for Pets & Companions
          </h2>
          <p className="text-slate-600 text-sm">
            From daily walks on Clifton Downs to evening feeding and litter
            cleaning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {petServices.map((task, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base">{task.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {task.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross link */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-slate-200/80">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Combine Pet Support with Other Services
        </h3>
        <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
          Many companions walk the dog and then stay to prepare lunch, tidy the
          kitchen, or help with garden borders.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/types-of-support/gardening"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Gardening Support →
          </Link>
          <Link
            href="/types-of-support/housework"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Housework & Meals →
          </Link>
          <Link
            href="/types-of-support/trips"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            Taking Trips →
          </Link>
        </div>
      </section>
    </div>
  );
}
