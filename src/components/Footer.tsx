"use client";

import React from "react";
import { BIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Terminal, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-slate-950">
            MZ
          </div>
          <div>
            <div className="text-slate-200 font-bold">{BIO_DATA.name}</div>
            <div className="text-[10px] text-slate-500">
              Technical Business Analyst Portfolio • Next.js & Tailwind CSS
            </div>
          </div>
        </div>

        {/* Center System Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-300">Spec Status:</span>
          <span className="text-emerald-400 font-bold">100% Production Ready</span>
        </div>

        {/* Right Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-slate-500">© 2026 All Rights Reserved</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
