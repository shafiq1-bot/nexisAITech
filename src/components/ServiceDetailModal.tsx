import React from 'react';
import { 
  X, 
  BrainCircuit, 
  ShieldCheck, 
  Stethoscope, 
  GraduationCap, 
  Building2, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  FileText
} from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation,
}) => {
  if (!service) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit': return <BrainCircuit className="w-8 h-8 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case 'Stethoscope': return <Stethoscope className="w-8 h-8 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-blue-400" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-amber-400" />;
      case 'Server': return <Server className="w-8 h-8 text-indigo-400" />;
      default: return <BrainCircuit className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-slate-100 p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
          id="close-service-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-slate-800/90 border border-slate-700 rounded-xl">
            {renderIcon(service.iconName)}
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950 px-2.5 py-0.5 rounded border border-blue-900">
              Practice Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {service.id === 'ai-transformation' && 'AI Transformation Services'}
              {service.id === 'cybersecurity' && 'Cybersecurity & Zero Trust Architecture'}
              {service.id === 'healthcare-technology' && 'Healthcare Technology & EHR Integration'}
              {service.id === 'higher-education-technology' && 'Higher Education IT & Research Computing'}
              {service.id === 'smb-solutions' && 'Small & Medium Business Technology Solutions'}
              {service.id === 'hardware-infrastructure' && 'Enterprise Hardware & Infrastructure Services'}
            </h2>
          </div>
        </div>

        {/* Core Capabilities Checklist */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Core Service Capabilities & Modules</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable ROI & Benefits */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
              Key Enterprise Value & Business Benefits
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Standard Enterprise Deliverables</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="bg-slate-800/40 p-2.5 rounded-md text-xs text-slate-300 font-mono border border-slate-800 flex items-center gap-2">
                  <span className="text-blue-400 font-bold">[{idx + 1}]</span>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Snippet */}
          <div className="bg-gradient-to-r from-blue-950/60 to-purple-950/60 border border-blue-800/80 rounded-xl p-4">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Featured Client Outcome ({service.caseStudySnippet.region})
            </div>
            <div className="text-sm font-bold text-white">{service.caseStudySnippet.client}</div>
            <p className="text-xs text-slate-300 mt-1">{service.caseStudySnippet.outcome}</p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            Close Architecture Detail
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation(service.id);
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            id="modal-request-consult-btn"
          >
            <span>Schedule Practice Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
