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
  Globe
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
        
        {/* Top Newsletter & Lead Banner */}
        <div className="bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-slate-800 rounded-2xl p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1 rounded-full">
                Technology Insights Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Stay Ahead in Enterprise AI, Zero Trust & Cloud Governance
              </h3>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Subscribe to our monthly briefing curated for C-level executives, healthcare CTOs, university IT leaders, and government technology directors across the US, KSA, and UAE.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your enterprise email..."
                  required
                  className="bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 flex-1"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 cursor-pointer"
                  id="newsletter-submit-btn"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-2 text-emerald-400 text-xs mt-2 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you for subscribing! Check your inbox for our latest briefing.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Regional Hub Offices Grid */}
        <div className="mb-16">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-400" />
            <span>Global Regional Hubs & Infrastructure</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regionalOffices.map((office) => (
              <div 
                key={office.region} 
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-white flex items-center gap-2">
                    {office.region === 'US' ? '🇺🇸' : office.region === 'KSA' ? '🇸🇦' : '🇦🇪'} {office.country}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-900">
                    {office.city}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center gap-2 font-mono">
                    <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{office.email}</span>
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1">
                  {office.certifications.map((cert) => (
                    <span key={cert} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 opacity-75 blur-sm"></div>
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
                  NEXIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">AI</span>
                </span>
                <span className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase font-mono block -mt-1">
                  Advisory • Consulting • Services
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Nexis AI is a premier Executive Advisory, Strategy Consulting & Enterprise Technology Services firm headquartered in Owings Mills, MD. We advise C-suite leaders and deliver autonomous AI agents, HIPAA/FHIR healthcare interoperability, NIST 800-53 security enclaves, and high-performance computing systems across global markets.
            </p>
            <div className="pt-2 text-xs space-y-1">
              <div className="text-slate-300 font-semibold">US Flagship HQ: Owings Mills, MD</div>
              <div className="text-slate-400 font-mono">Default Phone: <a href="tel:14436085425" className="text-white hover:text-blue-400 underline">(443) 608-5425</a></div>
              <div className="text-emerald-400 font-mono">SMS / Text Hotline: <a href="sms:+14436085425" className="underline font-bold">(443) 608-5425</a></div>
              <div className="text-cyan-400 font-mono">Primary Email: <a href="mailto:info@nexisai.us" className="underline">info@nexisai.us</a></div>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC 2 Type II • NIST 800-53 • HIPAA • NCA ECC</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline"
                id="footer-consult-btn"
              >
                <span>Request Executive Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 1: Practice Areas */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">Practice Areas</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('leadership')} className="hover:text-blue-400 transition-colors text-emerald-300 font-semibold">
                  CIO Leadership Profile
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="hover:text-blue-400 transition-colors text-blue-300 font-semibold">
                  Detailed Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('enterprise-architecture')} className="hover:text-blue-400 transition-colors">
                  Enterprise Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('research-computing')} className="hover:text-blue-400 transition-colors">
                  Research Computing & HPC
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hardware-infrastructure')} className="hover:text-blue-400 transition-colors">
                  Hardware & Data Center
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('government')} className="hover:text-blue-400 transition-colors">
                  Government Practice
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Sectors */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">Sectors</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-blue-400 transition-colors">
                  Healthcare Organizations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-blue-400 transition-colors">
                  Universities & Research
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-blue-400 transition-colors">
                  Government Agencies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-blue-400 transition-colors">
                  Commercial SMBs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-solutions')} className="hover:text-blue-400 transition-colors">
                  AI Use Cases Showcase
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Tools */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">Resources & Tools</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('assessment')} className="hover:text-blue-400 transition-colors text-purple-300 font-semibold">
                  ⚡ AI Readiness Scorecard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cybersecurity')} className="hover:text-blue-400 transition-colors text-emerald-300">
                  🛡️ Zero Trust Risk Assessment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-blue-400 transition-colors">
                  AI & Security Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-blue-400 transition-colors">
                  Compliance Whitepapers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition-colors">
                  Contact Owings Mills HQ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Nexis Tech Group Privacy Policy: Compliant with US Privacy Act, HIPAA, KSA Personal Data Protection Law (PDPL), and UAE Data Protection Regulations.'); }} className="hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: Standard Enterprise Service Level Agreement (SLA) & Data Protection Addendum (DPA).'); }} className="hover:text-slate-300">Terms of Service</a>
            <a href="#security" onClick={(e) => { e.preventDefault(); onNavigate('cybersecurity'); }} className="hover:text-slate-300">Security Disclosure</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-slate-300">Executive Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
