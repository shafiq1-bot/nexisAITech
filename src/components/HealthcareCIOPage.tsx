import React from 'react';
import {
  Stethoscope,
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
  Activity,
  HeartPulse,
} from 'lucide-react';

interface HealthcareCIOPageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  onNavigate: (pageId: any) => void;
}

export const HealthcareCIOPage: React.FC<HealthcareCIOPageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  onNavigate,
}) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
          <span>Clinical Informatics & Healthcare Practice</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Healthcare Technology & Clinical Informatics Advisory
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Executive technology leadership for hospital systems, academic health centers, and clinical organizations navigating EHR transitions, clinical AI, HHS OCR cybersecurity audits, and physician documentation fatigue.
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. Former enterprise IT leader at the University of Maryland, Baltimore / University of Maryland School of Medicine, bridging clinical workflows, biomedical research, and health system governance.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenConsultation('Discuss Healthcare CIO Advisory Mandate')}
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-xl shadow-emerald-600/20 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule Healthcare Advisory Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('assessment')}
            className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span>Take Healthcare CIO Assessment</span>
          </button>
        </div>
      </div>

      {/* Core Healthcare Focus Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Healthcare Advisory Capabilities</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Bridging C-suite strategy with clinical realities: protecting physician time while maintaining flawless HIPAA and HHS OCR compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'EHR Strategy & System Transitions',
              desc: 'Independent executive oversight for Epic, Meditech, and Cerner implementations, avoiding costly budget blowouts and clinician adoption revolts.',
            },
            {
              title: 'Clinical Workflow & Physician Experience',
              desc: 'Designing ambient clinical scribing and documentation workflows that reduce after-hours charting friction and clinician burnout.',
            },
            {
              title: 'Interoperability & HL7 / FHIR Standards',
              desc: 'Architecting secure SMART-on-FHIR gateways and real-time clinical data exchanges between disparate hospital facilities and outpatient clinics.',
            },
            {
              title: 'Clinical AI Governance & Validation',
              desc: 'Establishing clinical AI review committees to evaluate diagnostic algorithms, ambient notes, and predictive triage for patient safety and bias.',
            },
            {
              title: 'HHS OCR Cybersecurity & HIPAA Defensibility',
              desc: 'Auditing medical IoT devices, biomedical telemetry, and ePHI storage against HHS Office for Civil Rights guidelines and HIPAA Security Rules.',
            },
            {
              title: 'Biomedical Research Computing Enclaves',
              desc: 'Structuring HIPAA-compliant research data warehouses and GPU computing enclaves for clinical trials and genomic research.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="text-emerald-400 font-mono text-xs font-bold">0{idx + 1}</div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Documented Case Context */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Documented Track Record</span>
            <h3 className="text-2xl font-bold text-white">Academic Health Center & Health System Experience</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Shafiq Rahman’s clinical leadership was forged in high-stakes academic medicine at the University of Maryland School of Medicine and affiliated clinical networks—governing clinical data enclaves, biomedical research computing, and hospital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs text-slate-400">Environment</div>
              <div className="text-base font-bold text-white">Academic Medicine & Health Sciences</div>
              <p className="text-xs text-slate-300">Biomedical research, clinical hospitals, dental, pharmacy, and nursing schools.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs text-slate-400">Clinical Focus</div>
              <div className="text-base font-bold text-white">EHR Modernization & FHIR</div>
              <p className="text-xs text-slate-300">Connecting legacy hospital systems to modern clinical analytics and research enclaves.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs text-slate-400">Governance</div>
              <div className="text-base font-bold text-white">HIPAA & HHS OCR Compliance</div>
              <p className="text-xs text-slate-300">Zero data persistence on unvetted clouds and 100% audit pass rates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Navigating an EHR Transition, Clinical AI, or Cyber Audit?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Connect directly with Shafiq Rahman for a 20-minute introductory conversation regarding your health system’s technology priorities.
        </p>
        <button
          onClick={() => onOpenConsultation('Healthcare Executive Consultation with Shafiq Rahman')}
          className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 mx-auto cursor-pointer"
        >
          <span>Schedule Healthcare Advisory Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
