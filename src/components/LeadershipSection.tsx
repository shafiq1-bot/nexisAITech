import React from 'react';
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Download,
  FileCheck2,
  GraduationCap,
  Microscope,
  Mic,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react';
import { executiveLeaderData } from '../data/leadershipData';

interface LeadershipSectionProps {
  onOpenConsultation: (subject?: string) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Executive Header Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Executive Advisory Leadership
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                  {executiveLeaderData.name}
                </h1>
                <p className="text-xl font-semibold text-blue-400 font-mono">
                  {executiveLeaderData.title}
                </p>
                <p className="text-sm md:text-base text-slate-300 font-medium max-w-2xl">
                  {executiveLeaderData.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {executiveLeaderData.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation('Schedule Executive Strategy Session with Former CIO')}
                  className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 group"
                >
                  <span>Schedule Strategy Session</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://linkedin.com/in/ShafiqR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-700 font-bold rounded-xl transition-all flex items-center gap-2"
                  id="leadership-linkedin-btn"
                >
                  <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Badge Column */}
            <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                Executive Leadership Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {executiveLeaderData.achievements.map((ach, idx) => (
                  <div key={idx} className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/60">
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-mono">
                      {ach.metric}
                    </div>
                    <div className="text-xs font-bold text-slate-200 mt-1">{ach.label}</div>
                    <div className="text-[11px] text-slate-400 leading-tight mt-0.5">{ach.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Executive Highlights & Former Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <UserCheck className="w-5 h-5 text-blue-400" />
              Executive Career Leadership & Former CIO Roles
            </h2>
            <ul className="space-y-3.5">
              {executiveLeaderData.formerRoles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-200">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Award className="w-5 h-5 text-amber-400" />
              Transformation Strategic Highlights
            </h2>
            <ul className="space-y-3">
              {executiveLeaderData.keyHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-2" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Timeline Section */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              20+ Year Executive Career Timeline
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              A history of delivering enterprise technology, high-performance research computing, and healthcare IT transformation.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-600/30 ml-4 md:ml-8 space-y-8 pl-6 md:pl-10">
            {executiveLeaderData.careerTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />

                <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded-md border border-blue-800/60">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2">{item.role}</h3>
                      <p className="text-xs text-slate-400 font-medium">{item.organization}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                  <div className="bg-slate-950/80 rounded-xl p-3 border border-emerald-900/30 text-xs font-mono text-emerald-400 flex items-start gap-2">
                    <span className="font-bold text-emerald-300 shrink-0">KEY IMPACT:</span>
                    <span>{item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Memberships */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Executive Certifications */}
          <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Executive Credentials & Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {executiveLeaderData.certifications.map((cert, idx) => (
                <div key={idx} className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              Professional Memberships & Advisory Boards
            </h3>
            <ul className="space-y-3">
              {executiveLeaderData.memberships.map((mem, idx) => (
                <li key={idx} className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/80 text-xs text-slate-300 font-medium flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{mem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Publications & Speaking Engagements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Publications */}
          <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              Selected Publications & Executive Papers
            </h3>
            <div className="space-y-4">
              {executiveLeaderData.publications.map((pub, idx) => (
                <div key={idx} className="bg-slate-950/90 rounded-xl p-4 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-indigo-400 font-mono font-semibold">
                    <span>{pub.publisher}</span>
                    <span>{pub.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{pub.title}</h4>
                  <p className="text-xs text-slate-400">{pub.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keynote Speaking */}
          <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Mic className="w-5 h-5 text-amber-400" />
              Keynote Speaking & Industry Conferences
            </h3>
            <div className="space-y-4">
              {executiveLeaderData.speakingEngagements.map((spk, idx) => (
                <div key={idx} className="bg-slate-950/90 rounded-xl p-4 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
                    <span className="font-bold">{spk.event}</span>
                    <span>{spk.year} ({spk.location})</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200">{spk.topic}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-blue-700/50 p-8 md:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Engage Direct Executive Advisory for Your Organization
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            Schedule an executive 1-on-1 strategy session with our former CIO lead to review your enterprise architecture, AI readiness, or Zero Trust roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation('Executive Strategy Session')}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-emerald-500/20 transition-all text-sm uppercase tracking-wider"
            >
              Schedule Strategy Session
            </button>
            <button
              onClick={() => onOpenConsultation('Digital Transformation Workshop')}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold rounded-xl transition-all text-sm"
            >
              Request Transformation Workshop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
