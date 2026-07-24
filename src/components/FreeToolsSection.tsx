import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  PhoneCall, 
  Calculator, 
  Send, 
  Phone, 
  PhoneOff, 
  Mic, 
  MicOff, 
  Volume2, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  DollarSign, 
  Building2, 
  Smartphone, 
  ArrowRight,
  Info,
  Loader2
} from 'lucide-react';
import { Region } from '../types';
import { mainUSAPhone, mainUSASMS, primaryContactEmail } from '../data/companyData';

interface FreeToolsSectionProps {
  currentRegion: Region;
  onOpenBookAudit?: () => void;
}

export const FreeToolsSection: React.FC<FreeToolsSectionProps> = ({
  currentRegion,
  onOpenBookAudit,
}) => {
  const [activeTool, setActiveTool] = useState<'sms' | 'call' | 'calculator'>('sms');
  const [region, setRegion] = useState<Region>(currentRegion);

  // -------------------------------------------------------------
  // TOOL 1: Web-to-Phone SMS Dispatcher State
  // -------------------------------------------------------------
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [recipientPhone, setRecipientPhone] = useState(
    region === 'KSA' ? '+966 50 123 4567' : region === 'UAE' ? '+971 4 555 0192' : '+1 (443) 608-5425'
  );
  const [smsText, setSmsText] = useState('');
  const [sendingSms, setSendingSms] = useState(false);
  const [smsStatus, setSmsStatus] = useState<any>(null);
  const [smsError, setSmsError] = useState<string | null>(null);

  // Sync recipient phone with region
  useEffect(() => {
    if (region === 'KSA') setRecipientPhone('+966 50 123 4567');
    else if (region === 'UAE') setRecipientPhone('+971 4 555 0192');
    else setRecipientPhone('+1 (443) 608-5425');
  }, [region]);

  const handleSendSms = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderPhone || !smsText.trim()) {
      setSmsError('Please enter your mobile phone number and SMS message.');
      return;
    }

    setSendingSms(true);
    setSmsError(null);

    try {
      const res = await fetch('/api/send-web-sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderName,
          senderPhone,
          recipientPhone,
          messageText: smsText,
          region,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSmsStatus(data);
        setSmsText('');
      } else {
        setSmsError(data.error || 'Failed to dispatch SMS text.');
      }
    } catch (err) {
      setSmsError('Network error. Failed to send web text message.');
    } finally {
      setSendingSms(false);
    }
  };

  // -------------------------------------------------------------
  // TOOL 2: Browser Voice Call Tool State
  // -------------------------------------------------------------
  const [isCalling, setIsCalling] = useState(false);
  const [callConnected, setCallConnected] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [callerName, setCallerName] = useState('');
  const [callerPhoneInput, setCallerPhoneInput] = useState('');
  const [dialedDigits, setDialedDigits] = useState('');
  const [audioFeedback, setAudioFeedback] = useState('Ready to initiate web voice call.');
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (callConnected) {
      timerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callConnected]);

  const handleStartCall = () => {
    setIsCalling(true);
    setAudioFeedback('Dialing Nexis Executive Voice Hub...');
    
    // Simulate connection
    setTimeout(() => {
      setCallConnected(true);
      setIsCalling(false);
      setAudioFeedback('Voice Call Connected • Speaking with Nexis AI Advisor Lead');
    }, 2000);
  };

  const handleEndCall = async () => {
    setCallConnected(false);
    setIsCalling(false);
    setAudioFeedback(`Call ended. Total duration: ${formatDuration(callDuration)}`);

    // Log call to server
    try {
      await fetch('/api/web-call-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          callerName: callerName || 'Web Visitor',
          callerPhone: callerPhoneInput || '+1 (Web Call)',
          callDurationSeconds: callDuration,
          region,
          callerNotes: `Web call dialed numbers: ${dialedDigits || 'Direct AI Voice Briefing'}`,
        }),
      });
    } catch (err) {
      console.error('Failed to log call:', err);
    }

    setCallDuration(0);
    setDialedDigits('');
  };

  const handleKeypadPress = (digit: string) => {
    setDialedDigits((prev) => prev + digit);
  };

  const formatDuration = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // -------------------------------------------------------------
  // TOOL 3: AI ROI & Cloud Cost Calculator State
  // -------------------------------------------------------------
  const [apiQueriesPerMonth, setApiQueriesPerMonth] = useState(500000); // 500k queries
  const [teamUsers, setTeamUsers] = useState(150);
  const [estimatedCloudCost, setEstimatedCloudCost] = useState(0);
  const [sovereignCost, setSovereignCost] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);

  useEffect(() => {
    // Estimated proprietary API cost per 1M tokens ($15/1M average across frontier LLMs)
    const cloudCostMonth = (apiQueriesPerMonth / 1000) * 0.08 + teamUsers * 30;
    const sovereignCostMonth = 1800 + (apiQueriesPerMonth / 1000) * 0.015; // Local GPU node cluster amortized + power
    const monthlySaved = Math.max(0, cloudCostMonth - sovereignCostMonth);
    
    setEstimatedCloudCost(Math.round(cloudCostMonth * 12));
    setSovereignCost(Math.round(sovereignCostMonth * 12));
    setAnnualSavings(Math.round(monthlySaved * 12));
  }, [apiQueriesPerMonth, teamUsers]);

  return (
    <section id="free-tools" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-400 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Free Enterprise Web Tools</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Direct Web Communications & AI Cost Estimator
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Send text messages directly from your browser to our team hotline, initiate a live web audio call, or calculate your sovereign AI infrastructure cost savings.
          </p>

          {/* Regional Hub Selector */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="text-xs text-slate-400 font-semibold">Target Region:</span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className="bg-slate-950 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-none cursor-pointer"
            >
              <option value="US">🇺🇸 United States (+1 443 608-5425)</option>
              <option value="KSA">🇸🇦 Saudi Arabia (+966 50 123 4567)</option>
              <option value="UAE">🇦🇪 United Arab Emirates (+971 4 555 0192)</option>
            </select>
          </div>
        </div>

        {/* Tools Selector Navigation Pills */}
        <div className="flex justify-center">
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex flex-wrap gap-2 max-w-2xl w-full">
            <button
              onClick={() => setActiveTool('sms')}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTool === 'sms'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>📱 Direct Web SMS</span>
            </button>

            <button
              onClick={() => setActiveTool('call')}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTool === 'call'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>📞 Web Voice Call</span>
            </button>

            <button
              onClick={() => setActiveTool('calculator')}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTool === 'calculator'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>🧮 AI ROI Calculator</span>
            </button>
          </div>
        </div>

        {/* TOOL 1: WEB-TO-PHONE DIRECT SMS DISPATCHER */}
        {activeTool === 'sms' && (
          <div className="max-w-2xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Send Direct Text Message</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-mono">
                    Live SMS Hotline
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Type a message below to send an SMS directly to our hotline (<strong className="text-emerald-400 font-mono">{recipientPhone}</strong>).
                </p>
              </div>
            </div>

            {smsError && (
              <div className="mb-4 p-3 bg-red-950/80 border border-red-800 text-red-300 text-xs rounded-xl">
                {smsError}
              </div>
            )}

            {smsStatus ? (
              <div className="bg-slate-900 border border-emerald-800/80 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-700">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">SMS Dispatched Successfully!</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                  {smsStatus.confirmation}
                </p>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-left text-xs font-mono space-y-1">
                  <div className="text-slate-400">SMS Tracking Reference: <strong className="text-blue-400">{smsStatus.smsId}</strong></div>
                  <div className="text-slate-400">Recipient Hotline: <strong className="text-emerald-400">{smsStatus.recipientPhone}</strong></div>
                  <div className="text-slate-400">Delivery Status: <strong className="text-emerald-400">{smsStatus.deliveryStatus}</strong></div>
                </div>

                <button
                  onClick={() => setSmsStatus(null)}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                >
                  Send Another SMS Text
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendSms} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name / Title</label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g., Alex Vance (IT Lead)"
                      className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Phone Number (For Reply SMS) <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="+1 (443) 555-0199"
                      className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Recipient Nexis Hotline</label>
                  <input
                    type="text"
                    readOnly
                    value={`Nexis Tech Group ${region} Hotline: ${recipientPhone}`}
                    className="w-full bg-slate-900/60 border border-slate-800 text-emerald-400 rounded-xl px-3.5 py-2 text-xs font-mono font-bold cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Text Message Content <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={smsText}
                    onChange={(e) => setSmsText(e.target.value)}
                    placeholder="Hello Nexis AI team, I am interested in scheduling an enterprise AI architecture consultation..."
                    className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl p-3 text-xs focus:outline-none focus:border-blue-500 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sendingSms}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{sendingSms ? 'Dispatching SMS to Hotline...' : `Send Direct Web SMS to ${recipientPhone}`}</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* TOOL 2: BROWSER VOICE CALL DIALER */}
        {activeTool === 'call' && (
          <div className="max-w-xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800 text-blue-400 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Web Browser Voice Dialer</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Call Nexis AI Advisor direct from your browser microphone.</p>
                </div>
              </div>

              {callConnected && (
                <div className="flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800 text-red-400 rounded-full font-mono text-xs font-bold animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>LIVE {formatDuration(callDuration)}</span>
                </div>
              )}
            </div>

            {/* Audio Feedback Screen */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center space-y-2">
              <div className="text-xs font-mono text-blue-400 font-semibold flex items-center justify-center gap-2">
                <Volume2 className="w-4 h-4 text-blue-400" />
                <span>{audioFeedback}</span>
              </div>
              {dialedDigits && (
                <div className="text-lg font-mono font-bold text-white tracking-widest">
                  Keypad Input: {dialedDigits}
                </div>
              )}
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((digit) => (
                <button
                  key={digit}
                  onClick={() => handleKeypadPress(digit)}
                  className="py-3 bg-slate-900 hover:bg-slate-800 active:bg-blue-600 text-white font-mono font-bold text-base rounded-xl border border-slate-800 transition-colors cursor-pointer"
                >
                  {digit}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={callerName}
                  onChange={(e) => setCallerName(e.target.value)}
                  placeholder="Your Name (Optional)"
                  className="bg-slate-900 border border-slate-800 text-white text-xs rounded-xl px-3 py-2 text-center"
                />
                <input
                  type="tel"
                  value={callerPhoneInput}
                  onChange={(e) => setCallerPhoneInput(e.target.value)}
                  placeholder="Your Callback Number"
                  className="bg-slate-900 border border-slate-800 text-white text-xs rounded-xl px-3 py-2 text-center font-mono"
                />
              </div>

              {!callConnected ? (
                <button
                  onClick={handleStartCall}
                  disabled={isCalling}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isCalling ? 'Connecting Web Call...' : `Initiate Web Call to Nexis AI Advisor (${recipientPhone})`}</span>
                </button>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`flex-1 py-3 text-xs font-bold rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isMuted ? 'bg-amber-950 text-amber-300 border-amber-800' : 'bg-slate-900 text-slate-300 border-slate-800'
                    }`}
                  >
                    {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    <span>{isMuted ? 'Muted' : 'Mute Mic'}</span>
                  </button>

                  <button
                    onClick={handleEndCall}
                    className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneOff className="w-4 h-4" />
                    <span>End Voice Call</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TOOL 3: AI ROI & INFRASTRUCTURE COST CALCULATOR */}
        {activeTool === 'calculator' && (
          <div className="max-w-3xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-800 text-purple-400 flex items-center justify-center shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">2026 Sovereign AI Infrastructure Cost Savings Calculator</h3>
                <p className="text-xs text-slate-400 mt-0.5">Compare proprietary SaaS API cost vs on-premise private AI LLM deployment.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-slate-300">Monthly AI Model API Calls / Queries</span>
                    <span className="text-blue-400 font-mono font-bold">{(apiQueriesPerMonth).toLocaleString()} queries</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={apiQueriesPerMonth}
                    onChange={(e) => setApiQueriesPerMonth(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>100k queries</span>
                    <span>5M queries</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-slate-300">Active Internal Enterprise Users</span>
                    <span className="text-purple-400 font-mono font-bold">{teamUsers} seats</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={teamUsers}
                    onChange={(e) => setTeamUsers(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>10 seats</span>
                    <span>1,000 seats</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-blue-400" />
                    <span>Calculation Basis (2026 Benchmarks):</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    SaaS model considers ~$15/1M token API pricing + per-seat Enterprise licensing. Sovereign Nexis AI model considers dedicated NVIDIA GPU cluster hosting on local/private cloud with zero per-token cost overages.
                  </p>
                </div>
              </div>

              {/* Output Cost Comparison Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">
                    Est. Annual Cost Comparison
                  </span>

                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Public Cloud API Cost:</span>
                      <span className="text-red-400 font-mono font-bold text-base">${estimatedCloudCost.toLocaleString()}/yr</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Nexis Sovereign AI Node:</span>
                      <span className="text-blue-400 font-mono font-bold text-base">${sovereignCost.toLocaleString()}/yr</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-emerald-950/80 border border-emerald-800 rounded-xl text-center space-y-1">
                    <div className="text-xs text-emerald-300 uppercase font-bold tracking-wider">Estimated Annual Savings</div>
                    <div className="text-3xl font-black text-emerald-400 font-mono">
                      ${annualSavings.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-emerald-300">
                      ~{estimatedCloudCost ? Math.round((annualSavings / estimatedCloudCost) * 100) : 0}% Infrastructure Cost Reduction
                    </div>
                  </div>
                </div>

                {onOpenBookAudit && (
                  <button
                    onClick={onOpenBookAudit}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book Your Custom AI ROI Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
