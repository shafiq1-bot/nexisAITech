import React, { useState } from 'react';
import {
  BookOpen,
  Award,
  ExternalLink,
  ShieldCheck,
  Stethoscope,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  Calendar,
  FileText,
  UserCheck,
  Quote,
  TrendingUp,
} from 'lucide-react';
import {
  researchPublications,
  googleScholarProfile,
  ResearchPublication,
} from '../data/researchPublicationsData';
import { PageId } from '../types';
import shafiqHeadshot from '../assets/images/shafiq_about_portrait_1790861662502.jpg';

interface ResearchPublicationsPageProps {
  onOpenConsultation: (subject?: string) => void;
  onNavigate?: (pageId: PageId) => void;
}

export const ResearchPublicationsPage: React.FC<ResearchPublicationsPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);

  const domains = [
    'All',
    'Clinical Cybersecurity & Disaster Recovery',
    'EMR & Clinical Data Integrity',
    'Health System M&A & Integration',
    'Telemedicine & Healthcare IT',
  ];

  const filteredPublications = researchPublications.filter((pub) => {
    const matchesDomain = selectedDomain === 'All' || pub.domain === selectedDomain;
    const matchesSearch =
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.glimpse.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Badges & Profiles */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>Peer-Reviewed Academic & Clinical Research</span>
          </div>

          <a
            href={googleScholarProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-sm group"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
            <span>Google Scholar Profile</span>
            <span className="text-[10px] bg-blue-950 text-blue-300 border border-blue-800 px-1.5 py-0.5 rounded font-mono">
              {googleScholarProfile.totalCitations} Citations
            </span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/shafiqr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 text-blue-400 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
            </svg>
            <span>Verified LinkedIn Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Title & Introduction */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Peer-Reviewed Research, Clinical Informatics & Healthcare Technology Governance
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            Authentic academic research authored by <strong className="text-white">Shafiq Rahman, MS, MBA, MCS, PMP®</strong> spanning clinical cybersecurity, EMR data integrity, health system M&A integration, and disaster recovery at the University of Maryland.
          </p>
        </div>

        {/* Author Credibility Card with LinkedIn Picture */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Picture Column */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500 via-blue-600 to-emerald-400 opacity-60 blur-sm group-hover:opacity-90 transition-opacity"></div>
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950 shadow-2xl">
                  <img
                    src={shafiqHeadshot}
                    alt="Shafiq Rahman, MS, MBA, MCS, PMP® - Fractional CIO & Executive Advisor"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-2 text-center">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                      Shafiq Rahman
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Details */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-0.5 rounded-full">
                  Primary Investigator & Author
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Affiliation: University of Maryland, MDOT
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Shafiq Rahman, MS, MBA, MCS, PMP®
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Former State CIO (Maryland Department of Transportation) and Director of Enterprise IT at the University of Maryland, Baltimore / School of Medicine. Shafiq’s research directly bridges clinical medicine, healthcare operations, and high-stakes information technology governance.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/shafiqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold font-mono underline"
                >
                  <span>Connect with Shafiq on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <span className="text-slate-600">•</span>

                <a
                  href={googleScholarProfile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold font-mono underline"
                >
                  <span>View Google Scholar Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Scholar Stats */}
            <div className="md:col-span-3 bg-slate-950/80 border border-slate-800 rounded-2xl p-4 text-center space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Scholar Metrics
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                  <div className="text-xl font-bold text-amber-400 font-mono">8</div>
                  <div className="text-[10px] text-slate-400">Articles / Proc.</div>
                </div>
                <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                  <div className="text-xl font-bold text-emerald-400 font-mono">11</div>
                  <div className="text-[10px] text-slate-400">Citations</div>
                </div>
              </div>
              <button
                onClick={() => onOpenConsultation('Discuss Clinical Research & Advisory with Shafiq Rahman')}
                className="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Request Advisory Discussion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Domain Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {domains.map((dom) => (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedDomain === dom
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications by keyword..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Showing {filteredPublications.length} peer-reviewed publications:
        </div>

        <div className="space-y-6">
          {filteredPublications.map((pub, idx) => {
            const isExpanded = expandedPubId === pub.id;
            return (
              <div
                key={pub.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 transition-all shadow-xl relative overflow-hidden"
              >
                {/* Top Metadata Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs px-2.5 py-0.5 rounded-full">
                      {pub.year}
                    </span>

                    <span className="bg-blue-950/80 border border-blue-800/80 text-blue-300 font-mono text-xs px-2.5 py-0.5 rounded-full">
                      {pub.domain}
                    </span>

                    {pub.citations > 0 && (
                      <span className="bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 font-mono text-xs px-2.5 py-0.5 rounded-full">
                        Cited by {pub.citations}
                      </span>
                    )}
                  </div>

                  <a
                    href={pub.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 font-mono transition-colors"
                  >
                    <span>Google Scholar Entry</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Title & Citation Info */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {pub.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                    <div>
                      <span className="text-slate-500">Authors: </span>
                      {pub.authors.map((author, aIdx) => (
                        <span
                          key={aIdx}
                          className={
                            author.includes('Rahman')
                              ? 'text-amber-400 font-bold underline'
                              : 'text-slate-300'
                          }
                        >
                          {author}
                          {aIdx < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>

                    <div>
                      <span className="text-slate-500">Venue: </span>
                      <span className="text-slate-200 font-semibold">{pub.journal}</span>
                      {pub.volumeIssue && <span>, {pub.volumeIssue}</span>}
                      {pub.pages && <span>, {pub.pages}</span>}
                    </div>
                  </div>
                </div>

                {/* Glimpse Box (The Core Executive Highlight) */}
                <div className="bg-gradient-to-r from-amber-950/20 via-slate-950 to-blue-950/20 border border-amber-500/20 rounded-2xl p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Research Glimpse & Strategic Synopsis</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {pub.glimpse}
                  </p>
                </div>

                {/* Key Findings Preview */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-8 space-y-2">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                      Key Technical & Clinical Findings:
                    </div>
                    <ul className="space-y-1.5">
                      {pub.keyFindings.map((finding, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4 bg-slate-950/60 border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                    <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider font-mono">
                      Strategic CIO Impact:
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pub.strategicImpact}
                    </p>
                  </div>
                </div>

                {/* Expandable Full Abstract & Keywords */}
                {isExpanded && (
                  <div className="pt-4 border-t border-slate-800 space-y-4 animate-in fade-in duration-200">
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                        Full Scientific Abstract:
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                        {pub.fullAbstract}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] text-slate-500 font-mono mr-1">Keywords:</span>
                      {pub.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-[11px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded-md font-mono"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setExpandedPubId(isExpanded ? null : pub.id)}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Full Abstract' : 'Read Full Abstract & Methodology'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={pub.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Google Scholar</span>
                    </a>

                    <button
                      onClick={() => onOpenConsultation(`Discuss Research Article: ${pub.title}`)}
                      className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>Discuss with Shafiq</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Institutional Callout & Scholar Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/50 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need Expert Technology Leadership Grounded in Scientific Rigor?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether your organization is tackling hospital EMR data integrity, Radiation Oncology Information Systems, Zero Trust disaster recovery, or telemedicine expansion, engage Shafiq Rahman for executive advisory or Fractional CIO leadership.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation('Schedule Executive Consultation on Healthcare IT & Research')}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-xl shadow-amber-500/20 cursor-pointer"
            >
              Schedule Advisory Conversation
            </button>
            <a
              href="https://www.linkedin.com/in/shafiqr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-700 font-bold rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
