"use client";

import React from "react";
import { TrendingUp, Zap, Shield, Award, Clock } from "lucide-react";

export default function MetricsTicker() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Nada Al Rabee B2B",
      stat: "+280% Digital Adoption",
      desc: "Distributor portal adoption in 6 months"
    },
    {
      icon: Zap,
      title: "PostgreSQL ➔ ClickHouse",
      stat: "85ms Latency SLA",
      desc: "Reduced from 14.2s on 500M+ rows"
    },
    {
      icon: Clock,
      title: "Order Lifecycle",
      stat: "65% Time Reduction",
      desc: "From 14 hrs down to 1.8 hrs"
    },
    {
      icon: Shield,
      title: "Zero-Downtime Data Cutover",
      stat: "520M+ Records",
      desc: "100% Data integrity reconciliation"
    },
    {
      icon: Award,
      title: "Operational Savings",
      stat: "$3.2M / Year",
      desc: "In labor & credit risk optimization"
    }
  ];

  return (
    <div className="bg-slate-900/90 border-y border-slate-800 py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/40 transition-colors"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-400 leading-none mb-1">
                    {item.stat}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-200 leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
