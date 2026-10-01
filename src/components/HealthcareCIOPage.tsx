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

        <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. Currently Strategic Advisor at <strong>Ascension / Saint Agnes Healthcare</strong> (clinical operations, EHR workflow redesign, and technology rationalization); former Director of Enterprise IT at <strong>University of Maryland School of Medicine</strong> reporting directly to the Dean (supporting 3,000 faculty, 3,000 staff, 1,300+ students/residents, and 25 departments); and leader of large-scale <strong>Meditech-to-Epic clinical transformations</strong>.
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
            <h3 className="text-2xl font-bold text-white">Academic Medicine, Health System & Strategic Advisory Track Record</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Shafiq Rahman’s clinical leadership was forged in high-stakes academic medicine at the University of Maryland School of Medicine (supporting ~3,000 faculty, ~3,000 staff, 1,300+ students/residents, and 25 departments reporting directly to the Dean), leading enterprise Meditech-to-Epic clinical transformations, and actively advising clinical leadership at Ascension / Saint Agnes Healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs text-amber-400 font-mono font-bold">Current Strategic Advisory</div>
              <div className="text-base font-bold text-white">Ascension / Saint Agnes Healthcare</div>
              <p className="text-xs text-slate-300">Clinical operations, physician documentation workflows, EHR optimization, and technology rationalization.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs text-emerald-400 font-mono font-bold">Clinical EHR Transformation</div>
              <div className="text-base font-bold text-white">Meditech-to-Epic Hospital Migration</div>
              <p className="text-xs text-slate-300">Enterprise migration and integration enforcing post go-live adoption, workflow redesign, and measurable outcomes.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs text-blue-400 font-mono font-bold">Academic Medicine Scope</div>
              <div className="text-base font-bold text-white">Univ of Maryland School of Medicine</div>
              <p className="text-xs text-slate-300">Reported directly to the Dean; governed clinical, biomedical research computing, and campus health sciences enclaves.</p>
            </div>
          </div>

          {/* Peer-Reviewed Clinical Publications Callout */}
          <div className="mt-4 p-5 bg-gradient-to-r from-blue-950/60 to-slate-950 border border-blue-800/50 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Published Clinical Research (Google Scholar)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200">
                Shafiq Rahman has authored 8 peer-reviewed publications on clinical cybersecurity, EMR data integrity (E-Variance), hospital cyber emergency plans, and radiation oncology system integrations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('research-publications')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shrink-0 self-start sm:self-center flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Explore Research Papers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
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
