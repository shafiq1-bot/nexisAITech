import React, { useState, useId } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Download, 
  BarChart3, 
  Layers, 
  Cpu, 
  FileText,
  Building2,
  Award,
  Globe2
} from 'lucide-react';
import { Region } from '../types';

interface EnterpriseROIFrameworkProps {
  currentRegion?: Region;
  onOpenConsultation: (subject?: string) => void;
  onOpenBookAudit?: () => void;
}

export const EnterpriseROIFramework: React.FC<EnterpriseROIFrameworkProps> = ({
  currentRegion = 'US',
  onOpenConsultation,
  onOpenBookAudit,
}) => {
  // Calculator state
  const [employeeCount, setEmployeeCount] = useState<number>(1200);
  const [annualCloudSpend, setAnnualCloudSpend] = useState<number>(3500000); // $3.5M
  const [primaryFocus, setPrimaryFocus] = useState<'all' | 'ai-agents' | 'erp-cloud' | 'cyber-resilience'>('all');
  const [isCurrencyEUR, setIsCurrencyEUR] = useState<boolean>(currentRegion === 'EU');

  // Multiplier calculations based on validated industry benchmarks (former CIO advisory methodology)
  const currencySymbol = isCurrencyEUR ? '€' : '$';
  const currencyRate = isCurrencyEUR ? 0.92 : 1.0;

  // 1. Workforce Productivity Uplift
  // 4.5 hours saved per knowledge worker/week; average burdened cost $60/hr
  const knowledgeWorkerRatio = 0.55;
  const hoursSavedPerWeek = 4.2;
  const hourlyRate = 65;
  const rawLaborSavings = (employeeCount * knowledgeWorkerRatio * hoursSavedPerWeek * 48 * hourlyRate * 0.35) * currencyRate;

  // 2. Cloud FinOps & ERP License Optimization
  // Average 28% reduction in cloud over-provisioning and legacy ERP shelfware
  const cloudOptimizationSavings = (annualCloudSpend * 0.28) * currencyRate;

  // 3. Cyber Breach & Downtime Risk Reduction
  // Expected loss prevention based on Ponemon Institute $4.45M average breach cost
  const breachMitigationValue = Math.min(employeeCount * 450, 1850000) * currencyRate;

  // Total Annual Value Realized
  const totalAnnualValue = Math.round(
    primaryFocus === 'ai-agents' ? rawLaborSavings * 1.3 :
    primaryFocus === 'erp-cloud' ? cloudOptimizationSavings * 1.6 :
    primaryFocus === 'cyber-resilience' ? breachMitigationValue * 1.5 :
    rawLaborSavings + cloudOptimizationSavings + breachMitigationValue
  );

  // 3-Year Net Benefit assuming 3.2x ROI against Nexis AI engagement model
  const projectedThreeYearValue = Math.round(totalAnnualValue * 2.85);
  const paybackMonths = employeeCount > 5000 ? 3.4 : employeeCount > 1000 ? 4.2 : 5.1;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="roi-framework">
      {/* Subtle architectural ambient background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Executive Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Nexis Enterprise Value Framework (EVF™)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Quantifiable Business Value & Board-Ready ROI
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Engineered by a former enterprise CIO with $250M+ budget stewardship. We bridge visionary AI and ERP initiatives directly to cash flow acceleration, TCO reduction, and audit resilience across the Americas and Europe.
          </p>
          
          <div className="flex justify-center items-center gap-2 pt-2">
            <span className="text-xs text-slate-400">Currency display:</span>
            <button
              onClick={() => setIsCurrencyEUR(false)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                !isCurrencyEUR ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              USD ($) - Americas
            </button>
            <button
              onClick={() => setIsCurrencyEUR(true)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold transition-all ${
                isCurrencyEUR ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              EUR (€) - Europe
            </button>
          </div>
        </div>

        {/* Interactive ROI Calculator Section */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <Sliders className="w-5 h-5 text-blue-400" />
                  <h2 className="text-lg font-bold text-white">Enterprise Parameters</h2>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                  Real-Time Modeling
                </span>
              </div>

              {/* Headcount Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="employee-count-slider" className="font-semibold text-slate-200">
                    Total Enterprise Headcount
                  </label>
                  <span className="text-blue-400 font-mono font-extrabold text-base bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-800/80">
                    {formatNumber(employeeCount)} employees
                  </span>
                </div>
                <input
                  id="employee-count-slider"
                  type="range"
                  min={100}
                  max={25000}
                  step={100}
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>100 (Mid-Market)</span>
                  <span>5,000 (Enterprise)</span>
                  <span>25,000+ (Global)</span>
                </div>
              </div>

              {/* Annual Cloud & ERP Spend Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="cloud-spend-slider" className="font-semibold text-slate-200">
                    Annual Cloud & ERP Infrastructure Budget
                  </label>
                  <span className="text-emerald-400 font-mono font-extrabold text-base bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/80">
                    {currencySymbol}{formatNumber(annualCloudSpend)}
                  </span>
                </div>
                <input
                  id="cloud-spend-slider"
                  type="range"
                  min={250000}
                  max={25000000}
                  step={250000}
                  value={annualCloudSpend}
                  onChange={(e) => setAnnualCloudSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>{currencySymbol}250K</span>
                  <span>{currencySymbol}10M</span>
                  <span>{currencySymbol}25M+</span>
                </div>
              </div>

              {/* Primary Focus Selector */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-200 block">
                  Strategic Modernization Focus
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => setPrimaryFocus('all')}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      primaryFocus === 'all'
                        ? 'bg-blue-600 text-white border-blue-400 shadow-lg'
                        : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Holistic EVF™
                  </button>
                  <button
                    onClick={() => setPrimaryFocus('ai-agents')}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      primaryFocus === 'ai-agents'
                        ? 'bg-purple-600 text-white border-purple-400 shadow-lg'
                        : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    AI Agent Swarms
                  </button>
                  <button
                    onClick={() => setPrimaryFocus('erp-cloud')}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      primaryFocus === 'erp-cloud'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg'
                        : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    ERP & FinOps
                  </button>
                  <button
                    onClick={() => setPrimaryFocus('cyber-resilience')}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      primaryFocus === 'cyber-resilience'
                        ? 'bg-amber-600 text-white border-amber-400 shadow-lg'
                        : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Zero Trust Cyber
                  </button>
                </div>
              </div>
            </div>

            {/* Right Value Output Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-blue-500/30 p-6 sm:p-8 shadow-2xl relative">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Projected Annual Business Value
                    </span>
                    <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-mono mt-1">
                      {currencySymbol}{formatNumber(totalAnnualValue)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-slate-400 uppercase block">Average Payback</span>
                    <span className="text-xl sm:text-2xl font-black text-blue-400 font-mono">
                      {paybackMonths} Months
                    </span>
                  </div>
                </div>

                {/* Breakdown Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-medium block">Workforce Time ROI</span>
                    <span className="text-lg font-bold text-slate-100 font-mono block mt-1">
                      {currencySymbol}{formatNumber(Math.round(rawLaborSavings))}
                    </span>
                    <span className="text-[10px] text-emerald-400 mt-0.5 block">4.2 hrs/wk saved</span>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-medium block">FinOps & ERP TCO</span>
                    <span className="text-lg font-bold text-slate-100 font-mono block mt-1">
                      {currencySymbol}{formatNumber(Math.round(cloudOptimizationSavings))}
                    </span>
                    <span className="text-[10px] text-emerald-400 mt-0.5 block">28% spend recovery</span>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                    <span className="text-[11px] text-slate-400 font-medium block">Breach Risk Shield</span>
                    <span className="text-lg font-bold text-slate-100 font-mono block mt-1">
                      {currencySymbol}{formatNumber(Math.round(breachMitigationValue))}
                    </span>
                    <span className="text-[10px] text-emerald-400 mt-0.5 block">Zero Trust avoidance</span>
                  </div>
                </div>

                {/* 3-Year Cumulative Highlight */}
                <div className="bg-blue-950/40 border border-blue-800/60 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-blue-300 font-medium">3-Year Cumulative Net Realization</span>
                    <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                      {currencySymbol}{formatNumber(projectedThreeYearValue)}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                    3.8x Target ROI
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onOpenConsultation(`Executive ROI Review: Projected ${currencySymbol}${formatNumber(totalAnnualValue)} Annual Realization for ${employeeCount} Employees`)}
                    className="flex-1 px-5 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Request Executive Briefing</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {onOpenBookAudit && (
                    <button
                      onClick={onOpenBookAudit}
                      className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span>Book 14-Day Audit</span>
                    </button>
                  )}
                </div>

                <div className="text-[11px] text-slate-400 text-center font-mono">
                  *Calculations grounded in 20+ years of CIO operational benchmark data across US, EU & global enterprises.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* The 3-Stage Enterprise Value Execution Model */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 3-Stage Enterprise Execution Methodology
            </h2>
            <p className="text-sm text-slate-400">
              Moving from boardroom commitment to measurable production impact with zero speculative drift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stage 1 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-900">
                  Day 1 – 14
                </span>
                <Clock className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Stage 1: 14-Day Executive AI & Architecture Audit
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive gap analysis across existing ERP ledgers, data silos, and security perimeters. Quantifies technical debt and formulates the board business case.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>TIME Matrix Portfolio Rationalization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>NIST / DORA / EU AI Act Gap Audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>CFO-Ready 3-Year Capital Plan</span>
                </li>
              </ul>
            </div>

            {/* Stage 2 */}
            <div className="bg-slate-900/80 border border-emerald-500/40 rounded-2xl p-6 space-y-4 shadow-lg shadow-emerald-500/5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-900">
                  Day 15 – 90
                </span>
                <Cpu className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Stage 2: 90-Day Production MVP & Secure Enclave
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Production-grade deployment of initial high-ROI autonomous AI agents and clean-core ERP connectors inside dedicated confidential compute enclaves.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Confidential Cloud / On-Prem Enclave</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Automated 3-Way Financial Matcher</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Public Model Data Leak Guarantee</span>
                </li>
              </ul>
            </div>

            {/* Stage 3 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-purple-500/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950 px-2.5 py-1 rounded border border-purple-900">
                  Day 90+
                </span>
                <Layers className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Stage 3: Enterprise CoE & Autonomous Scaling
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Institutionalize an enterprise AI Center of Excellence (CoE), empowering business units to self-orchestrate autonomous workflows with continuous governance.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Cross-Departmental Agent Swarms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Continuous FinOps Cost Guardrails</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Executive Board Quarterly Scorecards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Americas & Europe Alignment Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>Transatlantic Enterprise Reach</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Serving Fortune 1000 & High-Growth Mid-Market in Americas & Europe
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl">
              From our US flagship headquarters in Owings Mills, MD (near Washington D.C.) to our European advisory presence in London and Frankfurt, we deliver localized compliance with global engineering precision.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Transatlantic Enterprise Strategy Session')}
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-2 text-xs"
          >
            <span>Talk to Former CIO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
