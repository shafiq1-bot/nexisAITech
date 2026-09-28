import React from 'react';
import {
  ShieldCheck,
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
  Briefcase,
  Users,
} from 'lucide-react';

interface CIOAdvisoryPageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  onNavigate: (pageId: any) => void;
}

export const CIOAdvisoryPage: React.FC<CIOAdvisoryPageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  onNavigate,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5 text-blue-400" />
          <span>Executive Advisory Practice</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          CIO Advisory & Boardroom Technology Counsel
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          High-judgment technology counsel for CEOs, Presidents, Boards of Directors, CFOs, and Provosts who need an experienced executive sounding board—independent of software vendors and sales incentives.
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. Over 20 years of real boardroom accountability, cabinet secretary advisory, and multi-million dollar technology governance.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Schedule a CIO Advisory Conversation')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule a CIO Advisory Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('assessment')}
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span>Take CIO Maturity Assessment</span>
          </button>
        </div>
      </div>

      {/* Advisory Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Advisory Focus Areas for Executive Leadership</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Providing objective, unvarnished insight into consequential technology decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Board of Directors Technology Briefings',
              desc: 'Translating complex cybersecurity posture, ransomware risk, and AI investments into clear fiduciary terms for Audit and Governance committees.',
            },
            {
              title: 'CIO & CTO Succession & Candidate Screening',
              desc: 'Helping search committees and CEOs define candidate profiles, screen executive applicants, and structure successful onboarding ramps.',
            },
            {
              title: 'Major IT Investment & Capital Allocations',
              desc: 'Conducting independent Total Cost of Ownership (TCO) and ROI evaluations before an organization commits tens of millions to an ERP or EHR contract.',
            },
            {
              title: 'Vendor Contract & Procurement Due Diligence',
              desc: 'Reviewing statements of work, vendor fee models, auto-renewal traps, and service level agreements to protect client capital.',
            },
            {
              title: 'Responsible AI Strategy & NIST RMF Charters',
              desc: 'Helping leadership establish safe, legal, and auditable enterprise AI policies that prevent shadow experimentation and copyright exposure.',
            },
            {
              title: 'M&A Technology Due Diligence',
              desc: 'Evaluating target company technical debt, cybersecurity vulnerabilities, license compliance risks, and integration complexity before closing.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-blue-500/40 transition-all">
              <div className="text-blue-400 font-mono text-xs font-bold">0{idx + 1}</div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Paths: Who We Advise */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Distinct Advisory Paths by Executive Role</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Tailoring the advisory dialogue to the unique fiduciary and operational responsibilities of each leader.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-mono uppercase text-blue-400 font-bold">For CEOs & Presidents</div>
            <h3 className="text-base font-bold text-white">Executive Control & Alignment</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Eliminate tech jargon and bridge the communication gap with your IT organization. Ensure technology funds your growth rather than consuming it.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-mono uppercase text-amber-400 font-bold">For Boards & Trustees</div>
            <h3 className="text-base font-bold text-white">Fiduciary & Cyber Oversight</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Obtain independent, third-party verification of cybersecurity posture, ransomware readiness, and multi-year modernization exposure.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-mono uppercase text-emerald-400 font-bold">For CFOs & COOs</div>
            <h3 className="text-base font-bold text-white">Capital Efficiency & SLAs</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Unpack opaque IT budgets, enforce strict vendor accountability, eliminate software shelfware, and defend capital allocations.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-mono uppercase text-purple-400 font-bold">For Provosts & CMOs</div>
            <h3 className="text-base font-bold text-white">Mission & Clinical Workflows</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Protect clinician and faculty time. Bridge clinical informatics (Epic EHR/FHIR) and research computing with institutional compliance.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Require an Experienced Executive Sounding Board?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Contact Shafiq Rahman for a confidential introductory discussion on board briefings, investment reviews, or CIO succession advisory.
        </p>
        <button
          onClick={() => onOpenConsultation('Schedule Confidential CIO Advisory Discussion')}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mx-auto cursor-pointer"
        >
          <span>Schedule Executive Advisory Briefing</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
