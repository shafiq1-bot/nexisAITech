export interface AssessmentDimension {
  id: string;
  name: string;
  shortName: string;
  weight: number;
  question: string;
  description: string;
  options: {
    label: string;
    level: 'Foundational' | 'Developing' | 'Managed' | 'Strategic' | 'Optimized';
    score: number; // 1 to 5
    description: string;
  }[];
}

export interface CIOMaturityResult {
  overallScore: number; // 0 - 100
  overallLevel: 'Foundational' | 'Developing' | 'Managed' | 'Strategic' | 'Optimized';
  dimensionScores: Record<string, { score: number; level: string }>;
  strengths: string[];
  criticalGaps: string[];
  strategicRisks: string[];
  priorityOpportunities: string[];
  recommended30DayActions: string[];
  recommended90DayRoadmap: string[];
}

export const cioMaturityDimensions: AssessmentDimension[] = [
  {
    id: 'strategy',
    name: '1. Technology Strategy & Business Alignment',
    shortName: 'Strategy',
    weight: 10,
    question: 'How closely is your technology strategy aligned with your institutional mission, finance, and board goals?',
    description: 'Measures whether IT is treated as an operational overhead cost center or an executive value driver.',
    options: [
      {
        label: 'Ad-hoc / Reactive',
        level: 'Foundational',
        score: 1,
        description: 'Technology priorities are dictated by immediate fires or departmental squeaky wheels without a written multi-year strategy.',
      },
      {
        label: 'Emerging Alignment',
        level: 'Developing',
        score: 2,
        description: 'An informal IT plan exists, but it is rarely referenced during annual budgeting or executive leadership retreats.',
      },
      {
        label: 'Documented Roadmaps',
        level: 'Managed',
        score: 3,
        description: 'A formal 12-to-24 month technology plan exists and is reviewed semi-annually with key executive stakeholders.',
      },
      {
        label: 'Executive Co-Design',
        level: 'Strategic',
        score: 4,
        description: 'Technology leadership sits at the executive table; tech initiatives directly originate from institutional strategic objectives.',
      },
      {
        label: 'Continuous Value Engine',
        level: 'Optimized',
        score: 5,
        description: 'Technology actively enables new clinical/academic models and revenue streams with transparent board-level outcome metrics.',
      },
    ],
  },
  {
    id: 'governance',
    name: '2. IT Governance & Board Oversight',
    shortName: 'Governance',
    weight: 9,
    question: 'How are consequential technology decisions, trade-offs, and capital approvals governed?',
    description: 'Assesses whether decisions have named executive owners and transparent steering cadences.',
    options: [
      {
        label: 'Siloed & Uncontrolled',
        level: 'Foundational',
        score: 1,
        description: 'Departments independently purchase software and cloud services with no central review or architectural oversight.',
      },
      {
        label: 'Informal Steering',
        level: 'Developing',
        score: 2,
        description: 'An IT steering group exists on paper but meets irregularly and lacks authority to halt unapproved projects.',
      },
      {
        label: 'Structured Committee',
        level: 'Managed',
        score: 3,
        description: 'Monthly technology governance meetings review active projects, change orders, and major capital expenditures.',
      },
      {
        label: 'Proactive Portfolio Control',
        level: 'Strategic',
        score: 4,
        description: 'Clear decision boundaries exist; the board receives quarterly plain-language technology risk and roadmap updates.',
      },
      {
        label: 'Institutional Agility',
        level: 'Optimized',
        score: 5,
        description: 'Formal decision logs, risk registers, and benefit realization tracking govern all digital and AI investments.',
      },
    ],
  },
  {
    id: 'leadership',
    name: '3. Executive Leadership & Decision System',
    shortName: 'Leadership',
    weight: 9,
    question: 'What is your current technology executive leadership structure and decision cadence?',
    description: 'Evaluates executive accountability, CIO vacancy risk, or leadership capability gaps.',
    options: [
      {
        label: 'No Executive Owner / Stalled',
        level: 'Foundational',
        score: 1,
        description: 'No CIO or equivalent; technical decisions are pushed to the CEO, CFO, or fragmented managers.',
      },
      {
        label: 'Tactical IT Director',
        level: 'Developing',
        score: 2,
        description: 'IT leadership is technically competent but lacks executive presence, C-suite communication, and business acumen.',
      },
      {
        label: 'Interim / Transition State',
        level: 'Managed',
        score: 3,
        description: 'Operating under an interim leader or fractional advisor maintaining status quo during an executive search.',
      },
      {
        label: 'Experienced Strategic CIO',
        level: 'Strategic',
        score: 4,
        description: 'Dedicated CIO/fractional executive translating operational and clinical pressures into an approved investment sequence.',
      },
      {
        label: 'High-Impact Executive Partner',
        level: 'Optimized',
        score: 5,
        description: 'Technology leadership is a recognized catalyst for organizational growth, talent retention, and institutional resilience.',
      },
    ],
  },
  {
    id: 'cybersecurity',
    name: '4. Cybersecurity & Zero Trust Posture',
    shortName: 'Cybersecurity',
    weight: 10,
    question: 'How resilient is your cybersecurity posture against modern ransomware and regulatory scrutiny?',
    description: 'Evaluates alignment with NIST SP 800-53, HHS OCR, HIPAA, and Zero Trust identity principles.',
    options: [
      {
        label: 'Perimeter-Only / Vulnerable',
        level: 'Foundational',
        score: 1,
        description: 'Basic antivirus and firewalls with minimal MFA, no micro-segmentation, and unmanaged privileged accounts.',
      },
      {
        label: 'Compliance Checklist',
        level: 'Developing',
        score: 2,
        description: 'Passes basic annual audits through manual scrambling, but lacks continuous vulnerability scanning or tested incident response.',
      },
      {
        label: 'Active Defense & Monitoring',
        level: 'Managed',
        score: 3,
        description: 'MFA deployed enterprise-wide, endpoint detection (EDR) active, and cyber incident response playbooks tested annually.',
      },
      {
        label: 'Zero Trust Architecture',
        level: 'Strategic',
        score: 4,
        description: 'Identity-bound access, micro-segmentation across clinical/research enclaves, and executive board-level risk reporting.',
      },
      {
        label: 'Resilient Sovereign Defense',
        level: 'Optimized',
        score: 5,
        description: 'Continuous automated posture validation, strict data isolation, zero unvetted third-party vendor access, and rapid recovery.',
      },
    ],
  },
  {
    id: 'data-governance',
    name: '5. Data Governance & Regulatory Compliance',
    shortName: 'Data & Privacy',
    weight: 8,
    question: 'How are sensitive patient, student, research, and corporate data assets governed and protected?',
    description: 'Evaluates adherence to HIPAA, FERPA, state privacy laws, and biomedical data protocols.',
    options: [
      {
        label: 'Dark Data / Siloed Spreadsheets',
        level: 'Foundational',
        score: 1,
        description: 'Data is scattered across unencrypted local drives, email attachments, and unauthorized cloud tools.',
      },
      {
        label: 'Basic Policy on File',
        level: 'Developing',
        score: 2,
        description: 'Written privacy policies exist but are poorly enforced across faculty, clinicians, and departmental staff.',
      },
      {
        label: 'Classification & Safeguards',
        level: 'Managed',
        score: 3,
        description: 'Sensitive data is classified (PHI, PII, CUI); encryption at rest and in transit is enforced across core systems.',
      },
      {
        label: 'Governed Data Catalogs',
        level: 'Strategic',
        score: 4,
        description: 'Centralized data governance committee, formal data stewardship, and standardized API data sharing boundaries.',
      },
      {
        label: 'Sovereign Analytics Enclaves',
        level: 'Optimized',
        score: 5,
        description: 'Automated data lineage, privacy-preserving analytical enclaves, and continuous audit verification with zero compliance gaps.',
      },
    ],
  },
  {
    id: 'ai-readiness',
    name: '6. Enterprise AI Readiness & Responsible AI Governance',
    shortName: 'AI Readiness',
    weight: 9,
    question: 'How is your organization navigating generative AI adoption, risk, and vendor promises?',
    description: 'Assesses governance under NIST AI Risk Management Framework 1.0 and shadow AI containment.',
    options: [
      {
        label: 'Unmanaged Shadow AI',
        level: 'Foundational',
        score: 1,
        description: 'Employees paste sensitive organizational data into public AI tools; no corporate policy or risk controls exist.',
      },
      {
        label: 'Blanket Bans or Isolated Pilots',
        level: 'Developing',
        score: 2,
        description: 'Leadership attempted to ban AI tools or has several disjointed, unmonitored vendor proof-of-concepts running.',
      },
      {
        label: 'Responsible AI Policy Set',
        level: 'Managed',
        score: 3,
        description: 'A formal acceptable-use policy and AI intake review process are in place, referencing NIST AI RMF guidelines.',
      },
      {
        label: 'Executive AI Portfolio',
        level: 'Strategic',
        score: 4,
        description: 'Tiered risk classification, secure private enterprise RAG enclaves, and measurable ROI scorecards for all AI initiatives.',
      },
      {
        label: 'Autonomous Value Creation',
        level: 'Optimized',
        score: 5,
        description: 'Governed agentic workflows augment clinical/operational workflows with continuous bias, accuracy, and safety monitoring.',
      },
    ],
  },
  {
    id: 'applications',
    name: '7. Applications & Legacy Portfolio Rationalization',
    shortName: 'Applications',
    weight: 8,
    question: 'What is the health and technical debt of your core applications (EHR, ERP, SIS, CRM)?',
    description: 'Assesses application shelfware, custom debt, end-of-support risks, and GAO legacy criteria.',
    options: [
      {
        label: 'Severe Legacy Debt',
        level: 'Foundational',
        score: 1,
        description: 'Heavily customized, unsupported legacy systems with high maintenance costs and critical single-person dependencies.',
      },
      {
        label: 'Patchwork Environment',
        level: 'Developing',
        score: 2,
        description: 'Systems have accumulated redundant licenses and conflicting workflows; upgrades are delayed out of fear of breaking integrations.',
      },
      {
        label: 'Stabilized Core',
        level: 'Managed',
        score: 3,
        description: 'Major enterprise systems (EHR/ERP) are on supported releases with active vendor maintenance and regular patch cycles.',
      },
      {
        label: 'Clean-Core Architecture',
        level: 'Strategic',
        score: 4,
        description: 'Extensions are decoupled via modern APIs; an application rationalization roadmap actively eliminates shelfware.',
      },
      {
        label: 'Modern Composable Ecosystem',
        level: 'Optimized',
        score: 5,
        description: 'Cloud-native, interoperable applications delivering rapid time-to-capability with minimal operational drag.',
      },
    ],
  },
  {
    id: 'infrastructure',
    name: '8. Cloud & Infrastructure Architecture',
    shortName: 'Infrastructure',
    weight: 8,
    question: 'How resilient, scalable, and cost-effective is your infrastructure and cloud environment?',
    description: 'Evaluates data center reliability, multi-cloud governance, high-performance computing, and disaster recovery.',
    options: [
      {
        label: 'Aging On-Premises / Fragile',
        level: 'Foundational',
        score: 1,
        description: 'Overloaded server closets or aging data centers with untracked single points of failure and untested tape backups.',
      },
      {
        label: 'Ad-hoc Cloud Lift-and-Shift',
        level: 'Developing',
        score: 2,
        description: 'Migrated servers to cloud without refactoring, resulting in spiraling monthly cloud bills and unmonitored egress costs.',
      },
      {
        label: 'Hybrid Cloud Managed',
        level: 'Managed',
        score: 3,
        description: 'Predictable hybrid infrastructure with automated offsite backups, documented RTO/RPO targets, and baseline monitoring.',
      },
      {
        label: 'Architected & High Availability',
        level: 'Strategic',
        score: 4,
        description: 'Multi-zone redundancy, Infrastructure-as-Code (IaC), FinOps cloud cost governance, and validated disaster recovery drills.',
      },
      {
        label: 'Elastic Sovereign Enclaves',
        level: 'Optimized',
        score: 5,
        description: 'Automated failover, optimized GPU/HPC workloads for scientific research, and resilient 99.999% mission-critical uptime.',
      },
    ],
  },
  {
    id: 'digital-experience',
    name: '9. Digital & Clinical / Academic Experience',
    shortName: 'User Experience',
    weight: 7,
    question: 'How do physicians, students, faculty, or front-line staff experience your technology tools?',
    description: 'Measures user friction, documentation fatigue, portal adoption, and satisfaction.',
    options: [
      {
        label: 'Severe User Frustration',
        level: 'Foundational',
        score: 1,
        description: 'Staff complain of endless logins, sluggish software, and clunky interfaces; high friction contributes to burnout or turnover.',
      },
      {
        label: 'Functional but Fragmented',
        level: 'Developing',
        score: 2,
        description: 'Tools work technically, but users must navigate 5 to 10 different disjointed portals with inconsistent credentials.',
      },
      {
        label: 'Standardized Workflows',
        level: 'Managed',
        score: 3,
        description: 'Single Sign-On (SSO) implemented, core portal is stable, and user training sessions are conducted regularly.',
      },
      {
        label: 'User-Centered Design',
        level: 'Strategic',
        score: 4,
        description: 'Proactive clinician/faculty informatics feedback loops; technology workflows actively reduce administrative overhead.',
      },
      {
        label: 'Seamless Digital Ecosystem',
        level: 'Optimized',
        score: 5,
        description: 'Frictionless, mobile-first, and context-aware digital experiences driving measurable productivity and institutional loyalty.',
      },
    ],
  },
  {
    id: 'vendor-management',
    name: '10. Vendor Governance & Contract Control',
    shortName: 'Vendors',
    weight: 7,
    question: 'How effectively are external technology vendors, MSPs, and software suppliers held accountable?',
    description: 'Evaluates SLA enforcement, contract renewal traps, vendor lock-in, and scope management.',
    options: [
      {
        label: 'Vendor-Driven / Passive',
        level: 'Foundational',
        score: 1,
        description: 'Vendors dictate terms, rates, and scopes; contracts auto-renew without executive review; SLAs are neither tracked nor enforced.',
      },
      {
        label: 'Transactional Management',
        level: 'Developing',
        score: 2,
        description: 'Contracts are stored in legal, but IT only interacts with vendors when invoices arrive or systems fail.',
      },
      {
        label: 'Structured SLA Tracking',
        level: 'Managed',
        score: 3,
        description: 'Quarterly vendor reviews track service levels, uptime guarantees, and support ticket response times.',
      },
      {
        label: 'Strategic Partner Oversight',
        level: 'Strategic',
        score: 4,
        description: 'Vendor consolidation strategy in place; competitive bidding and rigorous change-order control protect capital.',
      },
      {
        label: 'Value-Based Partnerships',
        level: 'Optimized',
        score: 5,
        description: 'Contracts tied to business outcomes and penalties; transparent vendor risk audits ensure zero third-party vulnerability.',
      },
    ],
  },
  {
    id: 'financial-management',
    name: '11. IT Financial Management & Capital Allocation',
    shortName: 'Finance & Capital',
    weight: 8,
    question: 'How transparent, predictable, and defensible is your technology budget and capital spending?',
    description: 'Evaluates budget defense, CapEx vs. OpEx forecasting, ROI realization, and elimination of shelfware.',
    options: [
      {
        label: 'Black Box / Budget Surprises',
        level: 'Foundational',
        score: 1,
        description: 'Technology spending is a mystery to the CFO; unexpected license true-ups and emergency capital requests occur frequently.',
      },
      {
        label: 'Basic Historical Budgeting',
        level: 'Developing',
        score: 2,
        description: 'Annual budget simply copies prior year with 5-10% inflation; no clear link between tech spend and business value.',
      },
      {
        label: 'Categorized & Monitored',
        level: 'Managed',
        score: 3,
        description: 'Detailed CapEx and OpEx breakdown with monthly variance tracking and standard procurement sign-off thresholds.',
      },
      {
        label: 'Total Cost of Ownership (TCO)',
        level: 'Strategic',
        score: 4,
        description: 'Every major investment requires a multi-year TCO model and defined success criteria presented to executive leadership.',
      },
      {
        label: 'Dynamic Value Optimization',
        level: 'Optimized',
        score: 5,
        description: 'Transparent showback/chargeback models, active software license harvesting, and quantifiable return on institutional capital.',
      },
    ],
  },
  {
    id: 'talent',
    name: '12. Organizational Capability & Talent Architecture',
    shortName: 'Talent & Culture',
    weight: 7,
    question: 'How capable, motivated, and future-ready is your internal technology team?',
    description: 'Assesses team skills, key-person dependencies, coaching, retention, and succession readiness.',
    options: [
      {
        label: 'Severe Single-Person Dependencies',
        level: 'Foundational',
        score: 1,
        description: 'A few key individuals hold all institutional knowledge; team is burnt out from continuous fire-fighting and turnover is high.',
      },
      {
        label: 'Siloed Tech Skills',
        level: 'Developing',
        score: 2,
        description: 'Staff are skilled in legacy systems but lack training in modern cloud, Zero Trust, data engineering, or AI governance.',
      },
      {
        label: 'Structured Roles & Training',
        level: 'Managed',
        score: 3,
        description: 'Clear job descriptions, documented runbooks, standard operating procedures, and professional development budgets.',
      },
      {
        label: 'Empowered Engineering Culture',
        level: 'Strategic',
        score: 4,
        description: 'Cross-functional agile teams with active mentorship, low unwanted attrition, and modern architectural skills.',
      },
      {
        label: 'High-Performance Advisory Bench',
        level: 'Optimized',
        score: 5,
        description: 'World-class internal talent augmented by on-demand executive advisors; recognized leadership pipeline.',
      },
    ],
  },
];

