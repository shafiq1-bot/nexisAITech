import React from 'react';
import {
  Activity,
  ShieldCheck,
  CheckCircle2,
  Landmark,
  GraduationCap,
  Cpu,
  BookOpen,
  Building2,
  Download,
  ArrowRight,
} from 'lucide-react';
import healthcareFabricUrl from '../../assets/images/healthcare_data_fabric_1795016606732.jpg';
import { PageRoute, SUPPORTED_PLATFORMS } from '../../content/nexisData';
import {
  BrandBadgeMark,
  ConsultationBanner,
  PageHeroBanner,
  SectionHeading,
  buildMunicipalChecklistText,
  downloadTextDocument,
  trackEvent,
} from './SharedUI';
import { HospitalAIScopeEstimator } from './AIStrategyGovernancePage';

interface PracticePageProps {
  onNavigate: (page: PageRoute, sectionId?: string, prefillService?: string) => void;
  calUrl: string;
}

/* ============================================================================
   1. HEALTHCARE & CLINICAL INFORMATICS PAGE
   ============================================================================ */
export const HealthcarePage: React.FC<PracticePageProps> = ({ onNavigate, calUrl }) => {
  const healthcarePlatforms = SUPPORTED_PLATFORMS.filter((p) =>
    ['Epic EHR', 'MEDITECH', 'ARIA Varian', 'RAYSTATION', 'ECW', 'Oracle Health'].includes(p.name)
  );

  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="Healthcare & Clinical Informatics Practice"
        metaLine="Hospitals · Cancer Centers · Health Systems · Academic Medical Centers"
        title="Clinical Informatics, EHR Strategy & Safe Hospital AI Governance."
        description="Advisory and managed operations for community hospital CEOs, COOs, CMIOs, Trustees, and cancer centers navigating Epic, MEDITECH, oncology informatics, HIPAA cybersecurity, and governed clinical AI."
        primaryCtaLabel="Schedule a Healthcare Fit Call"
        onPrimaryCta={() => onNavigate('contact', 'fit-call', 'Healthcare & Clinical Informatics')}
        secondaryCtaLabel="View $6,500 30-Day Hospital Diagnostic"
        onSecondaryCta={() => onNavigate('ai-strategy', 'diagnostic')}
        backgroundImageUrl={healthcareFabricUrl}
      />

      {/* Target Audiences & Clinical Informatics Grounding */}
      <section id="healthcare-overview" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              eyebrow="Who We Serve in Healthcare"
              title="Executive Alignment Across Clinical Care, Technology & Fiduciary Risk"
              description="Serving community hospitals (100–400 beds across MD, DC, PA, VA and nationwide), regional health systems, cancer centers, specialty hospitals, and academic medical centers."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                'Community Hospital CEOs & COOs',
                'Hospital Boards & Governance Trustees',
                'CMIOs, CNOs & Clinical Chairpersons',
                'Hospital CIOs & IT Directors',
                'Radiation Oncology & Cancer Centers',
                'Regional Health Systems & AMCs',
              ].map((audience) => (
                <div
                  key={audience}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>{audience}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grounding Box: UMSOM & St. Agnes Healthcare / Ascension */}
          <div className="lg:col-span-5 p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-executive-gold">
              Clinical &amp; Academic Medicine Grounding
            </div>
            <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-white">Clinical Informatics Advisory (St. Agnes Healthcare / Ascension, beginning Jan 2026):</strong> Advising at the intersection of frontline clinical operations, EHR workflows, technology services, and institutional transformation.
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">University of Maryland School of Medicine (2014–2023):</strong> Nine years as Director of Enterprise IT directing the MEDITECH-to-Epic migration, HL7/FHIR clinical interoperability across seven hospitals, and radiation oncology cyber disaster recovery research.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              {healthcarePlatforms.map((p) => (
                <div key={p.name} className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <BrandBadgeMark code={p.code} bg={p.bg} accent={p.accent} brand={p.brand} />
                  <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Healthcare Capabilities */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
        <SectionHeading
          eyebrow="Healthcare Advisory Scope"
          title="End-to-End Clinical IT, Oncology Informatics & Compliance Governance"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: 'Healthcare Fractional CIO Services',
              desc: 'Experienced executive technology governance for community hospitals operating without a full-time CIO or transitioning interim leadership.',
            },
            {
              title: 'Epic, MEDITECH & Oncology EHR Strategy',
              desc: 'Core EHR optimization, post-implementation value realization, ARIA Varian / RayStation oncology information systems, and multi-site M&A consolidations.',
            },
            {
              title: 'HL7 & FHIR Clinical Interoperability',
              desc: 'Stabilizing laboratory feeds, imaging DICOM pipelines, ADT notifications, and third-party clinical APIs.',
            },
            {
              title: 'HIPAA Security, BAAs & Cyber Defense',
              desc: 'Enforcing signed Business Associate Agreements, blocking consumer AI PHI leakage, IoMT VLAN medical device isolation, and ransomware recovery.',
            },
            {
              title: 'Clinical Technology Uptime & Resilience',
              desc: 'Ensuring high availability across ED, ICU, operating rooms, radiology PACS, and linear accelerator treatment environments.',
            },
            {
              title: 'Vendor SLA & Healthcare Contract Reviews',
              desc: 'Evaluating clinical vendor renewals, eliminating dormant modules, and protecting hospital operating margins.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-2">
              <div className="flex items-center gap-2 text-theme-accent text-xs font-mono font-bold">
                <Activity className="w-4 h-4" />
                <span>0{idx + 1}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preserved 30-Day Diagnostic Distinction & Scope Estimator */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        <div className="p-6 sm:p-8 rounded-3xl bg-theme-header text-white border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase text-theme-accent">
              Distinct Scopes · Fixed-Fee Diagnostic vs. Ongoing Fractional CIO
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Start With the $6,500 30-Day Hospital AI Diagnostic — Without Retainer Lock-In
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Calibrated for 100–400 bed community hospitals in Maryland, DC, Pennsylvania, Virginia, and nationwide running Epic or MEDITECH with no full-time CIO: receive an AI Use Inventory &amp; NIST AI RMF risk tiers, Kill / Scale / Fix list, 90-day governance roadmap, and Board One-Pager + 60-min briefing (50% booking / 50% delivery, max 2/mo, no implementation included). Ongoing Fractional CIO, Helpdesk, 24x7 SOC, or Managed AI Governance are scoped separately if requested.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => onNavigate('ai-strategy', 'diagnostic')}
              className="w-full py-3 px-4 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs cursor-pointer"
            >
              Inspect Full 30-Day Diagnostic Terms →
            </button>
            <button
              type="button"
              onClick={() => onNavigate('insights', 'board-checklist')}
              className="w-full py-3 px-4 border border-white/25 text-white font-semibold rounded-xl text-xs hover:bg-white/10 cursor-pointer"
            >
              Open 5-Point Hospital Board Checklist
            </button>
          </div>
        </div>

        <HospitalAIScopeEstimator
          onPrefillContact={(notes) => onNavigate('contact', 'contact-portal', notes)}
        />
      </section>

      <ConsultationBanner onNavigate={onNavigate} calUrl={calUrl} />
    </div>
  );
};

