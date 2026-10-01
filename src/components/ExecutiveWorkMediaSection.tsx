import React, { useState } from 'react';
import {
  Globe,
  ExternalLink,
  Award,
  Video,
  FileText,
  Mic,
  ArrowRight,
  Sparkles,
  Quote,
  CheckCircle2,
  Calendar,
  Building2,
  Share2,
} from 'lucide-react';
import {
  executiveMediaItems,
  ExecutiveMediaItem,
} from '../data/executiveWorkOnlineData';
import { PageId } from '../types';

interface ExecutiveWorkMediaSectionProps {
  onOpenConsultation: (subject?: string) => void;
  onNavigate?: (pageId: PageId) => void;
  isFullPage?: boolean;
}

export const ExecutiveWorkMediaSection: React.FC<ExecutiveWorkMediaSectionProps> = ({
  onOpenConsultation,
  onNavigate,
  isFullPage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'National Press',
    'Executive Summit',
    'Fireside Chat',
    'LinkedIn Article',
    'Keynote Address',
  ];

  const filteredItems = executiveMediaItems.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <section className={`bg-slate-950 text-slate-100 ${isFullPage ? 'pt-24 pb-20' : 'py-16'} border-t border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>Executive Work Online, National Press & Keynotes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Shafiq Rahman’s Public Work, Keynotes & Media Features
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Documented public sector transformation leadership, appointment to the <strong className="text-white">Maryland Governor’s AI Sub-Cabinet</strong>, national media coverage on <strong className="text-white">Route Fifty</strong>, keynote addresses at <strong className="text-white">GovExec Summits</strong>, fireside chats at <strong className="text-white">AutoTech Detroit</strong>, international executive webinars, and strategic advisory with <strong className="text-white">Ascension / Saint Agnes</strong>.
          </p>

          {/* Social Proof Profiles */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/shafiqr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0077b5]/15 hover:bg-[#0077b5]/25 border border-[#0077b5]/40 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
              </svg>
              <span>Shafiq’s LinkedIn Profile & Updates</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </a>

            <a
              href="https://scholar.google.com/citations?user=L0j_am8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer shadow-sm"
            >
              <span className="text-amber-400 font-mono text-xs">Google Scholar</span>
              <span className="text-[10px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded font-mono">8 Publications</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 sm:p-7 space-y-5 transition-all shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Image Banner if present */}
                {item.imageUrl && (
                  <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative aspect-[16/9] mb-2">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-slate-950/85 backdrop-blur-md px-2.5 py-0.5 rounded-lg text-[10px] font-mono text-amber-300 border border-slate-700/80 flex items-center gap-1 shadow-md">
                      {item.id.includes('webinar') ? (
                        <>
                          <Video className="w-3 h-3 text-red-400 animate-pulse" />
                          <span>Live Broadcast</span>
                        </>
                      ) : (
                        <span>AutoTech Detroit 2024</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Top Badge & Outlet */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded-full">
                    {item.source}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {/* Quote Highlight */}
                {item.quote && (
                  <div className="bg-slate-950/80 border-l-2 border-amber-400 p-3 rounded-r-xl space-y-1">
                    <div className="flex items-center gap-1 text-[10px] font-mono uppercase text-amber-400 font-bold">
                      <Quote className="w-3 h-3" />
                      <span>Executive Quote</span>
                    </div>
                    <p className="text-xs text-slate-200 italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>
                )}

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Documented Impact:
                  </div>
                  <ul className="space-y-1">
                    {item.metricsOrHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Links */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold font-mono transition-colors"
                >
                  <span>{item.category === 'Keynote Address' || item.id.includes('webinar') ? 'Watch Video Broadcast' : 'View Source Coverage'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onOpenConsultation(`Discuss Leadership Insights: ${item.title}`)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Discuss
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Links Callout Bar */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Follow Shafiq Rahman’s Latest Executive Analysis</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Explore real-time posts, LinkedIn updates, conference presentations, and articles on government modernization, clinical informatics, and AI governance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.route-fifty.com/digital-government/2025/07/transit-leaders-look-efficient-tech-driven-future/406859/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
              >
                <span>Read Route Fifty Feature</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/posts/govexec_govexec-governmentefficiencysummit-digitalgovernment-activity-7356669995038195714-wtgM"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Watch GovExec Summit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
