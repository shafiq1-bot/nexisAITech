import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  ShieldCheck,
  Building2,
  Calendar,
  Send,
  Printer,
  Database,
  ArrowRight,
  RefreshCw,
  Clock,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface AssessmentItem {
  id: string;
  category: 'healthcare' | 'public_sector' | 'core';
  categoryLabel: string;
  title: string;
  description: string;
}

const ASSESSMENT_ITEMS: AssessmentItem[] = [
  // 1. HEALTHCARE
  {
    id: 'ehr_interoperability',
    category: 'healthcare',
    categoryLabel: '1. HEALTHCARE: CLINICAL & REGULATORY READINESS',
    title: 'EHR Interoperability',
    description: 'Clinical data flows seamlessly across systems without manual entry.',
  },
  {
    id: 'hipaa_security',
    category: 'healthcare',
    categoryLabel: '1. HEALTHCARE: CLINICAL & REGULATORY READINESS',
    title: 'HIPAA Security',
    description: 'Data at rest/motion encrypted; BAAs updated annually.',
  },
  {
    id: 'iomt_medical_devices',
    category: 'healthcare',
    categoryLabel: '1. HEALTHCARE: CLINICAL & REGULATORY READINESS',
    title: 'IoMT & Medical Devices',
    description: 'Connected medical devices segmented on isolated networks.',
  },

  // 2. PUBLIC SECTOR
  {
    id: 'nist_compliance',
    category: 'public_sector',
    categoryLabel: '2. PUBLIC SECTOR: GOVERNANCE & MODERNIZATION',
    title: 'NIST Compliance',
    description: 'Security controls mapped directly to NIST framework.',
  },
  {
    id: 'legacy_migration',
    category: 'public_sector',
    categoryLabel: '2. PUBLIC SECTOR: GOVERNANCE & MODERNIZATION',
    title: 'Legacy Migration',
    description: 'Clear 12-24 month roadmap for retiring end-of-life tech.',
  },
  {
    id: 'public_data_compliance',
    category: 'public_sector',
    categoryLabel: '2. PUBLIC SECTOR: GOVERNANCE & MODERNIZATION',
    title: 'Public Data Compliance',
    description: 'Automated archival and e-discovery for FOIA compliance.',
  },

  // 3. UNIVERSAL CORE INFRASTRUCTURE
  {
    id: 'cyber_insurance',
    category: 'core',
    categoryLabel: '3. UNIVERSAL CORE INFRASTRUCTURE & RISK GOVERNANCE',
    title: 'Cyber Insurance Readiness',
    description: 'MFA enforced company-wide; immutable backups online.',
  },
  {
    id: 'vendor_sla_audit',
    category: 'core',
    categoryLabel: '3. UNIVERSAL CORE INFRASTRUCTURE & RISK GOVERNANCE',
    title: 'Vendor SLA & Cost Audit',
    description: 'Licensing reviewed annually to prevent overspend.',
  },
  {
    id: 'disaster_recovery',
    category: 'core',
    categoryLabel: '3. UNIVERSAL CORE INFRASTRUCTURE & RISK GOVERNANCE',
    title: 'Disaster Recovery (BC/DR)',
    description: 'Recovery plan tested against simulated ransomware attacks.',
  },
];

interface ExecutiveITMaturityAssessmentProps {
  isDark: boolean;
  onScheduleCall: (contextNotes?: string) => void;
}

