import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileCheck2, 
  TrendingUp, 
  ShieldCheck, 
  RefreshCw, 
  Boxes, 
  Code2, 
  Terminal,
  Globe,
  Zap,
  Server,
  Workflow
} from 'lucide-react';
import { Region } from '../types';

interface ERPModernizationSectionProps {
  currentRegion?: Region;
  onOpenConsultation: (subject?: string) => void;
  onOpenBookAudit?: () => void;
}

export const ERPModernizationSection: React.FC<ERPModernizationSectionProps> = ({
  currentRegion = 'US',
  onOpenConsultation,
  onOpenBookAudit,
}) => {
  const [activePlatform, setActivePlatform] = useState<'sap' | 'oracle' | 'workday' | 'dynamics'>('sap');
  const [activeDemoAgent, setActiveDemoAgent] = useState<'invoice' | 'cashflow' | 'askerp'>('invoice');

  const platforms = {
    sap: {
      name: 'SAP S/4HANA Clean-Core Architecture',
      tagline: 'Decouple customizations into cloud microservices with zero upgrade breakages',
      badge: 'RISE with SAP & BTP Ready',
      challenges: [
        'Massive technical debt in custom ABAP code (Z-programs) blocking cloud upgrades',
        'Complex 10+ day monthly close cycles across global multi-currency subsidiaries',
        'Fragmented master data leading to supplier payment delays and invoice exceptions',
      ],
      solutions: [
        'Clean-Core Decoupling: Offloading custom logic to SAP BTP and AWS/Azure serverless containers',
        'Autonomous AI Invoicing: 3-way matching of PO, Goods Receipt, and Vendor Invoices via vision models',
        'Continuous General Ledger reconciliation cutting financial close to under 48 hours',
      ],
      metrics: [
        { label: 'AP Processing Time', value: '-82%' },
        { label: 'Close Cycle Speed', value: '48 Hrs' },
        { label: 'Clean Core Score', value: '98%' },
      ],
    },
    oracle: {
      name: 'Oracle Cloud ERP & NetSuite Integration',
      tagline: 'Automated multi-entity consolidations, autonomous tax, and real-time cash analytics',
      badge: 'OCI Generative AI & Autonomous DB',
      challenges: [
        'Manual spreadsheet workarounds to reconcile intercompany transactions',
        'Stale reporting pipelines leaving CFOs without daily working capital visibility',
        'High license costs for underutilized ERP modules and legacy on-prem databases',
      ],
      solutions: [
        'Real-time automated intercompany elimination and multi-ledger consolidation pipelines',
        'Autonomous cash flow forecasting models predicting 90-day liquidity variances with 96% accuracy',
        'License rationalization reducing annual Oracle recurring maintenance fees by up to 35%',
      ],
      metrics: [
        { label: 'Intercompany Close', value: 'Real-Time' },
        { label: 'Cash Forecast Accuracy', value: '96.4%' },
        { label: 'License Savings', value: '$1.8M/yr' },
      ],
    },
    workday: {
      name: 'Workday HCM & Financials Orchestration',
      tagline: 'Unified talent intelligence, continuous payroll verification, and zero manual spreadsheets',
      badge: 'Workday Extend & Prism Analytics',
      challenges: [
        'Disconnected recruiting, headcount planning, and finance budgeting spreadsheets',
        'Payroll calculation discrepancies and compliance reporting risks across jurisdictions',
        'Slow vendor onboarding and procurement authorization bottlenecks',
      ],
      solutions: [
        'Automated headcount-to-budget orchestration linking Workday HCM with enterprise general ledgers',
        'Real-time continuous payroll audit agent flagging anomalies prior to disbursement runs',
        'Self-service procurement AI agent validating supplier contracts and compliance credentials',
      ],
      metrics: [
        { label: 'Payroll Exception Rate', value: '0.02%' },
        { label: 'Vendor Onboarding', value: '3 Days' },
        { label: 'Budget Sync Latency', value: '<5 Min' },
      ],
    },
    dynamics: {
      name: 'Microsoft Dynamics 365 Finance & Supply Chain',
      tagline: 'Copilot Studio agent orchestration across global warehouses, logistics, and inventory',
      badge: 'Azure OpenAI & Dataverse Architecture',
      challenges: [
        'Inventory stockouts and supply chain blind spots across transatlantic freight channels',
        'Manual purchase order creation and slow customer quote turnarounds',
        'Siloed CRM and ERP databases requiring duplicate data entry',
      ],
      solutions: [
        'Predictive AI supply chain disruption agent factoring weather, tariffs, and carrier backlogs',
        'Autonomous RFQ (Request for Quote) parsing directly from email into approved D365 sales orders',
        'Unified Dataverse lakehouse syncing CRM customer intelligence with real-time manufacturing capacity',
      ],
      metrics: [
        { label: 'Stockout Reduction', value: '-65%' },
        { label: 'Quote-to-Order Speed', value: '4x' },
        { label: 'Data Redundancy', value: '0%' },
      ],
    },
  };

  const selectedPlatform = platforms[activePlatform];

  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="erp-modernization">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Enterprise ERP Modernization & AI Orchestration</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Transform Legacy Core Systems into Autonomous Engines
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Led by former enterprise CIOs and senior ERP architects. We modernize SAP S/4HANA, Oracle Cloud, NetSuite, Workday, and Microsoft Dynamics 365, turning slow transaction ledgers into agile, AI-orchestrated platforms for Americas and Europe.
          </p>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {(['sap', 'oracle', 'workday', 'dynamics'] as const).map((plat) => (
            <button
              key={plat}
              onClick={() => setActivePlatform(plat)}
              className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 cursor-pointer ${
                activePlatform === plat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400/50'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>{platforms[plat].name.split(' ')[0]} {platforms[plat].name.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Active Platform Feature Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950 text-blue-300 border border-blue-800 text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                {selectedPlatform.badge}
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedPlatform.name}
                </h2>
                <p className="text-sm text-slate-300 mt-1 font-medium">
                  {selectedPlatform.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Engineered Solutions & Autonomous Workflows
                </h3>
                <div className="space-y-3">
                  {selectedPlatform.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation(`${selectedPlatform.name} Modernization Advisory`)}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <span>Schedule ERP Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {onOpenBookAudit && (
                  <button
                    onClick={onOpenBookAudit}
                    className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl transition-all text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Book 14-Day Clean-Core Audit</span>
                  </button>
                )}
              </div>
            </div>

            {/* Metrics & Architecture Preview */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Quantified Impact Benchmarks
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedPlatform.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800/80 text-center">
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-300 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Architecture Blueprint Callout */}
              <div className="space-y-3 bg-slate-900/40 border border-slate-800/80 rounded-xl p-4">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold">
                  <Workflow className="w-4 h-4" />
                  <span>Nexis AI Clean-Core Integration Stack</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300 font-mono">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">1. ERP General Ledger</span>
                    <span className="text-emerald-400">Clean Core Protected</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">2. Autonomous AI Agents</span>
                    <span className="text-cyan-400">Confidential Enclave</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">3. Integration Mesh</span>
                    <span className="text-indigo-400">Event-Driven Kafka / FHIR</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Autonomous ERP Agents Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Autonomous AI Agents for Core ERP Workflows
            </h2>
            <p className="text-sm text-slate-400">
              Zero manual spreadsheet intervention. Enterprise-grade models operating directly across your ledger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Agent 1 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Autonomous 3-Way Match Agent</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ingests thousands of multi-format supplier invoices daily via multimodal OCR. Automatically correlates PO numbers, goods receipts, and contract terms. Reconciles 92% of invoices touchless.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Cuts AP cost from $14.20 to $1.15 per invoice</span>
              </div>
            </div>

            {/* Agent 2 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Predictive Cash Flow & Treasury Agent</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aggregates real-time accounts receivable aging, customer payment behavior patterns, and pending AP disbursements to forecast 30/60/90-day liquidity variances with 96% confidence intervals.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Optimizes working capital yields by 22%</span>
              </div>
            </div>

            {/* Agent 3 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-purple-500/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">"Ask ERP" Conversational BI Agent</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Allows C-suite executives to ask questions in plain English or Arabic: <em>"What is our EMEA operating margin variance vs budget, and which vendor accounts drove the delta?"</em> Generates audit-backed visual charts in seconds.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Zero SQL or BI report drafting bottleneck</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Stack Enterprise Web Engineering Practice */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 rounded-3xl border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>Full-Stack Web & Cloud Application Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Enterprise-Grade Web Portals, Microservices & Event Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We design and engineer high-concurrency, secure digital applications for global Fortune 1000 and institutional clients. Built on modern React/Next.js, TypeScript, and micro-frontend architectures with rigorous DevSecOps pipelines.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-white block">Enterprise Portals</span>
              <span className="text-[11px] text-slate-400 block mt-1">Next.js 15, React 19, TypeScript, WCAG AA, Sub-second rendering</span>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-white block">API & Integration Mesh</span>
              <span className="text-[11px] text-slate-400 block mt-1">GraphQL, gRPC, REST, Apache Kafka event streams, Kong/Apigee Gateways</span>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-white block">Cloud-Native Kubernetes</span>
              <span className="text-[11px] text-slate-400 block mt-1">AWS EKS, Azure AKS, Google Cloud GKE, Terraform IaC, ArgoCD GitOps</span>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-white block">Sovereign Confidential Enclaves</span>
              <span className="text-[11px] text-slate-400 block mt-1">AWS Nitro, Azure Confidential, zero public model data leakage</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
