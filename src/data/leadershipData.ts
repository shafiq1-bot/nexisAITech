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
  tagline: 'Healthcare System & Academic Medicine CIO | State Government Digital Transformation | Responsible AI & Federated Governance',
  summary:
    'Shafiq Rahman is an accomplished enterprise technology executive with more than two decades of leadership spanning academic health systems, clinical informatics, state government, higher education, and global federated institutions. He has served as State Chief Information Officer (CIO) & Chief Information and Digital Transformation Officer for the Maryland Department of Transportation ($250M+ portfolio, 1,500 IT staff across 6 operating administrations), as Director of Enterprise IT at the University of Maryland School of Medicine reporting directly to the Dean (supporting ~3,000 faculty, ~3,000 staff, >1,300 students/residents, and 25 departments), and currently as Strategic Advisor for Ascension / Saint Agnes Healthcare. An appointee to the Maryland Governor’s AI Sub-Cabinet, Shafiq pairs board-level governance and multi-million dollar portfolio rationalization with deep, hands-on clinical and enterprise systems execution.',
  yearsExperience: 22,
  formerRoles: [
    'Strategic Advisor — Ascension / Saint Agnes Healthcare (Clinical Operations, EHR Workflow & Technology Rationalization)',
    'Appointee — Maryland Governor’s AI Sub-Cabinet (Enterprise AI Governance, Privacy & Cybersecurity Architecture)',
    'Former State CIO & Chief Information and Digital Transformation Officer — Maryland Department of Transportation (MDOT) ($250M+ portfolio, 1,500 IT staff, 6 agencies)',
    'Former Director of Enterprise IT — University of Maryland School of Medicine (UMSOM) (Reporting to Dean, 3,000 faculty, 3,000 staff, 1,300+ students/residents)',
    'Chair — Enterprise IT Governance Board & Architecture Review Board (ARB), State of Maryland (MDOT)',
    'Founding Technology Leadership — Ministry of Education NEAS Program (Pakistan) in partnership with Aga Khan University leadership',
  ],
  keyHighlights: [
    'Current Strategic Advisor at Ascension / Saint Agnes: Advising clinical leadership on hospital technology workflow redesign, system interoperability, and clinical application rationalization.',
    'Appointed to the Maryland Governor’s AI Sub-Cabinet: Formulating statewide executive frameworks balancing artificial intelligence innovation with privacy, cybersecurity, and responsible enterprise architecture.',
    'Former State CIO (Maryland Department of Transportation): Led technology transformation across 6 operating administrations, 1,500 IT professionals, and a $250M+ technology portfolio.',
    'Chaired Enterprise IT Governance & Architecture Review Boards: Established unified standards across a federated enterprise while preserving local operational agility.',
    'Delivered $6 Million in Recurring Annual Savings: Architected and executed application rationalization reducing the enterprise portfolio from approximately 850 to 620 applications.',
    'Director of Enterprise IT at University of Maryland School of Medicine: Reported directly to the Dean; supported an environment of 3,000 faculty, 3,000 staff, >1,300 students, residents and fellows, and 25 academic departments with close academic medical center integration.',
    'Led Meditech-to-Epic Transformation: Orchestrated multi-facility clinical software migration, workflow redesign, interoperability, data integration, and post go-live optimization.',
    'Global & Federated Governance: Formative technology leadership with Pakistan’s Ministry of Education NEAS program partnering with Aga Khan University leadership, bridging multi-country, multi-site institutional models with local realities.',
  ],
  careerTimeline: [
    {
      period: '2024 – Present',
      role: 'Strategic Advisor (Clinical Operations & Technology Rationalization)',
      organization: 'Ascension / Saint Agnes Healthcare',
      description:
        'Working at the direct intersection of clinical operations, medical staff workflows, and enterprise technology. Guiding executive initiatives in workflow redesign, clinical system interoperability, EHR optimization, and application rationalization.',
      impact:
        'Streamlined clinical workflows, addressed integration bottlenecks, and eliminated redundant technology overhead across hospital departments.',
    },
    {
      period: 'Gubernatorial Appointment',
      role: 'Appointee — Enterprise AI, Privacy & Architecture',
      organization: 'Maryland Governor’s AI Sub-Cabinet',
      description:
        'State-level executive leadership balancing AI innovation with rigorous privacy, cybersecurity, responsible use standards, and enterprise cloud architecture across state government and public agencies.',
      impact:
        'Established practical, mission-driven governance frameworks for responsible AI deployment in public sector operations, workforce productivity, and institutional decision-making.',
    },
    {
      period: 'State CIO & CDIO Tenure',
      role: 'Chief Information & Digital Transformation Officer (State CIO)',
      organization: 'Maryland Department of Transportation (MDOT)',
      description:
        'Led enterprise technology transformation across 6 major operating administrations, ~1,500 IT professionals, and a $250M+ technology portfolio. Chaired the Enterprise IT Governance and Architecture Review Boards (ARB), instituting shared security, cloud, and data architectures.',
      impact:
        'Rationalized enterprise software portfolio from 850 to 620 applications, generating approximately $6 million in recurring annual savings, and established high-availability 24/7 mission-critical operations.',
    },
    {
      period: 'Academic Medicine Leadership',
      role: 'Director of Enterprise IT (Reporting to the Dean)',
      organization: 'University of Maryland School of Medicine (UMSOM)',
      description:
        'Executive technology stewardship supporting ~3,000 faculty, ~3,000 staff, >1,300 students, residents and fellows, and ~25 academic departments, tightly integrated into the University of Maryland Medical System. Directed Meditech-to-Epic transformation and clinical integration.',
      impact:
        'Led major Meditech-to-Epic migration and hospital integration, realizing post go-live clinical adoption, workflow optimization, and high-security biomedical research environments.',
    },
    {
      period: 'Foundational Leadership',
      role: 'Senior Technology Leader — National Educational Assessment System (NEAS)',
      organization: 'Ministry of Education (Pakistan) / Aga Khan University Collaboration',
      description:
        'Built large-scale educational assessment and data analysis infrastructure, working in close collaboration with Aga Khan University leaders, establishing foundational expertise in federated, multi-site institutional governance.',
      impact:
        'Pioneered national educational data collection and assessment models adapted to local infrastructure realities.',
    },
  ],
  achievements: [
    { metric: '$6M/yr', label: 'Recurring Savings Generated', detail: 'Rationalized 850 to 620 applications as State CIO (MDOT)' },
    { metric: '$250M+', label: 'Enterprise Portfolio Stewardship', detail: 'Chaired Enterprise IT Governance & Architecture Review Boards across 6 agencies' },
    { metric: '7,300+', label: 'Faculty, Staff & Residents Supported', detail: 'University of Maryland School of Medicine reporting directly to the Dean' },
    { metric: 'Epic / Meditech', label: 'Clinical EHR Transformation', detail: 'Led major Meditech-to-Epic hospital migration & post go-live optimization' },
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
      event: 'International Executive Webinar (Trade Expeditors)',
      topic: 'Leading in the Age of Artificial Intelligence: AI Leadership, Cloud Strategy & Enterprise Modernization',
      location: 'International Broadcast (Live Online)',
      year: '2026',
    },
    {
      event: 'GovExec Government Efficiency Summit',
      topic: 'Accelerating Digital Services, AI Adoption & Portfolio Rationalization in Public Agencies',
      location: 'Washington, DC / National Broadcast',
      year: '2025',
    },
    {
      event: 'AutoTech: Detroit 2024 (DMI Fireside Chat)',
      topic: 'Software-Defined Mobility & Critical Infrastructure Cybersecurity Enclaves',
      location: 'Detroit, MI',
      year: '2024',
    },
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
