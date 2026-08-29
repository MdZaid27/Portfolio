"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { FileCode, Database, Users, CheckCircle } from "lucide-react";

export default function SkillMatrix() {
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "FileCode":
        return <FileCode className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      case "Users":
        return <Users className="w-5 h-5" />;
      default:
        return <FileCode className="w-5 h-5" />;
    }
  };

  const getProficiencyBadgeStyle = (proficiency: string) => {
    switch (proficiency) {
      case "Expert":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Advanced":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "Proficient":
        return "bg-teal-500/10 text-teal-300 border-teal-500/30";
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#090d16] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            COMPETENCY MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
            Technical & Business Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Core requirements gathering, stakeholder alignment, user story authoring, and technical delivery capabilities.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-800 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:bg-slate-800/50"
                }`}
              >
                <span className={isActive ? "text-emerald-400" : "text-slate-500"}>
                  {getCategoryIcon(cat.icon)}
                </span>
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              {SKILL_CATEGORIES[activeCategory].category}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {SKILL_CATEGORIES[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-950 p-5 rounded-xl border border-slate-900 hover:border-slate-800 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-500">
                      Experience: {skill.experience}
                    </span>
                  </div>
                  {/* Proficiency Badge Tag (replaces percentages) */}
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${getProficiencyBadgeStyle(skill.proficiency)}`}>
                    {skill.proficiency}
                  </span>
                </div>

                {/* Visual Bar Weight */}
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden my-3">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.barFill}%` }}
                  />
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
