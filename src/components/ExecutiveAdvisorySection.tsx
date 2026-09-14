import React from 'react';
import { 
  Crown, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Building2, 
  FileText, 
  Users, 
  Target, 
  Briefcase,
  AlertTriangle,
  Lightbulb,
  PhoneCall
} from 'lucide-react';
import { Region } from '../types';

interface ExecutiveAdvisorySectionProps {
  currentRegion?: Region;
  onOpenConsultation: (subject?: string) => void;
  onOpenBookAudit?: () => void;
}

export const ExecutiveAdvisorySection: React.FC<ExecutiveAdvisorySectionProps> = ({
  currentRegion = 'US',
  onOpenConsultation,
  onOpenBookAudit,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="executive-advisory">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Former Enterprise CIO & AI Entrepreneur</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Executive Advisory Built on Real Operational Stewardship
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most consultancies send junior analysts with slide decks. Nexis AI is owned and led by Shafiq Rahman, an authentic former enterprise CIO who has governed $250M+ annual IT budgets, faced boardroom audits, and driven massive digital transformations.
          </p>
        </div>

        {/* The CIO Manifesto Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950 text-amber-300 border border-amber-800 text-xs font-mono font-semibold">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                The Strategic Manifesto
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                "Why 82% of Enterprise AI Pilots Fail & The Playbook to Reach Production"
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                "In my years sitting in the CIO chair, I watched countless vendors pitch speculative technology that evaporated in the boardroom. The reality of enterprise AI is not about demo chatbots—it is about data sovereignty, zero trust governance, clean-core ERP integration, and demonstrable cash flow ROI. If your technology team cannot show the CFO an audit-backed business case within 90 days, you are accumulating technical debt, not competitive advantage."
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg border-2 border-slate-900">
                  SR
                </div>
                <div>
                  <div className="font-extrabold text-white text-base">Shafqat (Shafiq) Rahman</div>
                  <div className="text-xs text-amber-400 font-mono">Founder, Managing Director & Former Enterprise CIO</div>
                  <div className="text-[11px] text-slate-400">20+ Years Executive Leadership across Americas, Europe & Global Markets</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics & Callout */}
            <div className="lg:col-span-4 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Executive Track Record
              </span>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-2xl font-black text-amber-400 font-mono">$500M+</div>
                  <div className="text-xs text-slate-300 font-medium">Enterprise IT & Cloud Capital Managed</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-2xl font-black text-blue-400 font-mono">180+</div>
                  <div className="text-xs text-slate-300 font-medium">Large-Scale Enterprise Deployments</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-2xl font-black text-emerald-400 font-mono">99.9%</div>
                  <div className="text-xs text-slate-300 font-medium">Audit Pass Rate (NIST, HIPAA, DORA, SOC 2)</div>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation('Confidential Executive Advisory Briefing with Former CIO')}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book 45-Min CIO Briefing</span>
              </button>
            </div>

          </div>
        </div>

        {/* 4 Core Executive Practice Areas */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              C-Suite Advisory & Boardroom Offerings
            </h2>
            <p className="text-sm text-slate-400">
              High-impact retainers and discrete strategic engagements tailored for CEOs, CFOs, and enterprise Boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Offering 1 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800/80 flex items-center justify-center text-amber-400">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Fractional CIO & Chief AI Officer (CAIO) Retainer
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Strategic technology leadership on demand. We guide your C-suite in defining a 3-year AI roadmap, structuring executive governance, evaluating high-stakes vendor contracts, and presenting directly to the Board of Directors.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Direct Board of Directors quarterly reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Standing up the Enterprise AI Center of Excellence (CoE)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Enterprise vendor contract renegotiation & SLA enforcement</span>
                </li>
              </ul>
            </div>

            {/* Offering 2 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/80 flex items-center justify-center text-blue-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                IT Capital Planning & $250M+ Budget Optimization
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aggressive rationalization of enterprise IT spend. We analyze software licensing shelfware, duplicate cloud instances, and legacy managed services contracts, routinely recovering 20-35% in operating budget without sacrificing capability.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>TIME Matrix application rationalization (Tolerate, Invest, Migrate, Eliminate)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Cloud FinOps unit-economics governance (AWS, Azure, OCI, GCP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Legacy ERP maintenance and support unbundling</span>
                </li>
              </ul>
            </div>

            {/* Offering 3 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Virtual CISO (vCISO) & Transatlantic Regulatory Defense
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comprehensive cyber governance tailored for both Americas and European jurisdictions. Direct defense against SEC Item 1.05 disclosures, EU AI Act conformity assessments, DORA ICT resilience testing, and NIS2 executive accountability.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>EU AI Act & DORA ICT resilience compliance playbooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>NIST SP 800-53 Rev 5 & SEC 4-day material incident readiness</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Third-party vendor cyber risk oversight & audit certification</span>
                </li>
              </ul>
            </div>

            {/* Offering 4 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/80 flex items-center justify-center text-purple-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                M&A Technology & Cyber Debt Due Diligence
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Buy-side and sell-side technology evaluations for private equity firms, family offices, and corporate M&A teams. Uncovering hidden architectural debt, licensing liabilities, and cybersecurity breach risks before the deal closes.
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Codebase IP purity, open-source vulnerability & license audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Day-1 carve-out & TSA (Transition Service Agreement) planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Post-acquisition 100-day value creation roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Truth Matrix: Typical Vendor vs. Nexis AI Former CIO Advisory */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-white">The Former CIO Difference</h3>
            <p className="text-xs text-slate-400 mt-1">
              Why enterprise executives choose peer leadership over generic consultancy slides.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950">
                  <th className="p-4 text-slate-400 font-semibold">Strategic Dimension</th>
                  <th className="p-4 text-red-400 font-semibold">Typical Agency / Big-4</th>
                  <th className="p-4 text-emerald-400 font-semibold bg-emerald-950/20">Nexis AI (Former CIO Led)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="p-4 font-bold text-slate-200">Executive Empathy</td>
                  <td className="p-4 text-slate-400">Junior consultants with no P&L or budget experience</td>
                  <td className="p-4 text-emerald-300 font-medium bg-emerald-950/20">Authentic former CIO who has owned $250M+ IT budgets</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-200">AI Implementation</td>
                  <td className="p-4 text-slate-400">Surface-level API wrappers & generic chatbots</td>
                  <td className="p-4 text-emerald-300 font-medium bg-emerald-950/20">Confidential enclaves, clean-core ERP, zero public data training</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-200">ROI Horizon</td>
                  <td className="p-4 text-slate-400">Open-ended billable hours without guaranteed deliverables</td>
                  <td className="p-4 text-emerald-300 font-medium bg-emerald-950/20">Fixed 14-day audit $\rightarrow$ 90-day production MVP with 4.2-month payback</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-200">Transatlantic Compliance</td>
                  <td className="p-4 text-slate-400">US-only or fragmented European subcontractor coverage</td>
                  <td className="p-4 text-emerald-300 font-medium bg-emerald-950/20">Unified coverage: US NIST/SEC + EU AI Act/DORA/NIS2/GDPR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-950/50 via-slate-900 to-blue-950/50 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Schedule a Confidential Executive Strategy Session
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Discuss your 3-year AI roadmap, ERP modernization, or cybersecurity posture directly with Shafiq Rahman. Non-disclosure agreements (NDAs) executed upfront.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Confidential Executive Advisory Strategy Session')}
            className="shrink-0 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
          >
            <span>Book Strategy Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
