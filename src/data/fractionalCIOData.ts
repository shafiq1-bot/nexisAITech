export interface DiagnosticDeliverable {
  title: string;
  pagesOrFormat: string;
  description: string;
}

export interface DiagnosticStep {
  stepNumber: number;
  title: string;
  duration: string;
  description: string;
  actions: string[];
}

export interface RetainerPackage {
  id: string;
  name: string;
  subtitle: string;
  bestFor: string;
  capacity: string;
  recommendedFee: string;
  popular?: boolean;
  highlights: string[];
}

export interface SpecializedSprint {
  id: string;
  title: string;
  timeline: string;
  feeRange: string;
  badge: string;
  summary: string;
  keyOutputs: string[];
  referenceFramework: string;
}

export interface OperatingCadenceItem {
  cadence: 'Weekly' | 'Monthly' | 'Quarterly' | 'Always';
  duration: string;
  title: string;
  focusItems: string[];
}

export const DIAGNOSTIC_PRICE = '$9,500';
export const DIAGNOSTIC_TERMS = 'Fixed-fee 30-day bounded engagement. 50% at kickoff, 50% upon final board readout delivery.';
export const DIAGNOSTIC_GUARANTEE = '100% Satisfaction Guarantee: If the diagnostic does not surface at least 2x its cost in identified software savings, unmanaged risk mitigation, or strategic alignment, 100% of the fee can be credited toward a subsequent monthly retainer .';

export const discoveryCallAgenda = [
  {
    phase: 'Minutes 1–10',
    title: 'Your Situation & Active Pressure Points',
    description: 'Zero pitch. We unpack your current friction: sudden IT departure, stalled ERP/EHR, shadow AI, vendor contract renewals, or board scrutiny.',
  },
  {
    phase: 'Minutes 11–15',
    title: 'Peer Benchmark & Practical Options',
    description: 'We compare your technical challenges against verified peer benchmarks in Healthcare, Higher Ed, or Mid-Market enterprises.',
  },
  {
    phase: 'Minutes 16–20',
    title: 'Candid Fit & Immediate Action Plan',
    description: 'We determine whether a Fractional CIO is the right model. If you just need an IT Director or an MSP renegotiation, Shafiq will tell you directly.',
  },
];

export const diagnosticSteps: DiagnosticStep[] = [
  {
    stepNumber: 1,
    title: 'Frame the Mandate & Crisis Inventory',
    duration: 'Days 1–5',
    description: 'Confirm the triggering event, business outcomes, constraints, stakeholders, and the decisions that cannot wait.',
    actions: [
      'Confidential executive sponsor alignment session (CEO / Provost / Board Chair)',
      'Establish explicit non-disclosure agreement (NDA), governance scope, and decision boundary',
      'Inventory urgent operational, AI, cybersecurity, and vendor pressure points',
    ],
  },
  {
    stepNumber: 2,
    title: 'Interview the Decision System',
    duration: 'Days 6–15',
    description: 'Conduct 8–10 structured 45-minute conversations across executive leadership, finance, operations, risk, clinical/academic heads, and key vendors.',
    actions: [
      'Structured 45-min confidential interviews across C-Suite and operational department heads',
      'Finance & contract audit: budget allocation, vendor commitments, software shelfware',
      'Operational pain points, clinician/faculty tech friction, and unmanaged shadow AI identification',
    ],
  },
  {
    stepNumber: 3,
    title: 'Assess Architecture & Security Risk',
    duration: 'Days 16–22',
    description: 'Review governance, investment alignment, cyber posture, architecture, delivery health, vendors, data, and AI readiness using a consistent scorecard.',
    actions: [
      'Evaluate cyber posture against NIST SP 800-53 Rev 5 & HHS OCR security rules',
      'Score AI readiness and data governance under NIST AI RMF framework',
      'Map legacy systems debt vs. modernization milestones (GAO legacy criteria)',
    ],
  },
  {
    stepNumber: 4,
    title: 'Force Priorities (Now / Next / Later / Stop)',
    duration: 'Days 23–27',
    description: 'Separate immediate risk controls, 90-day decisions, and 12-month transformation moves. Identify what should stop, continue, accelerate, or be renegotiated.',
    actions: [
      'Categorize all active initiatives into: Now, Next, Later, or Stop',
      'Uncover stalled or leaking software investments to immediately freeze or cancel (typically $50K–$250K savings)',
      'Formulate board-ready investment sequence with named accountable owners',
    ],
  },
  {
    stepNumber: 5,
    title: 'Deliver Board-Ready Readout & Action Charter',
    duration: 'Days 28–30',
    description: 'Deliver a board-ready readout, named owners, an investment sequence, a risk register, and a clear recommendation for ongoing operating cadence.',
    actions: [
      'Live executive & board-ready readout presentation with leadership Q&A',
      'Delivery of the 3 core artifacts: Executive Brief, Priority Portfolio, and 90-Day Charter',
      'Clear decision sign-off on subsequent stabilization and governance cadence',
    ],
  },
];

