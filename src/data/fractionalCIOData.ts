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

export const diagnosticSteps: DiagnosticStep[] = [
  {
    stepNumber: 1,
    title: 'Frame the Mandate',
    duration: 'Days 1–5',
    description: 'Confirm the triggering event, business outcomes, constraints, stakeholders, and the decisions that cannot wait.',
    actions: [
      'Executive sponsor alignment session (CEO / Provost / Board Chair / Agency Head)',
      'Establish explicit non-disclosure, governance scope, and decision boundary',
      'Inventory urgent operational, AI, cybersecurity, and vendor pressure points',
    ],
  },
  {
    stepNumber: 2,
    title: 'Interview the Decision System',
    duration: 'Days 6–15',
    description: 'Conduct 8–12 structured conversations across executive leadership, technology, finance, operations, risk, clinical/academic leadership, and selected vendors.',
    actions: [
      'Structured 45-min executive interviews across functional leaders',
      'Finance & contract audit: budget allocation, vendor commitments, shelfware',
      'Clinical / Academic / Operations pain points and unmanaged shadow AI identification',
    ],
  },
  {
    stepNumber: 3,
    title: 'Assess the Portfolio',
    duration: 'Days 16–22',
    description: 'Review governance, investment alignment, cyber posture, architecture, delivery health, talent, vendors, data, and AI readiness using a consistent scorecard.',
    actions: [
      'Evaluate cyber posture against NIST SP 800-53 Rev 5 & HHS OCR security rules',
      'Score AI readiness and data governance under NIST AI RMF framework',
      'Map legacy systems debt vs. modernization milestones (GAO legacy criteria)',
    ],
  },
  {
    stepNumber: 4,
    title: 'Force Priorities',
    duration: 'Days 23–27',
    description: 'Separate immediate risk controls, 90-day decisions, and 12-month transformation moves. Identify what should stop, continue, accelerate, or be re-scoped.',
    actions: [
      'Categorize all active initiatives into: Now, Next, Later, or Stop',
      'Uncover stalled or leaking software investments to immediately freeze or cancel',
      'Formulate board-ready investment sequence with named accountable owners',
    ],
  },
  {
    stepNumber: 5,
    title: 'Secure Executive Agreement',
    duration: 'Days 28–30',
    description: 'Deliver a board-ready readout, named owners, an investment sequence, a risk register, and a recommendation for the next operating cadence.',
    actions: [
      'Live executive & board-ready readout presentation with executive Q&A',
      'Delivery of the 3 core artifacts: Executive Brief, Priority Portfolio, and 90-Day Charter',
      'Clear decision sign-off on subsequent stabilization and governance cadence',
    ],
  },
];

export const diagnosticDeliverables: DiagnosticDeliverable[] = [
  {
    title: 'Deliverable 1: Executive Brief',
    pagesOrFormat: '10–15 pages, decision-led',
    description: 'Succinct, jargon-free board memo detailing exact technology risks, capital efficiencies, vendor accountability gaps, and AI governance posture.',
  },
  {
    title: 'Deliverable 2: Priority Portfolio',
    pagesOrFormat: 'Now • Next • Later • Stop',
    description: 'Actionable classification of all technology projects and spend, identifying immediate leak stoppages, urgent cyber fixes, and sequenced initiatives.',
  },
  {
    title: 'Deliverable 3: 90-Day Charter',
    pagesOrFormat: 'Owners • Cadence • Measures',
    description: 'Execution roadmap assigning named accountable leaders, executive steering rhythm, risk thresholds, and concrete milestones for immediate control.',
  },
];

