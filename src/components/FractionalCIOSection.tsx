import React, { useState } from 'react';
import {
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building2,
  Users,
  Award,
  ChevronRight,
  FileCheck2,
  Clock,
  Sparkles,
  Layers,
  BarChart3,
  HelpCircle,
  FileText,
  AlertTriangle,
  Lightbulb,
  PhoneCall,
  Lock,
  Compass,
} from 'lucide-react';
import {
  diagnosticSteps,
  diagnosticDeliverables,
  retainerPackages,
  specializedSprints,
  operatingCadence,
  targetSectorsData,
} from '../data/fractionalCIOData';
import { executiveLeaderData } from '../data/leadershipData';

interface FractionalCIOSectionProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
}

export const FractionalCIOSection: React.FC<FractionalCIOSectionProps> = ({
  onOpenConsultation,
  onOpenCalendar,
}) => {
  const [activeTab, setActiveTab] = useState<'model' | 'diagnostic' | 'retainers' | 'sprints' | 'cadence'>('model');
  const [selectedStep, setSelectedStep] = useState<number>(1);

  return (
    <section className="bg-slate-950 text-slate-100 py-16 border-b border-slate-800 relative overflow-hidden" id="fractional-cio-practice">
      {/* Decorative lighting background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

        {/* Section Header with Authentic Positioning */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Executive Technology Advisory Practice</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Fractional CIO & AI Governance Advisory
          </h2>

          <p className="text-lg sm:text-xl text-amber-200/90 font-medium max-w-3xl mx-auto">
            "I help healthcare, higher-education, and public-sector leaders turn technology risk and AI ambition into an executable portfolio, without the cost or delay of a full-time CIO search."
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            The buying trigger is not <span className="text-slate-100 italic">"we need advice."</span> It is{' '}
            <span className="text-amber-300 font-semibold italic">
              "we have too many consequential technology decisions and no single executive owner."
            </span>
          </p>
        </div>

        {/* Founder Provenance Card (MDOT State CIO & UMB Enterprise IT Director) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/80 text-amber-300 border border-amber-800 text-xs font-mono font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Proven C-Suite Operational Stewardship
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Decisions Only an Experienced CIO Can Make
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Shafiq Rahman’s advantage is not generic technology consulting. It is the seasoned ability to enter a complex, politically sensitive environment, establish executive control, align technology with mission and finance, and move leadership from uncertainty to an approved roadmap.
              </p>

              {/* Exact Credentials from Proposal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-amber-400 font-mono">Former State CIO</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Maryland Department of Transportation</div>
                  <div className="text-xs text-slate-400 mt-1">
                    Governed an approx. <strong className="text-slate-200">$250M technology portfolio</strong> and <strong className="text-slate-200">1,500 IT staff</strong> spanning six state agencies.
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-blue-400 font-mono">Former Director of Enterprise IT</div>
                  <div className="text-sm font-semibold text-white mt-0.5">University of Maryland, Baltimore</div>
                  <div className="text-xs text-slate-400 mt-1">
                    Long-tenure leadership across academic medicine, biomedical research labs, clinical hospitals, and graduate health schools.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenConsultation('Schedule Executive Consultation with Shafiq Rahman')}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Discuss Your Organization's Situation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {onOpenCalendar && (
                  <button
                    onClick={onOpenCalendar}
                    className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>View Calendar Availability</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick Metrics & Target Milestones */}
            <div className="lg:col-span-4 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                The Advisory Model
              </span>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="text-xs font-mono uppercase text-amber-400 font-bold">1. Entry Offer</div>
                  <div className="text-sm font-bold text-white mt-0.5">30-Day Executive Diagnostic</div>
                  <div className="text-xs text-slate-400 mt-0.5">$18,000 – $25,000 fixed fee</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="text-xs font-mono uppercase text-blue-400 font-bold">2. Core Recurring</div>
                  <div className="text-sm font-bold text-white mt-0.5">Fractional CIO Retainer</div>
                  <div className="text-xs text-slate-400 mt-0.5">1 to 3 days/week | $12k – $28k/mo</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="text-xs font-mono uppercase text-emerald-400 font-bold">3. Specialized Sprints</div>
                  <div className="text-sm font-bold text-white mt-0.5">AI Governance & Cyber Roadmaps</div>
                  <div className="text-xs text-slate-400 mt-0.5">NIST AI RMF & HHS OCR alignment</div>
                </div>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] text-amber-300 leading-snug">
                <strong>Offer Rule:</strong> Every engagement must end with a decision, an accountable owner, a funded sequence, or a governance mechanism—never just a passive status report.
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab('model')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'model'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Why Now & Positioning</span>
          </button>

          <button
            onClick={() => setActiveTab('diagnostic')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'diagnostic'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>30-Day Diagnostic (Entry)</span>
          </button>

          <button
            onClick={() => setActiveTab('retainers')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'retainers'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Fractional Retainers</span>
          </button>

          <button
            onClick={() => setActiveTab('sprints')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'sprints'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <BrainCircuit className="w-4 h-4" />
            <span>Specialized Sprints</span>
          </button>

          <button
            onClick={() => setActiveTab('cadence')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'cadence'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Operating Cadence</span>
          </button>
        </div>

        {/* TAB 1: WHY NOW & POSITIONING */}
        {activeTab === 'model' && (
          <div className="space-y-12">
            {/* The 3 Simultaneous Pressures */}
            <div className="space-y-4">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white">Clients Need Accountable Leadership Across 3 Pressures At Once</h3>
                <p className="text-xs text-slate-400 mt-1">
                  A fractional CIO creates one decision system across these pressures—prioritizing investments, assigning risk ownership, and giving the board a clear line of sight.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/40 transition-all">
                  <div className="text-2xl font-black text-amber-400 font-mono">01</div>
                  <h4 className="text-lg font-bold text-white">AI Moved From Pilots to Governance</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Organizations need a practical operating model for risk ownership, use-case approval, vendor review, data controls, and measurable value. The NIST AI Risk Management Framework gives buyers a credible reference point.
                  </p>
                  <div className="text-[11px] text-amber-300 font-mono bg-amber-950/60 p-2.5 rounded-lg border border-amber-800/60">
                    External Ref: NIST AI Risk Management Framework 1.0
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/40 transition-all">
                  <div className="text-2xl font-black text-blue-400 font-mono">02</div>
                  <h4 className="text-lg font-bold text-white">Cyber Risk is Operational Risk</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Healthcare and public-sector guidance emphasizes accurate risk analysis, asset inventory, access controls, micro-segmentation, and protection of electronic protected health information. These are leadership decisions, not only security-team tasks.
                  </p>
                  <div className="text-[11px] text-blue-300 font-mono bg-blue-950/60 p-2.5 rounded-lg border border-blue-800/60">
                    External Ref: HHS OCR Cybersecurity Guidelines & HIPAA Security Rule
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/40 transition-all">
                  <div className="text-2xl font-black text-emerald-400 font-mono">03</div>
                  <h4 className="text-lg font-bold text-white">Legacy Systems Still Consume Strategy</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The U.S. GAO reported in 2025 that several critical legacy modernizations remained years from completion or lacked a completion date. Mission-driven organizations face similar portfolio tradeoffs without an experienced CIO to rationalize them.
                  </p>
                  <div className="text-[11px] text-emerald-300 font-mono bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/60">
                    External Ref: U.S. GAO, GAO-25-107795 Legacy Modernization
                  </div>
                </div>
              </div>
            </div>

            {/* Target Sectors & Buyer Profile */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-white">Ideal Client Profile & Target Sectors</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Serving regulated, mission-driven organizations between 300 and 5,000 employees facing critical inflection points.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {targetSectorsData.map((sec, idx) => (
                  <div key={idx} className="bg-slate-950 p-5 rounded-xl border border-slate-800/90 space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-amber-400" />
                      <h4 className="text-sm font-bold text-white">{sec.sector}</h4>
                    </div>
                    <div className="text-xs text-amber-300 font-mono font-semibold">Scale: {sec.scale}</div>
                    <div className="space-y-2 text-xs text-slate-300">
                      <p><strong className="text-slate-200">Key Friction:</strong> {sec.challenges}</p>
                      <p><strong className="text-slate-200">Executive Buyers:</strong> {sec.buyerTitles}</p>
                      <p><strong className="text-slate-200">CIO Solution:</strong> {sec.solution}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What We Do NOT Lead With (Discipline) */}
              <div className="bg-slate-950/90 border border-red-500/20 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Commercial Boundary & Discipline
                  </div>
                  <p className="text-xs text-slate-400">
                    We do <strong>not</strong> do generic "digital transformation" consulting, hourly staff augmentation, or software development without executive governance. We provide high-judgment executive stewardship.
                  </p>
                </div>
                <button
                  onClick={() => onOpenConsultation('Inquire about 30-Day Technology & AI Executive Diagnostic')}
                  className="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  Request Diagnostic Briefing
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SIGNATURE OFFER - 30-DAY DIAGNOSTIC */}
        {activeTab === 'diagnostic' && (
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-10 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded font-extrabold">
                    Signature Entry Offer
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Technology & AI Executive Diagnostic
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                    A bounded 30-day engagement giving executive sponsors fast control, demonstrating CIO judgment, and producing the evidentiary basis for long-term decisions.
                  </p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <div className="text-2xl font-black text-amber-400 font-mono">$18,000 – $25,000</div>
                  <div className="text-xs text-slate-400">30-Day Fixed Engagement</div>
                  <div className="text-[11px] text-slate-500">50% at start, 50% before final readout</div>
                </div>
              </div>

              {/* 5-Step Process Interactive Selector */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  The 5-Phase Diagnostic Process:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {diagnosticSteps.map((step) => (
                    <button
                      key={step.stepNumber}
                      onClick={() => setSelectedStep(step.stepNumber)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedStep === step.stepNumber
                          ? 'bg-amber-500/20 border-amber-500 text-white shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-amber-400 font-bold">{step.duration}</div>
                      <div className="text-xs font-bold mt-1 line-clamp-1">Step {step.stepNumber}: {step.title}</div>
                    </button>
                  ))}
                </div>

                {/* Selected Step Detail Display */}
                {(() => {
                  const curr = diagnosticSteps.find((s) => s.stepNumber === selectedStep) || diagnosticSteps[0];
                  return (
                    <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 space-y-4 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                          Phase {curr.stepNumber} • {curr.duration}
                        </span>
                        <span className="text-xs text-slate-400">Step {curr.stepNumber} of 5</span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{curr.title}</h4>
                      <p className="text-sm text-slate-300">{curr.description}</p>
                      
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        <div className="text-xs font-semibold text-slate-400 uppercase">Key Execution Activities:</div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {curr.actions.map((act, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* The 3 Core Deliverables */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  The 3 Board-Ready Deliverables Produced:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {diagnosticDeliverables.map((deliv, idx) => (
                    <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                      <div className="text-xs font-mono font-bold text-amber-400">{deliv.pagesOrFormat}</div>
                      <h5 className="text-base font-bold text-white">{deliv.title}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">{deliv.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnostic CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Ready to book an initial mandate conversation with Shafiq Rahman?
                </div>
                <button
                  onClick={() => onOpenConsultation('Book 30-Day Technology & AI Executive Diagnostic')}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Diagnostic Mandate Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: FRACTIONAL CIO RETAINERS */}
        {activeTab === 'retainers' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-white">Sell Outcomes & Executive Access, Not Unbounded Hours</h3>
              <p className="text-xs text-slate-400">
                Every retainer starts with a 3-month minimum, bills monthly in advance, and preserves calendar capacity for deep strategic focus.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {retainerPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/10'
                      : 'bg-slate-900/80 border border-slate-800'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-0.5 rounded-full tracking-wider shadow">
                      Most Common Mandate
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-mono text-amber-400 font-bold uppercase">{pkg.subtitle}</div>
                      <h4 className="text-2xl font-extrabold text-white mt-1">{pkg.name}</h4>
                      <p className="text-xs text-slate-400 mt-2">{pkg.bestFor}</p>
                    </div>

                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                      <div className="text-xs text-slate-400">Capacity Commitment:</div>
                      <div className="text-sm font-bold text-white">{pkg.capacity}</div>
                      <div className="text-lg font-black text-amber-400 font-mono pt-1">{pkg.recommendedFee}</div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">What's Included:</div>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(`Inquire about Fractional CIO Retainer: ${pkg.name}`)}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.popular
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>Request Retainer Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Scope Discipline: Included vs Explicitly Separate */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Standard Retainer Inclusions
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Weekly sponsor touchpoint & decision support</li>
                  <li className="flex items-center gap-2">✓ Monthly executive steering session</li>
                  <li className="flex items-center gap-2">✓ Portfolio, risk, and vendor accountability</li>
                  <li className="flex items-center gap-2">✓ Board or leadership reporting support</li>
                  <li className="flex items-center gap-2">✓ Quarterly roadmap refresh & priority realignment</li>
                  <li className="flex items-center gap-2">✓ Access to standard governance templates and policy sets</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Lock className="w-4 h-4 text-slate-400" />
                  Explicitly Separate (Protects Advisory Quality)
                </h4>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2">• Hands-on implementation and 24/7 operational coverage</li>
                  <li className="flex items-center gap-2">• Major procurement, legal dispute, or litigation support</li>
                  <li className="flex items-center gap-2">• Travel beyond agreed local meetings (reimbursed at cost)</li>
                  <li className="flex items-center gap-2">• Specialist audits requiring licensed public accounting firms</li>
                  <li className="flex items-center gap-2">• Unbounded staff-augmentation labor</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SPECIALIZED SPRINTS */}
        {activeTab === 'sprints' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-white">Fixed-Fee Specialized Sprints</h3>
              <p className="text-xs text-slate-400">
                Targeted, milestone-driven engagements for organizations solving urgent compliance, AI risk, or legacy modernization hurdles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializedSprints.map((sprint) => (
                <div key={sprint.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800 px-2.5 py-0.5 rounded">
                        {sprint.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{sprint.timeline}</span>
                    </div>

                    <h4 className="text-xl font-bold text-white">{sprint.title}</h4>
                    <div className="text-lg font-black text-amber-400 font-mono">{sprint.feeRange}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{sprint.summary}</p>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="text-xs font-bold text-slate-300 uppercase">Key Tangible Outputs:</div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {sprint.keyOutputs.map((out, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <div className="text-[11px] text-slate-500 font-mono">
                      Reference: {sprint.referenceFramework}
                    </div>
                    <button
                      onClick={() => onOpenConsultation(`Inquire about Specialized Sprint: ${sprint.title}`)}
                      className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Inquire About This Sprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: OPERATING CADENCE & GOVERNANCE */}
        {activeTab === 'cadence' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-white">Light Governance Cadence: Visible & Executive-Level</h3>
              <p className="text-xs text-slate-400">
                Listen → Decide → Assign → Measure → Escalate. We convene, frame, and drive decisions while client executives retain full authority.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {operatingCadence.map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-mono font-bold uppercase">
                    {item.cadence}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">{item.duration}</div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                    {item.focusItems.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Suggested Measures Banner */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Concrete Metrics We Track & Report to Leadership:
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-emerald-300">
                  Decisions Closed
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-emerald-300">
                  Critical Risks Reduced
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-amber-300">
                  Underperforming Projects Stopped
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-blue-300">
                  Demonstrable Benefits Realized
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-purple-300">
                  Vendor Commitments Met
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Call to Action */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-blue-950/60 border border-amber-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Facing a Leadership Gap, Stalled Modernization, or AI Pressure?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Speak directly with Shafiq Rahman in a confidential 20-minute introductory conversation to see if the 30-day executive diagnostic is the right first step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenConsultation('20-Minute Executive Introduction with Shafiq Rahman')}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Schedule 20-Minute Conversation</span>
            </button>
            <a
              href="mailto:info@nexisai.us?subject=Confidential%20Executive%20Inquiry%20-%20Fractional%20CIO"
              className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <span>Email: info@nexisai.us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
