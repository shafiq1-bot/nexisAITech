import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Award,
  Layers,
  FileCheck2,
  Lock,
  Building2,
  Cpu,
  BookOpen,
} from 'lucide-react';

interface HigherEducationCIOPageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  onNavigate: (pageId: any) => void;
}

export const HigherEducationCIOPage: React.FC<HigherEducationCIOPageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  onNavigate,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
          <span>Higher Education & Academic Medicine Practice</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Higher Education & Academic Medical Center Technology Advisory
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Executive technology stewardship for University Presidents, Provosts, CFOs, and Deans balancing open academic research, high-performance GPU computing, tuition budget realities, and FERPA data compliance.
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. Former Director of Enterprise IT at the <strong>University of Maryland School of Medicine</strong>, reporting directly to the Dean and supporting approximately 3,000 faculty, 3,000 staff, 1,300+ students, residents, and fellows, and 25 academic departments with close integration into the broader academic medical center.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Discuss Higher Education CIO Advisory Mandate')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule Higher Ed Advisory Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('assessment')}
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span>Take Higher Ed CIO Assessment</span>
          </button>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Higher Education Advisory Focus Areas</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Addressing the unique tension between faculty independence, open research computing, and centralized institutional compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'University CIO Strategy & Operating Model',
              desc: 'Aligning central IT with academic deans, campus faculty senates, and institutional revenue drivers under tight fiscal constraints.',
            },
            {
              title: 'Research Computing & Slurm GPU Clusters',
              desc: 'Architecting sustainable, compliant high-performance computing clusters that attract top faculty researchers without creating shadow IT silos.',
            },
            {
              title: 'Clinical & Academic Integration',
              desc: 'Structuring shared data, identity, and clinical systems for academic health centers operating between university campuses and teaching hospitals.',
            },
            {
              title: 'Student Information System (SIS) & ERP Modernization',
              desc: 'Leading clean-core modernizations for Banner, Workday, or PeopleSoft, preventing multi-year implementation stalls and vendor budget overruns.',
            },
            {
              title: 'Data Governance & FERPA / Grant Compliance',
              desc: 'Protecting student education records under FERPA and securing federal research grants under CMMC 2.0 and NIST SP 800-171 standards.',
            },
            {
              title: 'Responsible AI in Academics & Research',
              desc: 'Developing university-wide AI policies that balance student academic integrity with faculty innovation and computational biomedical research.',
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

      {/* Academic Track Record */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-blue-400 font-bold">Verified Higher Education Stewardship</span>
            <h3 className="text-2xl font-bold text-white">University of Maryland, Baltimore (UMB) & School of Medicine</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Long-tenure leadership as Director of Enterprise IT & Infrastructure in an academic medicine and health sciences campus, directing enterprise data centers, campus networks, and high-compliance research environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-1">
              <div className="text-xs text-slate-400">Campus Context</div>
              <div className="text-base font-bold text-white">Graduate Health Sciences & Medicine</div>
              <div className="text-xs text-slate-300">Medicine, Pharmacy, Nursing, Law, Social Work, and Dentistry.</div>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-1">
              <div className="text-xs text-slate-400">Infrastructure</div>
              <div className="text-base font-bold text-white">High-Performance Research Enclaves</div>
              <div className="text-xs text-slate-300">Zero Trust identity federation and sovereign biomedical research clusters.</div>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-1">
              <div className="text-xs text-slate-400">Compliance</div>
              <div className="text-base font-bold text-white">FERPA & Research IP Protection</div>
              <div className="text-xs text-slate-300">Safeguarding clinical trials, patient charts, and grant data.</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Facing an ERP Modernization, Research Computing Gap, or CIO Search?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Schedule a 20-minute executive conversation with Shafiq Rahman to discuss fractional CIO leadership or an academic technology diagnostic.
        </p>
        <button
          onClick={() => onOpenConsultation('University Leadership Consultation with Shafiq Rahman')}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mx-auto cursor-pointer"
        >
          <span>Schedule Higher Ed Advisory Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
