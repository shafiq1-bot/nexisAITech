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
  name: 'Shafiq Rahman',
  title: 'Managing Director & Principal Executive Advisor',
  tagline: 'Former Chief Information Officer & Technology Leader | 20+ Years of Enterprise Advisory, Consulting & Services',
  summary:
    'Led by Shafiq Rahman, a former Chief Information Officer with over 20 years of hands-on executive leadership, Nexis AI operates as an executive advisory, strategy consulting, and technology services firm. We deliver high-impact digital transformation, autonomous AI agent architectures, Zero Trust cybersecurity, and high-performance research computing. Having overseen $250M+ annual IT operating and capital budgets, campus-wide cloud migrations, Epic EHR interoperability deployments, and CMMC/NIST 800-53 compliance enclaves, our advisory practice bridges C-suite vision with rigorous engineering execution for government agencies, health systems, R1 research universities, and global commercial enterprises.',
  yearsExperience: 20,
  formerRoles: [
    'Chief Information Officer (CIO) & Vice President of Information Technology',
    'Associate Vice President & Chief Technology Officer (CTO)',
    'Executive Director of Enterprise Infrastructure & Cybersecurity',
    'Senior Principal Executive Advisor — Healthcare, Higher Education & Public Sector',
  ],
  keyHighlights: [
    'Managed $250M+ annual IT operating and capital budgets across multi-site healthcare networks and research universities/institutes.',
    'Globally experienced across United States, Saudi Arabia (KSA Vision 2030), and UAE (AI Strategy 2031) digital transformations.',
    'Engineered Zero Trust cybersecurity frameworks compliant with NIST SP 800-53 Rev 5, FedRAMP, and HIPAA Privacy Rules.',
    'Architected high-performance computing (HPC) GPU clusters (NVIDIA H100/A100) supporting over 1,200 scientific research labs.',
    'Overseen enterprise EHR integrations across Epic Systems, MEDITECH, and HL7 FHIR interoperability gateways for 25M+ patient records.',
    'Advised state cabinet secretaries, university presidents, and healthcare C-suites on sovereign data residency and SDAIA / NCA cybersecurity standards.',
  ],
  careerTimeline: [
    {
      period: '2021 – Present',
      role: 'Managing Director & Principal Executive Advisor',
      organization: 'Nexis AI Inc. (Global Advisory, Consulting & Services Practice)',
      description:
        'Founding principal guiding executive leadership, CIOs, and CISOs on autonomous AI agent architectures, Zero Trust modernization, and enterprise architecture rationalization across US, KSA, and UAE markets.',
      impact: 'Advised over 40 enterprise clients, reducing IT operational friction by an average of 38% and achieving 100% audit pass rates.',
    },
    {
      period: '2015 – 2021',
      role: 'Chief Information Officer (CIO) & Vice President of IT',
      organization: 'Academic Healthcare & Higher Education Research Health System',
      description:
        'Directed central IT operations, EHR infrastructure, high-performance research computing, campus networks, and cybersecurity enclaves across multi-site health systems and research institutes.',
      impact: 'Modernized 12 hospitals onto unified Epic EHR with FHIR APIs, deployed 128-node NVIDIA GPU research cluster, and managed $250M+ annual operating/capital budgets.',
    },
    {
      period: '2010 – 2015',
      role: 'Associate VP & Chief Technology Officer (CTO)',
      organization: 'State University System & Research Foundation',
      description:
        'Spearheaded university enterprise architecture, Ellucian Banner ERP modernization, Shibboleth identity federation, and campus data center consolidation.',
      impact: 'Migrated 35,000 students and 4,000 faculty to cloud-native productivity enclaves while achieving NIST 800-171 CMMC research compliance.',
    },
    {
      period: '2004 – 2010',
      role: 'Director of Enterprise Infrastructure & Security Architecture',
      organization: 'Regional Government & Public Safety Technology Division',
      description:
        'Designed resilient fiber networks, Cisco core routing, VMware cluster virtualization, and disaster recovery data centers for public safety and transportation networks.',
      impact: 'Built 99.999% uptime resilient dual data centers supporting emergency 911 dispatch and state transportation routing.',
    },
  ],
  achievements: [
    { metric: '20+ Yrs', label: 'CIO Leadership', detail: 'Proven C-level technology governance, advisory & consulting' },
    { metric: '$250M+', label: 'IT Budget Managed', detail: 'Fiduciary responsibility across healthcare networks & research universities' },
    { metric: '25M+', label: 'EHR / FHIR Records', detail: 'Secure healthcare data interoperability' },
    { metric: '100%', label: 'Audit Success', detail: 'Zero material weaknesses in NIST 800-53 & HIPAA audits' },
  ],
  certifications: [
    'TOGAF 10 Certified Enterprise Architect',
    'CISSP (Certified Information Systems Security Professional)',
    'CISM (Certified Information Security Manager)',
    'PMP (Project Management Professional - PMI)',
    'Epic Certified Systems & Technical Architect',
    'AWS Certified Solutions Architect – Professional',
    'NVIDIA Certified Infrastructure Specialist',
    'ITIL v4 Strategic Leader',
  ],
  publications: [
    {
      title: 'Sovereign AI Enclaves in Public Research Universities: A Governance Blueprint',
      publisher: 'Journal of Higher Education Information Technology & Research',
      year: '2025',
      linkText: 'Executive Whitepaper PDF',
      summary: 'Strategies for provisioning GPU clusters with FERPA and NIST 800-171 shielding to prevent research IP leakage.',
    },
    {
      title: 'Zero Trust Architecture in Epic & Cerner EHR Ecosystems',
      publisher: 'Healthcare Information Management Systems Executive Review',
      year: '2024',
      linkText: 'Clinical Architecture Review',
      summary: 'Micro-segmentation guidelines and identity-bound FHIR endpoints for modern health system data exchanges.',
    },
    {
      title: 'Application Portfolio Rationalization: Cutting 30% IT Overhead in State Government',
      publisher: 'Public Sector IT Transformation Leadership Quarterly',
      year: '2023',
      linkText: 'State CIO Case Study',
      summary: 'Framework for evaluating legacy application debt, licensing overlap, and cloud migration roadmaps.',
    },
  ],
  speakingEngagements: [
    {
      event: 'Gartner IT Symposium / Xpo',
      topic: 'Keynote: The CIO Playbook for Autonomous AI Agents and Zero Trust Governance',
      location: 'Orlando, FL',
      year: '2025',
    },
    {
      event: 'EDUCAUSE Annual Conference',
      topic: 'Building R1 University High-Performance GPU Computing & Slurm Orchestration',
      location: 'Chicago, IL',
      year: '2024',
    },
    {
      event: 'HIMSS Global Health Conference',
      topic: 'Connecting Legacy EHRs (Epic/MEDITECH) with Real-Time FHIR AI Analytics',
      location: 'Orlando, FL',
      year: '2024',
    },
    {
      event: 'GITEX Global & AI Summit Dubai',
      topic: 'Sovereign AI Infrastructure & Data Residency in the GCC Region',
      location: 'Dubai, UAE',
      year: '2023',
    },
  ],
  awards: [
    'Top 20 Public Sector Technology CIOs of the Year',
    'Healthcare IT Transformation Pioneer Award (HIMSS Regional Chapter)',
    'Higher Education Digital Innovation Leadership Award',
    'Cyber Security Governance Executive Excellence Award',
  ],
  memberships: [
    'CHIME (College of Healthcare Information Management Executives) – Fellow Member',
    'SIM (Society for Information Management) – Executive Board Member',
    'EDUCAUSE Executive Leadership Advisory Council',
    'IEEE Senior Member & Computer Society Technical Committee',
    'ISACA Certified CISM Industry Ambassador',
  ],
};
