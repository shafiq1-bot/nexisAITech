import React, { useState } from 'react';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Server, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { Language, ServiceDetail } from '../types';
import { translations } from '../data/translations';
import { servicesData } from '../data/companyData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesOverviewProps {
  currentLanguage: Language;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  currentLanguage,
  onOpenConsultation,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const t = translations[currentLanguage];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit': return <BrainCircuit className="w-7 h-7 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-emerald-400" />;
      case 'Stethoscope': return <Stethoscope className="w-7 h-7 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-7 h-7 text-blue-400" />;
      case 'Building2': return <Building2 className="w-7 h-7 text-amber-400" />;
      case 'Server': return <Server className="w-7 h-7 text-indigo-400" />;
      default: return <BrainCircuit className="w-7 h-7 text-blue-400" />;
    }
  };

  return (
    <section id="services-section" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950 border border-blue-800 px-3.5 py-1 rounded-full">
            Core Practice Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-colors pointer-events-none" />

              <div>
                {/* Header Icon & Title */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-slate-700 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    {service.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {service.id === 'ai-transformation' && 'AI Transformation Services'}
                  {service.id === 'cybersecurity' && 'Cybersecurity & Zero Trust'}
                  {service.id === 'healthcare-technology' && 'Healthcare Technology'}
                  {service.id === 'higher-education-technology' && 'Higher Education IT'}
                  {service.id === 'smb-solutions' && 'Small Business Tech Solutions'}
                  {service.id === 'hardware-infrastructure' && 'Hardware & Infrastructure'}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {service.id === 'ai-transformation' && service.shortDescKey ? t.serviceAIDesc : ''}
                  {service.id === 'cybersecurity' && service.shortDescKey ? t.serviceCyberDesc : ''}
                  {service.id === 'healthcare-technology' && service.shortDescKey ? t.serviceHealthcareDesc : ''}
                  {service.id === 'higher-education-technology' && service.shortDescKey ? t.serviceEducationDesc : ''}
                  {service.id === 'smb-solutions' && service.shortDescKey ? t.serviceSMBDesc : ''}
                  {service.id === 'hardware-infrastructure' && service.shortDescKey ? t.serviceHardwareDesc : ''}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Key Features Included:
                  </div>
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-[11px] text-blue-400 font-medium pt-1">
                      + {service.features.length - 4} additional enterprise modules
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  id={`view-service-detail-${service.id}`}
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenConsultation(service.id)}
                  className="text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/80 transition-colors cursor-pointer"
                  id={`consult-service-${service.id}`}
                >
                  Consult
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
