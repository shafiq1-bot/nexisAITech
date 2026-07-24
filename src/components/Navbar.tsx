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
  Calendar
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
              {currentRegion === 'US' ? 'US HQ (Owings Mills, MD)' : currentRegion === 'KSA' ? 'KSA Regional Hub (Riyadh)' : 'UAE Regional Hub (Dubai)'}
            </span>
            <span className="hidden md:inline text-slate-400">
              {t.quickContact}: <a href="tel:14436085425" className="text-slate-200 hover:text-emerald-400 transition-colors font-mono font-bold">(443) 608-5425</a> | Text: <a href="sms:+14436085425" className="text-emerald-400 hover:underline font-mono font-bold">(443) 608-5425</a>
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
              NEXIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">AI</span>
            </span>
            <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase font-mono block -mt-1">
              Advisory • Consulting • Services
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigate('home')}
            className={`hover:text-blue-400 transition-colors ${currentPage === 'home' ? 'text-blue-400 font-semibold' : ''}`}
            id="nav-home-link"
          >
            {t.navHome}
          </button>

          <button
            onClick={() => onNavigate('leadership')}
            className={`hover:text-blue-400 transition-colors flex items-center gap-1 ${currentPage === 'leadership' ? 'text-blue-400 font-bold' : ''}`}
            id="nav-leadership-link"
          >
            <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-1.5 py-0.5 rounded font-mono uppercase">CIO</span>
            <span>Leadership</span>
          </button>

          <button
            onClick={() => onNavigate('case-studies')}
            className={`hover:text-blue-400 transition-colors ${currentPage === 'case-studies' ? 'text-blue-400 font-semibold' : ''}`}
            id="nav-casestudies-link"
          >
            Case Studies
          </button>

          <button
            onClick={() => onNavigate('bd-agents')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border font-mono text-xs transition-all ${
              currentPage === 'bd-agents'
                ? 'bg-cyan-950 text-cyan-300 border-cyan-500 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/80 text-cyan-400 border-cyan-800/80 hover:bg-slate-800 hover:border-cyan-500'
            }`}
            id="nav-bd-agents-link"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Lead Agents</span>
            <span className="bg-cyan-500 text-slate-950 text-[9px] font-extrabold px-1 rounded uppercase">New</span>
          </button>

          <button
            onClick={() => onNavigate('trust-center')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border font-mono text-xs transition-all ${
              currentPage === 'trust-center'
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500 font-bold shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900/80 text-emerald-400 border-emerald-800/80 hover:bg-slate-800 hover:border-emerald-500'
            }`}
            id="nav-trust-center-link"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Trust & Domain Security</span>
            <span className="bg-emerald-500 text-slate-950 text-[9px] font-extrabold px-1 rounded uppercase">nexisai.us</span>
          </button>

          <button
            onClick={() => onNavigate('admin')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border font-mono text-xs transition-all ${
              currentPage === 'admin'
                ? 'bg-blue-950 text-blue-300 border-blue-500 font-bold shadow-lg shadow-blue-500/20'
                : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-blue-500'
            }`}
            id="nav-admin-portal-link"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Admin Portal</span>
          </button>

          <button
            onClick={() => onNavigate('markets')}
            className={`flex items-center gap-1 hover:text-blue-400 transition-colors ${currentPage === 'markets' ? 'text-blue-400 font-bold' : ''}`}
            id="nav-markets-link"
          >
            <span>Markets</span>
          </button>

          {/* Services Menu Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => onNavigate('services')}
              className={`flex items-center gap-1 hover:text-blue-400 transition-colors py-2 ${
                currentPage === 'services' || currentPage === 'service-detail' || currentPage === 'enterprise-architecture' || currentPage === 'research-computing' || currentPage === 'hardware-infrastructure' ? 'text-blue-400 font-semibold' : ''
              }`}
              id="nav-services-dropdown-btn"
            >
              {t.navServices}
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full w-80 bg-slate-900 border border-slate-700/90 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-xs font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">Practice Areas</div>
                
                <button
                  onClick={() => { onNavigate('enterprise-architecture'); setServicesDropdownOpen(false); }}
                  className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <FileCheck2 className="w-4 h-4 text-indigo-400 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-100 group-hover:text-indigo-300">Enterprise Architecture</div>
                    <div className="text-[11px] text-slate-400">Application Portfolio & TIME Matrix</div>
                  </div>
                </button>

                <button
                  onClick={() => { onNavigate('research-computing'); setServicesDropdownOpen(false); }}
                  className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <Server className="w-4 h-4 text-blue-400 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-100 group-hover:text-blue-300">Research Computing</div>
                    <div className="text-[11px] text-slate-400">HPC Clusters, Slurm & NVIDIA GPUs</div>
                  </div>
                </button>

                <button
                  onClick={() => { onNavigate('hardware-infrastructure'); setServicesDropdownOpen(false); }}
                  className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <Building2 className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-100 group-hover:text-emerald-300">Hardware Infrastructure</div>
                    <div className="text-[11px] text-slate-400">Data Centers, Cisco, Dell & HPE</div>
                  </div>
                </button>

                <button
                  onClick={() => { onNavigate('service-detail', 'ai-transformation'); setServicesDropdownOpen(false); }}
                  className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <BrainCircuit className="w-4 h-4 text-purple-400 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-100 group-hover:text-purple-300">AI Transformation</div>
                    <div className="text-[11px] text-slate-400">Autonomous Agents & RAG</div>
                  </div>
                </button>

                <button
                  onClick={() => { onNavigate('service-detail', 'cybersecurity'); setServicesDropdownOpen(false); }}
                  className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-100 group-hover:text-emerald-300">Cybersecurity & Zero Trust</div>
                    <div className="text-[11px] text-slate-400">NIST 800-53 & CMMC 2.0</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('industries')}
            className={`hover:text-blue-400 transition-colors ${currentPage === 'industries' ? 'text-blue-400 font-semibold' : ''}`}
            id="nav-industries-link"
          >
            {t.navIndustries}
          </button>

          <button
            onClick={() => onNavigate('resources')}
            className={`hover:text-blue-400 transition-colors ${currentPage === 'resources' ? 'text-blue-400 font-semibold' : ''}`}
            id="nav-resources-link"
          >
            {t.navResources}
          </button>
        </div>

        {/* Action Buttons: Book Audit, Free Tools, Google Calendar, AI Strategy Assistant */}
        <div className="hidden lg:flex items-center gap-2">
          {onOpenBookAudit && (
            <button
              onClick={onOpenBookAudit}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all cursor-pointer ring-1 ring-blue-400/50"
              id="book-2026-audit-nav-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Book 2026 Audit</span>
            </button>
          )}

          <a
            href="#free-tools"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800 rounded-lg hover:bg-emerald-900 transition-all shadow-sm cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>Free Web Tools</span>
          </a>

          {onOpenCalendar && (
            <button
              onClick={onOpenCalendar}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 rounded-lg hover:bg-cyan-900 transition-all shadow-sm cursor-pointer"
              id="google-calendar-header-btn"
              title="Open Google Calendar Briefings Hub"
            >
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Calendar</span>
            </button>
          )}

          <button
            onClick={onOpenAdvisor}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/80 border border-purple-700/70 rounded-lg hover:bg-purple-900 transition-all shadow-sm cursor-pointer"
            id="ai-advisor-header-btn"
          >
            <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
            <span>AI Advisor</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-900/40 hover:shadow-blue-600/30 cursor-pointer"
            id="schedule-consultation-header-btn"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{t.scheduleConsultation}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenAdvisor}
            className="p-1.5 text-purple-300 bg-purple-950 border border-purple-800 rounded-md"
            id="mobile-ai-advisor-btn"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            id="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-blue-400 font-medium border-b border-slate-800"
          >
            {t.navHome}
          </button>

          <button
            onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-blue-400 font-medium border-b border-slate-800"
          >
            {t.navAbout}
          </button>

          <button
            onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-blue-400 font-medium border-b border-slate-800"
          >
            {t.navServices}
          </button>

          <button
            onClick={() => { onNavigate('industries'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-blue-400 font-medium border-b border-slate-800"
          >
            {t.navIndustries}
          </button>

          <button
            onClick={() => { onNavigate('ai-solutions'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-blue-400 font-medium border-b border-slate-800"
          >
            {t.navAISolutions}
          </button>

          <button
            onClick={() => { onNavigate('cybersecurity'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-blue-400 font-medium border-b border-slate-800"
          >
            {t.navCybersecurity}
          </button>

          <button
            onClick={() => { onNavigate('resources'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-slate-200 hover:text-blue-400 font-medium border-b border-slate-800"
          >
            {t.navResources}
          </button>

          <div className="pt-2 space-y-2">
            {onOpenGmailModal && (
              <button
                onClick={() => { onOpenGmailModal(); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 text-sm font-semibold text-emerald-300 bg-emerald-950 border border-emerald-800 rounded-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Gmail & Domain Mailboxes</span>
              </button>
            )}

            <button
              onClick={() => { onOpenConsultation(); setMobileMenuOpen(false); }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md"
            >
              {t.scheduleConsultation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

