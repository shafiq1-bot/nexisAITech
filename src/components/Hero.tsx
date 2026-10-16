import React from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Sparkles, 
  Calendar, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Stethoscope,
  GraduationCap,
  Award,
  Camera,
  Upload
} from 'lucide-react';
import { Language, Region, PageId } from '../types';
import { translations } from '../data/translations';
import { useExecutiveHeadshot, setExecutiveHeadshot } from '../lib/useExecutiveHeadshot';

interface HeroProps {
  currentLanguage: Language;
  currentRegion: Region;
  onNavigate: (page: PageId) => void;
  onOpenAdvisor: () => void;
  onOpenConsultation: () => void;
  onOpenBookAudit?: () => void;
  onOpenScoping?: (sector?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLanguage,
  currentRegion,
  onNavigate,
  onOpenAdvisor,
  onOpenConsultation,
  onOpenBookAudit,
  onOpenScoping,
}) => {
  const headshotUrl = useExecutiveHeadshot();

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setExecutiveHeadshot(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-20 border-b border-slate-800/80">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Clean Typographic Eyebrow (No Pills) */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 font-bold uppercase">
              <span>Fractional CIO</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>CIO Advisory</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Enterprise AI Governance</span>
            </div>

            {/* Authoritative Headline with Primary Target SEO Keyphrase */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.12]">
              Fractional CIO & Executive Advisory.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300">
                You May Not Need Another Vendor. You Need Executive Stewardship.
              </span>
            </h1>

            {/* Sub-deck */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Former State CIO <strong className="text-white font-semibold">Shafiq Rahman, MS, MBA, MCS, PMP®</strong> partners directly with CEOs, presidents, provosts, and board chairs to govern AI, rationalize runaway IT portfolios, and steer mission-critical technology mandates—without the delay or overhead of a full-time search.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {onOpenScoping && (
                <button
                  onClick={() => onOpenScoping()}
                  className="px-7 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
                  id="hero-scope-project-primary-btn"
                >
                  <Sparkles className="w-4 h-4 text-slate-950 fill-current" />
                  <span>Scope Your Mandate (Instant 60s)</span>
                </button>
              )}

              <button
                onClick={() => onNavigate('schedule')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                id="hero-schedule-briefing-btn"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Schedule 20-Min Briefing</span>
              </button>

              <button
                onClick={() => onNavigate('assessment')}
                className="px-5 py-3.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                id="hero-diagnostic-link"
              >
                <span>30-Day Diagnostic Overview</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>

            {/* Institutional Trust Metrics Grid (Clean Unboxed Layout) */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">$250M+</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">State IT Portfolio Governed across 6 Agencies</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight">$6M</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">Recurring Annual Cost Reductions Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">20+ Yrs</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">Healthcare, Higher Ed & Public Sector Leadership</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">8 Papers</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">Peer-Reviewed Clinical & Cyber Research</div>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Profile Card & Institutional Authority */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-slate-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl space-y-6 relative">
              
              {/* Executive Availability Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Q4 Advisory</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Howard County, MD</span>
              </div>

              {/* Portrait & Core Identifiers */}
              <div className="flex items-center gap-4">
                <div className="relative group/photo w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-xl shrink-0 bg-slate-950">
                  <img
                    src={headshotUrl}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('shafiq_headshot_v4.jpg')) {
                        target.src = '/images/shafiq_headshot_v4.jpg';
                      }
                    }}
                    alt="Shafiq Rahman, MS, MBA, MCS, PMP® - Former State CIO"
                    width={96}
                    height={96}
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                  />
                  <label
                    htmlFor="executive-photo-upload-input"
                    className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 cursor-pointer text-white text-[9px] font-bold"
                    title="Change Executive Photo (Upload SRLinkedin.jpg)"
                  >
                    <Camera className="w-4 h-4 text-amber-400" />
                    <span>Upload Pic</span>
                  </label>
                  <input
                    id="executive-photo-upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="sr-only"
                    aria-label="Upload custom executive headshot image"
                  />
                </div>

                <div className="space-y-1 min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Shafiq Rahman
                  </h2>
                  <div className="text-xs font-mono text-amber-400 font-semibold truncate">
                    MS, MBA, MCS, PMP®
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Former State CIO · Healthcare & Higher Ed Technology Executive
                  </p>
                  
                  {/* Verified Links */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href="https://www.linkedin.com/in/shafiqr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium transition-colors"
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-slate-600" aria-hidden="true">·</span>
                    <a
                      href="https://scholar.google.com/citations?user=L0j_am8AAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
                    >
                      <span>Scholar</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Institutional Precedents List */}
              <div className="space-y-2.5 pt-1">
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  Executive Leadership Track Record:
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2.5 text-slate-300">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">State CIO:</strong> Maryland Department of Transportation ($250M IT portfolio, 6 agencies).</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-slate-300">
                    <Stethoscope className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Healthcare Advisory:</strong> Ascension / Saint Agnes Healthcare (Meditech-to-Epic conversions, HIPAA).</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-slate-300">
                    <GraduationCap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Academic Medicine:</strong> Enterprise IT Director, Univ. of Maryland School of Medicine (HPC, Slurm, SIS).</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Quick Action */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="w-full py-2.5 px-4 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Read Full Executive Biography & Press</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
