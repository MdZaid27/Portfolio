"use client";

import React from "react";
import { BIO_DATA } from "@/data/portfolioData";
import { ArrowRight, Database, GitFork, FileCode, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 mb-6 text-xs text-slate-300 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400 font-medium">TECHNICAL BUSINESS ANALYST</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 hidden sm:inline">4 YRS FRONTEND DEV BACKGROUND</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-6">
              Bridging <span className="gradient-text-emerald">Business Strategy</span> & <span className="gradient-text-cyan">Software Engineering</span>
            </h1>

            {/* Sub-headline / Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              I specialize in MVP scoping, UML 2.5 3-lane activity diagramming, JSON/SQL data contracts, and BDD Gherkin user stories for high-complexity enterprise applications.
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Nada Al Rabee B2B Platform",
                "Cloud Collab PostgreSQL → ClickHouse",
                "UML 2.5 3-Lane Diagrams",
                "500 AED Cart Threshold",
                "BDD Gherkin Scenarios",
                "CDC Data Streaming"
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 font-mono text-xs flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Explore Enterprise Case Studies
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#bpmn-visualizer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <GitFork className="w-4 h-4 text-emerald-400" />
                UML 3-Lane Activity Visualizer
              </a>
            </div>

            {/* Quick Metrics Cards Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 w-full pt-8 border-t border-slate-800/80">
              {BIO_DATA.quickStats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-800/60">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 font-medium leading-tight mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column - Code/BRD Preview Tile */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-5 border border-slate-800 shadow-2xl relative overflow-hidden group">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="font-mono text-xs text-slate-400 ml-2">bdd_acceptance_criteria.feature</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  GHERKIN VALIDATED
                </span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300 bg-slate-950 p-4 rounded-xl border border-slate-900 overflow-x-auto">
                <div className="text-slate-500"># Feature: B2B Invoice History & Cart Guard</div>
                <div>
                  <span className="text-cyan-400">Scenario:</span> <span className="text-amber-300">Minimum 500 AED Cart Checkout</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">Given</span> the B2B user is on the cart screen
                  <br />
                  <span className="text-cyan-400">And</span> the cart total is 500 AED or greater
                  <br />
                  <span className="text-amber-400">When</span> the user clicks "Proceed to Checkout"
                  <br />
                  <span className="text-emerald-400">Then</span> authorize real-time Net-30 credit line
                </div>
                
                <div className="pt-2 text-slate-500"># ClickHouse Schema Contract</div>
                <div>
                  <span className="text-cyan-400">ENGINE</span> = <span className="text-emerald-400">MergeTree()</span>
                  <br />
                  <span className="text-cyan-400">ORDER BY</span> (created_at, event_type);
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-200">PostgreSQL ➔ ClickHouse</div>
                    <div className="text-[10px] text-slate-400">15m ➔ Sub-second queries</div>
                  </div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center gap-2.5">
                  <FileCode className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-200">Nada Al Rabee B2B</div>
                    <div className="text-[10px] text-slate-400">React.js + REST API Specs</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
