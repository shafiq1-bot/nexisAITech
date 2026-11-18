import React, { useState, useEffect } from 'react';
import {
  Award,
  BookOpen,
  FileText,
  ExternalLink,
  Download,
  Printer,
  CheckCircle2,
  SlidersHorizontal,
  X,
  Share2,
  Copy,
  Check,
  Clock,
  ArrowRight,
  GraduationCap,
  ShieldAlert,
} from 'lucide-react';
import {
  PageRoute,
  SITE_CONFIG,
  EXECUTIVE_IMPACT_METRICS,
  THOUGHT_LEADERSHIP_ARTICLES,
  ThoughtLeadershipArticle,
  VERIFIED_CREDENTIALS,
} from '../../content/nexisData';
import { researchPublications, googleScholarProfile } from '../../data/researchPublicationsData';
import { executiveMediaItems } from '../../data/executiveWorkOnlineData';
import { ExecutiveITMaturityAssessment } from '../ExecutiveITMaturityAssessment';
import { HospitalAIScopeEstimator } from './AIStrategyGovernancePage';
import {
  ConsultationBanner,
  PageHeroBanner,
  SectionHeading,
  buildExecutiveProfileDocument,
  buildMunicipalChecklistText,
  downloadTextDocument,
  trackEvent,
} from './SharedUI';

interface InsightsRecognitionPageProps {
  onNavigate: (page: PageRoute, sectionId?: string, prefillService?: string) => void;
  calUrl: string;
  isDark: boolean;
}

const ARTICLE_CATEGORIES: Array<'All' | ThoughtLeadershipArticle['category']> = [
  'All',
  'CIO Leadership',
  'AI Governance',
  'Digital Transformation',
  'Enterprise IT Modernization',
  'Healthcare Technology',
  'Public-Sector Technology',
  'Cybersecurity and Risk',
  'Academic Technology',
];

const BOARD_CHECKLIST_ITEMS = [
  {
    id: 'inventory',
    title: 'Comprehensive Departmental AI Inventory & Executive Sponsor',
    detail: 'Maintain a living register of all clinical and operational AI tools/pilots with a named department executive accountable for each.',
  },
  {
    id: 'baa',
    title: 'HIPAA PHI Boundary Enforcement & Executed BAA',
    detail: 'Verify an executed Business Associate Agreement is on file before any patient data or clinical notes enter a third-party AI model.',
  },
  {
    id: 'risk-tiering',
    title: 'NIST AI RMF Risk Tiering (High / Medium / Low)',
    detail: 'Classify tools objectively by clinical reliance, algorithmic bias exposure, and EHR integration scope.',
  },
  {
    id: 'kill-scale-fix',
    title: 'Defensible Decision Triage (Kill / Scale / Fix)',
    detail: 'Establish documented authority to terminate unsafe shadow tools, remediate medium-risk controls, and scale vetted pilots.',
  },
  {
    id: 'intake-gate',
    title: 'Pre-Purchase AI Intake Gate Prior to Budget Authorization',
    detail: 'Require executive technology and risk sign-off before departmental AI software renewals or capital requests reach board approval.',
  },
];

const MUNICIPAL_CHECKLIST_ITEMS = [
  {
    id: 'm1',
    title: 'Application Portfolio Inventory & Redundancy Audit',
    detail: 'Catalog departmental software contracts and end-of-life legacy systems prior to annual municipal budget adoption.',
  },
  {
    id: 'm2',
    title: 'NIST SP 800-53 / Cybersecurity Framework Mapping',
    detail: 'Align core agency networks, utility OT, and financial ERPs with recognized federal cybersecurity controls.',
  },
  {
    id: 'm3',
    title: 'Immutable Offline Backups & Ransomware Table-Top Testing',
    detail: 'Verify offline backup isolation and conduct annual recovery drills across mission-critical dispatch and revenue platforms.',
  },
  {
    id: 'm4',
    title: 'Zero Trust Identity, MFA & CJIS/PII Access Boundaries',
    detail: 'Enforce multi-factor authentication everywhere and restrict privileged access across CJIS, tax, and HR databases.',
  },
  {
    id: 'm5',
    title: 'FOIA / Public Records Retention & Archival Readiness',
    detail: 'Verify collaboration suites and AI assistants log and retain public records cleanly under statutory retention schedules.',
  },
  {
    id: 'm6',
    title: 'Pre-Procurement AI & SaaS Vendor Intake Gate',
    detail: 'Prohibit unvetted AI tools from ingesting resident data without documented privacy terms and executive authorization.',
  },
];

