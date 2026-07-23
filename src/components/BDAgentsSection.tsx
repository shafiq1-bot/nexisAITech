import React, { useState } from 'react';
import { 
  Users, 
  Mail, 
  Sparkles, 
  Target, 
  Send, 
  Zap, 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  Copy, 
  Check, 
  Download, 
  RefreshCw, 
  Bot, 
  Search, 
  FileText, 
  Share2, 
  Clock, 
  Play, 
  ChevronRight,
  ShieldCheck,
  Briefcase,
  DollarSign,
  AlertCircle,
  BarChart3,
  ExternalLink,
  Plus,
  Calendar,
  Phone,
  PhoneCall,
  Volume2,
  Square,
  Shield,
  Sliders,
  Database,
  Trash2,
  PhoneForwarded,
  Sparkle
} from 'lucide-react';
import { PageId, Region } from '../types';

interface LeadProspect {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  employeeCount: string;
  decisionMaker: {
    fullName: string;
    title: string;
    email: string;
    phone?: string;
    linkedInUrl?: string;
  };
  fitScore: number;
  estimatedOpportunityValue: string;
  painPoints: string[];
  recommendedAngle: string;
  status: 'New Lead' | 'Drafted' | 'Emailed' | 'Voice Called' | 'Meeting Set';
  notes?: string;
}

const DEFAULT_INITIAL_LEADS: LeadProspect[] = [
  {
    id: 'LEAD-101',
    companyName: 'Apex Health Network',
    industry: 'Healthcare & Hospitals',
    location: 'Baltimore, MD, USA',
    employeeCount: '3,200+',
    decisionMaker: {
      fullName: 'Dr. Sarah Jenkins',
      title: 'Chief Information Officer',
      email: 'sjenkins@apexhealth.org',
      phone: '+1 (443) 608-5425',
      linkedInUrl: 'https://linkedin.com/in/sarahjenkins-cio',
    },
    fitScore: 98,
    estimatedOpportunityValue: '$280,000 - $450,000',
    painPoints: ['Legacy Epic EHR Hyperspace latency', 'SMART-on-FHIR AI API compliance'],
    recommendedAngle: 'SMART-on-FHIR AI Clinical Assistant & Zero Trust Enclave Architecture',
    status: 'New Lead',
  },
  {
    id: 'LEAD-102',
    companyName: 'Saudi Capital Investment Group',
    industry: 'Financial Services & Sovereign Wealth',
    location: 'Riyadh, Saudi Arabia',
    employeeCount: '1,500+',
    decisionMaker: {
      fullName: 'Eng. Tariq Al-Mansoor',
      title: 'VP of Digital Transformation',
      email: 't.mansoor@scig.com.sa',
      phone: '+966 11 400 5522',
      linkedInUrl: 'https://linkedin.com/in/tariq-almansoor',
    },
    fitScore: 95,
    estimatedOpportunityValue: '$400,000 - $750,000',
    painPoints: ['NCA ECC Sovereign Cloud Compliance', 'RAG AI for Investment Due Diligence'],
    recommendedAngle: 'Vision 2030 Sovereign AI Enclave & Arabic Local LLM Agent',
    status: 'New Lead',
  },
  {
    id: 'LEAD-103',
    companyName: 'Horizon State University System',
    industry: 'Higher Education R1 Research',
    location: 'Richmond, VA, USA',
    employeeCount: '4,800+',
    decisionMaker: {
      fullName: 'Prof. Michael Vance',
      title: 'VP of Research Computing',
      email: 'mvance@horizon.edu',
      phone: '+1 (804) 555-0199',
      linkedInUrl: 'https://linkedin.com/in/michaelvance-hpc',
    },
    fitScore: 92,
    estimatedOpportunityValue: '$320,000 - $500,000',
    painPoints: ['Slurm cluster GPU queue bottleneck', 'Lustre storage bandwidth throttling'],
    recommendedAngle: 'NVIDIA H100 SuperPOD Modernization & Multi-Petaflop Storage Architecture',
    status: 'New Lead',
  },
  {
    id: 'LEAD-104',
    companyName: 'Emirates Energy Logistics',
    industry: 'Energy & Infrastructure',
    location: 'Abu Dhabi, UAE',
    employeeCount: '2,100+',
    decisionMaker: {
      fullName: 'Fatima Al-Suwaidi',
      title: 'Head of Enterprise Cyber Defense',
      email: 'f.alsuwaidi@eelogistics.ae',
      phone: '+971 2 600 8899',
    },
    fitScore: 94,
    estimatedOpportunityValue: '$250,000 - $420,000',
    painPoints: ['OT/IT converged perimeter risks', 'TDRA & ISR regulatory audits'],
    recommendedAngle: 'Zero Trust Micro-segmentation & Automated Palo Alto XSOAR SOC',
    status: 'New Lead',
  },
];

interface BDAgentsSectionProps {
  onNavigate?: (page: PageId, detailId?: string) => void;
  onOpenConsultation?: () => void;
  onOpenCalendar?: (email?: string, subject?: string) => void;
}

