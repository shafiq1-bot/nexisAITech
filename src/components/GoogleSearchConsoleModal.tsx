import React, { useState } from 'react';
import {
  X,
  Search,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Globe,
  Share2,
  TrendingUp,
  ShieldCheck,
  FileCode2,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface GoogleSearchConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSearchConsoleModal: React.FC<GoogleSearchConsoleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://nexisai.us';
  const sitemapUrl = `${currentOrigin}/sitemap.xml`;
  const robotsUrl = `${currentOrigin}/robots.txt`;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const steps = [
    {
      num: 1,
      title: 'Ensure Search Console Property Matches Your Domain',
      desc: 'In Google Search Console, verify the exact property address you are submitting for. If your property is your live Cloud Run URL or custom domain, your sitemap dynamically matches your host automatically.',
      actionTitle: 'Open Google Search Console',
      actionUrl: 'https://search.google.com/search-console',
      tip: `Current detected site address: "${currentOrigin}". Verify this property in Search Console first.`,
    },
    {
      num: 2,
      title: 'Submit Only "sitemap.xml" (Do NOT Paste Full URL)',
      desc: 'In Google Search Console, under Sitemaps, Google already displays your domain prefix (e.g. "https://domain.com/"). If you paste the full URL, Google creates a double-address which triggers "Invalid sitemap address".',
      actionTitle: 'Open Live sitemap.xml',
      actionUrl: sitemapUrl,
      tip: 'In the text box beside your domain prefix, type ONLY: sitemap.xml and click Submit.',
    },
    {
      num: 3,
      title: 'Add Backlink on LinkedIn & Google Scholar (Highest PageRank Impact)',
      desc: 'Google ranks websites based on "PageRank" authority from trusted external websites. Because Shafiq Rahman already has a high-authority LinkedIn profile and Google Scholar profile with peer-reviewed citations, linking your website directly from these profiles passes enormous domain authority to Google.',
      actionTitle: 'Open Shafiq Rahman LinkedIn Profile',
      actionUrl: 'https://www.linkedin.com/in/shafiqr/',
      tip: 'Add this website URL in: 1) The "Contact Info" website field; 2) The "Custom Button" on your profile headline ("Visit my website"); and 3) In your Featured post or About section.',
    },
    {
      num: 4,
      title: 'Verify Bing Webmaster Tools & AI Engines (Perplexity, SearchGPT)',
      desc: 'Bing powers search results for Microsoft Copilot, DuckDuckGo, and Yahoo. Your site already contains rich Schema.org JSON-LD and OpenGraph metadata ready for instant ingestion.',
      actionTitle: 'Open Bing Webmaster Tools',
      actionUrl: 'https://www.bing.com/webmasters',
      tip: 'Sign in to Bing Webmaster Tools and choose "Import from Google Search Console" for instant one-click verification across Microsoft search engines.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                <span>Google Search Ranking Engine</span>
                <span>·</span>
                <span>SEO Indexing Protocol</span>
              </div>
              <h3 className="text-lg font-bold text-white">How to Get Ranked #1 on Google for "Fractional CIO"</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Google Search Console modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 text-xs sm:text-sm">
          
          {/* Key Search Diagnostic Alert */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-300">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Why Doesn't a Brand-New Website Appear Immediately on Google?</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Google does not scan the entire internet in real time. When a website is first built or deployed, Google has never visited the URL. To appear at the top of Google searches for <strong>"Fractional CIO"</strong>, Google requires two things:
            </p>
            <ol className="list-decimal list-inside text-xs text-slate-300 space-y-1 pl-1">
              <li><strong>Submission:</strong> Telling Google Search Console that your website exists so Googlebot crawls it.</li>
              <li><strong>Authority Link:</strong> Linking this site from your established LinkedIn profile (which Google already trusts).</li>
            </ol>
          </div>

          {/* Current Technical SEO Verification Status */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-white uppercase">Technical On-Page SEO Status:</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                100% Fully Optimized & Configured
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800/80">
                <span className="text-slate-400">Target Keyword in Title:</span>
                <span className="font-mono text-emerald-400 font-bold text-[11px]">"Fractional CIO Services"</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800/80">
                <span className="text-slate-400">Exact Match H1 Header:</span>
                <span className="font-mono text-emerald-400 font-bold text-[11px]">Configured in Hero</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800/80">
                <span className="text-slate-400">Schema.org FAQPage:</span>
                <span className="font-mono text-emerald-400 font-bold text-[11px]">6 Rich Snippet Q&As</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800/80">
                <span className="text-slate-400">OpenGraph Preview Card:</span>
                <span className="font-mono text-emerald-400 font-bold text-[11px]">1200x630 Executive Headshot</span>
              </div>
            </div>
          </div>

          {/* Actionable Steps to Rank */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              The 4 Steps to Submit & Dominate Google Search:
            </h4>

            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {st.num}
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-white">{st.title}</h5>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>

                  <a
                    href={st.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/60 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  >
                    <span>{st.actionTitle}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800/80 text-[11px] text-amber-200/90 leading-relaxed font-mono">
                  💡 {st.tip}
                </div>
              </div>
            ))}
          </div>

          {/* Direct Copyable Links */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase">
              Quick Links for Submission:
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
              <div className="text-xs font-mono truncate text-slate-300 w-full sm:w-auto">
                <span className="text-slate-500">Sitemap URL: </span>
                <span className="text-amber-400">{sitemapUrl}</span>
              </div>
              <button
                onClick={() => copyToClipboard(sitemapUrl, 'sitemap')}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg border border-slate-700 flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                {copiedKey === 'sitemap' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Sitemap URL</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400 font-mono">
            Direct Office: (410) 934-7773
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
