import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { partnersData } from '../data/companyData';

// Helper function to render authentic SVG logos for partner brands
const renderPartnerLogo = (logoId?: string) => {
  switch (logoId) {
    case 'nvidia':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-[#76B900] fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
          </svg>
          <span className="font-extrabold tracking-wider text-sm text-[#76B900]">NVIDIA</span>
        </div>
      );
    case 'microsoft':
      return (
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
            <div className="bg-[#F25022] w-2.5 h-2.5"></div>
            <div className="bg-[#7FBA00] w-2.5 h-2.5"></div>
            <div className="bg-[#00A4EF] w-2.5 h-2.5"></div>
            <div className="bg-[#FFB900] w-2.5 h-2.5"></div>
          </div>
          <span className="font-bold tracking-tight text-sm text-white">Microsoft</span>
        </div>
      );
    case 'aws':
      return (
        <div className="flex items-center gap-1.5">
          <svg className="w-8 h-7 text-[#FF9900]" viewBox="0 0 50 30" fill="currentColor">
            <path d="M11.5 12.5c0 1.8-.4 3.1-1.3 4.1-.9 text-center-1.1 2.3-1.1 3.5 0 2.2.8 3.3 2.5 3.3 1.1 0 2-.4 2.8-1.2v2c-.7.6-1.8.9-3.2.9-3.1 0-4.8-1.9-4.8-5.3 0-3.6 1.9-5.6 5-5.6 1.1 0 2.1.3 2.8.9v2.5z" />
            <path d="M0 24c12 7 26 7 38 0-1-1-3-2-5-2-9 5-20 5-29 0-1 0-3 1-4 2z" />
          </svg>
          <span className="font-black text-sm text-[#FF9900]">aws</span>
        </div>
      );
    case 'googlecloud':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <span className="font-bold text-sm text-slate-100">Google Cloud</span>
        </div>
      );
    case 'cisco':
      return (
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-0.5 h-6">
            <div className="w-1 bg-[#049FD9] h-2"></div>
            <div className="w-1 bg-[#049FD9] h-4"></div>
            <div className="w-1 bg-[#049FD9] h-6"></div>
            <div className="w-1 bg-[#049FD9] h-4"></div>
            <div className="w-1 bg-[#049FD9] h-2"></div>
          </div>
          <span className="font-extrabold text-sm text-[#049FD9] tracking-wider">CISCO</span>
        </div>
      );
    case 'paloalto':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-tr from-[#FA582D] to-[#FF2A00] rounded-md rotate-45 flex items-center justify-center shadow">
            <div className="w-2.5 h-2.5 bg-slate-950 rounded-sm"></div>
          </div>
          <span className="font-bold text-xs text-[#FA582D] uppercase tracking-wider">Palo Alto</span>
        </div>
      );
    case 'dell':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 border-2 border-[#007DB8] rounded-full flex items-center justify-center font-black text-[10px] text-[#007DB8] leading-none">
            DELL
          </div>
          <span className="font-bold text-xs text-white">Dell Technologies</span>
        </div>
      );
    case 'hpe':
      return (
        <div className="flex items-center gap-2">
          <div className="w-7 h-3.5 border-2 border-[#01A781] bg-[#01A781]/10 flex items-center justify-center">
            <div className="w-3 h-1 bg-[#01A781]"></div>
          </div>
          <span className="font-bold text-xs text-[#01A781]">Hewlett Packard</span>
        </div>
      );
    case 'epic':
      return (
        <div className="flex items-center gap-1.5">
          <span className="font-black text-base text-[#D0021B] italic tracking-tighter">Epic</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Healthcare</span>
        </div>
      );
    case 'vmware':
      return (
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1">
            <div className="w-3.5 h-3.5 bg-[#607D8B] rounded-sm opacity-80"></div>
            <div className="w-3.5 h-3.5 bg-[#009688] rounded-sm opacity-90"></div>
          </div>
          <span className="font-bold text-xs text-slate-200">vmware</span>
        </div>
      );
    case 'nutanix':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-[#70BE3B] clip-path-polygon flex items-center justify-center font-bold text-[10px] text-slate-950 rounded-sm">
            N
          </div>
          <span className="font-bold text-xs text-[#70BE3B]">NUTANIX</span>
        </div>
      );
    case 'snowflake':
      return (
        <div className="flex items-center gap-1.5">
          <svg className="w-6 h-6 text-[#29B5E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
          </svg>
          <span className="font-bold text-xs text-[#29B5E8]">snowflake</span>
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-1.5">
          <Award className="w-5 h-5 text-blue-400" />
          <span className="font-bold text-xs text-white">Enterprise Partner</span>
        </div>
      );
  }
};

export const PartnerEcosystem: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800 px-3.5 py-1 rounded-full">
            Certified Alliance Network
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Global Technology Partner Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Nexis AI holds elite consulting certifications, gold integration privileges, and sovereign cloud authorization with the world’s leading technology innovators.
          </p>
        </div>

        {/* Dynamic Partner Logo Ribbon Showcase */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl overflow-hidden">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 text-center mb-6">
            Authorized Enterprise Solution Provider & Certified Integrator
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-90 hover:opacity-100 transition-opacity">
            {partnersData.map((partner, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col items-center justify-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-950 transition-all group"
              >
                <div className="scale-90 group-hover:scale-100 transition-transform">
                  {renderPartnerLogo(partner.logoId)}
                </div>
                <span className="text-[10px] text-slate-400 font-mono mt-2 text-center truncate max-w-full">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Partner Practice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnersData.map((partner, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 hover:shadow-xl hover:shadow-blue-900/10 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header with Logo & Tier */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="group-hover:translate-x-0.5 transition-transform">
                    {renderPartnerLogo(partner.logoId)}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase bg-blue-950/90 text-blue-300 border border-blue-800/80 px-2.5 py-1 rounded-md">
                    {partner.tier}
                  </span>
                </div>

                {/* Badge & Domain */}
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{partner.badge}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Bottom Footer Note */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Verified Practice</span>
                <span className="text-blue-400 group-hover:underline">Explore Architecture &rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

