"use client";

import React, { useState, useEffect } from "react";
import { BIO_DATA } from "@/data/portfolioData";
import { Download, Menu, X, FileText, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: track which section is currently visible
  useEffect(() => {
    const sectionIds = [
      "projects",
      "skills",
      "bpmn-visualizer",
      "sql-playground",
      "roi-calculator",
      "experience",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            // Update URL hash without scrolling
            history.replaceState(null, "", `#${id}`);
          }
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "3-Lane UML", href: "#bpmn-visualizer" },
    { name: "SQL Specs", href: "#sql-playground" },
    { name: "ROI Estimator", href: "#roi-calculator" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-mono font-bold text-slate-950 text-lg shadow-lg group-hover:scale-105 transition-transform">
              MZ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 tracking-tight text-base group-hover:text-emerald-400 transition-colors">
                  {BIO_DATA.name}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
                  TBA
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block font-mono">
                Technical Business Analyst • 5 Yrs Exp
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                    isActive
                      ? "text-emerald-400 bg-slate-800/90"
                      : "text-slate-300 hover:text-emerald-400 hover:bg-slate-800/80"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Mohammed_Zaid_Resume.pdf"
              download="Mohammed_Zaid_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-md shadow-emerald-500/10 transition-all"
            >
              Hire Me
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col justify-between">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium border-b border-slate-800/60 flex items-center justify-between ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-200 hover:text-emerald-400"
                  }`}
                >
                  {link.name}
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-600"}`} />
                </a>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
            <a
              href="/Mohammed_Zaid_Resume.pdf"
              download="Mohammed_Zaid_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-sm font-medium rounded-lg text-slate-200 bg-slate-900 border border-slate-700 flex items-center justify-center gap-2 text-center"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              Download Resume (Mohammed Zaid PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-sm font-semibold rounded-lg text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 text-center"
            >
              Contact Mohammed Zaid
            </a>
          </div>
        </div>
      )}
    </>
  );
}
