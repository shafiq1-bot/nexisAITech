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
  title: 'Owner, Fractional CIO & AI Governance Principal',
  tagline: 'Former State CIO & Higher-Ed IT Director | 20+ Years Executive Technology Leadership across Healthcare, Higher Education & Government',
  summary:
    'Shafiq Rahman is a former State CIO (Maryland Department of Transportation) and former Director of Enterprise IT (University of Maryland, Baltimore) with over 20 years of hands-on executive technology leadership. He helps healthcare, higher education, and public-sector leaders turn technology risk and AI ambition into an executable portfolio—without the cost or delay of a full-time CIO search. Having governed a $250M+ portfolio and 1,500 IT staff spanning six agencies, complex academic health centers, and sovereign cloud environments, Shafiq provides the seasoned judgment and operational discipline that only an experienced CIO can bring.',
  yearsExperience: 20,
  formerRoles: [
    'Former State CIO — Maryland Department of Transportation (Governing $250M portfolio & 1,500 IT staff across 6 agencies)',
    'Former Director of Enterprise IT — University of Maryland, Baltimore (Academic Medicine & Health Sciences)',
    'Managing Principal & Fractional CIO — Healthcare, Higher Education & Public Sector Technology Advisory',
    'Executive Advisor — Zero Trust Cybersecurity, NIST AI RMF Governance & Legacy Modernization',
  ],
  keyHighlights: [
    'Former State CIO for Maryland Department of Transportation: directed an approximately $250 million technology portfolio and 1,500 IT staff across six major agencies.',
    'Former Director of Enterprise IT at University of Maryland, Baltimore: long-tenure executive stewardship in a high-stakes academic medicine and healthcare research environment.',
    'Productized "Diagnose → Govern → Deliver" operating model delivering rapid executive control and board-ready roadmaps within 30 days.',
    'Engineered Zero Trust cybersecurity frameworks compliant with NIST SP 800-53 Rev 5, HHS OCR Security Guidelines, and HIPAA Privacy Rules.',
    'Architected high-performance computing (HPC) research environments and clinical systems interoperability (Epic EHR, FHIR, Banner, SAP).',
    'Chaired executive technology steering committees, advising Cabinet Secretaries, University Provosts, CEOs, and Health System Boards.',
  ],
  careerTimeline: [
    {
      period: '2021 – Present',
      role: 'Owner, Fractional CIO & AI Governance Principal',
      organization: 'Fractional CIO & AI Governance Advisory / Nexis AI',
      description:
        'Guiding CEOs, Provosts, Agency Heads, and Board Chairs on 30-day technology diagnostics, fractional CIO retainers, responsible AI governance charters (NIST AI RMF), and portfolio risk turnaround.',
      impact: 'Delivered executive turnarounds across regulated institutions, stopping stalled multi-million dollar vendor leaks and achieving 100% audit pass rates.',
    },
    {
      period: 'State CIO Tenure',
      role: 'State Chief Information Officer (CIO)',
      organization: 'Maryland Department of Transportation (MDOT)',
      description:
        'Executive governance, capital budgeting, cybersecurity defense, and enterprise systems modernization across an approximately $250 million technology portfolio and 1,500 IT staff spanning six state transportation and public safety agencies.',
      impact: 'Consolidated statewide multi-agency infrastructure, established 99.999% uptime mission-critical dispatch operations, and rationalized multi-million dollar legacy software contracts.',
    },
    {
      period: 'Director Tenure',
      role: 'Director of Enterprise IT & Infrastructure',
      organization: 'University of Maryland, Baltimore (UMB)',
      description:
        'Long-tenure leadership in an academic medicine, healthcare research, and graduate health sciences environment. Directed central core infrastructure, academic systems, enterprise data centers, and clinical network enclaves.',
      impact: 'Spearheaded campus-wide modernization, HIPAA/FERPA compliance shielding for biomedical research, and resilient enterprise systems for thousands of clinical faculty and students.',
    },
    {
      period: 'Senior Technology Architect',
      role: 'Director of Infrastructure & Enterprise Security Architecture',
      organization: 'Regional Government & Public Safety Technology Division',
      description:
        'Architected high-resiliency regional fiber backbones, multi-site failover data centers, and identity-bound network perimeters for emergency public safety services.',
      impact: 'Delivered zero-downtime disaster recovery architecture and modernized core public infrastructure.',
    },
  ],
  achievements: [
    { metric: '20+ Yrs', label: 'Executive CIO Experience', detail: 'Real C-suite stewardship across state government, academic medicine & healthcare' },
    { metric: '$250M', label: 'State Portfolio Governed', detail: 'Fiduciary leadership across 6 agencies and 1,500 IT staff as State CIO' },
    { metric: '30 Days', label: 'Executive Diagnostic', detail: 'Rapid board-ready roadmap, priority portfolio & 90-day action charter' },
    { metric: '100%', label: 'Audit Accountability', detail: 'NIST 800-53, HIPAA, HHS OCR, and NIST AI RMF governance frameworks' },
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
