import React, { useState } from 'react';
import {
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
  BarChart3,
  Award,
  ChevronRight,
  TrendingUp,
  FileText,
  Lock,
} from 'lucide-react';
import { detailedCaseStudies, DetailedCaseStudy } from '../data/caseStudiesData';

interface VerifiedCaseStudiesPageProps {
  onOpenConsultation: (subject?: string) => void;
  onNavigate: (pageId: any) => void;
}

export const VerifiedCaseStudiesPage: React.FC<VerifiedCaseStudiesPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [selectedCase, setSelectedCase] = useState<DetailedCaseStudy>(detailedCaseStudies[0]);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Documented Institutional Case Studies</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Executive Transformation Case Studies
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Documented leadership interventions across state government, academic health centers, clinical hospital networks, and research universities.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Structured strictly as: <strong>Challenge → Context → Leadership Approach → Technology → Governance → Outcome → Lessons</strong>. Anonymized to respect public sector ethics and institutional non-disclosure agreements.
        </p>
      </div>

      {/* Case Studies Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {detailedCaseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setSelectedCase(cs)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedCase.id === cs.id
                  ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-amber-400 font-bold">
                  {cs.category}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white mt-2 line-clamp-2">{cs.title}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Case Study Detail Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
          
          <div className="space-y-2 border-b border-slate-800 pb-6">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold">
              Practice Area: {selectedCase.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {selectedCase.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Context & Challenge */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase font-bold text-slate-400">Institutional Context:</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {selectedCase.context}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase font-bold text-red-400">The Core Challenge:</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {selectedCase.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase font-bold text-amber-400">Leadership Approach:</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {selectedCase.leadershipApproach}
                </p>
              </div>
            </div>

            {/* Technology, Governance & Outcomes */}
            <div className="space-y-6">
              
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase font-bold text-blue-400">Technology Architecture:</h4>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-wrap gap-2">
                  {selectedCase.technologiesUsed.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs text-slate-200 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase font-bold text-purple-400">Executive Governance Mechanism:</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {selectedCase.governance}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase font-bold text-emerald-400">Demonstrable Outcome:</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-xl border border-emerald-900/40">
                  {selectedCase.outcome}
                </p>
              </div>

            </div>

          </div>

          {/* Lessons Learned & Key Outputs */}
          <div className="pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-amber-400">Strategic Lessons for Leadership:</h4>
              <div className="p-4 bg-amber-950/30 border border-amber-800/40 rounded-xl text-xs sm:text-sm text-amber-200 leading-relaxed italic">
                "{selectedCase.lessons}"
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-slate-400">Key Governance Artifacts Produced:</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedCase.keyOutputs.map((out, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Facing a similar portfolio or modernization challenge?
            </span>
            <button
              onClick={() => onOpenConsultation(`Discuss Case Context: ${selectedCase.title}`)}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategic Case Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
