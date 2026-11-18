import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Server,
  Cpu,
  Briefcase,
  Landmark,
  GraduationCap,
  Activity,
  Award,
  ExternalLink,
  SlidersHorizontal,
} from 'lucide-react';
import heroMeshUrl from '../../assets/images/hero_architecture_mesh_1795016607078.jpg';
import {
  PageRoute,
  SITE_CONFIG,
  EXECUTIVE_CREDIBILITY_HIGHLIGHTS,
  EXECUTIVE_IMPACT_METRICS,
  LEADERSHIP_PHILOSOPHY_PRINCIPLES,
} from '../../content/nexisData';
import { ConsultationBanner, SectionHeading, trackEvent } from './SharedUI';

interface HomePageProps {
  onNavigate: (page: PageRoute, sectionId?: string) => void;
  calUrl: string;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, calUrl }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. EXECUTIVE SHOWCASE HERO */}
      <section className="relative overflow-hidden bg-theme-header text-white border-b border-theme-header">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${heroMeshUrl})` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#060E1B]/90 via-[#070D19]/80 to-[#050A14]/95"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Primary Messaging */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono tracking-wider uppercase text-theme-accent leading-relaxed">
                Fractional CIO · IT Modernization · Digital Transformation · AI Governance · Cybersecurity · Enterprise Architecture
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight leading-[1.08] text-white">
                Executive Technology Leadership. Enterprise Transformation.{' '}
                <span className="text-theme-accent">Responsible AI.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Helping healthcare organizations, public-sector agencies, universities, and enterprise leaders modernize technology, strengthen governance, and turn digital investments into measurable results.
              </p>

              <p className="text-xs sm:text-sm font-mono text-executive-gold border-t border-white/10 pt-4">
                “{SITE_CONFIG.coreStatement}”
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', { cta_location: 'home_hero_primary' });
                    onNavigate('contact', 'fit-call');
                  }}
                  className="px-6 py-3.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule an Executive Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('core-capabilities');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else onNavigate('fractional-cio');
                  }}
                  className="px-6 py-3.5 border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>
            </div>

            {/* Right Prominent Founder Profile Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#0A1628]/90 backdrop-blur-md border border-white/15 p-6 sm:p-7 space-y-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <img
                    src="/profile_circle.png"
                    alt="Shafiq Rahman, MS, MBA, MCS, PMP® — Founder & Principal of Nexis AI and Former Maryland State CIO"
                    width={96}
                    height={96}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-executive-gold shrink-0 shadow-md"
                  />
                  <div className="space-y-1 min-w-0">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-executive-gold font-bold">
                      Principal &amp; Founder
                    </div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                      {SITE_CONFIG.founderFullLine}
                    </h2>
                    <p className="text-xs text-slate-300 leading-snug">
                      Founder &amp; Principal, Nexis AI
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-theme-accent border-y border-white/10 py-3 leading-relaxed">
                  Former Maryland State CIO · Technology Transformation Executive · AI Governance Leader
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Over 20 years leading enterprise IT strategy across state government (MDOT $250M+ portfolio, ~1,500 staff), academic medicine (University of Maryland School of Medicine), and clinical informatics.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
                  <button
                    type="button"
                    onClick={() => onNavigate('about')}
                    className="font-bold text-white hover:text-theme-accent transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Executive Biography &amp; Media Kit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('insights', 'executive-recognition')}
                    className="text-executive-gold font-semibold hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>CIO Recognition Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE CREDIBILITY STRIP */}
      <section aria-label="Verified Executive Leadership Highlights" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {EXECUTIVE_CREDIBILITY_HIGHLIGHTS.map((highlight, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/70 flex items-start gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THREE COMPLEMENTARY FIRM CAPABILITIES & PRACTICE PORTFOLIO */}
      <section id="core-capabilities" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 scroll-mt-24">
        <SectionHeading
          eyebrow="Firm Positioning & Practice Architecture"
          title="Three Complementary Executive Capabilities"
          description="Nexis AI unites senior C-suite technology stewardship, enterprise modernization execution, and governed AI adoption across healthcare, public-sector, and academic institutions nationwide."
        />

        {/* 3 Primary Capability Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-5 flex flex-col justify-between glow-on-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-theme-accent uppercase tracking-wider">01 · Executive Leadership</span>
                <Briefcase className="w-5 h-5 text-theme-accent" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Fractional &amp; Interim CIO Advisory
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Senior strategic leadership, IT governance, board reporting, capital budgeting, and vendor accountability across three milestone-structured engagement tiers without full-time CIO overhead.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => onNavigate('fractional-cio')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-theme-accent hover:underline cursor-pointer"
              >
                <span>Explore Fractional CIO Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-5 flex flex-col justify-between glow-on-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-theme-accent uppercase tracking-wider">02 · Enterprise Transformation</span>
                <Server className="w-5 h-5 text-theme-accent" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                IT Modernization &amp; Managed Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Legacy mainframe modernization, Microsoft Azure/AWS cloud architecture, application rationalization, Zero Trust &amp; NIST SP 800-53 resilience, Helpdesk Tier 1–3, 24x7 SOC, and infrastructure services.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => onNavigate('it-modernization')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-theme-accent hover:underline cursor-pointer"
              >
                <span>Discuss an IT Transformation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-5 flex flex-col justify-between glow-on-hover">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-theme-accent uppercase tracking-wider">03 · AI Strategy &amp; Governance</span>
                <Cpu className="w-5 h-5 text-theme-accent" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Enterprise AI &amp; Responsible Governance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Generative AI &amp; RAG architecture, workflow orchestration, NIST AI RMF risk management, ongoing Managed AI Governance retainers, and our flagship $6,500 30-Day AI Governance &amp; Pilot Diagnostic.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => onNavigate('ai-strategy')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-theme-accent hover:underline cursor-pointer"
              >
                <span>Assess Your AI Governance Readiness</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dedicated Industry Sector Practices Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <button
            type="button"
            onClick={() => onNavigate('healthcare')}
            className="text-left p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:border-theme-accent transition-all cursor-pointer space-y-2"
          >
            <div className="flex items-center justify-between text-xs font-mono font-bold text-theme-accent">
              <span className="inline-flex items-center gap-1.5"><Activity className="w-4 h-4" /> Sector Practice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Healthcare &amp; Clinical Informatics
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Community hospitals, oncology OIS (ARIA/RayStation), Epic &amp; MEDITECH interoperability, HIPAA, and the $6,500 30-Day Hospital Diagnostic.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('public-sector')}
            className="text-left p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:border-theme-accent transition-all cursor-pointer space-y-2"
          >
            <div className="flex items-center justify-between text-xs font-mono font-bold text-theme-accent">
              <span className="inline-flex items-center gap-1.5"><Landmark className="w-4 h-4" /> Sector Practice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Public Sector &amp; Government Modernization
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Grounded in former Maryland State CIO leadership: mainframe modernization, NIST SP 800-53, Zero Trust, and CJIS/FOIA compliance.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('higher-ed')}
            className="text-left p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:border-theme-accent transition-all cursor-pointer space-y-2"
          >
            <div className="flex items-center justify-between text-xs font-mono font-bold text-theme-accent">
              <span className="inline-flex items-center gap-1.5"><GraduationCap className="w-4 h-4" /> Sector Practice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Higher Education &amp; Academic Medicine
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              University IT governance, teaching hospital clinical integration, Slurm GPU research enclaves, and FERPA / HIPAA / NIST SP 800-171.
            </p>
          </button>
        </div>
      </section>

      {/* 4. EXECUTIVE IMPACT DASHBOARD */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#07101E] border-y border-slate-200 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Verified Prior Executive Track Record"
              title="Leadership Built Around Measurable Impact"
              description="Selected enterprise transformation scale and outcomes achieved by Shafiq Rahman during previous executive CIO and academic medicine leadership roles."
              gold
            />
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 max-w-sm">
              Note: Metrics reflect career achievements from prior institutional roles—not claims of Nexis AI client results.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXECUTIVE_IMPACT_METRICS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1629] space-y-3 shadow-xs"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-executive-gold font-bold">
                  {item.context}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight tabular-nums text-slate-900 dark:text-white">
                  {item.metric}
                </div>
                <div className="text-sm font-bold text-theme-accent">
                  {item.label}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Executive Data Visualization: Application Rationalization Trajectory */}
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#091324] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
                Portfolio Discipline Visualization
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                Eliminating Redundant Software Sprawl Across Six Agencies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                During MDOT tenure (Oct 2023–Jan 2026), disciplined Tolerate / Invest / Migrate / Eliminate portfolio governance reduced redundant legacy systems while preserving core public-safety and transit operations—producing ~$6M in recurring annual savings.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 font-mono">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-300 font-semibold">Baseline Multi-Agency Portfolio</span>
                  <span className="font-bold text-slate-900 dark:text-white tabular-nums">~850 Applications</span>
                </div>
                <div className="w-full h-5 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden p-0.5">
                  <div className="h-full rounded-md bg-slate-500 dark:bg-slate-500" style={{ width: '100%' }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-300 font-semibold">Post-Rationalization Enterprise Estate</span>
                  <span className="font-bold text-theme-accent tabular-nums">~620 Applications (~27% Retired)</span>
                </div>
                <div className="w-full h-5 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden p-0.5">
                  <div className="h-full rounded-md bg-theme-accent" style={{ width: '73%' }} />
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                <span>Recurring Fiscal Impact: ~$6M / Year Taxpayer Savings</span>
                <span>Cloud Target: Mainframe Workloads Modernized to Microsoft Azure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP PHILOSOPHY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        <SectionHeading
          eyebrow="Operating Philosophy"
          title="Technology Leadership Is About Outcomes, Not Technology Alone."
          description="Every Nexis AI advisory engagement follows six disciplined leadership principles designed to reduce risk, curb unnecessary vendor spend, and deliver institutional value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEADERSHIP_PHILOSOPHY_PRINCIPLES.map((item) => (
            <div
              key={item.code}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-2.5"
            >
              <div className="text-xs font-mono font-bold text-theme-accent">{item.code}</div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FLAGSHIP ENTRY OFFER + INTERACTIVE SELF-ASSESSMENTS PREVIEW */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-theme-header text-white border border-white/10 space-y-5 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
                Flagship Entry Diagnostic · Community Hospitals (100–400 Beds)
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                30-Day AI Governance &amp; Pilot Diagnostic
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fast executive clarity for hospitals operating without a full-time CIO: a complete AI use inventory and NIST AI RMF risk tiering, Kill / Scale / Fix triage list, 90-day governance roadmap, and board one-pager—personally conducted by Shafiq Rahman.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg font-extrabold text-theme-accent tabular-nums">$6,500</div>
                  <div className="text-[11px] text-slate-400">Fixed One-Time Fee</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg font-extrabold text-white tabular-nums">30 Days</div>
                  <div className="text-[11px] text-slate-400">50% Booking / 50% Delivery</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-lg font-extrabold text-executive-gold tabular-nums">Max 2 / Mo</div>
                  <div className="text-[11px] text-slate-400">On-Time Fee Waiver Promise</div>
                </div>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('ai-strategy', 'diagnostic')}
                className="px-5 py-2.5 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs hover:opacity-95 transition-opacity cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>View Diagnostic &amp; Sample Risk Register</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('healthcare')}
                className="px-4 py-2.5 border border-white/20 text-white font-semibold rounded-xl text-xs hover:bg-white/10 transition-colors cursor-pointer"
              >
                Healthcare Practice Overview
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Self-Assessment &amp; Briefing Tools</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Evaluate Your IT, Modernization &amp; AI Readiness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Access interactive diagnostic self-assessments, printable board checklists, and research insights—no account required.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pt-1">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>9-Point Executive IT Maturity Assessment (5 min)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>Enterprise IT Modernization Readiness Scorecard</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>Hospital AI Risk &amp; Governance Scope Estimator</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>Hospital Board &amp; Municipal Printable Checklists</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => onNavigate('insights', 'it-maturity-assessment')}
                className="text-xs font-bold text-slate-900 dark:text-theme-accent hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Open Interactive Tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-theme-accent inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONSULTATION BANNER */}
      <ConsultationBanner onNavigate={onNavigate} calUrl={calUrl} />
    </div>
  );
};