export const diagnosticDeliverables: DiagnosticDeliverable[] = [
  {
    title: 'Deliverable 1: Executive Brief',
    pagesOrFormat: '10–12 pages, C-Suite & Board memo',
    description: 'Succinct, jargon-free executive memo detailing exact technology risks, capital efficiencies, vendor accountability gaps, and AI governance posture.',
  },
  {
    title: 'Deliverable 2: Priority Portfolio',
    pagesOrFormat: 'Now • Next • Later • Stop Matrix',
    description: 'Actionable classification of all technology projects and spend, identifying immediate leak stoppages, urgent cyber fixes, and sequenced initiatives.',
  },
  {
    title: 'Deliverable 3: 90-Day Execution Charter',
    pagesOrFormat: 'Owners • Cadence • KPI Milestones',
    description: 'Execution roadmap assigning named accountable leaders, executive steering rhythm, risk thresholds, and concrete vendor negotiation milestones.',
  },
];

export const retainerPackages: RetainerPackage[] = [
  {
    id: 'advisory',
    name: 'Advisory & Board Oversight',
    subtitle: 'Strategic Decision Support & Governance',
    bestFor: 'Organizations with competent internal IT teams that lack executive board-level direction, vendor leverage, or AI governance.',
    capacity: '8–10 hours / week (approx. 1 day/wk)',
    recommendedFee: '$6,500 / month',
    highlights: [
      'Weekly sponsor touchpoint and high-stakes decision framing',
      'Monthly executive technology steering committee chairing',
      'Key vendor accountability & upcoming contract renewal negotiations',
      'Board and leadership reporting narrative & slide decks',
      'NIST AI RMF policy governance and shadow AI oversight',
      'Cancel anytime with 30 days notice; zero severance liability',
    ],
  },
  {
    id: 'transformation-lead',
    name: 'Transformation Leadership',
    subtitle: 'Active Portfolio, Team & System Modernization',
    bestFor: 'Institutions navigating EHR/ERP modernization, recovering from failed audits, restructuring IT teams, or resetting runaway vendor spend.',
    capacity: '15–20 hours / week (approx. 2 days/wk)',
    recommendedFee: '$9,500 / month',
    popular: true,
    highlights: [
      'All Advisory & Governance features included',
      'Direct hands-on leadership of internal IT directors, managers, and MSP vendors',
      'Aggressive vendor contract renegotiation & SLA enforcement',
      'Direct executive coaching for technical managers stepping up into leadership',
      'Capital budget reallocation & portfolio rationalization ($5M–$100M)',
      'NIST AI RMF and HHS OCR cyber compliance implementation cadence',
    ],
  },
  {
    id: 'interim-cio',
    name: 'Embedded Executive Mandate',
    subtitle: 'Intensive Transition & Enterprise Overhaul',
    bestFor: 'Organizations undergoing major system migrations (Epic, Workday), post-merger integration, or high-scrutiny state/federal regulatory oversight.',
    capacity: '20–25 hours / week (approx. 2.5–3 days/wk)',
    recommendedFee: '$14,500 / month',
    highlights: [
      'Comprehensive day-to-day executive control of the technology organization',
      'Direct seat at Executive Cabinet / Provost / CEO table',
      'Full oversight of vendor contracts, hiring, and capital allocations',
      'Complex institutional crisis management, audit remediation, and modernization reset',
      'Recruitment, screening, and onboarding handover for a future permanent CIO',
      'Immediate executive presence and board defensibility',
    ],
  },
];

export const specializedSprints: SpecializedSprint[] = [
  {
    id: 'ai-governance',
    title: 'Responsible AI Governance Sprint',
    timeline: '4–6 weeks',
    feeRange: '$12,500 – $18,500 fixed-fee',
    badge: 'NIST AI RMF 1.0 Aligned',
    summary: 'Turn unmanaged AI experimentation and vendor hype into an executive-governed, compliant AI portfolio with board-approved guardrails.',
    keyOutputs: [
      'Enterprise AI inventory & shadow AI discovery across departments',
      'AI Governance Charter & risk-tier classification matrix',
      'Intake and approval workflow for new AI pilots and tools',
      'Responsible AI policy set, patient/student data boundaries & copyright controls',
      'Vendor AI evaluation checklist and procurement terms',
      'Pilot scorecard measuring demonstrable business value & safety',
    ],
    referenceFramework: 'National Institute of Standards and Technology (NIST) AI Risk Management Framework 1.0',
  },
  {
    id: 'cyber-modernization',
    title: 'Cyber Resilience & Modernization Roadmap',
    timeline: '4–6 weeks',
    feeRange: '$14,500 – $19,500 fixed-fee',
    badge: 'NIST 800-53 / HHS OCR Aligned',
    summary: 'Sequence legacy system modernizations and enforce Zero Trust operational defenses to survive boardroom audits.',
    keyOutputs: [
      'Current-state cyber and operational risk review',
      'Legacy vs. cloud decision map (Tolerate, Invest, Migrate, Eliminate)',
      'Target architecture principles and micro-segmentation blueprint',
      'Sequenced 24-month capital investment schedule',
      'Executive risk register tied to business impact and board reporting',
      'Audit remediation plan for HHS OCR / NIST 800-53 findings',
    ],
    referenceFramework: 'NIST SP 800-53 Rev 5, HHS OCR Cybersecurity Guidance, GAO-25-107795 legacy modernization',
  },
];

