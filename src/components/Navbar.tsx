import React, { useState } from 'react';
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  BrainCircuit, 
  Bot, 
  FileCheck2, 
  PhoneCall, 
  Sparkles,
  Building2,
  GraduationCap,
  Stethoscope,
  Landmark,
  Server,
  ArrowRight,
  Mail,
  Calendar,
  BarChart3
} from 'lucide-react';
import { Language, Region, PageId } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentRegion: Region;
  onRegionChange: (region: Region) => void;
  currentPage: PageId;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenAdvisor: () => void;
  onOpenConsultation: () => void;
  onOpenGmailModal?: () => void;
  onOpenCalendar?: () => void;
  onOpenBookAudit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  currentRegion,
  onRegionChange,
  currentPage,
  onNavigate,
  onOpenAdvisor,
  onOpenConsultation,
  onOpenGmailModal,
  onOpenCalendar,
  onOpenBookAudit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [proofDropdownOpen, setProofDropdownOpen] = useState(false);
  const [showTopAnnouncement, setShowTopAnnouncement] = useState(true);

  const t = translations[currentLanguage];

  const isRtl = currentLanguage === 'ar';

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-xl">
      {/* Executive Practice Header Banner */}
      {showTopAnnouncement && (
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/70 to-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-blue-900/40">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className="bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-400/30 text-[10px] font-mono uppercase tracking-wider">
                Executive CIO Advisory
              </span>
              <span className="font-medium text-slate-200 text-xs">
                Led by <strong className="text-white">Shafiq Rahman, MS, MBA, MCS, PMP®</strong> · Former State CIO (MDOT) · Direct Office:{' '}
                <a href="tel:+14109347773" className="font-mono text-amber-400 font-bold hover:underline">
                  (410) 934-7773
                </a>{' '}
                · Washington D.C. & Maryland Metro
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('schedule')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-lg text-xs transition-colors inline-flex items-center gap-1 cursor-pointer shadow-sm"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => setShowTopAnnouncement(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Dismiss Banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Secondary Bar: Regional Selector, Language Switcher & Hotline */}
      <div className="bg-slate-950 text-xs text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Regional Badge & Global Presence */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {currentRegion === 'US' ? 'Washington D.C. & Maryland Metro (Owings Mills, MD)' : currentRegion === 'EU' ? 'EU Hubs (London & Frankfurt)' : currentRegion === 'KSA' ? 'KSA Regional Hub (Riyadh)' : 'UAE Regional Hub (Dubai)'}
            </span>
            <span className="hidden md:inline text-slate-300 text-xs">
              Direct Executive Office: <a href="tel:+14109347773" className="text-amber-400 hover:underline font-mono font-bold">(410) 934-7773</a> | Confidential Inquiries: <a href="mailto:shafiqs1@gmail.com" className="text-slate-200 hover:text-amber-400 transition-colors font-mono">shafiqs1@gmail.com</a>
            </span>
          </div>

          {/* Right: Regional Hub Selector & Language Switcher */}
          <div className="flex items-center gap-4">
            {/* Region Selector */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-700/80 rounded-md px-2 py-1">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={currentRegion}
                onChange={(e) => onRegionChange(e.target.value as Region)}
                className="bg-transparent text-slate-200 text-xs font-medium focus:outline-none cursor-pointer"
                id="region-selector-select"
              >
                <option value="US" className="bg-slate-900 text-slate-200">🇺🇸 United States (Primary Market)</option>
                <option value="EU" className="bg-slate-900 text-slate-200">🇪🇺 Europe (UK & EU Hubs)</option>
                <option value="KSA" className="bg-slate-900 text-slate-200">🇸🇦 Saudi Arabia (Riyadh Hub)</option>
                <option value="UAE" className="bg-slate-900 text-slate-200">🇦🇪 United Arab Emirates (Dubai)</option>
              </select>
            </div>

            {/* Language Toggle EN / AR */}
            <div className="flex items-center rounded-md bg-slate-900 border border-slate-700/80 p-0.5">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  currentLanguage === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                id="lang-en-btn"
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  currentLanguage === 'ar'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                id="lang-ar-btn"
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between relative">
        {/* Authoritative Executive Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo-btn"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 p-0.5 shadow-xl flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-black text-sm tracking-tighter text-amber-400">SR</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-tight text-white block font-sans">
                SHAFIQ RAHMAN
              </span>
              <span className="text-[10px] font-mono font-bold bg-amber-500/15 border border-amber-500/40 text-amber-400 px-1.5 py-0.2 rounded">
                CIO
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-wide text-slate-400 font-sans block">
              Former State CIO · Executive Advisory · Nexis AI
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-slate-300">
          <button
            onClick={() => onNavigate('home')}
            className={`hover:text-amber-400 transition-colors ${currentPage === 'home' ? 'text-amber-400 font-bold' : ''}`}
            id="nav-home-link"
          >
            Home
          </button>

          {/* Practice Areas Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setPracticeDropdownOpen(true)}
            onMouseLeave={() => setPracticeDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 py-2 hover:text-amber-400 transition-colors ${
                ['fractional-cio', 'cio-advisory', 'interim-cio', 'ai-strategy', 'ai-governance', 'healthcare-cio-advisory', 'higher-education-cio-advisory', 'technology-governance'].includes(currentPage)
                  ? 'text-amber-400 font-bold'
                  : ''
              }`}
              id="nav-practice-dropdown-btn"
            >
              <span>Practice Areas</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${practiceDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {practiceDropdownOpen && (
              <div className="absolute left-0 top-full w-80 bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                <button
                  onClick={() => { onNavigate('fractional-cio'); setPracticeDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-amber-400 flex items-center justify-between">
                    <span>Fractional CIO Services</span>
                    <span className="text-[9px] bg-amber-950 text-amber-300 border border-amber-800 px-1.5 py-0.5 rounded font-mono">Core</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">30-day diagnostics, strategy & executive retainers</div>
                </button>

                <button
                  onClick={() => { onNavigate('interim-cio'); setPracticeDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-red-400">Interim CIO Mandates</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Rapid leadership during CIO vacancies & critical turnarounds</div>
                </button>

                <button
                  onClick={() => { onNavigate('ai-strategy'); setPracticeDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-purple-400">Enterprise AI Strategy & NIST AI RMF</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Auditable AI risk governance, safety charters & vendor screening</div>
                </button>

                <button
                  onClick={() => { onNavigate('healthcare-cio-advisory'); setPracticeDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-emerald-400">Healthcare Systems & Clinical Informatics</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Hospital M&A, EHR data integrity, radiation oncology IT & HIPAA</div>
                </button>

                <button
                  onClick={() => { onNavigate('higher-education-cio-advisory'); setPracticeDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-cyan-400">Higher Education & Research Computing</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Slurm HPC clusters, campus ERPs & academic health science systems</div>
                </button>

                <button
                  onClick={() => { onNavigate('technology-governance'); setPracticeDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-blue-400">Technology Governance & Board Reporting</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Steering committee cadence, capital budget control & TCO</div>
                </button>
              </div>
            )}
          </div>

          {/* Evidence, Press & Publications Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProofDropdownOpen(true)}
            onMouseLeave={() => setProofDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 py-2 hover:text-amber-400 transition-colors ${
                ['press-media', 'executive-work', 'research-publications', 'publications', 'case-studies', 'insights', 'resources'].includes(currentPage)
                  ? 'text-amber-400 font-bold'
                  : ''
              }`}
              id="nav-proof-dropdown-btn"
            >
              <span>Evidence & Press</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${proofDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {proofDropdownOpen && (
              <div className="absolute left-0 top-full w-84 bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                <button
                  onClick={() => { onNavigate('press-media'); setProofDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <span>Press, Keynotes & Articles</span>
                    <span className="text-[9px] bg-amber-950 text-amber-300 border border-amber-800 px-1.5 py-0.2 rounded font-mono">Media</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Route Fifty feature, GovExec Summit, AutoTech Detroit & LinkedIn</div>
                </button>

                <button
                  onClick={() => { onNavigate('research-publications'); setProofDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                    <span>Peer-Reviewed Research</span>
                    <span className="text-[9px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-1.5 py-0.2 rounded font-mono">8 Papers</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Clinical cybersecurity, E-Variance & radiation oncology (Google Scholar)</div>
                </button>

                <button
                  onClick={() => { onNavigate('case-studies'); setProofDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-emerald-400">Verified Case Studies</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Documented multi-agency consolidation & hospital turnaround</div>
                </button>

                <button
                  onClick={() => { onNavigate('insights'); setProofDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-slate-200">Executive Insights & Playbooks</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">In-depth guides on portfolio rationalization and AI governance</div>
                </button>

                <button
                  onClick={() => { onNavigate('resources'); setProofDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-blue-400">Executive Guides & Checklists</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">10 downloadable CIO decision frameworks & lead magnets</div>
                </button>

                <button
                  onClick={() => { onNavigate('trust-center'); setProofDropdownOpen(false); }}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition-colors text-xs text-slate-200 block border-t border-slate-800/80 mt-1 pt-2"
                >
                  <div className="font-bold text-slate-300">Trust & Security Center</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Domain verification, security.txt & RFC 9116</div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('assessment')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono text-xs transition-all ${
              currentPage === 'assessment'
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                : 'bg-amber-950/30 text-amber-300 border-amber-800/60 hover:bg-amber-900/50'
            }`}
            id="nav-assessment-link"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>CIO Assessment</span>
          </button>

          <button
            onClick={() => onNavigate('about')}
            className={`hover:text-amber-400 transition-colors ${currentPage === 'about' || currentPage === 'leadership' ? 'text-amber-400 font-bold' : ''}`}
            id="nav-about-link"
          >
            About Shafiq
          </button>
        </div>

        {/* Action Buttons: Schedule Conversation, Hotline */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+14109347773"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all shadow-sm"
            title="Direct Executive Line"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>(410) 934-7773</span>
          </a>

          <button
            onClick={() => onNavigate('schedule')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl hover:scale-102 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
            id="schedule-conversation-header-btn"
          >
            <Calendar className="w-3.5 h-3.5 text-slate-950" />
            <span>Schedule Advisory</span>
          </button>
        </div>

        {/* Mobile Action Shortcuts & Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {onOpenBookAudit && (
            <button
              onClick={onOpenBookAudit}
              className="px-2.5 py-1.5 text-[11px] font-bold text-white bg-blue-600 rounded-lg shadow-sm flex items-center gap-1 active:scale-95 transition-transform"
              id="mobile-book-audit-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span className="hidden sm:inline">Book</span> Audit
            </button>
          )}
          <button
            onClick={onOpenAdvisor}
            className="p-2 text-purple-300 bg-purple-950/80 border border-purple-800 rounded-lg active:scale-95 transition-transform"
            id="mobile-ai-advisor-btn"
            aria-label="AI Advisor"
          >
            <BrainCircuit className="w-4 h-4 text-purple-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700/80 rounded-lg focus:outline-none active:scale-95 transition-transform"
            id="mobile-hamburger-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Polished full touch navigation with categorization */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl">
          {/* Quick Action Badges */}
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
            <button
              onClick={() => { onOpenConsultation(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md flex items-center justify-center gap-1.5 active:scale-98"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Call</span>
            </button>
            {onOpenCalendar && (
              <button
                onClick={() => { onOpenCalendar(); setMobileMenuOpen(false); }}
                className="w-full py-2.5 px-3 text-xs font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800 rounded-lg flex items-center justify-center gap-1.5 active:scale-98"
              >
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Calendar</span>
              </button>
            )}
          </div>

          {/* Section: Practice Areas */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block font-mono">
              Practice Areas
            </span>
            <div className="space-y-1">
              <button
                onClick={() => { onNavigate('fractional-cio'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg text-amber-300 hover:bg-amber-950/30 font-semibold border border-amber-900/40 flex items-center justify-between text-xs"
              >
                <span>Fractional CIO Services</span>
                <span className="text-[9px] bg-amber-500 text-slate-950 px-1 rounded font-mono font-black">CORE</span>
              </button>

              <button
                onClick={() => { onNavigate('interim-cio'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg text-red-300 hover:bg-slate-800 font-semibold text-xs"
              >
                <span>Interim CIO Mandates & Vacancy Leadership</span>
              </button>

              <button
                onClick={() => { onNavigate('ai-strategy'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg text-purple-300 hover:bg-slate-800 font-semibold text-xs"
              >
                <span>Enterprise AI Strategy & NIST AI RMF</span>
              </button>

              <button
                onClick={() => { onNavigate('healthcare-cio-advisory'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg text-emerald-300 hover:bg-slate-800 font-semibold text-xs"
              >
                <span>Healthcare Systems & Clinical Informatics</span>
              </button>

              <button
                onClick={() => { onNavigate('higher-education-cio-advisory'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg text-cyan-300 hover:bg-slate-800 font-semibold text-xs"
              >
                <span>Higher Education & Research Computing</span>
              </button>

              <button
                onClick={() => { onNavigate('technology-governance'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 rounded-lg text-blue-300 hover:bg-slate-800 font-semibold text-xs"
              >
                <span>Technology Governance & Board Reporting</span>
              </button>
            </div>
          </div>

          {/* Section: Evidence, Press & Publications */}
          <div className="space-y-1 pt-2 border-t border-slate-800/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block font-mono">
              Evidence & National Media
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => { onNavigate('press-media'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg text-xs font-semibold bg-amber-950/40 text-amber-300 border border-amber-800/60"
              >
                🎙️ Press & Keynotes
              </button>
              <button
                onClick={() => { onNavigate('research-publications'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg text-xs font-semibold bg-cyan-950/40 text-cyan-300 border border-cyan-800/60"
              >
                📚 Research (8 Papers)
              </button>
              <button
                onClick={() => { onNavigate('case-studies'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800/60"
              >
                📊 Case Studies
              </button>
              <button
                onClick={() => { onNavigate('insights'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800/60"
              >
                💡 Insights & Playbooks
              </button>
              <button
                onClick={() => { onNavigate('resources'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800/60"
              >
                📑 CIO Checklists
              </button>
              <button
                onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-lg text-xs font-medium text-amber-200 hover:bg-slate-800/60"
              >
                👤 About Shafiq
              </button>
            </div>
          </div>

          {/* Section: Diagnostic Assessment */}
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => { onNavigate('assessment'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <span>12-Domain CIO Maturity Assessment</span>
              </div>
              <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded font-mono">DIAGNOSTIC</span>
            </button>
          </div>

          {/* Section: Direct Touch Communications */}
          <div className="pt-2 border-t border-slate-800 space-y-2">
            <a
              href="tel:+14109347773"
              className="w-full py-2.5 px-3 text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800 rounded-lg flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Direct Office: (410) 934-7773</span>
            </a>

            <a
              href="mailto:shafiqs1@gmail.com"
              className="w-full py-2 px-3 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Confidential Email: shafiqs1@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