const MODERNIZATION_READINESS_QUESTIONS = [
  {
    id: 'mod-1',
    domain: 'Legacy & Application Debt',
    title: 'Maintained enterprise application inventory with Tolerance / Invest / Migrate / Eliminate scoring',
    weight: 15,
  },
  {
    id: 'mod-2',
    domain: 'Legacy & Application Debt',
    title: 'Documented 12–24 month roadmap retiring unsupported mainframes, COBOL, or end-of-life servers',
    weight: 15,
  },
  {
    id: 'mod-3',
    domain: 'Cloud & Architecture',
    title: 'Standardized Microsoft Azure or AWS landing zones with Entra ID / Okta Zero Trust SSO governance',
    weight: 12,
  },
  {
    id: 'mod-4',
    domain: 'Cloud & Architecture',
    title: 'Defined API / HL7 / FHIR interoperability strategy replacing brittle point-to-point scripts',
    weight: 12,
  },
  {
    id: 'mod-5',
    domain: 'Cybersecurity & Continuity',
    title: '24x7 SIEM / EDR telemetry monitoring with isolated, tested immutable recovery backups',
    weight: 14,
  },
  {
    id: 'mod-6',
    domain: 'Cybersecurity & Continuity',
    title: 'Segmented VLAN enclaves isolating critical medical devices (IoMT) or operational technology (OT)',
    weight: 12,
  },
  {
    id: 'mod-7',
    domain: 'Governance & Fiscal Control',
    title: 'Formal Architecture Review Board (ARB) & pre-procurement AI/SaaS risk review gate',
    weight: 10,
  },
  {
    id: 'mod-8',
    domain: 'Governance & Fiscal Control',
    title: 'Annual software licensing & vendor SLA audit reallocating shelfware spend into priorities',
    weight: 10,
  },
];

type ResourceToolTab = 'board-checklist' | 'it-maturity' | 'municipal' | 'modernization-readiness' | 'scope-estimator';

