import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  FileText,
  Filter,
  Globe,
  Key,
  Layers,
  Lock,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { detailedCaseStudies, DetailedCaseStudy } from '../data/caseStudiesData';

interface CaseStudiesSectionProps {
  onOpenConsultation: (subject?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<DetailedCaseStudy | null>(detailedCaseStudies[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Healthcare', 'Higher Education', 'Government', 'Research', 'Enterprise'];

  const filteredStudies = detailedCaseStudies.filter((cs) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (selectedCategory === 'Higher Education' && cs.clientType === 'Higher Education') ||
      cs.clientType === selectedCategory;

    const matchesSearch =
      searchQuery === '' ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.technologiesUsed.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'CheckCircle':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Key':
        return <Key className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Cloud':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-amber-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-slate-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            Executive Transformation Case Studies
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Proven Client Outcomes & Architectural Blueprints
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            In-depth analysis of enterprise digital transformations led by our former CIO leadership across Academic Healthcare, Higher Education R1 Universities, Government Agencies, and Global Enterprises.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/90 rounded-2xl p-4 border border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search tech, client, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Main Grid: Left List (Selectable), Right Detailed View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of 10 Case Studies */}
          <div className="lg:col-span-5 space-y-4 max-h-[850px] overflow-y-auto pr-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              Showing {filteredStudies.length} Full Case Studies
            </div>
            {filteredStudies.map((cs) => {
              const isSelected = selectedCaseStudy?.id === cs.id;
              return (
                <div
                  key={cs.id}
                  onClick={() => setSelectedCaseStudy(cs)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all space-y-3 ${
                    isSelected
                      ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-900/20'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                      {cs.clientType}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{cs.region}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white line-clamp-2">{cs.title}</h3>

                  <p className="text-xs text-slate-400 line-clamp-2">{cs.challenge}</p>

                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/60">
                    <span className="text-emerald-400 font-mono font-semibold">
                      {cs.metrics[0]?.label}: {cs.metrics[0]?.value}
                    </span>
                    <span className="text-blue-400 font-bold flex items-center gap-1 group">
                      View Architecture <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed View for Selected Case Study */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 md:p-8 border border-slate-800 space-y-8 sticky top-24">
            {selectedCaseStudy ? (
              <>
                {/* Header Info */}
                <div className="space-y-3 border-b border-slate-800 pb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                      {selectedCaseStudy.clientType} Practice
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      {selectedCaseStudy.region}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
                    {selectedCaseStudy.title}
                  </h2>
                  <p className="text-xs font-mono text-slate-400 font-semibold">
                    Client: {selectedCaseStudy.client}
                  </p>
                </div>

                {/* Key Metrics Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedCaseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-950 rounded-xl p-3 border border-slate-800 text-center">
                      <div className="text-lg font-black text-emerald-400 font-mono">{m.value}</div>
                      <div className="text-[10px] font-bold text-slate-200 mt-0.5">{m.label}</div>
                      <div className="text-[9px] text-slate-400">{m.change}</div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 text-xs md:text-sm">
                  <div className="bg-slate-950/80 rounded-2xl p-4 border border-rose-900/30 space-y-1.5">
                    <h4 className="font-extrabold text-rose-400 uppercase tracking-wider text-xs">
                      Client Challenge & Friction Point:
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{selectedCaseStudy.challenge}</p>
                  </div>

                  <div className="bg-slate-950/80 rounded-2xl p-4 border border-emerald-900/30 space-y-1.5">
                    <h4 className="font-extrabold text-emerald-400 uppercase tracking-wider text-xs">
                      Architectural Solution Executed:
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{selectedCaseStudy.solution}</p>
                  </div>
                </div>

                {/* Architecture Flow Diagram */}
                <div className="space-y-3 bg-slate-950 rounded-2xl p-5 border border-slate-800">
                  <h4 className="text-xs font-extrabold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    {selectedCaseStudy.architectureDiagram.title}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {selectedCaseStudy.architectureDiagram.steps.map((step) => (
                      <div key={step.stepNumber} className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-950 border border-blue-700 text-blue-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                            {step.stepNumber}
                          </span>
                          {getStepIcon(step.iconName)}
                          <span className="text-xs font-bold text-white leading-tight">{step.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal pl-7">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Business Outcomes */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Technologies & Stack Implemented
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCaseStudy.technologiesUsed.map((tech, idx) => (
                        <span key={idx} className="bg-slate-950 text-slate-300 text-[11px] font-mono px-2.5 py-1 rounded-md border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Measurable Business Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {selectedCaseStudy.businessOutcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedCaseStudy.executiveQuote && (
                    <div className="bg-blue-950/30 rounded-2xl p-4 border border-blue-800/40 italic text-xs text-slate-300 space-y-2">
                      <p>"{selectedCaseStudy.executiveQuote.quote}"</p>
                      <div className="not-italic font-bold text-white text-right">
                        — {selectedCaseStudy.executiveQuote.author}, <span className="text-blue-400 font-normal">{selectedCaseStudy.executiveQuote.title}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation(`Case Study Inquiry: ${selectedCaseStudy.title}`)}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Request Full Case Study Architecture Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16 text-slate-400 text-sm">
                Select a case study from the left list to review detailed architecture.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
