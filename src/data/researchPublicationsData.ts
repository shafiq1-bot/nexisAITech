export interface ResearchPublication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volumeIssue?: string;
  pages?: string;
  citations: number;
  domain: 'Clinical Cybersecurity & Disaster Recovery' | 'EMR & Clinical Data Integrity' | 'Health System M&A & Integration' | 'Telemedicine & Healthcare IT';
  scholarUrl: string;
  glimpse: string;
  fullAbstract: string;
  strategicImpact: string;
  keyFindings: string[];
  keywords: string[];
  publisher?: string;
}

export const googleScholarProfile = {
  name: 'Shafiq Rahman',
  affiliation: 'University of Maryland, Maryland Department of Transportation (MDOT)',
  profileUrl: 'https://scholar.google.com/citations?user=L0j_am8AAAAJ&hl=en',
  totalCitations: 11,
  hIndex: 2,
  i10Index: 0,
  researchAreas: [
    'Clinical Cybersecurity',
    'Radiation Oncology Information Systems (ROIS)',
    'Electronic Medical Records (EMR) Data Integrity',
    'Health System IT Integration & M&A',
    'Telemedicine Operational Readiness',
    'Healthcare Disaster Recovery & Business Continuity',
  ],
};

export const researchPublications: ResearchPublication[] = [
  {
    id: 'cybersecurity-radiation-oncology-2018',
    title: 'The Impact of Cybersecurity in Radiation Oncology: Logistics and Challenges',
    authors: ['EM Nichols', 'SU Rahman', 'B Yi'],
    journal: 'Applied Radiation Oncology (Appl Rad Oncol)',
    year: 2018,
    volumeIssue: 'Vol. 7, Issue 4',
    pages: '14-18',
    citations: 9,
    domain: 'Clinical Cybersecurity & Disaster Recovery',
    scholarUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:9yKSN-GCB0IC',
    glimpse:
      'Identifies the acute cyber vulnerabilities created by networked linear accelerators and oncology EMRs, proposing network segmentation enclaves and emergency clinical business continuity protocols.',
    fullAbstract:
      'As radiation oncology clinics rapidly transitioned from standalone treatment machines to highly networked electronic treatment records, treatment planning systems, and DICOM image archives, the risk of ransomware, targeted hacking, and data corruption skyrocketed. This seminal paper examines the logistical hurdles and operational vulnerabilities inherent in clinical radiation therapy environments. The study evaluates attack surfaces on medical devices, linear accelerators, and Aria/Impac databases, recommending strict VLAN network segmentation, isolated offline data enclaves, and specialized emergency protocols to ensure that high-stakes oncology treatments can proceed safely without catastrophic disruption during an active cyberattack or IT outage.',
    strategicImpact:
      'Provides healthcare CEOs, CISOs, and hospital boards with an authentic, peer-reviewed operational blueprint for cyber resilience in life-critical medical device and oncology environments.',
    keyFindings: [
      'Documented specific attack surfaces connecting treatment delivery machines to hospital enterprise networks.',
      'Formulated clinical disaster recovery playbooks enabling oncology treatments to continue during active network downtime.',
      'Demonstrated the necessity of specialized clinical IT enclaves distinct from general enterprise hospital IT.',
    ],
    keywords: [
      'Clinical Cybersecurity',
      'Radiation Oncology',
      'Medical Device Security',
      'Ransomware Defense',
      'HIPAA Security',
      'Clinical Business Continuity',
    ],
  },
  {
    id: 'telemedicine-pandemic-implementation-2021',
    title: 'Risk and Challenge of Telemedicine Implementation During a Pandemic',
    authors: ['G Yasmeen', 'S Rahman', 'J Gelatt'],
    journal: 'SAM Advanced Management Journal',
    year: 2021,
    volumeIssue: 'Vol. 86, Issue 4',
    pages: '46-52',
    citations: 2,
    domain: 'Telemedicine & Healthcare IT',
    scholarUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:u5HHmVD_uO8C',
    glimpse:
      'A systematic analysis of organizational readiness, staff training hurdles, and technical architecture challenges during crisis-driven telemedicine deployments.',
    fullAbstract:
      'Telemedicine is an Information Technology system that supports remote clinical care delivery. The COVID-19 pandemic imposed profound operational disruptions on healthcare providers, abruptly forcing health systems to scale virtual care overnight. This paper explores the triad of organizational readiness, clinical staff training, and technological architecture necessary to successfully overcome adoption barriers. Through a systematic review, the authors synthesize how bandwidth constraints, EHR integration deficiencies, privacy considerations, and physician workflow friction can be systematically addressed to deliver sustainable, compliant, and cost-effective digital care.',
    strategicImpact:
      'Furnishes health system executives with change-management and technical readiness frameworks required to transition emergency digital health pilots into institutionalized, secure telehealth operations.',
    keyFindings: [
      'Identified organizational readiness and frontline clinician training as primary determinants of virtual care adoption.',
      'Mapped technical integration pitfalls between video consultation platforms and underlying hospital EMR databases.',
      'Established a strategic maturity checklist for post-crisis digital health program consolidation.',
    ],
    keywords: [
      'Telemedicine',
      'Organizational Readiness',
      'Healthcare Digital Transformation',
      'EMR Integration',
      'Change Management',
      'Clinical Training',
    ],
  },
  {
    id: 'rois-integration-checklist-qa-2026',
    title: 'Checklist and Quality Assurance Tools for Integration of Two Radiation Oncology Information Systems (ROISs)',
    authors: ['BY Yi', 'SU Rahman', 'S Chen', 'B Zhang'],
    journal: 'Journal of Applied Clinical Medical Physics (JACMP)',
    year: 2026,
    volumeIssue: 'Vol. 27, Issue 2',
    pages: 'e70435',
    citations: 0,
    domain: 'Health System M&A & Integration',
    scholarUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:d1gkVwhDpl0C',
    glimpse:
      'A rigorous procedural checklist and QA toolset for consolidating disparate radiation oncology systems during hospital mergers and health system acquisitions.',
    fullAbstract:
      'Merging two radiation oncology information systems (ROISs) is frequently necessitated by health system mergers, regional acquisitions, or departmental software consolidations. Because radiation oncology systems directly control high-energy treatment delivery machines and contain intricate dosimetric parameters, ROIS integration is an exceptionally high-risk enterprise procedure requiring exhaustive quality assurance. This paper presents practical checklists, validation procedures, and automation tools across five core dimensions: treatment machine configurations; under-treatment patient records, imaging, and EMR histories; user-generated clinical workflows; user account permissions; and beam calibration databases. Divided into site survey, migration validation, and post-merge clinical QA phases, this work shares primary lessons from large-scale academic health center migrations.',
    strategicImpact:
      'Crucial reference for hospital CIOs, Chief Medical Officers, and health system M&A integration teams seeking to avoid patient safety incidents, data loss, and clinical delays during system consolidations.',
    keyFindings: [
      'Standardized a 5-layer technical checklist for hospital IT mergers involving specialized oncology systems.',
      'Prevented dosimetric and patient record corruption through automated pre- and post-migration validation scripts.',
      'Reduced clinical go-live downtime while maintaining 100% data fidelity across legacy and target databases.',
    ],
    keywords: [
      'Health System M&A',
      'ROIS Integration',
      'Clinical Quality Assurance',
      'EMR Migration',
      'Medical Physics',
      'Data Integrity',
    ],
  },
  {
    id: 'e-variance-clinical-data-integrity-2026',
    title: 'E‐Variance: An Application to Assure Clinical Data Integrity and Improve Patient Safety and Workflows in Electronic Medical Records',
    authors: ['S Rahman', 'K Milman', 'TS Lee'],
    journal: 'Healthcare Technology Letters',
    year: 2026,
    volumeIssue: 'Vol. 13, Issue 1',
    pages: 'e70069',
    citations: 0,
    domain: 'EMR & Clinical Data Integrity',
    scholarUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:qjMakFHDy7sC',
    glimpse:
      'Introduces a custom web-based incident learning application engineered to capture frontline EMR data errors, eliminate latent clinical hazards, and improve hospital workflows.',
    fullAbstract:
      'Ensuring critical data integrity within electronic medical records (EMR) is vital for clinician decision-making and patient safety. Often, data errors, omissions, or workflow variances go unrecorded due to cumbersome reporting tools. To solve this, the authors designed and engineered the "RadOnc E-Variance" web-based application. The platform provides intuitive frontline reporting across three standardized categories: Patient-related variances, Non-patient operational variances, and open-ended process improvement suggestions, complete with secure image and document attachment uploads. Supported by an administrative data analytics dashboard, anonymous reporting options, and automated alert routing, the application creates a transparent culture of data stewardship and continuous clinical workflow optimization.',
    strategicImpact:
      'Demonstrates Shafiq Rahman’s capability as both an enterprise software architect and clinical informatics leader who solves frontline clinician friction through practical IT innovation.',
    keyFindings: [
      'Engineered a scalable, secure web application directly integrated into clinical department workflows.',
      'Enabled anonymous variance reporting that substantially boosted frontline staff reporting rates.',
      'Delivered longitudinal data analytics empowering healthcare leadership to eliminate recurrent EMR workflow bottlenecks.',
    ],
    keywords: [
      'E-Variance',
      'Clinical Data Integrity',
      'Electronic Medical Records (EMR)',
      'Patient Safety',
      'Healthcare Software Architecture',
      'Incident Reporting',
    ],
  },
  {
    id: 'e-variance-aapm-2023',
    title: 'E-Variance: An Application to Assure Clinical Data Integrity and Improve Patient Safety and Workflows in EMR',
    authors: ['SU Rahman', 'K Milman', 'R Mogilnay', 'TS Lee'],
    journal: 'AAPM 65th Annual Meeting & Exhibition Proceedings',
    year: 2023,
    publisher: 'American Association of Physicists in Medicine (AAPM)',
    citations: 0,
    domain: 'EMR & Clinical Data Integrity',
    scholarUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:2osOgNQ5qMEC',
    glimpse:
      'Technical presentation and demonstration of automated EMR error tracking architecture at the premier national medical physics and radiation oncology conference.',
    fullAbstract:
      'Presented at the AAPM 65th Annual Meeting in Houston, Texas, this technical proceeding outlines the underlying database design, role-based security framework, and frontline usability studies of the E-Variance quality assurance platform. The study highlights how rapid incident logging and proactive variance mitigation prevent compounding errors in complex multi-modality cancer therapy clinics.',
    strategicImpact:
      'Validates the technical rigor and national peer recognition of Shafiq Rahman’s software architecture in academic medical centers.',
    keyFindings: [
      'Validated usability and data capture metrics with attending physicians, medical physicists, and dosimetrists.',
      'Demonstrated seamless integration into high-volume clinical schedules without adding administrative charting burden.',
    ],
    keywords: [
      'AAPM',
      'Clinical QA',
      'Incident Learning',
      'Radiation Oncology EMR',
      'Healthcare Informatics',
    ],
  },
  {
    id: 'community-site-integration-2021',
    title: 'Radiation Oncology Community Site Integration Experience: Tools and Checklist',
    authors: ['S Rahman', 'S Chen', 'B Yi', 'B Zhang'],
    journal: 'Medical Physics',
    year: 2021,
    volumeIssue: 'Vol. 48, Issue 6',
    citations: 0,
    domain: 'Health System M&A & Integration',
    scholarUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:IjCSPb-OGe4C',
    glimpse:
      'Practical tools and integration methodologies for linking community cancer treatment satellites to centralized university academic medical center infrastructure.',
    fullAbstract:
      'When major academic health systems incorporate regional community cancer sites, wide-area network latency, mismatched software versions, and disparate operational cultures create severe implementation challenges. This paper details the University of Maryland’s multi-site integration roadmap, including standardized IT infrastructure checklists, automated database replication verification, and unified staff onboarding workflows that ensure community patients receive identical standards of care and security oversight.',
    strategicImpact:
      'Directly applicable to health systems executing regional growth strategies and ambulatory network expansions that require harmonized IT governance.',
    keyFindings: [
      'Formulated standardized WAN latency thresholds and bandwidth allocations for remote treatment delivery.',
      'Created an end-to-end integration checklist covering network, database, user management, and clinical verification.',
    ],
    keywords: [
      'Community Oncology Integration',
      'Academic Medical Center IT',
      'Multi-Site Governance',
      'Network Standardization',
      'Clinical Systems Rollout',
    ],
  },
  {
    id: 'cyber-attack-risk-management-2017',
    title: 'A Risk Management Plan Against Cyber-Attacks in Radiation Oncology: An Emergency Plan for Continuation of Safe Treatments (TU-FG-702-01)',
    authors: ['B Yi', 'B Zhang', 'K Prado', 'S Chen', 'S Rahman', 'W D’Souza'],
    journal: 'Medical Physics',
    year: 2017,
    volumeIssue: 'Vol. 44, Issue 6',
    pages: '3162',
    citations: 0,
    domain: 'Clinical Cybersecurity & Disaster Recovery',
    scholarUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:UeHWp8X0CEIC',
    glimpse:
      'Emergency plan for a 6-site health system with 11 linear accelerators and 5 proton machines to resume critical cancer treatments within 24 hours of a catastrophic hospital cyberattack.',
    fullAbstract:
      'Radiation oncology relies on enterprise IT systems for virtually all clinical activities. In the event of a sophisticated ransomware attack, data wiper, or network compromise, treatment interruptions can cause tumor recurrence or patient harm. This pioneering study introduces the University of Maryland emergency plan (EP) designed for an enterprise network spanning 6 clinical sites, 11 Varian linear accelerators, and 5 proton therapy units tied to a single database system (Aria). The EP establishes dual recovery thresholds: (1) resuming critical treatments within 24 hours using an isolated, temporary local database with limited image guidance for urgent cases; and (2) restoring comprehensive image-guided therapies within 7 days under complete network air-gapping until full enterprise recovery is certified.',
    strategicImpact:
      'One of the earliest and most authoritative technical disaster recovery plans published for clinical cancer centers facing catastrophic cyber extortion and state-sponsored attacks.',
    keyFindings: [
      'Designed an air-gapped local database architecture capable of emergency offline treatment verification.',
      'Established a dual-phase recovery timeline: 24-hour critical resumption and 7-day full image-guided continuity.',
      'Validated treatment machine safety parameter preservation independent of compromised hospital networks.',
    ],
    keywords: [
      'Disaster Recovery',
      'Hospital Cyberattack',
      'Radiation Oncology Emergency Plan',
      'Linear Accelerator Security',
      'Business Continuity',
      'Air-Gapped Systems',
    ],
  },
  {
    id: 'automated-qa-rois-upgrades-2015',
    title: 'Automated Systematic Quality Assurance Program for Radiation Oncology Information System Upgrades (TU‐G‐BRD‐02)',
    authors: ['B Zhang', 'B Yi', 'J Eley', 'Y Mutaf', 'S Rahman', 'W D\'souza'],
    journal: 'Medical Physics',
    year: 2015,
    volumeIssue: 'Vol. 42, Issue 6Part34',
    pages: '3627-3627',
    publisher: 'American Association of Physicists in Medicine (AAPM)',
    citations: 0,
    domain: 'Health System M&A & Integration',
    scholarUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:zYLM7Y9cAGgC',
    glimpse:
      'An automated software protocol for verifying relational database schemas, DICOM data streams, and machine configurations to prevent silent data corruption during major enterprise upgrades.',
    fullAbstract:
      'Enterprise software upgrades to hospital radiation oncology information systems carry substantial risk of silent data corruption, schema mismatches, or altered treatment machine parameters. This paper describes an automated, software-based QA verification protocol that audits four distinct enterprise data tiers before and after an upgrade: (1) relational database schemas and table relationships; (2) DICOM paired interface streams for radiotherapy plans and treatment records; (3) treatment machine hardware configuration files; and (4) clinical reporting engine outputs. Tested across academic and community environments, the automated framework eliminates manual auditing errors and guarantees clinical data fidelity.',
    strategicImpact:
      'Provides IT and clinical engineering teams with programmatic automated regression testing methodology for high-complexity healthcare software upgrades.',
    keyFindings: [
      'Created automated schema diffing scripts to detect unannounced database changes during major version upgrades.',
      'Developed paired DICOM bit-stream comparison algorithms to detect subtle metadata corruptions.',
      'Significantly reduced post-upgrade testing cycles from days to hours while improving safety validation.',
    ],
    keywords: [
      'Automated QA',
      'Database Schema Verification',
      'DICOM Protocol',
      'Enterprise Software Upgrades',
      'Healthcare Data Integrity',
    ],
  },
];
