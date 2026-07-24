import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  Mail, 
  User, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { Region } from '../types';

interface BookAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRegion?: Region;
}

export const BookAuditModal: React.FC<BookAuditModalProps> = ({
  isOpen,
  onClose,
  currentRegion = 'US',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState<Region>(currentRegion);
  const [auditScope, setAuditScope] = useState('AI & Cybersecurity Comprehensive Audit');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !companyName) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          companyName,
          region,
          serviceInterest: '2026-audit-booking',
          estimatedBudget: '$50,000 - $250,000',
          message: `2026 Enterprise Audit Request: ${auditScope}. Preferred Date: ${preferredDate || 'Earliest Available'}. Phone: ${phone}`,
          crmExportTarget: 'HubSpot',
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedResult(data);
      } else {
        setErrorMsg(data.error || 'Failed to submit audit booking.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again or call our hotline.');
    } fontFinally: {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedResult(null);
    setFullName('');
    setEmail('');
    setCompanyName('');
    setPhone('');
    setPreferredDate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-slate-900 overflow-hidden">
        
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedResult ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>2026 Executive Initiative</span>
              </span>
            </div>

            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Book Your 2026 AI & Security Audit
            </h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Fast, 1-click audit booking. A Principal Enterprise Architect will evaluate your infrastructure, NIST/HIPAA posture, and AI roadmap.
            </p>

            {errorMsg && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Dr. Sarah Al-Mansoori"
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                    id="book-audit-fullname"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="executive@company.com"
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium font-mono"
                      id="book-audit-email"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Company <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g., Health System Inc."
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                      id="book-audit-company"
                    />
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (443) 608-5425"
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono"
                    id="book-audit-phone"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Regional Hub
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value as Region)}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all cursor-pointer font-medium"
                    id="book-audit-region"
                  >
                    <option value="US">🇺🇸 United States (NIST / HIPAA)</option>
                    <option value="KSA">🇸🇦 Saudi Arabia (NDMO / NCA)</option>
                    <option value="UAE">🇦🇪 United Arab Emirates (TDRA / ISR)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Audit Focus Area
                </label>
                <select
                  value={auditScope}
                  onChange={(e) => setAuditScope(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all cursor-pointer font-medium"
                  id="book-audit-scope"
                >
                  <option value="AI & Cybersecurity Comprehensive Audit">Comprehensive AI & Cybersecurity Architecture Audit</option>
                  <option value="Healthcare EHR & SMART-on-FHIR Audit">Healthcare EHR / SMART-on-FHIR Clinical AI Audit</option>
                  <option value="Zero Trust & Cloud Sovereignty Audit">Zero Trust Security & Cloud Sovereignty Audit</option>
                  <option value="GPU Cluster & HPC Optimization Audit">NVIDIA H200 GPU Cluster & Research Computing Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Audit Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono"
                  id="book-audit-date"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  id="book-audit-submit-btn"
                >
                  <span>{submitting ? 'Booking Audit & Saving Record...' : 'Confirm 2026 Audit Booking'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1 font-mono">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted • Saved to Nexis AI Database</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              Audit Booking Confirmed!
            </h3>

            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{fullName}</strong>. Your 2026 Audit booking record (ID: <span className="font-mono font-bold text-blue-600">{submittedResult.leadId}</span>) has been saved in our enterprise database.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Audit Focus:</span>
                <span className="text-slate-900 font-medium">{auditScope}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Company:</span>
                <span className="text-slate-900 font-medium">{companyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Hotline Direct Contact:</span>
                <a href="tel:+14436085425" className="text-blue-600 font-bold font-mono">+1 (443) 608-5425</a>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