/* ============================================================================
   2. PUBLIC SECTOR & GOVERNMENT IT MODERNIZATION PAGE
   ============================================================================ */
export const PublicSectorPage: React.FC<PracticePageProps> = ({ onNavigate, calUrl }) => {
  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="Public Sector & Government IT Modernization"
        metaLine="State Agencies · Municipalities · Counties · Transportation Authorities"
        title="Former Maryland State CIO Counsel for Government Modernization."
        description="Executive advisory helping state agency directors, commissioners, city/county managers, public CIOs, and procurement leaders retire fragile mainframes, meet NIST SP 800-53 mandates, and eliminate vendor bloat."
        primaryCtaLabel="Discuss Public-Sector Modernization"
        onPrimaryCta={() => onNavigate('contact', 'fit-call', 'Public-Sector Advisory')}
        secondaryCtaLabel="Download Municipal Governance Checklist"
        onSecondaryCta={() => {
          trackEvent('download_asset', { asset: 'municipal_checklist' });
          downloadTextDocument('Nexis_AI_Municipal_IT_Cyber_Checklist.txt', buildMunicipalChecklistText());
        }}
      />

      {/* Former State CIO Grounding */}
      <section id="public-sector-overview" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <div className="p-7 sm:p-9 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B1629] space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-executive-gold flex items-center gap-1.5">
              <Landmark className="w-4 h-4" />
              <span>Verified Former State CIO Experience (MDOT Oct 2023–Jan 2026)</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Prior public-sector leadership record — distinct from Nexis AI client claims
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Enterprise Transformation at Multi-Agency State Transportation Scale
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            As Chief Information &amp; Digital Transformation Officer and Maryland State CIO at the Maryland Department of Transportation (MDOT), Shafiq Rahman governed a $250M+ IT portfolio and ~1,500 IT staff across six modal administrations—co-authoring Maryland’s first statewide AI governance policy on the Governor’s AI Sub-cabinet, modernizing core mainframes to Microsoft Azure cloud, and rationalizing ~850 applications to ~620 for ~$6M in recurring annual taxpayer savings.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-lg font-extrabold text-slate-900 dark:text-white">$250M+</div>
              <div className="text-[11px] text-slate-500">IT Portfolio Led</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-lg font-extrabold text-slate-900 dark:text-white">6 Agencies</div>
              <div className="text-[11px] text-slate-500">Unified Shared IT</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-lg font-extrabold text-theme-accent">850 → 620</div>
              <div className="text-[11px] text-slate-500">Apps Rationalized</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-lg font-extrabold text-executive-gold">~$6M / Yr</div>
              <div className="text-[11px] text-slate-500">Taxpayer Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Three Preserved Advisory Deliverables */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        <SectionHeading
          eyebrow="Government Advisory Capabilities"
          title="Solving Legacy Technical Debt, Compliance Exposure & Budget Sprawl"
          description="Advisory and assessment mandates clearly scoped separately from downstream implementation contracts for transparent public procurement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
          {[
            'Statewide & Agency-Level IT Strategy',
            'Public-Sector Enterprise Architecture & Review Boards',
            'Legacy Mainframe & COBOL Cloud Transformation',
            'NIST SP 800-53 Governance & Legislative Audit Readiness',
            'Zero Trust Identity, CJIS & FOIA Data Compliance',
            'Application Portfolio Rationalization & Procurement Audits',
            'Public-Sector AI Governance & Constituent Trust',
            'Technology Capital Planning & Grant Alignment',
            'Enterprise Application & Permitting/ERP Modernization',
          ].map((cap) => (
            <div key={cap} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">{cap}</span>
            </div>
          ))}
        </div>

        {/* Preserved Three Public Sector Advisory Deliverables */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <h3 className="text-base font-extrabold uppercase font-mono tracking-wider text-theme-accent">
              Three Core Public Sector Advisory Deliverables
            </h3>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Independent advisory scope — separate from vendor implementation contracts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl border bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 space-y-2">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-executive-gold shrink-0" />
                <span>Legacy Migration Roadmap</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A realistic 12–24 month phased transition roadmap moving fragile mainframes and legacy systems to secure Microsoft Azure or hybrid cloud with zero citizen service disruption.
              </p>
            </div>

            <div className="p-5 rounded-2xl border bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 space-y-2">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-executive-gold shrink-0" />
                <span>NIST &amp; Data Security Assessment</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct gap mapping against NIST SP 800-53 controls, CJIS boundaries, ransomware backup resilience, and automated FOIA public-records retention.
              </p>
            </div>

            <div className="p-5 rounded-2xl border bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 space-y-2">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-executive-gold shrink-0" />
                <span>Vendor Contract &amp; Licensing Review</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Independent audit of software renewals, SLA penalties, and overlapping contracts to curb auto-escalators and identify recurring budget savings.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="text-slate-700 dark:text-slate-300">
              Need the <strong>Municipal IT Governance &amp; Cybersecurity Checklist</strong> for an upcoming council or legislative briefing?
            </div>
            <button
              type="button"
              onClick={() => {
                trackEvent('download_asset', { asset: 'municipal_checklist_inline' });
                downloadTextDocument('Nexis_AI_Municipal_IT_Cyber_Checklist.txt', buildMunicipalChecklistText());
              }}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-theme-accent text-theme-accent-contrast font-bold rounded-lg cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Checklist (.txt)</span>
            </button>
          </div>
        </div>
      </section>

      <ConsultationBanner onNavigate={onNavigate} calUrl={calUrl} />
    </div>
  );
};

