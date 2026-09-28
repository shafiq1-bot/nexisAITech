import React, { useState, useRef, useEffect } from 'react';
import {
  BrainCircuit,
  Send,
  User,
  Sparkles,
  ShieldCheck,
  Calendar,
  PhoneCall,
  CheckCircle2,
  Clock,
  ArrowRight,
  RotateCcw,
  Building2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestedPrompts?: string[];
  qualificationCard?: {
    intent: 'High Intent' | 'Qualified' | 'Nurture' | 'General';
    reason: string;
    recommendedStep: string;
  };
}

interface AIExecutiveAdvisorProps {
  onOpenConsultation: (subject?: string) => void;
  onOpenCalendar?: () => void;
  initialTopic?: string;
}

export const AIExecutiveAdvisor: React.FC<AIExecutiveAdvisorProps> = ({
  onOpenConsultation,
  onOpenCalendar,
  initialTopic,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Welcome. I am the Nexis AI Executive Advisor—an AI assistant grounded in the verified leadership methodology of Shafiq Rahman, MS, MBA, MCS, PMP® (former State CIO for Maryland Department of Transportation and former enterprise IT executive at University of Maryland, Baltimore).\n\nHow can I assist your executive team today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedPrompts: [
        'What does a Fractional CIO engagement look like?',
        'How does the 30-Day Executive Diagnostic work?',
        'How should healthcare systems govern clinical AI?',
        'We have a CIO vacancy—what are our interim options?',
      ],
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  useEffect(() => {
    if (initialTopic) {
      handleUserSendMessage(initialTopic);
    }
  }, [initialTopic]);

  const handleUserSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const response = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: textToSend,
          conversationHistory: messages.slice(-4).map((m) => `${m.sender}: ${m.text}`),
        }),
      });

      const data = await response.json();

      let answerText = data.advisorOutput || data.fallbackAdvisory;
      
      // Determine qualification intent based on user query keywords
      const queryLower = textToSend.toLowerCase();
      let intentCategory: 'High Intent' | 'Qualified' | 'Nurture' | 'General' = 'General';
      let qualificationReason = '';
      let recommendedStep = '';

      if (
        queryLower.includes('hire') ||
        queryLower.includes('cost') ||
        queryLower.includes('retainer') ||
        queryLower.includes('diagnostic') ||
        queryLower.includes('vacancy') ||
        queryLower.includes('schedule') ||
        queryLower.includes('consultation') ||
        queryLower.includes('proposal')
      ) {
        intentCategory = 'High Intent';
        qualificationReason = 'Inquiry indicates immediate executive leadership need, CIO vacancy, or diagnostic requirement.';
        recommendedStep = 'Schedule an introductory 20-minute executive briefing with Shafiq Rahman.';
      } else if (
        queryLower.includes('health') ||
        queryLower.includes('epic') ||
        queryLower.includes('university') ||
        queryLower.includes('higher ed') ||
        queryLower.includes('nist') ||
        queryLower.includes('audit') ||
        queryLower.includes('ai governance')
      ) {
        intentCategory = 'Qualified';
        qualificationReason = 'High alignment with Shafiq’s domain expertise in regulated healthcare, higher education, or NIST AI governance.';
        recommendedStep = 'Review the 30-Day Executive Diagnostic scope or take the CIO Maturity Assessment.';
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: answerText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedPrompts:
          intentCategory === 'High Intent'
            ? [
                'Schedule 20-minute conversation with Shafiq',
                'What are the deliverables of the 30-day diagnostic?',
                'How are retainer fees structured?',
              ]
            : [
                'How does Shafiq handle board-level reporting?',
                'Tell me about higher education research computing',
                'What is included in the AI Governance Sprint?',
              ],
        qualificationCard:
          intentCategory !== 'General'
            ? {
                intent: intentCategory,
                reason: qualificationReason,
                recommendedStep: recommendedStep,
              }
            : undefined,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      const fallbackMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: "Shafiq Rahman helps healthcare, higher education, and public-sector leaders turn technology risk and AI ambition into an executable portfolio without the cost or delay of a full-time CIO search. \n\nFor specific questions regarding your organization’s mandate, I recommend arranging a confidential 20-minute conversation directly with Shafiq.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleResetConversation = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'ai',
        text: "Conversation reset. I am ready to answer executive questions on Fractional CIO services, CIO advisory, AI governance, and technology modernization.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedPrompts: [
          'What does a Fractional CIO engagement look like?',
          'How does the 30-Day Executive Diagnostic work?',
          'How should healthcare systems govern clinical AI?',
          'We have a CIO vacancy—what are our interim options?',
        ],
      },
    ]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[700px] max-w-4xl mx-auto">
      
      {/* Header with Verified Disclosures */}
      <div className="bg-slate-950 p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">Nexis AI Executive Advisor</h3>
              <span className="text-[10px] font-mono uppercase bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                AI Intake & Qualification
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Grounded in the verified methodology of <strong>Shafiq Rahman, MS, MBA, MCS, PMP®</strong>
            </div>
          </div>
        </div>

        <button
          onClick={handleResetConversation}
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 p-2 rounded-lg hover:bg-slate-900 transition-colors"
          title="Reset conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Disclaimers & Ethics Banner */}
      <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
        <span>AI assistant for executive education & qualification · Does not provide formal legal/medical advice</span>
        <span className="text-amber-400 font-mono hidden md:inline">Verified Experience Only</span>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-900/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                  : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none shadow-md'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.text}</div>
              <div
                className={`text-[10px] mt-2 font-mono ${
                  msg.sender === 'user' ? 'text-slate-800' : 'text-slate-500'
                }`}
              >
                {msg.timestamp}
              </div>
            </div>

            {/* AI Qualification Guidance Card */}
            {msg.qualificationCard && (
              <div className="mt-3 max-w-[85%] bg-amber-950/40 border border-amber-500/30 rounded-xl p-3.5 space-y-2 text-xs text-amber-200">
                <div className="flex items-center justify-between">
                  <span className="font-mono uppercase font-bold text-[10px] bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
                    {msg.qualificationCard.intent}
                  </span>
                  <span className="text-[11px] text-slate-400">Advisory Intent Detected</span>
                </div>
                <p className="text-[11px] text-slate-300">{msg.qualificationCard.reason}</p>
                <div className="pt-2 border-t border-amber-800/60 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-amber-300">
                    Recommended: {msg.qualificationCard.recommendedStep}
                  </span>
                  <button
                    onClick={() => onOpenConsultation(`Executive Discussion via AI Advisor: ${msg.qualificationCard?.intent}`)}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Connect with Shafiq</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* Suggested Follow-up Prompts */}
            {msg.suggestedPrompts && (
              <div className="flex flex-wrap gap-2 mt-3 max-w-[85%]">
                {msg.suggestedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleUserSendMessage(prompt)}
                    className="text-left px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 hover:text-white transition-all cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {isThinking && (
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950 border border-slate-800 p-3 rounded-2xl w-fit">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span>Consulting verified CIO knowledge base...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-slate-950 p-4 border-t border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserSendMessage(inputValue);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about Fractional CIO retainers, 30-day diagnostics, AI governance, or Shafiq's experience..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isThinking}
            className="p-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold rounded-xl transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 px-1">
          <span>Confidential executive inquiry. Inquiries can be handed off directly to Shafiq Rahman.</span>
          <button
            onClick={() => onOpenConsultation('Direct Inquiry from AI Executive Advisor')}
            className="text-amber-400 hover:text-amber-300 font-semibold underline"
          >
            Skip AI & Request Meeting
          </button>
        </div>
      </div>

    </div>
  );
};
