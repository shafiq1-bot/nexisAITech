import React from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Globe
} from 'lucide-react';
import { Language, Region } from '../types';
import { translations } from '../data/translations';
import { regionalOffices } from '../data/companyData';

interface ContactSectionProps {
  currentLanguage: Language;
  currentRegion: Region;
  onOpenConsultation: () => void;
  onOpenAdvisor: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLanguage,
  currentRegion,
  onOpenConsultation,
  onOpenAdvisor,
}) => {
  const t = translations[currentLanguage];

  return (
    <section className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950 border border-blue-800 px-3.5 py-1 rounded-full">
            Global Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Connect with Our Enterprise Practice Leaders
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Schedule a briefing with our regional AI, Cybersecurity, Healthcare IT, and Higher Education technology advisors in North America and the Middle East.
          </p>
        </div>

        {/* Regional Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {regionalOffices.map((office) => (
            <div
              key={office.region}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{office.region === 'US' ? '🇺🇸' : office.region === 'KSA' ? '🇸🇦' : '🇦🇪'}</span>
                  <span className="text-[10px] font-mono uppercase bg-blue-950 text-blue-400 px-2.5 py-1 rounded border border-blue-900">
                    {office.city}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {office.country} Regional Hub
                </h3>

                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center gap-2.5 font-mono">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{office.email}</span>
                  </p>
                </div>

                <div className="space-y-1 pt-4 border-t border-slate-800/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Regional Compliance Standards:
                  </div>
                  {office.certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Schedule Briefing ({office.region})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Launch Banner */}
        <div className="bg-gradient-to-r from-purple-950/80 via-slate-950 to-blue-950/80 border border-purple-800/80 rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Need Instant Strategic Recommendations?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Interact with our server-side Gemini AI Advisor right now for real-time guidance on enterprise RAG, Zero Trust, or EHR FHIR integrations.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenAdvisor}
              className="px-8 py-3.5 text-xs sm:text-sm font-semibold text-purple-200 bg-purple-900 hover:bg-purple-800 border border-purple-600 rounded-xl shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Launch Gemini AI Strategy Advisor</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
