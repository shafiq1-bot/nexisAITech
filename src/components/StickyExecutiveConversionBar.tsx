import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Phone, 
  ChevronUp, 
  ChevronDown, 
  X,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useExecutiveHeadshot } from '../lib/useExecutiveHeadshot';
import { PageId } from '../types';

interface StickyExecutiveConversionBarProps {
  onOpenScoping: () => void;
  onOpenSchedule: () => void;
  onNavigate: (pageId: PageId) => void;
}

export const StickyExecutiveConversionBar: React.FC<StickyExecutiveConversionBarProps> = ({
  onOpenScoping,
  onOpenSchedule,
  onNavigate,
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const headshotUrl = useExecutiveHeadshot();

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 transition-transform duration-300">
      {/* Minimized Pill Toggle */}
      {isMinimized ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 flex justify-end">
          <button
            onClick={() => setIsMinimized(false)}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all cursor-pointer border border-amber-400"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scope CIO Project / Call Shafiq</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Full Conversion Bar */
        <div className="bg-slate-950/95 backdrop-blur-md border-t border-amber-500/30 shadow-2xl px-4 py-3 sm:py-3.5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            
            {/* Left: Credential & Executive Spotlight */}
            <div className="flex items-center gap-3 text-left w-full md:w-auto">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400/80 shadow-md shrink-0">
                <img
                  src={headshotUrl}
                  alt="Shafiq Rahman, PMP®"
                  className="w-full h-full object-cover object-center pointer-events-none select-none"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white truncate">Shafiq Rahman, MS, MBA, MCS, PMP®</span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Q4 Advisory
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 truncate">
                  Former State CIO (MDOT) • Healthcare & Higher Ed Executive Advisor • NIST AI RMF
                </p>
              </div>
            </div>

            {/* Right: High-Converting Project Scoping & Call Actions */}
            <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-end">
              <button
                onClick={onOpenScoping}
                className="flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                id="sticky-bar-scope-project-btn"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Scope Project (60s)</span>
              </button>

              <button
                onClick={onOpenSchedule}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-600 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                id="sticky-bar-schedule-briefing-btn"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>20-Min Briefing</span>
              </button>

              <a
                href="tel:+14109347773"
                className="hidden lg:flex px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold text-xs rounded-xl items-center gap-1.5 transition-colors"
                title="Direct Executive Line"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-[11px]">(410) 934-7773</span>
              </a>

              {/* Minimize / Dismiss Controls */}
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Minimize bar"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Dismiss"
                aria-label="Dismiss executive conversion bar"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
