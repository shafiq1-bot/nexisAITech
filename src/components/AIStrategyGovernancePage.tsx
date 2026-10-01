import React, { useState } from 'react';
import {
  BrainCircuit,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Award,
  Layers,
  FileCheck2,
  Lock,
  Compass,
  AlertTriangle,
  Building2,
} from 'lucide-react';
import { specializedSprints } from '../data/fractionalCIOData';

interface AIStrategyGovernancePageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  onNavigate: (pageId: any) => void;
  defaultTab?: 'strategy' | 'governance';
}

export const AIStrategyGovernancePage: React.FC<AIStrategyGovernancePageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  onNavigate,
  defaultTab = 'strategy',
}) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'governance'>(defaultTab);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
          <span>Executive AI Leadership</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Enterprise AI Strategy & Responsible AI Governance
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Move from disconnected AI experiments and vendor hype to an executive-governed AI portfolio that delivers measurable operational value while strictly complying with the NIST AI Risk Management Framework.
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. Appointee to the <strong>Maryland Governor’s AI Sub-Cabinet</strong>, shaping executive policy balancing AI innovation with privacy, cybersecurity, responsible use, and enterprise architecture across healthcare, academic research, and government.
        </p>

        {/* Tab Toggle */}
        <div className="flex justify-center gap-3 pt-4">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'strategy'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Enterprise AI Strategy</span>
          </button>

          <button
            onClick={() => setActiveTab('governance')}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'governance'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>NIST AI RMF Governance</span>
          </button>
        </div>
      </div>

      {/* STRATEGY TAB */}
      {activeTab === 'strategy' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How We Build an Enterprise AI Strategy</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Technology vendors push software tools. A CIO helps leadership decide where AI creates genuine operational advantage and where it creates unmanageable technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Readiness & Data Infrastructure',
                desc: 'Auditing underlying data cleanliness, vector database readiness, and integration endpoints (APIs) before investing in expensive models.',
              },
              {
                title: 'Prioritized Use-Case Portfolio',
                desc: 'Scoring competing department ideas against a 2x2 Feasibility vs. Business Impact matrix to fund high-value quick wins and eliminate distractions.',
              },
              {
                title: 'Private Enterprise RAG Architectures',
                desc: 'Designing Retrieval-Augmented Generation enclaves that ground AI outputs in your verified internal documents without leaking data to public LLMs.',
              },
              {
                title: 'Agentic AI & Workflow Automation',
                desc: 'Structuring autonomous agents that perform multi-step back-office workflows with explicit human-in-the-loop review thresholds.',
              },
              {
                title: 'Total Cost of Ownership & ROI Scoring',
                desc: 'Modeling ongoing compute, token costs, data engineering, model maintenance, and human verification to measure actual business value.',
              },
              {
                title: 'Change Management & Workforce Adoption',
                desc: 'Structuring executive and staff upskilling programs to ensure clinical, academic, or operational teams actively embrace approved AI tools.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-purple-500/40 transition-all">
                <div className="text-purple-400 font-mono text-xs font-bold">0{idx + 1}</div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-950 border border-purple-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Need an Objective AI Prioritization Review?</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                We evaluate your organization’s current AI proposals and vendor contracts to formulate an approved, sequenced 12-to-24 month AI roadmap.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation('Discuss Enterprise AI Strategy Mandate')}
              className="shrink-0 px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule AI Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* GOVERNANCE TAB */}
      {activeTab === 'governance' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Responsible AI Governance: Aligned to NIST AI RMF</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              The National Institute of Standards and Technology (NIST) AI Risk Management Framework 1.0 provides the gold standard for enterprise AI oversight. We translate it into practical intake workflows and board reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Departmental Shadow AI Discovery & Inventory',
                desc: 'Uncovering unauthorized employee use of public generative AI tools and establishing an exhaustive enterprise inventory of all AI models in use.',
              },
              {
                title: '4-Tier AI Risk Classification Matrix',
                desc: 'Classifying AI use cases into Prohibited (e.g. unreviewed clinical decisions), High Risk (regulatory impact), Governed Use, and Low Risk.',
              },
              {
                title: 'Intake & Approval Workflow Charter',
                desc: 'Structuring a streamlined governance gate that reviews new AI tools across legal, cybersecurity, data privacy, and ethical standards before deployment.',
              },
              {
                title: 'Vendor AI Contract & Clause Safeguards',
                desc: 'Enforcing strict contract terms that prohibit software vendors from using client proprietary data or PHI/FERPA records to train their commercial models.',
              },
              {
                title: 'Human-in-the-Loop Safeguards & Audit Logs',
                desc: 'Establishing mandatory human verification steps for high-stakes AI outputs and immutable logs for regulatory discovery and compliance audits.',
              },
              {
                title: 'Board-Level AI Risk Reporting',
                desc: 'Delivering quarterly plain-language board memos that summarize AI adoption metrics, safety validations, copyright exposures, and risk mitigations.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-amber-500/40 transition-all">
                <div className="text-amber-400 font-mono text-xs font-bold">0{idx + 1}</div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Fixed Fee Sprint Card from FractionalCIOData */}
          <div className="bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded font-black">
                  Fixed-Fee Advisory Sprint
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Responsible AI Governance Sprint</h3>
                <p className="text-xs text-slate-300">6–8 Weeks Fixed Engagement · Aligned to NIST AI RMF 1.0</p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-2xl font-black text-amber-400 font-mono">$28,000 – $45,000</div>
                <div className="text-xs text-slate-400">Complete Governance Deliverables</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Enterprise AI Inventory & Shadow AI Audit',
                'AI Governance Charter & Risk Tier Matrix',
                'Intake & Review Approval Workflow',
                'Responsible AI Policy Set & Data Boundaries',
                'Vendor AI Procurement Clauses',
                'Pilot Scorecard & Board Readout Deck',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">Led directly by Shafiq Rahman with full executive ownership.</span>
              <button
                onClick={() => onOpenConsultation('Inquire about Responsible AI Governance Sprint')}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Book AI Governance Sprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
