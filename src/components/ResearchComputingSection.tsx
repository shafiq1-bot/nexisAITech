import React from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Key,
  Layers,
  Microscope,
  Network,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface ResearchComputingSectionProps {
  onOpenConsultation: (subject?: string) => void;
}

export const ResearchComputingSection: React.FC<ResearchComputingSectionProps> = ({
  onOpenConsultation,
}) => {
  const hpcPillars = [
    {
      title: 'HPC GPU Clusters & SuperPODs',
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      desc: 'Architecture, procurement, and deployment of NVIDIA DGX H100/A100 GPU clusters and liquid-cooled high-density compute racks for university and national research labs.',
    },
    {
      title: 'Slurm Workload Manager & Scheduling',
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      desc: 'Fine-tuned Slurm job queue prioritization, multi-tenant GPU slice allocation, fair-share scheduling, and automated burst-to-cloud bursting policy engines.',
    },
    {
      title: 'High-Throughput Parallel Storage',
      icon: <HardDrive className="w-6 h-6 text-purple-400" />,
      desc: 'Direct-to-GPU memory DMA access via Lustre and IBM Spectrum Scale (GPFS) parallel file systems delivering 1+ TB/s I/O throughput for massive research datasets.',
    },
    {
      title: 'Scientific AI & LLM Fine-Tuning',
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      desc: 'Optimized PyTorch, TensorFlow, and NeMo frameworks for genomic sequencing, quantum chemistry simulation, climate modeling, and protein folding research.',
    },
    {
      title: 'Research Data Management & Lineage',
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      desc: 'FAIR (Findable, Accessible, Interoperable, Reusable) data principles execution, metadata tagging, automated backup, and long-term archival storage.',
    },
    {
      title: 'Research Cybersecurity & CMMC Enclaves',
      icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
      desc: 'NIST SP 800-171 Rev 2 and CMMC 2.0 compliant Controlled Unclassified Information (CUI) research enclaves safeguarding DoD, NIH, and NSF grant intellectual property.',
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Banner Header */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-8 md:p-12 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="lg:col-span-7 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Microscope className="w-3.5 h-3.5 text-blue-400" />
              Research Computing & HPC Practice
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              HPC Clusters, Slurm Orchestration & Scientific AI
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Supercharging scientific discovery across R1 research universities, medical research institutions, and national laboratories. We architect high-performance NVIDIA GPU clusters, Lustre parallel storage, and CMMC-compliant research enclaves.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Research Computing Audit')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Schedule HPC Modernization Audit</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative z-10 rounded-2xl overflow-hidden border border-purple-500/40 bg-slate-950 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                <span className="font-mono text-xs font-bold text-purple-300">NVIDIA H100 SuperPOD Matrix</span>
              </div>
              <span className="text-[10px] bg-purple-950 text-purple-300 font-mono font-bold px-2 py-0.5 rounded border border-purple-800">Liquid Cooled</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">GPU Nodes:</span>
                <span className="text-purple-400 font-bold">128x H100 SXM5</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Interconnect:</span>
                <span className="text-cyan-400 font-bold">Quantum-2 NDR 400G IB</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Parallel Filesystem:</span>
                <span className="text-emerald-400 font-bold">12PB Lustre NVMe @ 1TB/s</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800">
              <span className="text-emerald-400 font-bold">● Slurm Cluster Nominal</span>
              <span>R1 University Enclave</span>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Core Research Computing Capabilities
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Engineered specifically for heavy compute workloads in physics, bio-informatics, engineering, and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hpcPillars.map((p, idx) => (
              <div key={idx} className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all space-y-3">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 w-fit">{p.icon}</div>
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Compliance Banner */}
        <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-extrabold text-white">
              CMMC 2.0 & Federal Research Grant Cybersecurity Compliance
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Protect DoD, NIH, NSF, and Department of Energy research grant eligibility with isolated Controlled Unclassified Information (CUI) research enclaves mapped 100% to NIST SP 800-171 Rev 2 controls.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-300">
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
              <span className="text-emerald-400 font-bold block text-sm">SPRS Score 110/110</span>
              CMMC 2.0 Level 2 Ready
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
              <span className="text-blue-400 font-bold block text-sm">FIPS 140-2 Validated</span>
              Hardware Cryptography
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
              <span className="text-amber-400 font-bold block text-sm">InCommon / Shibboleth</span>
              Federated Identity Auth
            </div>
          </div>
        </div>

        {/* Executive CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/50 p-8 text-center space-y-6">
          <h3 className="text-2xl font-extrabold text-white">
            Accelerate Your Scientific Research Throughput
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Schedule an executive consultation with our Research Computing architects to optimize your Slurm job queues and GPU cluster topology.
          </p>
          <button
            onClick={() => onOpenConsultation('Schedule Research Computing Consultation')}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg transition-all text-xs uppercase tracking-wider"
          >
            Schedule Research Computing Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
