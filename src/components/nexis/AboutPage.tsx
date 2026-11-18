import React, { useState } from 'react';
import {
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Printer,
  ArrowRight,
  Mic,
  Award,
  Check,
} from 'lucide-react';
import {
  PageRoute,
  SITE_CONFIG,
  CAREER_TIMELINE,
  VERIFIED_CREDENTIALS,
  SUPPORTED_PLATFORMS,
  FRAMEWORKS_WE_WORK_TO,
  SHORT_BIO_TEXT,
  FULL_BIO_TEXT,
  SPEAKING_TOPICS,
} from '../../content/nexisData';
import {
  BrandBadgeMark,
  ConsultationBanner,
  PageHeroBanner,
  SectionHeading,
  buildExecutiveProfileDocument,
  downloadTextDocument,
  trackEvent,
} from './SharedUI';

interface AboutPageProps {
  onNavigate: (page: PageRoute, sectionId?: string) => void;
  calUrl: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, calUrl }) => {
  const [bioTab, setBioTab] = useState<'full' | 'short'>('full');
  const [copiedBio, setCopiedBio] = useState(false);

  const handleCopyBio = async () => {
    const text = bioTab === 'short' ? SHORT_BIO_TEXT : FULL_BIO_TEXT;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBio(true);
      trackEvent('bio_copied', { format: bioTab });
      setTimeout(() => setCopiedBio(false), 2500);
    } catch {
      downloadTextDocument(`Shafiq_Rahman_${bioTab}_Bio.txt`, text);
    }
  };

  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="About Shafiq · Executive Leadership Profile"
        metaLine="MS, MBA, MCS, PMP® · Former Maryland State CIO"
        title="Executive Technology Stewardship Built Across Government, Healthcare & Higher Education."
        description="Over two decades directing multi-agency IT transformations, academic health systems, EHR modernizations, enterprise cloud migrations, and statewide AI governance."
        primaryCtaLabel="Schedule an Executive Consultation"
        onPrimaryCta={() => onNavigate('contact', 'fit-call')}
        secondaryCtaLabel="Download Executive Profile"
        onSecondaryCta={() => {
          const el = document.getElementById('executive-downloads');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* BIOGRAPHY & HEADSHOT */}
      <section id="about-bio" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Authentic Portrait */}
          <div className="lg:col-span-4 space-y-5">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 space-y-4 shadow-sm">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <img
                  src="/images/shafiq_about_large.jpg"
                  alt="Shafiq Rahman, MS, MBA, MCS, PMP® — Founder of Nexis AI and Former Maryland State CIO"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/profile_circle.png';
                  }}
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {SITE_CONFIG.founderFullLine}
                </h2>
                <p className="text-xs font-mono text-theme-accent">
                  Former Maryland State CIO · Founder &amp; Principal, Nexis AI
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3 text-xs">
                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-700 dark:text-theme-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={SITE_CONFIG.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-700 dark:text-theme-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-300 dark:text-slate-700">·</span>
                <a
                  href={SITE_CONFIG.icmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-700 dark:text-theme-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>ICMA Author</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Career Progression Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <SectionHeading
              eyebrow="Executive Career Progression"
              title="Proven Institutional Leadership Across Complex Environments"
              description="Distinctive blend of cabinet-level public-sector CIO leadership, nine years directing academic medical center IT, and clinical informatics advisory."
            />

            <div className="space-y-5">
              {CAREER_TIMELINE.map((role, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                        {role.role}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-theme-accent">
                        {role.organization}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-executive-gold font-bold shrink-0">
                      {role.period}
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {role.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS & STANDARDS STRIP */}
      <section
        id="credentials-standards"
        aria-labelledby="credentials-heading"
        className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24"
      >
        <div className="border rounded-3xl p-6 sm:p-8 space-y-6 bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <h2
              id="credentials-heading"
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-300"
            >
              Credentials &amp; Standards
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Verified academic degrees, active project leadership credentials, enterprise technology stack proficiency, and governance frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {VERIFIED_CREDENTIALS.map((cred) => (
              <div
                key={cred.name}
                className="p-4 rounded-2xl border flex items-start gap-3 bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800"
              >
                <BrandBadgeMark code={cred.code} bg={cred.bg} accent={cred.accent} type={cred.type} />
                <div className="space-y-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                    {cred.name}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                    {cred.issuer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*
            FUTURE BADGE PLACEHOLDERS (HTML/JSX comments only — NOT visible on page; do not activate until verified):
            1. [PLACEHOLDER] Google Cloud Skills Boost — Introduction to Responsible AI (completion badge)
            2. [PLACEHOLDER] Microsoft Learn — Responsible AI Principles & Practices (achievement badge)
            3. [PLACEHOLDER] IBM SkillsBuild — AI Fundamentals (Credly badge)
            4. [PLACEHOLDER] Cisco Networking Academy — Introduction to Cybersecurity (Credly badge — COURSE badge, NOT a Cisco certification; label "Course Completion" if ever displayed)
          */}

          {/* Supported Platforms Ecosystem Matrix */}
          <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Supported Platforms, Cybersecurity &amp; Infrastructure Ecosystem
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
              {SUPPORTED_PLATFORMS.map((platform) => (
                <div
                  key={platform.name}
                  className="p-2.5 rounded-xl border flex items-center gap-2.5 bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800"
                >
                  <BrandBadgeMark
                    code={platform.code}
                    bg={platform.bg}
                    accent={platform.accent}
                    brand={platform.brand}
                  />
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                      {platform.name}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      {platform.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks Line (exact non-certification wording preserved) */}
          <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Frameworks we work to: NIST AI RMF · NIST SP 800-53 · HIPAA
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {FRAMEWORKS_WE_WORK_TO.map((fw) => (
                <div
                  key={fw.name}
                  className="p-2.5 rounded-xl border flex items-center gap-2.5 bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800"
                >
                  <BrandBadgeMark code={fw.code} bg={fw.bg} accent={fw.accent} brand={fw.brand} />
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                      {fw.name}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                      {fw.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE BIOGRAPHY DOWNLOADS & SPEAKING TOPICS */}
      <section id="executive-downloads" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <SectionHeading
          eyebrow="Executive Profile & Media Center"
          title="Executive Biography Downloads & Speaking Topics"
          description="Official executive biographies, downloadable profile documentation, high-resolution headshots, and conference keynote topics for boards, event organizers, and executive committees."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Interactive Bio Reader & Export */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                <button
                  type="button"
                  onClick={() => setBioTab('full')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    bioTab === 'full'
                      ? 'bg-theme-accent text-theme-accent-contrast font-bold'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Full Executive Bio
                </button>
                <button
                  type="button"
                  onClick={() => setBioTab('short')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    bioTab === 'short'
                      ? 'bg-theme-accent text-theme-accent-contrast font-bold'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Short Program Bio (~130 Words)
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopyBio}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
              >
                {copiedBio ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-theme-accent" />}
                <span>{copiedBio ? 'Copied to Clipboard' : 'Copy Bio Text'}</span>
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {bioTab === 'short' ? SHORT_BIO_TEXT : FULL_BIO_TEXT}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  trackEvent('download_asset', { asset: 'executive_profile_txt' });
                  downloadTextDocument('Shafiq_Rahman_Executive_Profile_NexisAI.txt', buildExecutiveProfileDocument());
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs hover:opacity-95 transition-opacity cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Full Executive Profile (.txt)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent('print_asset', { asset: 'executive_profile_pdf' });
                  window.print();
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-theme-accent" />
                <span>Print / Save Bio Profile PDF</span>
              </button>

              <a
                href="/profile_circle.png"
                download="Shafiq_Rahman_Headshot.png"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-theme-accent" />
                <span>Download Headshot (PNG)</span>
              </a>
            </div>
          </div>

          {/* Speaking & Advisory Topics */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
                  <Mic className="w-4 h-4" />
                  <span>Speaking &amp; Advisory Topics</span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('insights', 'executive-recognition')}
                  className="text-xs font-semibold text-executive-gold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Media Kit</span>
                </button>
              </div>

              <div className="space-y-3">
                {SPEAKING_TOPICS.map((topic, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 space-y-1.5"
                  >
                    <div className="text-[11px] font-mono text-theme-accent font-semibold">
                      {topic.audience}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {topic.summary}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onNavigate('contact', 'contact-portal')}
                className="w-full py-3 px-4 bg-theme-header text-white font-bold rounded-xl text-xs hover:opacity-95 transition-opacity cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Invite Shafiq to Speak or Collaborate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ConsultationBanner onNavigate={onNavigate} calUrl={calUrl} />
    </div>
  );
};