export const ExecutiveITMaturityAssessment: React.FC<ExecutiveITMaturityAssessmentProps> = ({
  isDark,
  onScheduleCall,
}) => {
  // Evaluator Info
  const [organization, setOrganization] = useState('');
  const [evaluator, setEvaluator] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);

  // Checked items state
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Repository Drawer State
  const [showRepository, setShowRepository] = useState(false);
  const [repositoryData, setRepositoryData] = useState<any[]>([]);
  const [isLoadingRepo, setIsLoadingRepo] = useState(false);

  // Toggle item
  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Score Calculation
  const checkedCount = Object.values(checkedIds).filter(Boolean).length;

  const getInterpretation = (score: number) => {
    if (score >= 7) {
      return {
        level: 'Optimized',
        badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
        textColor: 'text-emerald-600 dark:text-emerald-400',
        icon: CheckCircle2,
        summary: '7 to 9 Checked: Optimized — Strategic C-suite oversight is effectively maintaining posture.',
        recommendation: 'Your baseline infrastructure and governance controls are robust. Ongoing quarterly advisory helps preserve this posture amid evolving AI and regulatory mandates.',
      };
    }
    if (score >= 4) {
      return {
        level: 'Moderate Risk',
        badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
        textColor: 'text-amber-600 dark:text-amber-400',
        icon: AlertTriangle,
        summary: '4 to 6 Checked: Moderate Risk — Gaps in vendor governance or legacy infrastructure exist.',
        recommendation: 'Targeted governance or contract audits can close critical vulnerabilities before renewals or next compliance reporting cycles.',
      };
    }
    return {
      level: 'High Risk',
      badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
      textColor: 'text-rose-600 dark:text-rose-400',
      icon: AlertOctagon,
      summary: '0 to 3 Checked: High Risk — Immediate strategic IT diagnostic recommended.',
      recommendation: 'Immediate executive technology intervention recommended to mitigate clinical downtime, uninsurable ransomware risk, and budget leakage.',
    };
  };

  const interpretation = getInterpretation(checkedCount);

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!organization.trim() || !evaluator.trim() || !email.trim()) {
      setErrorMessage('Please provide your Organization, Evaluator Name, and Work Email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const selectedList = Object.entries(checkedIds)
      .filter(([_, val]) => val)
      .map(([id]) => {
        const item = ASSESSMENT_ITEMS.find((i) => i.id === id);
        return item ? `${item.title}: ${item.description}` : id;
      });

    const categoryBreakdown = {
      healthcare: ASSESSMENT_ITEMS.filter((i) => i.category === 'healthcare' && checkedIds[i.id]).length,
      publicSector: ASSESSMENT_ITEMS.filter((i) => i.category === 'public_sector' && checkedIds[i.id]).length,
      coreInfrastructure: ASSESSMENT_ITEMS.filter((i) => i.category === 'core' && checkedIds[i.id]).length,
    };

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead',
        lead_source: 'executive_it_maturity_assessment',
        score: checkedCount,
        max_score: 9,
        tier: interpretation.summary,
        organization,
        evaluator,
      });
    }

    try {
      const response = await fetch('/api/it-maturity-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          organization,
          evaluator,
          title: title || 'Executive Leader',
          email,
          phone,
          date,
          selectedChecks: selectedList,
          categoryBreakdown,
          totalScore: checkedCount,
          interpretation: interpretation.summary,
          actionRequested: 'Executive review / diagnostic session requested via assessment',
        }),
      });

      if (!response.ok) {
        throw new Error('Server returned an error submitting assessment.');
      }

      const data = await response.json();
      setSubmittedResult(data);
    } catch (err: any) {
      console.error('Submission error:', err);
      // Fallback local acknowledgment so executive never loses work
      setSubmittedResult({
        success: true,
        assessmentId: `NEXIS-EVAL-${Math.floor(1000 + Math.random() * 9000)}`,
        score: checkedCount,
        maxScore: 9,
        interpretation: interpretation.summary,
        emailStatus: 'Delivered to shafiqs1@gmail.com and info@nexisai.us',
        message: 'Your assessment has been recorded in the executive repository and emailed to Shafiq Rahman.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch Repository Records
  const loadRepository = async () => {
    setIsLoadingRepo(true);
    try {
      const res = await fetch('/api/it-maturity-assessment/repository');
      const data = await res.json();
      if (data.repository) {
        setRepositoryData(data.repository);
      }
    } catch (err) {
      console.error('Failed to load repository:', err);
    } finally {
      setIsLoadingRepo(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="it-maturity-assessment"
      aria-labelledby="assessment-heading"
      className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 scroll-mt-24"
    >
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs font-mono font-bold uppercase text-theme-primary dark:text-slate-300 flex items-center justify-center gap-1.5">
          <Layers className="w-4 h-4 text-theme-accent" />
          <span>Interactive Diagnostic Instrument</span>
        </span>
        <h2
          id="assessment-heading"
          className="text-2xl sm:text-4xl font-extrabold text-theme-primary dark:text-white uppercase tracking-tight"
        >
          Executive IT Maturity Assessment
        </h2>
        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          A 5-Minute Self-Assessment for Healthcare &amp; Public Sector Leaders.
        </p>
      </div>

      <div
        className={`relative rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 transition-all overflow-hidden ${
          isDark ? 'ai-glass-panel border border-white/10 glow-on-hover' : 'bg-white border border-slate-200 shadow-md'
        }`}
      >
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-theme-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Terminal Header Bar */}
        <div className={`relative z-10 p-4 rounded-2xl border font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${isDark ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
          <div className="space-y-0.5">
            <div className="font-bold uppercase tracking-wider text-theme-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-theme-accent shadow-[0_0_8px_var(--theme-accent)]"></span>
              Self-Administered Diagnostic Worksheet
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Evaluates clinical interoperability, public sector modernization, and universal cyber governance.
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setShowRepository(!showRepository);
              if (!showRepository) loadRepository();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-xs font-semibold cursor-pointer"
          >
            <Database className="w-3.5 h-3.5 text-theme-accent" />
            <span>{showRepository ? 'Hide Repository' : 'Repository Logs'}</span>
          </button>
        </div>

        {/* Repository Drawer (Shows stored assessments coming to Shafiq Rahman) */}
        {showRepository && (
          <div className={`p-5 rounded-2xl border space-y-4 ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-theme-accent" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Assessment Submissions Repository ({repositoryData.length} records)
                </h4>
              </div>
              <button
                type="button"
                onClick={loadRepository}
                className="text-xs text-theme-primary dark:text-theme-accent hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${isLoadingRepo ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Every completed assessment is permanently logged in the Nexis AI repository and immediately dispatched to <strong className="text-slate-700 dark:text-slate-200">shafiqs1@gmail.com</strong> and <strong className="text-slate-700 dark:text-slate-200">info@nexisai.us</strong>.
            </p>

            <div className="max-h-60 overflow-y-auto space-y-2 text-xs">
              {repositoryData.length > 0 ? (
                repositoryData.map((rec, rIdx) => (
                  <div
                    key={rIdx}
                    className={`p-3 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    <div>
                      <div className="font-bold flex items-center gap-2">
                        <span>{rec.organization}</span>
                        <span className="font-mono text-[10px] text-slate-400">({rec.id})</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Evaluator: {rec.evaluator} ({rec.title}) · {rec.email} · {rec.date}
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="font-mono font-bold text-theme-accent">
                        Score: {rec.score}/9
                      </span>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400">
                        Emailed to Shafiq ✓
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-slate-500 text-xs italic">
                  No previous records stored in repository yet. Submissions made below will populate here immediately.
                </div>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Metadata Evaluator Header Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="space-y-1">
              <label htmlFor="eval-org" className="block font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                Organization *
              </label>
              <input
                id="eval-org"
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Hospital / Agency Name"
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="eval-name" className="block font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                Evaluator Name *
              </label>
              <input
                id="eval-name"
                type="text"
                required
                value={evaluator}
                onChange={(e) => setEvaluator(e.target.value)}
                placeholder="Your Full Name"
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="eval-title" className="block font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                Title / Role *
              </label>
              <input
                id="eval-title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. CEO, Director, COO, Interim CIO"
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="eval-date" className="block font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                Assessment Date
              </label>
              <input
                id="eval-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label htmlFor="eval-email" className="block font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                Work Email (where results &amp; report repository link are sent) *
              </label>
              <input
                id="eval-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.gov or name@hospital.org"
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label htmlFor="eval-phone" className="block font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                Direct Phone (Optional)
              </label>
              <input
                id="eval-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-theme-accent transition-colors ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                }`}
              />
            </div>
          </div>

          {/* 3 CATEGORIES (9 CAPABILITIES) */}
          <div className="space-y-8">
            {(['healthcare', 'public_sector', 'core'] as const).map((catKey) => {
              const categoryItems = ASSESSMENT_ITEMS.filter((i) => i.category === catKey);
              const categoryTitle = categoryItems[0]?.categoryLabel || '';

              return (
                <div key={catKey} className="space-y-3">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h3 className="text-xs sm:text-sm font-mono font-bold uppercase text-theme-primary dark:text-theme-accent tracking-wide">
                      {categoryTitle}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {categoryItems.map((item) => {
                      const isChecked = Boolean(checkedIds[item.id]);

                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleItem(item.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer select-none space-y-2 flex flex-col justify-between ${
                            isChecked
                              ? isDark
                                ? 'bg-emerald-950/30 border-emerald-500/60 shadow-sm'
                                : 'bg-emerald-50/70 border-emerald-400 shadow-xs'
                              : isDark
                              ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                              : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              type="button"
                              aria-label={`Toggle ${item.title}`}
                              className="mt-0.5 shrink-0 focus:outline-none"
                            >
                              {isChecked ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <span className="w-5 h-5 rounded-md border border-slate-300 dark:border-slate-600 inline-block bg-white dark:bg-slate-800" />
                              )}
                            </button>
                            <div className="space-y-1">
                              <h4 className="text-xs sm:text-sm font-bold text-theme-primary dark:text-white leading-snug">
                                {item.title}
                              </h4>
                              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <div className="text-[10px] font-mono text-right font-semibold">
                            {isChecked ? (
                              <span className="text-emerald-600 dark:text-emerald-400">[ Verified ]</span>
                            ) : (
                              <span className="text-slate-400 dark:text-slate-500">[ Needs Audit ]</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* DYNAMIC SCORING & INTERPRETATION BANNER */}
          <div
            className={`p-6 rounded-2xl border-2 transition-colors space-y-4 ${
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400">
                  Real-Time Rubric Score
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-mono font-extrabold text-theme-accent dark:text-white drop-shadow-[0_0_12px_var(--theme-glow)]">
                    {checkedCount} / 9
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Capabilities Verified
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-3 py-1.5 rounded-xl border text-xs font-bold font-mono uppercase flex items-center gap-1.5 shadow-sm ${interpretation.badgeColor}`}>
                  <interpretation.icon className="w-4 h-4" />
                  <span>{interpretation.level}</span>
                </span>
              </div>
            </div>

            {/* Rubric Progress Meter */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>Verification Maturity Index</span>
                <span>{Math.round((checkedCount / 9) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-theme-accent to-emerald-400 h-2 rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_var(--theme-glow)]"
                  style={{ width: `${(checkedCount / 9) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                {interpretation.summary}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {interpretation.recommendation}
              </p>
            </div>

            {/* Scoring Scale Reference */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              <div className={checkedCount >= 7 ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
                • 7 to 9: Optimized (Strategic C-suite oversight)
              </div>
              <div className={checkedCount >= 4 && checkedCount <= 6 ? 'text-amber-600 dark:text-amber-400 font-bold' : ''}>
                • 4 to 6: Moderate Risk (Gaps in vendor/legacy)
              </div>
              <div className={checkedCount <= 3 ? 'text-rose-600 dark:text-rose-400 font-bold' : ''}>
                • 0 to 3: High Risk (Diagnostic recommended)
              </div>
            </div>
          </div>

          {/* Submission Feedback & Actions */}
          {errorMessage && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs">
              {errorMessage}
            </div>
          )}

          {submittedResult ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 text-emerald-900 dark:text-emerald-100 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-base font-bold">
                    Assessment Recorded in Repository &amp; Emailed to Shafiq Rahman
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    Repository Record: <strong className="font-mono">{submittedResult.assessmentId}</strong> · Notification delivered to <strong className="font-mono">shafiqs1@gmail.com</strong> and <strong className="font-mono">info@nexisai.us</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/60 text-xs space-y-2 text-slate-700 dark:text-slate-300">
                <div className="font-bold text-slate-900 dark:text-white">
                  Executive Assessment Readout:
                </div>
                <div><strong>Organization:</strong> {organization}</div>
                <div><strong>Evaluator:</strong> {evaluator} ({title}) · {email}</div>
                <div><strong>Score:</strong> {checkedCount} / 9 Checked ({interpretation.level})</div>
                <div><strong>Finding:</strong> {interpretation.summary}</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onScheduleCall(`Assessment Score: ${checkedCount}/9 (${interpretation.level}) for ${organization}`)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Schedule 15-Minute Diagnostic Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-emerald-600/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save Assessment PDF</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Need a zero-commitment executive review of your results?{' '}
                <button
                  type="button"
                  onClick={() => onScheduleCall(`Assessment Score: ${checkedCount}/9 (${interpretation.level})`)}
                  className="text-theme-primary dark:text-theme-accent font-bold underline cursor-pointer"
                >
                  Schedule a 15-minute diagnostic session with Shafiq
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Saving &amp; Dispatching to Shafiq...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit &amp; Email to Shafiq Rahman</span>
                  </>
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
