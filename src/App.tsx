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
  GraduationCap,
  BookOpen,
  Cpu,
  Briefcase,
  Landmark,
  Activity,
  FileCheck2,
  Headphones,
  ShieldAlert,
  Server,
  Menu,
  X,
  MapPin,
} from 'lucide-react';
import { ExecutiveITMaturityAssessment } from './components/ExecutiveITMaturityAssessment';

const CAL_BOOKING_BASE_URL = 'https://cal.com/shafiq-rahman-gxhxcu/30min';

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

type ThemePalette = 'cyan' | 'cobalt' | 'emerald' | 'amber';

export default function App() {
  // Dynamic Theme and Dark/Light Mode state
  const [theme, setTheme] = useState<ThemePalette>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('nexis_theme_palette');
      if (stored === 'cyan' || stored === 'cobalt' || stored === 'emerald' || stored === 'amber') {
        return stored;
      }
    }
    return 'cyan';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('nexis_dark_mode');
      if (stored !== null) return stored === 'true';
    }
    return true; // Default to sleek executive dark mode for high-impact AI aesthetic
  });

  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Digital Marketing & Outreach Attribution State (UTM parameters)
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const search = new URLSearchParams(window.location.search);
      const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref'];
      const captured: Record<string, string> = {};
      keys.forEach((k) => {
        const val = search.get(k);
        if (val) captured[k] = val;
      });
      if (Object.keys(captured).length > 0) {
        sessionStorage.setItem('nexis_utm_attribution', JSON.stringify(captured));
        setUtmParams(captured);
        trackEvent('campaign_landing', captured);
      } else {
        try {
          const saved = sessionStorage.getItem('nexis_utm_attribution');
          if (saved) setUtmParams(JSON.parse(saved));
        } catch {
          // ignore storage error
        }
      }
    }
  }, []);

  const getCalUrl = (sourceTag?: string) => {
    const params = new URLSearchParams(utmParams);
    if (sourceTag) params.set('utm_content', sourceTag);
    const qs = params.toString();
    return qs ? `${CAL_BOOKING_BASE_URL}?${qs}` : CAL_BOOKING_BASE_URL;
  };

  // Sync theme changes with DOM and localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nexis_theme_palette', theme);
      localStorage.setItem('nexis_dark_mode', String(isDark));
      
      const root = document.documentElement;
      root.classList.remove('theme-cyan', 'theme-cobalt', 'theme-emerald', 'theme-amber', 'theme-teal');
      if (theme === 'cyan') root.classList.add('theme-cyan');
      if (theme === 'cobalt') root.classList.add('theme-cobalt');
      if (theme === 'emerald') root.classList.add('theme-emerald');
      if (theme === 'amber') root.classList.add('theme-amber');

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
    serviceInterest: '30-Day AI Governance & Pilot Diagnostic ($6,500)',
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
  const [activeManagedService, setActiveManagedService] = useState<'all' | 'helpdesk' | 'soc' | 'infrastructure'>('all');

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

  // Executive Service Selection Modal State
  const [selectedProductModal, setSelectedProductModal] = useState<string | null>(null);
  const [modalFormData, setModalFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isModalSubmitting, setIsModalSubmitting] = useState(false);
  const [modalSuccessMessage, setModalSuccessMessage] = useState('');

  const openProductModal = (productName: string) => {
    trackEvent('product_modal_open', { product: productName });
    setSelectedProductModal(productName);
    setModalSuccessMessage('');
  };

  const closeProductModal = () => {
    setSelectedProductModal(null);
    setModalSuccessMessage('');
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalSubmitting(true);
    trackEvent('generate_lead', {
      lead_source: 'service_inquiry_modal',
      service_name: selectedProductModal || 'General Executive Advisory',
      organization: modalFormData.organization || 'Inquiring Enterprise',
      email: modalFormData.email,
    });
    try {
      await fetch('/api/it-maturity-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organization: modalFormData.organization || 'Inquiring Enterprise',
          evaluator: modalFormData.fullName || 'Executive Leader',
          title: 'Executive Leader',
          email: modalFormData.email,
          phone: modalFormData.phone,
          date: new Date().toISOString().split('T')[0],
          selectedChecks: [`Service Inquired: ${selectedProductModal}`],
          actionRequested: `Direct inquiry for ${selectedProductModal}: ${modalFormData.notes || 'No extra notes'}`,
        }),
      });
      setModalSuccessMessage('Thank you! Shafiq Rahman has received your inquiry directly and will respond within 1 business day.');
    } catch {
      setModalSuccessMessage('Thank you! Your inquiry has been registered. You can also pick a calendar slot directly below.');
    } finally {
      setIsModalSubmitting(false);
    }
  };

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
      service_name: formData.serviceInterest || '30-Day AI Governance & Pilot Diagnostic',
      value: formData.serviceInterest.includes('Diagnostic') ? 6500 : undefined,
      currency: 'USD',
      hospital_beds: formData.beds,
      ehr_system: formData.ehr,
      executive_role: formData.role,
      lead_source: 'fit_call_form',
      ...utmParams,
    });

    try {
      const utmSummary = Object.keys(utmParams).length > 0 ? ` | Attribution: ${JSON.stringify(utmParams)}` : '';
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
          serviceInterest: formData.serviceInterest || '30-Day AI Governance & Pilot Diagnostic ($6,500)',
          message: `Service: ${formData.serviceInterest} | Beds/Scope: ${formData.beds} | EHR/ERP: ${formData.ehr} | AI Tools Running: ${formData.aiToolsRunning || 'Not specified'} | Notes: ${formData.anythingElse || 'None'}${utmSummary}`,
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
        { name: 'Clinical Documentation Assistant', owner: 'Internal Medicine Lead', data: 'EHR Ambulatory Notes', vendor: 'Epic App Orchard Partner', tier: 'Medium Risk', verdict: 'SCALE: Strong clinician adoption, clinical validation, and active BAA in place.' },
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
      
      {/* Top Executive Header with Portfolio Navigation */}
      <header className="sticky top-0 z-40 bg-theme-header text-white border-b border-theme-header shadow-sm transition-colors duration-200">
        <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#diagnostic" className="text-xl font-bold tracking-tight text-white font-mono whitespace-nowrap shrink-0">
            Nexis AI
          </a>

          {/* Primary Single-Line Portfolio Links */}
          <div className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-300">
            <a href="#diagnostic" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Diagnostic</a>
            <a href="#fractional-cio" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Fractional CIO</a>
            <a href="#managed-services" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Managed Services</a>
            <a href="#managed-ai-governance" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Managed AI Governance</a>
            <a href="#public-sector" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Public Sector</a>
            <a href="#higher-ed" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Higher Education</a>
            <a href="#about" className="hover:text-white transition-colors whitespace-nowrap shrink-0">About</a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Contact</a>
          </div>

          <div className="flex items-center gap-2 text-xs shrink-0">
            {/* Theme Palette & Dark Mode Picker */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="inline-flex items-center gap-1 p-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-white transition-all cursor-pointer"
                title="Select Executive Theme Palette"
                aria-label="Select Theme Palette"
                aria-expanded={isThemeMenuOpen}
              >
                <Palette className="w-3.5 h-3.5 text-theme-accent" />
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-xl shadow-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-2 z-50 text-xs text-slate-200">
                  <div className="font-mono font-bold text-[10px] uppercase tracking-wider text-slate-400 px-2 py-1">
                    Color Palettes
                  </div>
                  <button
                    type="button"
                    onClick={() => { setTheme('cyan'); setIsThemeMenuOpen(false); trackEvent('theme_change', { theme: 'cyan' }); }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${theme === 'cyan' ? 'bg-cyan-950/60 text-cyan-200 font-bold border border-cyan-800/50' : 'hover:bg-slate-800 text-slate-300'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]"></span>
                      Neural Cyan
                    </span>
                    {theme === 'cyan' && <span className="text-cyan-400 font-bold">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setTheme('cobalt'); setIsThemeMenuOpen(false); trackEvent('theme_change', { theme: 'cobalt' }); }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${theme === 'cobalt' ? 'bg-blue-950/60 text-blue-200 font-bold border border-blue-800/50' : 'hover:bg-slate-800 text-slate-300'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
                      Hyper Cobalt
                    </span>
                    {theme === 'cobalt' && <span className="text-sky-400 font-bold">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setTheme('emerald'); setIsThemeMenuOpen(false); trackEvent('theme_change', { theme: 'emerald' }); }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${theme === 'emerald' ? 'bg-emerald-950/60 text-emerald-200 font-bold border border-emerald-800/50' : 'hover:bg-slate-800 text-slate-300'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                      Sovereign Emerald
                    </span>
                    {theme === 'emerald' && <span className="text-emerald-400 font-bold">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setTheme('amber'); setIsThemeMenuOpen(false); trackEvent('theme_change', { theme: 'amber' }); }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${theme === 'amber' ? 'bg-amber-950/60 text-amber-200 font-bold border border-amber-800/50' : 'hover:bg-slate-800 text-slate-300'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                      Executive Titanium
                    </span>
                    {theme === 'amber' && <span className="text-amber-400 font-bold">✓</span>}
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
              className="p-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-white transition-all cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-slate-200" />}
            </button>

            <a
              href={getCalUrl('header_nav')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cal_booking_click', { location: 'header_nav', ...utmParams })}
              className="px-3.5 py-2 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-lg text-xs transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Book a fit call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-slate-200 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Responsive Mobile / Tablet Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 bg-theme-header px-4 py-4 space-y-2 text-xs font-medium text-slate-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a href="#diagnostic" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">Diagnostic</a>
              <a href="#fractional-cio" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">Fractional CIO</a>
              <a href="#managed-services" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">Managed Services</a>
              <a href="#managed-ai-governance" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">Managed AI Governance</a>
              <a href="#public-sector" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">Public Sector</a>
              <a href="#higher-ed" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">Higher Education</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">About</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="space-y-20 pb-20 executive-grid-pattern relative overflow-hidden">
        {/* Ambient AI Ray Backdrop */}
        <div className="ai-ambient-layer" aria-hidden="true" />
        
        {/* SECTION 1: HERO (FLAGSHIP DIAGNOSTIC) */}
        <section
          id="diagnostic"
          aria-labelledby="hero-heading"
          className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8 relative z-10 scroll-mt-24"
        >
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="text-theme-accent font-semibold">30-Day AI Governance &amp; Pilot Diagnostic</span>
              <span aria-hidden="true">·</span>
              <span>$6,500 Fixed Fee</span>
              <span aria-hidden="true">·</span>
              <span>Max 2 / Month</span>
              <span aria-hidden="true">·</span>
              <span>United States Nationwide</span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white"
            >
              Know every AI pilot in your hospital —{' '}
              <span className="bg-gradient-to-r from-theme-accent via-sky-400 to-indigo-300 bg-clip-text text-transparent">
                and which ones to stop, scale, or fix.
              </span>{' '}
              In 30 days.
            </h1>

            <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              A fixed-price diagnostic for community hospitals with no full-time CIO. One list. Risk-tiered. Board-ready.
            </p>
          </div>

          {/* Quotable About Nexis AI Callout */}
          <div className={`max-w-3xl mx-auto border rounded-2xl p-6 text-left text-sm leading-relaxed shadow-sm transition-all glow-on-hover ${isDark ? 'bg-slate-900/80 backdrop-blur-md border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
            <div className="text-xs font-mono font-bold uppercase mb-2 flex items-center gap-1.5 text-theme-accent">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Nexis AI, LLC</span>
            </div>
            <p>
              Nexis AI, LLC is an executive technology advisory and managed IT operations firm based in Ellicott City, Maryland, founded by Shafiq Rahman, MS, MBA, MCS, PMP (former Maryland State CIO, October 2023–January 2026). Serving organizations nationwide across the United States, Nexis AI anchors engagements with the fixed-price 30-Day AI Governance &amp; Pilot Diagnostic ($6,500) alongside Fractional CIO leadership, Managed Helpdesk, 24x7 SOC, Infrastructure Services, and Managed AI Governance.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium">
            <a
              href={getCalUrl('hero_primary_cta')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cal_booking_click', { location: 'hero_primary_cta', ...utmParams })}
              className="w-full sm:w-auto px-7 py-3.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Book a 30-minute fit call</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:info@nexisai.us?subject=30-Day%20AI%20Governance%20Diagnostic%20Inquiry"
              onClick={() => handleEmailClick('hero_secondary_email')}
              className={`w-full sm:w-auto px-6 py-3.5 border rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${isDark ? 'border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-800'}`}
            >
              <Mail className="w-4 h-4 text-theme-accent" />
              <span>Email info@nexisai.us</span>
            </a>

            <a
              href="#risk-calculator"
              className={`w-full sm:w-auto px-5 py-3.5 border rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${isDark ? 'border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white' : 'border-slate-200 hover:bg-slate-100 text-slate-700'}`}
            >
              <SlidersHorizontal className="w-4 h-4 text-theme-accent" />
              <span>Scope Estimator</span>
            </a>
          </div>

          {/* Portfolio Strip directly under Hero CTA */}
          <p className={`max-w-4xl mx-auto text-xs sm:text-sm leading-relaxed py-3 px-4 rounded-xl border ${isDark ? 'bg-slate-900/70 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
            Not just a diagnostic — Nexis AI also provides{' '}
            <a href="#fractional-cio" className="text-theme-accent font-semibold underline hover:opacity-80">Fractional CIO leadership</a>,{' '}
            <a href="#managed-helpdesk" className="text-theme-accent font-semibold underline hover:opacity-80">Managed Helpdesk</a>,{' '}
            <a href="#soc" className="text-theme-accent font-semibold underline hover:opacity-80">24x7 SOC</a>,{' '}
            <a href="#infrastructure" className="text-theme-accent font-semibold underline hover:opacity-80">Infrastructure Services</a>, and{' '}
            <a href="#managed-ai-governance" className="text-theme-accent font-semibold underline hover:opacity-80">Managed AI Governance</a>.
          </p>

          {/* Key Facts Metric Ribbon */}
          <div className={`pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left text-xs ${isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
            <div className="p-3 rounded-xl border border-transparent dark:hover:border-slate-800 transition-colors">
              <span className="block font-mono text-sm sm:text-base font-extrabold text-theme-accent tabular-nums">$6,500 USD</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Fixed One-Time Diagnostic Fee</span>
            </div>
            <div className="p-3 rounded-xl border border-transparent dark:hover:border-slate-800 transition-colors">
              <span className="block font-mono text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 tabular-nums">30 Calendar Days</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Kickoff to Final Readout</span>
            </div>
            <div className="p-3 rounded-xl border border-transparent dark:hover:border-slate-800 transition-colors">
              <span className="block font-mono text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 tabular-nums">Max 2 / Month</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Personal Executive Delivery</span>
            </div>
            <div className="p-3 rounded-xl border border-transparent dark:hover:border-slate-800 transition-colors">
              <span className="block font-mono text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100">Shafiq Rahman</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Former Maryland State CIO</span>
            </div>
          </div>
        </section>

        {/* SECTION 1B: SERVICES AT A GLANCE HUB */}
        <section
          id="services-hub"
          aria-labelledby="services-hub-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-theme-accent tracking-wider">
                Portfolio Overview
              </span>
              <h2
                id="services-hub-heading"
                className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
              >
                Services at a glance
              </h2>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Start with the fixed-price diagnostic or engage Nexis AI directly for executive leadership, managed IT operations, and continuous AI governance nationwide.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={getCalUrl('services_hub_cta')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('cal_booking_click', { location: 'services_hub', ...utmParams })}
                className="px-4 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast text-xs font-bold rounded-xl transition-opacity whitespace-nowrap"
              >
                Book a 30-minute fit call
              </a>
              <a
                href="mailto:info@nexisai.us?subject=Nexis%20AI%20Services%20Inquiry"
                onClick={() => handleEmailClick('services_hub')}
                className={`px-4 py-2.5 border text-xs font-semibold rounded-xl transition-colors whitespace-nowrap ${isDark ? 'border-slate-700 text-slate-200 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
              >
                Email info@nexisai.us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Diagnostic (Flagship Emphasized) */}
            <div className="p-6 rounded-2xl border-2 border-theme-accent bg-slate-900 text-white shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-theme-accent font-bold uppercase tracking-wider">Flagship Entry Offer</span>
                  <span className="text-slate-300">Max 2 / month</span>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">30-Day AI Governance &amp; Pilot Diagnostic</h3>
                  <span className="text-xl font-extrabold font-mono text-theme-accent tabular-nums shrink-0">$6,500</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong>What you get:</strong> Complete AI tool inventory, NIST AI RMF risk tiers, Kill/Scale/Fix decision list, 90-day roadmap, and a Board One-Pager + 60-minute briefing in 30 calendar days.
                </p>
                <p className="text-xs text-slate-400">
                  <strong>For:</strong> 100–400-bed community hospitals nationwide with no full-time CIO running Epic or MEDITECH.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10">
                <a
                  href="#offer-diagnostic"
                  className="inline-flex items-center gap-1 text-xs font-bold text-theme-accent hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Fractional CIO */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-colors ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-theme-accent uppercase tracking-wider">Executive Leadership</span>
                  <span>3 Tiers</span>
                </div>
                <h3 className="text-lg font-bold text-theme-primary dark:text-white">
                  Fractional &amp; Interim CIO Leadership
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>What you get:</strong> Board-level technology steering, EHR optimization, vendor contract audits, and IT transformation leadership from 10–15 hrs/mo up to 2.5 days/week.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <strong>For:</strong> Community hospitals, health systems, state/local agencies, and higher education institutions nationwide.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#fractional-cio"
                  className="inline-flex items-center gap-1 text-xs font-bold text-theme-primary dark:text-theme-accent hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Managed Helpdesk */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-colors ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-theme-accent uppercase tracking-wider">Managed Operations</span>
                  <span>Tier 1–3</span>
                </div>
                <h3 className="text-lg font-bold text-theme-primary dark:text-white">
                  Managed Helpdesk (Tier 1–3)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>What you get:</strong> Multi-channel clinical EHR, workstation, and MFA/SSO ticket triage with structured escalation runbooks and monthly root-cause analytics.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <strong>For:</strong> Clinical shifts, state/county agency staff, and campus end-users nationwide.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#managed-helpdesk"
                  className="inline-flex items-center gap-1 text-xs font-bold text-theme-primary dark:text-theme-accent hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 4: 24x7 SOC */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-colors ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-theme-accent uppercase tracking-wider">Cyber Defense</span>
                  <span>24x7 Monitoring</span>
                </div>
                <h3 className="text-lg font-bold text-theme-primary dark:text-white">
                  24x7 SOC — Cyber Defense
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>What you get:</strong> Continuous SIEM log correlation, EDR telemetry monitoring, rapid ransomware containment, and HIPAA / NIST SP 800-53 compliance reporting.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <strong>For:</strong> Healthcare, public sector, and higher education organizations needing continuous threat protection.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#soc"
                  className="inline-flex items-center gap-1 text-xs font-bold text-theme-primary dark:text-theme-accent hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 5: Infrastructure Services */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-colors ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-theme-accent uppercase tracking-wider">Core Engineering</span>
                  <span>Hybrid &amp; Cloud</span>
                </div>
                <h3 className="text-lg font-bold text-theme-primary dark:text-white">
                  Infrastructure Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>What you get:</strong> Microsoft Azure and hybrid cloud administration, IoMT medical device VLAN segmentation, immutable backups, patching, and BC/DR failover testing.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <strong>For:</strong> Hospitals, municipalities, and universities modernizing core servers, networks, and medical device security.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#infrastructure"
                  className="inline-flex items-center gap-1 text-xs font-bold text-theme-primary dark:text-theme-accent hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 6: Managed AI Governance (New) */}
            <div className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-colors ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-theme-accent uppercase tracking-wider">Ongoing Retainer</span>
                  <span className="font-bold text-emerald-500 uppercase">New</span>
                </div>
                <h3 className="text-lg font-bold text-theme-primary dark:text-white">
                  Managed AI Governance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>What you get:</strong> Ongoing policy administration, new-tool intake reviews, risk assessments, staff training, compliance evidence, and quarterly board reporting.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <strong>For:</strong> Organizations continuing governance after the diagnostic. Scoped after the diagnostic or a fit call.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#managed-ai-governance"
                  className="inline-flex items-center gap-1 text-xs font-bold text-theme-primary dark:text-theme-accent hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EXECUTIVE TRUST & BENCHMARK BAR */}
        <section aria-label="Executive Benchmarks" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className={`p-4 rounded-2xl border transition-all ${isDark ? 'ai-glass-panel border-white/10 text-slate-300' : 'bg-slate-100/90 border-slate-200 text-slate-700 shadow-xs'}`}>
            <div className="flex flex-wrap justify-around items-center gap-4 text-xs font-mono font-medium tracking-wide text-center">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0" /> $20M–$250M Operating Scale &amp; 100–400 Beds Focus</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0" /> HIPAA &amp; NIST AI RMF Alignment</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0" /> 30-Day Time-To-Value Guaranteed</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0" /> $6,500 Fixed-Fee Transparency</span>
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
                  <span>You are the CEO, COO, or Board Chair of a 100–400-bed community hospital anywhere in the United States.</span>
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
                  <span>
                    You want implementation done for you — the diagnostic ends at the findings briefing, but implementation and ongoing operation are available through our managed services (see{' '}
                    <a href="#managed-services" className="text-theme-accent underline font-semibold">Managed Services</a>).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Practice Eligibility & Boundary Clarification */}
          <div className={`mt-6 p-5 rounded-2xl border transition-colors text-xs leading-relaxed ${isDark ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="font-mono uppercase font-bold text-theme-primary dark:text-theme-accent">
                  Who We Serve — Diagnostic vs. Advisory Eligibility:
                </span>
                <p>
                  <strong>The 30-Day Diagnostic ($6,500)</strong> is calibrated for 100–400-bed community hospitals nationwide operating with no full-time CIO on Epic or MEDITECH.
                  Health system administrators, VPs of Operations, CMOs, and multi-hospital networks across the United States engage via tailored <strong>Healthcare Fractional CIO Advisory</strong>, <strong>Managed Helpdesk</strong>, <strong>24x7 SOC</strong>, and <strong>Infrastructure Services</strong>. State, county, municipal, and higher education leaders nationwide engage via our <strong>Public Sector &amp; Higher Education Practices</strong>.
                </p>
              </div>
              <a
                href="#two-practices"
                className="shrink-0 text-theme-primary dark:text-theme-accent font-bold underline hover:opacity-80"
              >
                View Two Practices →
              </a>
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
                Nationwide · All US States
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

        {/* SECTION 4B: TWO PRACTICES, ONE ENTRY POINT */}
        <section
          id="two-practices"
          aria-labelledby="two-practices-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 scroll-mt-24"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300 flex items-center justify-center gap-1.5">
              <Briefcase className="w-4 h-4 text-theme-accent" />
              <span>Executive Practice Structure</span>
            </span>
            <h2
              id="two-practices-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              Two practices, one entry point
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Diagnostic first, then advisory if the buyer asks or is invited. That preserves our single-offer clarity while making ongoing executive advisory available when needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Practice 1: Healthcare Practice */}
            <div className={`p-6 sm:p-8 rounded-3xl border transition-colors space-y-5 flex flex-col justify-between ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-theme-primary text-white">
                    Healthcare Practice
                  </span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    Diagnostic Entry: $6,500
                  </span>
                </div>
                <h3 className="text-xl font-bold text-theme-primary dark:text-white">
                  Community Hospitals &amp; Health Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Begins with the fixed-fee 30-Day AI Governance &amp; Pilot Diagnostic ($6,500) for 100–400-bed hospitals. If leadership requests ongoing fractional CIO stewardship, EHR interface stabilization, or clinical IT oversight, it transitions seamlessly into an invited advisory mandate.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Diagnostic:</strong> AI inventory, risk tiering, Kill/Scale/Fix list, board one-pager.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Advisory (by invite):</strong> Interim CIO, Epic/MEDITECH interface stability, HIPAA compliance.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <a href="#fit-call" className="text-xs font-bold text-theme-primary dark:text-theme-accent hover:underline">
                  Book Hospital Fit Call →
                </a>
                <a href="#healthcare-fractional-cio" className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">
                  View Fractional Scope
                </a>
              </div>
            </div>

            {/* Practice 2: Public Sector Practice */}
            <div className={`p-6 sm:p-8 rounded-3xl border transition-colors space-y-5 flex flex-col justify-between ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-slate-800 text-amber-300">
                    Public Sector Practice
                  </span>
                  <span className="text-xs font-mono text-amber-500 font-bold">
                    Scoped by Fit Call
                  </span>
                </div>
                <h3 className="text-xl font-bold text-theme-primary dark:text-white">
                  State, County &amp; Municipal Agencies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Grounded in former State CIO leadership. Designed for Agency Directors, City/County Managers, and Public Sector IT Directors retiring fragile legacy mainframes, meeting NIST mandates, and curbing software vendor bloat.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Diagnostic Assessment:</strong> Legacy migration roadmap, NIST SP 800-53 audit, vendor review.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Advisory:</strong> Executive counsel, cloud governance, FOIA/CJIS data compliance.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <a href="#public-sector" className="text-xs font-bold text-theme-primary dark:text-theme-accent hover:underline">
                  Explore Public Sector Practice →
                </a>
                <button
                  type="button"
                  onClick={() => scrollToForm('two_practices_public_cta', 'Public Sector Modernization Fit Call')}
                  className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer"
                >
                  Schedule Fit Call
                </button>
              </div>
            </div>
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
                  summary: '60-minute briefing + board one-pager delivered. Diagnostic engagement concludes cleanly. Ongoing fractional CIO leadership is available as a separate post-diagnostic scope if the hospital invites it.',
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
          id="offer-diagnostic"
          aria-labelledby="pricing-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24"
        >
          <div className="relative rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl transition-all border border-white/10 bg-gradient-to-b from-[#091122] via-[#070D1B] to-[#040812] text-white overflow-hidden glow-on-hover">
            {/* Subtle Aurora Ambient Radial */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-theme-accent/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-[11px] font-mono uppercase bg-theme-accent text-theme-accent-contrast px-3 py-1 rounded-md font-extrabold tracking-wider">
                  The Flagship Entry Offer
                </span>
                <h2
                  id="pricing-heading"
                  className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight"
                >
                  30-Day AI Governance &amp; Pilot Diagnostic
                </h2>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-4xl sm:text-5xl font-black text-theme-accent font-mono tracking-tight tabular-nums drop-shadow-[0_0_16px_var(--theme-glow)]">
                  $6,500
                </div>
                <div className="text-xs text-amber-300 dark:text-cyan-300 font-medium mt-1.5">
                  <span>Now booking — maximum 2 diagnostics per month</span>
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
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
                    <span><strong>No retainer required.</strong> Ongoing governance &amp; operations available separately if invited.</span>
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
                    <span>
                      <strong>The diagnostic is done personally by Shafiq Rahman</strong> — every interview, document review, risk evaluation, and briefing. Managed services are delivered by the Nexis AI team together with vetted subcontractor partners, under his direction.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm font-semibold text-slate-200">
                  Fixed price. Fixed 30 days. No surprise fees.
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <a
                    href={getCalUrl('pricing_card_cta')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('cal_booking_click', { location: 'pricing_card_cta', ...utmParams })}
                    className="w-full sm:w-auto px-6 py-3 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow text-center whitespace-nowrap"
                  >
                    Book a 30-minute fit call
                  </a>
                  <a
                    href="mailto:info@nexisai.us?subject=30-Day%20AI%20Governance%20Diagnostic"
                    onClick={() => handleEmailClick('pricing_card_email')}
                    className="w-full sm:w-auto px-4 py-3 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl text-xs text-center whitespace-nowrap transition-colors"
                  >
                    Email info@nexisai.us
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                On time, or the second half is waived. The findings briefing is delivered within 30 calendar days of kickoff. If it runs more than 5 business days past day 30 for reasons within Nexis AI's control, the final 50% payment is waived — and the diagnostic is still delivered in full. Delays caused by interview scheduling or document access extend the window day for day.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6B: HEALTHCARE FRACTIONAL CIO LEADERSHIP */}
        <section
          id="fractional-cio"
          aria-labelledby="fractional-cio-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 scroll-mt-24"
        >
          <span id="healthcare-fractional-cio" className="scroll-mt-24" aria-hidden="true" />
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300 flex items-center justify-center gap-1.5">
              <Activity className="w-4 h-4 text-theme-accent" />
              <span>Post-Diagnostic Leadership Mandate</span>
            </span>
            <h2
              id="fractional-cio-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              Healthcare Fractional &amp; Interim CIO Leadership
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Available following the 30-Day Diagnostic, or for hospital leadership that has already inventoried its systems and requires interim executive technology stewardship — not as a replacement for the diagnostic.
            </p>
          </div>

          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase text-theme-accent tracking-wider">
                  Post-Diagnostic Stewardship
                </span>
                <h3 className="text-sm sm:text-base font-bold text-theme-primary dark:text-white">
                  Why Fractional CIO Follows the Diagnostic
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  We believe hospitals should never hire interim executives on open-ended hourly retainers without first knowing their exact software inventory, risk tiers, and interface debt. The 30-Day Diagnostic delivers that baseline; fractional leadership executes the prioritized roadmap.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={getCalUrl('fractional_cio_top_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'fractional_cio_top_cta', ...utmParams })}
                  className="px-4 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast rounded-xl text-xs font-bold transition-opacity shadow-sm whitespace-nowrap"
                >
                  Book a 30-minute fit call
                </a>
                <a
                  href="mailto:info@nexisai.us?subject=Fractional%20CIO%20Leadership"
                  onClick={() => handleEmailClick('fractional_cio')}
                  className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-xl text-xs font-semibold text-theme-primary dark:text-theme-accent hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
                >
                  Email info@nexisai.us
                </a>
              </div>
            </div>

            {/* 5 Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    EHR Maintenance &amp; Interface Stability
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Active oversight of Epic and MEDITECH core configurations, HL7/FHIR interface engines, laboratory feeds, and third-party clinical platforms to eliminate integration debt.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    HIPAA Security &amp; BAA Enforcement
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Rigorous verification that all patient data in transit and at rest remains encrypted, Business Associate Agreements are updated annually, and AI tools do not train on hospital PHI.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    Clinical System Uptime &amp; High Availability
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ensuring high-availability architecture across emergency departments, intensive care, radiology PACS, and pharmacy dispensing systems to prevent clinician disruption.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    Vendor SLA &amp; Contract Cost Audits
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Auditing recurring technology subscriptions, eliminating unused shelfware licenses, and aggressively negotiating renewal terms to protect hospital operating margins.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    Cybersecurity &amp; Cyber Insurance Posture
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Enforcing company-wide multi-factor authentication (MFA), immutable isolated backups, and simulated ransomware business continuity drills to keep insurance premiums in check.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 flex flex-col justify-between transition-colors ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-300'}`}>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-theme-accent">
                    Engagement Structure
                  </span>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    Predictable Monthly Milestone Scope
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Zero speculative retainers. Scoped with exact monthly deliverable milestones and regular executive briefings for the CEO and Board.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openProductModal('Healthcare Fractional CIO Leadership')}
                  className="w-full mt-2 py-2 px-3 bg-theme-accent text-theme-accent-contrast text-xs font-bold rounded-lg hover:opacity-90 transition-opacity cursor-pointer text-center"
                >
                  Discuss Fractional Mandate →
                </button>
              </div>
            </div>

            {/* Recurring Fractional CIO Retainer Architecture */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase text-theme-accent tracking-wider">
                  Recurring Executive Advisory Scopes
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-theme-primary dark:text-white">
                  Fractional CIO Retainer Architecture
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select the tier of executive technology leadership aligned with your hospital or agency's complexity, compliance needs, and modernization roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {/* Tier 1 */}
                <div className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'}`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Tier 1</span>
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">~10–15 hrs/mo</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-theme-primary dark:text-white">Strategic Advisor</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">High-level C-suite steering for health systems with active IT operational managers.</p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Semi-monthly executive briefings</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>IT Steering Committee leadership</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Quarterly technology strategy update</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Vendor SLA &amp; pricing governance</span></li>
                    </ul>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => openProductModal('Tier 1: Strategic Technology Advisor')}
                      className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-800 text-xs font-bold rounded-xl transition-all cursor-pointer text-center"
                    >
                      Inquire About Advisor Tier →
                    </button>
                  </div>
                </div>

                {/* Tier 2 (Highlighted) */}
                <div className={`p-6 rounded-2xl border-2 border-theme-accent relative transition-all flex flex-col justify-between shadow-xl ${isDark ? 'bg-slate-900/90' : 'bg-slate-900 text-white'}`}>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-theme-accent text-theme-accent-contrast text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">
                    Most Requested
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-theme-accent">Tier 2</span>
                      <span className="text-xs font-mono font-bold text-theme-accent">1–2 Days / Week</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Fractional Executive CIO</h4>
                      <p className="text-xs text-slate-300 mt-1">Active executive technology leadership without full-time C-suite overhead.</p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-200 border-t border-white/10 pt-3">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Direct IT staff guidance &amp; management</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>EHR / ERP / Cloud modernization lead</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>CAPEX / OPEX budget &amp; vendor contract audit</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Direct board and executive committee seat</span></li>
                    </ul>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => openProductModal('Tier 2: Fractional Executive CIO')}
                      className="w-full py-2.5 px-4 bg-theme-accent hover:opacity-95 text-theme-accent-contrast text-xs font-extrabold rounded-xl transition-all cursor-pointer text-center shadow-md"
                    >
                      Engage Fractional CIO →
                    </button>
                  </div>
                </div>

                {/* Tier 3 */}
                <div className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'}`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Tier 3</span>
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">Dedicated Mandate</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-theme-primary dark:text-white">Interim Transformation Lead</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">High-intensity executive stewardship for major overhauls and turnarounds.</p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3">
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Dedicated engagement (up to 2.5 days/week)</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Legacy mainframe / EHR cloud migration</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Zero Trust &amp; enterprise AI implementation</span></li>
                      <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" /><span>Accelerated 3–9 month turnaround milestones</span></li>
                    </ul>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => openProductModal('Tier 3: Interim Transformation Lead')}
                      className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-800 text-xs font-bold rounded-xl transition-all cursor-pointer text-center"
                    >
                      Request Transformation Mandate →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6C: PUBLIC SECTOR & GOVERNMENT MODERNIZATION PRACTICE */}
        <section
          id="public-sector"
          aria-labelledby="public-sector-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 scroll-mt-24"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300 flex items-center justify-center gap-1.5">
              <Landmark className="w-4 h-4 text-theme-accent" />
              <span>State &amp; Local Government Practice</span>
            </span>
            <h2
              id="public-sector-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              Public Sector &amp; Government IT Modernization
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Executive technology counsel for Agency Directors, City/County Managers, Public Sector CIOs, and Procurement Officers navigating legacy mainframe migration, NIST frameworks, and software contract transparency.
            </p>
          </div>

          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            {/* Grounding Callout */}
            <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
              <span className="text-[11px] font-mono font-bold uppercase text-theme-accent tracking-wider">
                State CIO Grounding &amp; Enterprise Track Record
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Led by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. As State CIO &amp; Chief Information &amp; Digital Transformation Officer at the <strong>Maryland Department of Transportation</strong> (Oct 2023–Jan 2026), Shafiq led a $250M+ IT budget, ~1,500 staff across six agencies, co-authored Maryland’s first statewide AI governance policy on the Governor’s AI Sub-cabinet, modernized mainframe infrastructure to Microsoft Azure cloud, and rationalized ~850 applications to ~620, producing ~$6M in recurring annual taxpayer savings.
              </p>
            </div>

            {/* Three Core Public Sector Problems */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary dark:text-theme-accent">
                Three Core Public Sector Challenges Solved:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className={`p-4 rounded-xl border space-y-2 ${isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <div className="font-bold text-theme-primary dark:text-white text-sm">
                    1. Fragile Legacy Systems &amp; Technical Debt
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Decades-old COBOL mainframes, unmaintained custom applications, and aging on-premise data centers that pose continuous outage and security risks to public services.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border space-y-2 ${isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <div className="font-bold text-theme-primary dark:text-white text-sm">
                    2. NIST Framework &amp; Public Data Compliance
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Escalating legislative audit scrutiny, meeting NIST SP 800-53 / CSF baselines, isolating CJIS/PII citizen records, and managing automated FOIA e-discovery retention.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border space-y-2 ${isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <div className="font-bold text-theme-primary dark:text-white text-sm">
                    3. Budget Transparency &amp; Vendor Overspend
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Unchecked multi-year software maintenance escalators, redundant vendor subscriptions, and vendor lock-in that drain public sector operational budgets.
                  </p>
                </div>
              </div>
            </div>

            {/* What Public Sector Leaders Get */}
            <div className={`p-5 rounded-2xl border space-y-4 ${isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary dark:text-theme-accent">
                Public Sector Advisory Deliverables:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-theme-primary dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Legacy Migration Roadmap</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    A realistic 12–24 month phased transition plan from legacy architectures to secure cloud with zero interruption to citizen services.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-theme-primary dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>NIST &amp; Data Security Audit</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Direct mapping of controls against NIST frameworks, state cyber compliance standards, and automated FOIA archiving guidelines.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-theme-primary dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Vendor Contract Review</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Rigorous audit of enterprise software licensing to eliminate shelfware, curb auto-escalators, and identify recurring taxpayer savings.
                  </p>
                </div>
              </div>
            </div>

            {/* Public Sector Pricing & Fit Call CTA */}
            <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400">
                  Engagement Terms
                </div>
                <div className="text-sm font-bold text-theme-primary dark:text-white">
                  Scoped Transparently After an Initial Fit Call
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Custom scoped based on agency systems complexity, procurement requirements, and strategic goals. No arbitrary price tags.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={getCalUrl('public_sector_fit_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'public_sector_fit_cta', ...utmParams })}
                  className="px-5 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow whitespace-nowrap"
                >
                  Book a 30-minute fit call
                </a>
                <a
                  href="mailto:info@nexisai.us?subject=Public%20Sector%20IT%20Modernization"
                  onClick={() => handleEmailClick('public_sector')}
                  className="text-xs font-semibold text-theme-primary dark:text-theme-accent underline whitespace-nowrap"
                >
                  Email info@nexisai.us
                </a>
              </div>
            </div>

            {/* Municipal Checklist Lead Magnet */}
            <div className={`p-4 rounded-xl border text-xs sm:text-sm text-center sm:text-left transition-colors ${isDark ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
              Want the <strong>Municipal IT Governance &amp; Cybersecurity Checklist</strong> as a one-page PDF for your next council or commission meeting? Email <a href="mailto:info@nexisai.us?subject=Municipal%20checklist" onClick={() => handleEmailClick('municipal_checklist_pdf')} className="text-theme-primary dark:text-theme-accent font-semibold underline">info@nexisai.us</a> with subject 'Municipal checklist' and Shafiq will send it.
            </div>
          </div>
        </section>

        {/* SECTION 6C-BIS: MANAGED SERVICES (HELPDESK, 24x7 SOC & INFRASTRUCTURE SERVICES) */}
        <section
          id="managed-services"
          aria-labelledby="managed-services-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 scroll-mt-24"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300 flex items-center justify-center gap-1.5">
              <Server className="w-4 h-4 text-theme-accent" />
              <span>Enterprise Operations &amp; Security</span>
            </span>
            <h2
              id="managed-services-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              Managed Services: Helpdesk, 24x7 SOC &amp; Infrastructure Services
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              End-to-end operational IT support, continuous cyber defense, and resilient hybrid cloud/network administration for healthcare, public sector, and higher education organizations nationwide.
            </p>
          </div>

          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            {/* Delivery Model & Interactive Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div className="space-y-1 max-w-2xl">
                <span className="text-[11px] font-mono font-bold uppercase text-theme-accent tracking-wider">
                  Delivery Model
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Managed services are delivered by Nexis AI's in-house team together with vetted subcontractor partners, under Shafiq Rahman's direction.
                </p>
              </div>
              <div className={`inline-flex flex-wrap items-center gap-1 p-1 rounded-xl border shrink-0 ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                {(
                  [
                    { id: 'all', label: 'All 3 Pillars' },
                    { id: 'helpdesk', label: 'Helpdesk' },
                    { id: 'soc', label: '24x7 SOC' },
                    { id: 'infrastructure', label: 'Infrastructure' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveManagedService(tab.id);
                      trackEvent('managed_service_filter', { filter: tab.id });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      activeManagedService === tab.id
                        ? 'bg-theme-accent text-theme-accent-contrast font-bold shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Three Dedicated Service Sub-Sections with Outreach Anchors */}
            <div className={`grid gap-6 ${activeManagedService === 'all' ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 max-w-3xl mx-auto'}`}>
              {/* Sub-section 01: Managed Helpdesk (#managed-helpdesk) */}
              {(activeManagedService === 'all' || activeManagedService === 'helpdesk') && (
                <article
                  id="managed-helpdesk"
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-5 scroll-mt-24 ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="font-bold text-theme-accent">01. Managed Helpdesk</span>
                      <span>Tier 1–3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent shrink-0">
                        <Headphones className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-theme-primary dark:text-white">
                        Managed Helpdesk (Tier 1–3)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Multi-channel technical support for clinical shifts, agency staff, and campus end-users nationwide.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700/70 pt-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>Clinical EHR, workstation &amp; identity (MFA/SSO) ticket triage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>Structured escalation runbooks to EHR/app specialists</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>Monthly ticket trend analytics &amp; root-cause elimination</span>
                      </li>
                    </ul>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                      Scoped after a fit call · Response-time targets are set in the service agreement.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700/70">
                    <button
                      type="button"
                      onClick={() => openProductModal('Managed Helpdesk (Tier 1–3)')}
                      className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer text-center whitespace-nowrap"
                    >
                      Request Helpdesk Scope →
                    </button>
                  </div>
                </article>
              )}

              {/* Sub-section 02: 24x7 SOC (#soc) */}
              {(activeManagedService === 'all' || activeManagedService === 'soc') && (
                <article
                  id="soc"
                  className={`p-6 rounded-2xl border-2 border-theme-accent transition-all flex flex-col justify-between space-y-5 shadow-lg scroll-mt-24 ${isDark ? 'bg-slate-900/90' : 'bg-slate-900 text-white'}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-theme-accent">
                      <span className="font-bold">02. 24x7 SOC</span>
                      <span>Cyber Defense</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/10 text-theme-accent shrink-0">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        24x7 SOC — Cyber Defense
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Continuous threat detection, telemetry monitoring, and incident containment aligned with HIPAA, NIST SP 800-53, and cyber insurance requirements.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200 border-t border-white/10 pt-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>24x7 SIEM log correlation, EDR telemetry &amp; anomaly response</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>Rapid ransomware isolation &amp; endpoint containment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>Continuous vulnerability scanning &amp; board compliance reporting</span>
                      </li>
                    </ul>
                    <p className="text-[11px] font-mono text-slate-400 pt-1">
                      Scoped after a fit call · Response-time targets are set in the service agreement.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => openProductModal('24x7 SOC — Cyber Defense')}
                      className="w-full py-2.5 px-4 bg-theme-accent hover:opacity-95 text-theme-accent-contrast text-xs font-extrabold rounded-xl transition-all cursor-pointer text-center shadow-md whitespace-nowrap"
                    >
                      Inquire About 24x7 SOC →
                    </button>
                  </div>
                </article>
              )}

              {/* Sub-section 03: Infrastructure Services (#infrastructure) */}
              {(activeManagedService === 'all' || activeManagedService === 'infrastructure') && (
                <article
                  id="infrastructure"
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-5 scroll-mt-24 ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="font-bold text-theme-accent">03. Infrastructure</span>
                      <span>Hybrid &amp; Cloud</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent shrink-0">
                        <Server className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-theme-primary dark:text-white">
                        Infrastructure Services
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Resilient cloud, network, and core server architecture supporting clinical, agency, and research workloads.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700/70 pt-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>Microsoft Azure, hybrid cloud &amp; virtualization administration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>IoMT medical device VLAN segmentation &amp; firewall governance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                        <span>Immutable backup verification, patching &amp; BC/DR failover testing</span>
                      </li>
                    </ul>
                    <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                      Scoped after a fit call · Response-time targets are set in the service agreement.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700/70">
                    <button
                      type="button"
                      onClick={() => openProductModal('Infrastructure Services')}
                      className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer text-center whitespace-nowrap"
                    >
                      Request Infrastructure Scope →
                    </button>
                  </div>
                </article>
              )}
            </div>

            {/* 4-Step Managed Services Engagement Model */}
            <div className={`p-6 rounded-2xl border space-y-4 ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
                  Managed Services Engagement Model (4 Steps)
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Response-time targets are set in the service agreement.
                </span>
                {/* [TO CONFIRM]: Confirmed SLA response-time targets go here once finalized */}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className={`p-4 rounded-xl border space-y-1.5 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-mono font-bold text-theme-accent">Step 01</div>
                  <div className="font-bold text-theme-primary dark:text-white text-sm">30-minute fit call</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Align on current pain points, staffing gaps, compliance drivers, and priorities directly with Shafiq Rahman.
                  </p>
                </div>
                <div className={`p-4 rounded-xl border space-y-1.5 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-mono font-bold text-theme-accent">Step 02</div>
                  <div className="font-bold text-theme-primary dark:text-white text-sm">Operational Assessment</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Operational assessment benchmarked against your existing staff, ticketing load, and security posture.
                  </p>
                </div>
                <div className={`p-4 rounded-xl border space-y-1.5 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-mono font-bold text-theme-accent">Step 03</div>
                  <div className="font-bold text-theme-primary dark:text-white text-sm">30-day transition</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Structured onboarding, telemetry integration, escalation runbooks, and service agreement alignment.
                  </p>
                </div>
                <div className={`p-4 rounded-xl border space-y-1.5 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="font-mono font-bold text-theme-accent">Step 04</div>
                  <div className="font-bold text-theme-primary dark:text-white text-sm">Monthly Coverage &amp; Review</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Ongoing monthly coverage with transparent monthly operational reporting and a quarterly executive review.
                  </p>
                </div>
              </div>
            </div>

            {/* Managed Services Dual CTA Footer */}
            <div className={`p-5 rounded-2xl border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase text-theme-accent">
                  Scoped After a Fit Call
                </div>
                <div className="text-sm font-bold text-theme-primary dark:text-white">
                  Request a managed-services assessment — or bundle all three operational pillars.
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Response-time targets and monthly scope are defined transparently in your service agreement following assessment.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={getCalUrl('managed_services_primary_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'managed_services_primary_cta', ...utmParams })}
                  className="px-5 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs transition-all shadow whitespace-nowrap"
                >
                  Request a managed-services assessment
                </a>
                <button
                  type="button"
                  onClick={() => scrollToForm('managed_services_bundle_cta', 'Bundle all three (Helpdesk + 24x7 SOC + Infrastructure) or start with an assessment')}
                  className={`px-4 py-2.5 border font-bold rounded-xl text-xs transition-colors cursor-pointer whitespace-nowrap ${isDark ? 'border-slate-600 text-white hover:bg-slate-700' : 'border-slate-300 text-slate-800 hover:bg-slate-100'}`}
                >
                  Bundle all three — or start with an assessment
                </button>
                <a
                  href="mailto:info@nexisai.us?subject=Managed%20Services%20Inquiry"
                  onClick={() => handleEmailClick('managed_services')}
                  className="text-xs font-semibold text-theme-primary dark:text-theme-accent underline whitespace-nowrap"
                >
                  Email info@nexisai.us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6C-TER: NEW MANAGED AI GOVERNANCE (RETAINER) */}
        <section
          id="managed-ai-governance"
          aria-labelledby="managed-ai-governance-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 scroll-mt-24"
        >
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-accent flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>New · The Diagnostic, Continued</span>
            </span>
            <h2
              id="managed-ai-governance-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              Managed AI Governance
            </h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The 30-day diagnostic finds the risks; this ongoing monthly retainer keeps every new AI tool, vendor update, and board report governed.
            </p>
          </div>

          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="font-mono font-bold text-theme-accent">01. Policy &amp; Intake</div>
                <h3 className="text-sm font-bold text-theme-primary dark:text-white">
                  Policy Administration &amp; New-Tool Intake Reviews
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Maintain living institutional AI acceptable-use policies and vet every new clinical, faculty, or administrative AI vendor request before procurement or go-live.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="font-mono font-bold text-theme-accent">02. Ongoing Risk</div>
                <h3 className="text-sm font-bold text-theme-primary dark:text-white">
                  Continuous Risk Assessments &amp; Staff Training
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ongoing NIST AI RMF risk tier updates, BAA/data-privacy audits, and role-based clinician, faculty, and staff training so shadow AI stays closed.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="font-mono font-bold text-theme-accent">03. Board Evidence</div>
                <h3 className="text-sm font-bold text-theme-primary dark:text-white">
                  Compliance Evidence &amp; Quarterly Board Reporting
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Audit-ready governance logs, vendor compliance evidence packages, and quarterly board briefings summarizing active AI tools, risk changes, and spend.
                </p>
              </div>
            </div>

            <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase text-theme-accent">
                  Monthly Retainer Scope
                </div>
                <div className="text-sm font-bold text-theme-primary dark:text-white">
                  Scoped after the diagnostic or a fit call.
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Transitions directly from your 30-Day AI Governance &amp; Pilot Diagnostic readout or an initial executive fit call.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={getCalUrl('managed_ai_governance_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'managed_ai_governance_cta', ...utmParams })}
                  className="px-5 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow whitespace-nowrap"
                >
                  Scope a retainer after a fit call
                </a>
                <a
                  href="mailto:info@nexisai.us?subject=Managed%20AI%20Governance%20Retainer"
                  onClick={() => handleEmailClick('managed_ai_governance')}
                  className="text-xs font-semibold text-theme-primary dark:text-theme-accent underline whitespace-nowrap"
                >
                  Email info@nexisai.us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6D: EXECUTIVE IT MATURITY ASSESSMENT */}
        <ExecutiveITMaturityAssessment
          isDark={isDark}
          onScheduleCall={(notes) => scrollToForm('it_maturity_assessment_cta', notes)}
        />

        {/* SECTION 7: ABOUT SHAFIQ */}
        <section
          id="about"
          aria-labelledby="bio-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 scroll-mt-24"
        >
          <span id="about-shafiq" className="scroll-mt-24" aria-hidden="true" />
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
                  Former Maryland State CIO · Founder &amp; Principal, Nexis AI, LLC
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  <strong>Maryland State CIO / Chief Information &amp; Digital Transformation Officer</strong>, Maryland Department of Transportation, Oct 2023–Jan 2026: $250M+ IT budget, ~1,500 staff across six agencies; co-authored Maryland's first statewide AI governance policy on the Governor's AI Sub-cabinet; modernized mainframe systems to Microsoft Azure; rationalized ~850 applications to ~620, producing ~$6M in recurring annual taxpayer savings.
                </p>
                <p>
                  <strong>Director of Enterprise IT</strong>, University of Maryland School of Medicine, Oct 2014–Oct 2023: led the MEDITECH-to-Epic migration and clinical data interoperability across seven hospitals under HIPAA/HITECH.
                </p>
                <p>
                  <strong>Founder &amp; Principal</strong>, Nexis AI, March 2026–present. Leads Nexis AI's advisory and managed-services practices for healthcare, public sector, and higher education.
                </p>
                <p>
                  <strong>Education:</strong> MS in Management Information Systems, University of Maryland Global Campus (2021); MBA (2008) and Master of Computer Science (2001), Al-Khair University; PMP® certified. Author of <em>"AI Governance: A Local Government Leader's Guide"</em> (ICMA, March 2024).
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
                <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
                <a
                  href={getCalUrl('about_section')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'about_section', ...utmParams })}
                  className="text-theme-primary dark:text-theme-accent font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Book a 30-minute fit call</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Credentials & Standards Strip */}
          <div
            aria-labelledby="credentials-heading"
            className={`border rounded-2xl p-5 sm:p-6 space-y-4 transition-colors ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}
          >
            <h3
              id="credentials-heading"
              className="text-xs font-mono font-bold uppercase tracking-wider text-theme-primary dark:text-slate-300"
            >
              Credentials &amp; Standards
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className={`p-3.5 rounded-xl border space-y-1 transition-colors ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-xs font-bold text-theme-primary dark:text-white leading-snug">
                  PMP® — Project Management Professional
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                  PMI — Cert. #4362628, valid through April 2029
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border space-y-1 transition-colors ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-xs font-bold text-theme-primary dark:text-white leading-snug">
                  M.S. Management Information Systems
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                  University of Maryland Global Campus, 2021
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border space-y-1 transition-colors ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-xs font-bold text-theme-primary dark:text-white leading-snug">
                  MBA
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                  AK University, 2008
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border space-y-1 transition-colors ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-xs font-bold text-theme-primary dark:text-white leading-snug">
                  Master of Computer Science (MCS)
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                  AK University, 2001
                </div>
              </div>
            </div>

            {/*
              FUTURE BADGE PLACEHOLDERS (HTML/JSX comments only — NOT visible on page; do not activate until verified):
              1. [PLACEHOLDER] Google Cloud Skills Boost — Introduction to Responsible AI (completion badge)
              2. [PLACEHOLDER] Microsoft Learn — Responsible AI Principles & Practices (achievement badge)
              3. [PLACEHOLDER] IBM SkillsBuild — AI Fundamentals (Credly badge)
              4. [PLACEHOLDER] Cisco Networking Academy — Introduction to Cybersecurity (Credly badge — COURSE badge, NOT a Cisco certification; label "Course Completion" if ever displayed)
            */}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Frameworks we work to: NIST AI RMF · NIST SP 800-53 · HIPAA
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: HIGHER EDUCATION & ACADEMIC MEDICINE ADVISORY */}
        <section
          id="higher-ed"
          aria-labelledby="higher-ed-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 scroll-mt-24"
        >
          <span id="higher-education" className="scroll-mt-24" aria-hidden="true" />
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300 flex items-center justify-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-theme-accent" />
              <span>Practice Extension · Higher Education &amp; Academic Medicine</span>
            </span>
            <h2
              id="higher-ed-heading"
              className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
            >
              Higher Education &amp; Academic Medical Center Advisory
            </h2>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Executive technology stewardship for University Presidents, Provosts, Deans, CFOs, and Interim CIOs balancing faculty research freedom, student AI policy, high-performance GPU clusters, and institutional compliance.
            </p>
          </div>

          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            {/* Academic Credibility Highlight */}
            <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase text-theme-accent tracking-wider">
                  Grounding &amp; Leadership Context
                </span>
                <h3 className="text-sm sm:text-base font-bold text-theme-primary dark:text-white">
                  University of Maryland School of Medicine (2014–2023)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Shafiq Rahman served 9 years as Director of Enterprise IT, reporting to the Dean and supporting ~3,000 faculty, ~3,000 staff, 1,300+ students, residents, and fellows across 25 academic departments, bridging university campus systems with seven affiliated teaching hospitals.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={getCalUrl('higher_ed_hero_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'higher_ed_hero_cta', ...utmParams })}
                  className="px-4 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast rounded-xl text-xs font-bold transition-opacity shadow-sm whitespace-nowrap"
                >
                  Book a 30-minute fit call
                </a>
                <a
                  href="mailto:info@nexisai.us?subject=Higher%20Education%20IT%20Advisory"
                  onClick={() => handleEmailClick('higher_ed')}
                  className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-xl text-xs font-semibold text-theme-primary dark:text-theme-accent hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
                >
                  Email info@nexisai.us
                </a>
              </div>
            </div>

            {/* 4 Core Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    Institutional AI Governance &amp; Academic Policy
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Developing pragmatic institutional guidelines that balance faculty research freedom, student AI usage guidelines (academic integrity), and enterprise data boundaries.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    Research Computing &amp; GPU Enclaves
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Architecting compliant, high-performance computing clusters (Slurm, multi-node GPUs) and secure research enclaves that attract top researchers without shadow IT sprawl.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    Academic Health Center &amp; Clinical Systems Integration
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Unifying identities, network boundaries, and clinical EHR data flows (Epic/MEDITECH) between university academic health science faculties and teaching hospital networks.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-theme-primary/10 dark:bg-white/10 text-theme-primary dark:text-theme-accent">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-theme-primary dark:text-white">
                    FERPA, HIPAA &amp; Federal Grant Compliance
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Safeguarding student education records under FERPA, clinical trials under HIPAA, and federal research grants under NIST SP 800-171 security controls.
                </p>
              </div>
            </div>

            {/* Bottom Note */}
            <div className={`p-4 rounded-xl border text-xs text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 ${isDark ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
              <div>
                <strong>Are you a Provost, Dean, VP of IT, or Interim CIO?</strong> Discuss your academic technology priorities or AI governance directly with Shafiq Rahman.
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={getCalUrl('higher_ed_bottom_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'higher_ed_bottom_cta', ...utmParams })}
                  className="text-theme-primary dark:text-theme-accent font-bold underline hover:opacity-90 whitespace-nowrap"
                >
                  Book a 30-minute fit call →
                </a>
                <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
                <a
                  href="mailto:info@nexisai.us?subject=Higher%20Education%20IT%20Advisory"
                  onClick={() => handleEmailClick('higher_ed_bottom')}
                  className="text-theme-primary dark:text-theme-accent font-semibold underline whitespace-nowrap"
                >
                  Email info@nexisai.us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: EXECUTIVE ARTIFACT — 5-POINT AI GOVERNANCE CHECKLIST FOR COMMUNITY HOSPITAL BOARDS */}
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
                Discuss your organization's situation directly with Shafiq Rahman. No sales pressure — and the diagnostic is delivered personally by Shafiq.
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
                        <option value="Agency Director">Agency Director / Commissioner (Public Sector)</option>
                        <option value="City / County Manager">City / County Manager (Local Gov)</option>
                        <option value="Interim CIO">Interim CIO / IT Director (Healthcare or Public Sector)</option>
                        <option value="CMIO">CMIO / Clinical Informatics Lead</option>
                        <option value="CFO">CFO / Chief Financial Officer</option>
                        <option value="University Provost / Dean / President">University Provost / Dean / President</option>
                        <option value="Higher Ed CIO / VP IT">Higher Ed CIO / VP of IT</option>
                        <option value="Other">Other Executive / Healthcare / Public Sector Leader</option>
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
                        placeholder="jdoe@hospital.org or jdoe@agency.gov"
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
                        Organization Size / Beds / Scope *
                      </label>
                      <select
                        id="form-beds"
                        name="beds"
                        value={formData.beds}
                        onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                        className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      >
                        <option value="100–199">100–199 beds (Community Hospital)</option>
                        <option value="200–299">200–299 beds (Community Hospital)</option>
                        <option value="300–400">300–400 beds (Community Hospital)</option>
                        <option value="Regional Health System / AMC">Regional Health System / Academic Medical Center</option>
                        <option value="State Agency / Authority">State Agency / Transportation / Authority</option>
                        <option value="City / County Government">City / County Government Jurisdiction</option>
                        <option value="University / Higher Ed Campus">University / Higher Education Campus</option>
                        <option value="Other">Other / Special District</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="form-ehr"
                        className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                      >
                        Primary EHR, ERP, or Core Systems *
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
                        <option value="Oracle Health / Cerner">Oracle Health / Cerner</option>
                        <option value="Both">Both (Migration / Mixed)</option>
                        <option value="Public Sector Core / Legacy">Government Core (CGI, Tyler, SAP, Oracle Cloud, Mainframe)</option>
                        <option value="Campus SIS / ERP">Campus SIS / ERP (Workday, Banner, PeopleSoft)</option>
                        <option value="Other">Other EHR or ERP Platform</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-bold uppercase tracking-wide mb-1 text-slate-800 dark:text-slate-200"
                    >
                      Primary Service of Interest *
                    </label>
                    <select
                      id="form-service"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className={`w-full border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-theme-accent ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                    >
                      <option value="30-Day AI Governance & Pilot Diagnostic ($6,500)">30-Day AI Governance &amp; Pilot Diagnostic ($6,500)</option>
                      <option value="Healthcare Fractional CIO Leadership">Healthcare Fractional CIO Leadership</option>
                      <option value="Managed AI Governance Retainer">Managed AI Governance (Monthly Retainer)</option>
                      <option value="Public Sector IT Modernization">Public Sector &amp; Government IT Modernization</option>
                      <option value="Higher Education & Academic Medicine Advisory">Higher Education &amp; Academic Medicine Advisory</option>
                      <option value="Managed Helpdesk (Tier 1–3)">Managed Helpdesk (Tier 1–3)</option>
                      <option value="24x7 SOC — Cyber Defense">24x7 SOC — Cyber Defense</option>
                      <option value="Enterprise Infrastructure Services">Infrastructure Services</option>
                      <option value="Bundled Managed Operations (Helpdesk + 24x7 SOC + Infrastructure)">Bundled Managed Operations (Helpdesk + 24x7 SOC + Infrastructure)</option>
                    </select>
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
                      placeholder="e.g., Ambient clinical notes, Radiology triage, RevCycle denial predictor, Citizen chatbots..."
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
                      placeholder="Any specific upcoming board meetings, council briefings, or active vendor renewals..."
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
          id="faq"
          aria-labelledby="faq-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 scroll-mt-24"
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
                q: 'Do you offer ongoing Fractional CIO work?',
                a: 'Yes. While the entry point for hospitals is typically the 30-day diagnostic (and a fit call for public sector agencies), leadership frequently invites Shafiq to serve as interim or Fractional CIO post-findings. In this capacity, he governs EHR/clinical interface remediations, audits vendor contracts, oversees cyber insurance posture, and manages ongoing NIST/HIPAA alignment.',
              },
              {
                q: 'Do you implement the fixes?',
                a: 'The diagnostic itself ends with the 60-minute findings briefing and board one-pager. Implementation and ongoing operation are available as separate scopes — Fractional CIO leadership, Managed Helpdesk, 24x7 SOC, Infrastructure Services, or a Managed AI Governance retainer.',
              },
              {
                q: 'Do you serve hospitals and organizations nationwide, or larger health systems?',
                a: 'Yes. Nexis AI serves clients nationwide across the United States. The fixed-price $6,500 30-day diagnostic is calibrated for 100–400 bed community hospitals anywhere in the U.S. Larger multi-hospital health systems, state and local government agencies, and universities nationwide engage via custom-scoped Fractional CIO advisory, Managed Helpdesk, 24x7 SOC, Infrastructure Services, or Managed AI Governance.',
              },
              {
                q: 'Will this slow down our clinicians?',
                a: 'No — it gives them a clear yes/no list. Clinicians and department heads get rapid certainty on which tools are approved to use, which need data protection fixes first, and which should not be used, eliminating friction and compliance confusion.',
              },
              {
                q: 'What if we find no AI in use?',
                a: 'Then the inventory and the purchase/go-live controls are still delivered, and the price does not change. Your hospital receives the 5 baseline governance controls and pre-purchase evaluation framework so you are fully prepared when departmental requests arise.',
              },
              {
                q: 'Who does the work?',
                a: 'The diagnostic is done personally by Shafiq Rahman — every interview, document review, risk evaluation, and briefing. Managed services are delivered by the Nexis AI team together with vetted subcontractor partners, under his direction.',
              },
              {
                q: 'Do you provide Managed Helpdesk, 24x7 SOC, and Infrastructure Services?',
                a: 'Yes. In addition to executive AI governance and Fractional CIO leadership, Nexis AI provides Managed Helpdesk Services (Tier 1–3 clinical, agency, and campus support), 24x7 Security Operations Center (SOC) monitoring and incident containment, and Infrastructure Services covering Microsoft Azure, hybrid cloud, IoMT network segmentation, and immutable backups.',
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

        {/* SECTION 11: DIRECT EXECUTIVE CONTACT */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24"
        >
          <div className={`border rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 transition-colors ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-theme-accent">
                  Direct Contact
                </span>
                <h2
                  id="contact-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-theme-primary dark:text-white"
                >
                  Connect with Nexis AI, LLC
                </h2>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Serving hospitals, state and local government agencies, and higher education institutions nationwide across the United States.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={getCalUrl('contact_section_cta')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'contact_section', ...utmParams })}
                  className="px-5 py-3 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow whitespace-nowrap flex items-center gap-2"
                >
                  <span>Book a 30-minute fit call</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@nexisai.us?subject=Nexis%20AI%20Executive%20Inquiry"
                  onClick={() => handleEmailClick('contact_section')}
                  className={`px-4 py-3 border font-semibold rounded-xl text-xs sm:text-sm transition-colors whitespace-nowrap ${isDark ? 'border-slate-700 text-slate-200 hover:bg-slate-800' : 'border-slate-300 text-slate-800 hover:bg-slate-100'}`}
                >
                  Email info@nexisai.us
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <a
                href="tel:+14109347773"
                onClick={() => handlePhoneClick('contact_section')}
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80 hover:border-theme-accent' : 'bg-white border-slate-200 hover:border-theme-accent'}`}
              >
                <Phone className="w-4 h-4 text-theme-accent shrink-0" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Direct Phone</div>
                  <div className="font-bold text-theme-primary dark:text-white">+1 (410) 934-7773</div>
                </div>
              </a>

              <a
                href="mailto:info@nexisai.us"
                onClick={() => handleEmailClick('contact_section_card')}
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-colors ${isDark ? 'bg-slate-800/50 border-slate-700/80 hover:border-theme-accent' : 'bg-white border-slate-200 hover:border-theme-accent'}`}
              >
                <Mail className="w-4 h-4 text-theme-accent shrink-0" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Email</div>
                  <div className="font-bold text-theme-primary dark:text-white">info@nexisai.us</div>
                </div>
              </a>

              <div className={`p-4 rounded-2xl border flex items-center gap-3 ${isDark ? 'bg-slate-800/50 border-slate-700/80' : 'bg-white border-slate-200'}`}>
                <MapPin className="w-4 h-4 text-theme-accent shrink-0" />
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">Headquarters</div>
                  <div className="font-bold text-theme-primary dark:text-white">Ellicott City, Howard County, MD 21042</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-theme-header text-white border-t border-theme-header py-12 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-1">
              <span className="text-xl font-bold font-mono text-white">Nexis AI, LLC</span>
              <p className="text-xs text-slate-300">
                AI Governance, Fractional CIO &amp; Managed IT Services · Founded by Shafiq Rahman, Former Maryland State CIO
              </p>
              <p className="text-xs text-slate-400">
                info@nexisai.us · +1 (410) 934-7773 · Ellicott City, Howard County, MD 21042
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
            <p>© {new Date().getFullYear()} Nexis AI, LLC. All rights reserved.</p>
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

      {/* Executive Service Selection & Inquiry Modal */}
      {selectedProductModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"
          onClick={closeProductModal}
        >
          <div
            className={`relative w-full max-w-md rounded-2xl p-6 sm:p-8 border shadow-2xl transition-all ${
              isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeProductModal}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <XCircle className="w-5 h-5" />
            </button>

            <div className="space-y-1 mb-5">
              <span className="text-[11px] font-mono font-bold uppercase text-theme-accent tracking-wider">
                Executive Engagement Inquiry
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                {selectedProductModal}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct confidential review by Shafiq Rahman, former Maryland State CIO.
              </p>
            </div>

            {modalSuccessMessage ? (
              <div className="space-y-4 py-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold">Inquiry Dispatched</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {modalSuccessMessage}
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      closeProductModal();
                      scrollToForm('modal_success_booking');
                    }}
                    className="w-full py-2.5 px-4 bg-theme-accent hover:opacity-95 text-theme-accent-contrast text-xs font-bold rounded-xl transition-all cursor-pointer shadow"
                  >
                    Select Calendar Slot (Optional) →
                  </button>
                  <button
                    type="button"
                    onClick={closeProductModal}
                    className="w-full py-2 px-4 border border-slate-700 text-slate-300 text-xs font-medium rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4 text-xs">
                <div>
                  <label htmlFor="modal-name" className="block font-mono font-bold uppercase mb-1 text-slate-700 dark:text-slate-300">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={modalFormData.fullName}
                    onChange={(e) => setModalFormData({ ...modalFormData, fullName: e.target.value })}
                    placeholder="Full Name"
                    className={`w-full px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="modal-org" className="block font-mono font-bold uppercase mb-1 text-slate-700 dark:text-slate-300">
                    Hospital or Agency Name *
                  </label>
                  <input
                    id="modal-org"
                    type="text"
                    required
                    value={modalFormData.organization}
                    onChange={(e) => setModalFormData({ ...modalFormData, organization: e.target.value })}
                    placeholder="Hospital / Agency Name"
                    className={`w-full px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block font-mono font-bold uppercase mb-1 text-slate-700 dark:text-slate-300">
                    Work Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={modalFormData.email}
                    onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                    placeholder="jdoe@hospital.org"
                    className={`w-full px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block font-mono font-bold uppercase mb-1 text-slate-700 dark:text-slate-300">
                    Direct Phone (optional)
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={modalFormData.phone}
                    onChange={(e) => setModalFormData({ ...modalFormData, phone: e.target.value })}
                    placeholder="+1 (410) 555-0199"
                    className={`w-full px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="modal-notes" className="block font-mono font-bold uppercase mb-1 text-slate-700 dark:text-slate-300">
                    Specific Priorities / Questions (optional)
                  </label>
                  <textarea
                    id="modal-notes"
                    rows={2}
                    value={modalFormData.notes}
                    onChange={(e) => setModalFormData({ ...modalFormData, notes: e.target.value })}
                    placeholder="Key systems involved, upcoming renewals, or desired timeline..."
                    className={`w-full px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    disabled={isModalSubmitting}
                    className="w-full py-3 px-4 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isModalSubmitting ? 'Dispatching to Shafiq...' : 'Submit Inquiry — Direct Review'}
                  </button>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => {
                        const product = selectedProductModal;
                        closeProductModal();
                        scrollToForm('modal_switch_to_calendar', `Inquiring about ${product}`);
                      }}
                      className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Or pick a 30-min slot on the live calendar directly
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
