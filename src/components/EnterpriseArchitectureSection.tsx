import React from 'react';
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Compass,
  Database,
  FileCheck2,
  GitBranch,
  Layers,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

interface EnterpriseArchitectureSectionProps {
  onOpenConsultation: (subject?: string) => void;
}

export const EnterpriseArchitectureSection: React.FC<EnterpriseArchitectureSectionProps> = ({
  onOpenConsultation,
}) => {
  const practicePillars = [
    {
      title: 'Application Portfolio Rationalization',
      icon: <LayoutGrid className="w-6 h-6 text-blue-400" />,
      desc: 'Systematic evaluation of legacy software applications using the TIME framework (Tolerate, Invest, Migrate, Eliminate) to cut 25-40% of redundant licensing debt.',
      deliverables: ['TIME Matrix Application Map', 'Legacy Technical Debt Scorecard', 'Software License Optimization Roadmap'],
    },
    {
      title: 'Target Operating Model & Roadmaps',
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      desc: '12-to-36 month pragmatic technology roadmaps bridging C-suite strategy with engineering execution, prioritizing ROI and risk mitigation.',
      deliverables: ['3-Year Enterprise Capability Roadmap', 'Cloud vs On-Prem TCO Financial Model', 'Executive IT Steering Playbook'],
    },
    {
      title: 'Business Capability Mapping',
      icon: <Boxes className="w-6 h-6 text-indigo-400" />,
      desc: 'Deconstruct organizational value chains into modular business capability maps, identifying technology gaps and process bottlenecks.',
      deliverables: ['Enterprise Business Capability Matrix', 'Process-to-System Heatmap', 'Vendor Neutrality Matrix'],
    },
    {
      title: 'IT Governance & Reference Architectures',
      icon: <GitBranch className="w-6 h-6 text-purple-400" />,
      desc: 'TOGAF 10 & Zachman aligned enterprise architecture standards, Architecture Review Board (ARB) charters, and reusable blueprint libraries.',
      deliverables: ['Architecture Review Board Charter', 'Reusable Microservice Blueprints', 'Data Sovereignty & Lineage Controls'],
    },
  ];

  const timeMatrixCategories = [
    { name: 'Tolerate', badge: 'bg-slate-800 text-slate-300', desc: 'Low strategic value, low operational risk. Maintain as-is with minimal spend.' },
    { name: 'Invest', badge: 'bg-emerald-950 text-emerald-400 border border-emerald-800', desc: 'High strategic value, modern architecture. Scale and integrate deeply into AI workflows.' },
    { name: 'Migrate', badge: 'bg-blue-950 text-blue-400 border border-blue-800', desc: 'High business value, aging legacy stack. Refactor to cloud-native microservices.' },
    { name: 'Eliminate', badge: 'bg-rose-950 text-rose-400 border border-rose-800', desc: 'Low business value, high maintenance risk. Decommission and harvest cost savings.' },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Banner Header */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-indigo-400" />
              Enterprise Architecture Practice
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Application Rationalization, Roadmaps & IT Governance
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Led by a former CIO with 20+ years of enterprise architecture experience. We help executive teams eliminate legacy application debt, design reusable target state architectures, and align multi-million dollar technology investments with organizational outcomes.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Request Enterprise Architecture Review')}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Request Enterprise Architecture Review</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenConsultation('Portfolio Rationalization Audit')}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-xl transition-all"
              >
                <span>Application Portfolio Audit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Practice Pillars Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Core Enterprise Architecture Pillars
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Pragmatic frameworks that eliminate friction, cut wasteful licensing spend, and accelerate digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practicePillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-indigo-500/50 transition-all space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">{pillar.icon}</div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>

                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Key Practice Deliverables:</span>
                  <ul className="space-y-1.5">
                    {pillar.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TIME Rationalization Matrix Section */}
        <div className="bg-slate-900/90 rounded-3xl p-8 md:p-12 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <h3 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2.5">
              <LayoutGrid className="w-6 h-6 text-blue-400" />
              The TIME Application Rationalization Framework
            </h3>
            <p className="text-slate-300 text-sm md:text-base">
              Our former CIO-led audit methodology categorizes every legacy application into the standard TIME matrix, providing board-level clarity on technical debt and cost-reduction opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeMatrixCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-3">
                <span className={`text-xs font-mono font-bold px-3 py-1 rounded-md inline-block ${cat.badge}`}>
                  {cat.name}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive CTA Card */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 border border-indigo-800/50 p-8 text-center space-y-6">
          <h3 className="text-2xl font-extrabold text-white">
            Ready to Rationalize Your Enterprise IT Portfolio?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Schedule an Enterprise Architecture Assessment with our executive advisory team to receive an initial application debt scorecard.
          </p>
          <button
            onClick={() => onOpenConsultation('Schedule EA Strategy Review')}
            className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider"
          >
            Schedule EA Strategy Review
          </button>
        </div>
      </div>
    </div>
  );
};
