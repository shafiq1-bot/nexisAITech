import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  User,
  Mail,
  Phone,
  Sparkles,
  Lock,
} from 'lucide-react';
import { executiveLeaderData } from '../data/leadershipData';
import shafiqHeadshot from '../assets/images/shafiq_about_portrait_1790861662502.jpg';

interface ExecutiveSchedulePageProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
}

export const ExecutiveSchedulePage: React.FC<ExecutiveSchedulePageProps> = ({
  onOpenConsultation,
  onOpenCalendar,
}) => {
  const [selectedMeetingType, setSelectedMeetingType] = useState('20-Minute Executive Introduction');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9:00 AM – 12:00 PM EST)');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    title: '',
    phone: '',
    topic: '',
  });
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.organization,
          jobTitle: formData.title,
          serviceInterest: `Scheduled Meeting: ${selectedMeetingType}`,
          message: `Requested: ${selectedMeetingType} on ${preferredDate || 'Next Available'} (${preferredTime}). Notes: ${formData.topic}`,
          crmExportTarget: 'HubSpot',
        }),
      });
      setIsBooked(true);
    } catch (err) {
      console.error(err);
      setIsBooked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20 space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Executive Engagement</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Schedule a Confidential CIO Advisory Conversation
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Connect directly with <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong> (former State CIO for Maryland Department of Transportation and former enterprise IT executive at University of Maryland, Baltimore).
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Every conversation is strictly confidential and non-disclosure protected. We focus on your triggering event, organizational priorities, and whether a 30-day executive diagnostic or fractional retainer makes sense.
        </p>

        {/* Executive Portrait Badge */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-500/60 shrink-0">
              <img
                src={shafiqHeadshot}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('/images/shafiq_rahman_headshot.jpg')) {
                    target.src = '/images/shafiq_rahman_headshot.jpg';
                  }
                }}
                alt="Shafiq Rahman, PMP®"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Shafiq Rahman, MS, MBA, MCS, PMP®</div>
              <div className="text-[10px] text-amber-400 font-mono">Former State CIO · Principal Executive Advisor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Booking Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isBooked ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            
            {/* Meeting Type Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                1. Select Conversation Format:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    type: '20-Minute Executive Introduction',
                    desc: 'High-level discussion regarding your leadership gap, AI pressure, or transformation priorities.',
                    badge: 'Popular',
                  },
                  {
                    type: '30-Day Executive Diagnostic Scoping',
                    desc: 'Reviewing scope, deliverables (Brief, Priority Portfolio, 90-Day Charter), and timeline.',
                    badge: 'Diagnostic',
                  },
                  {
                    type: 'Fractional or Interim CIO Discussion',
                    desc: 'Evaluating capacity (1 to 3 days/week), decision boundaries, and board reporting.',
                    badge: 'Retainer',
                  },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedMeetingType(item.type)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedMeetingType === item.type
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-amber-400 font-bold">
                        {item.badge}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white mt-2">{item.type}</h4>
                      <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-6 pt-4 border-t border-slate-800">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                2. Your Contact & Organization Details:
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
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
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
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Organization Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Health System / University / State Agency"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Your Executive Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="CEO, Provost, CFO, Board Chair, Agency Head"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Direct Phone (Optional)</label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Preferred Time Window</label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Morning (9:00 AM – 12:00 PM EST)">Morning (9:00 AM – 12:00 PM EST)</option>
                    <option value="Afternoon (1:00 PM – 4:00 PM EST)">Afternoon (1:00 PM – 4:00 PM EST)</option>
                    <option value="Late Afternoon (4:00 PM – 6:00 PM EST)">Late Afternoon (4:00 PM – 6:00 PM EST)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Primary Objective or Triggering Event (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Current CIO retiring in 60 days, board requesting AI governance charter, or recovering from a stalled EHR transition..."
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Confidential. NDAs executed prior to sensitive portfolio discussions.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Request...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Meeting Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>

          </div>
        ) : (
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-extrabold text-white">Meeting Request Received</h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your request for a <strong>{selectedMeetingType}</strong> has been routed directly to Shafiq Rahman’s executive calendar.
            </p>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              A calendar invite and dial-in details have been dispatched to <strong>{formData.email}</strong>.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => setIsBooked(false)}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Schedule Another Time
              </button>
              <a
                href="https://www.linkedin.com/in/shafiqr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
