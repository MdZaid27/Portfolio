"use client";

import React, { useState } from "react";
import { BIO_DATA } from "@/data/portfolioData";
import { Mail, Phone, Send, CheckCircle2, Calendar } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Technical Business Analyst",
    budget: "Full-Time Permanent (FTE)",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Exact Calendly Booking Link
  const calendlyUrl = "https://calendly.com/mohammed-zaid-27";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Opportunity Inquiry: ${formData.inquiryType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Mohammed,\n\nBelow are the details for a project / role opportunity:\n\n` +
      `Sender Name: ${formData.name}\n` +
      `Sender Email: ${formData.email}\n` +
      `Inquiry Role / Category: ${formData.inquiryType}\n` +
      `Engagement Type: ${formData.budget}\n\n` +
      `Project Summary / Requirements:\n${formData.message}\n\n` +
      `Sent via Portfolio Contact Form`
    );

    // Trigger direct email composition
    window.location.href = `mailto:${BIO_DATA.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        inquiryType: "Technical Business Analyst",
        budget: "Full-Time Permanent (FTE)",
        message: ""
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Equal Height Grid (items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Get in Touch Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between h-full">
            
            {/* Top Content */}
            <div className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-2.5">
                  GET IN TOUCH
                </div>
                
                {/* Single Straight Line Headline */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight whitespace-nowrap">
                  Connect with Mohammed Zaid
                </h2>
                
                <p className="text-xs text-slate-400 leading-relaxed mt-1.5">
                  Available for Technical Business Analyst roles, enterprise requirements gathering, B2B platforms, and data migration initiatives.
                </p>
              </div>

              {/* Direct Contact Links */}
              <div className="space-y-2.5">
                {/* Email */}
                <a
                  href={`mailto:${BIO_DATA.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950 border border-slate-900 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</div>
                    <div className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition-colors truncate">
                      {BIO_DATA.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${BIO_DATA.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950 border border-slate-900 hover:border-teal-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Phone</div>
                    <div className="text-xs font-bold text-slate-200 group-hover:text-teal-400 transition-colors font-mono">
                      +91 {BIO_DATA.phone}
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={BIO_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950 border border-slate-900 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">LinkedIn Profile</div>
                    <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition-colors font-mono">
                      www.linkedin.com/in/mxzaid
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom Content: Calendly Card */}
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Calendar className="w-3.5 h-3.5" />
                FAST-TRACK DISCOVERY CALL
              </div>
              <p className="text-[11px] text-slate-300 leading-normal">
                Immediately book a 15-minute discovery call or interview slot on my calendar.
              </p>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-emerald-500/10"
              >
                View Calendar & Book Slot ➔
              </a>
            </div>

          </div>

          {/* Right Column: Inquiry Form Card (Matched Height) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between h-full">
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-5">
                  Send an Opportunity Inquiry
                </h3>

                {submitted ? (
                  <div className="p-8 bg-slate-950 rounded-xl border border-emerald-500/40 text-center space-y-4 animate-in fade-in my-auto">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-100">Opening Email Client...</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Your inquiry message has been formatted. Send directly to <strong className="text-emerald-400 font-mono">md.zaid2705@gmail.com</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5">
                          Your Name / Company
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Hiring Manager / Client"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-emerald-500 font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="hiring@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-emerald-500 font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5">
                          Role / Opportunity Category
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
                        >
                          <option value="Technical Business Analyst">Technical Business Analyst</option>
                          <option value="Systems Analyst">Systems Analyst</option>
                          <option value="IT Business Analyst">IT Business Analyst</option>
                          <option value="Agile Business Analyst">Agile Business Analyst</option>
                          <option value="Other / General Inquiry">Other / General Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5">
                          Engagement Type
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
                        >
                          <option value="Full-Time Permanent (FTE)">Full-Time Permanent (FTE)</option>
                          <option value="Contract / Freelance">Contract / Freelance</option>
                          <option value="Remote / Hybrid">Remote / Hybrid / On-Site</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Message / Opportunity Summary
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Provide details about the role, project scope, or requirements gathering needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-emerald-500 font-mono resize-none flex-1 min-h-[120px]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10 transition-all cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Email to md.zaid2705@gmail.com
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
