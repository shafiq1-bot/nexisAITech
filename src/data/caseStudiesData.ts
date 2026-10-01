export interface DetailedCaseStudy {
  id: string;
  title: string;
  category: 'State Government' | 'Academic Medicine' | 'Healthcare Systems' | 'Higher Education' | 'Enterprise Modernization';
  context: string;
  challenge: string;
  leadershipApproach: string;
  technologiesUsed: string[];
  governance: string;
  outcome: string;
  lessons: string;
  keyOutputs: string[];
}

export const detailedCaseStudies: DetailedCaseStudy[] = [
  {
    id: 'state-government-portfolio-rationalization',
    title: 'State Transportation Authority: Multi-Agency Technology Portfolio Rationalization & Governance',
    category: 'State Government',
    context:
      'Led technology transformation across six major operating administrations, approximately 1,500 IT professionals, and a $250M+ technology portfolio as Chief Information & Digital Transformation Officer (State CIO) for the Maryland Department of Transportation.',
    challenge:
      'Decades of decentralized procurement resulted in over 850 disparate applications across six operating administrations with overlapping functional boundaries, escalating vendor maintenance contracts, inconsistent security controls, and high operational overhead.',
    leadershipApproach:
      'Chaired the Enterprise IT Governance and Architecture Review Boards (ARB). Instituted common technology and security standards across the federated organization without compromising local operational flexibility. Orchestrated a rigorous application rationalization framework across all administrations.',
    technologiesUsed: [
      'Enterprise Architecture Review Board (ARB) Governance',
      'Application Portfolio Scoring (TIME: Tolerate, Invest, Migrate, Eliminate)',
      'Enterprise Identity & Access Management (IAM)',
      'Multi-agency Cloud Infrastructure & High-Availability Dispatch',
      'NIST SP 800-53 Rev 5 & State Cybersecurity Mandates',
    ],
    governance:
      'Enterprise IT Governance Board and ARB charters with cabinet-level reporting, unified capital procurement controls, and transparent audit-ready decision trails.',
    outcome:
      'Reduced application portfolio from approximately 850 to 620 applications, generating approximately $6 million in recurring annual savings, eliminating redundant vendor contracts, and modernizing digital citizen services.',
    lessons:
      'Federated governance succeeds when enterprise standards are established to connect strategy and security while preserving the operational flexibility individual operating agencies require.',
    keyOutputs: [
      '850-to-620 Application Portfolio Rationalization Matrix',
      '$6M Recurring Annual Savings Realization Roadmap',
      'Enterprise Architecture Review Board (ARB) Charter',
    ],
  },
  {
    id: 'academic-medicine-research-computing',
    title: 'Academic Health Center & University: High-Performance Biomedical Research Computing & Compliance Enclaves',
    category: 'Academic Medicine',
    context:
      'Director of Enterprise IT at the University of Maryland School of Medicine, reporting directly to the Dean, supporting an environment of approximately 3,000 faculty, 3,000 staff, more than 1,300 students, residents and fellows, and approximately 25 academic departments with close integration into the broader academic medical center.',
    challenge:
      'Faculty investigators, clinical trial teams, and genomic researchers required rapid computational power for complex biomedical workflows, but siloed departmental computing created security vulnerabilities, HIPAA/FERPA audit exposures, and inefficient capital spending.',
    leadershipApproach:
      'Conducted structured stakeholder discovery across academic deans, hospital clinical leadership, research vice presidents, and principal investigators. Architected a centralized, sovereign research computing strategy providing high-throughput GPU capacity with built-in data compliance boundaries.',
    technologiesUsed: [
      'High-Performance Computing (HPC) GPU Architectures',
      'Slurm Workload Orchestration & Job Scheduling',
      'High-Throughput Parallel Research Storage',
      'Zero Trust Identity Federation (InCommon / Shibboleth)',
      'HIPAA & FERPA Data Protection Enclaves',
    ],
    governance:
      'Established a joint Research Computing Governance Board with faculty representation, tiered access controls for sensitive clinical trial data, and clear cost-recovery allocation policies.',
    outcome:
      'Eliminated research cluster job waitlists, secured high-compliance research computing environments, and protected university intellectual property and federal grant standing across 25 academic departments.',
    lessons:
      'In academic medical centers, researchers will bypass central IT if performance falls short; enterprise governance must make the compliant path the fastest and easiest option for faculty.',
    keyOutputs: [
      'Sovereign Biomedical Research Computing Architecture Blueprint',
      'Joint Academic-Clinical Data Governance Charter',
      'Multi-Tiered Grant Compliance Risk Matrix',
    ],
  },
  {
    id: 'clinical-interoperability-ehr-modernization',
    title: 'Health System EHR Transformation & Clinical Operations: Meditech-to-Epic & Strategic Advisory',
    category: 'Healthcare Systems',
    context:
      'Led major clinical technology initiatives including Meditech-to-Epic transformation and hospital integration across affiliated health system environments. Currently serving as Strategic Advisor with Ascension / Saint Agnes Healthcare, addressing clinical operations, workflow redesign, and technology rationalization.',
    challenge:
      'Transitioning from legacy hospital systems (Meditech) to modern enterprise EHRs (Epic) often risks clinical disruption, physician burnout, and unrealized investment if treated merely as an IT software deployment rather than an operational transformation.',
    leadershipApproach:
      'Enforced the foundational principle that the value of an EHR investment is realized after go-live through clinical adoption, workflow redesign, interoperability, data integration, governance, optimization, and measurable clinical and operational outcomes. Conducted rigorous workflow testing with clinical department heads.',
    technologiesUsed: [
      'Epic EHR Enterprise Suite & Meditech Legacy Migration',
      'HL7 v2 & FHIR R4 API Interoperability Gateways',
      'Clinical Decision Support & CPOE Workflow Redesign',
      'Ascension / Saint Agnes Clinical System Integration',
      'HHS OCR & HIPAA Security Rule Controls',
    ],
    governance:
      'Clinical informatics steering committees, physician-led change advisory boards, post go-live optimization charters, and continuous audit verification against HHS OCR cybersecurity guidance.',
    outcome:
      'Delivered seamless Meditech-to-Epic migration across acute and ambulatory facilities, elevated physician workflow efficiency, reduced charting friction, and rationalized clinical software tools.',
    lessons:
      'The true return on investment in healthcare technology happens post go-live: long-term success requires sustained clinician engagement, continuous workflow redesign, and disciplined data governance.',
    keyOutputs: [
      'Meditech-to-Epic Clinical Migration & Integration Blueprint',
      'Post Go-Live Physician Workflow Optimization Framework',
      'Clinical Application Rationalization Roadmap',
    ],
  },
  {
    id: 'legacy-enterprise-modernization-cloud',
    title: 'Higher Education Enterprise: ERP Modernization, Clean-Core Architecture & Cloud Transition',
    category: 'Higher Education',
    context:
      'A major state university enterprise operating heavily customized on-premises student information and financial ERP systems with rising operational risk.',
    challenge:
      'Decades of custom codebase modifications made upgrading core administrative systems virtually impossible. Facing impending vendor end-of-support deadlines and heightened state cybersecurity reporting requirements, leadership needed an executive roadmap.',
    leadershipApproach:
      'Framed the initiative for the Board of Trustees and Provost not as a technical upgrade, but as an institutional operating model reset. Introduced "Clean-Core" principles to separate core transactional records from custom workflows.',
    technologiesUsed: [
      'Higher Ed ERP Systems (Banner / Workday / SAP environments)',
      'Cloud Infrastructure Migration (Hybrid Sovereign Enclaves)',
      'Zero Trust Role-Based Access Controls (RBAC)',
      'Automated Data Pipeline Ingestion',
    ],
    governance:
      'Instituted an executive project oversight committee chaired by the CFO and CIO, with mandatory change-order gates preventing non-standard customizations.',
    outcome:
      'Successfully migrated core administrative workloads to scalable cloud infrastructure, reduced custom technical debt by over 60%, and passed comprehensive state security audits.',
    lessons:
      'Executive governance must protect the "Clean Core" principle against well-intentioned departmental customization requests to avoid repeating legacy debt.',
    keyOutputs: [
      '24-Month Phased Cloud Modernization Roadmap',
      'Clean-Core Customization Governance Policy',
      'Executive Board Risk & Financial Allocation Register',
    ],
  },
];
