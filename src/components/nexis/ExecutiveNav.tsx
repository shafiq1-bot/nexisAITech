import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  ArrowRight,
  Sun,
  Moon,
  Palette,
  Menu,
  X,
} from 'lucide-react';
import { PageRoute, PAGE_METADATA } from '../../content/nexisData';
import { ThemePalette, trackEvent } from './SharedUI';

interface ExecutiveNavProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, sectionId?: string) => void;
  theme: ThemePalette;
  setTheme: (t: ThemePalette) => void;
  isDark: boolean;
  setIsDark: (d: boolean) => void;
  calUrl: string;
}

export const ExecutiveNav: React.FC<ExecutiveNavProps> = ({
  currentPage,
  onNavigate,
  theme,
  setTheme,
  isDark,
  setIsDark,
  calUrl,
}) => {
  const [openMenu, setOpenMenu] = useState<'services' | 'sectors' | 'theme' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const serviceRoutes: PageRoute[] = ['fractional-cio', 'it-modernization', 'ai-strategy'];
  const sectorRoutes: PageRoute[] = ['healthcare', 'public-sector', 'higher-ed'];

  const isServiceActive = serviceRoutes.includes(currentPage);
  const isSectorActive = sectorRoutes.includes(currentPage);

  const handleLinkClick = (page: PageRoute, sectionId?: string) => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 bg-theme-header text-white border-b border-theme-header shadow-sm transition-colors duration-200 no-print"
    >
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4"
      >
        {/* Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="inline-flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white font-mono whitespace-nowrap shrink-0 cursor-pointer"
        >
          <img
            src="/favicon.svg"
            alt="Nexis AI emblem"
            width={28}
            height={28}
            className="w-7 h-7 rounded-lg shrink-0"
          />
          <span>Nexis AI</span>
        </button>

        {/* Single-Row Desktop Links with Clean Grouped Practice Dropdowns */}
        <div className="hidden xl:flex items-center gap-6 text-xs font-medium text-slate-300">
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'home' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('about')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'about' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            About Shafiq
          </button>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')}
              aria-expanded={openMenu === 'services'}
              className={`inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isServiceActive ? 'text-theme-accent font-bold' : 'hover:text-white'
              }`}
            >
              <span>Advisory &amp; Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${openMenu === 'services' ? 'rotate-180' : ''}`}
              />
            </button>

            {openMenu === 'services' && (
              <div className="absolute left-0 mt-3 w-80 rounded-2xl bg-[#091224] border border-white/15 shadow-2xl p-2 z-50 space-y-1">
                {serviceRoutes.map((route) => {
                  const meta = PAGE_METADATA[route];
                  const active = currentPage === route;
                  return (
                    <button
                      key={route}
                      type="button"
                      onClick={() => handleLinkClick(route)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer block ${
                        active
                          ? 'bg-white/10 text-theme-accent font-bold'
                          : 'text-slate-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{meta.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {route === 'fractional-cio'
                          ? 'Tier 1 Advisor · Tier 2 Fractional CIO · Tier 3 Interim'
                          : route === 'it-modernization'
                          ? 'Cloud · Mainframe · 24x7 SOC · Helpdesk · Infrastructure'
                          : 'Enterprise AI · Methodology · $6,500 30-Day Diagnostic'}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === 'sectors' ? null : 'sectors')}
              aria-expanded={openMenu === 'sectors'}
              className={`inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isSectorActive ? 'text-theme-accent font-bold' : 'hover:text-white'
              }`}
            >
              <span>Sector Practices</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${openMenu === 'sectors' ? 'rotate-180' : ''}`}
              />
            </button>

            {openMenu === 'sectors' && (
              <div className="absolute left-0 mt-3 w-80 rounded-2xl bg-[#091224] border border-white/15 shadow-2xl p-2 z-50 space-y-1">
                {sectorRoutes.map((route) => {
                  const meta = PAGE_METADATA[route];
                  const active = currentPage === route;
                  return (
                    <button
                      key={route}
                      type="button"
                      onClick={() => handleLinkClick(route)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer block ${
                        active
                          ? 'bg-white/10 text-theme-accent font-bold'
                          : 'text-slate-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{meta.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {route === 'healthcare'
                          ? 'Community Hospitals · EHR · Clinical Informatics'
                          : route === 'public-sector'
                          ? 'State & Municipal Modernization · NIST SP 800-53'
                          : 'Universities · Research Computing · Academic Medicine'}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('insights')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'insights' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Insights &amp; Recognition
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'contact' ? 'text-white font-bold' : 'hover:text-white'
            }`}
          >
            Contact
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 text-xs shrink-0">
          {/* Palette Picker */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === 'theme' ? null : 'theme')}
              className="inline-flex items-center gap-1 p-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-white transition-all cursor-pointer"
              title="Select Executive Color Accent"
              aria-label="Select Theme Palette"
              aria-expanded={openMenu === 'theme'}
            >
              <Palette className="w-3.5 h-3.5 text-theme-accent" />
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>

            {openMenu === 'theme' && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl shadow-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-2 z-50 text-xs text-slate-200">
                <div className="font-mono font-bold text-[10px] uppercase tracking-wider text-slate-400 px-2 py-1">
                  Color Accent
                </div>
                {(
                  [
                    { id: 'cyan', label: 'Neural Cyan', dot: '#06B6D4' },
                    { id: 'cobalt', label: 'Hyper Cobalt', dot: '#3B82F6' },
                    { id: 'emerald', label: 'Sovereign Emerald', dot: '#10B981' },
                    { id: 'amber', label: 'Executive Gold', dot: '#D4AF37' },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setTheme(item.id);
                      setOpenMenu(null);
                      trackEvent('theme_change', { theme: item.id });
                    }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                      theme === item.id
                        ? 'bg-white/10 text-white font-bold'
                        : 'hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: item.dot }}
                      />
                      {item.label}
                    </span>
                    {theme === item.id && <span className="text-theme-accent font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={() => {
              const nextDark = !isDark;
              setIsDark(nextDark);
              trackEvent('mode_toggle', { isDark: nextDark });
            }}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-white transition-all cursor-pointer"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Light/Dark Mode"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-300" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-slate-200" />
            )}
          </button>

          {/* Primary Single CTA */}
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('cal_booking_click', { location: 'header_nav' })}
            className="hidden sm:inline-flex px-3.5 py-2 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-lg text-xs transition-all shadow-md items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-white cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Navigation Drawer listing ALL 10 destinations */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-white/10 bg-[#060E1B] px-4 py-5 space-y-4 text-xs font-medium text-slate-200 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {(Object.keys(PAGE_METADATA) as PageRoute[]).map((route) => {
              const active = currentPage === route;
              return (
                <button
                  key={route}
                  type="button"
                  onClick={() => handleLinkClick(route)}
                  className={`text-left px-3.5 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                    active
                      ? 'border-theme-accent bg-white/10 text-white font-bold'
                      : 'border-white/5 hover:bg-white/5 text-slate-300'
                  }`}
                >
                  {PAGE_METADATA[route].label}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-white/10">
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs flex items-center justify-center gap-2"
            >
              <span>Schedule an Executive Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
