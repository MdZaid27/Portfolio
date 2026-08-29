"use client";

import React, { useState } from "react";
import { SAMPLE_SQL_QUERIES } from "@/data/portfolioData";
import { Database, Play, CheckCircle2, RefreshCw, BarChart2, Table } from "lucide-react";

export default function SQLDataPlayground() {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(85);
  const [hasRun, setHasRun] = useState(true);

  const currentQuery = SAMPLE_SQL_QUERIES[selectedQueryIndex];

  const mockData = [
    { id: 1, date: "2026-08-28", channel: "B2B Digital Portal", orders: 1420, avg_min: 1.8, revenue: "AED 342,500", latency: "85ms" },
    { id: 2, date: "2026-08-27", channel: "B2B Digital Portal", orders: 1380, avg_min: 1.7, revenue: "AED 318,200", latency: "82ms" },
    { id: 3, date: "2026-08-26", channel: "B2B Digital Portal", orders: 1510, avg_min: 1.9, revenue: "AED 389,000", latency: "88ms" },
    { id: 4, date: "2026-08-25", channel: "Manual Call Center", orders: 190, avg_min: 14.2, revenue: "AED 42,000", latency: "14.2s (PostgreSQL)" },
  ];

  const handleRunQuery = () => {
    setIsExecuting(true);
    setHasRun(false);
    setTimeout(() => {
      setIsExecuting(false);
      setHasRun(true);
      setExecutionTime(selectedQueryIndex === 1 ? 85 : 120);
    }, 600);
  };

  return (
    <section id="sql-playground" className="py-24 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            DATA LITERACY & ANALYTICS WIDGET
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            SQL & OLAP Data Query Playground
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Demonstrating advanced SQL query formulation, ClickHouse aggregation specs, and data validation techniques.
          </p>
        </div>

        {/* Playground Main Grid */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Query Selector & Editor */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400" />
                SELECT SQL PRESET
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                LIVE DEMO
              </span>
            </div>

            {/* Query Selector Tabs */}
            <div className="flex flex-col gap-2">
              {SAMPLE_SQL_QUERIES.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedQueryIndex(idx);
                    setHasRun(false);
                  }}
                  className={`text-left p-3.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                    selectedQueryIndex === idx
                      ? "bg-slate-800 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{q.name}</span>
                    <span className="text-[10px] text-slate-500">Preset 0{idx + 1}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* SQL Code Editor View */}
            <div className="relative">
              <div className="flex items-center justify-between bg-slate-950 px-4 py-2 rounded-t-xl border-t border-x border-slate-800 text-[11px] font-mono text-slate-400">
                <span>query_editor.sql</span>
                <span className="text-emerald-400 font-bold">dialect: ClickHouse / PostgreSQL</span>
              </div>
              <pre className="font-mono text-xs bg-slate-950 text-cyan-200 p-4 rounded-b-xl border border-slate-800 overflow-x-auto min-h-[160px] leading-relaxed">
                <code>{currentQuery.sql}</code>
              </pre>
            </div>

            {/* Run Button */}
            <button
              onClick={handleRunQuery}
              disabled={isExecuting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 transition-all cursor-pointer disabled:opacity-50"
            >
              {isExecuting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Executing SQL Query...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-slate-950" />
                  Execute Query & Inspect Results
                </>
              )}
            </button>
          </div>

          {/* Right Column: Execution Output & Data Table */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-4">
                <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                  <Table className="w-4 h-4 text-emerald-400" />
                  QUERY RESULTS TABLE
                </span>
                {hasRun && executionTime && (
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Execution Time: {executionTime}ms
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 mb-4 bg-slate-950 p-3 rounded-xl border border-slate-900 font-mono">
                {currentQuery.description}
              </p>

              {/* Data Table */}
              <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-950">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-3">Order Date</th>
                      <th className="p-3">Channel</th>
                      <th className="p-3 text-right">Orders</th>
                      <th className="p-3 text-right">Avg Process</th>
                      <th className="p-3 text-right">Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900 text-slate-300">
                    {mockData.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-900/50 transition-colors">
                        <td className="p-3 text-slate-400">{row.date}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] ${row.channel.includes("Digital") ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                            {row.channel}
                          </span>
                        </td>
                        <td className="p-3 text-right font-bold text-slate-200">{row.orders}</td>
                        <td className="p-3 text-right text-emerald-400">{row.avg_min}m</td>
                        <td className="p-3 text-right text-slate-100 font-bold">{row.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Performance Summary Banner */}
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Database Optimization:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Sub-Second OLAP Benchmark Passed
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