export const InsightsRecognitionPage: React.FC<InsightsRecognitionPageProps> = ({
  onNavigate,
  calUrl,
  isDark,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ThoughtLeadershipArticle['category']>('All');
  const [activeArticle, setActiveArticle] = useState<ThoughtLeadershipArticle | null>(null);
  const [copiedArticleLink, setCopiedArticleLink] = useState(false);

  const [activeTool, setActiveTool] = useState<ResourceToolTab>('board-checklist');
  const [boardChecks, setBoardChecks] = useState<Record<string, boolean>>({});
  const [municipalChecks, setMunicipalChecks] = useState<Record<string, boolean>>({});
  const [modChecks, setModChecks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const filteredArticles =
    selectedCategory === 'All'
      ? THOUGHT_LEADERSHIP_ARTICLES
      : THOUGHT_LEADERSHIP_ARTICLES.filter((a) => a.category === selectedCategory);

  const boardCheckedCount = Object.values(boardChecks).filter(Boolean).length;
  const municipalCheckedCount = Object.values(municipalChecks).filter(Boolean).length;
  const modernizationScore = MODERNIZATION_READINESS_QUESTIONS.reduce(
    (sum, item) => (modChecks[item.id] ? sum + item.weight : sum),
    0
  );

  const handleCopyArticleUrl = async (article: ThoughtLeadershipArticle) => {
    const shareUrl = article.externalUrl || `${SITE_CONFIG.url}/?page=insights#${article.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedArticleLink(true);
      setTimeout(() => setCopiedArticleLink(false), 2200);
    } catch {
      // Clipboard blocked in restricted frames
    }
  };

  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="Insights, Recognition & Executive Assessment Resources"
        metaLine="Public Record · Thought Leadership · Interactive Readiness Tools"
        title="Executive Recognition, Published Research & Governance Resources."
        description="Explore verified national press, peer-reviewed clinical cybersecurity scholarship, CIO thought leadership, and preliminary self-assessment instruments authored by Shafiq Rahman."
        primaryCtaLabel="Schedule Executive Consultation"
        onPrimaryCta={() => onNavigate('contact', 'contact-portal')}
        secondaryCtaLabel="Invite Shafiq to Speak or Collaborate"
        onSecondaryCta={() => onNavigate('contact', 'contact-portal', 'Speaking & executive collaboration')}
      />

      {/* SECTION A: EXECUTIVE LEADERSHIP, INNOVATION & RECOGNITION */}
      <section
        id="executive-recognition"
        className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            gold
            eyebrow="Executive Leadership, Innovation & Recognition"
            title="Public-Record Stewardship Across State Government, Healthcare & Higher Education"
            description="Verified institutional scope and published contributions—built transparently for board due diligence, executive partnerships, media inquiries, and formal recognition review."
          />
          <button
            type="button"
            onClick={() => onNavigate('contact', 'contact-portal', 'Speaking & executive collaboration')}
            className="shrink-0 px-5 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs transition-all cursor-pointer inline-flex items-center gap-2 self-start lg:self-auto"
          >
            <span>Invite Shafiq to Speak or Collaborate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Verified Recognition & Award Evaluation Readiness Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Impact Record + Nomination Ready Box */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EXECUTIVE_IMPACT_METRICS.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-1.5"
                >
                  <div className="text-xl sm:text-2xl font-mono font-extrabold text-theme-accent tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                    {item.label}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {item.context}
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Public Distinctions & Structured Award Cabinet */}
            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-executive-gold" />
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    Verified Distinctions, Summits &amp; Recognition Record
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Independently Verifiable Sources Only
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-mono font-bold text-theme-accent uppercase text-[11px]">Governor’s AI Sub-Cabinet</div>
                  <div className="font-bold text-slate-900 dark:text-white">Maryland Statewide AI Governance Policy</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Co-authored Maryland’s first statewide executive AI governance policy establishing risk tiers and data protections.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-mono font-bold text-theme-accent uppercase text-[11px]">ICMA PM Magazine · Mar 2024</div>
                  <div className="font-bold text-slate-900 dark:text-white">Published AI Governance Author</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Authored &ldquo;AI Governance: A Local Government Leader&rsquo;s Guide&rdquo; for city/county executives nationwide.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-mono font-bold text-theme-accent uppercase text-[11px]">Route Fifty &amp; GovExec · Jul 2025</div>
                  <div className="font-bold text-slate-900 dark:text-white">National Digital Government Features</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Profiled on consolidating 7 IT departments, rationalizing ~850 systems to ~620, and delivering ~$6M recurring savings.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 space-y-1">
                  <div className="font-mono font-bold text-slate-500 uppercase text-[11px]">Future Verified Honors Cabinet</div>
                  <div className="font-bold text-slate-700 dark:text-slate-200">Structured Award Verification Slot</div>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    Reserved exclusively for future independently awarded national CIO/executive recognition with official citation links.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Media Kit & Nomination-Ready Executive Profile Card */}
          <aside className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-theme-header text-white border border-white/10 shadow-xl space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src="/profile_circle.png"
                alt="Shafiq Rahman official executive headshot"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover object-top border-2 border-white/20 shrink-0"
              />
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-executive-gold font-bold">
                  Executive Media Kit
                </div>
                <div className="text-sm font-extrabold text-white">{SITE_CONFIG.founderFullLine}</div>
                <div className="text-xs text-slate-300">Former Maryland State CIO</div>
              </div>
            </div>

            <div className="text-xs text-slate-300 leading-relaxed space-y-2 border-t border-white/10 pt-4">
              <p>
                Complete press &amp; award verification packet containing approved short/full biographies, career progression, verified credentials, and primary publications.
              </p>
              <div className="text-[11px] font-mono text-slate-400 space-y-1">
                {VERIFIED_CREDENTIALS.map((cred) => (
                  <div key={cred.name}>• {cred.name}</div>
                ))}
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  downloadTextDocument('Shafiq_Rahman_Nexis_AI_Executive_Profile.txt', buildExecutiveProfileDocument());
                  trackEvent('download_media_kit', { location: 'insights_page' });
                }}
                className="w-full py-2.5 px-4 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Media &amp; Profile Sheet (.TXT)</span>
              </button>

              <a
                href="/profile_circle.png"
                download="Shafiq_Rahman_Official_Headshot.png"
                className="w-full py-2.5 px-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-theme-accent" />
                <span>Download High-Res Headshot (.PNG)</span>
              </a>

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full py-2 px-4 border border-white/15 hover:bg-white/5 text-slate-300 font-medium rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save Recognition Brief PDF</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-400 border-t border-white/10 pt-3">
              Press &amp; Keynote Inquiries:{' '}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-theme-accent hover:underline font-mono">
                {SITE_CONFIG.email}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION B: THOUGHT-LEADERSHIP CENTER */}
      <section
        id="thought-leadership"
        className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 scroll-mt-24"
      >
        <SectionHeading
          eyebrow="Thought-Leadership Center"
          title="Articles, Executive Briefs, Press & Peer-Reviewed Scholarship"
          description="Filter executive publications across all eight technology leadership domains, or open any article for full analysis, key takeaways, and shareable links."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter publications by category">
          {ARTICLE_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  active
                    ? 'bg-theme-header text-white border-theme-accent shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Filtered Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden hover:border-theme-accent/60 transition-colors"
            >
              <div>
                {article.imageUrl && (
                  <div className="h-44 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-950">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                    <span className="font-bold text-theme-accent uppercase">{article.category}</span>
                    <span className="text-slate-500 dark:text-slate-400">{article.publicationDate}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
                  {article.sourceType} · {article.readingTime}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveArticle(article);
                    trackEvent('open_article_reader', { article_id: article.id });
                  }}
                  className="text-xs font-bold text-theme-accent hover:underline inline-flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Media Highlights Strip (Broadcasts & Events) */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-theme-accent">
                Verified National Press, Summits &amp; Executive Keynotes
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Public Appearances &amp; Executive Briefings
              </h3>
            </div>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-theme-accent hover:underline inline-flex items-center gap-1"
            >
              <span>Follow Shafiq on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {executiveMediaItems.slice(0, 6).map((media) => (
              <div
                key={media.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {media.imageUrl && (
                    <div className="h-40 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-950">
                      <img
                        src={media.imageUrl}
                        alt={media.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                      <span className="font-bold text-theme-accent">{media.source}</span>
                      <span className="text-slate-500">{media.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {media.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {media.summary}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-theme-accent hover:underline"
                  >
                    <span>View Original Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peer-Reviewed Google Scholar Research Archive */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold uppercase text-theme-accent flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Peer-Reviewed Academic &amp; Clinical Research</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                Google Scholar Publication Archive ({researchPublications.length} Indexed Works)
              </h3>
            </div>
            <a
              href={googleScholarProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-theme-accent text-xs font-semibold text-slate-800 dark:text-slate-100 inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Google Scholar Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-theme-accent" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchPublications.map((pub) => (
              <div
                key={pub.id}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 space-y-2"
              >
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                  <span className="font-bold text-theme-accent">{pub.domain}</span>
                  <span className="text-slate-500">{pub.year}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {pub.title}
                </h4>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {pub.authors.join(', ')} · <em>{pub.journal}</em>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pub.glimpse}
                </p>
                <a
                  href={pub.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-theme-accent hover:underline pt-1"
                >
                  <span>View Citation Record</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: INTERACTIVE SELF-ASSESSMENTS & DOWNLOADABLE RESOURCES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 scroll-mt-24">
        <SectionHeading
          eyebrow="Interactive Self-Assessments & Downloadable Executive Resources"
          title="Preliminary Readiness Tools — No Account Required"
          description="Practical executive checklists and readiness evaluators designed for boards, CEOs, city managers, and university leaders preparing for AI governance or IT modernization."
        />

        {/* Mandatory Preliminary Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl border border-amber-300 dark:border-amber-800/70 bg-amber-50/90 dark:bg-amber-950/30 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed">
            <strong>Preliminary Self-Assessment Only — Not Audited Findings or Formal Certification:</strong> These interactive instruments provide planning baselines and conversation guides. Formal system inventories, vendor BAA reviews, and executive findings require direct engagement.
          </div>
        </div>

        {/* Resource Switcher Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'board-checklist' as const, label: '5-Point Board AI Checklist' },
            { id: 'it-maturity' as const, label: 'Executive IT Maturity Assessment' },
            { id: 'municipal' as const, label: 'Municipal IT & Cyber Checklist' },
            { id: 'modernization-readiness' as const, label: 'IT Modernization Readiness Assessment' },
            { id: 'scope-estimator' as const, label: 'Hospital AI Scope Estimator' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTool(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                activeTool === tab.id
                  ? 'bg-theme-accent text-theme-accent-contrast border-theme-accent shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TOOL 1: 5-POINT BOARD AI CHECKLIST */}
        {activeTool === 'board-checklist' && (
          <div
            id="board-checklist"
            className="p-6 sm:p-9 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6 scroll-mt-24"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono font-bold uppercase text-theme-accent">
                  Preliminary Self-Assessment · Hospital &amp; Enterprise Boards
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  5-Point AI Governance Checklist for Hospital Boards
                </h3>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-mono font-extrabold text-theme-accent tabular-nums">
                  {boardCheckedCount} / 5
                </div>
                <div className="text-[11px] font-mono text-slate-500">Controls Confirmed</div>
              </div>
            </div>

            <div className="space-y-3">
              {BOARD_CHECKLIST_ITEMS.map((item, idx) => {
                const checked = Boolean(boardChecks[item.id]);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBoardChecks((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                      checked
                        ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700'
                        : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        checked ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-700'
                      }`}
                    />
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {idx + 1}. {item.title}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    downloadTextDocument(
                      'Nexis_AI_5Point_Board_Checklist.txt',
                      BOARD_CHECKLIST_ITEMS.map((i, idx) => `[${boardChecks[i.id] ? 'x' : ' '}] ${idx + 1}. ${i.title}\n    ${i.detail}`).join('\n\n')
                    )
                  }
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 inline-flex items-center gap-1.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Download className="w-3.5 h-3.5 text-theme-accent" />
                  <span>Download Checklist (.TXT)</span>
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 inline-flex items-center gap-1.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
              <button
                type="button"
                onClick={() =>
                  onNavigate(
                    'contact',
                    'contact-portal',
                    `AI governance assessment (${boardCheckedCount}/5 Board Controls Verified)`
                  )
                }
                className="px-5 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Review Gaps in a 30-Min Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TOOL 2: EXISTING 9-POINT EXECUTIVE IT MATURITY ASSESSMENT */}
        {activeTool === 'it-maturity' && (
          <ExecutiveITMaturityAssessment
            isDark={isDark}
            onScheduleCall={(notes) => onNavigate('contact', 'contact-portal', notes || 'Executive IT Maturity Assessment')}
          />
        )}

        {/* TOOL 3: MUNICIPAL IT GOVERNANCE & CYBERSECURITY CHECKLIST */}
        {activeTool === 'municipal' && (
          <div className="p-6 sm:p-9 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono font-bold uppercase text-theme-accent">
                  Preliminary Self-Assessment · Municipal, County &amp; State Agencies
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Municipal IT Governance &amp; Cybersecurity Checklist
                </h3>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-mono font-extrabold text-theme-accent tabular-nums">
                  {municipalCheckedCount} / 6
                </div>
                <div className="text-[11px] font-mono text-slate-500">Controls Confirmed</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MUNICIPAL_CHECKLIST_ITEMS.map((item, idx) => {
                const checked = Boolean(municipalChecks[item.id]);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMunicipalChecks((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                      checked
                        ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700'
                        : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        checked ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-700'
                      }`}
                    />
                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {idx + 1}. {item.title}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.detail}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => downloadTextDocument('Nexis_AI_Municipal_IT_Governance_Checklist.txt', buildMunicipalChecklistText())}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-theme-accent" />
                  <span>Download Checklist (.TXT)</span>
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
              <button
                type="button"
                onClick={() =>
                  onNavigate(
                    'contact',
                    'contact-portal',
                    `Public-sector advisory (${municipalCheckedCount}/6 Municipal Controls Confirmed)`
                  )
                }
                className="px-5 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Schedule Municipal Advisory Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TOOL 4: ENTERPRISE IT MODERNIZATION READINESS ASSESSMENT */}
        {activeTool === 'modernization-readiness' && (
          <div
            id="modernization-assessment"
            className="p-6 sm:p-9 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6 scroll-mt-24"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono font-bold uppercase text-theme-accent flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Preliminary Self-Assessment · Cross-Enterprise Baseline</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Enterprise IT Modernization Readiness Assessment
                </h3>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-mono font-extrabold text-theme-accent tabular-nums">
                  {modernizationScore}%
                </div>
                <div className="text-[11px] font-mono text-slate-500">Preliminary Readiness Index</div>
              </div>
            </div>

            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-theme-accent h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${modernizationScore}%` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MODERNIZATION_READINESS_QUESTIONS.map((item) => {
                const checked = Boolean(modChecks[item.id]);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setModChecks((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                      checked
                        ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700'
                        : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        checked ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-300 dark:text-slate-700'
                      }`}
                    />
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono font-bold uppercase text-theme-accent">
                        {item.domain}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <div className="text-xs font-mono font-bold uppercase text-slate-500">Preliminary Recommendation</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {modernizationScore >= 75
                    ? 'Advanced Modernization Posture — Focus on FinOps, automated AI intake, and resilience testing.'
                    : modernizationScore >= 40
                    ? 'Transitional Posture — Sequence portfolio rationalization and Zero Trust boundaries before major cloud spend.'
                    : 'Foundational Stage — Establish Architecture Review Board governance, inventory, and immutable recovery first.'}
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  onNavigate(
                    'contact',
                    'contact-portal',
                    `Enterprise IT modernization (Readiness Self-Assessment: ${modernizationScore}%)`
                  )
                }
                className="px-5 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs transition-all cursor-pointer shrink-0 inline-flex items-center gap-1.5"
              >
                <span>Discuss Modernization Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TOOL 5: HOSPITAL AI SCOPE ESTIMATOR */}
        {activeTool === 'scope-estimator' && (
          <HospitalAIScopeEstimator
            onPrefillContact={(notes) => onNavigate('contact', 'contact-portal', notes)}
          />
        )}
      </section>

      <ConsultationBanner
        onNavigate={onNavigate}
        calUrl={calUrl}
        title="Turn Thought Leadership & Readiness Baselines Into Action"
        description="Speak directly with Shafiq Rahman about keynote engagements, Fractional CIO mandates, enterprise modernization, or the 30-Day AI Governance & Pilot Diagnostic."
      />

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="font-bold text-theme-accent uppercase">{activeArticle.category}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500 dark:text-slate-400">{activeArticle.venue}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500 dark:text-slate-400">{activeArticle.publicationDate}</span>
                </div>
                <h2
                  id="article-modal-title"
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight"
                >
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{activeArticle.author}</span>
                  <span>·</span>
                  <span>{activeArticle.authorCredentials}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {activeArticle.readingTime}
                  </span>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close article reader"
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {activeArticle.imageUrl && (
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-72 bg-slate-950">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {/* Full Body Paragraphs */}
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeArticle.bodyParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Executive Takeaways */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <div className="text-xs font-mono font-bold uppercase text-theme-accent flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Key Executive Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {activeArticle.keyTakeaways.map((kt) => (
                  <li key={kt} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0 mt-0.5" />
                    <span>{kt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action & Share Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap items-center gap-2">
                {activeArticle.externalUrl && (
                  <a
                    href={activeArticle.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs inline-flex items-center gap-1.5"
                  >
                    <span>{activeArticle.externalLabel || 'Read External Source'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    activeArticle.externalUrl || `${SITE_CONFIG.url}/?page=insights#${activeArticle.id}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 inline-flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <Share2 className="w-3.5 h-3.5 text-theme-accent" />
                  <span>Share on LinkedIn</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopyArticleUrl(activeArticle)}
                  className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 inline-flex items-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                >
                  {copiedArticleLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedArticleLink ? 'Link Copied' : 'Copy Link'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  const topic = activeArticle.title;
                  setActiveArticle(null);
                  onNavigate('contact', 'contact-portal', `Inquiry regarding: ${topic}`);
                }}
                className="text-xs font-bold text-theme-accent hover:underline cursor-pointer inline-flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Discuss Topic With Shafiq</span>
              </button>
            </div>

            {/* Related Articles Switcher */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
              <div className="text-[11px] font-mono font-bold uppercase text-slate-500">
                Related Briefings &amp; Schema Metadata
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {THOUGHT_LEADERSHIP_ARTICLES.filter((a) => a.id !== activeArticle.id)
                  .slice(0, 2)
                  .map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => setActiveArticle(rel)}
                      className="text-left p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-theme-accent text-xs transition-colors cursor-pointer"
                    >
                      <div className="font-mono text-[10px] text-theme-accent font-bold uppercase">{rel.category}</div>
                      <div className="font-bold text-slate-900 dark:text-white line-clamp-1">{rel.title}</div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
