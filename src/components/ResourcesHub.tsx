import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  FileText, 
  Search, 
  Tag, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Video, 
  Sparkles 
} from 'lucide-react';
import { Language, ResourceItem } from '../types';
import { translations } from '../data/translations';
import { resourcesData } from '../data/companyData';

interface ResourcesHubProps {
  currentLanguage: Language;
  onOpenConsultation: () => void;
}

export const ResourcesHub: React.FC<ResourcesHubProps> = ({
  currentLanguage,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadModalItem, setDownloadModalItem] = useState<ResourceItem | null>(null);
  const [downloadSubmitted, setDownloadSubmitted] = useState(false);
  const [emailForDownload, setEmailForDownload] = useState('');

  const t = translations[currentLanguage];

  const filteredResources = resourcesData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailForDownload) {
      setDownloadSubmitted(true);
      setTimeout(() => {
        setDownloadSubmitted(false);
        setDownloadModalItem(null);
        setEmailForDownload('');
      }, 3000);
    }
  };

  return (
    <section id="resources-section" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950 border border-blue-800 px-3.5 py-1 rounded-full">
            Knowledge & Thought Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Resources, Whitepapers & Case Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            In-depth technology guides, regulatory compliance frameworks, and AI strategy research for decision makers in the US, Saudi Arabia, and UAE.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-950 p-4 rounded-2xl border border-slate-800">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Resources' },
              { id: 'whitepaper', label: 'Whitepapers' },
              { id: 'guide', label: 'Tech Guides' },
              { id: 'casestudy', label: 'Case Studies' },
              { id: 'blog', label: 'Articles & Blog' },
              { id: 'webinar', label: 'Webinars' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, tags, HIPAA..."
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-mono text-[10px] uppercase bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-900">
                    {res.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{res.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{res.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {res.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {res.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium truncate max-w-[180px]">
                  {res.author}
                </span>

                <button
                  onClick={() => setDownloadModalItem(res)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>{res.category === 'webinar' ? 'Register' : 'Download PDF'}</span>
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Download Modal */}
      {downloadModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl text-slate-100 relative">
            <h3 className="text-lg font-bold text-white mb-2">
              Download: {downloadModalItem.title}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Enter your corporate email to instantly receive the PDF download link and executive briefing.
            </p>

            {!downloadSubmitted ? (
              <form onSubmit={handleDownloadSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Email Address</label>
                  <input
                    type="email"
                    value={emailForDownload}
                    onChange={(e) => setEmailForDownload(e.target.value)}
                    required
                    placeholder="exec@company.com"
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setDownloadModalItem(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md flex items-center gap-1.5"
                  >
                    <span>Download PDF Now</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-4 bg-emerald-950/80 border border-emerald-800 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="text-sm font-bold text-white">Download Ready!</div>
                <p className="text-xs text-emerald-300">
                  Your PDF file has been generated and emailed to <strong className="text-white">{emailForDownload}</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
