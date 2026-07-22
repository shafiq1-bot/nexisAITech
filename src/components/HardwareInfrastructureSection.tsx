import React from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  HardDrive,
  Network,
  Power,
  Router,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface HardwareInfrastructureSectionProps {
  onOpenConsultation: (subject?: string) => void;
}

export const HardwareInfrastructureSection: React.FC<HardwareInfrastructureSectionProps> = ({
  onOpenConsultation,
}) => {
  const hardwarePartners = [
    { name: 'Cisco Systems', tier: 'Gold Enterprise Partner', tech: 'Catalyst Core, ACI Software-Defined Networking, SD-WAN Routers' },
    { name: 'Dell Technologies', tier: 'Titanium Direct Partner', tech: 'PowerEdge AI Servers, PowerStore All-Flash Storage, Isilon' },
    { name: 'HPE (Hewlett Packard Enterprise)', tier: 'Platinum Partner', tech: 'ProLiant Compute, Cray Supercomputers, GreenLake Cloud' },
    { name: 'NVIDIA Enterprise', tier: 'Elite Compute Partner', tech: 'DGX H100/A100 SuperPODs, HGX Systems, Mellanox Quantum InfiniBand' },
    { name: 'Nutanix', tier: 'Enterprise Cloud Partner', tech: 'Hyperconverged Infrastructure (HCI), AHV Hypervisor, Unify Storage' },
    { name: 'VMware by Broadcom', tier: 'Pinnacle Partner', tech: 'vSphere Enterprise Plus, vSAN, NSX Network Micro-segmentation' },
    { name: 'Lenovo Data Center', tier: 'Executive Partner', tech: 'ThinkSystem High-Density Compute Racks, Neptune Liquid Cooling' },
    { name: 'Palo Alto Networks', tier: 'Innovator Partner', tech: 'PA-5400 Series Next-Gen Firewalls, Panorama Security Management' },
  ];

  const practicePillars = [
    {
      title: 'Data Center Modernization & Consolidation',
      icon: <Server className="w-6 h-6 text-blue-400" />,
      desc: 'Rack density optimization, liquid cooling retrofits, PUE power reduction, and physical migration of enterprise data centers.',
    },
    {
      title: 'Core & Edge Network Architecture (Cisco / Arista)',
      icon: <Network className="w-6 h-6 text-emerald-400" />,
      desc: '100G/400G spine-leaf data center fabrics, SD-WAN branch interconnections, and Zero Trust micro-segmentation using Cisco ACI and Palo Alto NGFW.',
    },
    {
      title: 'Hyperconverged Infrastructure (HCI) & SAN Storage',
      icon: <HardDrive className="w-6 h-6 text-purple-400" />,
      desc: 'Replacing legacy SAN storage arrays with Nutanix HCI, Dell PowerStore, and Pure Storage NVMe all-flash systems for sub-millisecond database latency.',
    },
    {
      title: 'AI GPU Rack Architecture & Power Density',
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      desc: 'Custom high-density GPU server rack design (40kW+ per rack), direct-to-chip liquid cooling systems, and redundant PDU power delivery.',
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Banner Header */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="lg:col-span-7 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              Hardware & Systems Infrastructure Practice
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Data Centers, Cisco Networking, Dell, HPE & GPU Systems
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Hardware architecture advisory and procurement backed by direct tier-1 OEM partnerships. We design, procure, rack, configure, and maintain high-density compute, SAN storage arrays, and high-speed network backbones for enterprise, healthcare, and higher education clients.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Hardware Architecture Review')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Request Hardware Architecture Review</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative z-10 rounded-2xl overflow-hidden border border-blue-500/40 bg-slate-950 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-400" />
                <span className="font-mono text-xs font-bold text-blue-300">Enterprise Hardware Architecture</span>
              </div>
              <span className="text-[10px] bg-blue-950 text-blue-300 font-mono font-bold px-2 py-0.5 rounded border border-blue-800">40kW Density</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Core Network:</span>
                <span className="text-cyan-400 font-bold">Cisco ACI & Catalyst 9000</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">AI Server Racks:</span>
                <span className="text-purple-400 font-bold">Dell PowerEdge XE9680 AI</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Storage SAN/NAS:</span>
                <span className="text-emerald-400 font-bold">Dell PowerStore & Isilon</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800">
              <span className="text-emerald-400 font-bold">● Tier IV Data Center Active</span>
              <span>100Gbps Backbone</span>
            </div>
          </div>
        </div>

        {/* Practice Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Hardware & Physical Systems Expertise
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Turnkey engineering from physical rack placement and power distribution to hypervisor provisioning and fiber optic cabling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practicePillars.map((p, idx) => (
              <div key={idx} className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">{p.icon}</div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tier-1 OEM Hardware Partners */}
        <div className="space-y-8 bg-slate-900/90 rounded-3xl p-8 md:p-12 border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <h3 className="text-xl md:text-2xl font-extrabold text-white">
              Tier-1 Enterprise Hardware Partner Ecosystem
            </h3>
            <p className="text-slate-300 text-sm md:text-base">
              Direct access to discounted enterprise hardware pricing, custom bill-of-materials engineering, and priority manufacturer warranty support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hardwarePartners.map((partner, idx) => (
              <div key={idx} className="bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-blue-400">{partner.tier}</div>
                <h4 className="text-base font-bold text-white">{partner.name}</h4>
                <p className="text-xs text-slate-400 leading-normal">{partner.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/50 p-8 text-center space-y-6">
          <h3 className="text-2xl font-extrabold text-white">
            Modernize Your Data Center & Hardware Infrastructure
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Schedule a hardware architectural review with our engineering team to design high-performance compute and storage systems.
          </p>
          <button
            onClick={() => onOpenConsultation('Schedule Hardware Consultation')}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider"
          >
            Schedule Hardware Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
