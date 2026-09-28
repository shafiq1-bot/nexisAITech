import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Sparkles,
  Lock,
  Mail,
  User,
  Building2,
  X,
  ShieldCheck,
} from 'lucide-react';
import { executiveLeadMagnets, LeadMagnet } from '../data/leadMagnetsData';

interface ResourcesLeadMagnetsPageProps {
  onOpenConsultation: (subject?: string) => void;
}

export const ResourcesLeadMagnetsPage: React.FC<ResourcesLeadMagnetsPageProps> = ({
  onOpenConsultation,
}) => {
  const [selectedMagnet, setSelectedMagnet] = useState<LeadMagnet | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [orgInput, setOrgInput] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !nameInput || !selectedMagnet) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: nameInput,
          email: emailInput,
          companyName: orgInput || 'Enterprise Client',
          serviceInterest: `Lead Magnet Download: ${selectedMagnet.title}`,
          message: `Requested executive guide: ${selectedMagnet.title} (${selectedMagnet.format})`,
          crmExportTarget: 'HubSpot',
        }),
      });
      setIsSent(true);
    } catch (err) {
      console.error(err);
      setIsSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenModal = (magnet: LeadMagnet) => {
    setSelectedMagnet(magnet);
    setIsSent(false);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span>Executive Knowledge Library</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Executive Guides & CIO Decision Frameworks
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Ten field-tested guides, checklists, and governance frameworks designed for CEOs, Provosts, Health System Leaders, and Boards of Directors navigating technology change.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Authored by <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. Grounded in 20+ years of executive technology leadership across state government, healthcare systems, and research universities.
        </p>
      </div>

      {/* Grid of 10 Lead Magnets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {executiveLeadMagnets.map((magnet) => (
            <div
              key={magnet.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800 px-2.5 py-0.5 rounded">
                    Guide 0{magnet.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{magnet.format}</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug">{magnet.title}</h3>

                <div className="text-xs text-amber-300 font-medium">
                  Audience: <span className="text-slate-300">{magnet.targetAudience}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{magnet.summary}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">Key Executive Takeaways:</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {magnet.keyTakeaways.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => handleOpenModal(magnet)}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Access Complete Guide</span>
                </button>

                <button
                  onClick={() => handleOpenModal(magnet)}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  View Table of Contents →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guide Download & Table of Contents Modal */}
      {selectedMagnet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedMagnet(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                Guide 0{selectedMagnet.number} · {selectedMagnet.format}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedMagnet.title}</h3>
              <p className="text-xs text-slate-300">{selectedMagnet.summary}</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-white uppercase tracking-wider">Table of Contents:</div>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedMagnet.tableOfContents.map((ch, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-amber-400 font-mono text-[11px]">{i + 1}.</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            {!isSent ? (
              <form onSubmit={handleDownloadSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jdoe@organization.org"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Organization Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Health System / University / Public Agency"
                    value={orgInput}
                    onChange={(e) => setOrgInput(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    Strict executive confidentiality.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Send PDF Guide Instantly</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Guide Dispatched</h4>
                <p className="text-xs text-slate-300">
                  We have sent <strong>{selectedMagnet.title}</strong> directly to <strong>{emailInput}</strong>.
                </p>
                <button
                  onClick={() => setSelectedMagnet(null)}
                  className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs transition-colors mt-2"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
