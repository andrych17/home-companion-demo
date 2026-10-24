"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  Car,
  Flower2,
  CalendarCheck,
  Dog,
  HelpCircle,
} from "lucide-react";

interface EnquiryFormProps {
  initialType?: "enquiry" | "question";
  preselectedService?: string;
}

export default function EnquiryForm({
  initialType = "enquiry",
  preselectedService = "",
}: EnquiryFormProps) {
  const [activeTab, setActiveTab] = useState<"enquiry" | "question">(initialType);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : []
  );
  const [frequency, setFrequency] = useState("weekly");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    forWhom: "parent",
    message: "",
    callTime: "morning",
  });

  const services = [
    { id: "trips", label: "Taking Trips & Outings", icon: Car },
    { id: "gardening", label: "Gardening & Outdoors", icon: Flower2 },
    { id: "appointments", label: "Appointments Escort", icon: CalendarCheck },
    { id: "housework", label: "Housework & Tidying", icon: Sparkles },
    { id: "dog-walking", label: "Dog Walking & Pet Care", icon: Dog },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate swift submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-slate-200/80 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Thank you, {formData.name || "Friend"}
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
          We have received your {activeTab === "enquiry" ? "care enquiry" : "question"}. A local Bristol companion coordinator will call or email you back within 2 hours during office hours (Mon-Sat 8am-7pm).
        </p>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-500 max-w-sm mx-auto">
          Need an urgent response? Call our direct line at{" "}
          <a href="tel:01178901234" className="text-sky-700 font-bold hover:underline">
            0117 890 1234
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              postcode: "",
              forWhom: "parent",
              message: "",
              callTime: "morning",
            });
          }}
          className="mt-6 text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="p-1.5 rounded-3xl bg-slate-900/5 ring-1 ring-slate-900/10">
      <div className="bg-white rounded-[calc(1.5rem-0.375rem)] p-6 sm:p-10 shadow-sm">
        {/* Tab switcher matching the sitemap image: Ask a Question vs Make an Enquiry */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 mb-8 border border-slate-200/60 max-w-md">
          <button
            type="button"
            onClick={() => setActiveTab("enquiry")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === "enquiry"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Calendar className="w-4 h-4 text-sky-600" />
            <span>Make an Enquiry</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("question")}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === "question"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <HelpCircle className="w-4 h-4 text-rose-500" />
            <span>Ask a Question</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {activeTab === "enquiry" && (
            <div className="space-y-4 pb-6 border-b border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                1. Which support services are you interested in?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((s) => {
                  const Icon = s.icon;
                  const isChecked = selectedServices.includes(s.id);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left text-sm transition-all cursor-pointer ${
                        isChecked
                          ? "border-sky-600 bg-sky-50/70 text-sky-950 font-semibold ring-1 ring-sky-600"
                          : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isChecked
                            ? "bg-sky-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm">{s.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Who is this support for?
                  </label>
                  <select
                    value={formData.forWhom}
                    onChange={(e) =>
                      setFormData({ ...formData, forWhom: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-sky-600 outline-none"
                  >
                    <option value="parent">For a parent or elderly relative</option>
                    <option value="myself">For myself</option>
                    <option value="partner">For my spouse / partner</option>
                    <option value="client">Professional referral (GP / Social Worker)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Expected visit frequency
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-sky-600 outline-none"
                  >
                    <option value="weekly">Once or twice a week</option>
                    <option value="multiple">3+ times a week</option>
                    <option value="ad-hoc">Ad-hoc or occasional outings</option>
                    <option value="undecided">Not sure yet (need advice)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Contact Details */}
          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              {activeTab === "enquiry"
                ? "2. Your Contact Details"
                : "Your Contact Details & Question"}
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-sky-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Telephone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="e.g. 07700 900123"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-sky-600 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="e.g. sarah@example.co.uk"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-sky-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Postcode in Bristol / South West *
                </label>
                <input
                  type="text"
                  required
                  value={formData.postcode}
                  onChange={(e) =>
                    setFormData({ ...formData, postcode: e.target.value })
                  }
                  placeholder="e.g. BS8 3HA"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-sky-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                {activeTab === "enquiry"
                  ? "Tell us a bit about your loved one's hobbies, routine, or specific needs (Optional)"
                  : "How can we help? Please write your question below *"}
              </label>
              <textarea
                rows={3}
                required={activeTab === "question"}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={
                  activeTab === "enquiry"
                    ? "e.g. Mum lives alone in Clifton and loves gardening and walks in Ashton Court, but needs steady company and transport to physiotherapy..."
                    : "e.g. Do your companions have specific dementia awareness training, and can we meet before committing to regular visits?"
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:bg-white focus:ring-2 focus:ring-sky-600 outline-none resize-y"
              />
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Strict confidentiality. No obligations or sign-up fees.</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-[#1E293B] text-white pl-6 pr-3 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow"
            >
              <span>
                {activeTab === "enquiry"
                  ? "Submit Enquiry & Arrange Free Visit"
                  : "Send Question to Bristol Team"}
              </span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <Send className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
