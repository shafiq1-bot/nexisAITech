import React, { useState } from 'react';
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

export default function App() {
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

  const scrollToForm = (sourceCta: string) => {
    trackEvent('cta_click', {
      cta_location: sourceCta,
      target_element: '#fit-call',
    });
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
      click_location: source,
    });
  };

  const handleEmailClick = (source: string) => {
    trackEvent('contact_email_click', {
      email_address: 'info@nexisai.us',
      click_location: source,
    });
  };

  const deliverableDetails = [
    {
      title: '1. AI Use Inventory & Risk Tiers',
      includes: 'Every AI tool/pilot found, tiered High / Medium / Low risk using NIST AI Risk Management Framework concepts, with owner, data used, and vendor named for each.',
      decision: 'Complete institutional visibility into what is running and what patient/clinical data is exposed.',
      sampleTitle: 'Sample Deliverable Excerpt: NIST AI RMF Risk Tiering',
      sampleRows: [
        { name: 'Ambient Clinical Scribe (ED pilot)', owner: 'Chief Medical Officer', data: 'Audio PHI / Clinical Notes', vendor: 'Nuance / Vendor BAA', tier: 'High Risk', verdict: 'Fix BAA & Data Retention' },
        { name: 'Radiology Triage Algorithm', owner: 'Radiology Chair', data: 'DICOM CT Scans', vendor: 'Imaging AI Vendor', tier: 'High Risk', verdict: 'Scale (FDA Cleared, Validated)' },
        { name: 'Revenue Cycle Denial Predictor', owner: 'VP Finance', data: 'De-identified Claims Data', vendor: 'FinTech Health Inc', tier: 'Medium Risk', verdict: 'Scale with monitoring' },
      ],
    },
    {
      title: '2. Kill / Scale / Fix List',
      includes: 'A decision list for every pilot: stop it, scale it, or fix it first, with the reason in one sentence each.',
      decision: 'Immediate executive action: terminates risky shelfware and clears compliant pilots to expand safely.',
      sampleTitle: 'Sample Deliverable Excerpt: Actionable 1-Sentence Decisions',
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* Top Executive Header */}
      <header className="sticky top-0 z-40 bg-[#0F2A44] text-white border-b border-[#1b3d61] shadow-sm">
        <nav aria-label="Main Navigation" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-white font-mono">
              Nexis AI
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-300 border-l border-slate-600 pl-3 font-normal">
              Healthcare AI Governance · MD, DC, PA, VA
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <a
              href="tel:+14109347773"
              onClick={() => handlePhoneClick('header_nav')}
              className="hidden md:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
              aria-label="Direct Phone: +1 (410) 934-7773"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+1 (410) 934-7773</span>
            </a>
            <button
              onClick={() => scrollToForm('header_cta')}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-[#0F2A44] font-bold rounded-lg text-xs sm:text-sm transition-all shadow cursor-pointer"
            >
              Book a 30-minute fit call
            </button>
          </div>
        </nav>
      </header>

      {/* Target Buyer Notice Banner */}
      <div className="bg-slate-100 border-b border-slate-200 text-slate-700 py-2.5 px-4 text-xs text-center font-medium">
        <span className="font-semibold text-[#0F2A44]">Exclusively for Hospital Leadership:</span> CEOs, COOs, and Board Chairs of 100–400-bed community hospitals &amp; health systems in MD, DC, PA, &amp; VA with no full-time CIO.
      </div>

      <main className="space-y-20 pb-20">
        
        {/* SECTION 1: HERO */}
        <section
          aria-labelledby="hero-heading"
          className="pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2A44]/10 text-[#0F2A44] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#0F2A44]" />
              <span>30-Day AI Governance &amp; Pilot Diagnostic</span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F2A44] tracking-tight leading-[1.15]"
            >
              Know every AI pilot in your hospital — and which ones to stop, scale, or fix. In 30 days.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
              A fixed-price diagnostic for community hospitals with no full-time CIO. One list. Risk-tiered. Board-ready.
            </p>
          </div>

          {/* Quotable About Nexis AI Callout for AI Answer Engines & Leadership */}
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-sm text-slate-700 leading-relaxed shadow-xs">
            <div className="text-xs font-mono font-bold uppercase text-[#0F2A44] mb-1.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#0F2A44]" />
              <span>About Nexis AI</span>
            </div>
            <p>
              Nexis AI is an executive healthcare technology advisory firm founded in Ellicott City, Maryland by former Maryland State CIO Shafiq Rahman, MS, MBA, MCS, PMP®. The firm provides a fixed-price 30-Day AI Governance &amp; Pilot Diagnostic exclusively for 100–400-bed community hospitals and small health systems across Maryland, the District of Columbia, Pennsylvania, and Virginia running Epic or MEDITECH with no full-time CIO. Every diagnostic is conducted directly by Shafiq Rahman to deliver a risk-tiered inventory, a Kill/Scale/Fix decision list, and a 90-day board governance roadmap.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToForm('hero_primary_cta')}
              className="w-full sm:w-auto px-8 py-4 bg-[#0F2A44] hover:bg-[#16385a] text-white font-bold rounded-xl text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a 30-minute fit call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-slate-500 pt-1 flex flex-wrap items-center justify-center gap-y-1 gap-x-4">
            <span>Directly conducted by Shafiq Rahman (Former Maryland State CIO)</span>
            <span>•</span>
            <span>Fixed 30 calendar days</span>
            <span>•</span>
            <span>Zero implementation lock-in</span>
          </div>
        </section>

        {/* SECTION 2: THIS IS FOR YOU IF / NOT FOR YOU IF */}
        <section
          aria-labelledby="qualification-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2
              id="qualification-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#0F2A44]"
            >
              Is This Diagnostic the Right Fit for Your Hospital?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We do not work with everyone. We focus exclusively on one acute situation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For You If */}
            <div className="bg-slate-50 border-2 border-emerald-600/30 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2A44]">
                  This is for you if:
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>
                    You are the <strong>CEO, COO, or Board Chair</strong> of a <strong>100–400-bed community hospital or small health system</strong> located in <strong>Maryland, DC, Pennsylvania, or Virginia</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>
                    Your hospital has <strong>NO full-time CIO</strong>, or currently operates with an interim CIO or IT director while navigating strategic technology choices.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>
                    Your hospital runs <strong>Epic or MEDITECH</strong> as its core electronic health record (EHR) platform.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>
                    Department heads and clinicians are already running <strong>uncoordinated AI tools or vendor pilots</strong> without a single governed list of what is in use, who owns it, and what it costs.
                  </span>
                </li>
              </ul>
            </div>

            {/* Not For You If */}
            <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2.5">
                <XCircle className="w-6 h-6 text-slate-500 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                  This is NOT for you if:
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>
                    Hospitals that already have a <strong>full-time CIO</strong> and a formal, maturely governed AI program in active operation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>
                    <strong>Technology vendors</strong> or companies selling AI software tools, ambient listening products, or clinical algorithms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>
                    Organizations looking for hands-on <strong>software development, custom programming, or vendor implementation</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>
                    Organizations outside Maryland, DC, Pennsylvania, and Virginia, or non-hospital commercial entities.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: THE PROBLEM */}
        <section
          aria-labelledby="problem-heading"
          className="bg-[#0F2A44] text-white py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
                The Operational Reality
              </span>
              <h2
                id="problem-heading"
                className="text-2xl sm:text-3xl font-extrabold text-white"
              >
                The 3 Core Problems Community Hospitals Face Today
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#16385a] border border-[#244b75] p-6 rounded-2xl space-y-3">
                <div className="text-amber-400 font-mono text-xl font-bold">1</div>
                <h3 className="text-base font-bold text-white leading-snug">
                  Departmental AI Sprawl
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  AI pilots are running in different departments with no single inventory.
                </p>
              </div>

              <div className="bg-[#16385a] border border-[#244b75] p-6 rounded-2xl space-y-3">
                <div className="text-amber-400 font-mono text-xl font-bold">2</div>
                <h3 className="text-base font-bold text-white leading-snug">
                  Unclear Accountability &amp; Risk
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Nobody can say which pilots are safe to scale, which should be stopped, and who is accountable if one goes wrong.
                </p>
              </div>

              <div className="bg-[#16385a] border border-[#244b75] p-6 rounded-2xl space-y-3">
                <div className="text-amber-400 font-mono text-xl font-bold">3</div>
                <h3 className="text-base font-bold text-white leading-snug">
                  Unanchored Board Spending
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The board is being asked to approve AI spending without a risk-tiered, costed list.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHAT THE BUYER GETS (TABLE + INTERACTIVE PREVIEW) */}
        <section
          aria-labelledby="deliverables-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#0F2A44] bg-slate-100 px-3 py-1 rounded-full">
              Tangible Outcomes
            </span>
            <h2
              id="deliverables-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#0F2A44]"
            >
              What You Get: Four Board-Ready Deliverables
            </h2>
            <p className="text-sm text-slate-600">
              No theoretical decks. You receive four executive artifacts designed for fast executive decision-making.
            </p>
          </div>

          {/* Deliverables Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F2A44] text-white text-xs font-bold uppercase tracking-wider">
                  <th scope="col" className="p-4 sm:p-5 w-1/4">Deliverable</th>
                  <th scope="col" className="p-4 sm:p-5 w-2/4">What It Includes</th>
                  <th scope="col" className="p-4 sm:p-5 w-1/4">Decision It Enables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {deliverableDetails.map((item, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setActiveDeliverablePreview(idx)}
                    className={`transition-colors cursor-pointer ${
                      activeDeliverablePreview === idx ? 'bg-amber-50/60' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="p-4 sm:p-5 font-bold text-[#0F2A44] align-top">
                      <div className="flex items-center gap-2">
                        <span>{item.title}</span>
                        {activeDeliverablePreview === idx && (
                          <span className="text-[10px] font-mono bg-[#0F2A44] text-white px-1.5 py-0.5 rounded uppercase">
                            Previewing
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-700 leading-relaxed align-top">
                      {item.includes}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 align-top">
                      {item.decision}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dynamic Interactive Sample Preview Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0F2A44]" />
                <h3 className="text-base font-bold text-[#0F2A44]">
                  {deliverableDetails[activeDeliverablePreview].sampleTitle}
                </h3>
              </div>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((tabIdx) => (
                  <button
                    key={tabIdx}
                    onClick={() => setActiveDeliverablePreview(tabIdx)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeDeliverablePreview === tabIdx
                        ? 'bg-[#0F2A44] text-white'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Item {tabIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-200/70 text-slate-800 font-mono uppercase text-[11px]">
                    <th className="p-2.5">Pilot / System</th>
                    <th className="p-2.5">Sponsor / Owner</th>
                    <th className="p-2.5">Data Scope</th>
                    <th className="p-2.5">Vendor Status</th>
                    <th className="p-2.5">Risk Tier / Metric</th>
                    <th className="p-2.5">Diagnostic Finding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {deliverableDetails[activeDeliverablePreview].sampleRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-[#0F2A44]">{row.name}</td>
                      <td className="p-2.5 text-slate-700">{row.owner}</td>
                      <td className="p-2.5 text-slate-600 font-mono text-[11px]">{row.data}</td>
                      <td className="p-2.5 text-slate-600">{row.vendor}</td>
                      <td className="p-2.5 font-semibold text-slate-900">{row.tier}</td>
                      <td className="p-2.5 text-slate-700 font-medium">{row.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 italic pt-1">
              * Illustrative format delivered directly to the CEO, COO, and Board in the diagnostic readout package.
            </p>
          </div>
        </section>

        {/* SECTION 5: HOW IT WORKS (4 WEEKS TIMELINE) */}
        <section
          aria-labelledby="timeline-heading"
          className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200"
        >
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-[#0F2A44] bg-white border border-slate-300 px-3 py-1 rounded-full">
                The 30-Day Calendar
              </span>
              <h2
                id="timeline-heading"
                className="text-2xl sm:text-3xl font-extrabold text-[#0F2A44]"
              >
                How It Works: Four Weeks From Kickoff to Final Readout
              </h2>
              <p className="text-sm text-slate-600">
                A tight, bounded process that respects clinician and executive schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Week 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase bg-[#0F2A44] text-white px-2.5 py-0.5 rounded">
                    Week 1
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Days 01–07</span>
                </div>
                <h3 className="text-base font-bold text-[#0F2A44]">Inventory</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shafiq interviews up to 5 people (CEO/COO, interim CIO/IT lead, CMIO or clinical lead, CISO/security lead, compliance/privacy lead), 45 minutes each, and reviews the AI tool list, vendor contracts, and existing policies the hospital provides.
                </p>
              </div>

              {/* Week 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase bg-[#0F2A44] text-white px-2.5 py-0.5 rounded">
                    Week 2
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Days 08–14</span>
                </div>
                <h3 className="text-base font-bold text-[#0F2A44]">Risk Tiering</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every item tiered; gaps in ownership, data use, and vendor terms flagged.
                </p>
              </div>

              {/* Week 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase bg-[#0F2A44] text-white px-2.5 py-0.5 rounded">
                    Week 3
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Days 15–21</span>
                </div>
                <h3 className="text-base font-bold text-[#0F2A44]">Draft Findings</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kill/Scale/Fix list and 90-day roadmap drafted; one 30-minute check-in with the sponsor.
                </p>
              </div>

              {/* Week 4 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase bg-[#0F2A44] text-white px-2.5 py-0.5 rounded">
                    Week 4
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Days 22–30</span>
                </div>
                <h3 className="text-base font-bold text-[#0F2A44]">Findings Briefing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  60-minute briefing + board one-pager delivered. Engagement ends. A retainer is offered only if the buyer asks — do not sell it on this page.
                </p>
              </div>
            </div>

            {/* What the Buyer Must Provide Box */}
            <div className="bg-white border-2 border-slate-300 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-[#0F2A44] uppercase tracking-wide">
                What the Buyer Must Provide:
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                List of AI tools in use, vendor contracts, current AI/data policies (if any), and access to the 5 interviewees.
              </p>
              <div className="p-3.5 bg-slate-100 rounded-xl text-xs sm:text-sm font-semibold text-[#0F2A44] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0F2A44]" />
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
          <div className="bg-[#0F2A44] text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#244b75] pb-6">
              <div>
                <span className="text-xs font-mono uppercase bg-amber-400 text-[#0F2A44] px-2.5 py-1 rounded font-extrabold">
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
                <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                  $6,500
                </div>
                <div className="text-xs text-slate-300 font-mono mt-0.5">
                  One-time fixed fee
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <h3 className="font-bold text-amber-400 uppercase text-xs tracking-wider">
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
                <h3 className="font-bold text-amber-400 uppercase text-xs tracking-wider">
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

            <div className="pt-4 border-t border-[#244b75] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm font-semibold text-amber-300">
                Fixed price. Fixed 30 days. No surprise fees.
              </div>
              <button
                onClick={() => scrollToForm('pricing_card_cta')}
                className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#0F2A44] font-bold rounded-xl text-xs sm:text-sm transition-all shadow cursor-pointer"
              >
                Book a 30-minute fit call
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 7: ABOUT SHAFIQ */}
        <section
          aria-labelledby="bio-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#0F2A44] bg-slate-100 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2
              id="bio-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#0F2A44]"
            >
              Who Shafiq Is
            </h2>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="shrink-0 text-center space-y-2">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#0F2A44] mx-auto shadow-md">
                <img
                  src="/profile_circle.png"
                  alt="Shafiq Rahman, MS, MBA, MCS, PMP, Founder of Nexis AI, former Maryland State CIO"
                  width="176"
                  height="176"
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-xs text-slate-500 font-mono">Ellicott City, MD</div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>Shafiq Rahman, MS, MBA, MCS, PMP®, Former Maryland State CIO.</strong>
              </p>

              <p>
                State CIO / Chief Information &amp; Digital Transformation Officer, Maryland Department of Transportation, October 2023–January 2026: led a $250M+ IT enterprise, ~1,500 staff across six agencies; co-authored Maryland's first statewide AI governance policy as a member of the Governor's AI Sub-cabinet; modernized mainframe systems to Microsoft Azure; rationalized ~850 applications to ~620, ~$6M in recurring annual savings.
              </p>

              <p>
                Director of Enterprise IT, University of Maryland School of Medicine, October 2014–October 2023: led the MEDITECH-to-Epic migration and clinical data interoperability across seven hospitals under HIPAA/HITECH.
              </p>

              <p>
                Founder &amp; Principal, Nexis AI, March 2026–present.
              </p>

              <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs">
                <span className="text-slate-600">
                  Presented AI governance frameworks on ICMA's online events.
                </span>
                <a
                  href="https://icma.org/articles/pm-magazine/ai-governance-local-government-leaders-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('outbound_click', { resource: 'icma_guide' })}
                  className="text-[#0F2A44] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>AI Governance: A Local Government Leader's Guide (ICMA)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shafiq-rahman-maryland/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('outbound_click', { resource: 'linkedin_profile' })}
                  className="text-[#0F2A44] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Shafiq Rahman on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ */}
        <section
          aria-labelledby="faq-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#0F2A44] bg-slate-100 px-3 py-1 rounded-full">
              Common Inquiries
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#0F2A44]"
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
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx, faq.q)}
                  className="w-full p-5 text-left font-bold text-[#0F2A44] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer text-sm sm:text-base"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#0F2A44]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9: FINAL CTA & LEAD CAPTURE FORM */}
        <section
          id="fit-call"
          aria-labelledby="lead-capture-heading"
          className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto scroll-mt-24"
        >
          <div className="bg-slate-50 border-2 border-[#0F2A44] rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-white bg-[#0F2A44] px-3 py-1 rounded-full">
                Direct Engagement
              </span>
              <h2
                id="lead-capture-heading"
                className="text-2xl sm:text-3xl font-extrabold text-[#0F2A44]"
              >
                Book a 30-minute fit call
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Discuss your hospital's situation directly with Shafiq Rahman. No sales pressure, no junior teams.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-950">
                  Thank you — Shafiq will reply within 2 business days to schedule a 30-minute fit call.
                </h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto">
                  If you need immediate assistance or have urgent board inquiries, you may also reach out directly:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-semibold text-[#0F2A44]">
                  <a
                    href="tel:+14109347773"
                    onClick={() => handlePhoneClick('confirmation_screen')}
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <Phone className="w-4 h-4 text-[#0F2A44]" />
                    <span>+1 (410) 934-7773</span>
                  </a>
                  <a
                    href="mailto:info@nexisai.us"
                    onClick={() => handleEmailClick('confirmation_screen')}
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <Mail className="w-4 h-4 text-[#0F2A44]" />
                    <span>info@nexisai.us</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1"
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
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-org"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1"
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
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-role"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1"
                    >
                      Your Role *
                    </label>
                    <select
                      id="form-role"
                      name="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44] cursor-pointer"
                    >
                      <option value="CEO">CEO</option>
                      <option value="COO">COO</option>
                      <option value="Board Chair">Board Chair</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1"
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
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-beds"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1"
                    >
                      Hospital Beds *
                    </label>
                    <select
                      id="form-beds"
                      name="beds"
                      value={formData.beds}
                      onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44] cursor-pointer"
                    >
                      <option value="Under 100">Under 100</option>
                      <option value="100–400">100–400</option>
                      <option value="Over 400">Over 400</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="form-ehr"
                      className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1"
                    >
                      Primary EHR *
                    </label>
                    <select
                      id="form-ehr"
                      name="ehr"
                      value={formData.ehr}
                      onChange={(e) => setFormData({ ...formData, ehr: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44] cursor-pointer"
                    >
                      <option value="Epic">Epic</option>
                      <option value="MEDITECH">MEDITECH</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-ai-tools"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1"
                  >
                    What AI tools or pilots are already running? <span className="font-normal text-slate-500">(Optional)</span>
                  </label>
                  <textarea
                    id="form-ai-tools"
                    name="aiToolsRunning"
                    rows={2}
                    value={formData.aiToolsRunning}
                    onChange={(e) => setFormData({ ...formData, aiToolsRunning: e.target.value })}
                    placeholder="e.g. Ambient clinical notes in ED, imaging triage pilot, coding assistance..."
                    className="w-full bg-white border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-notes"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1"
                  >
                    Anything else? <span className="font-normal text-slate-500">(Optional)</span>
                  </label>
                  <textarea
                    id="form-notes"
                    name="anythingElse"
                    rows={2}
                    value={formData.anythingElse}
                    onChange={(e) => setFormData({ ...formData, anythingElse: e.target.value })}
                    placeholder="Upcoming board meetings, interim leadership timing, specific vendor concerns..."
                    className="w-full bg-white border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0F2A44] hover:bg-[#16385a] text-white font-bold rounded-xl text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Book a 30-minute fit call</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="pt-2 text-center text-xs text-slate-500">
                  Shafiq Rahman will reply within 2 business days. Direct alternative contact: <a href="tel:+14109347773" onClick={() => handlePhoneClick('form_footer_link')} className="text-[#0F2A44] font-semibold hover:underline">+1 (410) 934-7773</a> or <a href="mailto:info@nexisai.us" onClick={() => handleEmailClick('form_footer_link')} className="text-[#0F2A44] font-semibold hover:underline">info@nexisai.us</a>.
                </div>
              </form>
            )}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#0F2A44] text-white border-t border-[#1b3d61] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div>
            Nexis AI, Ellicott City, MD
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="mailto:info@nexisai.us"
              onClick={() => handleEmailClick('footer_link')}
              className="hover:text-white transition-colors"
            >
              info@nexisai.us
            </a>
            <span>•</span>
            <a
              href="tel:+14109347773"
              onClick={() => handlePhoneClick('footer_link')}
              className="hover:text-white transition-colors"
            >
              +1 (410) 934-7773
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/shafiq-rahman-maryland/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('outbound_click', { resource: 'footer_linkedin' })}
              className="hover:text-white transition-colors underline inline-flex items-center gap-1"
            >
              <span>Shafiq Rahman on LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
