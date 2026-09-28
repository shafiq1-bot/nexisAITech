import React from 'react';
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Award,
  FileCheck2,
  Lock,
  Building2,
  Compass,
} from 'lucide-react';
import { operatingCadence } from '../data/fractionalCIOData';

interface TechnologyGovernancePageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  onNavigate: (pageId: any) => void;
}

export const TechnologyGovernancePage: React.FC<TechnologyGovernancePageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  onNavigate,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>Executive Oversight Discipline</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Technology Governance & Executive Oversight
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Replace informal decision-making and runaway technology spend with a light, disciplined governance system where client executives retain authority and every dollar has a named owner.
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. Field-tested governance frameworks built over two decades governing complex state agencies, health systems, and research universities.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Discuss Technology Governance Advisory')}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-xl shadow-amber-500/20 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule Governance Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('assessment')}
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <span>Assess IT Governance Maturity</span>
          </button>
        </div>
      </div>

      {/* Operating Cadence */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The Executive Governance Cadence</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Listen → Decide → Assign → Measure → Escalate. Keeping technology visible and executive-level without creating administrative bureaucracy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {operatingCadence.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-mono font-bold uppercase">
                {item.cadence}
              </div>
              <div className="text-xs text-slate-400 font-mono">{item.duration}</div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                {item.focusItems.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Governance Core Artifacts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The Four Governance Artifacts ("One Source of Truth")</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Never rely on conflicting slide decks. We install four live governance artifacts that provide continuous clarity to the CEO, CFO, and Board.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase">Artifact 01</div>
            <h3 className="text-lg font-bold text-white">Executive Decision Log</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every consequential technology decision, capital trade-off, vendor award, and exception is logged with its explicit rationale, sponsor sign-off, and review date.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-mono font-bold text-blue-400 uppercase">Artifact 02</div>
            <h3 className="text-lg font-bold text-white">Executive Risk Register</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ranked by institutional impact and likelihood: cybersecurity threats, single-person dependencies, vendor single-source risks, and legacy software end-of-life dates.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Artifact 03</div>
            <h3 className="text-lg font-bold text-white">Priority Portfolio (Now • Next • Later • Stop)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Forced classification of all active software and infrastructure projects. Explicitly identifies underperforming projects to stop before new initiatives start.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-mono font-bold text-purple-400 uppercase">Artifact 04</div>
            <h3 className="text-lg font-bold text-white">Accountability & SLA Map</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clear mapping of named internal owners and external vendors, tracking delivery milestones, SLA compliance metrics, and penalty enforcement gates.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Bring Order to Your Organization's Technology Decisions
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Schedule an introductory briefing with Shafiq Rahman to establish an executive technology steering charter.
        </p>
        <button
          onClick={() => onOpenConsultation('Technology Governance Advisory Inquiry')}
          className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mx-auto cursor-pointer"
        >
          <span>Schedule Governance Briefing</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
