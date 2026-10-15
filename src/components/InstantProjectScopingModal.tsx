import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
  Award,
  Stethoscope,
  GraduationCap,
  Briefcase,
  TrendingUp,
  FileText,
  Clock,
  Phone,
  Mail,
  User,
  Check
} from 'lucide-react';
import { PageId } from '../types';

interface InstantProjectScopingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (pageId: PageId) => void;
  initialSector?: string;
}

export const InstantProjectScopingModal: React.FC<InstantProjectScopingModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  initialSector,
}) => {
  const [step, setStep] = useState<number>(1);
  const [sector, setSector] = useState<string>(initialSector || 'Healthcare System / AMC');
  const [triggerEvent, setTriggerEvent] = useState<string>('30-Day Executive Technology Diagnostic');
  const [timeline, setTimeline] = useState<string>('Immediate (within 2-4 weeks)');
  const [organizationBudget, setOrganizationBudget] = useState<string>('$50M - $250M Operating Budget');
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    urgentChallenge: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [leadRecordId, setLeadRecordId] = useState<string>('');

  if (!isOpen) return null;

  const sectors = [
    { id: 'Healthcare System / AMC', label: 'Healthcare & Academic Medicine', icon: Stethoscope, badge: 'HIPAA & EHR' },
    { id: 'Higher Education / Research University', label: 'Higher Education & Research', icon: GraduationCap, badge: 'HPC & FERPA' },
    { id: 'State / Regional Public Sector', label: 'State & Regional Public Sector', icon: Building2, badge: 'NIST 800-53' },
    { id: 'Mid-Market Enterprise / PE Portfolio', label: 'Mid-Market Enterprise / PE', icon: Briefcase, badge: '30-Day Diagnostic' },
  ];

  const triggerEvents = [
    {
      id: '30-Day Executive Technology Diagnostic',
      title: '30-Day Executive Technology Diagnostic',
      desc: 'Rapid independent audit of architecture, vendor spend, IT operating model, and 90-day action charter.',
      badge: 'Most Popular',
    },
    {
      id: 'Sudden CIO Departure / Interim CIO Needed ASAP',
      title: 'Interim CIO / Leadership Vacancy',
      desc: 'Experienced executive leadership during unexpected turnover or while conducting a permanent CIO search.',
      badge: 'High Urgency',
    },
    {
      id: 'Enterprise AI Governance & NIST AI RMF',
      title: 'Enterprise AI Governance & Compliance',
      desc: 'Establish AI steering committee, risk classification, vendor audit, and board-level risk controls.',
      badge: 'Strategic',
    },
    {
      id: 'Application Portfolio Rationalization & $1M+ Cost Reduction',
      title: 'Application Rationalization & Cost Reduction',
      desc: 'Proven methodology delivering millions in recurring software, cloud, and vendor consolidation savings.',
      badge: 'High ROI',
    },
    {
      id: 'EHR / ERP Migration Recovery or Clinical Workflow Alignment',
      title: 'Complex EHR / ERP System Transformation',
      desc: 'Unstick stalled enterprise software migrations (Meditech to Epic, Workday, SAP, Oracle) with clinician buy-in.',
      badge: 'Critical Path',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.organization) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/consultation-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          jobTitle: formData.title || 'Executive Decision Maker',
          companyName: formData.organization,
          email: formData.email,
          phone: formData.phone || '',
          region: 'US',
          industry: sector,
          serviceInterest: `[INBOUND PROJECT SCOPE]: ${triggerEvent}`,
          estimatedBudget: organizationBudget,
          message: `Target Timeline: ${timeline}. Specific Trigger: ${triggerEvent}. Urgent Challenge Details: ${formData.urgentChallenge || 'Direct project scoping requested via executive wizard.'}`,
          targetCRM: 'HubSpot',
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (data.record?.id) {
        setLeadRecordId(data.record.id);
      }
      setIsCompleted(true);
    } catch (err) {
      console.error(err);
      setIsCompleted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                <span>Executive Project Scoping</span>
                <span>•</span>
                <span>Confidential Briefing</span>
              </div>
              <h3 className="text-lg font-bold text-white">Instant CIO Advisory & Diagnostic Scoping</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close scoping tool"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker (If not completed) */}
        {!isCompleted && (
          <div className="bg-slate-950/40 px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono shrink-0">
            <div className="flex items-center gap-2 text-slate-400">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>1</span>
              <span className={step === 1 ? 'text-amber-400 font-bold' : ''}>Sector</span>
              <span className="text-slate-600">/</span>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>2</span>
              <span className={step === 2 ? 'text-amber-400 font-bold' : ''}>Immediate Need</span>
              <span className="text-slate-600">/</span>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 3 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>3</span>
              <span className={step === 3 ? 'text-amber-400 font-bold' : ''}>Executive Contact</span>
            </div>
            <span className="text-slate-500 text-[11px]">Strictly Confidential (NDA)</span>
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {!isCompleted ? (
            <>
              {/* Step 1: Sector Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-white">Select Your Organization Type & Institutional Context:</h4>
                    <p className="text-xs text-slate-400 mt-1">Our advisory engagements are precisely calibrated to industry regulatory standards (HIPAA, FERPA, NIST SP 800-53, NIST AI RMF).</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {sectors.map((s) => {
                      const Icon = s.icon;
                      const isSelected = sector === s.id;
                      return (
                        <div
                          key={s.id}
                          onClick={() => setSector(s.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                              : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className={`p-2 rounded-xl ${isSelected ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-900 text-slate-400'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                              {s.badge}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-bold">{s.label}</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">Experienced executive guidance</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Triggering Need</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Triggering Need & Scale */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-base font-bold text-white">What is your primary triggering event or objective?</h4>
                    <p className="text-xs text-slate-400 mt-1">Select the core outcome you need Shafiq Rahman to govern or diagnose.</p>
                  </div>

                  <div className="space-y-2.5">
                    {triggerEvents.map((te) => {
                      const isSelected = triggerEvent === te.id;
                      return (
                        <div
                          key={te.id}
                          onClick={() => setTriggerEvent(te.id)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-500 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${isSelected ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-700'}`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-white">{te.title}</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-400 shrink-0">
                                {te.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{te.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Timeline Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="text-xs font-semibold text-slate-400 block mb-1.5">Target Engagement Timeline:</label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Immediate (within 2-4 weeks)">Immediate (within 2-4 weeks)</option>
                        <option value="Within 30-60 Days">Within 30-60 Days</option>
                        <option value="Next Fiscal Quarter Planning">Next Fiscal Quarter Planning</option>
                        <option value="Informational / Exploratory">Informational / Exploratory</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-400 block mb-1.5">Organizational Budget Scale:</label>
                      <select
                        value={organizationBudget}
                        onChange={(e) => setOrganizationBudget(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="$10M - $50M Operating Budget">$10M - $50M Operating Budget</option>
                        <option value="$50M - $250M Operating Budget">$50M - $250M Operating Budget</option>
                        <option value="$250M+ Enterprise Portfolio">$250M+ Enterprise Portfolio</option>
                        <option value="Under $10M Growing Organization">Under $10M Growing Organization</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 text-slate-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Executive Routing</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Executive Contact & Submission */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-white">Executive Routing & Confidential Contact Details</h4>
                    <p className="text-xs text-slate-400 mt-1">Your inquiry is routed directly to Shafiq Rahman for confidential review under non-disclosure protection.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-xs font-semibold text-slate-400 block mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Dr. / Jane Doe"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-400 block mb-1">Executive Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="CEO / Provost / Board Chair / COO / CMO"
                        className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-400 block mb-1">Organization / Institution *</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Health System, University, or Agency Name"
                        className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-400 block mb-1">Executive Work Email *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="executive@institution.org"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-400 block mb-1">Direct Phone Number (Optional for SMS / Direct Call)</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(410) 000-0000"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-400 block mb-1">Brief Description of Current Trigger / Priority (Optional):</label>
                      <textarea
                        rows={2}
                        value={formData.urgentChallenge}
                        onChange={(e) => setFormData({ ...formData, urgentChallenge: e.target.value })}
                        placeholder="e.g. Interim CIO vacancy, clinical AI policy needed before next audit, or consolidating redundant software suites."
                        className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] text-slate-300 flex items-center justify-between">
                    <div>
                      <span className="text-amber-400 font-bold">Selected Scope:</span> {sector} • {timeline}
                    </div>
                    <span className="text-emerald-400 font-mono font-bold">Encrypted & Secure</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 text-slate-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Generating Custom Blueprint...</span>
                      ) : (
                        <>
                          <span>Submit & Receive Executive Blueprint</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Completed Instant Executive Blueprint State */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-emerald-500/15 border-2 border-emerald-500/30 text-emerald-400 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  Scope Registered & Logged
                </span>
                <h3 className="text-2xl font-black text-white mt-3">Executive Project Scoping Generated</h3>
                <p className="text-xs text-slate-300 max-w-lg mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your project mandate for <strong>{formData.organization}</strong> has been transmitted directly to Shafiq Rahman’s executive triage desk.
                </p>
              </div>

              {/* Recommended Engagement Blueprint Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-left space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">Recommended Engagement Model:</span>
                  <span className="text-xs font-mono text-slate-400">{timeline}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Engagement Tier</div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {triggerEvent.includes('Diagnostic') ? '30-Day Bounded Diagnostic' : triggerEvent.includes('Interim') ? 'Interim CIO Mandate' : 'Fractional CIO Retainer'}
                    </div>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Executive Allocation</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">
                      {triggerEvent.includes('Interim') ? '25-35 hrs / week' : '15-20 hrs / week'}
                    </div>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Expected Outcome</div>
                    <div className="text-sm font-bold text-amber-400 mt-0.5">
                      90-Day Action Charter
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <div className="font-bold text-slate-200">Key Deliverables in Scope:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px]">
                    <li>Direct executive stakeholder interviews (CEO, Provost/Deans, Board, direct reports).</li>
                    <li>Application, contract, and vendor portfolio rationalization (identifying immediate 15%-30% cost-reductions).</li>
                    <li>NIST AI Risk Management Framework governance and defensibility matrix.</li>
                    <li>Board-ready Executive Brief and Now / Next / Later prioritization roadmap.</li>
                  </ul>
                </div>
              </div>

              {/* Immediate Booking Actions */}
              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    if (onNavigate) onNavigate('schedule');
                  }}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Lock In 20-Min Briefing on Calendar</span>
                </button>

                <a
                  href="tel:+14109347773"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Direct: (410) 934-7773</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
