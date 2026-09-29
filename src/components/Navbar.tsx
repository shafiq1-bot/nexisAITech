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
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showTopAnnouncement, setShowTopAnnouncement] = useState(true);

  const t = translations[currentLanguage];

  const isRtl = currentLanguage === 'ar';

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-slate-100 shadow-xl">
      {/* Prominent High-Impact Top Announcement Banner */}
      {showTopAnnouncement && (
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-purple-900 text-slate-200 text-xs py-2 px-4 border-b border-blue-700/50 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className="bg-blue-500/20 text-blue-300 font-semibold px-2 py-0.5 rounded border border-blue-400/30 text-[11px] uppercase tracking-wider">
                ⚡ Executive Briefing
              </span>
              <span className="font-medium text-slate-100">
                Nexis AI Enterprise Agents & Zero Trust | US HQ: <a href="tel:14436085425" className="font-mono text-emerald-300 underline font-bold hover:text-emerald-200">(443) 608-5425</a> | Text / Call Hotline: <a href="sms:+14436085425" className="font-mono text-amber-300 underline font-bold hover:text-amber-200">(443) 608-5425</a> | Email: <a href="mailto:info@nexisai.us" className="font-mono text-cyan-300 underline hover:text-cyan-200">info@nexisai.us</a>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1 rounded text-[11px] transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Book 2026 Audit</span>
                <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => setShowTopAnnouncement(false)}
                className="text-slate-400 hover:text-white transition-colors"
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
              {currentRegion === 'US' ? 'US HQ (Owings Mills, MD)' : currentRegion === 'EU' ? 'EU Hubs (London & Frankfurt)' : currentRegion === 'KSA' ? 'KSA Regional Hub (Riyadh)' : 'UAE Regional Hub (Dubai)'}
            </span>
            <span className="hidden md:inline text-slate-400">
              {t.quickContact}: <a href="tel:14436085425" className="text-slate-200 hover:text-emerald-400 transition-colors font-mono font-bold">(443) 608-5425</a> | Text: <a href="sms:+14436085425" className="text-emerald-400 hover:underline font-mono font-bold">(443) 608-5425</a> | UK / EU: <a href="tel:+442079460988" className="text-cyan-300 hover:underline font-mono font-bold">+44 20 7946 0988</a>
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
                <option value="US" className="bg-slate-900 text-slate-200">🇺🇸 {t.usRegion}</option>
                <option value="EU" className="bg-slate-900 text-slate-200">🇪🇺 {t.euRegion || 'Europe (UK & EU Hubs)'}</option>
                <option value="KSA" className="bg-slate-900 text-slate-200">🇸🇦 {t.ksaRegion}</option>
                <option value="UAE" className="bg-slate-900 text-slate-200">🇦🇪 {t.uaeRegion}</option>
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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo-btn"
        >
          <div className="relative w-10 h-10">
            {/* Outer Rotating Glowing Halo Ring */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 opacity-75 blur-sm group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="relative w-10 h-10 rounded-xl bg-slate-950 border border-cyan-500/50 p-1 flex items-center justify-center shadow-2xl">
              <svg className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V5l12 14V5" />
                <circle cx="4" cy="5" r="1.5" className="fill-cyan-400" />
                <circle cx="16" cy="19" r="1.5" className="fill-emerald-400" />
                <circle cx="16" cy="5" r="1.5" className="fill-purple-400" />
                <circle cx="4" cy="19" r="1.5" className="fill-blue-400" />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white block font-sans">
              NEXIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">AI</span>
            </span>
            <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase font-mono block -mt-1">
              Executive Advisory · Led by Shafiq Rahman
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-4 text-xs font-semibold text-slate-300">
          <button
            onClick={() => onNavigate('home')}
            className={`hover:text-amber-400 transition-colors ${currentPage === 'home' ? 'text-amber-400 font-bold' : ''}`}
            id="nav-home-link"
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('fractional-cio')}
            className={`hover:text-amber-400 transition-colors flex items-center gap-1 ${currentPage === 'fractional-cio' ? 'text-amber-400 font-bold' : ''}`}
            id="nav-fractional-cio-link"
          >
            <span className="text-[9px] bg-amber-500 text-slate-950 font-black px-1.5 py-0.5 rounded font-mono uppercase">CIO</span>
            <span>Fractional CIO</span>
          </button>

          <button
            onClick={() => onNavigate('cio-advisory')}
            className={`hover:text-amber-400 transition-colors ${currentPage === 'cio-advisory' ? 'text-amber-400 font-bold' : ''}`}
            id="nav-cio-advisory-link"
          >
            CIO Advisory
          </button>

          <button
            onClick={() => onNavigate('ai-strategy')}
            className={`hover:text-amber-400 transition-colors ${currentPage === 'ai-strategy' || currentPage === 'ai-governance' ? 'text-amber-400 font-bold' : ''}`}
            id="nav-ai-strategy-link"
          >
            AI Strategy & Governance
          </button>

          <button
            onClick={() => onNavigate('healthcare-cio-advisory')}
            className={`hover:text-emerald-400 transition-colors ${currentPage === 'healthcare-cio-advisory' ? 'text-emerald-400 font-bold' : ''}`}
            id="nav-healthcare-link"
          >
            Healthcare
          </button>

          <button
            onClick={() => onNavigate('higher-education-cio-advisory')}
            className={`hover:text-blue-400 transition-colors ${currentPage === 'higher-education-cio-advisory' ? 'text-blue-400 font-bold' : ''}`}
            id="nav-higher-ed-link"
          >
            Higher Ed
          </button>

          <button
            onClick={() => onNavigate('insights')}
            className={`hover:text-amber-400 transition-colors ${currentPage === 'insights' ? 'text-amber-400 font-bold' : ''}`}
            id="nav-insights-link"
          >
            Insights
          </button>

          <button
            onClick={() => onNavigate('assessment')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border font-mono text-xs transition-all ${
              currentPage === 'assessment'
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md'
                : 'bg-amber-950/40 text-amber-300 border-amber-800/80 hover:bg-amber-900/60'
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

          {/* More Capabilities Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors py-2"
              id="nav-more-dropdown-btn"
            >
              <span>More</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute right-0 top-full w-72 bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => { onNavigate('interim-cio'); setServicesDropdownOpen(false); }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-red-400">Interim CIO Mandates</div>
                  <div className="text-[11px] text-slate-400">Transition, crisis & vacancy leadership</div>
                </button>

                <button
                  onClick={() => { onNavigate('technology-governance'); setServicesDropdownOpen(false); }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-amber-300">Technology Governance</div>
                  <div className="text-[11px] text-slate-400">Steering cadence, TCO & board oversight</div>
                </button>

                <button
                  onClick={() => { onNavigate('press-media'); setServicesDropdownOpen(false); }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <span>Press, Keynotes & Articles</span>
                    <span className="text-[9px] bg-amber-950 text-amber-300 border border-amber-800 px-1.5 py-0.2 rounded font-mono">Media</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Route Fifty, GovExec Summit, AutoTech Detroit & LinkedIn</div>
                </button>

                <button
                  onClick={() => { onNavigate('research-publications'); setServicesDropdownOpen(false); }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                    <span>Research & Publications</span>
                    <span className="text-[9px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-1.5 py-0.2 rounded font-mono">8 Papers</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Clinical cybersecurity & EMR data integrity (Google Scholar)</div>
                </button>

                <button
                  onClick={() => { onNavigate('case-studies'); setServicesDropdownOpen(false); }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-emerald-400">Verified Case Studies</div>
                  <div className="text-[11px] text-slate-400">Documented institutional transformations</div>
                </button>

                <button
                  onClick={() => { onNavigate('resources'); setServicesDropdownOpen(false); }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-blue-400">Executive Guides & Checklists</div>
                  <div className="text-[11px] text-slate-400">10 CIO frameworks & lead magnets</div>
                </button>

                <button
                  onClick={() => { onNavigate('trust-center'); setServicesDropdownOpen(false); }}
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-800 transition-colors text-xs text-slate-200 block"
                >
                  <div className="font-bold text-slate-200">Trust & Security Center</div>
                  <div className="text-[11px] text-slate-400">Domain verification & RFC 9116</div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons: Schedule Conversation, CIO Assessment, AI Advisor */}
        <div className="hidden xl:flex items-center gap-2.5">
          <button
            onClick={() => onNavigate('ai-advisor')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/80 border border-purple-700/70 rounded-xl hover:bg-purple-900 transition-all shadow-sm cursor-pointer"
            id="ai-advisor-header-btn"
          >
            <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
            <span>AI Advisor</span>
          </button>

          <button
            onClick={() => onNavigate('schedule')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
            id="schedule-conversation-header-btn"
          >
            <Calendar className="w-3.5 h-3.5 text-slate-950" />
            <span>Schedule Conversation</span>
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

          {/* Section: Executive Leadership & Strategy */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block font-mono">
              Executive & Advisory
            </span>
            <button
              onClick={() => { onNavigate('fractional-cio'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-amber-300 hover:bg-amber-950/30 font-semibold border border-amber-900/40 flex items-center justify-between active:bg-amber-950/50"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Fractional CIO & 30-Day Diagnostic</span>
              </div>
              <span className="text-[10px] bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded font-mono font-black">NEW</span>
            </button>

            <button
              onClick={() => { onNavigate('roi-framework'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-emerald-300 hover:bg-emerald-950/30 font-semibold border border-emerald-900/40 flex items-center justify-between active:bg-emerald-950/50"
            >
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Value Framework (EVF™)</span>
              </div>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-1.5 py-0.5 rounded font-mono font-bold">ROI</span>
            </button>

            <button
              onClick={() => { onNavigate('erp-modernization'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-indigo-300 hover:bg-indigo-950/30 font-semibold border border-indigo-900/40 flex items-center justify-between active:bg-indigo-950/50"
            >
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-400" />
                <span>ERP & Clean Core (SAP/Oracle)</span>
              </div>
              <span className="text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-800 px-1.5 py-0.5 rounded font-mono">ERP</span>
            </button>
          </div>

          {/* Section: Core Navigation */}
          <div className="space-y-1 pt-1 border-t border-slate-800/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block font-mono">
              Platform & Practices
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'home' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                🏠 {t.navHome}
              </button>
              <button
                onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'about' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                🏢 {t.navAbout}
              </button>
              <button
                onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'services' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                ⚙️ {t.navServices}
              </button>
              <button
                onClick={() => { onNavigate('industries'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'industries' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                🏭 {t.navIndustries}
              </button>
              <button
                onClick={() => { onNavigate('ai-solutions'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'ai-solutions' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                🧠 {t.navAISolutions}
              </button>
              <button
                onClick={() => { onNavigate('cybersecurity'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'cybersecurity' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                🛡️ Zero Trust
              </button>
              <button
                onClick={() => { onNavigate('case-studies'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'case-studies' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                📊 Case Studies
              </button>
              <button
                onClick={() => { onNavigate('research-publications'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'research-publications' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-cyan-300 hover:bg-slate-800/60'}`}
              >
                📚 Research (8 Papers)
              </button>
              <button
                onClick={() => { onNavigate('press-media'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'press-media' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-amber-300 hover:bg-slate-800/60'}`}
              >
                🎙️ Press & Keynotes
              </button>
              <button
                onClick={() => { onNavigate('markets'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${currentPage === 'markets' ? 'bg-blue-900/40 text-blue-300 border border-blue-700' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                🌐 Global Markets
              </button>
            </div>
          </div>

          {/* Section: Trust & Security */}
          <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
            <button
              onClick={() => { onNavigate('trust-center'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-semibold flex items-center justify-between active:bg-emerald-950/80"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Trust, RFC 9116 & Domain Security</span>
              </div>
              <span className="bg-emerald-500 text-slate-950 text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase font-mono">nexisai.us</span>
            </button>
          </div>

          {/* Section: Direct Touch Communications */}
          <div className="pt-2 border-t border-slate-800 space-y-2">
            <a
              href="tel:14436085425"
              className="w-full py-2.5 px-3 text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800 rounded-lg flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Direct Phone Call: (443) 608-5425</span>
            </a>

            {onOpenGmailModal && (
              <button
                onClick={() => { onOpenGmailModal(); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 px-3 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Gmail & Enterprise Mailbox Access</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

