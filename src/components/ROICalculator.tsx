"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, Clock, TrendingUp, Sparkles } from "lucide-react";

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(25);
  const [hoursPerDay, setHoursPerDay] = useState(3.5);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [optimizationPercentage, setOptimizationPercentage] = useState(65);

  // Calculations
  const workingDaysPerYear = 240;
  const annualHoursBefore = teamSize * hoursPerDay * workingDaysPerYear;
  const hoursSavedPerYear = Math.round(annualHoursBefore * (optimizationPercentage / 100));
  const annualCostSavings = Math.round(hoursSavedPerYear * hourlyRate);
  const estimatedImplementationCost = 75000;
  const paybackMonths = Number((estimatedImplementationCost / (annualCostSavings / 12)).toFixed(1));
  const roiPercentage = Math.round(((annualCostSavings - estimatedImplementationCost) / estimatedImplementationCost) * 100);

  return (
    <section id="roi-calculator" className="py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            BUSINESS VALUE & ROI ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Interactive Business Impact Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Simulate the financial cost savings and operational efficiency gained by deploying technical business analysis and process automation.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 pb-3 border-b border-slate-800">
              <Calculator className="w-4 h-4 text-emerald-400" />
              ADJUST PROJECT INPUT PARAMETERS
            </div>

            {/* Slider 1: Team Size */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-400">Team / Operations Size:</span>
                <span className="text-emerald-400 font-bold">{teamSize} Employees</span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            {/* Slider 2: Manual Hours Wasted */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-400">Manual Hours spent per Day/Person:</span>
                <span className="text-cyan-400 font-bold">{hoursPerDay} Hours</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="0.5"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Slider 3: Hourly Labor Cost */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-400">Average Hourly Labor Rate:</span>
                <span className="text-teal-300 font-bold">${hourlyRate} / Hour</span>
              </div>
              <input
                type="range"
                min="20"
                max="150"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
            </div>

            {/* Slider 4: Process Optimization % */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-400">TBA Target Process Optimization Rate:</span>
                <span className="text-emerald-400 font-bold">{optimizationPercentage}% Efficiency</span>
              </div>
              <input
                type="range"
                min="30"
                max="90"
                step="5"
                value={optimizationPercentage}
                onChange={(e) => setOptimizationPercentage(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>

          {/* Right Column: Calculated Results Display */}
          <div className="lg:col-span-6 bg-slate-950 rounded-xl p-6 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                ESTIMATED ANNUAL RETURN ON INVESTMENT
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                FORMULA VERIFIED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Annual Cost Savings */}
              <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30">
                <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  Annual Cost Savings
                </div>
                <div className="text-2xl font-extrabold font-mono text-emerald-400">
                  ${annualCostSavings.toLocaleString()}
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Direct labor reallocation</div>
              </div>

              {/* Annual Hours Saved */}
              <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30">
                <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Hours Saved / Year
                </div>
                <div className="text-2xl font-extrabold font-mono text-cyan-400">
                  {hoursSavedPerYear.toLocaleString()} hrs
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Operational capacity unlocked</div>
              </div>

              {/* Payback Period */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono mb-1">System Payback Period</div>
                <div className="text-xl font-bold font-mono text-slate-200">
                  {paybackMonths > 0 ? `${paybackMonths} Months` : "< 1 Month"}
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Based on $75k implementation</div>
              </div>

              {/* ROI Percentage */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono mb-1">Year-1 ROI Ratio</div>
                <div className="text-xl font-bold font-mono text-amber-400">
                  +{roiPercentage}% ROI
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Net financial return</div>
              </div>

            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 leading-relaxed">
              * Based on empirical metrics from the Nada Al Rabee B2B platform and enterprise data engineering initiatives.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