export const operatingCadence: OperatingCadenceItem[] = [
  {
    cadence: 'Weekly',
    duration: '30-Minute Sponsor Decision Call',
    title: 'Decisions & Blockers',
    focusItems: [
      'Decisions needed this week',
      'Immediate risks, friction points, and blockers',
      'Accountable owner commitments & deadlines',
      'Upcoming executive moments (Cabinet, Provost, Board)',
    ],
  },
  {
    cadence: 'Monthly',
    duration: '60-Minute Technology Steering Session',
    title: 'Portfolio & Tradeoffs',
    focusItems: [
      'Portfolio delivery status across all workstreams',
      'Investment and team capacity tradeoffs',
      'Cybersecurity and Responsible AI risk posture',
      'Vendor performance and SLA compliance',
    ],
  },
  {
    cadence: 'Quarterly',
    duration: 'Executive Roadmap Reset',
    title: 'Board Narrative & Capital',
    focusItems: [
      'Outcome measures & demonstrable business value',
      'Sequenced capital funding allocations',
      'Stop / Start decisions on underperforming projects',
      'Clear, jargon-free Board of Directors narrative',
    ],
  },
  {
    cadence: 'Always',
    duration: 'One Source of Truth',
    title: 'Governance Discipline',
    focusItems: [
      'Executive Decision Log (all recorded decisions with rationales)',
      'Executive Risk Register (ranked by operational impact)',
      'Priority Portfolio (Now, Next, Later, Stop)',
      'Accountability Map (named owners, milestones, delivery health)',
    ],
  },
];

export const targetSectorsData = [
  {
    id: 'healthcare',
    sector: 'Healthcare Systems & Clinical Networks',
    scale: 'Community Hospitals, Multi-Facility Clinics, Health Networks ($50M–$1B Operating Budget)',
    challenges: 'Epic / Meditech EHR modernization, HHS OCR security audits, HIPAA Security Rules, unmanaged clinical AI, and physician/nurse burnout from EHR friction.',
    buyerTitles: 'Health System CEO, Chief Medical Officer (CMO), Chief Operating Officer, Board Health Committee',
    solution: 'Former healthcare technology advisor (regional health systems) and published clinical informatics author leading EHR stability, FHIR data governance, and regulatory compliance.',
    proofContext: 'Author of 8 peer-reviewed clinical cybersecurity papers (Medical Physics, Applied Radiation Oncology); direct leadership in hospital emergency recovery and E-Variance safety systems.',
  },
  {
    id: 'higher-education',
    sector: 'Higher Education & Academic Research Institutions',
    scale: 'Colleges, R1 Research Universities, Academic Medical Centers',
    challenges: 'High-performance GPU research clusters (Slurm HPC), legacy ERP migration (Banner to Workday/Cloud), FERPA compliance, faculty tech resistance, and tuition-driven budget pressure.',
    buyerTitles: 'University President, Provost, VP for Finance & Administration, Board of Trustees',
    solution: 'Former Director of Enterprise IT at University of Maryland (reporting directly to the Dean of Medicine), directing academic medicine research infrastructure and multi-campus enterprise systems.',
    proofContext: 'Direct stewardship of Slurm HPC clusters, student information systems, and academic health sciences research networks with 99.9% uptime and Zero Trust controls.',
  },
  {
    id: 'mid-market',
    sector: 'Mid-Market & Regulated Enterprise CEOs & Boards',
    scale: 'Growing Organizations ($20M – $250M Annual Revenue / 100–1,500 Employees)',
    challenges: 'Recent CIO departure, outgrowing an entry-level MSP that cannot drive strategy, board demanding NIST AI RMF governance, or upcoming 7-figure vendor renewals needing hard-nosed rationalization.',
    buyerTitles: 'Founder / CEO, Board of Directors, Managing Partner, Chief Operating Officer',
    solution: 'Cabinet-tested executive stewardship (former State CIO who governed a $250M portfolio and rationalized 856 systems to 620), bringing enterprise discipline at a fraction of full-time cost.',
    proofContext: 'PMP®-certified leadership, Maryland Governor AI Sub-Cabinet appointee, delivering $6M recurring annual operational savings through statewide system rationalization.',
  },
];
