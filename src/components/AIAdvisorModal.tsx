import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  BrainCircuit, 
  Send, 
  Bot, 
  User, 
  Globe, 
  Building, 
  CheckCircle2, 
  Loader2,
  FileText,
  MessageSquare
} from 'lucide-react';
import { Region } from '../types';

interface AIAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRegion: Region;
  onOpenConsultation: () => void;
}

export const AIAdvisorModal: React.FC<AIAdvisorModalProps> = ({
  isOpen,
  onClose,
  currentRegion,
  onOpenConsultation,
}) => {
  const [region, setRegion] = useState<Region>(currentRegion);
  const [industry, setIndustry] = useState('Healthcare');
  const [userQuery, setUserQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<
    { role: 'user' | 'assistant'; text: string; details?: any }[]
  >([
    {
      role: 'assistant',
      text: `Hello! I am the Nexis Tech Group AI & Executive Technology Advisor. How can I assist with your AI Transformation, Cybersecurity, Healthcare Interoperability, or Higher Ed IT strategy?`,
    },
  ]);

  if (!isOpen) return null;

  const quickPrompts = [
    'How do we deploy HIPAA-compliant RAG for clinical knowledge search?',
    'What is the Zero Trust implementation roadmap for a university with 30k students?',
    'How to ensure Saudi NDMO & NCA compliance for cloud AI workloads?',
    'Best practices for Epic / Meditech EHR FHIR API integration?',
    'How much GPU infrastructure is required to fine-tune Llama / Gemini locally?',
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || userQuery;
    if (!textToSend.trim() || loading) return;

    const updatedConv = [
      ...conversation,
      { role: 'user' as const, text: textToSend },
    ];
    setConversation(updatedConv);
    setUserQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuery: textToSend,
          contextRegion: region,
          industryFocus: industry,
        }),
      });

      const data = await res.json();

      if (data.advisorOutput) {
        setConversation([
          ...updatedConv,
          {
            role: 'assistant',
            text: data.advisorOutput,
            details: data,
          },
        ]);
      } else {
        setConversation([
          ...updatedConv,
          {
            role: 'assistant',
            text: data.fallbackAdvisory || 'Our executive team is available to discuss your request in a direct briefing.',
          },
        ]);
      }
    } catch (err) {
      console.error('Advisor error:', err);
      setConversation([
        ...updatedConv,
        {
          role: 'assistant',
          text: `We recommend aligning your ${industry} architecture with ${region === 'KSA' ? 'NCA ECC & NDMO' : region === 'UAE' ? 'TDRA & ISR' : 'NIST 800-53 & HIPAA'} frameworks. Would you like to schedule an executive consultation with our lead strategists?`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/90 rounded-2xl max-w-4xl w-full h-[88vh] flex flex-col shadow-2xl text-slate-100 relative overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-slate-950 p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  AI Strategy & Technology Advisor
                </h3>
                <span className="text-[10px] font-mono uppercase bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded-full">
                  Gemini Enterprise AI
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Real-time C-level technology advisory for US, KSA, and UAE markets
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            id="close-ai-advisor-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Region, Industry & Direct Contact Ribbon */}
        <div className="bg-slate-900/90 border-b border-slate-800/80 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-slate-400 font-medium">Target Region:</span>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value as Region)}
                className="bg-slate-800 border border-slate-700 text-slate-200 rounded px-2 py-1 font-semibold focus:outline-none cursor-pointer"
                id="advisor-region-select"
              >
                <option value="US">🇺🇸 United States</option>
                <option value="KSA">🇸🇦 Saudi Arabia</option>
                <option value="UAE">🇦🇪 United Arab Emirates</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-slate-400 font-medium">Sector Context:</span>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 rounded px-2 py-1 font-semibold focus:outline-none cursor-pointer"
                id="advisor-industry-select"
              >
                <option value="Healthcare">Healthcare & EHR</option>
                <option value="Higher Education">Higher Ed & HPC</option>
                <option value="Government">Government & Public Sector</option>
                <option value="SMB">Commercial SMB</option>
                <option value="Hardware">Hardware & Infrastructure</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+14436085425" className="text-blue-400 font-mono font-bold hover:underline flex items-center gap-1">
              <span>📞 +1 (443) 608-5425</span>
            </a>
            <a href="mailto:shafiq.rahman@nexisai.us" className="text-emerald-400 font-mono text-[11px] hover:underline hidden sm:inline">
              ✉️ shafiq.rahman@nexisai.us
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] shadow transition-all cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* Conversation Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-950/60">
          {conversation.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-purple-900/60 border border-purple-700/60 flex items-center justify-center text-purple-300 shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-2xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none space-y-2'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.details && (
                  <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-400 space-y-2">
                    <div className="font-semibold text-purple-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Recommended Senior Consultant: {msg.details.recommendedConsultant}</span>
                    </div>
                    {msg.details.nextSteps && (
                      <div className="space-y-1 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                        <div className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">
                          Actionable Next Steps:
                        </div>
                        {msg.details.nextSteps.map((step: string, sIdx: number) => (
                          <div key={sIdx} className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                            <span className="text-blue-400">•</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-300 shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 text-slate-400 text-xs py-2">
              <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
              <span>Analyzing regional compliance ({region}) & synthesizing strategic advice...</span>
            </div>
          )}
        </div>

        {/* Quick Prompt Chips */}
        <div className="bg-slate-900 border-t border-slate-800/80 p-3 shrink-0 overflow-x-auto flex items-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
            Suggested Prompts:
          </span>
          {quickPrompts.map((prompt, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleSend(prompt)}
              disabled={loading}
              className="text-[11px] bg-slate-800 hover:bg-slate-700 border border-slate-700/80 text-slate-300 rounded-full px-3 py-1 whitespace-nowrap shrink-0 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder={`Ask an enterprise technology question (${industry} in ${region})...`}
              className="flex-1 bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-purple-500"
              id="advisor-user-input"
            />
            <button
              type="submit"
              disabled={loading || !userQuery.trim()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
              id="advisor-send-btn"
            >
              <span>Ask Advisor</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
