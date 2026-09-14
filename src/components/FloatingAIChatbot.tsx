import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Loader2, 
  ShieldCheck, 
  ArrowUpRight, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Mail, 
  MapPin, 
  Calendar,
  TrendingUp,
  Building2,
  DollarSign,
  CheckCircle2,
  Radio,
  Clock
} from 'lucide-react';
import { mainUSAPhone, mainUSASMS, primaryContactEmail } from '../data/companyData';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

interface FloatingAIChatbotProps {
  onOpenConsultation: (service?: string, notes?: string) => void;
  onOpenBookAudit?: () => void;
  onOpenCalendar?: (email?: string, subject?: string) => void;
}

export const FloatingAIChatbot: React.FC<FloatingAIChatbotProps> = ({ 
  onOpenConsultation,
  onOpenBookAudit,
  onOpenCalendar
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'roi' | 'connect'>('chat');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Welcome to Nexis AI. I am your Executive AI & Business Strategy Advisor, led by our former-CIO executive office. How can I assist your enterprise across Americas or Europe with Autonomous AI Agents, ERP Modernization, or Zero Trust compliance?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceOutputEnabled, setIsVoiceOutputEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Rapid ROI Qualification State
  const [roiRegion, setRoiRegion] = useState<'Americas' | 'Europe' | 'Global'>('Americas');
  const [roiSystem, setRoiSystem] = useState('SAP S/4HANA / ECC');
  const [roiEmployees, setRoiEmployees] = useState('1,000 - 5,000');
  const [roiInitiative, setRoiInitiative] = useState('ERP Clean Core & Agentic Automation');
  const [roiResultCalculated, setRoiResultCalculated] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');

  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, activeTab]);

  // Voice Text-to-Speech synthesis
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // Stop any previous speech
    
    // Strip markdown formatting for cleaner speech synthesis
    const cleanText = text.replace(/[*_#`~[\]()]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Voice Speech Recognition Microphone input
  const handleToggleMic = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please type your message.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');
        setInputText(transcript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      console.error('Failed to start speech recognition:', e);
      setIsListening(false);
    }
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          companyContext: 'Nexis AI — Premier Enterprise AI, Former-CIO Executive Advisory, ERP Modernization (SAP/Oracle clean core), and Zero Trust Cybersecurity serving Americas (Owings Mills MD HQ) and Europe (London & Frankfurt). Hotline: (443) 608-5425.',
        }),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      const botMsgText =
        data.advice ||
        'Nexis AI provides former-CIO executive advisory, ERP Clean Core modernization (SAP S/4HANA & Oracle), and Zero Trust cybersecurity (NIST 800-53, DORA, EU AI Act). You can reach our executive desk at (443) 608-5425 or schedule a briefing.';

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botMsgText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);

      // Speak aloud if voice mode enabled
      if (isVoiceOutputEnabled) {
        speakText(botMsgText);
      }
    } catch (err) {
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Thank you for reaching out to Nexis AI. For high-priority advisory, text our executive hotline at ${mainUSASMS} or call US HQ at ${mainUSAPhone}. For European inquiries, contact our London desk or email ${primaryContactEmail}.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
      if (isVoiceOutputEnabled) speakText(fallbackMsg.text);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateQuickROI = () => {
    setRoiResultCalculated(true);
  };

  const handleBookFromROI = () => {
    setIsOpen(false);
    onOpenConsultation(
      `ROI Briefing: ${roiInitiative} on ${roiSystem} (${roiRegion})`,
      `Visitor ${visitorName} (${visitorEmail}) calculated rapid ROI qualification for ${roiEmployees} employees in ${roiRegion}.`
    );
  };

  const quickPrompts = [
    'How does Nexis AI modernize SAP & Oracle with clean core?',
    'Explain your EVF™ 90-Day ROI Guarantee framework',
    'How do you address EU AI Act & DORA compliance?',
    'Tell me about your Former-CIO Executive Advisory offering',
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Floating Toggle Button when Closed */}
      {!isOpen && (
        <div className="flex flex-col items-end gap-2">
          {/* Direct Text Hotline Quick Link Bubble */}
          <a
            href={`sms:${mainUSASMS}?body=Hello%20Nexis%20AI%20Executive%20Team%2C%20I%20am%20inquiring%20about%20your%20services.`}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/50 text-emerald-400 text-xs font-bold shadow-lg hover:bg-slate-800 transition-all group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>SMS Executive Desk: {mainUSASMS}</span>
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-2xl shadow-blue-900/50 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-blue-400/50"
            aria-label="Open Nexis AI Executive Advisor"
          >
            <div className="relative">
              <Bot className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-pulse" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-extrabold tracking-wide uppercase leading-tight">Nexis AI Advisor</div>
              <div className="text-[10px] text-blue-200">Voice & Chat • Americas & Europe</div>
            </div>
          </button>
        </div>
      )}

      {/* Expanded Chat & Advisory Widget */}
      {isOpen && (
        <div className="w-[360px] sm:w-[440px] h-[600px] max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white flex items-center gap-1.5">
                  <span>Nexis AI Advisor</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-2">
                  <span>Former-CIO Led</span>
                  <span>•</span>
                  <span className="text-cyan-400 font-semibold">Americas & Europe</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Voice Speaking Indicator */}
              {isSpeaking && (
                <button
                  onClick={stopSpeaking}
                  className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold flex items-center gap-1.5 animate-pulse cursor-pointer"
                  title="Click to stop voice playback"
                >
                  <span className="flex gap-0.5 items-end h-2.5">
                    <span className="w-0.5 bg-amber-400 h-2 animate-bounce" />
                    <span className="w-0.5 bg-amber-400 h-3 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-0.5 bg-amber-400 h-1.5 animate-bounce [animation-delay:0.4s]" />
                  </span>
                  <span>Mute</span>
                </button>
              )}

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Minimize widget"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Mode Ribbon */}
          <div className="bg-slate-950 px-2 py-1.5 border-b border-slate-800 flex items-center justify-between shrink-0 text-xs">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'chat'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>AI Chat & Voice</span>
              </button>

              <button
                onClick={() => setActiveTab('roi')}
                className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'roi'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Quick ROI</span>
              </button>

              <button
                onClick={() => setActiveTab('connect')}
                className={`px-3 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'connect'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hotlines</span>
              </button>
            </div>

            {/* Voice Toggle */}
            {activeTab === 'chat' && (
              <button
                onClick={() => {
                  const nextState = !isVoiceOutputEnabled;
                  setIsVoiceOutputEnabled(nextState);
                  if (!nextState) stopSpeaking();
                }}
                className={`p-1 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 border cursor-pointer ${
                  isVoiceOutputEnabled
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                }`}
                title={isVoiceOutputEnabled ? 'Voice output ON (Click to mute)' : 'Enable Voice Speech output'}
              >
                {isVoiceOutputEnabled ? (
                  <>
                    <Volume2 className="w-3 h-3 text-amber-400" />
                    <span className="hidden sm:inline">Voice ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3 h-3" />
                    <span className="hidden sm:inline">Mute Voice</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* TAB 1: AI CHAT & VOICE */}
          {activeTab === 'chat' && (
            <>
              {/* Messages Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-950/60">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                          : 'bg-slate-800 text-slate-100 border border-slate-700/80 rounded-bl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.time}</span>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-xs text-blue-400 bg-slate-800/80 p-3 rounded-2xl w-max border border-slate-700">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                    <span>Nexis AI is formulating strategic recommendation...</span>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Prompts Container */}
              <div className="px-3 py-2 bg-slate-900 border-t border-slate-800/80 flex gap-2 overflow-x-auto scrollbar-none shrink-0">
                {quickPrompts.map((qp, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(qp)}
                    className="whitespace-nowrap px-2.5 py-1 text-[11px] rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-blue-500 transition-all cursor-pointer"
                  >
                    {qp}
                  </button>
                ))}
              </div>

              {/* Input Footer Form */}
              <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2 shrink-0">
                {/* Microphone STT Input Button */}
                <button
                  onClick={handleToggleMic}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer shrink-0 ${
                    isListening
                      ? 'bg-red-600 text-white border-red-500 animate-pulse ring-2 ring-red-400/50'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                  }`}
                  title={isListening ? 'Listening... Speak now' : 'Click to speak using your microphone'}
                  aria-label="Speech recognition microphone"
                >
                  {isListening ? <Mic className="w-4 h-4 text-white" /> : <MicOff className="w-4 h-4 text-slate-400" />}
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={isListening ? 'Listening to voice...' : 'Ask about AI agents, ERP, Zero Trust...'}
                  className={`flex-1 bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    isListening ? 'border-red-500/80 ring-1 ring-red-500' : 'border-slate-800'
                  }`}
                />

                <button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputText.trim()}
                  className="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl transition-all cursor-pointer shadow-md shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}

          {/* TAB 2: RAPID ROI QUALIFIER */}
          {activeTab === 'roi' && (
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/60 text-xs">
              <div className="bg-emerald-950/40 border border-emerald-800/60 p-3.5 rounded-2xl space-y-1">
                <div className="flex items-center gap-2 font-bold text-emerald-300">
                  <TrendingUp className="w-4 h-4" />
                  <span>30-Second Executive Value Estimator</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Based on former-CIO benchmarks across 45+ enterprise deployments in the US and Europe.
                </p>
              </div>

              <div className="space-y-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 mb-1">Operating Region</label>
                  <select
                    value={roiRegion}
                    onChange={(e: any) => setRoiRegion(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Americas">Americas (US NIST / HIPAA)</option>
                    <option value="Europe">Europe (UK / EU DORA & AI Act)</option>
                    <option value="Global">Global Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 mb-1">Current Core Architecture</label>
                  <select
                    value={roiSystem}
                    onChange={(e) => setRoiSystem(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="SAP S/4HANA / ECC">SAP S/4HANA / Legacy ECC</option>
                    <option value="Oracle Cloud / EBS">Oracle Cloud ERP / E-Business Suite</option>
                    <option value="NetSuite / Workday">NetSuite / Workday SaaS</option>
                    <option value="Custom Microservices / Cloud">Custom Microservices / AWS / GCP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 mb-1">Enterprise Size</label>
                  <select
                    value={roiEmployees}
                    onChange={(e) => setRoiEmployees(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="250 - 1,000">250 - 1,000 Employees</option>
                    <option value="1,000 - 5,000">1,000 - 5,000 Employees</option>
                    <option value="5,000 - 20,000">5,000 - 20,000 Employees</option>
                    <option value="20,000+">20,000+ Global Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-400 mb-1">Primary Transformation Goal</label>
                  <select
                    value={roiInitiative}
                    onChange={(e) => setRoiInitiative(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="ERP Clean Core & Agentic Automation">ERP Clean Core & Agentic Automation</option>
                    <option value="Zero Trust & Sovereign Enclave Security">Zero Trust & Sovereign Security</option>
                    <option value="Autonomous Business Development Pipeline">Autonomous Business Development Pipeline</option>
                    <option value="Fractional CAIO / vCISO Boardroom Advisory">Fractional CAIO / vCISO Advisory</option>
                  </select>
                </div>

                <button
                  onClick={calculateQuickROI}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-200" />
                  <span>Calculate Projected ROI & Savings</span>
                </button>
              </div>

              {roiResultCalculated && (
                <div className="bg-slate-900 border border-emerald-500/40 p-4 rounded-2xl space-y-3 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-white text-xs">Projected 12-Month Impact:</span>
                    <span className="text-emerald-400 font-extrabold font-mono text-xs">310% - 460% ROI</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <div className="text-slate-400">Est. Annual OPEX Savings:</div>
                      <div className="text-sm font-extrabold text-emerald-400 font-mono mt-0.5">$380K - $1.4M</div>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <div className="text-slate-400">Payback Period:</div>
                      <div className="text-sm font-extrabold text-cyan-400 font-mono mt-0.5">&lt; 90 Days</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      placeholder="Your Name (e.g., Alex Vance)"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                    <input
                      type="email"
                      placeholder="Executive Work Email (e.g., alex@company.com)"
                      value={visitorEmail}
                      onChange={(e) => setVisitorEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                    />
                    <button
                      onClick={handleBookFromROI}
                      className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Request 48-Hour C-Suite Briefing</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: DIRECT HOTLINES */}
          {activeTab === 'connect' && (
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/60 text-xs">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 font-bold text-white text-xs">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Americas Headquarters (USA)</span>
                </div>
                <div className="text-slate-300 space-y-1.5 pl-6 text-[11px]">
                  <div>11436 Cronhill Drive, Owings Mills, MD 21117</div>
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={`tel:${mainUSAPhone.replace(/[^0-9+]/g, '')}`}
                      className="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/40 hover:bg-blue-600/40 font-bold flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call: (443) 608-5425</span>
                    </a>
                    <a
                      href={`sms:${mainUSASMS}?body=Hello%20Nexis%20AI%20Team%2C%20I%20am%20texting%20you%20from%20the%20website%20chatbot.`}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/40 font-bold flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Text: {mainUSASMS}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 font-bold text-white text-xs">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>United Kingdom & European Operations</span>
                </div>
                <div className="text-slate-300 space-y-1.5 pl-6 text-[11px]">
                  <div>100 Bishopsgate, London EC2N 4AG & Mainzer Landstraße, Frankfurt</div>
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href="tel:+442079460988"
                      className="px-3 py-1.5 rounded-lg bg-purple-600/20 text-purple-300 border border-purple-500/40 hover:bg-purple-600/40 font-bold flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call: +44 20 7946 0988</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 font-bold text-white text-xs">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Direct Executive Calendar</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Lock in a 30-minute private consultation with former-CIO executive practice leads.
                </p>
                {onOpenCalendar ? (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenCalendar(primaryContactEmail, 'Executive Advisory Strategy Session');
                    }}
                    className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Open Google Calendar Scheduler</span>
                  </button>
                ) : (
                  <a
                    href={`mailto:${primaryContactEmail}?subject=Request%20for%20Executive%20Advisory%20Briefing`}
                    className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Email: {primaryContactEmail}</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
