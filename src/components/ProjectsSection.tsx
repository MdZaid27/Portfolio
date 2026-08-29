"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS, CaseStudy } from "@/data/portfolioData";
import CaseStudyModal from "./CaseStudyModal";
import {
  ArrowUpRight,
  FileText,
  Star,
  CheckCircle2,
  Layers
} from "lucide-react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (filter === "b2b") return proj.id.includes("b2b");
    if (filter === "data") return proj.id.includes("data");
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
              FEATURED PORTFOLIO CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Enterprise Technical Business Analyst Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Deep dives into MVP scoping, UML 2.5 3-lane activity flows, API & DDL data contracts, BDD Gherkin user stories, and measurable delivery impact.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: "all", label: "All Projects" },
              { id: "b2b", label: "Nada Al Rabee B2B" },
              { id: "data", label: "Cloud Collab Data" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-emerald-500 text-slate-950 font-bold shadow"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between relative group"
            >
              
              {/* Card Top */}
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold bg-slate-900 text-emerald-400 border border-emerald-500/20">
                    {project.domain}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    FEATURED CASE STUDY
                  </span>
                </div>

                {/* Title & Client */}
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-4">
                  Client: <strong className="text-slate-200">{project.client}</strong> • Role: <span className="text-cyan-400">{project.role}</span>
                </div>

                {/* Overview Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.overview}
                </p>

                {/* Highlighted ROI Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-900">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-[10px] font-mono text-slate-400">{metric.label}</div>
                      <div className="text-base sm:text-lg font-extrabold font-mono text-emerald-400">{metric.value}</div>
                      <div className="text-[10px] text-slate-500 leading-tight">{metric.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:bg-slate-800"
                >
                  <FileText className="w-4 h-4" />
                  View Full Case Study, Contracts & BDD Specs
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
