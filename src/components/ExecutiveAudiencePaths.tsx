import React from 'react';
import {
  Building2,
  Users,
  ShieldCheck,
  Stethoscope,
  GraduationCap,
  TrendingDown,
  ArrowRight,
  ChevronRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../types';

interface ExecutiveAudiencePathsProps {
  onNavigate: (pageId: PageId) => void;
  onOpenConsultation: (subject?: string) => void;
}

export const ExecutiveAudiencePaths: React.FC<ExecutiveAudiencePathsProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const audienceSegments = [
    {
      role: 'CEOs & Presidents',
      icon: Users,
      color: 'amber',
      trigger: 'Overwhelmed by conflicting technology requests or lack of strategic ownership.',
      solution: 'Gain a trusted executive partner who translates technology into institutional outcomes and board confidence.',
      primaryActionText: 'Explore CEO Advisory',
      targetPage: 'cio-advisory' as PageId,
    },
    {
      role: 'Boards of Directors & Trustees',
      icon: ShieldCheck,
      color: 'blue',
      trigger: 'Demanding fiduciary oversight on cybersecurity, ransomware exposure, and AI governance.',
      solution: 'Independent board-level technology briefings, risk registers, and objective investment reviews.',
      primaryActionText: 'Explore Board Governance',
      targetPage: 'technology-governance' as PageId,
    },
    {
      role: 'Healthcare Executives & CMOs',
      icon: Stethoscope,
      color: 'emerald',
      trigger: 'EHR modernization friction, HHS OCR cyber audit citations, and shadow clinical AI.',
      solution: 'Experienced health system IT leadership bridging clinical workflows (Epic/FHIR) with HIPAA defensibility.',
      primaryActionText: 'Healthcare CIO Advisory',
      targetPage: 'healthcare-cio-advisory' as PageId,
    },
    {
      role: 'University Leaders & Provosts',
      icon: GraduationCap,
      color: 'purple',
      trigger: 'SIS/ERP modernization delays, FERPA compliance, and researcher demand for GPU computing.',
      solution: 'Former academic health sciences IT director aligning research computing, academic systems, and budgets.',
      primaryActionText: 'Higher Ed CIO Advisory',
      targetPage: 'higher-education-cio-advisory' as PageId,
    },
    {
      role: 'CFOs & Chief Operating Officers',
      icon: TrendingDown,
      color: 'cyan',
      trigger: 'Opaque IT budgets, vendor auto-renewal traps, and ballooning cloud maintenance fees.',
      solution: 'TCO modeling, shelfware elimination, SLA enforcement, and capital sequence optimization.',
      primaryActionText: 'Explore IT Financial Control',
      targetPage: 'technology-governance' as PageId,
    },
    {
      role: 'Organizations Needing Immediate Leadership',
      icon: Clock,
      color: 'rose',
      trigger: 'Sudden CIO departure, post-incident recovery, or active transformation crisis.',
      solution: 'Immediate interim executive control within days to stabilize operations and protect project momentum.',
      primaryActionText: 'Explore Interim CIO',
      targetPage: 'interim-cio' as PageId,
    },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 py-16 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider">
            Tailored Executive Conversion Paths
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Consequential Technology Problems We Solve
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Different executive stakeholders face distinct fiduciary, clinical, and operational risks. Select your executive role to explore relevant engagement models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceSegments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{seg.role}</h3>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">The Operational Trigger:</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{seg.trigger}</p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-200">How Shafiq Helps:</strong> {seg.solution}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate(seg.targetPage)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{seg.primaryActionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(`Executive Briefing for ${seg.role}`)}
                    className="text-[11px] text-slate-400 hover:text-white transition-colors"
                  >
                    Discuss Situation →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
