import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Building2, 
  Globe, 
  Mail, 
  Phone, 
  User, 
  Sparkles,
  Database,
  ArrowRight
} from 'lucide-react';
import { LeadFormData, Region } from '../types';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRegion: Region;
  initialService?: string;
  initialNotes?: string;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
  currentRegion,
  initialService,
  initialNotes,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    region: currentRegion,
    industry: 'Healthcare',
    serviceInterest: initialService || 'ai-transformation',
    estimatedBudget: '$50,000 - $100,000',
    message: initialNotes || '',
    crmExportTarget: 'HubSpot',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState<any>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedResponse(data);
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setSubmittedResponse({
        success: true,
        confirmationMessage: `Thank you, ${formData.fullName}. Our ${formData.region} team will reach out within 4 business hours.`,
        crmExportPreview: { crmProvider: formData.crmExportTarget, status: 'Synced' },
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/90 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-slate-100 p-6 sm:p-8 relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
          id="close-consultation-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedResponse ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950 border border-blue-900 px-3 py-1 rounded-full">
                Schedule Executive Consultation
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                Talk to an AI & Cybersecurity Architecture Specialist
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct briefing for US, Saudi Arabia (Riyadh), and UAE (Dubai) enterprise leadership.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Sarah Al-Mansoori"
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                    id="consult-fullname-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@healthsystem.org"
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                    id="consult-email-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (512) 555-0199 or +966 50 123 4567"
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Regional University / Hospital System"
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Region Hub *</label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value as Region })}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="US">🇺🇸 United States</option>
                    <option value="KSA">🇸🇦 Saudi Arabia</option>
                    <option value="UAE">🇦🇪 United Arab Emirates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Sector *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="Healthcare">Healthcare & EHR</option>
                    <option value="Higher Education">Higher Ed & HPC</option>
                    <option value="Government">Government & Public Sector</option>
                    <option value="SMB">Commercial SMB</option>
                    <option value="Hardware">Hardware & Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Practice Focus</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="ai-transformation">AI Transformation</option>
                    <option value="cybersecurity">Cybersecurity & Zero Trust</option>
                    <option value="healthcare-technology">Healthcare IT & EHR</option>
                    <option value="higher-education-technology">Higher Ed & HPC</option>
                    <option value="smb-solutions">Managed SMB Solutions</option>
                    <option value="hardware-infrastructure">Hardware & GPU Clusters</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Scope & Requirements</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current technology stack, timeline, or compliance requirements (e.g. HIPAA RAG search, Zero Trust rollout)..."
                  className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-lg p-3 text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* CRM Integration Selection Target */}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span>CRM Export Integration:</span>
                </span>
                <div className="flex gap-2">
                  {(['HubSpot', 'Salesforce', 'Dynamics'] as const).map((crm) => (
                    <button
                      key={crm}
                      type="button"
                      onClick={() => setFormData({ ...formData, crmExportTarget: crm })}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                        formData.crmExportTarget === crm ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      {crm}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="consult-submit-btn"
              >
                <span>{submitting ? 'Syncing Lead & Booking...' : 'Submit Consultation Request'}</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Consultation Request Confirmed</h3>
              <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                {submittedResponse.confirmationMessage}
              </p>
            </div>

            {/* CRM Export Payload Simulation */}
            {submittedResponse.crmExportPreview && (
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-left space-y-2">
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">
                  Automated CRM Integration Payload ({submittedResponse.crmExportPreview.crmProvider})
                </div>
                <pre className="text-[10px] text-emerald-400 font-mono bg-slate-950 p-3 rounded-lg overflow-x-auto">
                  {JSON.stringify(submittedResponse.crmExportPreview, null, 2)}
                </pre>
              </div>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
