import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  BarChart3,
  Calendar,
  Lock,
  Building2,
  Download,
  Mail,
  User,
  Phone,
  Briefcase,
  ChevronRight,
  TrendingUp,
  FileText,
} from 'lucide-react';
import {
  cioMaturityDimensions,
  calculateCIOMaturity,
  CIOMaturityResult,
} from '../data/assessmentData';

interface CIOMaturityAssessmentProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
}

export const CIOMaturityAssessment: React.FC<CIOMaturityAssessmentProps> = ({
  onOpenConsultation,
  onOpenCalendar,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<CIOMaturityResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [leadCaptured, setLeadCaptured] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    title: '',
    phone: '',
    orgSize: '500 - 2,500 employees',
    sector: 'Healthcare Provider',
  });

  const activeDimension = cioMaturityDimensions[currentStep];
  const totalSteps = cioMaturityDimensions.length;
  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handleSelectOption = (score: number) => {
    const updatedAnswers = { ...answers, [activeDimension.id]: score };
    setAnswers(updatedAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Completed all questions
      const res = calculateCIOMaturity(updatedAnswers);
      setResult(res);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    setLeadCaptured(false);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.fullName) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.organization,
          jobTitle: formData.title,
          industry: formData.sector,
          serviceInterest: `CIO Maturity Assessment (Score: ${result?.overallScore}/100 - ${result?.overallLevel})`,
          estimatedBudget: '$18k - $25k Executive Diagnostic',
          message: `CIO Maturity Assessment completed. Overall Score: ${result?.overallScore}/100 (${result?.overallLevel}). Gaps: ${result?.criticalGaps.join(', ')}. Strategic Risks: ${result?.strategicRisks.join('; ')}.`,
          crmExportTarget: 'HubSpot',
        }),
      });

      if (response.ok) {
        setLeadCaptured(true);
      }
    } catch (err) {
      console.error('Lead capture error', err);
      // Still show success to not block user
      setLeadCaptured(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-950 text-slate-100 py-16 border-b border-slate-800 relative overflow-hidden" id="assessment">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
            <span>Executive Diagnostic Instrument</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            CIO Maturity & Technology Risk Assessment
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Evaluate your organization across 12 consequential technology dimensions—from AI governance and cybersecurity to application debt and board oversight.
          </p>
        </div>

        {/* IN-PROGRESS QUESTIONNAIRE VIEW */}
        {!result && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            
            {/* Progress Bar & Counter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Dimension {currentStep + 1} of {totalSteps}</span>
                <span className="text-amber-400 font-bold">{progressPercent}% Completed</span>
              </div>
              <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="space-y-4">
              <div className="inline-block text-xs font-mono uppercase bg-amber-950 text-amber-300 border border-amber-800 px-2.5 py-0.5 rounded font-bold">
                {activeDimension.name}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {activeDimension.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {activeDimension.description}
              </p>
            </div>

            {/* Maturity Level Options */}
            <div className="space-y-3">
              {activeDimension.options.map((opt) => {
                const isSelected = answers[activeDimension.id] === opt.score;
                return (
                  <button
                    key={opt.score}
                    onClick={() => handleSelectOption(opt.score)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 font-black'
                          : 'bg-slate-900 border border-slate-800 text-slate-400'
                      }`}
                    >
                      {opt.score}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-sm font-bold text-white">{opt.label}</span>
                        <span className="text-[10px] font-mono uppercase text-amber-400/80 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          {opt.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stepper Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              >
                ← Previous Dimension
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-400 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

          </div>
        )}

        {/* RESULTS & EXECUTIVE PROFILE VIEW */}
        {result && (
          <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10">
            
            {/* Top Score Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-8">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider">
                  Diagnostic Result • 12 Consequential Dimensions
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Institutional CIO Maturity Profile
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Based on your responses across technology alignment, executive governance, AI readiness, cyber defense, and capital predictability.
                </p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center shrink-0 space-y-1">
                <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono">
                  {result.overallScore}<span className="text-xl text-slate-500">/100</span>
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Level: <span className="text-amber-300">{result.overallLevel}</span>
                </div>
                <div className="text-[10px] text-slate-400">Weighted Institutional Index</div>
              </div>
            </div>

            {/* 12-Dimension Score Breakdown */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>12-Dimension Breakdown & Risk Exposure</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cioMaturityDimensions.map((dim) => {
                  const dimResult = result.dimensionScores[dim.id] || { score: 20, level: 'Foundational' };
                  return (
                    <div key={dim.id} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{dim.name}</span>
                        <span className="font-mono text-amber-400 font-bold">{dimResult.score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            dimResult.score >= 70
                              ? 'bg-emerald-400'
                              : dimResult.score >= 40
                              ? 'bg-amber-400'
                              : 'bg-red-400'
                          }`}
                          style={{ width: `${dimResult.score}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                        <span>Status: {dimResult.level}</span>
                        <span>Weight: {dim.weight}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Strengths, Gaps & Strategic Risks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Demonstrated Strengths
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {result.strengths.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h5 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Critical Execution Gaps
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {result.criticalGaps.map((g, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Immediate Strategic Risks
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {result.strategicRisks.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Recommended 30-Day & 90-Day Roadmap */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Recommended Executive Action Roadmap</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">Immediate 30-Day Moves</span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {result.recommended30DayActions.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase">90-Day Executive Charter</span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {result.recommended90DayRoadmap.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Lead Capture Form & Executive Report Delivery */}
            {!leadCaptured ? (
              <form onSubmit={handleLeadSubmit} className="bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Receive Your Complete 15-Page Executive Diagnostic Report</h4>
                  <p className="text-xs text-slate-400">
                    We will send a detailed PDF breakdown with prioritized board slides and schedule an optional 20-minute executive briefing with Shafiq Rahman.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jdoe@organization.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Organization Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Memorial Health System / State University"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Leadership Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="CEO, Provost, CFO, Board Chair, VP"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Direct Phone (Optional)</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Sector Context</label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Healthcare Provider">Healthcare Delivery / Health System</option>
                      <option value="Higher Education / R1 University">Higher Education / Academic Medicine</option>
                      <option value="State / Local Public Authority">State / Local Government Authority</option>
                      <option value="Regulated Commercial Enterprise">Regulated Mid-Market Enterprise</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Strict privacy. Never shared with third parties or vendors.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Generating Executive Memo...</span>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Send Executive Report & Board Memo</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Executive Report Dispatched</h4>
                <p className="text-xs text-slate-300 max-w-lg mx-auto">
                  Your institutional CIO maturity profile has been logged and sent to <strong>{formData.email}</strong>. Shafiq Rahman’s office will review your gaps and follow up within 24 hours.
                </p>
              </div>
            )}

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl border border-slate-800 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Assessment</span>
              </button>

              <div className="flex flex-wrap gap-3">
                {onOpenCalendar && (
                  <button
                    onClick={onOpenCalendar}
                    className="px-5 py-3 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>View Calendar Availability</span>
                  </button>
                )}

                <button
                  onClick={() => onOpenConsultation(`Review CIO Maturity Assessment (Score: ${result.overallScore}/100)`)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Schedule CIO Advisory Briefing with Shafiq</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
