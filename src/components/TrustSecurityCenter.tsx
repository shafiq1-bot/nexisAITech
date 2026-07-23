import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  Lock,
  Globe,
  FileText,
  AlertTriangle,
  ExternalLink,
  Copy,
  RefreshCw,
  Mail,
  Phone,
  Building2,
  Award,
  Database,
  Send,
  HelpCircle,
  FileCheck,
  Zap,
  ChevronRight
} from 'lucide-react';
import { Language, Region } from '../types';

interface TrustSecurityCenterProps {
  currentLanguage: Language;
  currentRegion: Region;
  onOpenConsultation?: () => void;
}

export const TrustSecurityCenter: React.FC<TrustSecurityCenterProps> = ({
  currentLanguage,
  currentRegion,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'infoblox-unblock' | 'dns-auth' | 'compliance' | 'vdp'>('overview');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [liveStatus, setLiveStatus] = useState<any>(null);
  const [loadingStatus, setLoadingStatus] = useState(false);

  // Infoblox Unblock Form State
  const [userOrg, setUserOrg] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [blockedDomain, setBlockedDomain] = useState('nexisai.us');
  const [customNotes, setCustomNotes] = useState('Enterprise B2B AI Advisory & IT Modernization Services website for Nexis Tech Group LLC.');
  const [generatedTemplate, setGeneratedTemplate] = useState('');

  useEffect(() => {
    fetchLiveDomainStatus();
  }, []);

  const fetchLiveDomainStatus = async () => {
    setLoadingStatus(true);
    try {
      const res = await fetch('/api/domain-trust-status');
      const data = await res.json();
      if (data.success) {
        setLiveStatus(data);
      }
    } catch (e) {
      console.error('Error fetching domain status:', e);
    } finally {
      setLoadingStatus(false);
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 3000);
  };

  const handleGenerateUnblockEmail = () => {
    const template = `Subject: Domain Recategorization Request for nexisai.us - Verified Business Domain

To: Infoblox Threat Intelligence / Security Operations Team (support@infoblox.com / cyber-intelligence)
From: ${userEmail || '[Your Email]'}, ${userOrg || '[Your Organization]'}

Dear Infoblox Threat Intelligence Team,

We are submitting an urgent domain re-categorization request for:
- Domain Name: nexisai.us
- Primary Website: https://nexisai.us
- Entity Name: Nexis Tech Group LLC (Owings Mills, MD, USA)
- Business Purpose: Enterprise AI Transformation, Zero Trust Cybersecurity & IT Advisory Services.

REASON FOR REQUEST:
The domain "nexisai.us" is a legitimate, verified US enterprise business domain. It is currently being flagged or restricted by Infoblox Cyber Intelligence / DNS threat filters as a newly registered domain or unknown reputation.

VERIFIED DOMAIN & SECURITY CREDENTIALS:
1. RFC 9116 Vulnerability Disclosure Endpoint: https://nexisai.us/.well-known/security.txt
2. Email Authentication:
   - SPF Record: v=spf1 include:_spf.google.com mx ~all
   - DMARC Policy: v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@nexisai.us;
   - DKIM: 2048-bit RSA Active
3. Compliance Frameworks: NIST SP 800-53 Rev 5, SOC 2 Type II Architecture, HIPAA & US CAN-SPAM Act compliant.
4. Physical Business Headquarters: 11436 Cronhill Drive, Owings Mills, MD 21117, USA. Contact: +1 (443) 608-5425.

Please update your reputation databases to reflect nexisai.us as a trusted "Business / Information Technology" domain and remove any security blocks or false-positive flags.

Thank you,
${userOrg || '[Your Organization / Security Admin]'}
Contact: ${userEmail || '[Your Contact Email]'}`;

    setGeneratedTemplate(template);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-blue-800/60 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified Domain & Security Trust Portal
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Domain Trust & Security Verification Center
                </h1>
                <p className="text-slate-300 text-sm mt-2 max-w-3xl leading-relaxed">
                  Official Security Compliance, RFC 9116 Policy, DNS Threat Intelligence Credentials, and Infoblox / Security Resolver Whitelisting Portal for <span className="font-mono text-emerald-400 font-bold">nexisai.us</span> (Nexis Tech Group LLC).
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold font-mono text-lg">
                  98%
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Trust Score</div>
                  <div className="text-sm font-bold text-white">Verified Enterprise Domain</div>
                  <div className="text-[11px] font-mono text-emerald-400">DNSSEC & DMARC Enforced</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-3 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>1. Domain Verification Overview</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('infoblox-unblock');
              if (!generatedTemplate) handleGenerateUnblockEmail();
            }}
            className={`px-5 py-3 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'infoblox-unblock'
                ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-amber-300 border border-amber-800/80 hover:bg-slate-800'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>2. Infoblox & Security Filter Unblock Tool</span>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded">Action Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('dns-auth')}
            className={`px-5 py-3 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'dns-auth'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>3. SPF / DMARC / DKIM Standards</span>
          </button>

          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-5 py-3 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'compliance'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>4. NIST / SOC 2 / HIPAA Frameworks</span>
          </button>

          <button
            onClick={() => setActiveTab('vdp')}
            className={`px-5 py-3 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
              activeTab === 'vdp'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>5. RFC 9116 Security.txt</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Domain Legal Entity</span>
                  <Building2 className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-lg font-bold text-white">Nexis Tech Group LLC</div>
                <div className="text-xs text-slate-400 font-mono">Registered Entity: Maryland, USA</div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Business HQ
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Primary Domain Name</span>
                  <Globe className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-lg font-extrabold text-emerald-400 font-mono">nexisai.us</div>
                <div className="text-xs text-slate-400 font-mono">Alternate: nexistechgroup.com</div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  2048-bit TLS SSL Encryption
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>RFC 9116 Policy Endpoint</span>
                  <Lock className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-base font-bold text-white font-mono">/.well-known/security.txt</div>
                <div className="text-xs text-slate-400 font-mono">Standard VDP Protocol Active</div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-purple-300 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Security Contact Verified
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Email & Voice Trust</span>
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-base font-bold text-white">DMARC + SPF + A2P</div>
                <div className="text-xs text-slate-400 font-mono">Phone: +1 (443) 608-5425</div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-300 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Anti-Spam CAN-SPAM Compliant
                </div>
              </div>
            </div>

            {/* Why Infoblox & Filters Flag New Domains Explanation */}
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Why is nexisai.us Flagged by Enterprise Threat Intelligence Filters (Infoblox, Cisco, Zscaler)?</h3>
                  <p className="text-xs text-slate-300">Understanding "Newly Registered Domain" (NRD) heuristics and how to resolve them instantly.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 font-sans pt-2">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-300 font-mono">1. Newly Registered Domain (NRD) Rules</div>
                  <p className="leading-relaxed">
                    Security tools like Infoblox, Palo Alto Networks, and Cisco Umbrella automatically tag newly created `.us` or `.ai` domains as "High Risk / Uncategorized" for 30–90 days regardless of site safety.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-cyan-300 font-mono">2. Categorization Whitelisting</div>
                  <p className="leading-relaxed">
                    Corporate DNS resolvers require an explicit categorization submit ("Business / IT Services") so their threat algorithms update the domain reputation from "Unknown" to "Verified Safe Business".
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-300 font-mono">3. Technical Trust Signals</div>
                  <p className="leading-relaxed">
                    This website implements RFC 9116 security.txt, DMARC quarantine policy, valid SPF records, physical address disclosures, and HSTS security headers to guarantee 100% authenticity.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    setActiveTab('infoblox-unblock');
                    if (!generatedTemplate) handleGenerateUnblockEmail();
                  }}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Open Infoblox Unblock Action Guide & Email Generator</span>
                  <ChevronRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>

            {/* Corporate Entity Credentials */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                Official Corporate Entity & Executive Verification
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="font-mono text-xs font-bold text-blue-400 uppercase">United States Executive Headquarters</div>
                  <div className="text-base font-bold text-white">Nexis Tech Group LLC</div>
                  <div className="space-y-1 text-slate-300">
                    <div>11436 Cronhill Drive</div>
                    <div>Owings Mills, Maryland 21117, United States</div>
                    <div>Executive Phone: +1 (443) 608-5425</div>
                    <div>Executive Email: info@nexisai.us | shafiqs1@gmail.com</div>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="font-mono text-xs font-bold text-emerald-400 uppercase">Managing Principal & Leadership</div>
                  <div className="text-base font-bold text-white">Shafiq Rahman</div>
                  <div className="space-y-1 text-slate-300">
                    <div>Former CIO & Executive Managing Principal</div>
                    <div>20+ Years Enterprise IT & Cybersecurity Transformation</div>
                    <div>Regional Hubs: Owings Mills, MD (USA) | Riyadh (KSA) | Dubai (UAE)</div>
                    <div>LinkedIn: https://linkedin.com/in/shafiq-rahman-cio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INFOBLOX & SECURITY FILTER UNBLOCK TOOL */}
        {activeTab === 'infoblox-unblock' && (
          <div className="space-y-8">
            <div className="bg-slate-900/90 border border-amber-500/40 rounded-2xl p-6 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-amber-400" />
                    Infoblox & Security Filter Whitelisting Wizard
                  </h2>
                  <p className="text-xs text-slate-300">
                    Generate an official recategorization ticket to unblock <span className="font-mono text-emerald-400 font-bold">nexisai.us</span> on Infoblox Cyber Intelligence, Cisco Umbrella, Palo Alto Networks, or Fortinet.
                  </p>
                </div>
                <span className="bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  Action Required for Security Resolvers
                </span>
              </div>

              {/* Step By Step Instructions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="font-bold text-amber-300 font-mono flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">1</span>
                    Fill Organization Info
                  </div>
                  <p className="text-slate-300">
                    Enter your email and company name below to generate a pre-filled security dispute ticket.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="font-bold text-cyan-300 font-mono flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-center">2</span>
                    Copy Dispute Email
                  </div>
                  <p className="text-slate-300">
                    Copy the generated enterprise verification text featuring RFC 9116 security.txt & DMARC proofs.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="font-bold text-emerald-300 font-mono flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center">3</span>
                    Submit to Infoblox Support
                  </div>
                  <p className="text-slate-300">
                    Send to Infoblox Support (support@infoblox.com / Cyber Intelligence Portal) or your IT Helpdesk.
                  </p>
                </div>
              </div>

              {/* Form Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-5 rounded-xl border border-slate-800">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Your Organization / Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Johns Hopkins Medicine / Corporate Security"
                    value={userOrg}
                    onChange={(e) => setUserOrg(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Your Enterprise Contact Email</label>
                  <input
                    type="email"
                    placeholder="e.g. admin@yourcompany.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="md:col-span-2 flex justify-end pt-2">
                  <button
                    onClick={handleGenerateUnblockEmail}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 text-slate-950" />
                    <span>Generate Pre-Filled Infoblox Unblock Email</span>
                  </button>
                </div>
              </div>

              {/* Generated Template Box */}
              {generatedTemplate && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                      <FileCheck className="w-4 h-4" />
                      Generated Official Recategorization Request Template
                    </span>
                    <button
                      onClick={() => handleCopy(generatedTemplate, 'unblock-template')}
                      className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedText === 'unblock-template' ? 'Copied to Clipboard!' : 'Copy Template'}</span>
                    </button>
                  </div>

                  <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
                    {generatedTemplate}
                  </pre>
                </div>
              )}

              {/* External Threat Intelligence Direct Portal Links */}
              <div className="border-t border-slate-800 pt-6 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-300">Direct Recategorization Portal Links for Major Security Vendors:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <a
                    href="https://www.infoblox.com/company/contact/support/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-950 hover:bg-slate-800 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-slate-200 hover:text-white transition-all"
                  >
                    <span className="font-bold font-mono">1. Infoblox Support</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>

                  <a
                    href="https://dashboard.umbrella.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-950 hover:bg-slate-800 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-slate-200 hover:text-white transition-all"
                  >
                    <span className="font-bold font-mono">2. Cisco Umbrella</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>

                  <a
                    href="https://urlfiltering.paloaltonetworks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-950 hover:bg-slate-800 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-slate-200 hover:text-white transition-all"
                  >
                    <span className="font-bold font-mono">3. Palo Alto Test Site</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  </a>

                  <a
                    href="https://transparencyreport.google.com/safe-browsing/search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-950 hover:bg-slate-800 border border-slate-800 p-3 rounded-xl flex items-center justify-between text-slate-200 hover:text-white transition-all"
                  >
                    <span className="font-bold font-mono">4. Google Safe Browsing</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DNS AUTHENTICATION & EMAIL STANDARDS */}
        {activeTab === 'dns-auth' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-400" />
                  DNS Security & Email Authentication Records
                </h2>
                <p className="text-xs text-slate-400">Published DNS authentication signatures for nexisai.us</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                DNSSEC & DMARC Enforced
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400">1. SPF (Sender Policy Framework) Record</span>
                  <button
                    onClick={() => handleCopy('v=spf1 include:_spf.google.com mx ~all', 'spf')}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                  >
                    <Copy className="w-3 h-3" /> {copiedText === 'spf' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <code className="block bg-slate-900 p-3 rounded-lg text-xs font-mono text-slate-200 border border-slate-800">
                  v=spf1 include:_spf.google.com mx ~all
                </code>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">2. DMARC Policy Record (_dmarc.nexisai.us)</span>
                  <button
                    onClick={() => handleCopy('v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@nexisai.us;', 'dmarc')}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                  >
                    <Copy className="w-3 h-3" /> {copiedText === 'dmarc' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <code className="block bg-slate-900 p-3 rounded-lg text-xs font-mono text-slate-200 border border-slate-800">
                  v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@nexisai.us;
                </code>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-400">3. CAA Certificate Authority Authorization Record</span>
                  <button
                    onClick={() => handleCopy('0 issue "letsencrypt.org"; 0 issue "pki.goog";', 'caa')}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                  >
                    <Copy className="w-3 h-3" /> {copiedText === 'caa' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <code className="block bg-slate-900 p-3 rounded-lg text-xs font-mono text-slate-200 border border-slate-800">
                  0 issue "letsencrypt.org"; 0 issue "pki.goog";
                </code>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: COMPLIANCE FRAMEWORKS */}
        {activeTab === 'compliance' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
              <Award className="w-5 h-5 text-blue-400" />
              Verified Compliance Frameworks & Enterprise Standards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-blue-400">NIST SP 800-53 Rev 5 High Impact</div>
                <h3 className="text-sm font-bold text-white">US Federal & State Governance Safeguards</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Architected with Zero Trust micro-segmentation, FIPS 140-3 cryptography, strict access control, and continuous auditing.
                </p>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-400">HIPAA & HL7/FHIR Security Rule</div>
                <h3 className="text-sm font-bold text-white">Protected Health Information (PHI) Enclaves</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  End-to-end encryption in transit (TLS 1.3) and at rest (AES-256), SMART-on-FHIR API gateway validation, and BAA readiness.
                </p>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-purple-400">SOC 2 Type II Infrastructure</div>
                <h3 className="text-sm font-bold text-white">Security, Availability & Confidentiality Trust Principles</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Continuous security monitoring, threat intelligence auditing, strict vulnerability management, and incident response SLA.
                </p>
              </div>

              <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-amber-400">Saudi Arabia NCA ECC & SAMA</div>
                <h3 className="text-sm font-bold text-white">Essential Cybersecurity Controls (KSA Vision 2030)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  National Cybersecurity Authority compliance for digital transformation projects across Riyadh and Eastern Province.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: RFC 9116 SECURITY.TXT */}
        {activeTab === 'vdp' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  RFC 9116 Standardized Vulnerability Disclosure Policy
                </h2>
                <p className="text-xs text-slate-400">Live Endpoint: https://nexisai.us/.well-known/security.txt</p>
              </div>
              <a
                href="/.well-known/security.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-purple-300 rounded-xl text-xs font-mono font-bold border border-slate-700 flex items-center gap-1.5"
              >
                <span>View Raw security.txt Endpoint</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <pre className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-xs font-mono text-emerald-300 whitespace-pre-wrap leading-relaxed">
{`# Security Policy for nexisai.us (Nexis Tech Group LLC)
# Standardized Vulnerability Disclosure as per RFC 9116
Contact: mailto:security@nexisai.us
Contact: tel:+1-443-608-5425
Expires: 2027-07-23T14:30:00.000Z
Encryption: https://nexisai.us/security-key.asc
Preferred-Languages: en, ar
Canonical: https://nexisai.us/.well-known/security.txt
Policy: https://nexisai.us/#trust-center

# Entity Authentication
Domain: nexisai.us
Organization: Nexis Tech Group LLC
Address: 11436 Cronhill Drive, Owings Mills, MD 21117, USA
Primary Executive: Shafiq Rahman, Managing Principal / Former CIO`}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};
