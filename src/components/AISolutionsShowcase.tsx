import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  BotMessageSquare, 
  Microscope, 
  TrendingUp, 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Code
} from 'lucide-react';
import { Language, AISolution } from '../types';
import { translations } from '../data/translations';
import { aiSolutionsShowcase } from '../data/companyData';

interface AISolutionsShowcaseProps {
  currentLanguage: Language;
  onOpenAdvisor: () => void;
  onOpenConsultation: (notes?: string) => void;
}

export const AISolutionsShowcase: React.FC<AISolutionsShowcaseProps> = ({
  currentLanguage,
  onOpenAdvisor,
  onOpenConsultation,
}) => {
  const [selectedSolution, setSelectedSolution] = useState<AISolution>(aiSolutionsShowcase[0]);

  const t = translations[currentLanguage];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Search': return <Search className="w-6 h-6 text-purple-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-cyan-400" />;
      case 'BotMessageSquare': return <BotMessageSquare className="w-6 h-6 text-emerald-400" />;
      case 'Microscope': return <Microscope className="w-6 h-6 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-indigo-400" />;
      default: return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="ai-solutions-section" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950 border border-purple-800 px-3.5 py-1 rounded-full">
            Enterprise Cognitive Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            {t.aiShowcaseTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            {t.aiShowcaseSubtitle}
          </p>
        </div>

        {/* 6 AI Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {aiSolutionsShowcase.map((sol) => (
            <div
              key={sol.id}
              onClick={() => setSelectedSolution(sol)}
              className={`bg-slate-900 border rounded-2xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-2xl ${
                selectedSolution.id === sol.id
                  ? 'border-purple-500 shadow-purple-950/40 ring-1 ring-purple-500'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                    {renderIcon(sol.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-purple-950 text-purple-300 px-2.5 py-1 rounded border border-purple-900">
                    {sol.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {sol.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                  {sol.subtitle}
                </p>

                <div className="space-y-1.5 mb-4 border-t border-slate-800 pt-3">
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Core Use Cases:
                  </div>
                  {sol.useCases.slice(0, 2).map((uc, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="text-purple-400 font-bold">•</span>
                      <span className="line-clamp-1">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-purple-300 font-medium">View Architecture & ROI</span>
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Selected AI Solution Showcase Drawer */}
        <div className="bg-slate-900 border border-purple-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Selected Architecture Preview</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedSolution.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedSolution.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Technology Stack & SDKs:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSolution.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-slate-950 text-cyan-300 px-3 py-1 rounded-lg border border-slate-800 font-mono flex items-center gap-1.5">
                      <Code className="w-3 h-3 text-cyan-400" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* ROI Callout */}
              <div className="bg-purple-950/60 border border-purple-800 rounded-xl p-4 text-xs text-purple-200">
                <strong className="text-white block font-bold mb-1">Measured Business Impact & ROI:</strong>
                {selectedSolution.roi}
              </div>
            </div>

            {/* Actions */}
            <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4 text-center">
              <h4 className="text-sm font-bold text-white">
                Interested in deploying this AI solution?
              </h4>
              <p className="text-xs text-slate-400">
                Test query ideas in real-time with our Gemini AI Advisor or schedule a proof-of-concept build with our engineering team.
              </p>

              <button
                onClick={onOpenAdvisor}
                className="w-full py-3 px-4 text-xs font-semibold text-purple-200 bg-purple-950 hover:bg-purple-900 border border-purple-700 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Test Query in AI Advisor</span>
              </button>

              <button
                onClick={() => onOpenConsultation(`AI Solution: ${selectedSolution.title}`)}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                Request Proof-of-Concept Proposal
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
