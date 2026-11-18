import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Send,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';
import { PageRoute, SITE_CONFIG, EXECUTIVE_FAQ } from '../../content/nexisData';
import { PageHeroBanner, SectionHeading, trackEvent } from './SharedUI';

interface ContactPageProps {
  onNavigate: (page: PageRoute, sectionId?: string, prefillService?: string) => void;
  calUrl: string;
  isDark: boolean;
  prefillService?: string;
}

const INQUIRY_PATHS = [
  'Fractional CIO engagement',
  'Enterprise IT modernization',
  'AI governance assessment',
  'Healthcare & clinical informatics',
  'Public-sector advisory',
  'Higher education & academic medicine',
  'Speaking & executive collaboration',
] as const;

export const ContactPage: React.FC<ContactPageProps> = ({
  calUrl,
  isDark,
  prefillService,
}) => {
  const [selectedPath, setSelectedPath] = useState<string>(() => {
    if (prefillService) {
      const matched = INQUIRY_PATHS.find((p) =>
        prefillService.toLowerCase().includes(p.toLowerCase().split(' ')[0])
      );
      return matched || 'Fractional CIO engagement';
    }
    return 'Fractional CIO engagement';
  });

  const [bookingMethod, setBookingMethod] = useState<'calendar' | 'form'>(
    prefillService ? 'form' : 'calendar'
  );

  // Structured executive form state
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState('Community Hospital / Health System');
  const [message, setMessage] = useState(prefillService || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedConfirmation, setSubmittedConfirmation] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sync incoming prefillService from navigation calls
  useEffect(() => {
    if (prefillService) {
      const matched = INQUIRY_PATHS.find((p) =>
        prefillService.toLowerCase().includes(p.toLowerCase().split(' ')[0])
      );
      if (matched) setSelectedPath(matched);
      setMessage((prev) => (prev ? prev : `Context: ${prefillService}`));
      setBookingMethod('form');
    }
  }, [prefillService]);

  // Initialize Cal.com inline embed whenever ContactPage mounts or switches to Calendar tab
  useEffect(() => {
    if (bookingMethod !== 'calendar') return;

    const initCal = () => {
      const Cal = (window as any).Cal;
      const container = document.getElementById('my-cal-inline-30min');
      if (Cal && Cal.ns && Cal.ns['30min'] && container) {
        try {
          container.innerHTML = '';
          Cal.ns['30min']('inline', {
            elementOrSelector: '#my-cal-inline-30min',
            config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
            calLink: 'shafiq-rahman-gxhxcu/30min',
          });
          Cal.ns['30min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
        } catch (err) {
          console.warn('Cal.com inline initialization note:', err);
        }
      }
    };

    initCal();
    const t1 = setTimeout(initCal, 450);
    const t2 = setTimeout(initCal, 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [bookingMethod]);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !organization.trim()) {
      setSubmitError('Please enter your Full Name, Organization, and Work Email.');
      return;
    }

    setSubmitError(null);
    setIsSubmitting(true);
    trackEvent('submit_executive_inquiry', { inquiry_path: selectedPath, sector });

    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          organization,
          jobTitle: roleTitle || 'Executive Leader',
          industry: sector,
          serviceInterest: selectedPath,
          message: message || `Confidential inquiry regarding: ${selectedPath}`,
          region: 'US',
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');

      setSubmittedConfirmation(
        data.confirmationMessage ||
          `Thank you, ${fullName}. Your confidential inquiry (${selectedPath}) has been logged for Shafiq Rahman (${SITE_CONFIG.email}).`
      );
    } catch {
      setSubmittedConfirmation(
        `Thank you, ${fullName}. To guarantee direct delivery, please note your reference inquiry (${selectedPath}) can also be sent straight to ${SITE_CONFIG.email} or scheduled live above.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-20 pb-20">
      <PageHeroBanner
        eyebrow="Executive Engagement & Contact"
        metaLine={`${SITE_CONFIG.locationShort} · Serving Nationwide US`}
        title="Schedule a Confidential Executive Consultation."
        description="Speak directly with Shafiq Rahman regarding Fractional CIO mandates, enterprise IT modernization, managed operations, clinical informatics, or the 30-Day AI Governance & Pilot Diagnostic ($6,500)."
        primaryCtaLabel="Book 30-Minute Fit Call Directly"
        onPrimaryCta={() => {
          setBookingMethod('calendar');
          document.getElementById('fit-call')?.scrollIntoView({ behavior: 'smooth' });
        }}
        secondaryCtaLabel="Complete Inquiry Form"
        onSecondaryCta={() => {
          setBookingMethod('form');
          document.getElementById('fit-call')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* DIRECT CONTACT CHANNELS + 7 INQUIRY PATHS */}
      <section id="contact-portal" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
            <Mail className="w-5 h-5 text-theme-accent" />
            <div className="text-xs font-mono uppercase text-slate-500">Direct Principal Email</div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              onClick={() => trackEvent('contact_email_click', { location: 'contact_page' })}
              className="block text-base font-extrabold text-slate-900 dark:text-white hover:text-theme-accent"
            >
              {SITE_CONFIG.email}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Confidential C-suite inquiries, board RFP briefs, and speaking invitations.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
            <Phone className="w-5 h-5 text-theme-accent" />
            <div className="text-xs font-mono uppercase text-slate-500">Executive Telephone</div>
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() => trackEvent('contact_phone_click', { location: 'contact_page' })}
              className="block text-base font-extrabold text-slate-900 dark:text-white hover:text-theme-accent font-mono"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Direct phone line · {SITE_CONFIG.url}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2">
            <MapPin className="w-5 h-5 text-theme-accent" />
            <div className="text-xs font-mono uppercase text-slate-500">Headquarters &amp; Service Scope</div>
            <div className="text-base font-extrabold text-slate-900 dark:text-white">
              {SITE_CONFIG.location}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {SITE_CONFIG.serviceGeography}.
            </p>
          </div>
        </div>

        {/* 7 INQUIRY PATHS SELECTOR */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-bold uppercase text-theme-accent">
                Select Inquiry Focus
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                How Can Nexis AI Support Your Organization?
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">7 Executive Engagement Paths</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {INQUIRY_PATHS.map((path) => {
              const active = selectedPath === path;
              return (
                <button
                  key={path}
                  type="button"
                  onClick={() => {
                    setSelectedPath(path);
                    setBookingMethod('form');
                    document.getElementById('fit-call')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer flex items-center justify-between gap-2 ${
                    active
                      ? 'bg-theme-header text-white border-theme-accent shadow-xs'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-theme-accent/60'
                  }`}
                >
                  <span>{path}</span>
                  {active && <CheckCircle2 className="w-4 h-4 text-theme-accent shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FIT CALL CALENDAR EMBED + CONFIDENTIAL INQUIRY FORM */}
      <section id="fit-call" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <SectionHeading
            eyebrow="Direct Principal Access · 30 Minutes"
            title="Live Fit-Call Scheduler or Structured Inquiry"
            description="What happens on the fit call: 10 minutes walking through your environment & board questions; 10 minutes honest mutual-fit review; 10 minutes confirming kickoff or next steps—zero sales pressure."
          />

          <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 p-1 bg-slate-100 dark:bg-slate-900 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setBookingMethod('calendar')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                bookingMethod === 'calendar'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-theme-accent" />
              <span>Book Live Calendar</span>
            </button>
            <button
              type="button"
              onClick={() => setBookingMethod('form')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                bookingMethod === 'form'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-theme-accent" />
              <span>Executive Inquiry Form</span>
            </button>
          </div>
        </div>

        {/* Option A: Live Cal.com Inline Scheduler */}
        {bookingMethod === 'calendar' && (
          <div className="space-y-4">
            <div
              className={`rounded-3xl border p-2 sm:p-4 overflow-hidden shadow-sm ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div
                id="my-cal-inline-30min"
                style={{ width: '100%', minHeight: '640px', overflow: 'auto' }}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 px-1">
              <span>Direct 30-minute confidential consultation with Shafiq Rahman.</span>
              <a
                href={calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-theme-accent hover:underline inline-flex items-center gap-1"
              >
                <span>Open Cal.com in New Window</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Option B: Confidential Executive Inquiry Form */}
        {bookingMethod === 'form' && (
          <div className="p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            {submittedConfirmation ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Confidential Inquiry Received
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                  {submittedConfirmation}
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-theme-accent text-theme-accent-contrast font-bold rounded-xl text-xs inline-flex items-center gap-1.5"
                  >
                    <span>Book a Specific Time on Cal.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedConfirmation(null)}
                    className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-theme-accent">
                    <Briefcase className="w-4 h-4" />
                    <span>Inquiry Topic: {selectedPath}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-theme-accent" />
                    <span>Handled confidentially by Shafiq Rahman</span>
                  </div>
                </div>

                {submitError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-xs text-rose-800 dark:text-rose-200">
                    {submitError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-org" className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                      Organization / Institution *
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Hospital, Agency, University, or Enterprise"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-role" className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                      Title / Role
                    </label>
                    <input
                      id="contact-role"
                      type="text"
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
                      placeholder="e.g., CEO, Board Chair, Provost, Agency Director"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-sector" className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                      Organization Sector
                    </label>
                    <select
                      id="contact-sector"
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-accent"
                    >
                      <option value="Community Hospital / Health System">Community Hospital / Health System</option>
                      <option value="State, County, or Municipal Government">State, County, or Municipal Government</option>
                      <option value="Higher Education / Academic Medical Center">Higher Education / Academic Medical Center</option>
                      <option value="Enterprise / Commercial Organization">Enterprise / Commercial Organization</option>
                      <option value="Conference / Media / Speaking Host">Conference / Media / Speaking Host</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                      Work Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.org"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                      Direct Phone (Optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (000) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-notes" className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300">
                    Mandate Context, Priorities &amp; Timeline
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a brief overview of your IT leadership need, EHR/cloud modernization priorities, active AI pilots, or speaking/collaboration dates..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Prefer email? Write directly to{' '}
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-theme-accent font-mono hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 bg-theme-accent hover:opacity-95 text-theme-accent-contrast font-bold rounded-xl text-xs sm:text-sm transition-all shadow cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Confidentially...' : 'Send Confidential Inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </section>

      {/* EXECUTIVE FAQ ACCORDION */}
      <section id="faq" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6 scroll-mt-24">
        <SectionHeading
          eyebrow="Frequently Asked Executive Questions"
          title="Clarity on Engagements, Delivery & Governance Scope"
        />

        <div className="space-y-3">
          {EXECUTIVE_FAQ.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-theme-accent shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
