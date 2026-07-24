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
  onOpenBookAudit?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLanguage,
  currentRegion,
  onNavigate,
  onOpenAdvisor,
  onOpenConsultation,
  onOpenBookAudit,
}) => {
  const t = translations[currentLanguage];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden pt-10 pb-16 border-b border-slate-800">
      {/* Visual Background Lighting & Grid Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {onOpenBookAudit && (
            <button
              onClick={onOpenBookAudit}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-600/30 transition-all cursor-pointer ring-2 ring-blue-400/50 animate-bounce"
              id="hero-top-book-audit-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Book 2026 AI & Security Audit</span>
              <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-mono">1-Click</span>
            </button>
          )}

          <button
            onClick={() => onNavigate('markets')}
            className="inline-flex items-center gap-2 bg-blue-950/90 border border-blue-600/80 hover:bg-blue-900 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all cursor-pointer"
          >
            <Globe2 className="w-4 h-4 text-cyan-400" />
            <span>US Market (HQ Owings Mills, MD) • KSA • UAE Regional Hubs</span>
            <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-mono">Explore Markets</span>
          </button>
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
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            {onOpenBookAudit && (
              <button
                onClick={onOpenBookAudit}
                className="px-7 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                id="hero-book-2026-audit-btn"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Book 2026 Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-schedule-consultation-btn"
            >
              <span>{t.scheduleConsultation}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#free-tools"
              className="px-6 py-3.5 text-xs font-semibold text-emerald-300 bg-emerald-950/90 border border-emerald-800 hover:bg-emerald-900 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Free Web SMS & Calling Tools</span>
            </a>

            <button
              onClick={onOpenAdvisor}
              className="px-6 py-3.5 text-xs font-semibold text-purple-200 bg-purple-950/80 border border-purple-700/80 hover:bg-purple-900 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
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
