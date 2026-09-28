import React, { useState } from 'react';
import {
  FileText,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  executiveSummary: string;
  keyTakeaways: string[];
  fullContentPreview: string;
}

const articlesData: Article[] = [
  {
    id: 'why-organizations-need-fractional-cio',
    title: 'Why Growing Healthcare Systems and Universities Need a Fractional CIO—Not Another Software Vendor',
    category: 'Fractional CIO',
    author: 'Shafiq Rahman, MS, MBA, MCS, PMP®',
    date: 'September 2026',
    readTime: '6 min read',
    executiveSummary:
      'Technology vendors implement software; an experienced CIO decides what technology the institution should pursue, why, how much to invest, how to govern it, and how to measure whether it created value.',
    keyTakeaways: [
      'The difference between tactical IT management and executive technology stewardship.',
      'How fractional leadership solves the 9-month executive search delay.',
      'Aligning technology investments directly with board and financial priorities.',
    ],
    fullContentPreview:
      'When an organization faces accelerating technology complexity—from clinician documentation friction to unmanaged departmental AI—the immediate instinct of department heads is often to procure more software. Yet adding new SaaS tools without an overarching architectural and financial framework only compounds operational drag. A Fractional CIO provides the executive judgment to halt low-value spend, align capital with the core mission, and sequence modernization.',
  },
  {
    id: 'operationalizing-nist-ai-rmf',
    title: 'Operationalizing the NIST AI Risk Management Framework 1.0 for Regulated Enterprises',
    category: 'AI Governance',
    author: 'Shafiq Rahman, MS, MBA, MCS, PMP®',
    date: 'August 2026',
    readTime: '8 min read',
    executiveSummary:
      'A practical executive translation of the NIST AI RMF into an operational 4-tier risk matrix, intake workflows, and vendor contract clauses that protect proprietary data.',
    keyTakeaways: [
      'Uncovering shadow AI usage across enterprise departments.',
      'Structuring intake and review approval gates across legal, security, and operations.',
      'Contractual clauses that prohibit vendors from using client data to train public models.',
    ],
    fullContentPreview:
      'Generative AI has rapidly shifted from speculative experimentation to boardroom risk. Under NIST AI RMF 1.0 (Govern, Map, Measure, Manage), organizations must establish clear accountability. We walk through setting up an institutional AI Governance Charter that protects electronic protected health information (ePHI) and student records while enabling responsible automation.',
  },
  {
    id: 'state-government-legacy-modernization',
    title: 'Taming Multi-Agency Technology Debt: Lessons from a $250M State Transportation Portfolio',
    category: 'Technology Governance',
    author: 'Shafiq Rahman, MS, MBA, MCS, PMP®',
    date: 'July 2026',
    readTime: '7 min read',
    executiveSummary:
      'How to evaluate and rationalize decades of legacy application sprawl across decentralized operational agencies without disrupting mission-critical 24/7 public operations.',
    keyTakeaways: [
      'Applying the Tolerate, Invest, Migrate, Eliminate (TIME) framework.',
      'Consolidating multi-agency software procurement to eliminate duplicate licensing.',
      'Establishing audit-proof governance cadences for legislative and cabinet reporting.',
    ],
    fullContentPreview:
      'In state government and large public authorities, legacy systems consume the majority of IT operational budgets. By establishing an executive technology investment council and transparent scoring criteria, leadership can redirect tens of millions from maintenance shelfware into resilient, modern public digital services.',
  },
  {
    id: 'academic-medicine-research-computing-enclaves',
    title: 'Governing High-Performance Research GPU Clusters in Academic Medical Centers',
    category: 'Higher Education IT',
    author: 'Shafiq Rahman, MS, MBA, MCS, PMP®',
    date: 'June 2026',
    readTime: '7 min read',
    executiveSummary:
      'How university CIOs can deliver scalable computational GPU power for biomedical research and clinical trials while strictly adhering to FERPA, HIPAA, and federal grant standards.',
    keyTakeaways: [
      'Architecting sovereign Slurm GPU clusters with zero-trust identity federation.',
      'Eliminating departmental shadow computing that risks federal grant compliance.',
      'Sustainable chargeback and cost-recovery models for university research infrastructure.',
    ],
    fullContentPreview:
      'Biomedical research in academic health centers requires massive computational capacity. When central IT cannot meet demand, researchers set up unmanaged departmental servers that expose intellectual property and risk federal compliance. Centralized high-performance computing enclaves provide the compliant path of least resistance for investigators.',
  },
];

interface ExecutiveInsightsPageProps {
  onOpenConsultation: (subject?: string) => void;
  onNavigate: (pageId: any) => void;
}

export const ExecutiveInsightsPage: React.FC<ExecutiveInsightsPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
          <span>Executive Thought Leadership</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          CIO Insights & Governance Briefings
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Field-tested perspectives on technology strategy, AI governance, clinical informatics, higher education computing, and capital allocation.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Authored by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. Grounded in executive technology leadership across state government, healthcare systems, and research universities.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesData.map((art) => (
            <div
              key={art.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-amber-400 font-bold uppercase">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">{art.title}</h3>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>{art.author}</span>
                  <span>·</span>
                  <span>{art.date}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                  {art.executiveSummary}
                </p>

                <div className="space-y-1.5 pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Takeaways:</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {art.keyTakeaways.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read Executive Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenConsultation(`Discuss Insight: ${art.title}`)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-[11px] text-slate-300 border border-slate-800 transition-colors"
                >
                  Discuss with Shafiq
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail View Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
            >
              Close
            </button>

            <div className="space-y-2 pr-12">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                {selectedArticle.category} · {selectedArticle.readTime}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="text-xs text-slate-400">
                By {selectedArticle.author} · {selectedArticle.date}
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 italic">
              "{selectedArticle.executiveSummary}"
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed">
              <p>{selectedArticle.fullContentPreview}</p>
              <p>
                In high-compliance sectors, the fundamental challenge is rarely the lack of technological capability. It is the absence of an integrated executive decision system that aligns technical architecture, clinical or academic workflows, and capital reality.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Executive Takeaways:</div>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedArticle.keyTakeaways.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenConsultation(`Executive Discussion regarding: ${selectedArticle.title}`);
                }}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss This Topic with Shafiq Rahman</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back to All Insights
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
