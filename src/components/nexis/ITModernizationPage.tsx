import React, { useState } from 'react';
import {
  CheckCircle2,
  Headphones,
  ShieldAlert,
  Server,
  ArrowRight,
  Layers,
} from 'lucide-react';
import modernizationBlueprintUrl from '../../assets/images/modernization_blueprint_1795016606802.jpg';
import {
  PageRoute,
  MODERNIZATION_PILLARS,
  MODERNIZATION_LIFECYCLE,
} from '../../content/nexisData';
import { BrandBadgeMark, ConsultationBanner, PageHeroBanner, SectionHeading, trackEvent } from './SharedUI';

interface ITModernizationPageProps {
  onNavigate: (page: PageRoute, sectionId?: string, prefillService?: string) => void;
  calUrl: string;
}

export const ITModernizationPage: React.FC<ITModernizationPageProps> = ({ onNavigate, calUrl }) => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [activeManagedService, setActiveManagedService] = useState<'all' | 'helpdesk' | 'soc' | 'infrastructure'>('all');

  const currentStage = MODERNIZATION_LIFECYCLE[activeStageIdx];

  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="IT Modernization & Digital Transformation"
        metaLine="Legacy to Cloud · Zero Trust · Managed Operations"
        title="Modernizing Mission-Critical Systems Without Disrupting Essential Services."
        description="Executive transformation partner for healthcare systems, public agencies, universities, and enterprises resolving legacy COBOL/mainframe debt, fragmented infrastructure, high operational costs, and cybersecurity exposure."
        primaryCtaLabel="Discuss an IT Transformation"
        onPrimaryCta={() => onNavigate('contact', 'fit-call', 'Enterprise IT Modernization')}
        secondaryCtaLabel="Explore 7-Stage Methodology"
        onSecondaryCta={() => {
          const el = document.getElementById('transformation-lifecycle');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        backgroundImageUrl={modernizationBlueprintUrl}
      />

      {/* SIX CORE MODERNIZATION OFFERINGS */}
      <section id="modernization-pillars" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <SectionHeading
          eyebrow="Enterprise Transformation Capabilities"
          title="Six Core IT Modernization & Transformation Offerings"
          description="Structured engineering and executive governance across strategy, legacy systems, hybrid cloud, enterprise applications, cybersecurity, and recurring IT cost optimization."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODERNIZATION_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-4 flex flex-col justify-between glow-on-hover"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-theme-accent uppercase tracking-wider">Pillar {pillar.number}</span>
                  <Layers className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.summary}
                </p>
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  {pillar.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', 'contact-portal', pillar.title)}
                  className="text-xs font-bold text-theme-accent hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Scope {pillar.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE 7-STAGE TRANSFORMATION LIFECYCLE DIAGRAM */}
      <section
        id="transformation-lifecycle"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#07101E] border-y border-slate-200 dark:border-slate-800 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <SectionHeading
            eyebrow="Nexis AI Transformation Methodology"
            title="Interactive 7-Stage Modernization Lifecycle"
            description="Assess → Architect → Govern → Modernize → Integrate → Measure → Optimize. Select any phase to inspect executive objectives, risk guardrails, and concrete deliverables."
            centered
          />

          {/* Interactive Pipeline Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {MODERNIZATION_LIFECYCLE.map((item, idx) => {
              const active = idx === activeStageIdx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => {
                    setActiveStageIdx(idx);
                    trackEvent('lifecycle_stage_select', { stage: item.stage });
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    active
                      ? 'bg-theme-header text-white border-theme-accent shadow-lg ring-1 ring-theme-accent'
                      : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <span className={`text-[11px] font-mono font-bold ${active ? 'text-theme-accent' : 'text-slate-400'}`}>
                    {item.step}
                  </span>
                  <span className={`text-sm font-extrabold ${active ? 'text-white' : 'text-slate-900 dark:text-slate-200'}`}>
                    {item.stage}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Inspector Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B1629] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-sm">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
                Phase {currentStage.step} · {currentStage.stage}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {currentStage.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentStage.detail}
              </p>
            </div>
            <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="text-[11px] font-mono font-bold uppercase text-executive-gold">
                Primary Stage Deliverable
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {currentStage.artifact}
              </div>
              <button
                type="button"
                onClick={() => onNavigate('insights', 'modernization-assessment')}
                className="text-xs font-bold text-theme-accent hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
              >
                <span>Take Modernization Readiness Check</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGED SERVICES: HELPDESK, 24x7 SOC & INFRASTRUCTURE SERVICES (FULLY PRESERVED) */}
      <section id="managed-services" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 scroll-mt-24">
        <SectionHeading
          eyebrow="Enterprise Operations & Cyber Defense"
          title="Managed Services: Helpdesk, 24x7 SOC & Infrastructure Services"
          description="End-to-end operational IT support, continuous cyber defense, and resilient hybrid cloud/network administration for healthcare, public sector, and higher education organizations nationwide."
          centered
        />

        <div className="border rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
          {/* Delivery Model & Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="space-y-1 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase text-theme-accent tracking-wider">
                Delivery Model
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Managed services are delivered by Nexis AI’s in-house team together with vetted subcontractor partners, under Shafiq Rahman’s direction.
              </p>
            </div>
            <div className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl border bg-white dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 shrink-0">
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

          {/* 3 Service Pillars */}
          <div className={`grid gap-6 ${activeManagedService === 'all' ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 max-w-3xl mx-auto'}`}>
            {(activeManagedService === 'all' || activeManagedService === 'helpdesk') && (
              <article
                id="managed-helpdesk"
                className="p-6 rounded-2xl border bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-5 scroll-mt-24"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-theme-accent">01. Managed Helpdesk</span>
                    <span>Tier 1–3</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-theme-accent shrink-0">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Managed Helpdesk (Tier 1–3)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Multi-channel Tier 1–3 technical support, endpoint administration, and ITIL service workflows for clinical shifts, agency staff, and campus end-users nationwide.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700/70 pt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>Clinical EHR (Epic / MEDITECH), workstation &amp; VDI ticket triage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>Microsoft 365, Intune MDM, Okta / Entra ID MFA &amp; SSO provisioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>ServiceNow / ITIL escalation runbooks &amp; root-cause analytics</span>
                    </li>
                  </ul>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                    Scoped after a fit call · Response-time targets are set in the service agreement.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700/70">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', 'contact-portal', 'Managed Helpdesk (Tier 1–3)')}
                    className="w-full py-2.5 px-4 bg-slate-900 dark:bg-slate-800 hover:opacity-90 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Request Helpdesk Scope →
                  </button>
                </div>
              </article>
            )}

            {(activeManagedService === 'all' || activeManagedService === 'soc') && (
              <article
                id="soc"
                className="p-6 rounded-2xl border-2 border-theme-accent bg-theme-header text-white flex flex-col justify-between space-y-5 shadow-lg scroll-mt-24"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-theme-accent">
                    <span className="font-bold">02. 24x7 SOC &amp; Cyber</span>
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
                    Continuous threat detection, Zero Trust identity controls, SIEM/XDR monitoring, and incident containment aligned with HIPAA and NIST SP 800-53.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-200 border-t border-white/10 pt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>24x7 SIEM/SOAR correlation &amp; CrowdStrike / Defender EDR telemetry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>Zero Trust IAM/PAM, phishing defense &amp; rapid ransomware isolation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>Vulnerability management, cyber insurance readiness &amp; board reporting</span>
                    </li>
                  </ul>
                  <p className="text-[11px] font-mono text-slate-400 pt-1">
                    Scoped after a fit call · Response-time targets are set in the service agreement.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', 'contact-portal', '24x7 SOC — Cyber Defense')}
                    className="w-full py-2.5 px-4 bg-theme-accent hover:opacity-95 text-theme-accent-contrast text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    Inquire About 24x7 SOC →
                  </button>
                </div>
              </article>
            )}

            {(activeManagedService === 'all' || activeManagedService === 'infrastructure') && (
              <article
                id="infrastructure"
                className="p-6 rounded-2xl border bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-5 scroll-mt-24"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-theme-accent">03. Infrastructure</span>
                    <span>Cloud &amp; Network</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-theme-accent shrink-0">
                      <Server className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Infrastructure Services
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Resilient hybrid cloud, core networking, virtualization, and storage architecture supporting clinical, agency, and campus workloads.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700/70 pt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>Microsoft Azure, AWS hybrid cloud &amp; VMware / Hyper-V operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>Cisco SD-WAN, Palo Alto / Fortinet firewalls &amp; IoMT VLAN segmentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent shrink-0 mt-0.5" />
                      <span>Active Directory / Entra ID, immutable backups &amp; BC/DR failover testing</span>
                    </li>
                  </ul>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-1">
                    Scoped after a fit call · Response-time targets are set in the service agreement.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700/70">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', 'contact-portal', 'Enterprise Infrastructure Services')}
                    className="w-full py-2.5 px-4 bg-slate-900 dark:bg-slate-800 hover:opacity-90 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Request Infrastructure Scope →
                  </button>
                </div>
              </article>
            )}
          </div>

          {/* Supported Platform Matrix */}
          <div className="p-6 rounded-2xl border bg-white dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
                  Cybersecurity, IT Services, Infrastructure &amp; Platforms We Support
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Operational architecture and day-to-day administration across core clinical, government, higher-ed, and enterprise stacks.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                Vendor-Agnostic Stewardship
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2">
                  <BrandBadgeMark code="SOC" bg="#0F2A44" accent="#22D3EE" type="shield" />
                  <div className="font-bold text-slate-900 dark:text-white text-xs">Cybersecurity &amp; 24x7 SOC</div>
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <li>• Microsoft Sentinel &amp; Defender XDR</li>
                  <li>• CrowdStrike Falcon EDR / MDR</li>
                  <li>• Palo Alto Networks &amp; Fortinet NGFW</li>
                  <li>• Zero Trust IAM, MFA &amp; PAM Controls</li>
                  <li>• Vulnerability Scans &amp; Tabletop Drills</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2">
                  <BrandBadgeMark code="M365" bg="#1E3A8A" accent="#93C5FD" brand="m365" />
                  <div className="font-bold text-slate-900 dark:text-white text-xs">Managed IT &amp; Service Desk</div>
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <li>• Tier 1–3 Clinical &amp; Campus Helpdesk</li>
                  <li>• Microsoft 365 &amp; Intune MDM</li>
                  <li>• Okta &amp; Microsoft Entra ID (SSO/MFA)</li>
                  <li>• ServiceNow ITIL Ticket Governance</li>
                  <li>• Endpoint Patching &amp; VDI Workstations</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2">
                  <BrandBadgeMark code="CLD" bg="#0C4A6E" accent="#38BDF8" type="cloud" />
                  <div className="font-bold text-slate-900 dark:text-white text-xs">Cloud &amp; Core Infrastructure</div>
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <li>• Microsoft Azure &amp; AWS Hybrid Cloud</li>
                  <li>• VMware vSphere &amp; Hyper-V Clusters</li>
                  <li>• Cisco Switching, Wi-Fi &amp; SD-WAN</li>
                  <li>• IoMT Medical Device VLAN Isolation</li>
                  <li>• Immutable Backups &amp; BC/DR Failover</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2">
                  <BrandBadgeMark code="EHR" bg="#064E3B" accent="#34D399" type="pulse" />
                  <div className="font-bold text-slate-900 dark:text-white text-xs">EHR &amp; Enterprise Platforms</div>
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  <li>• Epic, MEDITECH &amp; eClinicalWorks (ECW)</li>
                  <li>• ARIA Varian &amp; RayStation Oncology Systems</li>
                  <li>• Oracle Health &amp; HL7 / FHIR Engines</li>
                  <li>• Workday, PeopleSoft &amp; Ellucian Banner</li>
                  <li>• Tyler / CGI / SAP &amp; Slurm GPU Enclaves</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4-Step Managed Services Engagement Model */}
          <div className="p-6 rounded-2xl border bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
                Managed Services Engagement Model (4 Steps)
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Response-time targets are set in the service agreement.
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {[
                { num: 'Step 01', title: '30-minute fit call', desc: 'Align on current pain points, staffing gaps, compliance drivers, and priorities directly with Shafiq Rahman.' },
                { num: 'Step 02', title: 'Operational Assessment', desc: 'Operational assessment benchmarked against your existing staff, ticketing load, and security posture.' },
                { num: 'Step 03', title: '30-day transition', desc: 'Structured onboarding, telemetry integration, escalation runbooks, and service agreement alignment.' },
                { num: 'Step 04', title: 'Monthly Coverage & Review', desc: 'Ongoing monthly coverage with transparent monthly operational reporting and a quarterly executive review.' },
              ].map((step) => (
                <div key={step.num} className="p-4 rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="font-mono font-bold text-theme-accent">{step.num}</div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">{step.title}</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationBanner onNavigate={onNavigate} calUrl={calUrl} />
    </div>
  );
};
