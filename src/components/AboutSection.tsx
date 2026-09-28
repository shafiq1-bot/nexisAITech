import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  BrainCircuit, 
  Award, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Stethoscope
} from 'lucide-react';
import { Language, Region } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  currentLanguage: Language;
  currentRegion: Region;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLanguage,
  currentRegion,
  onOpenConsultation,
}) => {
  const t = translations[currentLanguage];

  return (
    <section className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950 border border-blue-800 px-3.5 py-1 rounded-full">
            Strategic Technology Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            About Nexis Tech Group
          </h2>
          <p className="text-slate-300 text-base mt-3 leading-relaxed">
            Bridging visionary AI transformation with unyielding enterprise security across the Americas, Europe, and strategic global financial hubs.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Executive Leadership for Mission-Driven Institutions
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Nexis Tech Group is owned and led by former State Chief Information Officer (CIO) Shafiq Rahman to give healthcare, higher-education, and public-sector leaders experienced executive technology leadership to govern AI, reduce operational risk, and turn stalled priorities into an executable portfolio—without the cost or delay of a full-time CIO search.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              We specialize in navigating high-stakes regulatory frameworks—including NIST AI Risk Management Framework, HHS OCR Cybersecurity Guidelines, HIPAA Security Rules, FERPA, NIST SP 800-53, and European DORA/EU AI Act—ensuring that every AI model, clinical pipeline, and modernization roadmap is fully governed and board-approved.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Former State CIO Stewardship:</strong> Directed an approximately $250 million technology portfolio and 1,500 IT staff across six agencies at the Maryland Department of Transportation.</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Higher Education & Health Systems Context:</strong> Long-tenure leadership as Director of Enterprise IT at University of Maryland, Baltimore (academic medicine, biomedical research, graduate health sciences).</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Productized Diagnostic Model:</strong> 30-day bounded technology and AI executive diagnostic delivering an executive brief, priority portfolio (now/next/later/stop), and 90-day action charter.</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-2xl">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Practice Leadership Standards</span>
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white font-mono">20+ Years</div>
                <div className="text-[11px] text-slate-400 mt-1">Executive Leadership</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <Building2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white font-mono">State CIO</div>
                <div className="text-[11px] text-slate-400 mt-1">Maryland Dept of Transportation</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <Stethoscope className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white font-mono">UMB / UMSOM</div>
                <div className="text-[11px] text-slate-400 mt-1">Academic Medicine & Health IT</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <GraduationCap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white font-mono">MS, MBA, MCS</div>
                <div className="text-[11px] text-slate-400 mt-1">PMP® Certified Leader</div>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategic Discovery Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
