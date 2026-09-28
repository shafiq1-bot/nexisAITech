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
} from 'lucide-react';
import { executiveLeaderData } from '../data/leadershipData';

interface ShafiqRahmanAboutPageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
}

export const ShafiqRahmanAboutPage: React.FC<ShafiqRahmanAboutPageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Executive Bio Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Executive Leadership Profile</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {executiveLeaderData.name}
                </h1>

                <p className="text-lg sm:text-xl font-semibold text-amber-300 font-mono">
                  {executiveLeaderData.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {executiveLeaderData.summary}
              </p>

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
                  href="https://www.linkedin.com/in/shafiqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-700 font-bold rounded-xl transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
                  </svg>
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

            {/* Credibility Column */}
            <div className="lg:col-span-4 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                Executive Leadership Record
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {executiveLeaderData.achievements.map((ach, idx) => (
                  <div key={idx} className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                    <div className="text-2xl font-black text-amber-400 font-mono">
                      {ach.metric}
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">{ach.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{ach.detail}</div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300 leading-relaxed">
                <strong>Credentials:</strong> MS, MBA, MCS, PMP® · Project Management Institute · TOGAF Architecture · NIST Cybersecurity & AI RMF
              </div>
            </div>

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
            href="https://www.linkedin.com/in/shafiqr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-700 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
          >
            <span>LinkedIn Profile: /in/shafiqr</span>
          </a>
        </div>
      </div>

    </div>
  );
};
