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
      'A major state transportation department encompassing six operational business units and public safety divisions, supporting thousands of front-line workers and mission-critical 24/7 dispatch systems across an approximately $250M technology portfolio and 1,500 IT staff.',
    challenge:
      'Decades of decentralized procurement resulted in over 180 legacy applications with overlapping functional boundaries, escalating maintenance contracts, inconsistent cybersecurity controls, and delayed statutory modernization milestones.',
    leadershipApproach:
      'As State CIO, instituted a unified "Diagnose → Govern → Deliver" portfolio review across all six business units. Formed an executive technology investment council, established transparent scoring criteria for legacy systems (Tolerate, Invest, Migrate, Eliminate), and aligned capital budget requests directly with cabinet priorities.',
    technologiesUsed: [
      'Enterprise Architecture Framework (TOGAF principles)',
      'Legacy ERP & Fleet Maintenance Systems',
      'Unified Identity & Access Management (IAM)',
      'Multi-site High-Availability Data Centers',
      'NIST SP 800-53 Rev 5 Security Controls',
    ],
    governance:
      'Established executive steering committees with named accountable business owners, consolidated IT procurement authority, and instituted quarterly cabinet-level milestone readouts with audit-proof tracking.',
    outcome:
      'Rationalized redundant legacy software contracts, stabilized critical 99.999% dispatch uptime, eliminated shadow IT procurement, and redirected capital into modern digital public services.',
    lessons:
      'Technology modernization in the public sector succeeds only when executive governance bridges legislative mandates with operational department heads before contracts are signed.',
    keyOutputs: [
      'Comprehensive Application Portfolio Rationalization Matrix',
      'Unified Multi-Agency Capital Technology Budget Schedule',
      'Standardized Security & Disaster Recovery Operating Charter',
    ],
  },
  {
    id: 'academic-medicine-research-computing',
    title: 'Academic Health Center & University: High-Performance Biomedical Research Computing & Compliance Enclaves',
    category: 'Academic Medicine',
    context:
      'A leading academic health center and health sciences university with biomedical research laboratories, clinical trial facilities, and graduate schools of medicine, pharmacy, nursing, and dentistry.',
    challenge:
      'Faculty investigators and computational genomicists faced multi-week queue backlogs on legacy campus computing systems. Desperate research teams began setting up departmental shadow GPU workstations, inadvertently creating severe data leakage risks under HIPAA, FERPA, and federal grant compliance guidelines.',
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
      'Eliminated research cluster job waitlists, secured high-compliance research computing environments, and protected university intellectual property and federal grant standing.',
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
    title: 'Regional Healthcare Health System: Clinical Interoperability, EHR Transition & Governance',
    category: 'Healthcare Systems',
    context:
      'A multi-facility healthcare delivery network undergoing enterprise electronic health record (EHR) transitions across acute hospital care, ambulatory clinics, and regional diagnostic centers.',
    challenge:
      'Fragmented clinical data flows between inpatient facilities and outpatient clinics caused severe clinician documentation friction, redundant diagnostic orders, and vulnerability to HHS OCR cybersecurity audit citations.',
    leadershipApproach:
      'Established executive clinical informatics governance uniting Chief Medical Officers, nursing executives, pharmacy directors, and IT engineering. Phased the migration with rigorous workflow testing and explicit clinical decision milestones.',
    technologiesUsed: [
      'Electronic Health Record Platforms (Epic / Meditech environments)',
      'HL7 v2 & FHIR R4 API Interoperability Gateways',
      'SMART-on-FHIR Clinical Decision Support Integration',
      'Zero Trust Micro-segmentation for Medical IoT & Telemetry',
      'HHS OCR & HIPAA Security Rule Controls',
    ],
    governance:
      'Bi-weekly clinical steering sessions, physician-led change advisory boards, and continuous audit verification against HHS OCR cybersecurity newsletter guidance.',
    outcome:
      'Delivered seamless bidirectional data flow across care facilities, reduced chart-search friction for attending physicians, and maintained flawless compliance during federal and state audits.',
    lessons:
      'EHR projects are clinical change initiatives, not software installations. Without physician executive alignment, even the best technical architecture fails.',
    keyOutputs: [
      'EHR Clinical Workflow Interoperability Blueprint',
      'HHS OCR Security Safeguard Matrix',
      'Physician Decision Support Governance Charter',
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
