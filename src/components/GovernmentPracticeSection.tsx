import React from 'react';
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Globe,
  Landmark,
  Lock,
  Radio,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';

interface GovernmentPracticeSectionProps {
  onOpenConsultation: (subject?: string) => void;
}

export const GovernmentPracticeSection: React.FC<GovernmentPracticeSectionProps> = ({
  onOpenConsultation,
}) => {
  const govDomains = [
    {
      title: 'State Cabinet & Executive Agencies',
      icon: <Landmark className="w-6 h-6 text-blue-400" />,
      desc: 'Legacy application portfolio rationalization, citizen service digital portal modernization, and StateRAMP cloud migration.',
      compliance: 'StateRAMP / NIST 800-53 Rev 5',
    },
    {
      title: 'Department of Transportation (DOT)',
      icon: <Truck className="w-6 h-6 text-emerald-400" />,
      desc: 'Intelligent Transportation Systems (ITS), tolling database modernization, connected vehicle data processing, and field office network connectivity.',
      compliance: 'NIST SP 800-53 / CJIS Ready',
    },
    {
      title: 'Public Safety & Emergency Management (911/CAD)',
      icon: <Radio className="w-6 h-6 text-rose-400" />,
      desc: 'Mission-critical 911 dispatch networks, Computer-Aided Dispatch (CAD) systems, law enforcement mobile MDT connectivity, and CJIS data encryption.',
      compliance: 'FBI CJIS Security Policy 5.9',
    },
    {
      title: 'Federal Agencies & DoD Research Contractors',
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      desc: 'CMMC 2.0 Level 2 compliance enclaves, FedRAMP High cloud migrations, and FIPS 140-2 validated cryptography for CUI data shielding.',
      compliance: 'FedRAMP High / CMMC 2.0',
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Banner Header */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5 text-blue-400" />
              Public Sector & Government Practice
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              State, Transportation, Public Safety & Federal Cyber Governance
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Led by a former public sector technology executive with deep experience guiding state cabinet secretaries, CIOs, and agency directors. We specialize in NIST SP 800-53 Rev 5 compliance, StateRAMP/FedRAMP enclaves, CJIS public safety networks, and master procurement agreements.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Schedule Public Sector Strategy Session')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Schedule Public Sector Strategy Session</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenConsultation('NIST 800-53 Audit Request')}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-xl transition-all"
              >
                <span>Request NIST 800-53 Audit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Practice Domains */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Public Sector Domain Specializations
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Mission-critical cybersecurity, enterprise architecture, and cloud governance tailored to state, local, and federal government entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {govDomains.map((dom, idx) => (
              <div key={idx} className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">{dom.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{dom.title}</h3>
                    <span className="text-xs font-mono font-bold text-emerald-400">{dom.compliance}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{dom.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Master Procurement & Compliance Frameworks */}
        <div className="bg-slate-900/90 rounded-3xl p-8 md:p-12 border border-slate-800 space-y-6">
          <h3 className="text-xl md:text-2xl font-extrabold text-white flex items-center gap-2.5">
            <FileCheck2 className="w-6 h-6 text-emerald-400" />
            Government Procurement & Compliance Frameworks
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our advisory engagement models support standard state procurement vehicles, RFP responses, Master Services Agreements (MSAs), and GSA Schedule contracting pathways.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-slate-300 pt-2">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <span className="text-blue-400 font-bold block text-sm">NIST 800-53 Rev 5</span>
              Moderate & High Baselines
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <span className="text-emerald-400 font-bold block text-sm">StateRAMP / FedRAMP</span>
              GovCloud Authorization
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <span className="text-purple-400 font-bold block text-sm">FBI CJIS v5.9</span>
              Law Enforcement Encryption
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
              <span className="text-amber-400 font-bold block text-sm">CMMC 2.0 / 800-171</span>
              CUI Defense Protection
            </div>
          </div>
        </div>

        {/* Executive CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/50 p-8 text-center space-y-6">
          <h3 className="text-2xl font-extrabold text-white">
            Engage Public Sector Executive Advisory
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Schedule an executive briefing with our former public sector CIO lead to discuss state technology roadmaps, NIST 800-53 compliance, or procurement models.
          </p>
          <button
            onClick={() => onOpenConsultation('Schedule Public Sector Executive Briefing')}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider"
          >
            Schedule Public Sector Briefing
          </button>
        </div>
      </div>
    </div>
  );
};
