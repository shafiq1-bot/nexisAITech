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
            Bridging visionary AI transformation with unyielding enterprise security across North America and the Middle East.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Our Core Mission
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Nexis Tech Group was founded to help healthcare systems, higher education institutions, government entities, and mid-market commercial organizations modernize, secure, and transform their IT ecosystems.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              We specialize in navigating complex regulatory frameworks—including HIPAA, FERPA, NIST 800-53, SOC 2, Saudi Arabia NDMO/NCA ECC, and UAE TDRA standards—ensuring that every AI model, cloud pipeline, and Zero Trust boundary is fully compliant and sovereign.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Executive Leadership:</strong> Decades of combined experience as CISO and CTO advisors at Fortune 500 companies and regional health authorities.</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Domain Specialization:</strong> Deep specialization in Electronic Health Record (EHR) interoperability, University HPC research clusters, and GPU infrastructure.</span>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Global Tri-Regional Reach:</strong> Native operational teams stationed in Owings Mills, Maryland (US), Riyadh (Saudi Arabia), and Dubai (United Arab Emirates).</span>
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
                <BrainCircuit className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-mono">180+</div>
                <div className="text-[11px] text-slate-400 mt-1">Enterprise AI Deployed</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-mono">99.9%</div>
                <div className="text-[11px] text-slate-400 mt-1">Security Audit Pass Rate</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <Stethoscope className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-mono">35+</div>
                <div className="text-[11px] text-slate-400 mt-1">Hospital Systems Advised</div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center">
                <GraduationCap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-mono">50+</div>
                <div className="text-[11px] text-slate-400 mt-1">Universities & HPC Labs</div>
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
