import React from 'react';
import { ArrowRight, Mail, Phone, ExternalLink } from 'lucide-react';
import { BrandLogoKey, PageRoute, SITE_CONFIG, FULL_BIO_TEXT, SHORT_BIO_TEXT, CAREER_TIMELINE, VERIFIED_CREDENTIALS } from '../../content/nexisData';

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

export type ThemePalette = 'cyan' | 'cobalt' | 'emerald' | 'amber';

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    });
  }
};

export const BrandBadgeMark = ({
  code,
  bg,
  accent,
  type = 'monogram',
  brand,
}: {
  code: string;
  bg: string;
  accent: string;
  type?: 'monogram' | 'shield' | 'cloud' | 'network' | 'pulse' | 'crest';
  brand?: BrandLogoKey;
}) => (
  <svg
    viewBox="0 0 32 32"
    width="30"
    height="30"
    aria-hidden="true"
    className="w-7.5 h-7.5 rounded-lg shrink-0 shadow-2xs border border-white/15"
  >
    <rect width="32" height="32" rx="7" fill={bg} />
    {brand === 'azure' ? (
      <g>
        <path d="M17.2 6.5L9.5 23.5h5.2l3.8-8.8 3.2 8.8h4.8L17.2 6.5z" fill="#38BDF8" />
        <path d="M13.5 16.8l-4 6.7h11.8l-2.6-3.2h-4.4l-.8-3.5z" fill="#FFFFFF" opacity="0.92" />
      </g>
    ) : brand === 'aws' ? (
      <g>
        <text
          x="16"
          y="16.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="8.8"
          fontWeight="800"
          fontFamily="Plus Jakarta Sans, sans-serif"
          letterSpacing="0.3"
        >
          aws
        </text>
        <path d="M7.5 20.5c4.6 3.2 11.4 3.4 16.5.5" fill="none" stroke="#FF9900" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M22.2 19.6l2.6.9-1.1 2.5" fill="none" stroke="#FF9900" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    ) : brand === 'm365' ? (
      <g>
        <rect x="7" y="7" width="8" height="8" rx="1.4" fill="#F25022" />
        <rect x="17" y="7" width="8" height="8" rx="1.4" fill="#7FBA00" />
        <rect x="7" y="17" width="8" height="8" rx="1.4" fill="#00A4EF" />
        <rect x="17" y="17" width="8" height="8" rx="1.4" fill="#FFB900" />
      </g>
    ) : brand === 'epic' ? (
      <g>
        <rect x="4" y="4" width="24" height="24" rx="5" fill="none" stroke="#FCA5A5" strokeWidth="1.1" opacity="0.45" />
        <text
          x="16"
          y="19.8"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="10.2"
          fontWeight="800"
          fontStyle="italic"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          Epic
        </text>
      </g>
    ) : brand === 'meditech' ? (
      <g>
        <path d="M13.5 7h5v6.5H25v5h-6.5V25h-5v-6.5H7v-5h6.5V7z" fill="#34D399" opacity="0.24" />
        <path d="M14.3 8h3.4v6.3H24v3.4h-6.3V24h-3.4v-6.3H8v-3.4h6.3V8z" fill="none" stroke="#6EE7B7" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="2.1" fill="#FFFFFF" />
      </g>
    ) : brand === 'aria' ? (
      <g>
        <ellipse cx="16" cy="16" rx="9.5" ry="4.5" transform="rotate(-32 16 16)" fill="none" stroke="#22D3EE" strokeWidth="1.7" />
        <ellipse cx="16" cy="16" rx="9.5" ry="4.5" transform="rotate(32 16 16)" fill="none" stroke="#A5F3FC" strokeWidth="1.5" opacity="0.8" />
        <circle cx="16" cy="16" r="2.6" fill="#FFFFFF" />
      </g>
    ) : brand === 'raystation' ? (
      <g>
        <path d="M7.5 23.5L23.5 8.5" stroke="#38BDF8" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M10.5 24.5L24.5 14" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        <path d="M7.5 18L18 7.5" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        <circle cx="22.5" cy="9.5" r="2.3" fill="#FACC15" />
      </g>
    ) : brand === 'ecw' ? (
      <g>
        <path d="M5.5 19.5h4.2l2.1-5.2 2.9 7.7 2.2-5.3 1.7 2.8h7.9" fill="none" stroke="#93C5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <text
          x="16"
          y="12.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="7.4"
          fontWeight="800"
          fontFamily="JetBrains Mono, monospace"
        >
          eCW
        </text>
      </g>
    ) : brand === 'oracle-health' ? (
      <g>
        <rect x="6.5" y="10.5" width="19" height="11" rx="5.5" fill="none" stroke="#FFFFFF" strokeWidth="2.6" />
        <line x1="11.5" y1="16" x2="20.5" y2="16" stroke="#FCA5A5" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    ) : brand === 'crowdstrike' ? (
      <g>
        <path d="M16 6l8.5 4.2-3.4 9.5L16 25.5l-5.1-5.8L7.5 10.2 16 6z" fill="none" stroke="#F87171" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M11.5 13.5L16 17l4.5-3.5" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    ) : brand === 'sentinel' ? (
      <g>
        <path d="M16 5.5L8.5 8.8v6.2c0 5 3.2 9.4 7.5 11.2 4.3-1.8 7.5-6.2 7.5-11.2V8.8L16 5.5z" fill="none" stroke="#38BDF8" strokeWidth="1.8" />
        <circle cx="16" cy="14.8" r="2.6" fill="#22D3EE" />
        <path d="M12 20c1.1-1.3 2.5-2 4-2s2.9.7 4 2" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    ) : brand === 'firewall' ? (
      <g>
        <rect x="6.5" y="8" width="19" height="16" rx="2.2" fill="none" stroke="#FDBA74" strokeWidth="1.7" />
        <line x1="6.5" y1="13.5" x2="25.5" y2="13.5" stroke="#FDBA74" strokeWidth="1.4" />
        <line x1="6.5" y1="18.5" x2="25.5" y2="18.5" stroke="#FDBA74" strokeWidth="1.4" />
        <line x1="13" y1="8" x2="13" y2="13.5" stroke="#FFFFFF" strokeWidth="1.4" />
        <line x1="19" y1="13.5" x2="19" y2="18.5" stroke="#FFFFFF" strokeWidth="1.4" />
        <line x1="13" y1="18.5" x2="13" y2="24" stroke="#FFFFFF" strokeWidth="1.4" />
      </g>
    ) : brand === 'cisco' ? (
      <g stroke="#67E8F9" strokeWidth="2.1" strokeLinecap="round">
        <line x1="7" y1="14.5" x2="7" y2="18.5" />
        <line x1="10.5" y1="11.5" x2="10.5" y2="20.5" />
        <line x1="14" y1="8.5" x2="14" y2="22.5" stroke="#FFFFFF" />
        <line x1="18" y1="8.5" x2="18" y2="22.5" stroke="#FFFFFF" />
        <line x1="21.5" y1="11.5" x2="21.5" y2="20.5" />
        <line x1="25" y1="14.5" x2="25" y2="18.5" />
      </g>
    ) : brand === 'okta-entra' ? (
      <g>
        <circle cx="12.5" cy="16" r="4.8" fill="none" stroke="#93C5FD" strokeWidth="2.2" />
        <path d="M20.5 9.5l5.5 6.5-5.5 6.5-5.5-6.5 5.5-6.5z" fill="#38BDF8" opacity="0.88" />
      </g>
    ) : brand === 'servicenow-vmware' ? (
      <g>
        <circle cx="12.5" cy="16" r="5" fill="none" stroke="#86EFAC" strokeWidth="2.1" />
        <circle cx="12.5" cy="16" r="1.6" fill="#FFFFFF" />
        <rect x="17.5" y="10" width="7.5" height="7.5" rx="1.6" fill="none" stroke="#FFFFFF" strokeWidth="1.7" />
        <rect x="15" y="14.5" width="7.5" height="7.5" rx="1.6" fill="none" stroke="#4ADE80" strokeWidth="1.7" />
      </g>
    ) : brand === 'nist-ai-rmf' ? (
      <g>
        <rect x="6" y="6" width="20" height="20" rx="4" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M10.5 20.5l5.5-10 5.5 10M12.3 17.3h7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    ) : brand === 'nist-800-53' ? (
      <g>
        <path d="M16 5.5L8.5 8.8v6.1c0 5 3.2 9.4 7.5 11.1 4.3-1.7 7.5-6.1 7.5-11.1V8.8L16 5.5z" fill="none" stroke="#38BDF8" strokeWidth="1.8" />
        <rect x="12.5" y="14" width="7" height="5.5" rx="1.2" fill="#FFFFFF" opacity="0.92" />
        <path d="M14 14v-1.6a2 2 0 0 1 4 0V14" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
      </g>
    ) : brand === 'hipaa' ? (
      <g>
        <path d="M16 5.5L8.5 8.8v6.1c0 5 3.2 9.4 7.5 11.1 4.3-1.7 7.5-6.1 7.5-11.1V8.8L16 5.5z" fill="none" stroke="#34D399" strokeWidth="1.8" />
        <path d="M14.8 11.5h2.4v3.3h3.3v2.4h-3.3v3.3h-2.4v-3.3h-3.3v-2.4h3.3v-3.3z" fill="#FFFFFF" />
      </g>
    ) : (
      <>
        {type === 'shield' && (
          <path
            d="M16 5.5L8.5 8.8v6.1c0 5 3.2 9.4 7.5 11.1 4.3-1.7 7.5-6.1 7.5-11.1V8.8L16 5.5z"
            fill="none"
            stroke={accent}
            strokeWidth="1.8"
          />
        )}
        {type === 'cloud' && (
          <path
            d="M11 22h10.5a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 11.4 13a4.5 4.5 0 0 0-.4 9z"
            fill="none"
            stroke={accent}
            strokeWidth="1.7"
          />
        )}
        {type === 'network' && (
          <g stroke={accent} strokeWidth="1.6" fill="none">
            <circle cx="16" cy="9" r="2.2" />
            <circle cx="9.5" cy="21.5" r="2.2" />
            <circle cx="22.5" cy="21.5" r="2.2" />
            <path d="M14.7 10.9L10.7 19.6M17.3 10.9l4 8.7M11.7 21.5h8.6" />
          </g>
        )}
        {type === 'pulse' && (
          <path
            d="M5 17h4.5l2.5-6 3.8 11 2.7-7.5 2 2.5H27"
            fill="none"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === 'crest' && (
          <path
            d="M16 6l8 3.5-8 3.5-8-3.5L16 6zm-5.5 6.8v4.7c0 2.1 2.5 3.8 5.5 3.8s5.5-1.7 5.5-3.8v-4.7"
            fill="none"
            stroke={accent}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === 'monogram' && (
          <text
            x="16"
            y="19.5"
            textAnchor="middle"
            fill={accent}
            fontSize={code.length >= 4 ? '8.2' : code.length === 3 ? '9.5' : '11.5'}
            fontWeight="800"
            fontFamily="JetBrains Mono, monospace"
          >
            {code}
          </text>
        )}
      </>
    )}
  </svg>
);

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
  id,
  gold = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  id?: string;
  gold?: boolean;
}) => (
  <div className={`space-y-2.5 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
    <div className={`text-xs font-mono font-bold uppercase tracking-wider ${gold ? 'text-executive-gold' : 'text-theme-accent'}`}>
      {eyebrow}
    </div>
    <h2
      id={id}
      className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
    >
      {title}
    </h2>
    {description && (
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export const PageHeroBanner = ({
  eyebrow,
  title,
  description,
  primaryCtaLabel,
  onPrimaryCta,
  secondaryCtaLabel,
  onSecondaryCta,
  backgroundImageUrl,
  metaLine,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  onPrimaryCta: () => void;
  secondaryCtaLabel?: string;
  onSecondaryCta?: () => void;
  backgroundImageUrl?: string;
  metaLine?: string;
}) => (
  <section className="relative overflow-hidden bg-theme-header text-white border-b border-theme-header">
    {backgroundImageUrl && (
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-22 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
    )}
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-gradient-to-b from-[#060E1B]/75 via-[#070D19]/85 to-[#070D19]"
    />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono uppercase tracking-wider text-theme-accent">
        <span>{eyebrow}</span>
        {metaLine && (
          <>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-300">{metaLine}</span>
          </>
        )}
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-4xl text-white">
        {title}
      </h1>

      <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onPrimaryCta}
          className="px-6 py-3 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
        >
          <span>{primaryCtaLabel}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {secondaryCtaLabel && onSecondaryCta && (
          <button
            type="button"
            onClick={onSecondaryCta}
            className="px-5 py-3 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
          >
            {secondaryCtaLabel}
          </button>
        )}
      </div>
    </div>
  </section>
);

export const ConsultationBanner = ({
  title = 'Schedule a Confidential Executive Consultation',
  description = 'Discuss Fractional CIO leadership, enterprise IT modernization, managed operations, or responsible AI governance directly with Shafiq Rahman.',
  ctaLabel = 'Schedule an Executive Consultation',
  onNavigate,
  calUrl,
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onNavigate: (page: PageRoute, sectionId?: string, prefillSubject?: string) => void;
  calUrl: string;
}) => (
  <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <div className="relative rounded-3xl p-8 sm:p-10 bg-theme-header text-white border border-white/10 overflow-hidden shadow-xl">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-theme-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-executive-gold">
            Direct Principal Stewardship · Nexis AI, LLC
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {description}
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-300 font-mono">
            <a href={`mailto:${SITE_CONFIG.email}`} className="inline-flex items-center gap-1.5 hover:text-theme-accent">
              <Mail className="w-3.5 h-3.5 text-theme-accent" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <span aria-hidden="true">·</span>
            <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center gap-1.5 hover:text-theme-accent">
              <Phone className="w-3.5 h-3.5 text-theme-accent" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('cal_booking_click', { location: 'consultation_banner' })}
            className="px-5 py-3 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow flex items-center gap-2 whitespace-nowrap"
          >
            <span>{ctaLabel}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => onNavigate('contact', 'contact-portal')}
            className="px-5 py-3 border border-white/25 hover:bg-white/10 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Structured Inquiry Form
          </button>
        </div>
      </div>
    </div>
  </section>
);

export const downloadTextDocument = (filename: string, content: string, mime = 'text/plain;charset=utf-8') => {
  if (typeof window === 'undefined') return;
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

export const buildExecutiveProfileDocument = () => {
  return `NEXIS AI, LLC — EXECUTIVE LEADERSHIP & NOMINATION PROFILE
===========================================================
Website: ${SITE_CONFIG.url}
Executive: ${SITE_CONFIG.founderFullLine}
Title: ${SITE_CONFIG.founderRoleLine}
Headquarters: ${SITE_CONFIG.location}
Contact: ${SITE_CONFIG.email} · ${SITE_CONFIG.phoneDisplay}
Booking: ${SITE_CONFIG.bookingUrl}
LinkedIn: ${SITE_CONFIG.linkedinUrl}
Google Scholar: ${SITE_CONFIG.scholarUrl}

SHORT BIOGRAPHY
---------------
${SHORT_BIO_TEXT}

FULL EXECUTIVE BIOGRAPHY
------------------------
${FULL_BIO_TEXT}

CAREER PROGRESSION
------------------
${CAREER_TIMELINE.map(
  (item) => `${item.role} — ${item.organization} (${item.period})\n${item.highlights.map((h) => `  • ${h}`).join('\n')}`
).join('\n\n')}

VERIFIED CREDENTIALS
--------------------
${VERIFIED_CREDENTIALS.map((c) => `• ${c.name} — ${c.issuer}`).join('\n')}
• Frameworks we work to: NIST AI RMF · NIST SP 800-53 · HIPAA

PUBLICATIONS & SELECTED MEDIA
-----------------------------
• Author, "AI Governance: A Local Government Leader's Guide" (ICMA PM Magazine, March 2024)
• Featured Profile, "Transit Leaders Look to Efficient, Tech-Driven Future" (Route Fifty, July 2025)
• Panelist, GovExec Government Efficiency Summit (July 2025)
• Fireside Chat, AutoTech Detroit 2024 — Critical Infrastructure & Software-Defined Security
• Co-author of peer-reviewed clinical cybersecurity & EMR data integrity papers (Applied Radiation Oncology, JACMP, Healthcare Technology Letters, Medical Physics)
`;
};

export const buildMunicipalChecklistText = () => {
  return `NEXIS AI, LLC — MUNICIPAL IT GOVERNANCE & CYBERSECURITY CHECKLIST
==================================================================
Prepared by Shafiq Rahman, MS, MBA, MCS, PMP® (Former Maryland State CIO)
Contact: ${SITE_CONFIG.email} · ${SITE_CONFIG.phoneDisplay} · ${SITE_CONFIG.url}
Note: Preliminary self-assessment aid for council, commission, and executive planning—not a formal audit or certification.

[ ] 1. Application Portfolio Inventory & Redundancy Audit
    Identify all departmental software subscriptions, end-of-life legacy systems, and overlapping contracts prior to annual budget adoption.

[ ] 2. NIST SP 800-53 / CSF Control Baseline Mapping
    Verify core municipal networks, financial ERPs, and dispatch systems map cleanly to recognized cybersecurity controls.

[ ] 3. Immutable Offline Backups & Ransomware Table-Top Testing
    Verify offline/immutable backup isolation and conduct annual recovery drills across critical city/county systems.

[ ] 4. Zero Trust Identity, MFA & CJIS/PII Boundary Enforcement
    Require multi-factor authentication everywhere and enforce least-privilege access across CJIS, tax, and HR data stores.

[ ] 5. Automated FOIA / Public Records Retention & Archival Readiness
    Confirm email, collaboration suites, and generative AI tools log and retain public records cleanly under applicable state sunshine rules.

[ ] 6. Pre-Procurement AI & SaaS Intake Gate
    Prohibit unvetted AI tools from ingesting citizen or internal administrative data without documented vendor privacy terms and executive sign-off.
`;
};
