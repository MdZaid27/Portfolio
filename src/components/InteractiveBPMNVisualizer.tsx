"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { GitFork, ArrowRight, Cpu, ArrowDown, ShieldCheck } from "lucide-react";

export default function InteractiveBPMNVisualizer() {
  const [selectedWorkflowIndex, setSelectedWorkflowIndex] = useState(0);
  const [activeLaneIndex, setActiveLaneIndex] = useState(0);

  const currentProject = FEATURED_PROJECTS[selectedWorkflowIndex];
  const lanes = currentProject.umlLanes || [];
  const activeLane = lanes[activeLaneIndex] || lanes[0];

  return (
    <section id="bpmn-visualizer" className="py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            UML 2.5 3-LANE ARCHITECTURE SIMULATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Cross-System Activity Workflow Mapping
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Interactive 3-lane visual architecture documenting data handoffs, API contracts, and state validations across network boundaries.
          </p>
        </div>

        {/* Workflow Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => {
                setSelectedWorkflowIndex(idx);
                setActiveLaneIndex(0);
              }}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                selectedWorkflowIndex === idx
                  ? "bg-slate-800 text-emerald-400 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800"
              }`}
            >
              <GitFork className="w-4 h-4 text-emerald-400" />
              {proj.title} 3-Lane Diagram
            </button>
          ))}
        </div>

        {/* Visualizer Container */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Diagram Step Nodes */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase">
                Architecture Lanes ({lanes.length} Layers)
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                Click layer to inspect handoffs
              </span>
            </div>

            <div className="space-y-3">
              {lanes.map((lane, idx) => {
                const isCurrent = activeLaneIndex === idx;
                return (
                  <div key={idx} className="relative">
                    <button
                      onClick={() => setActiveLaneIndex(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isCurrent
                          ? "bg-slate-800 border-emerald-500 text-slate-100 shadow-md shadow-emerald-500/10"
                          : "bg-slate-950/80 border-slate-900 hover:border-slate-800 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                            isCurrent
                              ? "bg-emerald-400 text-slate-950"
                              : "bg-slate-900 text-slate-400 border border-slate-800"
                          }`}
                        >
                          0{idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold">{lane.lane}</div>
                          <div className="text-[11px] font-mono text-slate-400">
                            {lane.responsibilities.length} Core System Responsibilities
                          </div>
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 transition-transform ${isCurrent ? "text-emerald-400 translate-x-1" : "text-slate-600"}`} />
                    </button>

                    {idx < lanes.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-4 h-4 text-slate-700" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layer Inspector */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 space-y-5 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  {activeLane?.lane || "LANE SPECIFICATION"}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {currentProject.client}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                  Technical Responsibilities & Handoff Specs
                </h4>
                <ul className="space-y-2.5">
                  {activeLane?.responsibilities.map((resp, i) => (
                    <li key={i} className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-mono leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-lg border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                Prevented UI/DB misalignment by explicitly specifying API calls and session validations prior to sprint execution.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