/* ============================================================================
   3. HIGHER EDUCATION & ACADEMIC MEDICINE PAGE
   ============================================================================ */
export const HigherEducationPage: React.FC<PracticePageProps> = ({ onNavigate, calUrl }) => {
  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="Higher Education & Academic Medicine Practice"
        metaLine="Universities · Academic Medical Centers · Research Enclaves"
        title="Technology Governance Balancing Faculty Research Freedom & Institutional Compliance."
        description="Executive advisory for University Presidents, Provosts, Deans, and Campus CIOs bridging campus infrastructure, research computing clusters, teaching hospitals, and responsible academic AI."
        primaryCtaLabel="Discuss Campus IT Priorities"
        onPrimaryCta={() => onNavigate('contact', 'fit-call', 'Higher Education & Academic Medicine')}
        secondaryCtaLabel="View Research Publications"
        onSecondaryCta={() => onNavigate('insights', 'thought-leadership')}
      />

      {/* UMSOM Leadership Context */}
      <section id="higher-ed-overview" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <div className="p-7 sm:p-9 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-executive-gold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Medical Center Track Record (2014–2023)</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              University of Maryland School of Medicine — 9 Years Enterprise IT Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Shafiq Rahman served nine years (Oct 2014–Oct 2023) as Director of Enterprise IT reporting to academic leadership, supporting ~3,000 faculty, ~3,000 staff, and 1,300+ students, residents, and fellows across 25 academic departments while directing the MEDITECH-to-Epic migration and clinical interoperability across seven teaching hospitals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 shrink-0 font-mono text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="text-xl font-extrabold text-theme-accent">~7,300+</div>
              <div className="text-[11px] text-slate-500">Faculty, Staff &amp; Trainees</div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="text-xl font-extrabold text-slate-900 dark:text-white">7 Hospitals</div>
              <div className="text-[11px] text-slate-500">Teaching Network Interop</div>
            </div>
          </div>
        </div>

        {/* Core Services Grid */}
        <SectionHeading
          eyebrow="Campus & Research Advisory Portfolio"
          title="Built for University Presidents, Provosts, Deans & Campus CIOs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: BookOpen,
              title: 'Responsible AI Policies for Faculty & Students',
              desc: 'Pragmatic institutional AI governance balancing academic research freedom, classroom integrity guidelines, BAA-backed campus LLM platforms, and IRB data protections.',
            },
            {
              icon: Cpu,
              title: 'Research Computing & Slurm GPU Enclaves',
              desc: 'Architecting compliant high-performance computing clusters (Slurm, multi-node GPUs) and segmented research enclaves that support federal investigators without shadow infrastructure.',
            },
            {
              icon: Building2,
              title: 'Academic Health Center & Clinical EHR Integration',
              desc: 'Unifying identity management (Okta, Entra ID), network boundaries, and clinical EHR data flows (Epic / MEDITECH) between university schools and affiliated teaching hospitals.',
            },
            {
              icon: ShieldCheck,
              title: 'FERPA, HIPAA & NIST SP 800-171 Grant Compliance',
              desc: 'Safeguarding student records under FERPA, clinical research trials under HIPAA, and federally sponsored research under NIST SP 800-171 cybersecurity controls.',
            },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-slate-100 dark:bg-white/10 text-theme-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{card.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          {[
            'University IT Strategy & Operating Models',
            'Fractional & Interim Campus CIO Leadership',
            'Enterprise SIS/ERP Modernization (Banner, Workday, PeopleSoft)',
            'Cloud & Campus Network Modernization',
            'Digital Transformation Across Academic & Clinical Operations',
            'Cross-Institution Data Governance',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
              <ArrowRight className="w-3.5 h-3.5 text-theme-accent shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <ConsultationBanner onNavigate={onNavigate} calUrl={calUrl} />
    </div>
  );
};
