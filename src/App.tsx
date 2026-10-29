import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Building2,
  ChevronDown,
  ExternalLink,
  Layers,
  FileText,
  Calendar,
  Printer,
  Sun,
  Moon,
  Palette,
  SlidersHorizontal,
} from 'lucide-react';

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

// Digital Marketing & GA4 / GTM DataLayer Tracking Helper
const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    });
  }
};

type ThemePalette = 'navy' | 'teal' | 'cobalt';

export default function App() {
  // Dynamic Theme and Dark/Light Mode state
  const [theme, setTheme] = useState<ThemePalette>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('nexis_theme_palette') as ThemePalette) || 'navy';
    }
    return 'navy';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('nexis_dark_mode') === 'true';
    }
    return false;
  });

  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  // Sync theme changes with DOM and localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nexis_theme_palette', theme);
      localStorage.setItem('nexis_dark_mode', String(isDark));
      
      const root = document.documentElement;
      root.classList.remove('theme-teal', 'theme-cobalt');
      if (theme === 'teal') root.classList.add('theme-teal');
      if (theme === 'cobalt') root.classList.add('theme-cobalt');

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme, isDark]);

  // Lead Capture Form State
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: 'CEO',
    email: '',
    beds: '100–400',
    ehr: 'Epic',
    aiToolsRunning: '',
    anythingElse: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDeliverablePreview, setActiveDeliverablePreview] = useState<number>(0);
  const [previewFilter, setPreviewFilter] = useState<'all' | 'high' | 'medium' | 'scale'>('all');
  const [activeTimelineWeek, setActiveTimelineWeek] = useState<number>(1);
  const [bookingMethod, setBookingMethod] = useState<'calendar' | 'form'>('calendar');

  // Initialize Cal.com inline embed for 30min slot
  useEffect(() => {
    const initCal = () => {
      const Cal = (window as any).Cal;
      if (Cal && Cal.ns && Cal.ns["30min"]) {
        try {
          Cal.ns["30min"]("inline", {
            elementOrSelector: "#my-cal-inline-30min",
            config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
            calLink: "shafiq-rahman-gxhxcu/30min",
          });
          Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
        } catch (e) {
          console.warn("Cal.com inline init error:", e);
        }
      }
    };

    initCal();
    const t1 = setTimeout(initCal, 500);
    const t2 = setTimeout(initCal, 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Interactive Diagnostic Scope Estimator State
  const [calcBeds, setCalcBeds] = useState<'100-199' | '200-299' | '300-400'>('200-299');
  const [calcEhr, setCalcEhr] = useState<'Epic' | 'MEDITECH'>('Epic');
  const [calcPilots, setCalcPilots] = useState<'1-3' | '4-7' | '8+'>('4-7');
  const [calcCioStatus, setCalcCioStatus] = useState<'No full-time CIO' | 'Interim CIO' | 'IT Director'>('No full-time CIO');

  // Interactive Board Checklist Checked State
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleChecklistItem = (index: number) => {
    const updated = { ...checkedItems, [index]: !checkedItems[index] };
    setCheckedItems(updated);
    const count = Object.values(updated).filter(Boolean).length;
    trackEvent('checklist_interaction', { item_index: index, completed_count: count });
  };

  const completedChecklistCount = Object.values(checkedItems).filter(Boolean).length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackEvent('generate_lead', {
      service_name: '30-Day AI Governance & Pilot Diagnostic',
      value: 6500,
      currency: 'USD',
      hospital_beds: formData.beds,
      ehr_system: formData.ehr,
      executive_role: formData.role,
      lead_source: 'fit_call_form',
    });

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          companyName: formData.organization,
          jobTitle: formData.role,
          email: formData.email,
          hospitalBeds: formData.beds,
          ehrSystem: formData.ehr,
          serviceInterest: '30-Day AI Governance & Pilot Diagnostic ($6,500)',
          message: `Beds: ${formData.beds} | EHR: ${formData.ehr} | AI Tools Running: ${formData.aiToolsRunning || 'Not specified'} | Notes: ${formData.anythingElse || 'None'}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Network error submitting request');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (sourceCta: string, prefillNotes?: string) => {
    trackEvent('cta_click', {
      cta_location: sourceCta,
      target_element: '#fit-call',
    });
    if (prefillNotes) {
      setBookingMethod('form');
      setFormData((prev) => ({
        ...prev,
        beds: calcBeds === '100-199' ? '100–199' : calcBeds === '200-299' ? '200–299' : '300–400',
        ehr: calcEhr,
        aiToolsRunning: `${calcPilots} pilots reported (${calcCioStatus})`,
        anythingElse: prefillNotes,
      }));
    }
    const el = document.getElementById('fit-call');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (idx: number, questionText: string) => {
    const isOpening = openFaq !== idx;
    setOpenFaq(isOpening ? idx : null);
    if (isOpening) {
      trackEvent('faq_interaction', {
        faq_index: idx,
        faq_question: questionText,
      });
    }
  };

  const handlePhoneClick = (source: string) => {
    trackEvent('contact_phone_click', {
      phone_number: '+1 (410) 934-7773',
      source_location: source,
    });
  };

  const handleEmailClick = (source: string) => {
    trackEvent('contact_email_click', {
      email_address: 'info@nexisai.us',
      source_location: source,
    });
  };

  // Deliverables detailed data
  const deliverableDetails = [
    {
      title: '1. AI Use Inventory & Risk Tiers',
      includes: 'Every AI tool/pilot found, tiered High / Medium / Low risk using NIST AI Risk Management Framework concepts, with owner, data used, and vendor named for each.',
      decision: 'Know exactly what exists across your hospital so shadow tools stop operating without executive accountability.',
      sampleTitle: 'Sample Deliverable Excerpt: Hospital AI Register & Risk Tiers',
      sampleRows: [
        { name: 'ED Clinical Note Scribe', owner: 'Emergency Dept Director', data: 'Patient Audio & EHR Encounters', vendor: 'Clinical AI Vendor A', tier: 'High Risk', verdict: 'BAA verified; needs algorithmic bias audit for non-English speakers.' },
        { name: 'Radiology Triage AI', owner: 'Chief of Radiology', data: 'DICOM CT Scans', vendor: 'Imaging Partner B', tier: 'High Risk', verdict: 'FDA 510(k) cleared; requires clinician-in-the-loop validation sign-off.' },
        { name: 'Revenue Cycle Denial Predictor', owner: 'VP Revenue Cycle', data: 'Claims & Billing Data', vendor: 'RevCycle AI Suite', tier: 'Medium Risk', verdict: 'Approved to scale with quarterly financial false-positive audits.' },
        { name: 'Nursing Shift Scheduling Bot', owner: 'Chief Nursing Officer', data: 'Staff Shift Logs', vendor: 'Operations SaaS', tier: 'Low Risk', verdict: 'Approved to scale across all inpatient floors.' },
      ],
    },
    {
      title: '2. Kill / Scale / Fix List',
      includes: 'A decision list for every pilot: stop it, scale it, or fix it first, with the reason in one sentence each.',
      decision: 'Immediate operational clarity for clinicians and department heads on what moves forward.',
      sampleTitle: 'Sample Deliverable Excerpt: Executive Decision Matrix',
      sampleRows: [
        { name: 'Unvetted Departmental LLM Chatbot', owner: 'Nursing Operations', data: 'Policy Documents / Staff Queries', vendor: 'Consumer AI Subscription', tier: 'High Risk', verdict: 'KILL: Consumer terms allow training on internal workflows without BAA.' },
        { name: 'Clinical Documentation Assistant', owner: 'Internal Medicine Lead', data: 'EHR Ambulatory Notes', vendor: 'Epic App Orchard Partner', tier: 'Medium Risk', verdict: 'SCALE: Strong clinician adoption, verified SOC 2 Type II, and active BAA in place.' },
        { name: 'Predictive Discharge Tool', owner: 'Case Management', data: 'Inpatient Census & ADT Feed', vendor: 'Analytics Startup', tier: 'High Risk', verdict: 'FIX: Missing bias validation across patient demographics; pause live clinical use until audited.' },
      ],
    },
    {
      title: '3. 90-Day Governance Roadmap',
      includes: 'Who decides, what gets reviewed before purchase or go-live, and the 5 controls to put in place first.',
      decision: 'A repeatable intake gate preventing unvetted departmental software from entering the hospital.',
      sampleTitle: 'Sample Deliverable Excerpt: 5 Core Governance Controls',
      sampleRows: [
        { name: 'Control 1: Pre-Purchase Intake Gate', owner: 'Interim CIO & Compliance', data: 'Vendor Architecture', vendor: 'All new AI software', tier: 'Mandatory', verdict: 'Zero AI software procurement without documented risk tier and signed BAA.' },
        { name: 'Control 2: Patient PHI Boundary Check', owner: 'CISO / Privacy Officer', data: 'Protected Health Info', vendor: 'Cloud AI APIs', tier: 'Mandatory', verdict: 'Prohibit consumer AI tools from accessing clinical networks and patient identifiers.' },
        { name: 'Control 3: Executive Sponsor Registry', owner: 'CMIO / Clinical Lead', data: 'Clinical & Admin AI', vendor: 'All active pilots', tier: 'Mandatory', verdict: 'Every AI pilot must have a named department chair accountable for outputs.' },
      ],
    },
    {
      title: '4. Board One-Pager + 60-Minute Findings Briefing',
      includes: 'A one-page summary for the board and a live briefing with the CEO/Board Chair.',
      decision: 'Equips the CEO, COO, and Board with defensible oversight for regulatory, audit, and fiduciary review.',
      sampleTitle: 'Sample Deliverable Excerpt: Executive Board Readout',
      sampleRows: [
        { name: 'Total Departmental AI Pilots Identified', owner: 'Hospital Enterprise', data: '6 Departments', vendor: '8 Vendors', tier: 'Executive Metric', verdict: 'Full inventory established across ED, Radiology, Nursing, Finance, and IT.' },
        { name: 'Actionable Triage Distribution', owner: 'Executive Committee', data: 'Governance Review', vendor: 'Enterprise-wide', tier: 'Executive Metric', verdict: '2 Pilots Approved to Scale · 4 Pilots Require Immediate Fixes · 2 Shadow Tools Terminated.' },
        { name: 'Fiduciary & Regulatory Defensibility', owner: 'Board of Directors', data: 'NIST AI RMF 1.0', vendor: 'Nexis AI Readout', tier: 'Board Ready', verdict: 'Equips Board Governance Committee with clear oversight without requiring a full-time CIO.' },
      ],
    },
  ];

  // Filter sample rows in the interactive deliverables preview
  const currentDeliverable = deliverableDetails[activeDeliverablePreview];
  const filteredRows = currentDeliverable.sampleRows.filter((row) => {
    if (previewFilter === 'all') return true;
    if (previewFilter === 'high') return row.tier.toLowerCase().includes('high') || row.verdict.toLowerCase().includes('kill');
    if (previewFilter === 'medium') return row.tier.toLowerCase().includes('medium') || row.verdict.toLowerCase().includes('fix');
    if (previewFilter === 'scale') return row.tier.toLowerCase().includes('low') || row.verdict.toLowerCase().includes('scale') || row.tier.toLowerCase().includes('board') || row.tier.toLowerCase().includes('mandatory');
    return true;
  });

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-[#060D15] text-slate-100' : 'bg-white text-slate-900'} font-sans antialiased`}>
      
      {/* Top Executive Header with Dynamic Theme Switcher */}
      <header className="sticky top-0 z-40 bg-theme-header text-white border-b border-theme-header shadow-sm transition-colors duration-200">
        <nav aria-label="Main Navigation" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              Nexis AI
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-300 border-l border-slate-600 pl-3 font-normal">
              Healthcare AI Governance · MD, DC, PA, VA
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            {/* Theme Palette & Dark Mode Picker */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer text-xs"
                title="Select Theme Color Scheme"
                aria-expanded={isThemeMenuOpen}
              >
                <Palette className="w-3.5 h-3.5" />
                <span className="hidden md:inline capitalize">{theme} Theme</span>
              </button>

              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs text-slate-800 dark:text-slate-200">
                  <div className="font-bold text-[11px] uppercase tracking-wider text-slate-400 px-2 py-1">
                    Color Schemes
                  </div>
                  <button
                    type="button"
                    onClick={() => { setTheme('navy'); setIsThemeMenuOpen(false); trackEvent('theme_change', { theme: 'navy' }); }}
                    className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center justify-between cursor-pointer ${theme === 'navy' ? 'bg-slate-100 dark:bg-slate-800 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0F2A44] border border-amber-400"></span>
                      Executive Navy
                    </span>
                    {theme === 'navy' && <span className="text-amber-500 font-bold">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setTheme('teal'); setIsThemeMenuOpen(false); trackEvent('theme_change', { theme: 'teal' }); }}
                    className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center justify-between cursor-pointer ${theme === 'teal' ? 'bg-slate-100 dark:bg-slate-800 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0A2429] border border-teal-400"></span>
                      Clinical Teal
                    </span>
                    {theme === 'teal' && <span className="text-teal-400 font-bold">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setTheme('cobalt'); setIsThemeMenuOpen(false); trackEvent('theme_change', { theme: 'cobalt' }); }}
                    className={`w-full text-left px-2 py-1.5 rounded-lg flex items-center justify-between cursor-pointer ${theme === 'cobalt' ? 'bg-slate-100 dark:bg-slate-800 font-bold' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#091C36] border border-sky-400"></span>
                      Cobalt Sapphire
                    </span>
                    {theme === 'cobalt' && <span className="text-sky-400 font-bold">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={() => {
                const nextDark = !isDark;
                setIsDark(nextDark);
                trackEvent('mode_toggle', { isDark: nextDark });
              }}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-200" />}
            </button>

            <a
              href="tel:+14109347773"
              onClick={() => handlePhoneClick('header_nav')}
              className="hidden lg:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              aria-label="Direct Phone: +1 (410) 934-7773"
            >
              <Phone className="w-3.5 h-3.5 text-theme-accent" />
              <span>+1 (410) 934-7773</span>
            </a>

            <button
              onClick={() => scrollToForm('header_cta')}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-theme-accent hover:opacity-90 text-theme-accent-contrast font-bold rounded-lg text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
            >
              Book 30-min call
            </button>
          </div>
        </nav>
      </header>

      {/* Target Buyer Notice Banner */}
      <div className={`border-b text-xs text-center font-medium py-2 px-4 transition-colors ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
        <span className="font-semibold text-theme-primary dark:text-slate-100">Exclusively for Hospital Leadership:</span> CEOs, COOs, and Board Chairs of 100–400-bed community hospitals in MD, DC, PA, &amp; VA with no full-time CIO.
      </div>

      <main className="space-y-20 pb-20 executive-grid-pattern">
        
        {/* SECTION 1: HERO */}
        <section
          aria-labelledby="hero-heading"
          className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-theme-subtle text-xs font-semibold tracking-wide text-theme-primary dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-theme-accent" />
              <span>30-Day AI Governance &amp; Pilot Diagnostic</span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-theme-primary dark:text-white"
            >
              Know every AI pilot in your hospital — and which ones to stop, scale, or fix. In 30 days.
            </h1>

            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              A fixed-price diagnostic for community hospitals with no full-time CIO. One list. Risk-tiered. Board-ready.
            </p>
          </div>

          {/* Quotable About Nexis AI Callout for AI Answer Engines & Leadership */}
          <div className={`max-w-3xl mx-auto border rounded-2xl p-5 text-left text-sm leading-relaxed shadow-xs transition-colors ${isDark ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
            <div className="text-xs font-mono font-bold uppercase mb-1.5 flex items-center gap-1.5 text-theme-primary dark:text-slate-200">
              <Building2 className="w-3.5 h-3.5 text-theme-accent" />
              <span>About Nexis AI</span>
            </div>
            <p>
              Nexis AI is an executive healthcare technology advisory firm based in Ellicott City, Maryland, founded by Shafiq Rahman, MS, MBA, MCS, PMP® (former Maryland State CIO). Nexis AI offers a single engagement: the 30-Day AI Governance &amp; Pilot Diagnostic, a fixed-price ($6,500) review for community hospital leadership across Maryland, DC, Pennsylvania, and Virginia.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium">
            <button
              onClick={() => scrollToForm('hero_primary_cta')}
              className="w-full sm:w-auto px-6 py-3 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book a 30-minute fit call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#risk-calculator"
              className={`w-full sm:w-auto px-5 py-3 border rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 ${isDark ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-800'}`}
            >
              <SlidersHorizontal className="w-4 h-4 text-theme-accent" />
              <span>Estimate Hospital AI Scope</span>
            </a>
          </div>

          {/* Key Facts Metric Ribbon */}
          <div className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left text-xs ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
            <div>
              <span className="block font-mono text-sm sm:text-base font-bold text-theme-primary dark:text-slate-100">$6,500 USD</span>
              <span className="text-[11px]">Fixed One-Time Fee</span>
            </div>
            <div>
              <span className="block font-mono text-sm sm:text-base font-bold text-theme-primary dark:text-slate-100">30 Calendar Days</span>
              <span className="text-[11px]">Kickoff to Final Readout</span>
            </div>
            <div>
              <span className="block font-mono text-sm sm:text-base font-bold text-theme-primary dark:text-slate-100">Max 2 / Month</span>
              <span className="text-[11px]">Strict Capacity Cap</span>
            </div>
            <div>
              <span className="block font-mono text-sm sm:text-base font-bold text-theme-primary dark:text-slate-100">Shafiq Rahman</span>
              <span className="text-[11px]">Former Maryland State CIO</span>
            </div>
          </div>
        </section>

        {/* FOR YOU / NOT FOR YOU */}
        <section
          aria-labelledby="fit-criteria-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For you if */}
            <div className={`p-6 sm:p-8 rounded-3xl border transition-colors space-y-4 ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <h2 id="fit-criteria-heading" className="text-lg font-bold text-theme-primary dark:text-white">
                  For you if:
                </h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>You are the CEO, COO, or Board Chair of a 100–400-bed community hospital in MD, DC, PA, or VA.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>You have no full-time CIO, or an interim one.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>AI tools are already in use somewhere in the building.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>The board is being asked to approve AI spending it cannot see clearly.</span>
                </li>
              </ul>
            </div>

            {/* Not for you if */}
            <div className={`p-6 sm:p-8 rounded-3xl border transition-colors space-y-4 ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                <h2 className="text-lg font-bold text-theme-primary dark:text-white">
                  Not for you if:
                </h2>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>You already have a full-time CIO and a governed AI programme.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>You are a vendor selling an AI tool.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>You want implementation done for you — this engagement ends at the findings briefing.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: DYNAMIC HOSPITAL AI RISK & SCOPE ESTIMATOR */}
        <section
          id="risk-calculator"
          aria-labelledby="calculator-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20"
        >
          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50/90 border-slate-200'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300">
                  Interactive Scope Assessment
                </span>
                <h2
                  id="calculator-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white mt-1"
                >
                  Hospital AI Risk &amp; Governance Scope Estimator
                </h2>
                <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Select your hospital's operational profile to estimate unmanaged AI sprawl, vendor contract exposure, and board governance readiness.
                </p>
              </div>
              <div className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-lg border border-theme-subtle bg-white dark:bg-slate-800 text-theme-primary dark:text-slate-200">
                MD · DC · PA · VA
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {/* Bed Size */}
              <div className="space-y-1.5">
                <label className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Hospital Bed Size
                </label>
                <div className="space-y-1">
                  {(['100-199', '200-299', '300-400'] as const).map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setCalcBeds(b)}
                      className={`w-full py-2 px-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${calcBeds === b ? 'border-theme-accent bg-theme-subtle dark:bg-slate-800 font-bold text-theme-primary dark:text-white' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:border-slate-300'}`}
                    >
                      <span>{b} Beds</span>
                      {calcBeds === b && <span className="text-theme-accent font-bold">●</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* EHR Platform */}
              <div className="space-y-1.5">
                <label className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Primary EHR Platform
                </label>
                <div className="space-y-1">
                  {(['Epic', 'MEDITECH'] as const).map((e) => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => setCalcEhr(e)}
                      className={`w-full py-2 px-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${calcEhr === e ? 'border-theme-accent bg-theme-subtle dark:bg-slate-800 font-bold text-theme-primary dark:text-white' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:border-slate-300'}`}
                    >
                      <span>{e} EHR</span>
                      {calcEhr === e && <span className="text-theme-accent font-bold">●</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Departmental Pilots */}
              <div className="space-y-1.5">
                <label className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Active Departmental Pilots
                </label>
                <div className="space-y-1">
                  {(['1-3', '4-7', '8+'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setCalcPilots(p)}
                      className={`w-full py-2 px-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${calcPilots === p ? 'border-theme-accent bg-theme-subtle dark:bg-slate-800 font-bold text-theme-primary dark:text-white' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:border-slate-300'}`}
                    >
                      <span>{p === '8+' ? '8+ Active Pilots' : `${p} Pilots`}</span>
                      {calcPilots === p && <span className="text-theme-accent font-bold">●</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technology Leadership Status */}
              <div className="space-y-1.5">
                <label className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  IT Leadership Model
                </label>
                <div className="space-y-1">
                  {(['No full-time CIO', 'Interim CIO', 'IT Director'] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCalcCioStatus(c)}
                      className={`w-full py-2 px-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${calcCioStatus === c ? 'border-theme-accent bg-theme-subtle dark:bg-slate-800 font-bold text-theme-primary dark:text-white' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:border-slate-300'}`}
                    >
                      <span>{c}</span>
                      {calcCioStatus === c && <span className="text-theme-accent font-bold">●</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Results Card */}
            <div className={`p-6 rounded-2xl border transition-colors ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                    Estimated Unmanaged AI Spread
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-theme-primary dark:text-white font-mono">
                    {calcPilots === '1-3' ? '2–4 Ungoverned Tools' : calcPilots === '4-7' ? '5–9 Ungoverned Tools' : '10+ High-Risk Shadow Tools'}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Likely distributed across Emergency Medicine, Radiology, Case Management, and Nursing.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                    Vendor PHI / HIPAA Exposure
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-amber-500 dark:text-amber-400 font-mono">
                    {calcCioStatus === 'No full-time CIO' ? 'High Risk / Unverified' : 'Moderate / Fragmented'}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Consumer AI subscriptions and unvetted APIs risk ingesting patient identifiers without signed BAAs.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                    Recommended Executive Action
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                    30-Day Diagnostic
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    $6,500 fixed fee · 50% on booking / 50% on findings delivery · 30 calendar days.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Profile: {calcBeds} beds · {calcEhr} EHR · {calcPilots} pilots · {calcCioStatus}
                </span>
                <button
                  type="button"
                  onClick={() => scrollToForm('calculator_prefill', `Assessment Profile: ${calcBeds} beds, ${calcEhr} EHR, ${calcPilots} pilots, ${calcCioStatus}`)}
                  className="w-full sm:w-auto px-4 py-2 bg-theme-primary text-white dark:bg-slate-100 dark:text-slate-900 font-bold rounded-xl text-xs hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Pre-fill fit call with this profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE THREE PROBLEMS */}
        <section
          aria-labelledby="problems-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <div className="bg-theme-header text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl transition-colors">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase bg-theme-accent text-theme-accent-contrast px-2.5 py-0.5 rounded font-extrabold">
                The Core Challenge
              </span>
              <h2
                id="problems-heading"
                className="text-2xl sm:text-3xl font-extrabold text-white"
              >
                The 3 Core Problems Community Hospitals Face Today
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-theme-surface border border-white/10 p-6 rounded-2xl space-y-3">
                <div className="text-theme-accent font-mono text-xl font-bold">1</div>
                <h3 className="text-base font-bold text-white leading-snug">
                  Departmental AI Sprawl
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  AI pilots are running in different departments with no single inventory.
                </p>
              </div>

              <div className="bg-theme-surface border border-white/10 p-6 rounded-2xl space-y-3">
                <div className="text-theme-accent font-mono text-xl font-bold">2</div>
                <h3 className="text-base font-bold text-white leading-snug">
                  Unclear Accountability &amp; Risk
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Nobody can say which pilots are safe to scale, which should be stopped, and who is accountable if one goes wrong.
                </p>
              </div>

              <div className="bg-theme-surface border border-white/10 p-6 rounded-2xl space-y-3">
                <div className="text-theme-accent font-mono text-xl font-bold">3</div>
                <h3 className="text-base font-bold text-white leading-snug">
                  Unanchored Board Spending
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  The board is being asked to approve AI spending without a risk-tiered, costed list.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT THE BUYER GETS (TABLE + INTERACTIVE PREVIEW & FILTER) */}
        <section
          aria-labelledby="deliverables-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300">
              Tangible Outcomes
            </span>
            <h2
              id="deliverables-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              What You Get: Four Board-Ready Deliverables
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              No theoretical slide decks. You receive four executive artifacts designed for fast leadership decision-making.
            </p>
          </div>

          {/* Deliverables Overview Table */}
          <div className={`overflow-x-auto border rounded-2xl shadow-xs transition-colors ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-theme-header text-white text-xs font-bold uppercase tracking-wider">
                  <th scope="col" className="p-4 sm:p-5 w-1/4">Deliverable</th>
                  <th scope="col" className="p-4 sm:p-5 w-2/4">What It Includes</th>
                  <th scope="col" className="p-4 sm:p-5 w-1/4">Decision It Enables</th>
                </tr>
              </thead>
              <tbody className={`divide-y text-sm ${isDark ? 'divide-slate-800 bg-slate-900/60' : 'divide-slate-200 bg-white'}`}>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-theme-primary dark:text-white align-top">
                    1. AI Use Inventory &amp; Risk Tiers
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 align-top">
                    Every AI tool/pilot found, tiered High / Medium / Low risk using NIST AI Risk Management Framework concepts, with owner, data used, and vendor named for each.
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-slate-800 dark:text-slate-200 align-top">
                    Stop shadow AI and know what exists.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-theme-primary dark:text-white align-top">
                    2. Kill / Scale / Fix List
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 align-top">
                    A decision list for every pilot: stop it, scale it, or fix it first, with the reason in one sentence each.
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-slate-800 dark:text-slate-200 align-top">
                    Clear marching orders for clinicians and IT.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-theme-primary dark:text-white align-top">
                    3. 90-Day Governance Roadmap
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 align-top">
                    Who decides, what gets reviewed before purchase or go-live, and the 5 controls to put in place first.
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-slate-800 dark:text-slate-200 align-top">
                    A repeatable intake gate so new tools don't slip in.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-theme-primary dark:text-white align-top">
                    4. Board One-Pager + 60-Minute Findings Briefing
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-300 align-top">
                    A one-page summary for the board and a live briefing with the CEO/Board Chair.
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-slate-800 dark:text-slate-200 align-top">
                    Board-ready clarity to approve or reject spend.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive Deliverable Deep-Dive & Sample Viewer */}
          <div className={`border rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300">
                  Interactive Preview
                </span>
                <h3 className="text-base font-bold text-theme-primary dark:text-white">
                  {deliverableDetails[activeDeliverablePreview].sampleTitle}
                </h3>
              </div>

              {/* Deliverable Selector Tabs */}
              <div className="flex flex-wrap gap-1">
                {deliverableDetails.map((item, tabIdx) => (
                  <button
                    key={tabIdx}
                    onClick={() => {
                      setActiveDeliverablePreview(tabIdx);
                      trackEvent('deliverable_tab_switch', { tab_index: tabIdx, title: item.title });
                    }}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      activeDeliverablePreview === tabIdx
                        ? 'bg-theme-header text-white font-bold shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
                    }`}
                  >
                    Deliverable {tabIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Risk Level */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-mono">Filter Sample:</span>
              {(['all', 'high', 'medium', 'scale'] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setPreviewFilter(f)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${previewFilter === f ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {f === 'all' ? 'All Rows' : f === 'high' ? 'High Risk / Kill' : f === 'medium' ? 'Medium Risk / Fix' : 'Scale / Approved'}
                </button>
              ))}
            </div>

            <div className={`overflow-x-auto border rounded-xl ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className={`font-mono uppercase text-[11px] ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200/80 text-slate-800'}`}>
                    <th className="p-2.5">Pilot / System</th>
                    <th className="p-2.5">Sponsor / Owner</th>
                    <th className="p-2.5">Data Scope</th>
                    <th className="p-2.5">Vendor Status</th>
                    <th className="p-2.5">Risk Tier / Metric</th>
                    <th className="p-2.5">Diagnostic Finding</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isDark ? 'divide-slate-800 bg-slate-900' : 'divide-slate-200 bg-white'}`}>
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, rIdx) => (
                      <tr key={rIdx} className={isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'}>
                        <td className="p-2.5 font-bold text-theme-primary dark:text-white">{row.name}</td>
                        <td className="p-2.5 text-slate-700 dark:text-slate-300">{row.owner}</td>
                        <td className="p-2.5 text-slate-600 dark:text-slate-400 font-mono text-[11px]">{row.data}</td>
                        <td className="p-2.5 text-slate-600 dark:text-slate-400">{row.vendor}</td>
                        <td className="p-2.5 font-semibold text-slate-900 dark:text-slate-100">{row.tier}</td>
                        <td className="p-2.5 text-slate-700 dark:text-slate-300 font-medium">{row.verdict}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-4 text-center text-slate-500 italic">
                        No rows match this filter in Deliverable {activeDeliverablePreview + 1}. Switch to "All Rows" above.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 italic pt-1">
              * Illustrative format delivered directly to the CEO, COO, and Board in the diagnostic readout package.
            </p>
          </div>
        </section>

        {/* SECTION 5: HOW IT WORKS (INTERACTIVE 4-WEEK STEPPER) */}
        <section
          aria-labelledby="timeline-heading"
          className={`py-16 px-4 sm:px-6 lg:px-8 border-y transition-colors ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}
        >
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300">
                The 30-Day Calendar
              </span>
              <h2
                id="timeline-heading"
                className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
              >
                How It Works: Four Weeks From Kickoff to Final Readout
              </h2>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                A tight, bounded process that respects clinician and executive schedules.
              </p>
            </div>

            {/* Interactive Week Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  week: 1,
                  days: 'Days 01–07',
                  title: 'Inventory',
                  summary: 'Shafiq interviews up to 5 people (CEO/COO, interim CIO/IT lead, CMIO or clinical lead, CISO/security lead, compliance/privacy lead), 45 minutes each, and reviews the AI tool list, vendor contracts, and existing policies the hospital provides.',
                  milestone: '5 interviews completed · Master register initiated',
                },
                {
                  week: 2,
                  days: 'Days 08–14',
                  title: 'Risk Tiering',
                  summary: 'Every item tiered; gaps in ownership, data use, and vendor terms flagged against NIST AI Risk Management Framework criteria.',
                  milestone: 'NIST AI RMF classification · BAA gap analysis',
                },
                {
                  week: 3,
                  days: 'Days 15–21',
                  title: 'Draft Findings',
                  summary: 'Kill/Scale/Fix list and 90-day roadmap drafted; one 30-minute check-in with the sponsor to align findings.',
                  milestone: 'Kill/Scale/Fix drafted · 30-min sponsor sync',
                },
                {
                  week: 4,
                  days: 'Days 22–30',
                  title: 'Findings Briefing',
                  summary: '60-minute briefing + board one-pager delivered. Engagement ends. A retainer is offered only if the buyer asks — do not sell it on this page.',
                  milestone: 'Board one-pager delivered · 60-min live briefing',
                },
              ].map((step) => (
                <div
                  key={step.week}
                  onClick={() => setActiveTimelineWeek(step.week)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                    activeTimelineWeek === step.week
                      ? 'border-theme-accent ring-1 ring-theme-accent bg-white dark:bg-slate-800 shadow-sm'
                      : isDark
                      ? 'border-slate-800 bg-slate-900/90 hover:border-slate-700'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold uppercase px-2 py-0.5 rounded ${activeTimelineWeek === step.week ? 'bg-theme-accent text-theme-accent-contrast' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'}`}>
                      Week {step.week}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{step.days}</span>
                  </div>
                  <h3 className="text-base font-bold text-theme-primary dark:text-white">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.summary}
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{step.milestone}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* What the Buyer Must Provide Box */}
            <div className={`border rounded-2xl p-6 sm:p-8 space-y-4 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'}`}>
              <h3 className="text-base font-bold text-theme-primary dark:text-white uppercase tracking-wide">
                What the Buyer Must Provide:
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                List of AI tools in use, vendor contracts, current AI/data policies (if any), and access to the 5 interviewees.
              </p>
              <div className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-900'}`}>
                <Clock className="w-4 h-4 text-theme-accent shrink-0" />
                <span>Total executive time asked: about 4 hours over 30 days.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: PRICE & OFFER */}
        <section
          aria-labelledby="pricing-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <div className="bg-theme-header text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono uppercase bg-theme-accent text-theme-accent-contrast px-2.5 py-1 rounded font-extrabold">
                  The Offer
                </span>
                <h2
                  id="pricing-heading"
                  className="text-2xl sm:text-4xl font-extrabold text-white mt-2"
                >
                  30-Day AI Governance &amp; Pilot Diagnostic
                </h2>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-3xl sm:text-4xl font-black text-theme-accent font-mono">
                  $6,500
                </div>
                <div className="text-xs text-amber-300 font-medium mt-1">
                  Now booking: November 2026 — maximum 2 diagnostics per month.
                </div>
                <div className="text-xs text-slate-300 font-mono mt-0.5">
                  One-time fixed fee
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <h3 className="font-bold text-theme-accent uppercase text-xs tracking-wider">
                  Payment &amp; Terms:
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>50% on booking</strong> and <strong>50% on delivery</strong> of the findings briefing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Fixed 30 calendar days</strong> from kickoff.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>No retainer required.</strong> No implementation included.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-theme-accent uppercase text-xs tracking-wider">
                  Capacity &amp; Execution:
                </h3>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Maximum 2 diagnostics per month.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Shafiq does the work himself</strong> — no subcontractors, no junior team.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm font-semibold text-slate-200">
                  Fixed price. Fixed 30 days. No surprise fees.
                </div>
                <button
                  onClick={() => scrollToForm('pricing_card_cta')}
                  className="w-full sm:w-auto px-6 py-3 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow cursor-pointer"
                >
                  Book a 30-minute fit call
                </button>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                On time, or the second half is waived. The findings briefing is delivered within 30 calendar days of kickoff. If it runs more than 5 business days past day 30 for reasons within Nexis AI's control, the final 50% payment is waived — and the diagnostic is still delivered in full. Delays caused by interview scheduling or document access extend the window day for day.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: ABOUT SHAFIQ */}
        <section
          aria-labelledby="bio-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300">
              Leadership
            </span>
            <h2
              id="bio-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              About Shafiq Rahman
            </h2>
          </div>

          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-start transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="shrink-0 mx-auto md:mx-0">
              <img
                src="/profile_circle.png"
                alt="Shafiq Rahman, MS, MBA, MCS, PMP - Former Maryland State CIO"
                width={128}
                height={128}
                loading="eager"
                decoding="async"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-theme-primary dark:border-slate-700 shadow-md object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-theme-primary dark:text-white">
                  Shafiq Rahman, MS, MBA, MCS, PMP®
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Former Maryland State CIO · Founder &amp; Principal, Nexis AI
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  <strong>State CIO / Chief Information &amp; Digital Transformation Officer</strong>, Maryland Department of Transportation, October 2023–January 2026. Led a $250M+ IT enterprise, ~1,500 staff across six agencies; co-authored Maryland's first statewide AI governance policy as a member of the Governor's AI Sub-cabinet; modernized mainframe systems to Microsoft Azure; rationalized ~850 applications to ~620, generating ~$6M in recurring annual savings.
                </p>
                <p>
                  <strong>Director of Enterprise IT</strong>, University of Maryland School of Medicine, October 2014–October 2023. Led the MEDITECH-to-Epic migration and clinical data interoperability across seven hospitals under HIPAA/HITECH.
                </p>
                <p>
                  <strong>Founder &amp; Principal</strong>, Nexis AI, March 2026–present. Focuses exclusively on AI governance diagnostics for community healthcare systems.
                </p>
                <p>
                  <strong>Education &amp; Credentials:</strong> MS in Management Information Systems, University of Maryland Global Campus (2021); MBA (2008) and Master of Computer Science (2001), Al-Khair University; PMP® certified. Author of <em>"AI Governance: A Local Government Leader's Guide"</em> (ICMA, March 2024).
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <a
                  href="https://icma.org/articles/pm-magazine/ai-governance-local-government-leaders-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('outbound_click', { resource: 'icma_guide' })}
                  className="text-theme-primary dark:text-theme-accent font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>ICMA Guide on AI Governance</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
                <a
                  href="https://www.linkedin.com/in/shafiq-rahman-maryland/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('outbound_click', { resource: 'linkedin_profile' })}
                  className="text-theme-primary dark:text-theme-accent font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Shafiq Rahman on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: EXECUTIVE ARTIFACT — 5-POINT AI GOVERNANCE CHECKLIST FOR COMMUNITY HOSPITAL BOARDS */}
        <section
          id="board-checklist"
          aria-labelledby="checklist-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6"
        >
          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300">
                  Executive Resource · Board Governance
                </span>
                <h2
                  id="checklist-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white mt-1"
                >
                  5-Point AI Governance Checklist for Hospital Boards
                </h2>
                <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  A defensible evaluation framework for CEOs, COOs, and Trustees of 100–400-bed hospitals before authorizing departmental AI tools or capital budgets.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  trackEvent('artifact_action', { action: 'print_checklist', artifact: 'hospital_board_ai_checklist' });
                  window.print();
                }}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 border rounded-xl text-xs font-bold transition-colors cursor-pointer ${isDark ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'}`}
                aria-label="Print or Save Checklist as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-theme-accent" />
                <span>Print / Save PDF</span>
              </button>
            </div>

            {/* Live Progress Meter */}
            <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 text-xs ${isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="space-y-0.5">
                <span className="font-bold text-theme-primary dark:text-white">
                  Board Audit Readiness Meter: {completedChecklistCount} of 5 Controls Checked
                </span>
                <p className="text-slate-500 text-[11px]">
                  {completedChecklistCount === 5
                    ? 'Excellent: Hospital maintains comprehensive AI governance oversight.'
                    : completedChecklistCount >= 3
                    ? 'Moderate: Key vendor or clinical boundaries require formal risk tiering.'
                    : 'Critical Gap: Departmental AI pilots are operating without defensible board oversight.'}
                </p>
              </div>
              <div className="shrink-0 font-mono text-sm font-bold text-theme-accent">
                {completedChecklistCount * 20}%
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  index: 0,
                  number: '01',
                  title: 'Comprehensive Departmental AI Inventory & Executive Sponsor',
                  detail: 'Does the hospital maintain a unified register of every AI tool and pilot in active use across clinical departments (Nursing, Radiology, ED) and administrative units, with a named department chair or executive accountable for each?',
                  control: 'Control: Zero uninventoried software. Every tool has a documented clinical or administrative sponsor.',
                },
                {
                  index: 1,
                  number: '02',
                  title: 'HIPAA PHI Boundary Enforcement & Executed BAA',
                  detail: 'Has legal or compliance verified that an executed Business Associate Agreement (BAA) is in place for every third-party AI system, and that consumer AI tools without enterprise BAA boundaries are blocked from accessing patient data?',
                  control: 'Control: Signed BAA required. Model training on hospital patient PHI strictly prohibited in contract terms.',
                },
                {
                  index: 2,
                  number: '03',
                  title: 'NIST AI RMF Risk Tiering (High / Medium / Low)',
                  detail: 'Is every AI system classified under established risk frameworks (e.g., NIST AI Risk Management Framework 1.0) evaluating clinical reliance, patient safety impacts, algorithmic bias, and EHR data exchange boundaries?',
                  control: 'Control: Clinical diagnostic reliance classified as High Risk; ambient transcription with clinician sign-off as Medium Risk.',
                },
                {
                  index: 3,
                  number: '04',
                  title: 'Defensible Decision Triage (Kill / Scale / Fix)',
                  detail: 'Does hospital leadership have a formal triage mechanism to stop unapproved consumer AI subscriptions, mandate bias or security remediation before expansion, and scale only compliant, high-yield tools?',
                  control: 'Control: Clear action verdict for every pilot before contract renewal or departmental budget expansion.',
                },
                {
                  index: 4,
                  number: '05',
                  title: 'Pre-Purchase Intake Gate for Board Budget Authorizations',
                  detail: 'Is there a mandatory policy ensuring that no departmental AI software purchase request reaches the board for financial approval without prior risk tiering and architectural validation?',
                  control: 'Control: Risk-tiered one-pager accompanying every AI-related capital or operational expenditure request.',
                },
              ].map((item) => (
                <div
                  key={item.index}
                  onClick={() => toggleChecklistItem(item.index)}
                  className={`border rounded-2xl p-4 sm:p-5 space-y-2 transition-colors cursor-pointer ${
                    checkedItems[item.index]
                      ? isDark
                        ? 'border-emerald-600/60 bg-emerald-950/20'
                        : 'border-emerald-300 bg-emerald-50/50'
                      : isDark
                      ? 'border-slate-800 bg-slate-800/40 hover:border-slate-700'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <button
                      type="button"
                      aria-label={`Toggle control ${item.number}`}
                      className="mt-0.5 shrink-0 focus:outline-none"
                    >
                      {checkedItems[item.index] ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <span className="w-5 h-5 rounded-md border border-slate-300 dark:border-slate-600 inline-block bg-white dark:bg-slate-800" />
                      )}
                    </button>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                          {item.number}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-theme-primary dark:text-white leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.detail}
                      </p>
                      <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        <span>{item.control}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Board Checklist PDF Line */}
            <div className={`p-4 rounded-xl border text-xs sm:text-sm text-center sm:text-left transition-colors ${isDark ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
              Want the checklist as a one-page PDF for your next board meeting? Email <a href="mailto:info@nexisai.us?subject=Board%20checklist" onClick={() => handleEmailClick('board_checklist_pdf')} className="text-theme-primary dark:text-theme-accent font-semibold underline">info@nexisai.us</a> with subject 'Board checklist' and Shafiq will send it.
            </div>

            <div className={`p-4 border rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="text-xs text-slate-600 dark:text-slate-300">
                Need an independent assessment of your hospital’s AI pilots against this checklist?
              </div>
              <button
                type="button"
                onClick={() => scrollToForm('checklist_cta', `Checked Controls: ${completedChecklistCount}/5 completed`)}
                className="w-full sm:w-auto px-4 py-2 bg-theme-accent hover:opacity-95 text-theme-accent-contrast rounded-xl text-xs font-bold transition-opacity cursor-pointer"
              >
                Book a 30-minute fit call
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 9: BOOK A 30-MINUTE FIT CALL (CAL.COM EMBED + REQUEST FORM) */}
        <section
          id="fit-call"
          aria-labelledby="lead-capture-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24"
        >
          <div className={`border-2 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6 transition-colors ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-theme-primary'}`}>
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-white bg-theme-primary px-3 py-1 rounded-full">
                Direct Engagement
              </span>
              <h2
                id="lead-capture-heading"
                className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
              >
                Book a 30-minute fit call
              </h2>
              <p className={`text-sm max-w-lg mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Discuss your hospital's situation directly with Shafiq Rahman. No sales pressure, no junior teams.
              </p>
            </div>

            {/* What happens on the fit call */}
            <div className={`p-5 rounded-2xl border max-w-xl mx-auto space-y-3 text-left transition-colors ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary dark:text-theme-accent">
                What happens on the fit call:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-theme-accent font-bold mt-0.5">•</span>
                  <span>You describe the pilots you know about, in plain terms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-theme-accent font-bold mt-0.5">•</span>
                  <span>Shafiq tells you honestly whether the diagnostic fits — including when it does not.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-theme-accent font-bold mt-0.5">•</span>
                  <span>If it fits, you agree a kickoff week; 50% is due on booking.</span>
                </li>
              </ul>
            </div>

            {/* Booking Mode Selector */}
            <div className="flex items-center justify-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl max-w-xs sm:max-w-sm mx-auto text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setBookingMethod('calendar');
                  trackEvent('booking_mode_switch', { mode: 'calendar' });
                }}
                className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  bookingMethod === 'calendar'
                    ? 'bg-white dark:bg-slate-700 text-theme-primary dark:text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                <span>Schedule Online</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setBookingMethod('form');
                  trackEvent('booking_mode_switch', { mode: 'form' });
                }}
                className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  bookingMethod === 'form'
                    ? 'bg-white dark:bg-slate-700 text-theme-primary dark:text-white shadow-xs font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-theme-accent" />
                <span>Request Form</span>
              </button>
            </div>

            {/* Option A: Cal.com Inline Scheduler */}
            <div style={{ display: bookingMethod === 'calendar' ? 'block' : 'none' }} className="space-y-4">
              <div className={`rounded-2xl border p-2 sm:p-4 overflow-hidden transition-colors ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
                <div
                  id="my-cal-inline-30min"
                  style={{ width: '100%', height: '100%', minHeight: '680px', overflow: 'scroll' }}
                />
              </div>
              <p className="text-center text-xs text-slate-500">
                Direct 30-minute fit call with Shafiq Rahman. Instant meeting confirmation sent to your email.
              </p>
            </div>

            {/* Option B: Direct Fit-Call Request Form */}
            <div style={{ display: bookingMethod === 'form' ? 'block' : 'none' }}>
              {isSubmitted ? (
                <div className={`border-2 rounded-2xl p-6 sm:p-8 text-center space-y-4 ${isDark ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200' : 'bg-emerald-50 border-emerald-500 text-emerald-950'}`}>
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold">
                    Thank you — Shafiq will reply within 2 business days to schedule a 30-minute fit call.
                  </h3>
                  <p className="text-sm max-w-md mx-auto">
                    If you prefer to pick an immediate time slot on the calendar:
                  </p>
                  <button
                    type="button"
                    onClick={() => setBookingMethod('calendar')}
                    className="px-4 py-2 bg-theme-accent text-theme-accent-contrast font-bold text-xs rounded-xl shadow cursor-pointer"
                  >
                    Open Live Cal.com Scheduler
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                      >
                        Your Name *
                      </label>
                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-org"
                        className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                      >
                        Hospital / Organization *
                      </label>
                      <input
                        id="form-org"
                        name="organization"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Community Health System"
                        className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-role"
                        className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                      >
                        Your Role *
                      </label>
                      <select
                        id="form-role"
                        name="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      >
                        <option value="CEO">Chief Executive Officer (CEO)</option>
                        <option value="COO">Chief Operating Officer (COO)</option>
                        <option value="Board Chair">Board Chair / Trustee</option>
                        <option value="Interim CIO">Interim CIO / IT Lead</option>
                        <option value="CMIO">CMIO / Clinical Lead</option>
                        <option value="CFO">CFO / Executive Leadership</option>
                        <option value="Other">Other Hospital Leader</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                      >
                        Work Email *
                      </label>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jdoe@hospital.org"
                        className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-beds"
                        className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                      >
                        Bed Size *
                      </label>
                      <select
                        id="form-beds"
                        name="beds"
                        value={formData.beds}
                        onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                        className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      >
                        <option value="100–199">100–199 beds</option>
                        <option value="200–299">200–299 beds</option>
                        <option value="300–400">300–400 beds</option>
                        <option value="Other">Other / Regional Health System</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="form-ehr"
                        className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                      >
                        Primary EHR *
                      </label>
                      <select
                        id="form-ehr"
                        name="ehr"
                        value={formData.ehr}
                        onChange={(e) => setFormData({ ...formData, ehr: e.target.value })}
                        className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      >
                        <option value="Epic">Epic</option>
                        <option value="MEDITECH">MEDITECH</option>
                        <option value="Both">Both (Migration / Mixed)</option>
                        <option value="Other">Other EHR Platform</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="form-tools"
                      className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                    >
                      AI Tools / Pilots Currently Running (optional)
                    </label>
                    <input
                      id="form-tools"
                      name="aiToolsRunning"
                      type="text"
                      value={formData.aiToolsRunning}
                      onChange={(e) => setFormData({ ...formData, aiToolsRunning: e.target.value })}
                      placeholder="e.g., Ambient clinical notes, Radiology triage, RevCycle denial predictor..."
                      className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-notes"
                      className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                    >
                      Anything else Shafiq should know? (optional)
                    </label>
                    <textarea
                      id="form-notes"
                      name="anythingElse"
                      rows={3}
                      value={formData.anythingElse}
                      onChange={(e) => setFormData({ ...formData, anythingElse: e.target.value })}
                      placeholder="Any specific upcoming board meetings or active vendor renewals..."
                      className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-extrabold rounded-xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting request...</span>
                      ) : (
                        <>
                          <span>Submit Request — Shafiq replies within 2 business days</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-2">
                      Direct confidential review. Or switch above to pick a calendar time slot immediately.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Contact Links */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
              <span>Prefer to reach out directly?</span>
              <div className="flex items-center gap-4 font-semibold text-theme-primary dark:text-slate-200">
                <a
                  href="tel:+14109347773"
                  onClick={() => handlePhoneClick('fit_call_footer')}
                  className="flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-theme-accent" />
                  <span>+1 (410) 934-7773</span>
                </a>
                <span>·</span>
                <a
                  href="mailto:info@nexisai.us"
                  onClick={() => handleEmailClick('fit_call_footer')}
                  className="flex items-center gap-1 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5 text-theme-accent" />
                  <span>info@nexisai.us</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300">
              Common Inquiries
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Do we need a full-time CIO first?',
                a: 'No — that is the point. This diagnostic is built specifically for community hospitals and health systems operating with an interim CIO, IT director, or no full-time technology executive. It gives leadership and the board fast clarity without having to recruit a full-time executive first.',
              },
              {
                q: 'Will this slow down our clinicians?',
                a: 'No — it gives them a clear yes/no list. Clinicians and department heads get rapid certainty on which tools are approved to use, which need data protection fixes first, and which should not be used, eliminating friction and compliance confusion.',
              },
              {
                q: 'Do you implement the fixes?',
                a: 'No — the diagnostic ends with the 60-minute findings briefing and board one-pager. Implementation is a separate decision for your hospital leadership and internal teams.',
              },
              {
                q: 'What if we find no AI in use?',
                a: 'Then the inventory and the purchase/go-live controls are still delivered, and the price does not change. Your hospital receives the 5 baseline governance controls and pre-purchase evaluation framework so you are fully prepared when departmental requests arise.',
              },
              {
                q: 'Who does the work?',
                a: 'Shafiq himself. Every interview, document review, risk evaluation, and briefing is conducted personally by Shafiq Rahman. There are no junior analysts, outsourced contractors, or delegated teams.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className={`border rounded-xl overflow-hidden shadow-2xs transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx, faq.q)}
                  className={`w-full p-5 text-left font-bold flex items-center justify-between gap-4 transition-colors cursor-pointer text-sm sm:text-base ${isDark ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-50'}`}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-theme-accent' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className={`p-5 pt-0 text-sm leading-relaxed border-t ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-600'}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-theme-header text-white border-t border-theme-header py-12 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-1">
              <span className="text-xl font-bold font-mono text-white">Nexis AI</span>
              <p className="text-xs text-slate-300">
                Healthcare AI Governance Advisory · Founded by Shafiq Rahman, Former Maryland State CIO
              </p>
              <p className="text-xs text-slate-400">
                Ellicott City, Howard County, MD 21042 · Serving MD, DC, PA, VA
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-semibold">
              <a
                href="tel:+14109347773"
                onClick={() => handlePhoneClick('footer')}
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
                aria-label="Direct Phone: +1 (410) 934-7773"
              >
                <Phone className="w-3.5 h-3.5 text-theme-accent" />
                <span>+1 (410) 934-7773</span>
              </a>
              <span className="hidden sm:inline text-slate-600">·</span>
              <a
                href="mailto:info@nexisai.us"
                onClick={() => handleEmailClick('footer')}
                className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
                aria-label="Email: info@nexisai.us"
              >
                <Mail className="w-3.5 h-3.5 text-theme-accent" />
                <span>info@nexisai.us</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Nexis AI. All rights reserved. 30-Day AI Governance &amp; Pilot Diagnostic ($6,500).</p>
            <div className="flex items-center gap-4">
              <a
                href="https://icma.org/articles/pm-magazine/ai-governance-local-government-leaders-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ICMA AI Guide
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/shafiq-rahman-maryland/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a href="/robots.txt" className="hover:text-white transition-colors">
                Robots.txt
              </a>
              <span>·</span>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </a>
              <span>·</span>
              <a href="/llms.txt" className="hover:text-white transition-colors">
                llms.txt
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
