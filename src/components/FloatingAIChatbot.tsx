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
  Minimize2, 
  Maximize2,
  ChevronDown
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
}

export const FloatingAIChatbot: React.FC<FloatingAIChatbotProps> = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Welcome to Nexis AI! I am your Enterprise AI & Cybersecurity Advisor. How can I assist your organization today with AI Agents, Zero Trust, or Healthcare EHR/FHIR compliance?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

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
          companyContext: 'Nexis AI — Enterprise AI Agents, Zero Trust Security, Healthcare EHR/FHIR, and High Performance Computing. US HQ in Owings Mills MD.',
        }),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      const botMsgText =
        data.advice ||
        'Nexis AI specializes in custom LLM integration, Zero Trust cybersecurity (NIST 800-53 / HIPAA), and EHR interoperability. Feel free to call or text our executive team directly at (443) 608-5425.';

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botMsgText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Thank you for contacting Nexis AI. For instant assistance, please text our executive line directly at ${mainUSASMS} or call ${mainUSAPhone}. You can also email us at ${primaryContactEmail}.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'How does Nexis AI implement Zero Trust for HIPAA/NIST?',
    'What AI Agent capabilities do you build for healthcare?',
    'Tell me about your Owings Mills MD HQ and US Market services.',
    'How do I schedule an executive AI audit?',
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Floating Toggle Button when Closed */}
      {!isOpen && (
        <div className="flex flex-col items-end gap-2">
          {/* Direct Text Hotline Quick Link Bubble */}
          <a
            href={`sms:${mainUSASMS}?body=Hello%20Nexis%20AI%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services.`}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/50 text-emerald-400 text-xs font-bold shadow-lg hover:bg-slate-800 transition-all group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Text Us: {mainUSASMS}</span>
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-2xl shadow-blue-900/50 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-blue-400/50"
            aria-label="Open Nexis AI Assistant"
          >
            <div className="relative">
              <Bot className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-pulse" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-extrabold tracking-wide uppercase leading-tight">Nexis AI Chatbot</div>
              <div className="text-[10px] text-blue-200">Ask AI or Text (443) 608-5425</div>
            </div>
          </button>
        </div>
      )}

      {/* Expanded Chat Widget */}
      {isOpen && (
        <div className="w-[360px] sm:w-[420px] h-[580px] max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Chat Header */}
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
                  <span>US HQ: (443) 608-5425</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">SMS: {mainUSASMS}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Minimize"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Contact & Action Ribbon */}
          <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
            <a
              href={`sms:${mainUSASMS}?body=Hello%20Nexis%20AI%20Team%2C%20I%20am%20texting%20you%20from%20the%20website%20chatbot.`}
              className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Text SMS Hotline ({mainUSASMS})</span>
            </a>
            <a
              href={`tel:${mainUSAPhone.replace(/[^0-9+]/g, '')}`}
              className="text-blue-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {mainUSAPhone}</span>
            </a>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/50">
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
              <div className="flex items-center gap-2 text-xs text-blue-400 bg-slate-800/60 p-3 rounded-2xl w-max border border-slate-700">
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
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask Nexis AI or type question..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
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
        </div>
      )}
    </div>
  );
};
