import React, { useState, useEffect, useCallback } from 'react';
import {
  PageRoute,
  PAGE_METADATA,
  HASH_ROUTE_MAP,
  SITE_CONFIG,
} from './content/nexisData';
import { ThemePalette, trackEvent } from './components/nexis/SharedUI';
import { ExecutiveNav } from './components/nexis/ExecutiveNav';
import { ExecutiveFooter } from './components/nexis/ExecutiveFooter';
import { HomePage } from './components/nexis/HomePage';
import { AboutPage } from './components/nexis/AboutPage';
import { FractionalCIOPage } from './components/nexis/FractionalCIOPage';
import { ITModernizationPage } from './components/nexis/ITModernizationPage';
import { AIStrategyGovernancePage } from './components/nexis/AIStrategyGovernancePage';
import {
  HealthcarePage,
  PublicSectorPage,
  HigherEducationPage,
} from './components/nexis/PracticesPages';
import { InsightsRecognitionPage } from './components/nexis/InsightsRecognitionPage';
import { ContactPage } from './components/nexis/ContactPage';

const VALID_ROUTES = new Set<PageRoute>([
  'home',
  'about',
  'fractional-cio',
  'it-modernization',
  'ai-strategy',
  'healthcare',
  'public-sector',
  'higher-ed',
  'insights',
  'contact',
]);

function resolveLocationToRoute(): { page: PageRoute; sectionId?: string } {
  if (typeof window === 'undefined') return { page: 'home' };

  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get('page') as PageRoute | null;
  const hash = window.location.hash || '';

  if (pageParam && VALID_ROUTES.has(pageParam)) {
    const cleanHashId = hash ? hash.replace(/^#/, '') : undefined;
    return { page: pageParam, sectionId: cleanHashId };
  }

  if (hash && HASH_ROUTE_MAP[hash]) {
    return HASH_ROUTE_MAP[hash];
  }

  return { page: 'home' };
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => resolveLocationToRoute().page);
  const [prefillService, setPrefillService] = useState<string>('');

  const [theme, setTheme] = useState<ThemePalette>('cyan');
  const [isDark, setIsDark] = useState<boolean>(false);

  const [utmParams, setUtmParams] = useState<{
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  }>({});

  // Capture UTM campaign parameters once on initial entry
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
      const val = params.get(key);
      if (val) utms[key] = val;
    });
    if (Object.keys(utms).length > 0) {
      setUtmParams(utms);
      trackEvent('utm_capture', utms);
    }

    // Handle initial section scroll if hash is specified
    const initial = resolveLocationToRoute();
    if (initial.sectionId) {
      setTimeout(() => {
        document.getElementById(initial.sectionId!)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, []);

  // Sync Tailwind dark mode + palette class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');

    root.classList.remove('theme-cyan', 'theme-cobalt', 'theme-emerald', 'theme-amber');
    root.classList.add(`theme-${theme}`);
  }, [theme, isDark]);

  // Update document title & meta description on route change
  useEffect(() => {
    const meta = PAGE_METADATA[currentPage];
    if (!meta) return;
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', meta.description);
    }
  }, [currentPage]);

  // Support browser back/forward and legacy hash changes
  useEffect(() => {
    const handleRouteSync = () => {
      const resolved = resolveLocationToRoute();
      setCurrentPage(resolved.page);
      if (resolved.sectionId) {
        setTimeout(() => {
          document.getElementById(resolved.sectionId!)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handleRouteSync);
    window.addEventListener('hashchange', handleRouteSync);
    return () => {
      window.removeEventListener('popstate', handleRouteSync);
      window.removeEventListener('hashchange', handleRouteSync);
    };
  }, []);

  const getCalUrl = useCallback(() => {
    const search = new URLSearchParams(utmParams as Record<string, string>).toString();
    return search ? `${SITE_CONFIG.bookingUrl}?${search}` : SITE_CONFIG.bookingUrl;
  }, [utmParams]);

  const handleNavigate = useCallback(
    (page: PageRoute, sectionId?: string, serviceContext?: string) => {
      setCurrentPage(page);
      if (serviceContext !== undefined) {
        setPrefillService(serviceContext);
      } else if (page !== 'contact') {
        setPrefillService('');
      }

      const targetBase = page === 'home' ? '/' : `/?page=${page}`;
      const targetUrl = sectionId ? `${targetBase}#${sectionId}` : targetBase;

      if (typeof window !== 'undefined') {
        window.history.pushState({ page, sectionId }, '', targetUrl);
      }

      trackEvent('page_navigation', { page, sectionId: sectionId || null });

      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    []
  );

  const calUrl = getCalUrl();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070D19] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <ExecutiveNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
        theme={theme}
        setTheme={setTheme}
        isDark={isDark}
        setIsDark={setIsDark}
        calUrl={calUrl}
      />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} calUrl={calUrl} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} calUrl={calUrl} />}
        {currentPage === 'fractional-cio' && (
          <FractionalCIOPage onNavigate={handleNavigate} calUrl={calUrl} />
        )}
        {currentPage === 'it-modernization' && (
          <ITModernizationPage onNavigate={handleNavigate} calUrl={calUrl} />
        )}
        {currentPage === 'ai-strategy' && (
          <AIStrategyGovernancePage onNavigate={handleNavigate} calUrl={calUrl} />
        )}
        {currentPage === 'healthcare' && (
          <HealthcarePage onNavigate={handleNavigate} calUrl={calUrl} />
        )}
        {currentPage === 'public-sector' && (
          <PublicSectorPage onNavigate={handleNavigate} calUrl={calUrl} />
        )}
        {currentPage === 'higher-ed' && (
          <HigherEducationPage onNavigate={handleNavigate} calUrl={calUrl} />
        )}
        {currentPage === 'insights' && (
          <InsightsRecognitionPage onNavigate={handleNavigate} calUrl={calUrl} isDark={isDark} />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            calUrl={calUrl}
            isDark={isDark}
            prefillService={prefillService}
          />
        )}
      </main>

      <ExecutiveFooter onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
