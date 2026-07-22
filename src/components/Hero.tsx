import React from 'react';
import { 
  ShieldCheck, 
  BrainCircuit, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Lock, 
  Cpu, 
  BarChart3,
  Globe2
} from 'lucide-react';
import { Language, Region, PageId } from '../types';
import { translations } from '../data/translations';
import { AIVisualShowcase } from './AIVisualShowcase';

interface HeroProps {
  currentLanguage: Language;
  currentRegion: Region;
  onNavigate: (page: PageId) => void;
  onOpenAdvisor: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLanguage,
  currentRegion,
  onNavigate,
  onOpenAdvisor,
  onOpenConsultation,
}) => {
  const t = translations[currentLanguage];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-20 border-b border-slate-800">
      {/* Visual Background Lighting & Grid Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => onNavigate('markets')}
            className="inline-flex items-center gap-2 bg-blue-950/90 border border-blue-600/80 hover:bg-blue-900 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all cursor-pointer"
          >
            <Globe2 className="w-4 h-4 text-cyan-400" />
            <span>US Market (Primary HQ) • Saudi Arabia • UAE Regional Pages</span>
            <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-mono">Explore Markets</span>
          </button>

          <span className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-700/80 text-purple-300 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Nexis AI Autonomous Agents & Zero Trust</span>
          </span>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            {t.heroSubheadline}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-900/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-schedule-consultation-btn"
            >
              <span>{t.scheduleConsultation}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('assessment')}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              id="hero-request-assessment-btn"
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>{t.requestAssessment}</span>
            </button>

            <button
              onClick={onOpenAdvisor}
              className="w-full sm:w-auto px-6 py-4 text-sm font-semibold text-purple-200 bg-purple-950/80 border border-purple-700/80 hover:bg-purple-900 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-ai-advisor-btn"
            >
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              <span>Interactive AI Strategy Assistant</span>
            </button>
          </div>

          {/* Key Compliance Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>HIPAA & FERPA Certified</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>NIST 800-53 / SOC 2 Type II</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>KSA NDMO & NCA Compliant</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>UAE TDRA Sovereign Approved</span>
            </span>
          </div>
        </div>

        {/* Ticker / Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
          <div className="text-center p-4 border-r border-slate-800/80 last:border-none">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono tracking-tight">
              {t.heroStat1Value}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.heroStat1Label}</div>
          </div>

          <div className="text-center p-4 border-r border-slate-800/80 last:border-none">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">
              {t.heroStat2Value}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.heroStat2Label}</div>
          </div>

          <div className="text-center p-4 border-r border-slate-800/80 last:border-none">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono tracking-tight">
              {t.heroStat3Value}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.heroStat3Label}</div>
          </div>

          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">
              {t.heroStat4Value}
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.heroStat4Label}</div>
          </div>
        </div>

        {/* Dynamic AI Executive Visual Showcase */}
        <AIVisualShowcase onNavigate={onNavigate} onOpenConsultation={onOpenConsultation} />

      </div>
    </section>
  );
};
