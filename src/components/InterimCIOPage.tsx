import React from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Building2,
  Clock,
  Sparkles,
  BarChart3,
  Award,
  ChevronRight,
  TrendingUp,
  FileText,
  UserCheck,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';

interface InterimCIOPageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  onNavigate: (pageId: any) => void;
}

export const InterimCIOPage: React.FC<InterimCIOPageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  onNavigate,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
          <span>Transition & Crisis Leadership</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Interim CIO & Technology Executive Leadership
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Immediate, high-judgment executive control during sudden CIO departures, leadership transitions, post-incident recovery, or multi-million dollar modernization turnarounds.
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong> (former Maryland Department of Transportation State CIO governing $250M portfolio & 1,500 staff across 6 agencies).
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Discuss an Interim CIO Assignment')}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold rounded-xl shadow-xl shadow-red-600/20 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss an Interim CIO Mandate</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('fractional-cio')}
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Compare Fractional vs. Interim CIO</span>
          </button>
        </div>
      </div>

      {/* Situations Requiring an Interim CIO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">When an Organization Needs an Interim CIO</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A full-time CIO executive search often takes 6 to 12 months. An Interim CIO steps in within days to stabilize the organization and maintain momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Unexpected CIO Departure or Retiring Leader',
              desc: 'Prevents operational paralysis and team attrition while the board and CEO run a deliberate, unhurried executive search for a permanent hire.',
            },
            {
              title: 'Stalled Multi-Million Dollar Transformation',
              desc: 'Takes command of struggling ERP, EHR, or cloud modernization programs that are bleeding budget and missing milestone deadlines.',
            },
            {
              title: 'Post-Cybersecurity Incident Recovery',
              desc: 'Restores executive governance, interfaces with federal regulators and insurers, and rebuilds Zero Trust operational perimeters after an incident.',
            },
            {
              title: 'Merger, Acquisition or System Integration',
              desc: 'Leads complex consolidation of disparate IT departments, redundant software systems, vendor contracts, and security architectures.',
            },
            {
              title: 'New CEO or University President Onboarding',
              desc: 'Provides the incoming chief executive with an independent, unvarnished technology baseline and cleans up legacy dysfunction.',
            },
            {
              title: 'Organizational Redesign & Team Restructuring',
              desc: 'Redesigns the internal IT structure, establishes career development paths, eliminates single-person dependencies, and coaches rising directors.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-red-500/40 transition-all">
              <div className="text-red-400 font-mono text-xs font-bold">Scenario 0{idx + 1}</div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The 90-Day Interim Handover Protocol */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-950 border border-red-500/30 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-red-400 font-bold">Delivery Protocol</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Interim CIO Operating Architecture</h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              An effective interim mandate is defined by its clean exit. We step in, establish executive control, resolve critical risks, and hand over a healthy organization to your permanent hire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-red-400">Phase 1: Days 1–30</div>
              <h3 className="text-lg font-bold text-white">Stabilize & Triage</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">✓ Assume operational command of the IT organization</li>
                <li className="flex items-start gap-2">✓ Conduct rapid risk audit across cyber, vendors & spend</li>
                <li className="flex items-start gap-2">✓ Freeze leaking projects and auto-renewing contracts</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-amber-400">Phase 2: Days 31–90</div>
              <h3 className="text-lg font-bold text-white">Govern & Realine</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">✓ Stand up executive steering cadence with CEO/CFO</li>
                <li className="flex items-start gap-2">✓ Restructure vendor SLAs and milestone payment gates</li>
                <li className="flex items-start gap-2">✓ Develop 24-month capital roadmap approved by board</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-emerald-400">Phase 3: Days 91+</div>
              <h3 className="text-lg font-bold text-white">Recruit & Handover</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">✓ Assist search committee in screening permanent CIOs</li>
                <li className="flex items-start gap-2">✓ Deliver documented runbooks, charters & decision logs</li>
                <li className="flex items-start gap-2">✓ Execute seamless 30-day executive handover</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Capacity: 2 to 3 days/week on-site and executive availability.</span>
            <button
              onClick={() => onOpenConsultation('Inquire about Interim CIO Assignment')}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Request Confidential Interim Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