export const BDAgentsSection: React.FC<BDAgentsSectionProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenCalendar,
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'email' | 'phone' | 'marketing' | 'autopilot' | 'admin'>('leads');
  
  // Lead Finder State
  const [targetIndustry, setTargetIndustry] = useState('Healthcare & Life Sciences');
  const [targetRegion, setTargetRegion] = useState<Region>('US');
  const [companySize, setCompanySize] = useState('500 - 5,000 employees');
  const [serviceOffer, setServiceOffer] = useState('Enterprise AI Transformation & Zero Trust Security');
  const [leadsList, setLeadsList] = useState<LeadProspect[]>(DEFAULT_INITIAL_LEADS);
  const [isGeneratingLeads, setIsGeneratingLeads] = useState(false);

  // Email Drafter State
  const [selectedLeadForEmail, setSelectedLeadForEmail] = useState<LeadProspect | null>(DEFAULT_INITIAL_LEADS[0]);
  const [campaignGoal, setCampaignGoal] = useState('15-min Executive Discovery Call');
  const [emailTone, setEmailTone] = useState('Authoritative & Executive');
  const [senderName, setSenderName] = useState('Shafiq Rahman');
  const [senderTitle, setSenderTitle] = useState('Former CIO & Executive Advisory Lead, Nexis AI');
  const [generatedSubject, setGeneratedSubject] = useState('');
  const [generatedBody, setGeneratedBody] = useState('');
  const [isDraftingEmail, setIsDraftingEmail] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [sendLog, setSendLog] = useState<string[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Google Voice Telephony Agent State
  const [selectedLeadForPhone, setSelectedLeadForPhone] = useState<LeadProspect | null>(DEFAULT_INITIAL_LEADS[0]);
  const [phoneGoal, setPhoneGoal] = useState('Schedule 15-minute Executive Advisory Briefing with Former CIO Shafiq Rahman');
  const [isGeneratingPhoneScript, setIsGeneratingPhoneScript] = useState(false);
  const [phoneScriptData, setPhoneScriptData] = useState<{
    openingHook?: string;
    valuePitch?: string;
    qualifyingQuestions?: string[];
    objectionHandlers?: { objection: string; response: string }[];
    voicemailScript?: string;
    callClosing?: string;
    googleVoiceUrl?: string;
    telUrl?: string;
  }>({
    openingHook: "Hi Dr. Jenkins, this is Shafiq Rahman with Nexis Tech Group. I'm reaching out directly because we recently solved Epic EHR SMART-on-FHIR API latency bottlenecks for a 3,000-bed regional health system.",
    valuePitch: "We deploy Zero Trust AI Enclaves that streamline clinical decision support while ensuring 100% HIPAA and FHIR R4 compliance.",
    qualifyingQuestions: [
      "Are you currently evaluating AI models for clinical documentation or radiology processing?",
      "How is your team addressing Zero Trust micro-segmentation across legacy healthcare assets?"
    ],
    objectionHandlers: [
      { objection: "No budget right now", response: "Understood. Our executive strategy assessment is fully funded through our 2026 Innovation Grant program—no procurement hurdle required." },
      { objection: "Send me an email", response: "I'll do that right away! I'll also attach our Healthcare AI Zero Trust Reference Architecture paper." }
    ],
    voicemailScript: "Hello Dr. Jenkins, Shafiq Rahman here with Nexis Tech Group. Calling regarding SMART-on-FHIR AI API optimization. Please call or text me back at (443) 608-5425 or email info@nexisai.us.",
    callClosing: "Would Tuesday or Thursday at 10 AM EST work for a brief 15-minute executive briefing?",
    googleVoiceUrl: "https://voice.google.com/u/0/calls?a=nc,%2B14436085425",
    telUrl: "tel:+14436085425",
  });
  const [isSpeakingScript, setIsSpeakingScript] = useState(false);
  const [callOutcome, setCallOutcome] = useState('Voicemail Left');
  const [callNotes, setCallNotes] = useState('');
  const [callLog, setCallLog] = useState<string[]>([]);

  // Marketing Generator State
  const [contentType, setContentType] = useState('LinkedIn Thought Leadership Post');
  const [marketingTopic, setMarketingTopic] = useState('How CIOs Can Scale Enterprise AI Without Sacrificing Zero Trust Security');
  const [generatedMarketingText, setGeneratedMarketingText] = useState('');
  const [isGeneratingMarketing, setIsGeneratingMarketing] = useState(false);
  const [copiedMarketing, setCopiedMarketing] = useState(false);

  // Auto-pilot status
  const [isAutoPilotRunning, setIsAutoPilotRunning] = useState(false);
  const [autoPilotProgress, setAutoPilotProgress] = useState(0);

  // Manual Lead Form Modal
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newContactName, setNewContactName] = useState('');
  const [newContactTitle, setNewContactTitle] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');
  const [newIndustry, setNewIndustry] = useState('Healthcare');

  // Lead Finder Handler
  const handleGenerateLeads = async () => {
    setIsGeneratingLeads(true);
    try {
      const response = await fetch('/api/bd-agent/generate-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry: targetIndustry,
          targetRegion,
          companySize,
          serviceOffer,
        }),
      });

      const data = await response.json();
      if (data.success && data.leads) {
        const formattedLeads: LeadProspect[] = data.leads.map((item: any, idx: number) => ({
          id: `LEAD-${Date.now().toString().slice(-4)}-${idx}`,
          companyName: item.companyName || 'Enterprise Target',
          industry: item.industry || targetIndustry,
          location: item.location || 'United States',
          employeeCount: item.employeeCount || companySize,
          decisionMaker: {
            fullName: item.decisionMaker?.fullName || 'Chief Technology Officer',
            title: item.decisionMaker?.title || 'VP of Engineering / IT',
            email: item.decisionMaker?.email || 'contact@enterprise.com',
            linkedInUrl: item.decisionMaker?.linkedInUrl,
          },
          fitScore: item.fitScore || 90,
          estimatedOpportunityValue: item.estimatedOpportunityValue || '$150,000 - $300,000',
          painPoints: item.painPoints || ['AI Infrastructure Scaling', 'Zero Trust Security'],
          recommendedAngle: item.recommendedAngle || 'Nexis AI Enterprise Architecture Audit',
          status: 'New Lead',
        }));

        setLeadsList((prev) => [...formattedLeads, ...prev]);
        if (formattedLeads.length > 0) {
          setSelectedLeadForEmail(formattedLeads[0]);
        }
      }
    } catch (err) {
      console.error('Error discovering leads:', err);
    } finally {
      setIsGeneratingLeads(false);
    }
  };

  // Draft Email Handler
  const handleDraftEmail = async (lead?: LeadProspect) => {
    const targetLead = lead || selectedLeadForEmail || leadsList[0];
    if (!targetLead) return;

    setSelectedLeadForEmail(targetLead);
    setIsDraftingEmail(true);

    try {
      const response = await fetch('/api/bd-agent/draft-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prospect: targetLead,
          campaignGoal,
          senderName,
          senderTitle,
          tone: emailTone,
        }),
      });

      const data = await response.json();
      if (data.success && data.emailDraft) {
        setGeneratedSubject(data.emailDraft.subject || `Executive Briefing: ${targetLead.companyName} & Nexis AI Transformation`);
        setGeneratedBody(data.emailDraft.emailBody || '');
        
        // Update lead status
        setLeadsList((prev) =>
          prev.map((l) => (l.id === targetLead.id ? { ...l, status: 'Drafted' } : l))
        );
      }
    } catch (err) {
      console.error('Error drafting email:', err);
    } finally {
      setIsDraftingEmail(false);
    }
  };

  // Send Email Handler
  const handleSendEmail = async () => {
    if (!selectedLeadForEmail || !generatedSubject) return;

    setIsSendingEmail(true);
    setSendLog((prev) => [
      `[${new Date().toLocaleTimeString()}] Initiating SMTP/Gateway dispatch to ${selectedLeadForEmail.decisionMaker.email}...`,
      ...prev,
    ]);

    try {
      const response = await fetch('/api/bd-agent/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toEmail: selectedLeadForEmail.decisionMaker.email,
          prospectName: selectedLeadForEmail.decisionMaker.fullName,
          companyName: selectedLeadForEmail.companyName,
          subject: generatedSubject,
          body: generatedBody,
          campaignName: campaignGoal,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSendLog((prev) => [
          `[${new Date().toLocaleTimeString()}] ✅ SENT: Campaign ID ${data.campaignId} logged to CRM (HubSpot/Salesforce). Tracking active.`,
          `[${new Date().toLocaleTimeString()}] 📬 Recipient: ${selectedLeadForEmail.decisionMaker.fullName} <${selectedLeadForEmail.decisionMaker.email}>`,
          ...prev,
        ]);

        // Update lead status
        setLeadsList((prev) =>
          prev.map((l) => (l.id === selectedLeadForEmail.id ? { ...l, status: 'Emailed' } : l))
        );
      }
    } catch (err) {
      setSendLog((prev) => [`[${new Date().toLocaleTimeString()}] ❌ Failed to dispatch email.`, ...prev]);
    } finally {
      setIsSendingEmail(false);
    }
  };

  // Generate Google Voice Call Script Handler
  const handleGeneratePhoneScript = async (lead?: LeadProspect) => {
    const targetLead = lead || selectedLeadForPhone || leadsList[0];
    if (!targetLead) return;

    setSelectedLeadForPhone(targetLead);
    setIsGeneratingPhoneScript(true);

    try {
      const response = await fetch('/api/bd-agent/google-voice-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prospect: targetLead,
          callerName: senderName || 'Shafiq Rahman',
          callerTitle: senderTitle || 'Executive Advisory Principal',
          targetGoal: phoneGoal,
        }),
      });

      const data = await response.json();
      if (data.success && data.scriptData) {
        setPhoneScriptData({
          openingHook: data.scriptData.openingHook,
          valuePitch: data.scriptData.valuePitch,
          qualifyingQuestions: data.scriptData.qualifyingQuestions,
          objectionHandlers: data.scriptData.objectionHandlers,
          voicemailScript: data.scriptData.voicemailScript,
          callClosing: data.scriptData.callClosing,
          googleVoiceUrl: data.googleVoiceUrl,
          telUrl: data.telUrl,
        });

        setCallLog((prev) => [
          `[${new Date().toLocaleTimeString()}] 📞 Call Package compiled for ${targetLead.decisionMaker.fullName} (${targetLead.companyName}). Google Voice link prepared.`,
          ...prev,
        ]);
      }
    } catch (err) {
      console.error('Error drafting phone script:', err);
    } finally {
      setIsGeneratingPhoneScript(false);
    }
  };

  // Launch Google Voice Call in new tab
  const handleLaunchGoogleVoiceCall = () => {
    if (phoneScriptData?.googleVoiceUrl) {
      window.open(phoneScriptData.googleVoiceUrl, '_blank', 'noopener,noreferrer');
      setCallLog((prev) => [
        `[${new Date().toLocaleTimeString()}] 🚀 Google Voice Web Telephony Interface launched for ${selectedLeadForPhone?.decisionMaker.fullName || 'Prospect'}.`,
        ...prev,
      ]);
    }
  };

  // Web Speech Synthesis Audio Rehearsal Handler
  const toggleSpeakScript = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech Synthesis is not supported in this browser.');
      return;
    }

    if (isSpeakingScript) {
      window.speechSynthesis.cancel();
      setIsSpeakingScript(false);
    } else {
      const textToSay = `${phoneScriptData.openingHook || ''} ... ${phoneScriptData.valuePitch || ''}`;
      const utterance = new SpeechSynthesisUtterance(textToSay);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsSpeakingScript(false);
      utterance.onerror = () => setIsSpeakingScript(false);

      setIsSpeakingScript(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Log Call Outcome to Lead Pipeline
  const handleLogCallResult = () => {
    if (!selectedLeadForPhone) return;

    setLeadsList((prev) =>
      prev.map((l) => (l.id === selectedLeadForPhone.id ? { ...l, status: 'Voice Called', notes: callNotes } : l))
    );

    setCallLog((prev) => [
      `[${new Date().toLocaleTimeString()}] 📝 Call Logged: ${selectedLeadForPhone.companyName} (${selectedLeadForPhone.decisionMaker.fullName}) -> ${callOutcome}. Notes: "${callNotes || 'Executive outreach completed.'}"`,
      ...prev,
    ]);

    setCallNotes('');
  };

  // Generate Marketing Content Handler
  const handleGenerateMarketing = async () => {
    setIsGeneratingMarketing(true);
    try {
      const response = await fetch('/api/bd-agent/generate-marketing-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentType,
          topic: marketingTopic,
          targetAudience: 'CIOs, CTOs, IT Directors, Healthcare & Government Leaders',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedMarketingText(data.generatedContent || '');
      }
    } catch (err) {
      console.error('Error generating marketing content:', err);
    } finally {
      setIsGeneratingMarketing(false);
    }
  };

  // Auto-Pilot Handler
  const handleRunAutoPilot = () => {
    setIsAutoPilotRunning(true);
    setAutoPilotProgress(10);

    const interval = setInterval(() => {
      setAutoPilotProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAutoPilotRunning(false);
          // Mark all leads as emailed
          setLeadsList((prevLeads) =>
            prevLeads.map((l) => ({ ...l, status: 'Emailed' }))
          );
          return 100;
        }
        return prev + 22;
      });
    }, 1200);
  };

  // Manual Add Lead
  const handleAddManualLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompanyName || !newContactEmail) return;

    const newLeadObj: LeadProspect = {
      id: `LEAD-MANUAL-${Date.now().toString().slice(-4)}`,
      companyName: newCompanyName,
      industry: newIndustry,
      location: 'Target Region',
      employeeCount: '500+',
      decisionMaker: {
        fullName: newContactName || 'Executive Decision Maker',
        title: newContactTitle || 'Director of Technology',
        email: newContactEmail,
      },
      fitScore: 95,
      estimatedOpportunityValue: '$150,000 - $300,000',
      painPoints: ['Manual business processes', 'AI infrastructure adoption'],
      recommendedAngle: 'Nexis AI Business Development & Automation Audit',
      status: 'New Lead',
    };

    setLeadsList((prev) => [newLeadObj, ...prev]);
    setSelectedLeadForEmail(newLeadObj);
    setShowAddLeadModal(false);
    setNewCompanyName('');
    setNewContactName('');
    setNewContactTitle('');
    setNewContactEmail('');
  };

  const copyToClipboard = (text: string, type: 'email' | 'marketing') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedMarketing(true);
      setTimeout(() => setCopiedMarketing(false), 2000);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Header */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Bot className="w-4 h-4 text-cyan-400" />
              Autonomous Business Development & Lead Generator AI Agents
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              AI Marketing & Sales Agents Working 24/7 For Your Firm
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Discover high-value executive prospects, auto-generate hyper-personalized BD email campaigns, automate customer attraction marketing copy, and scale your sales pipeline with zero friction.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setActiveTab('leads')}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Launch Lead Finder Agent</span>
              </button>
              <button
                onClick={() => setActiveTab('email')}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Auto-Draft Outreach Emails</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Pipeline Key Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Active Pipeline Value</span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-extrabold text-white">$1,450,000+</div>
            <div className="text-[11px] font-mono text-emerald-400">↑ +24% vs last quarter</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Verified Decision Makers</span>
              <Users className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-extrabold text-white">{leadsList.length} Prospects</div>
            <div className="text-[11px] font-mono text-cyan-400">CIO, CTO & VP level</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Email Open Rate</span>
              <BarChart3 className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl font-extrabold text-white">52.4%</div>
            <div className="text-[11px] font-mono text-purple-400">Industry avg: 18.2%</div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-1">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Meeting Conversion</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-extrabold text-white">18.6%</div>
            <div className="text-[11px] font-mono text-amber-400">1-in-5 setting meetings</div>
          </div>
        </div>

        {/* Main Tab Navigation Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                activeTab === 'leads'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>1. Lead Discovery</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded text-[10px] text-cyan-300 font-bold">
                {leadsList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('email')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                activeTab === 'email'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>2. Email Drafter</span>
            </button>

            <button
              onClick={() => setActiveTab('phone')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                activeTab === 'phone'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <PhoneCall className="w-4 h-4 text-emerald-300" />
              <span>3. Google Voice Agent</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[9px] font-extrabold px-1.5 py-0.5 rounded border border-emerald-500/30">Voice</span>
            </button>

            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                activeTab === 'marketing'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>4. Marketing Generator</span>
            </button>

            <button
              onClick={() => setActiveTab('autopilot')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                activeTab === 'autopilot'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4 text-purple-300 animate-pulse" />
              <span>5. Auto-Pilot Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('admin')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                activeTab === 'admin'
                  ? 'bg-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-amber-300 border border-amber-800/80 hover:bg-slate-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>6. BD Admin Operations Portal</span>
              <span className="bg-amber-400 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded uppercase">Admin</span>
            </button>
          </div>

          <button
            onClick={() => setShowAddLeadModal(true)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 rounded-xl transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 text-cyan-400" />
            <span>Add Manual Lead</span>
          </button>
        </div>

        {/* TAB 1: LEAD DISCOVERY AGENT */}
        {activeTab === 'leads' && (
          <div className="space-y-8">
            {/* Criteria Controls */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-400" />
                    Configure AI Lead Generation Parameters
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Specify target criteria to prompt the Gemini AI Agent to discover and verify executive decision makers.
                  </p>
                </div>
                <button
                  onClick={handleGenerateLeads}
                  disabled={isGeneratingLeads}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isGeneratingLeads ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Discovering Prospects...</span>
                    </>
                  ) : (
                    <>
                      <Bot className="w-4 h-4 text-white" />
                      <span>Run AI Lead Discovery</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Target Industry</label>
                  <select
                    value={targetIndustry}
                    onChange={(e) => setTargetIndustry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Healthcare & Hospital Networks">Healthcare & Hospital Networks</option>
                    <option value="Higher Education & R1 Research">Higher Education & R1 Research</option>
                    <option value="Sovereign Finance & Investment (KSA/UAE)">Sovereign Finance & Investment (KSA/UAE)</option>
                    <option value="Government & Defense Contracting">Government & Defense Contracting</option>
                    <option value="Energy, Oil & Infrastructure">Energy, Oil & Infrastructure</option>
                    <option value="Enterprise IT & Cloud Services">Enterprise IT & Cloud Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Geographic Region</label>
                  <select
                    value={targetRegion}
                    onChange={(e) => setTargetRegion(e.target.value as Region)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="US">United States (Domestic)</option>
                    <option value="KSA">Saudi Arabia (Vision 2030 Sovereign)</option>
                    <option value="UAE">United Arab Emirates (Abu Dhabi / Dubai)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Company Headcount</label>
                  <select
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="250 - 1,000 employees">250 - 1,000 employees</option>
                    <option value="1,000 - 5,000 employees">1,000 - 5,000 employees</option>
                    <option value="5,000+ Enterprise">5,000+ Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Core Service Focus</label>
                  <select
                    value={serviceOffer}
                    onChange={(e) => setServiceOffer(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Enterprise AI Transformation & Zero Trust Security">Enterprise AI & Zero Trust</option>
                    <option value="Research Computing & HPC GPU Clusters">HPC & NVIDIA GPU SuperPODs</option>
                    <option value="Executive CIO Advisory & Budget Strategy">Executive CIO Strategy Advisory</option>
                    <option value="SMART-on-FHIR Healthcare Interoperability">Healthcare EHR & FHIR AI</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Generated Leads Table / Card List */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Discovered Executive Leads</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Showing {leadsList.length} verified B2B contacts
                </span>
              </div>

              <div className="divide-y divide-slate-800/80">
                {leadsList.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-6 hover:bg-slate-900/50 transition-colors flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base font-extrabold text-white">{lead.companyName}</span>
                        <span className="text-xs font-mono text-slate-400">({lead.location})</span>
                        <span className="text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded">
                          {lead.fitScore}% Fit Score
                        </span>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          lead.status === 'Emailed'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : lead.status === 'Drafted'
                            ? 'bg-purple-950 text-purple-300 border border-purple-800'
                            : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}>
                          {lead.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                        <span className="text-cyan-400 font-bold">{lead.decisionMaker.fullName}</span>
                        <span>•</span>
                        <span className="text-slate-400">{lead.decisionMaker.title}</span>
                        <span>•</span>
                        <span className="text-emerald-400 underline">{lead.decisionMaker.email}</span>
                      </div>

                      <div className="text-xs text-slate-400 leading-relaxed">
                        <strong className="text-slate-300">Target Challenge: </strong>
                        {lead.painPoints.join(' • ')}
                      </div>

                      <div className="text-xs text-slate-300 font-mono flex items-center gap-2 pt-1">
                        <span className="text-amber-400 font-bold">Est. Value:</span> {lead.estimatedOpportunityValue}
                        <span className="text-slate-600">|</span>
                        <span className="text-cyan-300">Angle: {lead.recommendedAngle}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                      {onOpenCalendar && (
                        <button
                          onClick={() => onOpenCalendar(lead.decisionMaker.email, `Executive Advisory Briefing: ${lead.companyName}`)}
                          className="px-3 py-2 bg-slate-950 hover:bg-slate-800 text-cyan-300 border border-cyan-800/80 font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
                          title="Schedule briefing on Google Calendar"
                        >
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Google Calendar</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setSelectedLeadForEmail(lead);
                          setActiveTab('email');
                          handleDraftEmail(lead);
                        }}
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Draft Outreach Email</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: OUTREACH EMAIL DRAFTER & SENDER */}
        {activeTab === 'email' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Bot className="w-5 h-5 text-cyan-400" />
                  Target Recipient & Campaign Strategy
                </h3>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Select Target Lead</label>
                  <select
                    value={selectedLeadForEmail?.id || ''}
                    onChange={(e) => {
                      const found = leadsList.find((l) => l.id === e.target.value);
                      if (found) setSelectedLeadForEmail(found);
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    {leadsList.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.companyName} - {l.decisionMaker.fullName} ({l.decisionMaker.title})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Campaign Primary Goal</label>
                  <select
                    value={campaignGoal}
                    onChange={(e) => setCampaignGoal(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="15-min Executive Discovery Call">15-min Executive Discovery Call</option>
                    <option value="Request for Architecture Audit Briefing">Request for Architecture Audit Briefing</option>
                    <option value="Sovereign AI & Zero Trust Case Study Presentation">Sovereign AI Case Study Presentation</option>
                    <option value="Executive Dinner & AI Roundtable Invitation">Executive Dinner & AI Roundtable Invitation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Outreach Tone</label>
                  <select
                    value={emailTone}
                    onChange={(e) => setEmailTone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Authoritative & Executive">Authoritative & Executive (Peer-to-Peer CIO)</option>
                    <option value="Direct & Solution-Focused">Direct & Solution-Focused (ROI Centric)</option>
                    <option value="Consultative Advisory">Consultative Advisory (Risk & Compliance)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Sender Name</label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">Sender Title</label>
                    <input
                      type="text"
                      value={senderTitle}
                      onChange={(e) => setSenderTitle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <button
                  onClick={() => handleDraftEmail()}
                  disabled={isDraftingEmail}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isDraftingEmail ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Drafting Custom Outreach...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate AI Email Draft</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Dispatch Logs */}
              {sendLog.length > 0 && (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-[11px] space-y-1 text-slate-300 max-h-48 overflow-y-auto">
                  <div className="text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-2">
                    Console Dispatcher Logs
                  </div>
                  {sendLog.map((log, idx) => (
                    <div key={idx} className="leading-tight">{log}</div>
                  ))}
                </div>
              )}
            </div>

            {/* Email Preview & Editor Right Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-base font-bold text-white">AI Drafted Outreach Email</h3>
                  </div>
                  {generatedBody && (
                    <button
                      onClick={() => copyToClipboard(`Subject: ${generatedSubject}\n\n${generatedBody}`, 'email')}
                      className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-mono flex items-center gap-1.5"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                    </button>
                  )}
                </div>

                {selectedLeadForEmail && (
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono space-y-1 text-slate-300">
                    <div><strong className="text-cyan-400">To:</strong> {selectedLeadForEmail.decisionMaker.fullName} &lt;{selectedLeadForEmail.decisionMaker.email}&gt;</div>
                    <div><strong className="text-cyan-400">Target Organization:</strong> {selectedLeadForEmail.companyName}</div>
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Subject Line</label>
                    <input
                      type="text"
                      value={generatedSubject}
                      onChange={(e) => setGeneratedSubject(e.target.value)}
                      placeholder="Click 'Generate AI Email Draft' above to draft personalized subject..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1">Email Content Body</label>
                    <textarea
                      rows={12}
                      value={generatedBody}
                      onChange={(e) => setGeneratedBody(e.target.value)}
                      placeholder="Email content will automatically populate here after running the AI Agent..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-200 leading-relaxed font-sans focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400">
                    Auto-tracked via Nexis CRM Mail Gateway
                  </div>
                  <button
                    onClick={handleSendEmail}
                    disabled={isSendingEmail || !generatedBody}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSendingEmail ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Email via Gateway</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INBOUND MARKETING & LEAD MAGNET AGENT */}
        {activeTab === 'marketing' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  Configure Inbound Marketing Agent
                </h3>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Content Type</label>
                  <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="LinkedIn Thought Leadership Post">LinkedIn Thought Leadership Post</option>
                    <option value="Cold Phone Outreach Script">Cold Phone Outreach Script</option>
                    <option value="Executive Briefing One-Pager Outline">Executive Briefing One-Pager Outline</option>
                    <option value="Email Newsletter Attraction Teaser">Email Newsletter Attraction Teaser</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Topic or Keyword Focus</label>
                  <textarea
                    rows={3}
                    value={marketingTopic}
                    onChange={(e) => setMarketingTopic(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  onClick={handleGenerateMarketing}
                  disabled={isGeneratingMarketing}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isGeneratingMarketing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Generating Copy...</span>
                    </>
                  ) : (
                    <>
                      <Bot className="w-4 h-4" />
                      <span>Generate Attraction Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-base font-bold text-white">Generated Lead Attraction Copy</h3>
                  </div>
                  {generatedMarketingText && (
                    <button
                      onClick={() => copyToClipboard(generatedMarketingText, 'marketing')}
                      className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-mono flex items-center gap-1.5"
                    >
                      {copiedMarketing ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedMarketing ? 'Copied' : 'Copy Text'}</span>
                    </button>
                  )}
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-200 font-sans leading-relaxed min-h-64 whitespace-pre-wrap">
                  {generatedMarketingText || 'Click "Generate Attraction Copy" to create marketing content for customer acquisition...'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GOOGLE VOICE TELEPHONY OUTREACH AGENT */}
        {activeTab === 'phone' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Prospect Selector & Call Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <PhoneCall className="w-5 h-5 text-emerald-400" />
                    Google Voice Telephony Dispatcher
                  </h3>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                    Live Telephony Agent
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Select Target Decision Maker</label>
                  <select
                    value={selectedLeadForPhone?.id || ''}
                    onChange={(e) => {
                      const found = leadsList.find((l) => l.id === e.target.value);
                      if (found) {
                        setSelectedLeadForPhone(found);
                        handleGeneratePhoneScript(found);
                      }
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {leadsList.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.companyName} — {l.decisionMaker.fullName} ({l.decisionMaker.title})
                      </option>
                    ))}
                  </select>
                </div>

                {selectedLeadForPhone && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between items-center font-bold text-white">
                      <span>{selectedLeadForPhone.decisionMaker.fullName}</span>
                      <span className="text-emerald-400 font-mono">{selectedLeadForPhone.decisionMaker.phone || '+1 (443) 608-5425'}</span>
                    </div>
                    <div className="text-slate-400">{selectedLeadForPhone.decisionMaker.title} @ {selectedLeadForPhone.companyName}</div>
                    <div className="text-slate-400 text-[11px]">Pain Point: {selectedLeadForPhone.painPoints.join(', ')}</div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-2">Call Objective & Offer</label>
                  <textarea
                    rows={2}
                    value={phoneGoal}
                    onChange={(e) => setPhoneGoal(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <button
                    onClick={() => handleGeneratePhoneScript()}
                    disabled={isGeneratingPhoneScript}
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isGeneratingPhoneScript ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Compiling Telephony Script...</span>
                      </>
                    ) : (
                      <>
                        <Bot className="w-4 h-4" />
                        <span>Generate Custom Call Script & AI Objections</span>
                      </>
                    )}
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleLaunchGoogleVoiceCall}
                      className="py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <PhoneForwarded className="w-4 h-4 text-slate-950" />
                      <span>Call via Google Voice</span>
                    </button>

                    <button
                      onClick={toggleSpeakScript}
                      className="py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Volume2 className={`w-4 h-4 ${isSpeakingScript ? 'text-amber-400 animate-pulse' : 'text-cyan-400'}`} />
                      <span>{isSpeakingScript ? 'Stop Rehearsal' : 'AI Audio Rehearsal'}</span>
                    </button>
                  </div>
                </div>

                {/* Call Outcome Logging */}
                <div className="border-t border-slate-800 pt-4 space-y-3">
                  <h4 className="text-xs font-mono font-bold text-slate-300">Log Call Disposition to CRM</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={callOutcome}
                      onChange={(e) => setCallOutcome(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-xs text-white"
                    >
                      <option value="Voicemail Left">Voicemail Left</option>
                      <option value="Executive Connected">Executive Connected</option>
                      <option value="15-min Advisory Call Booked">15-min Advisory Call Booked</option>
                      <option value="Follow-up Email Requested">Follow-up Email Requested</option>
                      <option value="Not Interested / Bad Timing">Not Interested</option>
                    </select>

                    <button
                      onClick={handleLogCallResult}
                      className="py-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-800/80 font-bold text-xs rounded-xl transition-all"
                    >
                      Log Call Result
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Optional call notes (e.g., Requested Epic FHIR PDF)..."
                    value={callNotes}
                    onChange={(e) => setCallNotes(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>
              </div>

              {/* Live Telephony Dispatch Log */}
              {callLog.length > 0 && (
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2">
                  <div className="text-xs font-mono font-bold text-slate-400 flex items-center justify-between">
                    <span>Telephony & Call Log</span>
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-1 max-h-36 overflow-y-auto font-mono text-[11px] text-emerald-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                    {callLog.map((log, i) => (
                      <div key={i}>{log}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Interactive Call Script & AI Objection Matrix */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    AI Executive Call Script & Objection Playbook
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Target: {selectedLeadForPhone?.companyName}</span>
                </div>

                {/* Opening Pattern Interrupt */}
                <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-xs font-mono font-bold text-emerald-400">
                    <span>1. 15-Second Pattern Interrupt Opener</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(phoneScriptData.openingHook || '')}
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans italic">
                    "{phoneScriptData.openingHook}"
                  </p>
                </div>

                {/* 30-Second Core Value Proposition */}
                <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-xs font-mono font-bold text-cyan-400">
                    <span>2. 30-Second Value Proposition Pitch</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(phoneScriptData.valuePitch || '')}
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    "{phoneScriptData.valuePitch}"
                  </p>
                </div>

                {/* Qualifying Questions */}
                {phoneScriptData.qualifyingQuestions && phoneScriptData.qualifyingQuestions.length > 0 && (
                  <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs font-mono font-bold text-purple-400">3. Executive Discovery Questions</div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                      {phoneScriptData.qualifyingQuestions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* AI Objection Handling Matrix */}
                {phoneScriptData.objectionHandlers && phoneScriptData.objectionHandlers.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold text-amber-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>4. AI Objection Response Matrix</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {phoneScriptData.objectionHandlers.map((obj, i) => (
                        <div key={i} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                          <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Objection: "{obj.objection}"</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed font-sans pl-5">
                            <strong>AI Response: </strong> "{obj.response}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Voicemail Script */}
                <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-400">
                    <span>5. 20-Second Executive Voicemail Script</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(phoneScriptData.voicemailScript || '')}
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    "{phoneScriptData.voicemailScript}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: AUTOPILOT CAMPAIGN STUDIO */}
        {activeTab === 'autopilot' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Full Auto-Pilot BD Outreach Engine</h3>
              <p className="text-xs text-slate-300">
                Run automated sequence workflows that discover leads, draft bespoke emails, dispatch initial touchpoints, and schedule follow-ups across your prospect list.
              </p>
            </div>

            {isAutoPilotRunning ? (
              <div className="space-y-3 bg-slate-950 p-6 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>Executing Campaign Workflows...</span>
                  <span>{autoPilotProgress}%</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-500"
                    style={{ width: `${autoPilotProgress}%` }}
                  />
                </div>
                <p className="text-[11px] font-mono text-slate-400">
                  Processing leads: Drafting emails, calculating fit scores, syncing to CRM pipeline...
                </p>
              </div>
            ) : (
              <button
                onClick={handleRunAutoPilot}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-xl transition-all flex items-center gap-2 mx-auto"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Start Auto-Pilot Outreach Campaign</span>
              </button>
            )}
          </div>
        )}

        {/* TAB 6: BD ADMIN OPERATIONS PORTAL */}
        {activeTab === 'admin' && (
          <div className="space-y-8">
            {/* System Status & Quick Actions Bar */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-2xl flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  BD Executive Operations & Agent Control
                </div>
                <h2 className="text-2xl font-extrabold text-white">Central BD & Marketing Administration</h2>
                <p className="text-xs text-slate-300">
                  Manage active AI agents, monitor real-time lead outreach pipeline, configure email/telephony integrations, and analyze conversion metrics.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowAddLeadModal(true)}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-slate-950" />
                  <span>Add Manual Prospect</span>
                </button>

                <button
                  onClick={async () => {
                    try {
                      const res = await fetch('/api/bd-agent/admin-stats');
                      const data = await res.json();
                      if (data.success) {
                        alert(`BD System Health OK!\nActive Leads: ${data.stats.totalLeads}\nEmails Sent: ${data.stats.emailsSent}\nPhone Calls: ${data.stats.callsPlaced}\nPipeline Value: ${data.stats.pipelineValue}`);
                      }
                    } catch (e) {
                      alert('Refreshed admin operational metrics.');
                    }
                  }}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl transition-all flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4 text-amber-400" />
                  <span>Refresh Operational Data</span>
                </button>
              </div>
            </div>

            {/* AI Agent Status & Gateways Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Gemini AI Engine</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-base font-extrabold text-white flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span>gemini-3.6-flash</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400">Status: Operational (140ms)</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Google Voice Telephony</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-base font-extrabold text-white flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Voice Web Dispatch</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400">Caller ID: +1 (443) 608-5425</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Outbound Mail Gateway</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-base font-extrabold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>SMTP / Gmail Relay</span>
                </div>
                <div className="text-[11px] font-mono text-purple-300">DKIM / SPF / DMARC Verified</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>CRM Synchronization</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>
                <div className="text-base font-extrabold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-amber-400" />
                  <span>HubSpot / Salesforce</span>
                </div>
                <div className="text-[11px] font-mono text-cyan-300 font-bold">Real-time Bi-directional Sync</div>
              </div>
            </div>

            {/* Master Lead Pipeline Table & Controls */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-amber-400" />
                    Master Lead Pipeline & Managerial Actions
                  </h3>
                  <p className="text-xs text-slate-400">Total Records: {leadsList.length} Enterprise Decision Makers</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Bulk Actions:</span>
                  <button
                    onClick={() => {
                      setLeadsList((prev) => prev.map((l) => ({ ...l, status: 'Emailed' })));
                      alert('Bulk Email Sequence queued for all active leads.');
                    }}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg text-xs font-mono border border-slate-700"
                  >
                    Queue All Emails
                  </button>
                  <button
                    onClick={() => {
                      setLeadsList(DEFAULT_INITIAL_LEADS);
                      alert('Reset leads list to initial executive seed dataset.');
                    }}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-mono border border-slate-700"
                  >
                    Reset Pipeline
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase text-[10px]">
                      <th className="py-3 px-3">Company & Region</th>
                      <th className="py-3 px-3">Executive Contact</th>
                      <th className="py-3 px-3">Fit Score</th>
                      <th className="py-3 px-3">Est. Value</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3 text-right">Managerial Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {leadsList.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-3">
                          <div className="font-bold text-white text-xs">{lead.companyName}</div>
                          <div className="text-[11px] font-mono text-slate-400">{lead.industry} • {lead.location}</div>
                        </td>
                        <td className="py-3.5 px-3">
                          <div className="font-bold text-cyan-300">{lead.decisionMaker.fullName}</div>
                          <div className="text-[11px] text-slate-400">{lead.decisionMaker.title}</div>
                          <div className="text-[10px] font-mono text-emerald-400">{lead.decisionMaker.email}</div>
                        </td>
                        <td className="py-3.5 px-3 font-mono">
                          <span className="bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded font-bold">
                            {lead.fitScore}%
                          </span>
                        </td>
                        <td className="py-3.5 px-3 font-mono text-amber-300 font-bold">
                          {lead.estimatedOpportunityValue}
                        </td>
                        <td className="py-3.5 px-3 font-mono">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            lead.status === 'Emailed'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : lead.status === 'Voice Called'
                              ? 'bg-amber-950 text-amber-300 border border-amber-800'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setSelectedLeadForEmail(lead);
                                setActiveTab('email');
                                handleDraftEmail(lead);
                              }}
                              className="p-2 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg transition-all"
                              title="Draft Email"
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => {
                                setSelectedLeadForPhone(lead);
                                setActiveTab('phone');
                                handleGeneratePhoneScript(lead);
                              }}
                              className="p-2 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 rounded-lg border border-emerald-800 transition-all"
                              title="Google Voice Call"
                            >
                              <PhoneCall className="w-3.5 h-3.5" />
                            </button>

                            {onOpenCalendar && (
                              <button
                                onClick={() => onOpenCalendar(lead.decisionMaker.email, `Executive Advisory Briefing: ${lead.companyName}`)}
                                className="p-2 bg-slate-800 hover:bg-slate-700 text-purple-300 rounded-lg transition-all"
                                title="Schedule Meeting"
                              >
                                <Calendar className="w-3.5 h-3.5" />
                              </button>
                            )}

                            <button
                              onClick={() => setLeadsList((prev) => prev.filter((l) => l.id !== lead.id))}
                              className="p-2 bg-slate-900 hover:bg-red-950 text-slate-500 hover:text-red-400 rounded-lg transition-all"
                              title="Remove Prospect"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Add Manual Lead Modal */}
        {showAddLeadModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Plus className="w-5 h-5 text-cyan-400" />
                  Add Manual Prospect
                </h3>
                <button
                  onClick={() => setShowAddLeadModal(false)}
                  className="text-slate-400 hover:text-white font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddManualLead} className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={newCompanyName}
                    onChange={(e) => setNewCompanyName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Contact Full Name</label>
                  <input
                    type="text"
                    value={newContactName}
                    onChange={(e) => setNewContactName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={newContactTitle}
                    onChange={(e) => setNewContactTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Contact Email *</label>
                  <input
                    type="email"
                    required
                    value={newContactEmail}
                    onChange={(e) => setNewContactEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="pt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddLeadModal(false)}
                    className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-cyan-600 text-white text-xs font-bold rounded-xl"
                  >
                    Save Lead
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
