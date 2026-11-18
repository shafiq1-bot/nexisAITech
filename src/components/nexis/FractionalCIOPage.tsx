import React from 'react';
import {
  CheckCircle2,
  Activity,
  ShieldCheck,
  Clock,
  FileCheck2,
  Briefcase,
  ArrowRight,
  Target,
} from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../../content/nexisData';
import { ConsultationBanner, PageHeroBanner, SectionHeading } from './SharedUI';

interface FractionalCIOPageProps {
  onNavigate: (page: PageRoute, sectionId?: string, prefillService?: string) => void;
  calUrl: string;
}

export const FractionalCIOPage: React.FC<FractionalCIOPageProps> = ({ onNavigate, calUrl }) => {
  const selectTier = (tierLabel: string) => {
    onNavigate('contact', 'contact-portal', tierLabel);
  };

  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="Fractional CIO & Executive Advisory"
        metaLine="Milestone-Focused Stewardship · Nationwide US"
        title="Seasoned CIO Leadership Without Full-Time Executive Overhead."
        description="Access former State CIO and academic health system IT leadership to align strategy, govern EHR/ERP transformations, enforce cybersecurity resilience, and audit vendor spend."
        primaryCtaLabel="Explore Fractional CIO Engagement"
        onPrimaryCta={() => onNavigate('contact', 'fit-call', 'Fractional CIO Engagement')}
        secondaryCtaLabel="View 3 Engagement Tiers"
        onSecondaryCta={() => {
          const el = document.getElementById('fractional-cio-tiers');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* MILESTONE PHILOSOPHY & ENTRY BRIDGE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-7 sm:p-9 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
              <Target className="w-4 h-4" />
              <span>Measurable Milestones — Not Open-Ended Advisory</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Executive Accountability Scoped Around Institutional Outcomes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Organizations frequently struggle when hiring interim technology leaders on unanchored hourly arrangements without an inventory of active risks or vendor obligations. Nexis AI scopes Fractional and Interim CIO engagements transparently after an initial fit call—or following our fixed-fee{' '}
              <button
                type="button"
                onClick={() => onNavigate('ai-strategy', 'diagnostic')}
                className="text-theme-accent font-bold underline cursor-pointer"
              >
                30-Day AI Governance &amp; Pilot Diagnostic ($6,500)
              </button>
              —around defined governance, modernization, and cost-control milestones.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-2.5 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-200">
              ✓ Board &amp; CEO/COO Technology Reporting
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-200">
              ✓ Transparent Quarterly / Monthly Milestones
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-200">
              ✓ Direct Oversight by {SITE_CONFIG.founderName}
            </div>
          </div>
        </div>
      </section>

      {/* THREE ENGAGEMENT TIERS (PRESERVED VERBATIM STRUCTURE) */}
      <section id="fractional-cio-tiers" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <SectionHeading
          eyebrow="Retainer & Engagement Architecture"
          title="Three Structured Executive Leadership Tiers"
          description="Select the level of Fractional or Interim CIO cadence aligned with your institution’s complexity, regulatory demands, and modernization calendar."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Tier 1 */}
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-slate-500">Tier 1</span>
                <span className="font-bold text-theme-accent">~10–15 hrs / month</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Strategic Advisor
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  High-level C-suite steering for organizations with active IT operational managers seeking seasoned CIO counsel.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Executive technology briefings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>IT steering committee leadership</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Technology strategy &amp; roadmap development</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Vendor SLA &amp; pricing governance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Technology investment &amp; budget reviews</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Executive decision support</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => selectTier('Tier 1 — Strategic Advisor (~10–15 hrs/mo)')}
                className="w-full py-3 px-4 bg-slate-900 dark:bg-slate-800 hover:opacity-90 text-white font-bold rounded-xl text-xs transition-opacity cursor-pointer"
              >
                Inquire About Advisor Tier →
              </button>
            </div>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="p-7 rounded-3xl border-2 border-theme-accent bg-theme-header text-white flex flex-col justify-between space-y-6 shadow-2xl relative">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-executive-gold">Tier 2 · Core Mandate</span>
                <span className="font-bold text-theme-accent">~1–2 Days / Week</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  Fractional Executive CIO
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Active executive technology leadership directing teams, core platforms, budgets, and board reporting without permanent CIO payroll overhead.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Executive technology leadership</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>IT team guidance &amp; management</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>EHR, ERP, infrastructure &amp; cloud modernization</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>IT budget &amp; portfolio management</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Vendor contract oversight</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Enterprise architecture, governance &amp; board reporting</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => selectTier('Tier 2 — Fractional Executive CIO (1–2 Days/Week)')}
                className="w-full py-3 px-4 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-extrabold rounded-xl text-xs transition-opacity cursor-pointer shadow"
              >
                Engage Fractional CIO →
              </button>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-slate-500">Tier 3</span>
                <span className="font-bold text-theme-accent">Up to ~2.5 Days / Week</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Interim Transformation Lead
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Dedicated turnaround and modernization mandate built around three-to-nine-month transformation milestones.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Major IT transformation &amp; turnaround programs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Legacy mainframe &amp; enterprise app modernization</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>EHR &amp; ERP transformation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Cloud migration &amp; infrastructure modernization</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Zero Trust cybersecurity &amp; enterprise AI programs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                  <span>Three-to-nine-month transformation milestones</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => selectTier('Tier 3 — Interim Transformation Lead (Up to 2.5 Days/Week)')}
                className="w-full py-3 px-4 bg-slate-900 dark:bg-slate-800 hover:opacity-90 text-white font-bold rounded-xl text-xs transition-opacity cursor-pointer"
              >
                Request Transformation Mandate →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRESERVED HEALTHCARE & ENTERPRISE FRACTIONAL CIO PILLARS */}
      <section id="healthcare-cio-pillars" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <SectionHeading
          eyebrow="Operational & Clinical Mandate Coverage"
          title="What Fractional CIO Stewardship Governs"
          description="Hands-on executive governance tailored for community hospitals, regional health systems, state/municipal agencies, and universities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: Activity,
              title: 'EHR & Core Platform Stability',
              desc: 'Active oversight of Epic, MEDITECH, ERP/HRIS, HL7/FHIR interface engines, laboratory feeds, and third-party applications to eliminate integration debt.',
            },
            {
              icon: ShieldCheck,
              title: 'HIPAA, NIST & BAA Enforcement',
              desc: 'Rigorous verification that sensitive data in transit and at rest remains encrypted, Business Associate Agreements stay current, and AI tools do not train on protected data.',
            },
            {
              icon: Clock,
              title: 'Mission-Critical Uptime & High Availability',
              desc: 'High-availability architecture across emergency departments, oncology suites, citizen-facing portals, and core enterprise workloads.',
            },
            {
              icon: FileCheck2,
              title: 'Vendor SLA & Contract Cost Audits',
              desc: 'Auditing recurring subscriptions, retiring shelfware licenses (mirroring MDOT’s 850-to-620 portfolio discipline), and renegotiating renewal terms.',
            },
            {
              icon: ShieldCheck,
              title: 'Cybersecurity & Cyber Insurance Posture',
              desc: 'Enforcing company-wide MFA, immutable isolated backups, and ransomware recovery drills that protect institutional operations and insurance eligibility.',
            },
            {
              icon: Briefcase,
              title: 'Capital Planning & Board Reporting',
              desc: 'Clear quarterly board decks tying IT capital requests directly to risk reduction, regulatory obligations, and measurable operational ROI.',
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-3"
              >
                <div className="p-2.5 w-fit rounded-xl bg-slate-100 dark:bg-white/10 text-theme-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-white">Looking for day-to-day operational execution as well?</strong>{' '}
            Pair Fractional CIO leadership with Nexis AI’s Managed Helpdesk, 24x7 SOC, and Infrastructure Services.
          </div>
          <button
            type="button"
            onClick={() => onNavigate('it-modernization', 'managed-services')}
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-theme-accent hover:underline cursor-pointer"
          >
            <span>Explore Managed Operations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      <ConsultationBanner onNavigate={onNavigate} calUrl={calUrl} />
    </div>
  );
};
