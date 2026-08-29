"use client";

import React, { useState } from "react";
import { CaseStudy } from "@/data/portfolioData";
import {
  X,
  FileText,
  GitFork,
  Code2,
  CheckSquare,
  TrendingUp,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  AlertTriangle,
  Database,
  Cpu,
  ArrowRight
} from "lucide-react";

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "elicitation" | "uml" | "contracts" | "bdd" | "impact"
  >("overview");
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const copySnippet = () => {
    navigator.clipboard.writeText(project.contractSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-slate-950/90 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/90 flex items-start justify-between sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded font-mono text-[10px] uppercase font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.domain}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Client: <strong className="text-slate-200">{project.client}</strong>
              </span>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 hidden sm:inline">
                {project.methodology}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Role: <span className="text-emerald-400 font-semibold">{project.role}</span> • Tech Stack: {project.techStack.join(", ")}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900 px-4 sm:px-6 overflow-x-auto">
          {[
            { id: "overview", label: "1. Overview & Problem", icon: Layers },
            { id: "elicitation", label: "2. Elicitation & Constraints", icon: ShieldCheck },
            { id: "uml", label: "3. UML 2.5 3-Lane Activity Flow", icon: GitFork },
            { id: "contracts", label: "4. API & Data Contracts", icon: Code2 },
            { id: "bdd", label: "5. BDD Acceptance Criteria (Gherkin)", icon: FileText },
            { id: "impact", label: "6. Delivery Impact", icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-3.5 font-mono text-xs font-semibold border-b-2 transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "border-emerald-400 text-emerald-400 bg-emerald-500/5"
                    : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-950/40 font-sans">
          
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Project Context & Executive Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-red-500/30 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Business Bottleneck & Problem
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.businessProblem}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    My Role as Technical Business Analyst
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.myRole}
                  </p>
                </div>
              </div>

              {/* Tech Stack Grid */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                  Technical Stack & Environment
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-200 border border-slate-800 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ELICITATION & CONSTRAINTS */}
          {activeTab === "elicitation" && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  Requirement Elicitation Strategy & Navigating Ambiguity
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.elicitationDetails}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                  Core System Constraints Elicited
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.coreConstraints.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold">
                          0{idx + 1}
                        </span>
                        <h5 className="text-xs font-bold text-slate-100">{c.title}</h5>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: UML 2.5 3-LANE ACTIVITY FLOW */}
          {activeTab === "uml" && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  System Architecture & UML 2.5 Activity Diagrams
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>

              {/* UML 3-Lane Architecture Rendering */}
              {project.umlLanes && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                      3-Lane Cross-System Handoff Architecture
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      UML 2.5 Standard Compliant
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.umlLanes.map((lane, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                        <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs font-bold text-cyan-400">
                          {lane.lane}
                        </div>
                        <ul className="space-y-2">
                          {lane.responsibilities.map((resp, i) => (
                            <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                              <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 4: API & DATA CONTRACTS */}
          {activeTab === "contracts" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
                    {project.contractTitle}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {project.contractDescription}
                  </p>
                </div>
                <button
                  onClick={copySnippet}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy Snippet"}
                </button>
              </div>

              <pre className="font-mono text-xs bg-slate-950 text-emerald-300 p-4 sm:p-5 rounded-xl border border-slate-800 overflow-x-auto leading-relaxed">
                <code>{project.contractSnippet}</code>
              </pre>
            </div>
          )}

          {/* TAB 5: BDD ACCEPTANCE CRITERIA (GHERKIN) */}
          {activeTab === "bdd" && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase">
                  {project.gherkinFeatureTitle}
                </h4>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  Gherkin BDD Standard
                </span>
              </div>

              <div className="space-y-4">
                {project.gherkinScenarios.map((sc, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl border ${
                      sc.type === "happy"
                        ? "bg-slate-900/90 border-emerald-500/30"
                        : "bg-slate-900/90 border-amber-500/30"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                        sc.type === "happy" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                      }`}>
                        {sc.type === "happy" ? "HAPPY PATH" : "EXCEPTION FLOW"}
                      </span>
                      <h5 className="text-sm font-bold text-slate-100">{sc.title}</h5>
                    </div>

                    <div className="font-mono text-xs space-y-2 bg-slate-950 p-4 rounded-lg border border-slate-900 text-slate-300">
                      <div>
                        <span className="text-cyan-400 font-bold">Given</span>{" "}
                        {sc.given.join("\nAnd ")}
                      </div>
                      <div>
                        <span className="text-amber-400 font-bold">When</span> {sc.when}
                      </div>
                      <div>
                        <span className="text-emerald-400 font-bold">Then</span>{" "}
                        {sc.then.join("\nAnd ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 6: DELIVERY IMPACT */}
          {activeTab === "impact" && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.impactMetrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-2xl font-extrabold font-mono text-emerald-400 mb-1">{m.value}</div>
                    <div className="text-xs font-bold text-slate-200 mb-0.5">{m.label}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{m.detail}</div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
                  Agile Delivery & Business Outcome Summary
                </h4>
                <div className="space-y-2">
                  {project.impactSummary.map((sum, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sum}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Project Identifier: <strong className="font-mono text-slate-200">{project.id}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
