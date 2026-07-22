import React, { useState, useEffect, useRef } from 'react';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Lock, 
  Network, 
  Terminal,
  ChevronRight,
  Sliders,
  Layers
} from 'lucide-react';
import { PageId } from '../types';

interface AIVisualShowcaseProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation?: () => void;
}

export const AIVisualShowcase: React.FC<AIVisualShowcaseProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'agents' | 'security' | 'hpc' | 'advisory'>('agents');
  const [agentCount, setAgentCount] = useState(148);
  const [threatCount, setThreatCount] = useState(99.98);
  const [gpuLoad, setGpuLoad] = useState(84);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animated particle & node matrix on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string }> = [];
    const colors = ['#38bdf8', '#818cf8', '#34d399', '#c084fc'];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background grid
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Periodic subtle telemetry update
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentCount((prev) => 140 + Math.floor(Math.random() * 15));
      setGpuLoad((prev) => 80 + Math.floor(Math.random() * 12));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl group">
      {/* Dynamic Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
      />

      {/* Top Telemetry Header Ribbon */}
      <div className="relative z-10 bg-slate-900/90 border-b border-slate-800/80 px-6 py-3 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              SYSTEM STATUS: ONLINE
            </span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Nexis Agentic Core v4.8 • US & Global Sovereign
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Agents: <strong className="text-white">{agentCount} Active</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Trust: <strong className="text-white">{threatCount}% Blocked</strong></span>
          </div>
          <div className="flex items-center gap-1.5 hidden md:flex">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>GPU Load: <strong className="text-white">{gpuLoad}%</strong></span>
          </div>
        </div>
      </div>

      {/* Main Feature Navigation Tabs */}
      <div className="relative z-10 px-6 pt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveTab('agents')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
            activeTab === 'agents'
              ? 'bg-blue-950/90 border-cyan-500/80 text-white shadow-lg shadow-cyan-500/10'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
          }`}
        >
          <div className={`p-2 rounded-xl shrink-0 ${activeTab === 'agents' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-cyan-400">01. Autonomous AI</div>
            <div className="text-sm font-bold text-white mt-0.5">Agentic Workflows</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
            activeTab === 'security'
              ? 'bg-emerald-950/90 border-emerald-500/80 text-white shadow-lg shadow-emerald-500/10'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
          }`}
        >
          <div className={`p-2 rounded-xl shrink-0 ${activeTab === 'security' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'}`}>
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-400">02. Zero Trust</div>
            <div className="text-sm font-bold text-white mt-0.5">Cyber Command</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('hpc')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
            activeTab === 'hpc'
              ? 'bg-purple-950/90 border-purple-500/80 text-white shadow-lg shadow-purple-500/10'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
          }`}
        >
          <div className={`p-2 rounded-xl shrink-0 ${activeTab === 'hpc' ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-800 text-slate-400'}`}>
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-purple-400">03. High Performance</div>
            <div className="text-sm font-bold text-white mt-0.5">HPC & GPU Clusters</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('advisory')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
            activeTab === 'advisory'
              ? 'bg-amber-950/90 border-amber-500/80 text-white shadow-lg shadow-amber-500/10'
              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
          }`}
        >
          <div className={`p-2 rounded-xl shrink-0 ${activeTab === 'advisory' ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'}`}>
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400">04. C-Suite Leadership</div>
            <div className="text-sm font-bold text-white mt-0.5">Advisory & Consulting</div>
          </div>
        </button>
      </div>

      {/* Tab Content Display Area */}
      <div className="relative z-10 p-6 md:p-8">
        {activeTab === 'agents' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Enterprise Autonomous Agents
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Multi-Agent Orchestration & Enterprise RAG Pipelines
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Deploy autonomous AI worker agents inside secure, air-gapped corporate VPC enclaves. Our custom agentic frameworks automate complex operational workflows across Epic Systems EHR, SAP ERP, Microsoft 365, and Oracle Cloud with zero data leakage.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Sovereign Local LLM Hosting</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Vector RAG Knowledge Graphs</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Sub-100ms Inference Latency</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>RBAC & Audit Trail Logging</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('service-detail', 'ai-transformation')}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Explore AI Practice</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Vector Visual Architecture Box */}
            <div className="lg:col-span-5 bg-slate-950 border border-cyan-500/30 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-4 flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4" /> Agentic Flow Schema</span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">Air-Gapped</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-slate-200 font-bold">Client Query / API</span>
                  </div>
                  <span className="text-cyan-400">REST / gRPC</span>
                </div>

                <div className="pl-6 text-slate-600 flex items-center gap-1">
                  <div className="w-0.5 h-4 bg-cyan-500/50"></div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-cyan-300" />
                    <span className="text-cyan-100 font-bold">Nexis AI Router & Guardrails</span>
                  </div>
                  <span className="text-cyan-300 font-bold">NIST Compliant</span>
                </div>

                <div className="pl-6 text-slate-600 flex items-center gap-1">
                  <div className="w-0.5 h-4 bg-cyan-500/50"></div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 text-center">
                    Agent A: Data RAG
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 text-center">
                    Agent B: EHR / SAP
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Zero Trust Architecture
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Continuous Identity Verification & Threat Prevention
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Re-architecting enterprise perimeters into micro-segmented Zero Trust enclaves. Engineered in compliance with NIST SP 800-53 Rev 5, CMMC 2.0 Level 2, and Saudi NCA ECC benchmarks to guarantee zero unauthorized lateral movement.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Micro-segmentation (Palo Alto)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SIEM / XSOAR Automated Playbooks</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CMMC & FedRAMP Enclaves</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Biometric Multi-Factor Auth</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('service-detail', 'cybersecurity')}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Explore Cybersecurity Practice</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-emerald-500/30 rounded-2xl p-5 shadow-2xl relative">
              <div className="text-xs font-mono font-bold text-emerald-400 mb-4 flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" /> Zero Trust Security Enclave</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">100% Audit Pass</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-600/70 text-emerald-200 flex items-center justify-between">
                  <span>Identity Policy (Entra ID)</span>
                  <span className="text-emerald-400 font-bold">PASSED</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-600/70 text-emerald-200 flex items-center justify-between">
                  <span>Device Health Attestation</span>
                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-600/70 text-emerald-200 flex items-center justify-between">
                  <span>Encrypted Channel (TLS 1.3)</span>
                  <span className="text-emerald-400 font-bold">ENCRYPTED</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hpc' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> Research Computing & HPC
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                NVIDIA GPU SuperPODs & Parallel Slurm Clusters
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Designing, deploying, and optimizing multi-petaflop research computing clusters. Engineered for R1 university medical research, genomic sequencing, and climate science labs with liquid-cooled NVIDIA H100/A100 racks and Lustre parallel storage.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Slurm Workload Scheduling</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Lustre & IBM Spectrum Scale GPFS</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>InfiniBand 400Gb/s Interconnects</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Liquid-Cooled 40kW Rack Density</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('research-computing')}
                  className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Explore Research Computing Practice</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-purple-500/30 rounded-2xl p-5 shadow-2xl relative">
              <div className="text-xs font-mono font-bold text-purple-400 mb-4 flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5"><Server className="w-4 h-4" /> HPC Cluster Matrix</span>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800">Multi-Petaflop</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">GPU Compute Nodes</span>
                  <span className="text-purple-400 font-bold">128x NVIDIA H100</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Interconnect Speed</span>
                  <span className="text-purple-400 font-bold">400Gbps InfiniBand</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Parallel Storage</span>
                  <span className="text-purple-400 font-bold">12 PetaBytes NVMe</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'advisory' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-amber-400" /> Executive C-Suite Advisory & Strategy
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Technology Advisory & Strategy Consulting Led by Former CIOs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nexis AI provides executive advisory, IT strategy consulting, and high-performance technology services for C-suite leaders, university leadership, and healthcare directors. With experience managing $250M+ annual IT operating and capital budgets, we bridge fiduciary oversight with world-class engineering execution.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>IT Portfolio TIME Matrix Rationalization</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Capital & Operating Budget Optimization</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Sovereign KSA Vision 2030 & UAE Alignment</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>M&A Technology Due Diligence</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('leadership')}
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <span>View Leadership Profile & Resume</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-amber-500/30 rounded-2xl p-5 shadow-2xl relative">
              <div className="text-xs font-mono font-bold text-amber-400 mb-4 flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1.5"><Sliders className="w-4 h-4" /> Advisory Impact Framework</span>
                <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">20+ Yrs CIO</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Capital Budgets Managed</span>
                  <span className="text-amber-400 font-bold">$250M+ Annual</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">OPEX Friction Reduced</span>
                  <span className="text-amber-400 font-bold">38% Average</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Global Markets Served</span>
                  <span className="text-amber-400 font-bold">US, Saudi Arabia, UAE</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
