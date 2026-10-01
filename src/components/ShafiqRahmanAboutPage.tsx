import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Building2,
  GraduationCap,
  Award,
  ChevronRight,
  FileText,
  Mail,
  ExternalLink,
  BookOpen,
  Sparkles,
  Quote,
  Globe,
} from 'lucide-react';
import { executiveLeaderData } from '../data/leadershipData';
import { researchPublications, googleScholarProfile } from '../data/researchPublicationsData';
import { executiveMediaItems } from '../data/executiveWorkOnlineData';
import { PageId } from '../types';
import shafiqHeadshot from '../assets/images/shafiq_about_portrait_1790861662502.jpg';

interface ShafiqRahmanAboutPageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  onNavigate?: (pageId: PageId) => void;
}

export const ShafiqRahmanAboutPage: React.FC<ShafiqRahmanAboutPageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  onNavigate,
}) => {
  const linkedInUrl = 'https://www.linkedin.com/in/shafiqr/';

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Executive Bio Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Picture Column */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-amber-500 via-blue-600 to-emerald-400 opacity-80 blur-md group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-slate-700 bg-slate-950 shadow-2xl">
                  <img
                    src={shafiqHeadshot}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('/images/shafiq_rahman_headshot.jpg')) {
                        target.src = '/images/shafiq_rahman_headshot.jpg';
                      }
                    }}
                    alt="Shafiq Rahman, MS, MBA, MCS, PMP® - Executive Headshot"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-2.5">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                      Shafiq Rahman, PMP®
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      Executive Portrait
                    </span>
                  </div>
                </div>
              </div>

              {/* LinkedIn & Scholar Badges */}
              <div className="flex flex-col gap-2 w-full max-w-xs">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#0077b5]/15 hover:bg-[#0077b5]/25 text-blue-300 border border-[#0077b5]/40 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-xs cursor-pointer shadow-sm group"
                >
                  <svg className="w-4 h-4 fill-current text-blue-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
                  </svg>
                  <span>Verified LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </a>

                <a
                  href={googleScholarProfile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-mono rounded-xl transition-all flex items-center justify-center gap-2 text-[11px] cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Scholar ({googleScholarProfile.totalCitations} Citations)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Executive Leadership Profile</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {executiveLeaderData.name}
                </h1>

                <p className="text-base sm:text-xl font-semibold text-amber-300 font-mono">
                  {executiveLeaderData.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {executiveLeaderData.summary}
              </p>

              {/* Verified Credentials Pills */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-amber-400 font-bold">
                  Strategic Advisor (Ascension / St. Agnes)
                </span>
                <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-blue-400">
                  Governor's AI Sub-Cabinet Appointee
                </span>
                <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-emerald-400">
                  Former State CIO (MDOT) · $6M Recurring Savings
                </span>
                <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-cyan-400">
                  Director of Enterprise IT (UMSOM)
                </span>
                <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-purple-400">
                  Meditech-to-Epic Transformation
                </span>
                <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 text-amber-300">
                  MS, MBA, MCS, PMP®
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation('Schedule Executive Consultation with Shafiq Rahman')}
                  className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <span>Schedule Executive Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-700 font-bold rounded-xl transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {onOpenCalendar && (
                  <button
                    onClick={onOpenCalendar}
                    className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>View Calendar</span>
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Verified Research & Publications Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-slate-900/90 border border-blue-800/40 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Academic & Clinical Scholarship</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Peer-Reviewed Publications & Clinical Informatics
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                8 published articles and proceedings spanning clinical cybersecurity, EMR data integrity, and hospital system integration.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={googleScholarProfile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-950/80 hover:bg-blue-900 border border-blue-700 text-blue-300 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
              >
                <span>Google Scholar Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {onNavigate && (
                <button
                  onClick={() => onNavigate('research-publications')}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View All 8 Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Publication Glimpses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPublications.slice(0, 4).map((pub) => (
              <div
                key={pub.id}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full">
                      {pub.year} · {pub.domain}
                    </span>
                    {pub.citations > 0 && (
                      <span className="text-[11px] font-mono text-emerald-400">
                        {pub.citations} Citations
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {pub.glimpse}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono text-[11px] truncate max-w-[200px]">
                    {pub.journal}
                  </span>
                  <a
                    href={pub.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-amber-400 font-mono flex items-center gap-1 shrink-0"
                  >
                    <span>Read Glimpse</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            {onNavigate && (
              <button
                onClick={() => onNavigate('research-publications')}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 font-mono underline"
              >
                <span>Explore all 8 peer-reviewed publications with full abstracts & executive synopses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Public Work Online, National Press & Keynotes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/20 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Executive Work Online & National Media</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                National Press Coverage, Keynotes & LinkedIn Articles
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Documented coverage in Route Fifty, GovExec Government Efficiency Summit, AutoTech Detroit 2024, and executive LinkedIn thought leadership.
              </p>
            </div>

            {onNavigate && (
              <button
                onClick={() => onNavigate('press-media')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 self-start md:self-center shrink-0 cursor-pointer shadow-md"
              >
                <span>View All Media & Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executiveMediaItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div className="space-y-3">
                  {item.imageUrl && (
                    <div className="rounded-xl overflow-hidden border border-slate-800 aspect-[16/9] mb-1">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full">
                      {item.source}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{item.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  {item.quote && (
                    <p className="text-xs text-slate-300 italic border-l-2 border-amber-400 pl-2 leading-relaxed line-clamp-3">
                      "{item.quote}"
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-mono font-semibold flex items-center gap-1"
                  >
                    <span>View Coverage</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Philosophy & Guiding Tenets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Executive Philosophy & Core Tenets</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Principles forged across academic health systems, state-level cabinet governance, clinical informatics, and international institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              1. The Post Go-Live EHR Value Philosophy
            </div>
            <h3 className="text-base font-bold text-white leading-snug">
              Clinical Technology Value is Realized After Go-Live
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              "The value of an EHR or enterprise software investment is never realized at go-live—it is realized after go-live through clinician adoption, continuous workflow redesign, data interoperability, active governance, and measurable operational outcomes."
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              2. Federated Governance with Operational Agility
            </div>
            <h3 className="text-base font-bold text-white leading-snug">
              Enterprise Standards Without Losing Departmental Flexibility
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              "Connecting decentralized hospitals, campuses, research centers, and operating administrations by common architecture, security, and data standards—while safeguarding the operational agility that frontline units require to fulfill their mission."
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              3. Mission-Driven, Responsible AI Governance
            </div>
            <h3 className="text-base font-bold text-white leading-snug">
              Balancing Innovation with Privacy, Security & Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              "Practical, mission-driven AI adoption requires establishing the governance and risk framework first—balancing artificial intelligence with privacy, cybersecurity, and enterprise architecture to directly reduce clinical friction and empower employees."
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              4. Local Realities Over Generic Playbooks
            </div>
            <h3 className="text-base font-bold text-white leading-snug">
              Technology as an Integrated Institutional Capability
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              "Adapting digital transformation to local clinical, institutional, and cultural realities rather than blindly transferring off-the-shelf vendor playbooks—turning IT from a collection of systems into an integrated institutional capability."
            </p>
          </div>
        </div>
      </div>

      {/* Verified Career Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Verified Career Stewardship</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A documented track record across cabinet-level state government, academic health sciences, and research universities.
          </p>
        </div>

        <div className="space-y-6">
          {executiveLeaderData.careerTimeline.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3 hover:border-amber-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">{item.role}</h3>
                  <div className="text-sm font-semibold text-amber-400">{item.organization}</div>
                </div>
                <span className="text-xs font-mono font-bold bg-slate-950 text-slate-400 px-3 py-1 rounded-lg border border-slate-800 self-start sm:self-center">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>

              <div className="pt-2 border-t border-slate-800 flex items-start gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Institutional Impact:</strong> {item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Buyers Can Trust Him To Do */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What Leadership Can Trust Him to Do</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Executive capabilities based on work Shafiq has already led at enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Translate complex institutional and operating pressures into an executable technology priority sequence.',
            'Brief Cabinet Secretaries, Provosts, and Boards of Directors without hiding behind confusing technical jargon.',
            'Govern cloud migrations, cybersecurity, legacy rationalization, vendors, and multi-million dollar budgets as one portfolio.',
            'Establish practical, auditable enterprise AI governance under the NIST AI RMF without stalling innovation.',
            'Create named ownership, cadence, and escalation where multi-year digital transformation has stalled.',
            'Screen, interview, and onboard incoming permanent CIO candidates to ensure smooth leadership transitions.',
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Scheduling Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Connect with Shafiq Rahman
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Available for executive technology advisory, fractional CIO mandates, and board briefings.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Executive Inquiry for Shafiq Rahman')}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Request Advisory Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-700 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
            </svg>
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
};
