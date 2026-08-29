import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsTicker from "@/components/MetricsTicker";
import SkillMatrix from "@/components/SkillMatrix";
import ProjectsSection from "@/components/ProjectsSection";
import InteractiveBPMNVisualizer from "@/components/InteractiveBPMNVisualizer";
import SQLDataPlayground from "@/components/SQLDataPlayground";
import ROICalculator from "@/components/ROICalculator";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <MetricsTicker />
        <ProjectsSection />
        <SkillMatrix />
        <InteractiveBPMNVisualizer />
        <SQLDataPlayground />
        <ROICalculator />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