export function calculateCIOMaturity(answers: Record<string, number>): CIOMaturityResult {
  let weightedSum = 0;
  let totalWeight = 0;
  const dimensionScores: Record<string, { score: number; level: string }> = {};

  cioMaturityDimensions.forEach((dim) => {
    const score = answers[dim.id] || 1; // 1 to 5
    const normalizedScore = (score / 5) * 100;
    weightedSum += normalizedScore * dim.weight;
    totalWeight += dim.weight;

    let levelStr = 'Foundational';
    if (score >= 4.5) levelStr = 'Optimized';
    else if (score >= 3.5) levelStr = 'Strategic';
    else if (score >= 2.5) levelStr = 'Managed';
    else if (score >= 1.5) levelStr = 'Developing';

    dimensionScores[dim.id] = {
      score: Math.round(normalizedScore),
      level: levelStr,
    };
  });

  const overallScore = Math.round(weightedSum / totalWeight);

  let overallLevel: 'Foundational' | 'Developing' | 'Managed' | 'Strategic' | 'Optimized' = 'Foundational';
  if (overallScore >= 85) overallLevel = 'Optimized';
  else if (overallScore >= 70) overallLevel = 'Strategic';
  else if (overallScore >= 50) overallLevel = 'Managed';
  else if (overallScore >= 30) overallLevel = 'Developing';

  // Compute strengths (top scores) and critical gaps (lowest scores)
  const sortedDimensions = [...cioMaturityDimensions].sort((a, b) => {
    const scoreA = answers[a.id] || 1;
    const scoreB = answers[b.id] || 1;
    return (scoreA - scoreB);
  });

  const criticalGaps = sortedDimensions.slice(0, 3).map((d) => d.name);
  const strengths = sortedDimensions.slice(-3).reverse().map((d) => d.name);

  // Strategic risks based on low categories
  const strategicRisks: string[] = [];
  if ((answers['cybersecurity'] || 1) <= 2) {
    strategicRisks.push('Heightened ransomware and regulatory audit exposure (NIST / HIPAA / HHS OCR).');
  }
  if ((answers['ai-readiness'] || 1) <= 2) {
    strategicRisks.push('Unmonitored shadow AI data leakage and unvetted vendor commitments.');
  }
  if ((answers['leadership'] || 1) <= 2) {
    strategicRisks.push('Absence of executive technology stewardship, pushing operational friction to the CEO/CFO.');
  }
  if ((answers['applications'] || 1) <= 2) {
    strategicRisks.push('Accumulating legacy technical debt and single-person system vulnerabilities.');
  }
  if (strategicRisks.length === 0) {
    strategicRisks.push('Potential complacency in vendor contract renewals and emerging AI model governance.');
  }

  // Priority opportunities
  const priorityOpportunities: string[] = [
    'Deploy a 30-Day Executive Diagnostic to establish an approved Priority Portfolio (Now • Next • Later • Stop).',
    'Structure an executive technology steering committee to align capital allocations directly with institutional objectives.',
    'Institute an enterprise AI governance charter aligned with the NIST AI Risk Management Framework 1.0.',
    'Consolidate vendor contracts and harvest software shelfware to unlock immediate capital for modernization.',
  ];

  // Recommended 30-Day Actions
  const recommended30DayActions: string[] = [
    'Execute 8–12 structured executive stakeholder interviews across clinical, academic, finance, and operational leaders.',
    'Inventory all shadow AI tools, external SaaS commitments, and software contracts up for renewal within 6 months.',
    'Deliver a 10–15 page decision-led Executive Brief and 90-Day Action Charter with named accountable owners.',
  ];

  // Recommended 90-Day Roadmap
  const recommended90DayRoadmap: string[] = [
    'Days 1–30: Complete Executive Diagnostic, freeze underperforming software investments, and secure board alignment.',
    'Days 31–60: Stand up monthly technology steering sessions, establish Zero Trust micro-segmentation, and enforce AI intake gates.',
    'Days 61–90: Rationalize legacy applications, align 24-month capital budgets, and establish fractional CIO operating rhythm.',
  ];

  return {
    overallScore,
    overallLevel,
    dimensionScores,
    strengths,
    criticalGaps,
    strategicRisks,
    priorityOpportunities,
    recommended30DayActions,
    recommended90DayRoadmap,
  };
}
