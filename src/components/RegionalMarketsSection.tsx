import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  Flag, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Lock, 
  Layers, 
  Star,
  Zap,
  ExternalLink
} from 'lucide-react';
import { Region } from '../types';
import { regionalOffices, mainUSAPhone, mainUSASMS, primaryContactEmail } from '../data/companyData';

interface RegionalMarketsSectionProps {
  currentRegion: Region;
  onSelectRegion: (region: Region) => void;
  onOpenConsultation: (service?: string, notes?: string) => void;
}

export const RegionalMarketsSection: React.FC<RegionalMarketsSectionProps> = ({
  currentRegion,
  onSelectRegion,
  onOpenConsultation,
}) => {
  const [activeMarketTab, setActiveMarketTab] = useState<Region>(currentRegion || 'US');

  const marketsData = {
    US: {
      title: 'Nexis AI — United States Market (Primary HQ)',
      badge: 'Flagship Headquarters & Primary Market',
      location: 'Owings Mills, MD & Washington D.C. Corridor',
      address: '11436 Cronhill Drive, Owings Mills, MD 21117',
      phone: '(443) 608-5425',
      smsText: '(443) 608-5425',
      email: 'info@nexisai.us',
      overview:
        'As our global headquarters, Nexis AI drives enterprise AI Agent development, HIPAA/FHIR healthcare interoperability, DoD CMMC compliance, and NIST 800-53 Zero Trust security for leading US commercial enterprises, healthcare systems, higher education research institutions, and federal contractors.',
      pillars: [
        {
          title: 'US Federal & DoD Compliance (NIST 800-53 / CMMC)',
          desc: 'Zero Trust architecture and confidential AI enclaves aligned with NIST SP 800-53 Rev 5, FedRAMP High, and DoD CMMC 2.0 readiness.',
        },
        {
          title: 'Healthcare Interoperability (EHR / Epic / FHIR)',
          desc: 'HIPAA-compliant HL7 FHIR pipelines, automated clinical charting AI assistants, and Epic/Cerner integration.',
        },
        {
          title: 'Higher Education HPC & Research Infrastructure',
          desc: 'GPU cluster orchestration (NVIDIA H100/A100), FERPA data shielding, and high-speed campus networking.',
        },
        {
          title: 'Enterprise Autonomous AI Agents',
          desc: 'Custom RAG architectures and secure generative AI workflows eliminating hallucination risks with enterprise data controls.',
        },
      ],
      compliance: ['SOC 2 Type II Certified', 'NIST 800-53 Rev 5', 'HIPAA Privacy Shield', 'FERPA Compliant', 'DoD CMMC Ready'],
      stats: [
        { label: 'US Client Satisfaction', value: '99.4%' },
        { label: 'EHR / FHIR Records Processed', value: '25M+' },
        { label: 'Response Time Guarantee', value: '<15 Mins' },
      ],
      caseStudy: {
        title: 'Mid-Atlantic Healthcare System AI Assistant Deployment',
        result: 'Reduced clinical documentation overhead by 74% while maintaining 100% HIPAA compliance across 12 hospitals.',
      },
    },
    KSA: {
      title: 'Nexis AI — Kingdom of Saudi Arabia (Riyadh Hub)',
      badge: 'Saudi Vision 2030 Strategic Technology Partner',
      location: 'Riyadh Business District, Saudi Arabia',
      address: 'King Fahd Road, Al Olaya District, Riyadh 12214',
      phone: '+966 11 800 9988',
      smsText: '(443) 608-5425',
      email: 'info@nexisai.us',
      overview:
        'Directly aligned with Saudi Vision 2030, Nexis AI empowers Giga-projects, ministry departments, and healthcare networks in Saudi Arabia with sovereign Arabic LLMs, NCA Essential Cybersecurity Controls (ECC), NDMO data residency, and smart infrastructure.',
      pillars: [
        {
          title: 'Saudi Vision 2030 AI Modernization',
          desc: 'Localized GenAI models, Arabic natural language processing, and SDAIA AI ethics framework implementations.',
        },
        {
          title: 'NCA ECC & CCC Cybersecurity Standards',
          desc: '100% compliance mapping for Saudi National Cybersecurity Authority Essential & Cloud Controls.',
        },
        {
          title: 'Healthcare Interoperability (MoH / Seha)',
          desc: 'Connecting medical facilities to national health exchanges with sovereign data residency.',
        },
        {
          title: 'Sovereign Cloud & Data Residency',
          desc: 'In-country hosting, private GPU clusters, and NDMO data governance compliance.',
        },
      ],
      compliance: ['NCA ECC Compliant', 'NCA CCC Compliant', 'NDMO Data Governance', 'SDAIA AI Frameworks', 'MoH Approved Vendor'],
      stats: [
        { label: 'KSA NCA ECC Compliance', value: '100%' },
        { label: 'Arabic NLP Accuracy', value: '98.9%' },
        { label: 'Local Sovereign Nodes', value: 'Tier 4' },
      ],
      caseStudy: {
        title: 'Ministry Health Network Sovereign Data Migration',
        result: 'Successfully onboarded 45 medical facilities onto a unified FHIR-compatible sovereign cloud in Riyadh.',
      },
    },
    UAE: {
      title: 'Nexis AI — United Arab Emirates (Dubai & Abu Dhabi)',
      badge: 'UAE National AI Strategy 2031 Innovator',
      location: 'DIFC Gate Precinct & Abu Dhabi Global Market',
      address: 'DIFC Gate Precinct Building 4, Level 7, Dubai',
      phone: '+971 4 300 7766',
      smsText: '(443) 608-5425',
      email: 'info@nexisai.us',
      overview:
        'Engineered for the UAE Strategy for Artificial Intelligence 2031, Nexis AI delivers autonomous financial AI agents, TDRA-certified cloud security, and NABIDH/Malaffi healthcare interoperability across Dubai and Abu Dhabi.',
      pillars: [
        {
          title: 'Autonomous Financial & Trade AI Agents',
          desc: 'DIFC and ADGM compliant AI agents for financial auditing, automated compliance, and real-time risk intelligence.',
        },
        {
          title: 'TDRA Cloud & Cyber Resilience',
          desc: 'Telecommunications & Digital Government Regulatory Authority (TDRA) cloud security standards and Zero Trust defense.',
        },
        {
          title: 'NABIDH & Malaffi Health Exchange Integration',
          desc: 'Seamless data integration with Dubai NABIDH and Abu Dhabi Malaffi healthcare platforms.',
        },
        {
          title: 'Smart City & Autonomous Workflows',
          desc: 'API-driven automated governance for enterprise logistics and smart infrastructure.',
        },
      ],
      compliance: ['UAE AI Strategy 2031 Aligned', 'TDRA Certified Cloud', 'NABIDH Interoperable', 'Malaffi Certified', 'ISO 27001'],
      stats: [
        { label: 'UAE Enterprise AI Adoption', value: '85% ROI' },
        { label: 'TDRA Audit Score', value: '100%' },
        { label: 'Financial AI Agents Active', value: '120+' },
      ],
      caseStudy: {
        title: 'Dubai Enterprise Financial Group AI Audit Automation',
        result: 'Automated 92% of regulatory audit reporting workflows with zero compliance exceptions.',
      },
    },
  };

  const currentMarket = marketsData[activeMarketTab];

  return (
    <section id="regional-markets" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-4 h-4 text-blue-400" />
            Regional Market Architecture & Local Presence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored AI & Security Solutions for Strategic Global Markets
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            While <strong className="text-white">Nexis AI</strong> operates its flagship headquarters in <strong className="text-blue-400">Owings Mills, Maryland (US)</strong>, we provide localized compliance, sovereign infrastructure, and dedicated regional support across key international hubs.
          </p>
        </div>

        {/* Market Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => {
              setActiveMarketTab('US');
              onSelectRegion('US');
            }}
            className={`px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-3 cursor-pointer shadow-lg ${
              activeMarketTab === 'US'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white ring-2 ring-blue-400 shadow-blue-900/40'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            <Flag className="w-5 h-5 text-blue-400" />
            <span>United States (Primary HQ)</span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-700">
              Primary
            </span>
          </button>

          <button
            onClick={() => {
              setActiveMarketTab('KSA');
              onSelectRegion('KSA');
            }}
            className={`px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-3 cursor-pointer shadow-lg ${
              activeMarketTab === 'KSA'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white ring-2 ring-emerald-400 shadow-emerald-900/40'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            <Building2 className="w-5 h-5 text-emerald-400" />
            <span>Saudi Arabia (Riyadh Hub)</span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
              Vision 2030
            </span>
          </button>

          <button
            onClick={() => {
              setActiveMarketTab('UAE');
              onSelectRegion('UAE');
            }}
            className={`px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-3 cursor-pointer shadow-lg ${
              activeMarketTab === 'UAE'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white ring-2 ring-purple-400 shadow-purple-900/40'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            <Globe className="w-5 h-5 text-purple-400" />
            <span>UAE (Dubai & Abu Dhabi)</span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-700">
              AI Strategy 2031
            </span>
          </button>
        </div>

        {/* Selected Market Detail View */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10">
          {/* Top Info Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-blue-950 text-blue-400 border border-blue-800">
                  {currentMarket.badge}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {currentMarket.location}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{currentMarket.title}</h3>
              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">{currentMarket.overview}</p>
            </div>

            {/* Direct Contact Action Box */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 shrink-0 lg:w-80 shadow-inner">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                Direct Market Hotline
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Default Phone:</span>
                  <a href={`tel:${mainUSAPhone.replace(/[^0-9+]/g, '')}`} className="font-mono text-white font-semibold hover:text-blue-400 transition-colors">
                    {mainUSAPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Direct SMS/Text:</span>
                  <a href={`sms:${mainUSASMS}?body=Hello%20Nexis%20AI%20Team%2C%20I%20would%20like%20to%20discuss%20an%20AI%20and%20Cybersecurity%20project.`} className="font-mono text-emerald-400 font-semibold hover:underline">
                    {mainUSASMS}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Email:</span>
                  <a href={`mailto:${primaryContactEmail}`} className="font-mono text-blue-300 font-semibold hover:underline">
                    {primaryContactEmail}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onOpenConsultation(undefined, `Market inquiry for ${currentMarket.title}`)}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Book {activeMarketTab} Consultation</span>
                </button>

                <a
                  href={`sms:${mainUSASMS}?body=Hello%20Nexis%20AI%20Team%2C%20I%20am%20requesting%20a%20callback%20regarding%20${activeMarketTab}%20market%20services.`}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-800 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Text Message ({mainUSASMS})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Core Strategic Pillars Grid */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              Strategic Practice Capabilities — {activeMarketTab} Market
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentMarket.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2 hover:border-blue-900 transition-colors">
                  <div className="font-bold text-sm text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Regulatory Badges */}
          <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                {activeMarketTab} Regulatory & Compliance Frameworks
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentMarket.compliance.map((c, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2 shadow-sm"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Market Impact Case Study & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
            {/* Stats */}
            <div className="lg:col-span-1 bg-gradient-to-br from-blue-950/50 via-slate-950 to-slate-950 p-6 rounded-2xl border border-blue-900/60 space-y-4 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Proven Market Metrics</div>
                <div className="text-lg font-bold text-white">{activeMarketTab} Performance Highlights</div>
              </div>
              <div className="space-y-3">
                {currentMarket.stats.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                    <span className="text-slate-400">{s.label}</span>
                    <span className="font-mono text-base font-extrabold text-blue-300">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="lg:col-span-2 bg-gradient-to-r from-purple-950/30 via-slate-950 to-slate-950 p-6 rounded-2xl border border-purple-900/50 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  Featured {activeMarketTab} Market Case Study
                </div>
                <h5 className="text-lg font-bold text-white">{currentMarket.caseStudy.title}</h5>
                <p className="text-xs text-slate-300 leading-relaxed">{currentMarket.caseStudy.result}</p>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">Verified Client Success Outcome</span>
                <button
                  onClick={() => onOpenConsultation('ai-transformation', `Request detailed case study for ${currentMarket.title}`)}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Full Case Study PDF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
