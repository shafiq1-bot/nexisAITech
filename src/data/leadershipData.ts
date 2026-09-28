export interface CareerMilestone {
  period: string;
  role: string;
  organization: string;
  description: string;
  impact: string;
}

export interface ExecutiveAchievement {
  metric: string;
  label: string;
  detail: string;
}

export interface PublicationItem {
  title: string;
  publisher: string;
  year: string;
  linkText: string;
  summary: string;
}

export interface SpeakingEngagement {
  event: string;
  topic: string;
  location: string;
  year: string;
}

export interface ExecutiveBio {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  yearsExperience: number;
  formerRoles: string[];
  keyHighlights: string[];
  careerTimeline: CareerMilestone[];
  achievements: ExecutiveAchievement[];
  certifications: string[];
  publications: PublicationItem[];
  speakingEngagements: SpeakingEngagement[];
  awards: string[];
  memberships: string[];
}

export const executiveLeaderData: ExecutiveBio = {
  name: 'Shafiq Rahman, MS, MBA, MCS, PMP®',
  title: 'Fractional CIO & Enterprise Technology Executive Advisor',
  tagline: 'University & Academic Health System CIO | Digital Transformation | AI Governance | Academic & Clinical Informatics',
  summary:
    'Shafiq Rahman is an experienced enterprise technology executive who has served as State Chief Information Officer (CIO) for the Maryland Department of Transportation and as enterprise IT executive at the University of Maryland, Baltimore / University of Maryland School of Medicine. With over 20 years of technology leadership across state government, higher education, academic medicine, and clinical healthcare, Shafiq advises CEOs, university presidents, health system boards, and public authorities on technology strategy, digital transformation, AI governance, cybersecurity, and portfolio rationalization without the overhead or delay of a full-time executive search.',
  yearsExperience: 20,
  formerRoles: [
    'Former State CIO — Maryland Department of Transportation (MDOT) ($250M technology portfolio, 1,500 IT staff across 6 agencies)',
    'Former Enterprise IT Executive — University of Maryland, Baltimore (UMB) & School of Medicine (UMSOM)',
    'Principal Executive Advisor — Nexis AI Fractional CIO & AI Governance Advisory',
    'Executive Advisor — Zero Trust Cybersecurity, NIST AI RMF Governance & Enterprise Modernization',
  ],
  keyHighlights: [
    'Former State CIO (Maryland Department of Transportation): Executive stewardship over an approximately $250M technology portfolio and 1,500 IT staff across six state agencies.',
    'Former Enterprise IT Leader (University of Maryland, Baltimore / UMSOM): Multi-year executive leadership across academic medicine, biomedical research labs, clinical hospital environments, and campus systems.',
    'Pioneered "Diagnose → Govern → Deliver" operating model delivering executive decision control and board-ready roadmaps within 30 days.',
    'Led governance and architecture for mission-critical clinical, enterprise, and research systems across Epic EHR, FHIR, Banner, SAP, and Slurm HPC GPU clusters.',
    'Structured Zero Trust and regulatory compliance frameworks aligned with NIST SP 800-53 Rev 5, HHS OCR Security Guidelines, HIPAA, and FERPA.',
    'Chaired executive technology steering committees advising state cabinet secretaries, university provosts, health system leadership, and boards of directors.',
  ],
  careerTimeline: [
    {
      period: '2021 – Present',
      role: 'Principal Executive Advisor & Fractional CIO',
      organization: 'Nexis AI | Executive Technology Advisory & Enterprise AI',
      description:
        'Providing fractional CIO leadership, 30-day technology diagnostics, AI governance charters (NIST AI RMF), and portfolio turnarounds for healthcare systems, universities, and public sector organizations.',
      impact: 'Established board-level decision systems, stopped stalled multi-million dollar vendor expenditures, and established responsible AI frameworks for mission-driven institutions.',
    },
    {
      period: 'State CIO Tenure',
      role: 'State Chief Information Officer (CIO) / Chief Information & Digital Transformation Officer',
      organization: 'Maryland Department of Transportation (MDOT)',
      description:
        'Executive governance, capital budgeting, cybersecurity defense, and enterprise systems modernization across an approximately $250 million technology portfolio and 1,500 IT staff spanning six state transportation and public safety agencies.',
      impact: 'Consolidated statewide multi-agency infrastructure, established 99.999% uptime mission-critical dispatch operations, and rationalized multi-million dollar legacy software contracts.',
    },
    {
      period: 'Enterprise IT Leadership',
      role: 'Director of Enterprise IT & Infrastructure',
      organization: 'University of Maryland, Baltimore (UMB) & School of Medicine (UMSOM)',
      description:
        'Executive leadership in an academic medicine, healthcare research, and graduate health sciences environment. Directed central core infrastructure, academic systems, enterprise data centers, and clinical network enclaves.',
      impact: 'Modernized campus core systems, established HIPAA/FERPA-compliant biomedical research computing enclaves, and supported thousands of clinical faculty, researchers, and students.',
    },
    {
      period: 'Senior Technology Architecture',
      role: 'Director of Enterprise Infrastructure & Security Architecture',
      organization: 'Regional Public Sector & Public Safety Technology Systems',
      description:
        'Directed high-resiliency regional fiber backbones, multi-site failover data centers, and identity-bound network perimeters for emergency public safety services.',
      impact: 'Delivered zero-downtime disaster recovery architecture and modernized core public infrastructure.',
    },
  ],
  achievements: [
    { metric: '20+ Yrs', label: 'Executive Technology Leadership', detail: 'Real C-suite stewardship across state government, academic medicine & healthcare' },
    { metric: '$250M', label: 'State Technology Portfolio', detail: 'Fiduciary leadership across 6 agencies and 1,500 IT staff as State CIO' },
    { metric: '30 Days', label: 'Executive Diagnostic', detail: 'Rapid board-ready roadmap, priority portfolio & 90-day action charter' },
    { metric: '100%', label: 'Audit Accountability', detail: 'NIST 800-53, HIPAA, HHS OCR, and NIST AI RMF governance frameworks' },
  ],
  certifications: [
    'PMP® (Project Management Professional - PMI)',
    'MS (Master of Science)',
    'MBA (Master of Business Administration)',
    'MCS (Master of Computer Science)',
    'NIST Cybersecurity & AI Risk Management Frameworks',
    'TOGAF Enterprise Architecture Principles',
  ],
  publications: [
    {
      title: 'Sovereign AI Enclaves in Public Research Universities: A Governance Blueprint',
      publisher: 'Higher Education Technology & Research Executive Insights',
      year: '2025',
      linkText: 'Executive Whitepaper',
      summary: 'Strategies for provisioning GPU clusters with FERPA and NIST 800-171 shielding to prevent research IP leakage.',
    },
    {
      title: 'Zero Trust Architecture in Epic & EHR Ecosystems',
      publisher: 'Healthcare Information Management Systems Executive Review',
      year: '2024',
      linkText: 'Clinical Architecture Review',
      summary: 'Micro-segmentation guidelines and identity-bound FHIR endpoints for modern health system data exchanges.',
    },
    {
      title: 'Application Portfolio Rationalization: Cutting IT Overhead in State Government',
      publisher: 'Public Sector IT Transformation Leadership Review',
      year: '2023',
      linkText: 'State CIO Case Study',
      summary: 'Framework for evaluating legacy application debt, licensing overlap, and cloud migration roadmaps.',
    },
  ],
  speakingEngagements: [
    {
      event: 'Enterprise Technology Executive Summit',
      topic: 'The CIO Playbook for Responsible AI Governance and Zero Trust Oversight',
      location: 'Washington, DC',
      year: '2025',
    },
    {
      event: 'Higher Education Technology Conference',
      topic: 'Governing Research Computing & AI Clusters in Academic Medical Centers',
      location: 'Baltimore, MD',
      year: '2024',
    },
    {
      event: 'Healthcare CIO Forum',
      topic: 'Connecting Clinical Systems (Epic / Meditech) with High-Governance AI',
      location: 'Philadelphia, PA',
      year: '2024',
    },
  ],
  awards: [],
  memberships: [
    'College of Healthcare Information Management Executives (CHIME)',
    'Society for Information Management (SIM)',
    'EDUCAUSE Executive Technology Community',
    'Project Management Institute (PMI)',
  ],
};