export const retainerPackages: RetainerPackage[] = [
  {
    id: 'advisory',
    name: 'Executive Advisory',
    subtitle: 'Strategic Decision Support',
    bestFor: 'Stable team with a strategic decision gap or AI/cyber governance need',
    capacity: 'Up to 1 day / week',
    recommendedFee: '$12,000 – $15,000 / month',
    highlights: [
      'Weekly sponsor touchpoint and high-stakes decision framing',
      'Monthly executive technology steering committee facilitation',
      'Portfolio, risk, and key vendor accountability oversight',
      'Board and leadership reporting narrative & slide decks',
      'Quarterly technology & AI roadmap refresh',
      'Access to standard governance templates and policy sets',
    ],
  },
  {
    id: 'transformation-lead',
    name: 'Transformation Lead',
    subtitle: 'Active Portfolio & AI Reset',
    bestFor: 'Organizations resetting stalled projects, navigating AI adoption, or recovering from audit findings',
    capacity: 'Up to 2 days / week',
    recommendedFee: '$18,000 – $22,000 / month',
    popular: true,
    highlights: [
      'All Executive Advisory features included',
      'Hands-on portfolio governance across technology, cyber & AI',
      'Vendor negotiation, dispute resolution & SLA enforcement',
      'Direct executive coaching for internal IT directors and managers',
      'Capital budget reallocation ($10M–$250M portfolios)',
      'NIST AI RMF and HHS OCR cyber compliance implementation cadence',
    ],
  },
  {
    id: 'interim-cio',
    name: 'Interim CIO',
    subtitle: 'Crisis, Transition & Vacancy Leadership',
    bestFor: 'Sudden CIO departure, post-incident stabilization, merger integration, or while running a full-time search',
    capacity: 'Up to 3 days / week',
    recommendedFee: '$25,000 – $28,000 / month',
    highlights: [
      'Immediate executive control of the technology organization',
      'Direct line to CEO, Provost, Agency Head, or Board of Directors',
      'Full vendor, team, capital budget, and operational stewardship',
      'Assistance framing permanent CIO search profile and candidate screening',
      'Seamless executive handover to the permanent hire upon onboarding',
      'Active crisis management, audit remediation, and modernization reset',
    ],
  },
];

export const specializedSprints: SpecializedSprint[] = [
  {
    id: 'ai-governance',
    title: 'Responsible AI Governance Sprint',
    timeline: '6–8 weeks',
    feeRange: '$28,000 – $45,000 fixed-fee',
    badge: 'NIST AI RMF Aligned',
    summary: 'Turn unmanaged AI experimentation and vendor hype into an executive-governed, compliant AI portfolio.',
    keyOutputs: [
      'Enterprise AI inventory & shadow AI discovery across departments',
      'AI Governance Charter & risk-tier classification matrix',
      'Intake and approval workflow for new AI pilots and tools',
      'Responsible AI policy set, data boundaries & copyright controls',
      'Vendor AI evaluation checklist and contract terms',
      'Pilot scorecard measuring demonstrable business value & safety',
    ],
    referenceFramework: 'National Institute of Standards and Technology (NIST) AI Risk Management Framework 1.0',
  },
  {
    id: 'cyber-modernization',
    title: 'Cyber Resilience & Modernization Roadmap',
    timeline: '6–10 weeks',
    feeRange: '$25,000 – $40,000 fixed-fee',
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
    sector: 'Healthcare Systems & Health-Adjacent',
    scale: '300 – 5,000 employees / multi-facility networks',
    challenges: 'Epic/Cerner EHR modernization, HHS OCR security audits, HIPAA privacy, shadow clinical AI, clinician burnout.',
    buyerTitles: 'CEO, COO, CFO, Board Chair, Chief Medical Officer',
    solution: 'Former CIO leadership bridging clinical workflows, FHIR data governance, and strict healthcare regulatory compliance.',
  },
  {
    sector: 'Higher Education & Research Universities',
    scale: 'Colleges, R1 Universities, Academic Medical Centers',
    challenges: 'ERP modernization (Banner/Workday), high-performance GPU research clusters, FERPA data privacy, tuition budget constraints.',
    buyerTitles: 'President, Provost, Vice President for Finance, Board of Trustees',
    solution: 'Seasoned higher-ed IT leadership (former UMB Director of Enterprise IT) balancing open research with strict compliance.',
  },
  {
    sector: 'Public Sector & State/Local Authorities',
    scale: 'State agencies, transportation authorities, public utilities',
    challenges: 'Decades-old legacy systems (GAO findings), public procurement friction, CJIS/NIST 800-53 security mandates.',
    buyerTitles: 'Cabinet Secretary, Agency Director, State COO, Chief Financial Officer',
    solution: 'Former State CIO stewardship (Maryland Dept of Transportation — $250M portfolio, 1,500 staff) navigating public governance.',
  },
];
