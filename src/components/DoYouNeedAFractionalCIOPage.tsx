import React from 'react';
import {
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
  BarChart3,
  Award,
  ChevronRight,
  FileText,
} from 'lucide-react';

interface DoYouNeedAFractionalCIOPageProps {
  onOpenConsultation: (subject?: string) => void;
  onNavigate: (pageId: any) => void;
}

export const DoYouNeedAFractionalCIOPage: React.FC<DoYouNeedAFractionalCIOPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const triggers = [
    {
      title: 'No CIO but Increasing Technology Complexity',
      desc: 'Your organization has grown past the point where an IT manager or outsourced MSP can provide strategic direction. The CEO or CFO is spending hours resolving tech disputes.',
      signal: 'CEO/CFO overwhelmed by technical decisions.',
    },
    {
      title: 'CIO / CTO Vacancy or Leadership Transition',
      desc: 'Your former technology leader departed or retired. You need immediate, steady-handed executive control while running a deliberate 6-to-12 month permanent search.',
      signal: 'Leadership gap with active multi-million dollar projects at risk.',
    },
    {
      title: 'Stalled Multi-Million Dollar Modernization',
      desc: 'Your ERP, EHR, or cloud migration is over budget, behind schedule, and meeting fierce resistance from clinicians, faculty, or operational department heads.',
      signal: 'Vendors asking for change orders with no single internal executive owner.',
    },
    {
      title: 'Pressure to Adopt & Govern Generative AI',
      desc: 'Employees are pasting proprietary data into public AI tools, or vendors are pitching expensive AI features without proven ROI or safety boundaries.',
      signal: 'Need for a NIST AI RMF governance charter and intake gate.',
    },
    {
      title: 'Heightened Board Concern Over Cyber & Audit Risk',
      desc: 'Your Board of Directors or Audit Committee is demanding plain-language answers regarding ransomware defensibility, HIPAA/FERPA posture, and insurance coverage.',
      signal: 'Board asking questions your current IT team cannot answer in business terms.',
    },
    {
      title: 'Escalating Technology Spend & Software Shelfware',
      desc: 'IT budgets are a black box. Monthly SaaS bills and maintenance renewals are spiraling out of control with no clear return on investment.',
      signal: 'CFO demanding a Total Cost of Ownership (TCO) review and vendor rationalization.',
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>Executive Decision Guide</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          When Does an Organization Need a Fractional CIO?
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          A full-time CIO compensation package often exceeds $450,000 annually and takes 9 months to recruit. A Fractional CIO provides senior executive stewardship on an agile 1-to-3 day per week basis.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Authored by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong> (former Maryland Department of Transportation State CIO).
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('assessment')}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-xl shadow-amber-500/20 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Take 5-Minute CIO Readiness Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenConsultation('Inquire if Fractional CIO is right for our organization')}
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss Your Situation with Shafiq</span>
          </button>
        </div>
      </div>

      {/* The 6 Critical Triggers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The Six Primary Triggers</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            If your organization is experiencing two or more of these symptoms, a Fractional CIO creates immediate clarity and stops capital loss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {triggers.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase">Trigger 0{idx + 1}</div>
                <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-300 font-mono flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Signal: {item.signal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison: Full-Time vs Fractional vs Vendor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Comparing Your Options</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Why mission-driven healthcare, higher education, and mid-market organizations choose the fractional model.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-4">Dimension</th>
                <th className="p-4 text-amber-400 font-bold">Fractional CIO (Nexis AI)</th>
                <th className="p-4">Full-Time CIO</th>
                <th className="p-4">Software Vendor / MSP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="p-4 font-bold text-white">Speed to Impact</td>
                <td className="p-4 text-emerald-400 font-bold">Immediate (Days 1–5)</td>
                <td className="p-4">6 to 12 months search</td>
                <td className="p-4">Immediate sales pitch</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Annual Investment</td>
                <td className="p-4 text-amber-300 font-mono font-bold">$144,000 – $264,000</td>
                <td className="p-4 text-slate-400 font-mono">$400,000 – $600,000+ TCO</td>
                <td className="p-4 text-slate-400 font-mono">Uncapped hourly billing</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Vendor Objectivity</td>
                <td className="p-4 text-emerald-400 font-bold">100% Independent (Zero kickbacks)</td>
                <td className="p-4">Independent</td>
                <td className="p-4 text-red-400">Conflicted (sells licenses)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Fiduciary Alignment</td>
                <td className="p-4 text-emerald-400 font-bold">Answers directly to CEO / Board</td>
                <td className="p-4">Answers to CEO / Board</td>
                <td className="p-4 text-slate-400">Answers to vendor shareholders</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Exit Flexibility</td>
                <td className="p-4 text-emerald-400 font-bold">3-Month Retainer with 30-Day Notice</td>
                <td className="p-4 text-slate-400">High severance & legal risk</td>
                <td className="p-4 text-slate-400">Multi-year lock-in contracts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Explore Whether a 30-Day Diagnostic is Right for Your Organization
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Start with a bounded, low-risk step. Deliver an executive brief, priority portfolio, and 90-day action charter before committing to a multi-month retainer.
        </p>
        <button
          onClick={() => onOpenConsultation('Inquire about 30-Day Executive Diagnostic')}
          className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mx-auto cursor-pointer"
        >
          <span>Schedule 20-Minute Fit Call with Shafiq</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
