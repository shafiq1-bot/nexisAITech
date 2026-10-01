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
  Globe2,
  Award
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
        
        {/* Top Badges & Executive Photo */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Fractional CIO | CIO Advisory | Enterprise AI Governance</span>
          </div>

          <a
            href="https://www.linkedin.com/in/shafiqr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-slate-900 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 text-blue-400 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-sm group"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden border border-blue-400/60 shrink-0 shadow-inner">
              <img
                src="/images/shafiq_rahman_headshot.jpg"
                alt="Shafiq Rahman"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span>Shafiq Rahman, MS, MBA, MCS, PMP®</span>
            <span className="text-[10px] bg-blue-600/30 text-blue-300 px-1.5 py-0.5 rounded font-mono group-hover:bg-blue-600 group-hover:text-white transition-colors">LinkedIn</span>
          </a>

          <a
            href="https://scholar.google.com/citations?user=L0j_am8AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-sm"
          >
            <span className="text-amber-400 font-mono text-[11px]">8 Papers</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-mono">Google Scholar</span>
          </a>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            You May Not Need Another Technology Vendor.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              You May Need CIO-Level Leadership.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Shafiq Rahman helps CEOs, presidents, boards, healthcare leaders, universities, and growing organizations turn technology strategy into measurable operational, clinical, institutional, and business outcomes—without immediately hiring a full-time executive.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              id="hero-schedule-conversation-btn"
            >
              <span>Schedule a CIO Advisory Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('assessment')}
              className="px-6 py-4 text-xs sm:text-sm font-semibold text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              id="hero-readiness-assessment-btn"
            >
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <span>Take the CIO Readiness Assessment</span>
            </button>

            <button
              onClick={() => onNavigate('fractional-cio')}
              className="px-6 py-4 text-xs sm:text-sm font-semibold text-blue-300 bg-blue-950/60 border border-blue-800/80 hover:bg-blue-900/80 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="hero-explore-services-btn"
            >
              <span>Explore Fractional CIO Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

          {/* Verified Credibility Summary (Immediately Below Hero) */}
          <div className="pt-8 border-t border-slate-800/80 mt-8">
            <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-3">
              Verified Executive Experience & Leadership Credentials:
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-amber-400 font-mono">Former State CIO</div>
                <div className="text-xs text-white font-semibold mt-0.5">Maryland Dept. of Transportation</div>
                <div className="text-[11px] text-slate-400 mt-1">$6M recurring savings · Chaired ARB & Governance across 6 agencies.</div>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-emerald-400 font-mono">Current Strategic Advisor</div>
                <div className="text-xs text-white font-semibold mt-0.5">Ascension / Saint Agnes</div>
                <div className="text-[11px] text-slate-400 mt-1">Clinical operations, EHR workflow redesign & rationalization.</div>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-blue-400 font-mono">Academic Medicine IT</div>
                <div className="text-xs text-white font-semibold mt-0.5">Univ. of Maryland Medicine</div>
                <div className="text-[11px] text-slate-400 mt-1">Reported to Dean; led Meditech-to-Epic hospital transformation.</div>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-purple-400 font-mono">Governor's Appointee</div>
                <div className="text-xs text-white font-semibold mt-0.5">Maryland AI Sub-Cabinet</div>
                <div className="text-[11px] text-slate-400 mt-1">Responsible AI governance, privacy & MS, MBA, MCS, PMP®.</div>
              </div>
            </div>
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
