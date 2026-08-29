"use client";

import React from "react";
import { CAREER_HISTORY, BIO_DATA } from "@/data/portfolioData";
import { Briefcase, CheckCircle, GraduationCap } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            5 YEARS CAREER TRAJECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            5 years of experience managing requirements from initiation to closure, eliciting defect-free specifications, and translating business vision into user stories across enterprise domains.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 max-w-4xl mx-auto mb-16">
          {CAREER_HISTORY.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Marker Bullet */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded font-mono text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-100 mt-2">
                      {exp.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">
                      {exp.company} {exp.location ? `• ${exp.location}` : ""}
                      {exp.officialTitle && (
                        <span className="text-slate-400 font-sans ml-2">(Official Title: {exp.officialTitle})</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Education Section Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase">Education</div>
            <h3 className="text-lg font-bold text-slate-100 mt-0.5">
              {BIO_DATA.education.institution}
            </h3>
            <p className="text-xs font-mono text-emerald-400 mt-0.5">
              {BIO_DATA.education.degree} • {BIO_DATA.education.period}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
