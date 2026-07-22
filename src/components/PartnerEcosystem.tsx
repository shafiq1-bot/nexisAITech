import React from 'react';
import { ShieldCheck, Cpu, Cloud, CheckCircle2 } from 'lucide-react';
import { partnersData } from '../data/companyData';

export const PartnerEcosystem: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1 rounded-full">
            Alliance & Alliances
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
            Global Technology Partner Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            We hold certified elite consulting statuses with global enterprise technology leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnersData.map((partner, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800/90 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white font-sans">{partner.name}</h3>
                  <span className="text-[10px] font-mono uppercase bg-blue-950 text-blue-300 border border-blue-900 px-2 py-0.5 rounded">
                    {partner.tier}
                  </span>
                </div>

                <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{partner.badge}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
