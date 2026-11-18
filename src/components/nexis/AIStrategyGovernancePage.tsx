import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  SlidersHorizontal,
  ArrowRight,
  Cpu,
  RefreshCw,
} from 'lucide-react';
import healthcareFabricUrl from '../../assets/images/healthcare_data_fabric_1795016606732.jpg';
import {
  PageRoute,
  AI_METHODOLOGY_PIPELINE,
  AI_INVESTMENT_FLYWHEEL,
} from '../../content/nexisData';
import { ConsultationBanner, PageHeroBanner, SectionHeading, trackEvent } from './SharedUI';

interface AIStrategyGovernancePageProps {
  onNavigate: (page: PageRoute, sectionId?: string, prefillService?: string) => void;
  calUrl: string;
}

export const HospitalAIScopeEstimator: React.FC<{
  onPrefillContact: (notes: string) => void;
}> = ({ onPrefillContact }) => {
  const [calcBeds, setCalcBeds] = useState<'100-199' | '200-299' | '300-400'>('200-299');
  const [calcEhr, setCalcEhr] = useState<'Epic' | 'MEDITECH'>('Epic');
  const [calcPilots, setCalcPilots] = useState<'1-3' | '4-7' | '8+'>('4-7');
  const [calcCioStatus, setCalcCioStatus] = useState<'No full-time CIO' | 'Interim CIO' | 'IT Director'>('No full-time CIO');

  return (
    <div id="risk-calculator" className="border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 bg-slate-50/90 dark:bg-slate-900 border-slate-200 dark:border-slate-800 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="text-xs font-mono font-bold uppercase text-theme-accent flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Scope Estimator · Preliminary Self-Assessment</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            Hospital AI Risk &amp; Governance Scope Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Select your operational profile to estimate departmental AI sprawl and BAA exposure. Results represent a preliminary estimation aid, not audited clinical or legal findings.
          </p>
        </div>
        <div className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200">
          MD / DC / PA / VA &amp; Nationwide US
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="space-y-1.5">
          <div className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Hospital Bed Size</div>
          <div className="space-y-1">
            {(['100-199', '200-299', '300-400'] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setCalcBeds(b)}
                className={`w-full py-2 px-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${
                  calcBeds === b
                    ? 'border-theme-accent bg-theme-subtle dark:bg-slate-800 font-bold text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <span>{b} Beds</span>
                {calcBeds === b && <span className="text-theme-accent font-bold">●</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Primary EHR Platform</div>
          <div className="space-y-1">
            {(['Epic', 'MEDITECH'] as const).map((e) => (
              <button
                key={e}
                type="button"
                onClick={() => setCalcEhr(e)}
                className={`w-full py-2 px-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${
                  calcEhr === e
                    ? 'border-theme-accent bg-theme-subtle dark:bg-slate-800 font-bold text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <span>{e} EHR</span>
                {calcEhr === e && <span className="text-theme-accent font-bold">●</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">Active Departmental Pilots</div>
          <div className="space-y-1">
            {(['1-3', '4-7', '8+'] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setCalcPilots(p)}
                className={`w-full py-2 px-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${
                  calcPilots === p
                    ? 'border-theme-accent bg-theme-subtle dark:bg-slate-800 font-bold text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <span>{p === '8+' ? '8+ Active Pilots' : `${p} Pilots`}</span>
                {calcPilots === p && <span className="text-theme-accent font-bold">●</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">IT Leadership Model</div>
          <div className="space-y-1">
            {(['No full-time CIO', 'Interim CIO', 'IT Director'] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCalcCioStatus(c)}
                className={`w-full py-2 px-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${
                  calcCioStatus === c
                    ? 'border-theme-accent bg-theme-subtle dark:bg-slate-800 font-bold text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-600 dark:text-slate-300'
                }`}
              >
                <span>{c}</span>
                {calcCioStatus === c && <span className="text-theme-accent font-bold">●</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="p-6 rounded-2xl border bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
              Estimated Preliminary AI Footprint
            </span>
            <div className="text-xl font-extrabold text-slate-900 dark:text-white font-mono">
              {calcPilots === '1-3' ? '2–4 Ungoverned Tools' : calcPilots === '4-7' ? '5–9 Ungoverned Tools' : '10+ Shadow AI Tools'}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Commonly distributed across Emergency Medicine, Radiology, Case Management, and Nursing.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
              Vendor PHI / BAA Risk Estimate
            </span>
            <div className="text-xl font-extrabold text-amber-500 dark:text-amber-400 font-mono">
              {calcCioStatus === 'No full-time CIO' ? 'Elevated / Unverified' : 'Moderate / Fragmented'}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Unvetted SaaS and LLM tools risk processing patient identifiers outside executed BAA boundaries.
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
              Recommended Entry Engagement
            </span>
            <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
              30-Day Diagnostic
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              $6,500 fixed fee · 50% booking / 50% findings delivery · 30 calendar days.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
            Profile: {calcBeds} beds · {calcEhr} EHR · {calcPilots} pilots · {calcCioStatus} (Preliminary estimate only)
          </span>
          <button
            type="button"
            onClick={() =>
              onPrefillContact(
                `30-Day Diagnostic Scope Estimate: ${calcBeds} beds, ${calcEhr} EHR, ${calcPilots} pilots, ${calcCioStatus}`
              )
            }
            className="w-full sm:w-auto px-4 py-2 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs hover:opacity-95 transition-opacity cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Discuss This Scope With Shafiq</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const AIStrategyGovernancePage: React.FC<AIStrategyGovernancePageProps> = ({ onNavigate, calUrl }) => {
  const [activeFrameworkStep, setActiveFrameworkStep] = useState<number>(0);
  const [activeDeliverablePreview, setActiveDeliverablePreview] = useState<number>(0);
  const [previewFilter, setPreviewFilter] = useState<'all' | 'high' | 'medium' | 'scale'>('all');
  const [activeTimelineWeek, setActiveTimelineWeek] = useState<number>(1);

  const deliverableDetails = [
    {
      title: '1. AI Use Inventory & Risk Tiers',
      includes:
        'Every AI tool/pilot found, tiered High / Medium / Low risk using NIST AI Risk Management Framework concepts, with owner, data used, and vendor named for each.',
      decision: 'Stop shadow AI and know what exists.',
      sampleTitle: 'Sample Deliverable Excerpt: Enterprise & Hospital AI Risk Register',
      sampleRows: [
        { name: 'ED Clinical Note Scribe', owner: 'Emergency Dept Director', data: 'Patient Audio & EHR Encounters', vendor: 'Clinical AI Vendor A', tier: 'High Risk', verdict: 'BAA verified; needs algorithmic bias audit for non-English speakers.' },
        { name: 'Radiology Triage AI', owner: 'Chief of Radiology', data: 'DICOM CT Scans', vendor: 'Imaging Partner B', tier: 'High Risk', verdict: 'Requires clinician-in-the-loop validation sign-off and EHR logging.' },
        { name: 'Revenue Cycle Denial Predictor', owner: 'VP Revenue Cycle', data: 'Claims & Billing Data', vendor: 'RevCycle AI Suite', tier: 'Medium Risk', verdict: 'Approved to scale with quarterly financial false-positive audits.' },
        { name: 'Shift Scheduling Assistant', owner: 'Operations Lead', data: 'Staff Shift Logs', vendor: 'Operations SaaS', tier: 'Low Risk', verdict: 'Approved to scale with zero PHI exposure.' },
      ],
    },
    {
      title: '2. Kill / Scale / Fix List',
      includes: 'A decision list for every pilot: stop it, scale it, or fix it first, with the reason in one sentence each.',
      decision: 'Clear marching orders for clinicians, managers, and IT.',
      sampleTitle: 'Sample Deliverable Excerpt: Executive Decision Matrix',
      sampleRows: [
        { name: 'Unvetted Departmental LLM Chatbot', owner: 'Department Operations', data: 'Policy Docs / Staff Queries', vendor: 'Consumer AI Subscription', tier: 'High Risk', verdict: 'KILL: Consumer terms allow training on internal workflows without BAA.' },
        { name: 'Clinical Documentation Assistant', owner: 'Ambulatory Lead', data: 'EHR Notes', vendor: 'App Orchard Partner', tier: 'Medium Risk', verdict: 'SCALE: Strong clinician adoption, clinical validation, and active BAA in place.' },
        { name: 'Predictive Discharge Tool', owner: 'Case Management', data: 'Census & ADT Feed', vendor: 'Analytics Startup', tier: 'High Risk', verdict: 'FIX: Missing demographic validation; pause live use until audited.' },
      ],
    },
    {
      title: '3. 90-Day Governance Roadmap',
      includes: 'Who decides, what gets reviewed before purchase or go-live, and the 5 controls to put in place first.',
      decision: 'A repeatable intake gate so new tools do not slip in.',
      sampleTitle: 'Sample Deliverable Excerpt: 5 Core Governance Controls',
      sampleRows: [
        { name: 'Control 1: Pre-Purchase Intake Gate', owner: 'Interim CIO & Compliance', data: 'Vendor Architecture', vendor: 'All new AI software', tier: 'Mandatory', verdict: 'Zero AI software procurement without documented risk tier and signed BAA.' },
        { name: 'Control 2: PHI / PII Boundary Check', owner: 'CISO / Privacy Officer', data: 'Protected Health Info', vendor: 'Cloud AI APIs', tier: 'Mandatory', verdict: 'Prohibit consumer AI tools from accessing clinical networks and sensitive records.' },
        { name: 'Control 3: Executive Sponsor Registry', owner: 'CMIO / Program Lead', data: 'Clinical & Admin AI', vendor: 'All active pilots', tier: 'Mandatory', verdict: 'Every AI pilot must have a named department executive accountable for outputs.' },
      ],
    },
    {
      title: '4. Board One-Pager + 60-Minute Findings Briefing',
      includes: 'A one-page summary for the board and a live briefing with the CEO/Board Chair.',
      decision: 'Board-ready clarity to approve or reject spend.',
      sampleTitle: 'Sample Deliverable Excerpt: Executive Board Readout',
      sampleRows: [
        { name: 'Total Departmental AI Pilots Identified', owner: 'Enterprise Scope', data: '6 Departments', vendor: '8 Vendors', tier: 'Executive Metric', verdict: 'Full inventory established across Clinical, Radiology, Finance, and Operations.' },
        { name: 'Actionable Triage Distribution', owner: 'Executive Committee', data: 'Governance Review', vendor: 'Enterprise-wide', tier: 'Executive Metric', verdict: '2 Pilots Approved to Scale · 4 Pilots Require Fixes · 2 Shadow Tools Terminated.' },
        { name: 'Fiduciary & Regulatory Defensibility', owner: 'Board of Directors', data: 'NIST AI RMF', vendor: 'Nexis AI Readout', tier: 'Board Ready', verdict: 'Equips Board Governance Committee with transparent oversight and risk tiers.' },
      ],
    },
  ];

  const currentDeliverable = deliverableDetails[activeDeliverablePreview];
  const filteredRows = currentDeliverable.sampleRows.filter((row) => {
    if (previewFilter === 'all') return true;
    if (previewFilter === 'high') return row.tier.toLowerCase().includes('high') || row.verdict.toLowerCase().includes('kill');
    if (previewFilter === 'medium') return row.tier.toLowerCase().includes('medium') || row.verdict.toLowerCase().includes('fix');
    if (previewFilter === 'scale')
      return (
        row.tier.toLowerCase().includes('low') ||
        row.verdict.toLowerCase().includes('scale') ||
        row.tier.toLowerCase().includes('board') ||
        row.tier.toLowerCase().includes('mandatory')
      );
    return true;
  });

  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="AI Strategy, Governance & Enterprise AI"
        metaLine="NIST AI RMF Aligned · RAG & Agents · $6,500 30-Day Entry Diagnostic"
        title="Turn Unmanaged AI Pilots Into Governed, High-ROI Enterprise Capability."
        description="Executive AI strategy, generative AI and RAG architecture, workflow orchestration, ongoing Managed AI Governance, and our flagship fixed-fee 30-Day AI Governance & Pilot Diagnostic."
        primaryCtaLabel="Assess Your AI Governance Readiness"
        onPrimaryCta={() => onNavigate('contact', 'fit-call', 'AI Governance & Enterprise Strategy')}
        secondaryCtaLabel="Jump to $6,500 30-Day Diagnostic"
        onSecondaryCta={() => {
          const el = document.getElementById('diagnostic');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        backgroundImageUrl={healthcareFabricUrl}
      />

      {/* 1. ENTERPRISE AI STRATEGY CAPABILITIES */}
      <section id="ai-capabilities" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <SectionHeading
          eyebrow="Enterprise AI Portfolio"
          title="End-to-End AI Strategy, Governance & Architectural Oversight"
          description="Grounded in co-authoring Maryland’s first statewide AI governance policy and advising hospitals and institutions nationwide on practical, risk-tiered AI adoption."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: 'Enterprise AI Strategy & Roadmaps',
              desc: 'Align generative AI, predictive analytics, and automation initiatives directly with clinical safety, citizen service, and institutional ROI mandates.',
            },
            {
              title: 'Responsible AI Risk & Control Frameworks',
              desc: 'Establish AI inventories, lifecycle review committees, and NIST AI RMF risk tiering across departmental systems.',
            },
            {
              title: 'Generative AI, LLMs & RAG Architecture',
              desc: 'Deploy private enterprise Retrieval-Augmented Generation (RAG) and BAA-protected LLM endpoints instead of leaky consumer tools.',
            },
            {
              title: 'AI Agent & Workflow Orchestration',
              desc: 'Design governed multi-step workflow agents inside service desks, document triage, and back-office operations with human-in-the-loop controls.',
            },
            {
              title: 'Model Governance, Evaluation & Data Readiness',
              desc: 'Establish data lineage checks, prompt/output evaluation rubrics, hallucination guardrails, and demographic bias testing before production.',
            },
            {
              title: 'AI Business Value & ROI Measurement',
              desc: 'Eliminate vanity pilots by auditing actual time reclaimed, cycle-time reduction, and recurring cost-to-serve improvements.',
            },
          ].map((cap, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-theme-accent">
                <Cpu className="w-4 h-4" />
                <span>0{idx + 1}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{cap.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PROPRIETARY NEXIS AI METHODOLOGY & INVESTMENT LIFECYCLE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#07101E] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Proprietary Nexis AI Methodology"
              title="From Intent to Measured Enterprise Value"
              description="Our proprietary strategic operating model for turning isolated AI enthusiasm into governed, production-ready outcomes."
            />
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Nexis AI proprietary strategic framework — not a third-party certification.
            </span>
          </div>

          {/* 5-Stage Pipeline: Intent -> Data & Architecture -> Orchestration -> Integration -> Value */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {AI_METHODOLOGY_PIPELINE.map((item, idx) => {
                const active = activeFrameworkStep === idx;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveFrameworkStep(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer space-y-1.5 ${
                      active
                        ? 'bg-theme-header text-white border-theme-accent shadow-lg'
                        : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className={`text-[11px] font-mono font-bold ${active ? 'text-theme-accent' : 'text-slate-400'}`}>
                      STAGE {item.step}
                    </div>
                    <div className={`text-base font-extrabold ${active ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {item.name}
                    </div>
                    <div className={`text-[11px] ${active ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                      {item.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1629] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-3xl">
                <div className="text-xs font-mono font-bold text-theme-accent uppercase">
                  Stage {AI_METHODOLOGY_PIPELINE[activeFrameworkStep].step} · {AI_METHODOLOGY_PIPELINE[activeFrameworkStep].name}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {AI_METHODOLOGY_PIPELINE[activeFrameworkStep].detail}
                </p>
              </div>
              <span className="text-xs font-mono text-executive-gold shrink-0">
                Intent → Data &amp; Architecture → Orchestration → Integration → Value
              </span>
            </div>
          </div>

          {/* Executive AI Investment Lifecycle */}
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1629] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-executive-gold">
                <RefreshCw className="w-4 h-4" />
                <span>Executive AI Investment Lifecycle</span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-300">
                Invest → Deploy → Measure → Learn → Optimize → Reinvest
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {AI_INVESTMENT_FLYWHEEL.map((node) => (
                <div
                  key={node.stage}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 space-y-1.5"
                >
                  <div className="text-xs font-mono font-bold text-theme-accent">{node.stage}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{node.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ENTRY PRODUCT: 30-DAY AI GOVERNANCE & PILOT DIAGNOSTIC ($6,500) */}
      <section id="diagnostic" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 scroll-mt-24">
        <div id="offer-diagnostic" className="relative rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl border border-white/10 bg-theme-header text-white overflow-hidden scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[11px] font-mono uppercase text-theme-accent font-extrabold tracking-wider">
                The Flagship Entry Offer
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
                30-Day AI Governance &amp; Pilot Diagnostic
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
                A fixed-price diagnostic for community hospitals (100–400 beds running Epic or MEDITECH with no full-time CIO) and institutions needing rapid board-ready clarity.
              </p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <div className="text-4xl sm:text-5xl font-black text-theme-accent font-mono tracking-tight tabular-nums">
                $6,500
              </div>
              <div className="text-xs text-executive-gold font-semibold mt-1">
                Now booking — maximum 2 diagnostics per month
              </div>
              <div className="text-xs text-slate-400 font-mono">One-time fixed fee</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h3 className="font-bold text-theme-accent uppercase text-xs tracking-wider">Payment &amp; Terms</h3>
              <ul className="space-y-2 text-slate-200 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>50% on booking</strong> ($3,250) and <strong>50% on delivery</strong> ($3,250) of the findings briefing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Fixed 30 calendar days</strong> from kickoff to live findings readout.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>No retainer required.</strong> Ongoing governance &amp; implementation available separately if invited.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-theme-accent uppercase text-xs tracking-wider">Capacity &amp; Delivery</h3>
              <ul className="space-y-2 text-slate-200 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Maximum 2 diagnostics per month</strong> to guarantee personal principal execution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>The diagnostic is done personally by Shafiq Rahman</strong> — every interview, document review, risk evaluation, and briefing.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm font-semibold text-slate-200">Fixed price. Fixed 30 days. No surprise fees.</div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cal_booking_click', { location: 'diagnostic_card' })}
                  className="px-5 py-2.5 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm"
                >
                  Book a 30-minute fit call
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'contact-portal', '30-Day AI Governance & Pilot Diagnostic ($6,500)')}
                  className="px-4 py-2.5 border border-white/25 text-white font-semibold rounded-xl text-xs hover:bg-white/10 cursor-pointer"
                >
                  Structured Diagnostic Inquiry
                </button>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
              On time, or the second half is waived. The findings briefing is delivered within 30 calendar days of kickoff. If it runs more than 5 business days past day 30 for reasons within Nexis AI’s control, the final 50% payment is waived — and the diagnostic is still delivered in full. Delays caused by interview scheduling or document access extend the window day for day.
            </p>
          </div>
        </div>

        {/* For You / Not For You Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">For you if:</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li>• You are the CEO, COO, or Board Chair of a 100–400-bed community hospital.</li>
              <li>• You have no full-time CIO, or an interim one.</li>
              <li>• AI tools are already in use somewhere in the building.</li>
              <li>• The board is being asked to approve AI spending it cannot see clearly.</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 space-y-4">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Not for you if:</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li>• You already have a full-time CIO and a governed AI programme.</li>
              <li>• You are a vendor selling an AI tool.</li>
              <li>• You want implementation inside the $6,500 fee (implementation &amp; ongoing governance are scoped separately).</li>
            </ul>
          </div>
        </div>

        {/* 4-Week Calendar & Buyer Responsibilities */}
        <div className="space-y-6">
          <SectionHeading
            eyebrow="The 30-Day Calendar"
            title="Four Weeks From Kickoff to Board Readout"
            description="A tight, bounded process requiring roughly 4 hours of total executive time across 30 days."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                week: 1,
                days: 'Days 01–07',
                title: 'Inventory',
                summary: 'Shafiq interviews up to 5 leaders (45 mins each) and reviews your current tool list, vendor contracts, and policies.',
                milestone: '5 interviews · Master register initiated',
              },
              {
                week: 2,
                days: 'Days 08–14',
                title: 'Risk Tiering',
                summary: 'Every tool risk-tiered against NIST AI RMF criteria; ownership, clinical PHI, and BAA gaps documented.',
                milestone: 'NIST AI RMF tiers · BAA gap review',
              },
              {
                week: 3,
                days: 'Days 15–21',
                title: 'Draft Findings',
                summary: 'Kill / Scale / Fix list and 90-day governance roadmap drafted; 30-minute sponsor alignment check-in.',
                milestone: 'Kill/Scale/Fix drafted · Sponsor sync',
              },
              {
                week: 4,
                days: 'Days 22–30',
                title: 'Findings Briefing',
                summary: '60-minute live executive briefing + board one-pager delivered cleanly.',
                milestone: 'Board one-pager · 60-min live briefing',
              },
            ].map((step) => (
              <div
                key={step.week}
                onClick={() => setActiveTimelineWeek(step.week)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  activeTimelineWeek === step.week
                    ? 'border-theme-accent ring-1 ring-theme-accent bg-white dark:bg-slate-800 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-theme-accent">Week {step.week}</span>
                  <span className="text-slate-500">{step.days}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.summary}</p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  ✓ {step.milestone}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div>
              <strong>What the buyer provides:</strong> List of known AI tools, vendor contracts, current AI/data policies (if any), and access to up to 5 interviewees.
            </div>
            <div className="shrink-0 font-mono font-bold text-theme-accent inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>~4 hrs executive time over 30 days</span>
            </div>
          </div>
        </div>

        {/* 4 Deliverables Interactive Sample Risk Register Viewer */}
        <div className="border rounded-2xl p-5 sm:p-6 space-y-4 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-theme-accent">
                Interactive Sample Viewer
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {currentDeliverable.sampleTitle}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1">
              {deliverableDetails.map((item, tabIdx) => (
                <button
                  key={tabIdx}
                  type="button"
                  onClick={() => setActiveDeliverablePreview(tabIdx)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    activeDeliverablePreview === tabIdx
                      ? 'bg-theme-header text-white font-bold'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Deliverable {tabIdx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-mono">Filter Sample:</span>
            {(['all', 'high', 'medium', 'scale'] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setPreviewFilter(f)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium cursor-pointer ${
                  previewFilter === f
                    ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-bold'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {f === 'all' ? 'All Rows' : f === 'high' ? 'High Risk / Kill' : f === 'medium' ? 'Medium Risk / Fix' : 'Scale / Approved'}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto border rounded-xl border-slate-200 dark:border-slate-800">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="font-mono uppercase text-[11px] bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                  <th className="p-2.5">Pilot / System</th>
                  <th className="p-2.5">Sponsor</th>
                  <th className="p-2.5">Data Scope</th>
                  <th className="p-2.5">Vendor Status</th>
                  <th className="p-2.5">Risk Tier</th>
                  <th className="p-2.5">Diagnostic Finding</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {filteredRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="p-2.5 font-bold text-slate-900 dark:text-white">{row.name}</td>
                    <td className="p-2.5 text-slate-700 dark:text-slate-300">{row.owner}</td>
                    <td className="p-2.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">{row.data}</td>
                    <td className="p-2.5 text-slate-600 dark:text-slate-400">{row.vendor}</td>
                    <td className="p-2.5 font-semibold text-slate-900 dark:text-slate-100">{row.tier}</td>
                    <td className="p-2.5 text-slate-700 dark:text-slate-300">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            * Illustrative format only — represents the executive governance register structure delivered at Day 30.
          </p>
        </div>

        {/* Interactive Scope Estimator */}
        <HospitalAIScopeEstimator
          onPrefillContact={(notes) => onNavigate('contact', 'contact-portal', notes)}
        />
      </section>

      {/* 4. MANAGED AI GOVERNANCE RETAINER */}
      <section id="managed-ai-governance" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 scroll-mt-24">
        <SectionHeading
          eyebrow="Ongoing Retainer · The Diagnostic, Continued"
          title="Managed AI Governance"
          description="Keep every new AI tool, clinical/operational vendor update, staff training requirement, and board report continuously governed after your initial diagnostic."
          centered
        />

        <div className="border rounded-3xl p-6 sm:p-10 space-y-8 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {[
              {
                step: '01. Policy & Intake',
                title: 'Policy Administration & New-Tool Intake Reviews',
                desc: 'Maintain living institutional AI acceptable-use policies and vet every new clinical, faculty, or administrative AI request prior to procurement or go-live.',
              },
              {
                step: '02. Ongoing Risk',
                title: 'Continuous Risk Assessments & Staff Training',
                desc: 'Ongoing NIST AI RMF risk tier updates, BAA/data-privacy audits, and role-based training so shadow AI stays closed.',
              },
              {
                step: '03. Board Evidence',
                title: 'Compliance Evidence & Quarterly Board Reporting',
                desc: 'Audit-ready governance logs, vendor compliance evidence packages, and quarterly board briefings summarizing active AI tools, risk changes, and spend.',
              },
            ].map((item) => (
              <div key={item.step} className="p-5 rounded-2xl border bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/80 space-y-2">
                <div className="font-mono font-bold text-theme-accent flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{item.step}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl border bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold uppercase text-theme-accent">Monthly Retainer Scope</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Scoped transparently after the 30-day diagnostic or an executive fit call.
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact', 'contact-portal', 'Managed AI Governance (Monthly Retainer)')}
              className="px-5 py-2.5 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs whitespace-nowrap cursor-pointer"
            >
              Scope Managed AI Retainer →
            </button>
          </div>
        </div>
      </section>

      <ConsultationBanner onNavigate={onNavigate} calUrl={calUrl} />
    </div>
  );
};
