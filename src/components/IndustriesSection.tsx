import React, { useState } from 'react';
import { 
  Stethoscope, 
  GraduationCap, 
  Landmark, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  BarChart3,
  ShieldCheck,
  Building
} from 'lucide-react';
import { Language, Region } from '../types';
import { translations } from '../data/translations';
import { industriesData } from '../data/companyData';

interface IndustriesSectionProps {
  currentLanguage: Language;
  currentRegion: Region;
  onOpenConsultation: (notes?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  currentLanguage,
  currentRegion,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState('healthcare');

  const t = translations[currentLanguage];

  const currentInd = industriesData.find((i) => i.id === activeTab) || industriesData[0];

  const renderTabIcon = (id: string) => {
    switch (id) {
      case 'healthcare': return <Stethoscope className="w-5 h-5" />;
      case 'education': return <GraduationCap className="w-5 h-5" />;
      case 'government': return <Landmark className="w-5 h-5" />;
      case 'smb': return <Building2 className="w-5 h-5" />;
      default: return <Building className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries-section" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950 border border-cyan-800 px-3.5 py-1 rounded-full">
            Regulated Sector Specialization
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            {t.industriesTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            {t.industriesSubtitle}
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-slate-800 pb-4">
          {industriesData.map((ind) => {
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 ring-1 ring-blue-400'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
                id={`industry-tab-${ind.id}`}
              >
                {renderTabIcon(ind.id)}
                <span>
                  {ind.id === 'healthcare' && 'Healthcare'}
                  {ind.id === 'education' && 'Higher Education'}
                  {ind.id === 'government' && 'Government Agencies'}
                  {ind.id === 'smb' && 'Small & Mid-Market SMB'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Sector Overview & Solutions */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sector Deep-Dive Architecture</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentInd.id === 'healthcare' && 'Healthcare Digital Transformation & Interoperability'}
                  {currentInd.id === 'education' && 'Higher Education IT, HPC Research & Campus Innovation'}
                  {currentInd.id === 'government' && 'Sovereign Government AI & Zero Trust Public Infrastructure'}
                  {currentInd.id === 'smb' && 'Enterprise IT & AI Productivity for Growing Businesses'}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {currentInd.subtitleKey}
                </p>
              </div>

              {/* Challenges vs Solutions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
                    Industry Challenges Addressed
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentInd.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                    Engineered Solutions Delivered
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentInd.solutions.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Compliance Frameworks */}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Regulatory & Compliance Alignment:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentInd.complianceFrameworks.map((fw, idx) => (
                    <span key={idx} className="text-xs bg-slate-900 text-blue-300 px-3 py-1 rounded-lg border border-slate-800 font-mono">
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Featured Case Study Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-mono uppercase bg-blue-950 text-blue-400 border border-blue-900 px-2.5 py-1 rounded">
                  Featured Case Study • {currentInd.featuredCaseStudy.region}
                </span>

                <h4 className="text-xl font-bold text-white mt-4 mb-2">
                  {currentInd.featuredCaseStudy.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {currentInd.featuredCaseStudy.impact}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 my-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {currentInd.featuredCaseStudy.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-lg font-bold text-emerald-400 font-mono">{m.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(`Industry Focus: ${currentInd.id.toUpperCase()}`)}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                id={`industry-consult-btn-${currentInd.id}`}
              >
                <span>Request {currentInd.id.toUpperCase()} Solution Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
