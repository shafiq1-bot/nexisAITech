import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileCheck2, 
  AlertTriangle, 
  CheckCircle2, 
  Server, 
  Cpu, 
  Eye, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Activity
} from 'lucide-react';
import { Language, Region } from '../types';

interface CybersecurityCenterProps {
  currentLanguage: Language;
  currentRegion: Region;
  onOpenConsultation: (notes?: string) => void;
}

export const CybersecurityCenter: React.FC<CybersecurityCenterProps> = ({
  currentLanguage,
  currentRegion,
  onOpenConsultation,
}) => {
  // Interactive Zero Trust Risk Calculator State
  const [controls, setControls] = useState({
    mfaEnforced: true,
    zeroTrustNetwork: false,
    dlpActive: true,
    cloudPostureMonitored: false,
    siemSoarIntegrated: false,
    regularPenTesting: true,
  });

  const toggleControl = (key: keyof typeof controls) => {
    setControls((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCount = Object.values(controls).filter(Boolean).length;
  const totalCount = Object.keys(controls).length;
  const securityPercentage = Math.round((activeCount / totalCount) * 100);

  let riskLevel = 'High Risk';
  let riskColor = 'text-red-400 bg-red-950 border-red-800';
  if (securityPercentage >= 80) {
    riskLevel = 'Low Risk (Resilient)';
    riskColor = 'text-emerald-400 bg-emerald-950 border-emerald-800';
  } else if (securityPercentage >= 50) {
    riskLevel = 'Moderate Risk';
    riskColor = 'text-amber-400 bg-amber-950 border-amber-800';
  }

  const complianceBadges = [
    { name: 'HIPAA', category: 'Healthcare', region: 'US' },
    { name: 'FERPA', category: 'Education', region: 'US' },
    { name: 'SOC 2 Type II', category: 'Enterprise', region: 'Global' },
    { name: 'NIST 800-53', category: 'Federal & Public', region: 'US' },
    { name: 'ISO 27001', category: 'Security Standard', region: 'Global' },
    { name: 'KSA NCA ECC', category: 'Essential Cybersecurity', region: 'KSA' },
    { name: 'KSA NDMO', category: 'Data Protection', region: 'KSA' },
    { name: 'UAE TDRA ISR', category: 'Information Security', region: 'UAE' },
  ];

  return (
    <section id="cybersecurity-section" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950 border border-emerald-800 px-3.5 py-1 rounded-full">
            Zero Trust & Cyber Resilience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Cybersecurity Center & Compliance Readiness
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Architecting Zero Trust identity boundaries, continuous threat monitoring, and audit-ready compliance across the United States, Saudi Arabia, and UAE.
          </p>
        </div>

        {/* 4 Zero Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="p-3 bg-emerald-950 border border-emerald-800 rounded-lg w-fit text-emerald-400 mb-4">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">1. Identity & RBAC</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Verify explicitly every access request using Okta, Entra ID, FIDO2 hardware MFA, and dynamic role-based permissions.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="p-3 bg-blue-950 border border-blue-800 rounded-lg w-fit text-blue-400 mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">2. Least Privilege</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Eliminate implicit trust. Limit user and AI agent permissions strictly to necessary data assets with Just-In-Time (JIT) access.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="p-3 bg-purple-950 border border-purple-800 rounded-lg w-fit text-purple-400 mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">3. Assume Breach</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Micro-segment networks, encrypt data at rest/in transit, and audit all API communications continuously with automated telemetry.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="p-3 bg-cyan-950 border border-cyan-800 rounded-lg w-fit text-cyan-400 mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">4. SIEM / SOAR Modernization</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated threat detection and incident response playbooks powered by Palo Alto Cortex XSOAR and AI anomaly detection.
            </p>
          </div>
        </div>

        {/* Interactive Zero Trust Risk Score Calculator */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 flex-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Interactive Security Diagnostic
              </span>
              <h3 className="text-2xl font-bold text-white">
                Zero Trust Security & Compliance Calculator
              </h3>
              <p className="text-xs text-slate-400">
                Select your organization’s active security controls to calculate your immediate cyber exposure score and audit readiness.
              </p>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => toggleControl('mfaEnforced')}
                  className={`p-3 rounded-lg border text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                    controls.mfaEnforced ? 'bg-emerald-950/60 border-emerald-700 text-slate-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>MFA Enforced for All Employees</span>
                  <CheckCircle2 className={`w-4 h-4 ${controls.mfaEnforced ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>

                <button
                  onClick={() => toggleControl('zeroTrustNetwork')}
                  className={`p-3 rounded-lg border text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                    controls.zeroTrustNetwork ? 'bg-emerald-950/60 border-emerald-700 text-slate-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>Micro-Segmented Zero Trust Network</span>
                  <CheckCircle2 className={`w-4 h-4 ${controls.zeroTrustNetwork ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>

                <button
                  onClick={() => toggleControl('dlpActive')}
                  className={`p-3 rounded-lg border text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                    controls.dlpActive ? 'bg-emerald-950/60 border-emerald-700 text-slate-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>Data Loss Prevention (DLP) for AI & Email</span>
                  <CheckCircle2 className={`w-4 h-4 ${controls.dlpActive ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>

                <button
                  onClick={() => toggleControl('cloudPostureMonitored')}
                  className={`p-3 rounded-lg border text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                    controls.cloudPostureMonitored ? 'bg-emerald-950/60 border-emerald-700 text-slate-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>Cloud Security Posture Management (CSPM)</span>
                  <CheckCircle2 className={`w-4 h-4 ${controls.cloudPostureMonitored ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>

                <button
                  onClick={() => toggleControl('siemSoarIntegrated')}
                  className={`p-3 rounded-lg border text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                    controls.siemSoarIntegrated ? 'bg-emerald-950/60 border-emerald-700 text-slate-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>Automated SOC / SIEM Incident Playbooks</span>
                  <CheckCircle2 className={`w-4 h-4 ${controls.siemSoarIntegrated ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>

                <button
                  onClick={() => toggleControl('regularPenTesting')}
                  className={`p-3 rounded-lg border text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                    controls.regularPenTesting ? 'bg-emerald-950/60 border-emerald-700 text-slate-200' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>Annual Penetration Testing & Vulnerability Scans</span>
                  <CheckCircle2 className={`w-4 h-4 ${controls.regularPenTesting ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>
              </div>
            </div>

            {/* Scorecard Box */}
            <div className="w-full lg:w-80 bg-slate-950 border border-slate-800 rounded-xl p-6 text-center space-y-4 shrink-0">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Calculated Security Score
              </div>
              <div className="text-5xl font-black text-emerald-400 font-mono">
                {securityPercentage}%
              </div>

              <div className={`text-xs font-bold px-3 py-1 rounded-full border inline-block ${riskColor}`}>
                Rating: {riskLevel}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {securityPercentage < 80
                  ? `Your environment is missing ${totalCount - activeCount} critical Zero Trust safeguards, leaving gaps under ${currentRegion === 'KSA' ? 'NCA ECC' : currentRegion === 'UAE' ? 'TDRA ISR' : 'NIST 800-53'}.`
                  : 'Your enterprise demonstrates a strong Zero Trust security posture.'}
              </p>

              <button
                onClick={() => onOpenConsultation(`Cybersecurity Assessment Result: ${securityPercentage}% (${riskLevel})`)}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg transition-colors cursor-pointer"
              >
                Schedule Security Remediation Audit
              </button>
            </div>
          </div>
        </div>

        {/* Global Compliance Frameworks Matrix */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 text-center">
            Supported International & Regional Compliance Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {complianceBadges.map((badge, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800/90 rounded-xl p-4 text-center hover:border-emerald-500/50 transition-colors">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <div className="font-bold text-white text-sm">{badge.name}</div>
                <div className="text-[10px] text-slate-400 font-mono">{badge.category} • {badge.region}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
