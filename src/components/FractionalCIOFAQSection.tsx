import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Calendar,
  Sparkles,
  PhoneCall,
  Search,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { PageId } from '../types';

interface FractionalCIOFAQSectionProps {
  onOpenConsultation: (subject?: string) => void;
  onNavigate: (pageId: PageId) => void;
  onOpenGoogleConsoleModal?: () => void;
}

export const FractionalCIOFAQSection: React.FC<FractionalCIOFAQSectionProps> = ({
  onOpenConsultation,
  onNavigate,
  onOpenGoogleConsoleModal,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is a Fractional CIO and how does it differ from a technology consultant or vendor?',
      a: `A Fractional CIO is an experienced Chief Information Officer who serves as an embedded member of your executive leadership team on a part-time or retainer basis (typically 10 to 25 hours per week). 

Unlike external management consultants who deliver static PowerPoint decks or vendors who sell proprietary software licenses, a Fractional CIO has direct institutional accountability. They sit with the CEO, Provost, and Board of Directors, direct internal IT directors and managers, control vendor negotiations, enforce cybersecurity standards, and ensure technology investments produce measurable institutional outcomes.`,
      tag: 'Role Definition · Executive Accountability',
    },
    {
      q: 'How much does a Fractional CIO cost compared to hiring a full-time enterprise CIO?',
      a: `A full-time enterprise CIO commands $350,000 to $550,000 in base executive salary, plus bonuses, equity, and benefits—often exceeding $500,000 to $700,000 in total annual compensation—and typically takes 6 to 9 months to recruit through executive search firms.

A Fractional CIO engagement operates on a predictable, bounded monthly retainer (typically $8,000 to $22,000 per month depending on weekly hours and complexity) or a structured 30-day initial diagnostic. This delivers immediate, day-one C-level leadership at a 60% to 75% total cost reduction, with zero long-term severance exposure.`,
      tag: 'Pricing & Retainer Models · ROI',
    },
    {
      q: 'What is the difference between a Fractional CIO, an Interim CIO, and a Virtual CIO (vCIO)?',
      a: `While often confused online, these three roles serve distinct operational needs:

1. Fractional CIO: A recurring, ongoing executive partnership (10-25 hrs/week) providing proactive strategic leadership, board reporting, AI governance, and IT steering for organizations that need CIO leadership without a full-time hire.
2. Interim CIO: A full-capacity, dedicated executive engagement (typically full-time for 3 to 9 months) stepping in immediately during an abrupt vacancy, crisis turnaround, or major restructuring until a permanent CIO is appointed.
3. Virtual CIO (vCIO): Typically an account manager provided by a Managed Service Provider (MSP) to periodically review hardware upgrades and ticket metrics. A Fractional CIO operates at the board and CEO level, independent of hardware or managed service sales.`,
      tag: 'Fractional vs Interim vs vCIO',
    },
    {
      q: 'When is the right time for an organization to hire a Fractional CIO?',
      a: `Key operational triggers that indicate it is time to engage a Fractional CIO include:
• Technology friction at the executive level: Conflicting demands from business units with no single owner translating tech into business outcomes.
• Runaway software and cloud budgets: Redundant SaaS licenses, uncontrolled cloud sprawl, or upcoming multi-million dollar vendor renewals requiring aggressive rationalization.
• Unplanned CIO departure or vacancy: Keeping strategic initiatives, EHR/ERP modernizations, and team morale intact during a search.
• Board or regulatory pressure: Implementing NIST AI Risk Management Framework (AI RMF), HIPAA OCR compliance, FERPA data privacy, or Zero Trust cybersecurity.
• Major transformation mandates: Health system clinical EHR conversions (Epic/Meditech), campus SIS modernizations, or M&A technology due diligence.`,
      tag: 'Institutional Triggers · Timing',
    },
    {
      q: 'How does Shafiq Rahman’s 30-Day Executive Technology & AI Diagnostic work?',
      a: `The 30-Day Diagnostic is a bounded, four-week sprint designed to establish total visibility before committing to long-term retainers:
• Week 1 (Stakeholder Discovery): One-on-one confidential interviews with the CEO, CFO, Provost/Deans, Board Chair, and key direct reports to surface latent operational risks.
• Week 2 (Architecture & Cyber Audit): Independent assessment of core systems, cloud infrastructure, disaster recovery protocols, and shadow AI usage against NIST standards.
• Week 3 (Vendor & Contract Rationalization): Forensic review of top software, cloud, and outsourcing contracts to identify immediate cost reductions and license eliminations.
• Week 4 (Board-Ready Brief & Action Charter): Delivery of a concise Executive Brief, a prioritized Now/Next/Later investment roadmap, and an actionable 90-day governance charter.`,
      tag: '30-Day Bounded Sprint · Deliverables',
    },
    {
      q: 'What specific credentials and institutional background does Shafiq Rahman bring?',
      a: `Shafiq Rahman, MS, MBA, MCS, PMP® brings more than 20 years of consequential technology leadership:
• Former State Chief Information Officer (Maryland Department of Transportation): Governed a $250M+ IT operating and capital portfolio, 1,500 IT staff across 6 state agencies, delivering $6M in recurring annual operational savings through statewide application rationalization (reducing 856 systems to 620).
• Director of Enterprise IT (University of Maryland School of Medicine): Reported directly to the Dean, directing research computing (Slurm HPC clusters), student information systems, and academic health sciences technology.
• Healthcare Strategic Advisor (Ascension / Saint Agnes Healthcare): Led clinical informatics migrations, Meditech-to-Epic conversions, and radiation oncology cybersecurity.
• Scholar & Author: Appointee to the Maryland Governor's AI Sub-Cabinet, author of 8 peer-reviewed clinical informatics and cybersecurity research papers (Google Scholar), and featured keynote speaker at Route Fifty, GovExec Efficiency Summit, and AutoTech Detroit.`,
      tag: 'Track Record · $250M+ Governed · $6M Saved',
    },
    {
      q: 'How does a Fractional CIO address Enterprise AI and NIST AI RMF governance?',
      a: `Adopting AI without governance creates severe fiduciary, regulatory, and intellectual property liabilities. Shafiq Rahman establishes an executive AI Governance Committee, aligns workflows with the NIST AI Risk Management Framework 1.0 (Govern, Map, Measure, Manage), screens third-party vendor AI claims, enforces prompt security and patient/student data privacy boundaries, and delivers an auditable, board-defensible AI policy.`,
      tag: 'NIST AI RMF 1.0 · Board Defensibility',
    },
    {
      q: 'How quickly can we begin an engagement with Shafiq Rahman?',
      a: `Engagements typically launch within 5 to 10 business days following an introductory 20-minute consultation and standard mutual non-disclosure agreement (NDA). Because Shafiq operates independently with proven institutional playbooks, there is zero onboarding latency or bureaucracy.`,
      tag: 'Fast Deployment · 5-10 Days',
    },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 py-16 sm:py-20 border-b border-slate-800 relative" id="fractional-cio-faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Fractional CIO Executive Knowledge Base</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions About Fractional CIO Leadership
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything CEOs, Board Members, Provosts, and CFOs need to know about engaging an elite Fractional Chief Information Officer, operating cadence, costs, and deliverables.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-amber-500/50 shadow-xl'
                    : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 pr-2">
                    <span className="text-[11px] font-mono text-amber-400 font-semibold block">
                      {faq.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.q}
                    </h3>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400 border-amber-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4 border-t border-slate-800/60 pt-4">
                    <div className="whitespace-pre-line text-slate-300">
                      {faq.a}
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-4 flex-wrap border-t border-slate-800/40 text-[11px] font-mono text-slate-400">
                      <span>Confidential Advisory · Direct Engagement</span>
                      <button
                        onClick={() => onOpenConsultation(`Question regarding: ${faq.q.slice(0, 40)}...`)}
                        className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 transition-colors"
                      >
                        <span>Discuss Your Situation</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* High-Converting Executive Action Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
              Immediate Executive Availability
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Have an active CIO vacancy, crisis turnaround, or AI governance priority?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Connect directly with Shafiq Rahman for a confidential 20-minute briefing. Every discussion is protected under mutual non-disclosure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onNavigate('schedule')}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Schedule 20-Min Briefing</span>
            </button>

            <a
              href="tel:+14109347773"
              className="w-full sm:w-auto px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>(410) 934-7773</span>
            </a>
          </div>
        </div>

        {/* Google Search Indexing & Verification Shortcut */}
        {onOpenGoogleConsoleModal && (
          <div className="text-center pt-2">
            <button
              onClick={onOpenGoogleConsoleModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>Google Search Console & SEO Indexing Status</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
