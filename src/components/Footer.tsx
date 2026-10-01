import React, { useState } from 'react';
import { 
  BrainCircuit, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Send, 
  ArrowRight,
  Globe,
  Award,
  Calendar,
  BarChart3,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { regionalOffices } from '../data/companyData';

interface FooterProps {
  currentLanguage: Language;
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const t = translations[currentLanguage];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Briefing Banner */}
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-blue-950/40 border border-slate-800 rounded-2xl p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 rounded-full bg-amber-600/10 blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800 px-3 py-1 rounded-full">
                Executive Briefing Series
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Executive Technology Leadership & AI Governance Insights
              </h3>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Monthly advisory briefings on Fractional CIO stewardship, AI risk classification, clinical informatics, and university research computing from Shafiq Rahman.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your executive email..."
                  required
                  className="bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 flex-1"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 cursor-pointer"
                  id="newsletter-submit-btn"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-2 text-emerald-400 text-xs mt-2 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you for subscribing! Check your inbox for the latest executive briefing.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-amber-400 opacity-75 blur-sm"></div>
                <div className="relative w-9 h-9 rounded-lg bg-slate-950 border border-cyan-500/50 p-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19V5l12 14V5" />
                    <circle cx="4" cy="5" r="1.5" className="fill-cyan-400" />
                    <circle cx="16" cy="19" r="1.5" className="fill-emerald-400" />
                    <circle cx="16" cy="5" r="1.5" className="fill-purple-400" />
                    <circle cx="4" cy="19" r="1.5" className="fill-blue-400" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight block">
                  NEXIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">AI</span>
                </span>
                <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase font-mono block -mt-1">
                  Executive Advisory · Led by Shafiq Rahman
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              <strong className="text-white">Nexis AI</strong> is the executive technology advisory and enterprise platform led by <strong className="text-amber-400">Shafiq Rahman, MS, MBA, MCS, PMP®</strong>. We provide Fractional CIO leadership, CIO advisory, AI governance, and digital transformation for healthcare, higher education, and public sector organizations.
            </p>

            <div className="pt-2 text-xs space-y-1.5">
              <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Headquarters: Owings Mills, Maryland, USA</span>
              </div>
              <div className="text-slate-300 font-mono flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Executive Line: <a href="tel:+14109347773" className="text-white hover:text-amber-400 underline font-bold">(410) 934-7773</a></span>
              </div>
              <div className="text-slate-300 font-mono flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Direct Inquiries: <a href="mailto:shafiqs1@gmail.com" className="text-cyan-300 hover:underline">shafiqs1@gmail.com</a></span>
              </div>
              <div className="pt-1">
                <a
                  href="https://www.linkedin.com/in/shafiqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 underline font-mono"
                >
                  <span>Connect with Shafiq Rahman on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('schedule')}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
                id="footer-schedule-btn"
              >
                <span>Schedule Executive Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 1: Executive Services */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">Executive Services</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('fractional-cio')} className="hover:text-amber-400 transition-colors text-slate-200 font-medium">
                  Fractional CIO Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cio-advisory')} className="hover:text-amber-400 transition-colors text-slate-200 font-medium">
                  CIO Advisory & Board Oversight
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('interim-cio')} className="hover:text-amber-400 transition-colors">
                  Interim CIO Mandates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-strategy')} className="hover:text-amber-400 transition-colors">
                  Enterprise AI Strategy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-governance')} className="hover:text-amber-400 transition-colors">
                  Enterprise AI Governance (NIST)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('technology-governance')} className="hover:text-amber-400 transition-colors">
                  Technology Governance & Steering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('do-you-need-a-fractional-cio')} className="hover:text-amber-400 transition-colors text-amber-300">
                  Do You Need a Fractional CIO?
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Industry Practices */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">Sectors & Practices</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('healthcare-cio-advisory')} className="hover:text-emerald-400 transition-colors text-slate-200">
                  Healthcare & Clinical Informatics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('higher-education-cio-advisory')} className="hover:text-blue-400 transition-colors text-slate-200">
                  Higher Education & Research HPC
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('government')} className="hover:text-blue-400 transition-colors">
                  Public Sector & State Agencies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('enterprise-architecture')} className="hover:text-blue-400 transition-colors">
                  Enterprise Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cybersecurity')} className="hover:text-blue-400 transition-colors">
                  Zero Trust & Cybersecurity
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="hover:text-amber-400 transition-colors text-emerald-400 font-medium">
                  Verified Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('research-publications')} className="hover:text-amber-400 transition-colors text-cyan-400 font-bold flex items-center gap-1">
                  <span>Research & Publications (8)</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('press-media')} className="hover:text-amber-400 transition-colors text-amber-300 font-semibold flex items-center gap-1">
                  <span>Press, Keynotes & Articles</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tools & Resources */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">Executive Tools</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://scholar.google.com/citations?user=L0j_am8AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors text-slate-300 flex items-center gap-1 font-mono text-[11px]"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Google Scholar Profile</span>
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('assessment')} className="hover:text-amber-400 transition-colors text-amber-300 font-bold flex items-center gap-1">
                  <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                  <span>CIO Maturity Assessment</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-advisor')} className="hover:text-purple-300 transition-colors text-purple-400 font-semibold flex items-center gap-1">
                  <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
                  <span>AI Executive Advisor</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-blue-400 transition-colors">
                  10 Executive Guides & Checklists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-blue-400 transition-colors">
                  Executive Insights & Articles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors text-slate-300 font-semibold">
                  About Shafiq Rahman
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('schedule')} className="hover:text-amber-400 transition-colors text-amber-300">
                  Book Advisory Scoping
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('trust-center')} className="hover:text-emerald-400 transition-colors text-slate-400">
                  Trust Center (nexisai.us)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Nexis AI. Executive Technology Advisory & Enterprise AI Practice. Led by Shafiq Rahman, MS, MBA, MCS, PMP®. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('trust-center')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Security Disclosure (RFC 9116)
            </button>
            <button
              onClick={() => onNavigate('cybersecurity')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy & Regulatory Governance
            </button>
            <button
              onClick={() => onNavigate('schedule')}
              className="hover:text-amber-400 transition-colors cursor-pointer font-bold"
            >
              Schedule Conversation
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
