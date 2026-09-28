import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Building2,
  Clock,
  Sparkles,
  Layers,
  BarChart3,
  Award,
  ChevronRight,
  TrendingUp,
  FileText,
  DollarSign,
  Compass,
} from 'lucide-react';
import {
  diagnosticSteps,
  diagnosticDeliverables,
  retainerPackages,
  specializedSprints,
  operatingCadence,
} from '../data/fractionalCIOData';
import { executiveLeaderData } from '../data/leadershipData';

interface FractionalCIOPageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  onNavigate: (pageId: any) => void;
}

export const FractionalCIOPage: React.FC<FractionalCIOPageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  onNavigate,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Executive Practice Area</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Fractional CIO Leadership
        </h1>

        <p className="text-lg sm:text-xl text-amber-200/90 font-medium max-w-3xl mx-auto">
          Executive technology leadership for organizations that need strategic technology direction, digital transformation, AI governance, and cybersecurity oversight—without immediately building a full-time executive technology organization.
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong> (former Maryland Department of Transportation State CIO and former University of Maryland, Baltimore enterprise IT executive).
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Discuss a Fractional CIO Engagement')}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-xl shadow-amber-500/20 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss a Fractional CIO Engagement</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('assessment')}
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <span>Take CIO Maturity Assessment</span>
          </button>
        </div>
      </div>

      {/* Core Domains Addressed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What a Fractional CIO Governs</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A Fractional CIO is not an external contractor providing software hours. They provide executive stewardship across the entire technology ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Technology Strategy & Alignment',
              desc: 'Translating institutional and operating priorities into a funded, sequenced technology portfolio that the board and executive committee understand.',
            },
            {
              title: 'IT Operating Model & Team Design',
              desc: 'Structuring internal teams, eliminating single-person dependencies, coaching directors, and establishing clear accountability cadences.',
            },
            {
              title: 'CIO-Level Decision Support',
              desc: 'Acting as the trusted executive sounding board for the CEO, Provost, CFO, and Board on high-stakes software, infrastructure, and staffing choices.',
            },
            {
              title: 'Cybersecurity & Zero Trust Oversight',
              desc: 'Aligning cyber defense with NIST SP 800-53, HHS OCR, and HIPAA standards, replacing confusing technical alerts with actionable risk registers.',
            },
            {
              title: 'Enterprise AI Strategy & Governance',
              desc: 'Establishing responsible AI charters under the NIST AI RMF, eliminating shadow AI leakage, and prioritizing high-ROI use cases.',
            },
            {
              title: 'Vendor Governance & Contract Control',
              desc: 'Terminating expensive shelfware, enforcing vendor SLAs, controlling scope expansions, and leading major vendor renegotiations.',
            },
            {
              title: 'IT Financial Management & Capital Allocation',
              desc: 'Providing predictable multi-year CapEx/OpEx forecasting, TCO analysis, and defending technology budgets before the CFO and board.',
            },
            {
              title: 'Board Reporting & Executive Dashboards',
              desc: 'Delivering clear, jargon-free board memos and executive dashboards that show demonstrable progress, risk reduction, and value realization.',
            },
            {
              title: 'Digital Transformation & Legacy Modernization',
              desc: 'Sequencing cloud migrations, ERP upgrades, and clinical integrations to avoid costly budget overruns and project stalls.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/40 transition-all">
              <div className="text-amber-400 font-mono text-xs font-bold">0{idx + 1}</div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The 3-Month Minimum Retainer Model */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Retainer Capacity & Commercial Architecture</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            We sell executive judgment and access—not unbounded blocks of hours. Every retainer starts with a 3-month minimum, bills monthly in advance, and preserves calendar capacity for deep strategic focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {retainerPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/80 shadow-2xl'
                  : 'bg-slate-900 border border-slate-800'
              }`}
            >
              <div className="space-y-4">
                {pkg.popular && (
                  <span className="text-[10px] font-black uppercase bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full">
                    Recommended Model
                  </span>
                )}
                <div>
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">{pkg.subtitle}</div>
                  <h3 className="text-2xl font-extrabold text-white mt-1">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mt-2">{pkg.bestFor}</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs text-slate-400">Executive Capacity:</div>
                  <div className="text-sm font-bold text-white">{pkg.capacity}</div>
                  <div className="text-lg font-black text-amber-400 font-mono pt-1">{pkg.recommendedFee}</div>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenConsultation(`Inquire about Fractional CIO Retainer: ${pkg.name}`)}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Retainer Discussion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Entry Point: 30-Day Executive Diagnostic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded font-extrabold">
                Recommended First Step
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 30-Day Technology & AI Executive Diagnostic
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                A bounded engagement that establishes executive control quickly, delivers an objective portfolio review, and produces the evidentiary basis for long-term decisions.
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <div className="text-2xl font-black text-amber-400 font-mono">$18,000 – $25,000</div>
              <div className="text-xs text-slate-400">Fixed-Fee · 30 Days</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diagnosticDeliverables.map((deliv, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-amber-400">{deliv.pagesOrFormat}</div>
                <h4 className="text-base font-bold text-white">{deliv.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{deliv.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="text-xs text-slate-400">
              Every diagnostic ends with named owners, a funded sequence, and an executive roadmap.
            </div>
            <button
              onClick={() => onOpenConsultation('Inquire about 30-Day Executive Diagnostic')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Book Diagnostic Scoping Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Conversion Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to Bring Experienced CIO Leadership to Your Organization?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Speak directly with Shafiq Rahman in a confidential 20-minute introductory conversation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('20-Minute Executive Introduction with Shafiq Rahman')}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule 20-Minute Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
