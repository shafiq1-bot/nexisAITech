import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { PageRoute, SITE_CONFIG } from '../../content/nexisData';
import { trackEvent } from './SharedUI';

interface ExecutiveFooterProps {
  onNavigate: (page: PageRoute, sectionId?: string) => void;
}

export const ExecutiveFooter: React.FC<ExecutiveFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-theme-header text-white border-t border-theme-header py-14 px-4 sm:px-6 lg:px-8 transition-colors no-print">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Multi-Column Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/10 pb-10">
          {/* Firm Identity */}
          <div className="space-y-3 lg:col-span-1">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2.5 cursor-pointer"
            >
              <img
                src="/favicon.svg"
                alt="Nexis AI emblem"
                width={26}
                height={26}
                className="w-6.5 h-6.5 rounded-md shrink-0"
              />
              <span className="text-lg font-bold font-mono text-white">{SITE_CONFIG.legalName}</span>
            </button>
            <p className="text-xs text-slate-300 leading-relaxed">
              Executive Technology Advisory, Fractional CIO Leadership, IT Modernization, Managed Operations &amp; Responsible AI Governance.
            </p>
            <div className="space-y-1.5 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                onClick={() => trackEvent('contact_email_click', { source_location: 'footer' })}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                onClick={() => trackEvent('contact_phone_click', { source_location: 'footer' })}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-theme-accent shrink-0" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Core Advisory & Services */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
              Advisory &amp; Services
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button type="button" onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home — Executive Showcase
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('fractional-cio')} className="hover:text-white transition-colors cursor-pointer">
                  Fractional CIO &amp; Executive Advisory
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('it-modernization')} className="hover:text-white transition-colors cursor-pointer">
                  IT Modernization &amp; Transformation
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('it-modernization', 'managed-services')} className="hover:text-white transition-colors cursor-pointer">
                  Helpdesk, 24x7 SOC &amp; Infrastructure
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('ai-strategy')} className="hover:text-white transition-colors cursor-pointer">
                  AI Strategy &amp; Governance
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('ai-strategy', 'diagnostic')} className="hover:text-white transition-colors cursor-pointer">
                  30-Day AI Diagnostic ($6,500)
                </button>
              </li>
            </ul>
          </div>

          {/* Sector Practices */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
              Sector Practices
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button type="button" onClick={() => onNavigate('healthcare')} className="hover:text-white transition-colors cursor-pointer">
                  Healthcare &amp; Clinical Informatics
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('public-sector')} className="hover:text-white transition-colors cursor-pointer">
                  Public Sector &amp; Government IT
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('higher-ed')} className="hover:text-white transition-colors cursor-pointer">
                  Higher Education &amp; Academic Medicine
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Shafiq Rahman
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about', 'executive-downloads')} className="hover:text-white transition-colors cursor-pointer">
                  Executive Biography &amp; Credentials
                </button>
              </li>
            </ul>
          </div>

          {/* Recognition, Tools & Contact */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-theme-accent">
              Insights &amp; Readiness
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button type="button" onClick={() => onNavigate('insights', 'executive-recognition')} className="hover:text-white transition-colors cursor-pointer">
                  Executive Leadership &amp; Recognition
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('insights', 'thought-leadership')} className="hover:text-white transition-colors cursor-pointer">
                  Publications &amp; Thought Leadership
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('insights', 'it-maturity-assessment')} className="hover:text-white transition-colors cursor-pointer">
                  Interactive Assessments &amp; Checklists
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Schedule Executive Consultation
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact', 'faq')} className="hover:text-white transition-colors cursor-pointer">
                  Executive FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Official Verification Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-slate-500">
              Frameworks we work to: NIST AI RMF · NIST SP 800-53 · HIPAA. Interactive tools provide preliminary self-assessment estimates only.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE_CONFIG.icmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>ICMA AI Guide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a
              href={SITE_CONFIG.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
            <span>·</span>
            <a href="/robots.txt" className="hover:text-white transition-colors">Robots.txt</a>
            <span>·</span>
            <a href="/llms.txt" className="hover:text-white transition-colors">llms.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
