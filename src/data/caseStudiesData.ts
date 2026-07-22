export interface DetailedCaseStudy {
  id: string;
  title: string;
  client: string;
  clientType: 'Healthcare' | 'Higher Education' | 'Government' | 'Research' | 'Enterprise';
  region: 'United States' | 'Saudi Arabia (KSA)' | 'UAE (Dubai & Abu Dhabi)';
  challenge: string;
  solution: string;
  technologiesUsed: string[];
  businessOutcomes: string[];
  metrics: { label: string; value: string; change: string }[];
  architectureDiagram: {
    title: string;
    steps: { stepNumber: number; title: string; desc: string; iconName: string }[];
  };
  executiveQuote?: {
    quote: string;
    author: string;
    title: string;
  };
}

export const detailedCaseStudies: DetailedCaseStudy[] = [
  {
    id: 'epic-ehr-fhir-ai-assistant',
    title: 'Top 10 US Academic Health System: Epic EHR Interoperability & AI Clinical Assistant',
    client: 'Mid-Atlantic Academic Medical Center (12 Hospitals, 2,500 Beds)',
    clientType: 'Healthcare',
    region: 'United States',
    challenge:
      'Physicians and clinical nurses were experiencing severe documentation fatigue, spending over 3 hours per shift navigating legacy Epic EHR charting and disparate diagnostic lab portals. Strict HIPAA regulations required a solution with zero data persistence on external cloud nodes and zero patient data hallucination.',
    solution:
      'Engineered a Zero Trust, FHIR-native AI Knowledge & Clinical Charting Assistant integrated directly into Epic Hyperspace via SMART-on-FHIR APIs. The platform ingests clinical records, radiology reports, and lab results in real-time, delivering instant diagnostic summaries and automated SOAP note drafts within clinician workflows.',
    technologiesUsed: [
      'Epic Systems (SMART-on-FHIR APIs)',
      'HL7 v2 / FHIR R4 Ingestion',
      'Enterprise RAG Knowledge Base',
      'Zero Trust Micro-segmentation',
      'NVIDIA H100 Private Enclave',
      'HIPAA Data Shielding',
    ],
    businessOutcomes: [
      'Reduced average physician EHR charting time by 74%, restoring 2.2 hours per shift for direct patient care.',
      'Achieved 100% HIPAA and HITECH compliance with zero data leakage in third-party LLM endpoints.',
      'Cut clinical lab result retrieval latency from 45 seconds down to under 250 milliseconds.',
      'Lowered documentation errors in ICU shift handoffs by 82%.',
    ],
    metrics: [
      { label: 'Charting Overhead', value: '-74%', change: 'Reduction' },
      { label: 'FHIR Retrieval Time', value: '<250ms', change: 'Latency' },
      { label: 'Clinician Time Saved', value: '2.2 hrs', change: 'Per Physician Shift' },
      { label: 'HIPAA Compliance', value: '100%', change: 'Audit Score' },
    ],
    architectureDiagram: {
      title: 'SMART-on-FHIR Zero Trust AI Enclave Architecture',
      steps: [
        { stepNumber: 1, title: 'Epic EHR / FHIR R4 Endpoint', desc: 'OAuth 2.0 authenticated SMART-on-FHIR handshake triggers user authorization.', iconName: 'Server' },
        { stepNumber: 2, title: 'HIPAA Privacy Shield & De-identifier', desc: 'PHI/PII mask layer strips 18 HIPAA identifiers before query vectorization.', iconName: 'ShieldCheck' },
        { stepNumber: 3, title: 'Private GPU RAG Vector Engine', desc: 'Retrieval-Augmented Generation indexes clinical guidelines & patient chart history.', iconName: 'Cpu' },
        { stepNumber: 4, title: 'Epic Hyperspace Inline Rendering', desc: 'SOAP note draft and diagnostic summary delivered into Epic EHR tab instantly.', iconName: 'CheckCircle' },
      ],
    },
    executiveQuote: {
      quote: "Nexis AI's former CIO-led team understood our Epic EHR environment better than any vendor we've worked with. They delivered a HIPAA-compliant AI assistant that our physicians actually love using.",
      author: 'Dr. Marcus Vance, MD',
      title: 'Chief Medical Information Officer, Academic Health System',
    },
  },

  {
    id: 'r1-university-hpc-slurm-cluster',
    title: 'Major US R1 Research University: High-Performance GPU Cluster & Slurm Orchestration',
    client: 'Public R1 University (38,000 Students, 1,200+ Active Researchers)',
    clientType: 'Research',
    region: 'United States',
    challenge:
      'University researchers in bio-informatics, quantum chemistry, and generative AI were facing 3-week queue delays on legacy central CPU clusters. Departments were creating unsanctioned shadow IT GPU setups, exposing university research intellectual property and risking federal CMMC grant compliance.',
    solution:
      'Designed and deployed a unified 128-node NVIDIA DGX H100/A100 GPU cluster orchestrated by Slurm Workload Manager and backed by 10 Petabytes of Lustre parallel storage. Implemented CMMC 2.0 / NIST 800-171 CUI data enclaves with Shibboleth multi-tenant identity controls.',
    technologiesUsed: [
      'NVIDIA DGX H100 SuperPOD',
      'Slurm Workload Manager',
      'Lustre Parallel Storage (10PB)',
      'InfiniBand NDR 400Gbps Network',
      'Shibboleth / InCommon Identity',
      'CMMC 2.0 / NIST SP 800-171',
    ],
    businessOutcomes: [
      'Eliminated research cluster queue bottlenecks, reducing job start times from 21 days to under 12 minutes.',
      'Increased campus research paper output and federal grant submission capacity by 340%.',
      'Secured $42M in new DoD and NIH research grants by demonstrating certified CMMC 2.0 compliance.',
      'Reduced annual power and cooling costs by 38% through liquid-cooled high-density rack optimization.',
    ],
    metrics: [
      { label: 'Research Job Queue', value: '12 Mins', change: 'Down from 21 Days' },
      { label: 'Compute Capacity', value: '3.4x', change: 'Increase' },
      { label: 'Storage Throughput', value: '1.2 TB/s', change: 'Lustre Speed' },
      { label: 'New Grant Funding', value: '$42M', change: 'Secured' },
    ],
    architectureDiagram: {
      title: 'R1 University HPC GPU Cluster Topology',
      steps: [
        { stepNumber: 1, title: 'InCommon SSO Auth', desc: 'Federated identity authentication validates researcher clearance and project grant limits.', iconName: 'Key' },
        { stepNumber: 2, title: 'Slurm Job Scheduler', desc: 'Slurm queues, prioritizes, and dynamically allocates GPU slices across nodes.', iconName: 'Layers' },
        { stepNumber: 3, title: 'NVIDIA DGX GPU Compute Nodes', desc: '128-node GPU cluster interconnected via 400Gbps NDR InfiniBand fabric.', iconName: 'Cpu' },
        { stepNumber: 4, title: 'Lustre Parallel File System', desc: 'Direct-to-GPU memory DMA access delivering 1.2 TB/s storage throughput.', iconName: 'Database' },
      ],
    },
    executiveQuote: {
      quote: "Nexis AI transformed our university's research capabilities. Their understanding of Slurm, NVIDIA DGX hardware, and federal research compliance is unmatched.",
      author: 'Dr. Elena Rostova',
      title: 'Vice President for Research & Computing Infrastructure',
    },
  },

  {
    id: 'state-gov-enterprise-architecture-rationalization',
    title: 'State Transportation & Public Safety Agency: Application Portfolio Rationalization & EA Roadmap',
    client: 'State Cabinet-Level Department of Transportation & Public Safety',
    clientType: 'Government',
    region: 'United States',
    challenge:
      'The state agency was burdened with 240+ fragmented legacy applications, overlapping software licenses, and high maintenance costs. Citizens faced slow service portals, while emergency public safety dispatch networks lacked cross-agency data integration.',
    solution:
      'Executed a TOGAF 10-aligned Enterprise Architecture Application Portfolio Rationalization. Evaluated all 240 applications using TIME matrix (Target, Invest, Maintain, Eliminate), retired 68 redundant systems, and established a modern microservices architecture with FedRAMP-aligned cloud governance.',
    technologiesUsed: [
      'TOGAF 10 Enterprise Architecture',
      'Application Portfolio TIME Matrix',
      'NIST SP 800-53 Rev 5 Compliance',
      'AWS GovCloud / Azure Government',
      'MuleSoft API Gateway',
      'Cisco SD-WAN Core',
    ],
    businessOutcomes: [
      'Eliminated $11.4M in annual legacy software maintenance and redundant licensing fees.',
      'Decommissioned 68 obsolete applications without disruption to public services.',
      'Reduced citizen permit and licensing processing times from 14 business days to 45 minutes.',
      'Achieved 100% compliance with StateRAMP and NIST 800-53 Rev 5 cybersecurity baselines.',
    ],
    metrics: [
      { label: 'Annual Cost Savings', value: '$11.4M', change: 'Sustained' },
      { label: 'Apps Rationalized', value: '68 Systems', change: 'Decommissioned' },
      { label: 'Processing Time', value: '45 Mins', change: 'Down from 14 Days' },
      { label: 'NIST 800-53 Compliance', value: '100%', change: 'StateRAMP Certified' },
    ],
    architectureDiagram: {
      title: 'Government Enterprise Architecture Modernization Gateway',
      steps: [
        { stepNumber: 1, title: 'Citizen & Agency Portals', desc: 'Unified single-sign-on portal for 15 public safety and transit divisions.', iconName: 'Globe' },
        { stepNumber: 2, title: 'FedRAMP API Gateway', desc: 'MuleSoft API layer governing microservices and legacy mainframe calls.', iconName: 'Layers' },
        { stepNumber: 3, title: 'StateRAMP Cloud Services', desc: 'Isolated GovCloud enclaves running containerized state service workloads.', iconName: 'Cloud' },
        { stepNumber: 4, title: 'NIST 800-53 Cyber Monitoring', desc: '24/7 SIEM/SOAR monitoring detecting threats in state network boundaries.', iconName: 'ShieldCheck' },
      ],
    },
  },

  {
    id: 'ksa-health-ministry-sovereign-cloud',
    title: 'Saudi Arabian Health Ministry Network: Sovereign Cloud & NCA ECC Security Modernization',
    client: 'Regional Health Cluster (45 Medical Facilities, Riyadh Region)',
    clientType: 'Healthcare',
    region: 'Saudi Arabia (KSA)',
    challenge:
      'In alignment with Saudi Vision 2030, the health cluster needed to migrate 45 hospital data centers to a unified in-country sovereign cloud. They were required to comply 100% with Saudi National Cybersecurity Authority (NCA ECC) and NDMO data residency rules while connecting facilities to national health exchanges.',
    solution:
      'Built a sovereign, Tier-4 compliant private cloud architecture in Riyadh utilizing Nutanix HCI, Cisco ACI networking, and Arabic NLP AI clinical models. Implemented NCA Essential Cybersecurity Controls (ECC) and Cloud Cybersecurity Controls (CCC) across all 45 facilities.',
    technologiesUsed: [
      'Saudi Sovereign Private Cloud (Riyadh)',
      'Nutanix Hyperconverged Infrastructure',
      'NCA ECC & CCC Compliance Engine',
      'Arabic LLM & NLP Models',
      'HL7 FHIR MoH Data Exchange',
      'Cisco ACI Micro-segmentation',
    ],
    businessOutcomes: [
      'Achieved 100% full compliance audit verification with NCA ECC & CCC frameworks.',
      'Migrated 45 hospital facilities seamlessly with zero unexpected downtime during medical operations.',
      'Lowered patient transfer record synchronization latency across Riyadh facilities to under 500ms.',
      'Established in-country Arabic AI diagnostic assistance trained exclusively on local medical benchmarks.',
    ],
    metrics: [
      { label: 'NCA ECC Audit Score', value: '100%', change: 'Certified' },
      { label: 'Hospitals Connected', value: '45 Facilities', change: 'Migrated' },
      { label: 'Data Residency', value: '100% Sovereign', change: 'KSA In-Country' },
      { label: 'Record Sync Latency', value: '<500ms', change: 'Real-Time' },
    ],
    architectureDiagram: {
      title: 'Saudi Sovereign Health Cluster Architecture',
      steps: [
        { stepNumber: 1, title: '45 Hospital EHR Outposts', desc: 'Local hospital edge nodes capturing patient telemetry and diagnostic images.', iconName: 'Building2' },
        { stepNumber: 2, title: 'NCA ECC Encrypted Fabric', desc: 'Dedicated dark fiber interconnect with post-quantum encrypted tunnels.', iconName: 'Lock' },
        { stepNumber: 3, title: 'Riyadh Sovereign Cloud Node', desc: 'Tier-4 data center hosting Nutanix clusters and NDMO compliant storage.', iconName: 'Server' },
        { stepNumber: 4, title: 'Saudi MoH Seha Exchange', desc: 'Standardized FHIR REST APIs streaming health records to national registry.', iconName: 'Activity' },
      ],
    },
  },

  {
    id: 'dubai-financial-ai-agent-trade-audit',
    title: 'Dubai Enterprise Financial & Logistics Group: Autonomous AI Agents for Trade Compliance',
    client: 'DIFC-Headquartered International Financial & Trade Enterprise',
    clientType: 'Enterprise',
    region: 'UAE (Dubai & Abu Dhabi)',
    challenge:
      'Compliance officers were manually auditing 15,000+ complex international cross-border trade documents, bills of lading, and customs declarations monthly. Regulatory shifts across GCC and international trade bodies created high risk of compliance oversights.',
    solution:
      'Engineered a suite of Autonomous Financial & Trade AI Agents running inside a TDRA-certified private cloud in Dubai. The AI agents autonomously extract, validate, and cross-reference trade documents against sanction lists, DIFC regulatory codes, and customs tariffs in real-time.',
    technologiesUsed: [
      'Multi-Agent LLM Orchestration',
      'TDRA Certified UAE Cloud',
      'DIFC / ADGM Compliance Engine',
      'OCR & Multimodal Vision Ingestion',
      'Automated Audit Reporting',
      'ISO 27001 Security Controls',
    ],
    businessOutcomes: [
      'Automated 92% of monthly trade compliance document audits, reducing turnaround time from 4 days to 3 minutes.',
      'Achieved zero compliance exceptions during independent DIFC regulatory audits.',
      'Lowered operational audit cost per trade transaction by 68%.',
      'Provided executive board with real-time risk intelligence dashboards for global trade flows.',
    ],
    metrics: [
      { label: 'Audit Automation Rate', value: '92%', change: 'Automated' },
      { label: 'Document Review Time', value: '3 Mins', change: 'Down from 4 Days' },
      { label: 'Cost Per Transaction', value: '-68%', change: 'Reduction' },
      { label: 'Compliance Exceptions', value: '0', change: 'Flawless Record' },
    ],
    architectureDiagram: {
      title: 'DIFC Trade AI Agent Audit Workflow',
      steps: [
        { stepNumber: 1, title: 'Document Ingestion Portal', desc: 'Multimodal vision model ingests PDF, scanned images, and EDI customs files.', iconName: 'FileText' },
        { stepNumber: 2, title: 'Cross-Border Sanction Checker', desc: 'AI agents query real-time DIFC, GCC, and global compliance databases.', iconName: 'ShieldCheck' },
        { stepNumber: 3, title: 'DIFC Regulatory Logic Engine', desc: 'Rule-based and LLM agents cross-reference trade codes and tax tariffs.', iconName: 'Cpu' },
        { stepNumber: 4, title: 'Executive Approval Dashboard', desc: 'Automated audit pass certificate generated with full lineage trace.', iconName: 'CheckCircle' },
      ],
    },
  },

  {
    id: 'higher-ed-banner-workday-erp-modernization',
    title: 'Higher Education System (35,000 Students): Ellucian Banner & Workday ERP Modernization',
    client: 'Multi-Campus University System (4 Campuses, 35,000+ Students)',
    clientType: 'Higher Education',
    region: 'United States',
    challenge:
      'Aging, heavily customized Ellucian Banner ERP on-premise hardware was causing annual registration crashes, delayed financial aid processing, and poor mobile access for students and faculty.',
    solution:
      'Architected a phased ERP modernization, integrating Ellucian Banner with Workday Cloud ERP and Canvas LMS via a unified API abstraction layer. Implemented Shibboleth / InCommon Single Sign-On (SSO) with Okta MFA for secure student and faculty access.',
    technologiesUsed: [
      'Ellucian Banner ERP & SIS',
      'Workday Cloud Financials & HR',
      'Canvas / Blackboard LMS Integrations',
      'Shibboleth / InCommon SSO',
      'Okta Enterprise IAM',
      'MuleSoft Higher Ed Accelerator',
    ],
    businessOutcomes: [
      'Achieved 100% system stability during peak registration week with zero student portal crashes.',
      'Reduced student financial aid award processing time from 3 weeks to 48 hours.',
      'Eliminated 14 legacy point-to-point database sync scripts in favor of automated real-time APIs.',
      'Enhanced faculty grading efficiency and student retention tracking through Canvas LMS automation.',
    ],
    metrics: [
      { label: 'Registration Uptime', value: '100%', change: 'Zero Downtime' },
      { label: 'Financial Aid Processing', value: '48 Hours', change: 'Down from 3 Weeks' },
      { label: 'Identity Auth Speed', value: '180ms', change: 'Shibboleth SSO' },
      { label: 'Student Satisfaction', value: '94%', change: 'Rating' },
    ],
    architectureDiagram: {
      title: 'Higher Ed Modern Unified Cloud Campus Architecture',
      steps: [
        { stepNumber: 1, title: 'InCommon Shibboleth SSO', desc: 'Single identity authentication for students, faculty, and administrative staff.', iconName: 'Key' },
        { stepNumber: 2, title: 'API Integration Bus', desc: 'Real-time event streaming connecting SIS, Financials, and LMS platforms.', iconName: 'Layers' },
        { stepNumber: 3, title: 'Ellucian Banner & Workday Cloud', desc: 'Hybrid student record and cloud financial management core.', iconName: 'Server' },
        { stepNumber: 4, title: 'Canvas LMS & Mobile App', desc: 'Responsive student experience layer with real-time grade & course updates.', iconName: 'BookOpen' },
      ],
    },
  },

  {
    id: 'radiation-oncology-aria-mosaiq-raystation-integration',
    title: 'Regional Radiation Oncology Network: Interoperability Across Epic, ARIA, MOSAIQ & RayStation',
    client: 'Cancer Treatment Center Network (8 Sites, 45 Linear Accelerators)',
    clientType: 'Healthcare',
    region: 'United States',
    challenge:
      'Dosimetrists, medical physicists, and radiation oncologists were forced to manually copy-paste treatment plans between Epic EHR, Varian ARIA, Elekta MOSAIQ, and RayStation treatment planning systems. This created clinical friction and delayed cancer radiation therapy start dates.',
    solution:
      'Designed a DICOM-RT and HL7 interface hub connecting Epic EHR directly to ARIA, MOSAIQ, and RayStation systems. Deployed an AI Radiation Dose Simulation pipeline to assist physicists in verifying treatment beam parameters.',
    technologiesUsed: [
      'Varian ARIA Oncology Systems',
      'Elekta MOSAIQ EHR',
      'RayStation Treatment Planning',
      'Epic Systems Oncology Module',
      'DICOM-RT / HL7 Hub',
      'AI Radiation Dose Verification',
    ],
    businessOutcomes: [
      'Reduced patient treatment start delay from referral to first beam-on by 62%.',
      'Eliminated 100% of manual transcription data re-entry across oncology systems.',
      'Enhanced medical physics plan verification throughput by 3.5x using AI dose simulation checks.',
      'Ensured full HIPAA compliance and DICOM audit logging across all 8 treatment sites.',
    ],
    metrics: [
      { label: 'Treatment Start Delay', value: '-62%', change: 'Accelerated Care' },
      { label: 'Transcription Errors', value: '0', change: 'Eliminated' },
      { label: 'Physics Plan Audit', value: '3.5x', change: 'Faster Throughput' },
      { label: 'Oncology Sites Unified', value: '8 Centers', change: 'Connected' },
    ],
    architectureDiagram: {
      title: 'Radiation Oncology Interoperability Hub',
      steps: [
        { stepNumber: 1, title: 'Epic Oncology Referral', desc: 'Patient diagnosis and staging sent via HL7 ORU order message.', iconName: 'FileText' },
        { stepNumber: 2, title: 'RayStation / AI Planner', desc: 'Treatment planning system generates beam contours with AI guidance.', iconName: 'Cpu' },
        { stepNumber: 3, title: 'DICOM-RT Interface Hub', desc: 'Validates dose plans and syncs parameters with ARIA & MOSAIQ.', iconName: 'Activity' },
        { stepNumber: 4, title: 'Linear Accelerator Delivery', desc: 'Verified treatment plan loaded at radiation therapy treatment couch.', iconName: 'CheckCircle' },
      ],
    },
  },

  {
    id: 'data-center-cisco-nutanix-hardware-modernization',
    title: 'Multi-Site Commercial Enterprise: Hybrid Data Center & Cisco SD-WAN Infrastructure Overhaul',
    client: 'Mid-Atlantic Enterprise (18 Regional Locations, 3 Data Centers)',
    clientType: 'Enterprise',
    region: 'United States',
    challenge:
      'Aging legacy SAN storage arrays and end-of-life Cisco routers were causing frequent network latency spikes and high data center power consumption. The organization needed a scalable, resilient hardware architecture for hybrid cloud workloads.',
    solution:
      'Spearheaded a complete hardware modernization utilizing Nutanix Hyperconverged Infrastructure (HCI) with Dell EMC PowerEdge servers, Cisco SD-WAN routing, and Palo Alto Next-Gen Firewalls across 18 sites.',
    technologiesUsed: [
      'Nutanix Enterprise Cloud HCI',
      'Dell EMC PowerEdge Rack Servers',
      'Cisco Catalyst & SD-WAN Routers',
      'Palo Alto Networks NGFW',
      'Pure Storage FlashArray',
      'VMware vSphere / Nutanix AHV',
    ],
    businessOutcomes: [
      'Reduced data center physical rack footprint by 65% while increasing compute density by 280%.',
      'Lowered monthly data center energy consumption and cooling costs by $48,000.',
      'Achieved 99.999% application availability with zero unassisted failover incidents.',
      'Simplified network management across 18 sites via centralized Cisco SD-WAN controller.',
    ],
    metrics: [
      { label: 'Rack Footprint', value: '-65%', change: 'Consolidated' },
      { label: 'Compute Capacity', value: '280%', change: 'Increase' },
      { label: 'Power Savings', value: '$48k/mo', change: 'Sustained' },
      { label: 'Network Uptime', value: '99.999%', change: 'Five Nines' },
    ],
    architectureDiagram: {
      title: 'Enterprise Hybrid Data Center Topology',
      steps: [
        { stepNumber: 1, title: 'Cisco SD-WAN Edge', desc: 'Encrypted multi-path WAN connecting 18 regional branch offices.', iconName: 'Globe' },
        { stepNumber: 2, title: 'Palo Alto Perimeter Security', desc: 'Zero Trust inspection and automated threat prevention at data center ingress.', iconName: 'ShieldCheck' },
        { stepNumber: 3, title: 'Nutanix HCI + Dell Nodes', desc: 'High-density hyperconverged compute and storage nodes with self-healing NVMe.', iconName: 'Server' },
        { stepNumber: 4, title: 'Pure Storage NVMe Fabric', desc: 'Sub-millisecond latency SAN storage for mission-critical SQL and ERP databases.', iconName: 'Database' },
      ],
    },
  },

  {
    id: 'federal-research-cmmc-nist-800-171-enclave',
    title: 'Federal Research Contractor: NIST SP 800-171 & CMMC 2.0 Controlled Data Enclave',
    client: 'Defense & Aerospace Research Engineering Firm',
    clientType: 'Government',
    region: 'United States',
    challenge:
      'The contractor needed to achieve mandatory CMMC 2.0 Level 2 certification to bid on upcoming $85M Department of Defense research solicitations. Their existing corporate network mixed commercial operations with Controlled Unclassified Information (CUI).',
    solution:
      'Designed and deployed an isolated, highly secure CUI Data Enclave compliant with NIST SP 800-171 Rev 2 and CMMC 2.0. Implemented FedRAMP High cloud storage, FIPS 140-2 validated encryption, Okta Phishing-Resistant MFA, and 24/7 SIEM threat monitoring.',
    technologiesUsed: [
      'NIST SP 800-171 Rev 2 & CMMC 2.0',
      'AWS GovCloud (US)',
      'Okta Phishing-Resistant PIV/MFA',
      'FIPS 140-2 Hardware Security Modules',
      'Splunk Enterprise Security SIEM',
      'Microsoft Defender for GovCloud',
    ],
    businessOutcomes: [
      'Passed third-party CMMC 2.0 Level 2 assessment with a perfect 110/110 SPRS score.',
      'Enabled the firm to successfully win an $85M multi-year DoD research contract.',
      'Isolated CUI data from non-cleared personnel while enabling seamless secure team collaboration.',
      'Reduced compliance audit preparation time from 6 months to 10 days through continuous compliance dashboards.',
    ],
    metrics: [
      { label: 'SPRS Score', value: '110/110', change: 'Perfect Score' },
      { label: 'CMMC Level', value: 'Level 2', change: 'Certified' },
      { label: 'Contract Win', value: '$85M', change: 'DoD Award' },
      { label: 'Audit Readiness', value: '10 Days', change: 'Continuous' },
    ],
    architectureDiagram: {
      title: 'CMMC 2.0 Controlled Unclassified Information (CUI) Enclave',
      steps: [
        { stepNumber: 1, title: 'Phishing-Resistant MFA', desc: 'CAC/PIV card or Okta FastPass mandatory authentication.', iconName: 'Key' },
        { stepNumber: 2, title: 'FIPS 140-2 VPN Tunnel', desc: 'Hardware-encrypted IPSec tunnel connecting cleared engineering workstations.', iconName: 'Lock' },
        { stepNumber: 3, title: 'AWS GovCloud CUI Storage', desc: 'Isolated FedRAMP High storage enclaves with immutable audit logging.', iconName: 'Server' },
        { stepNumber: 4, title: '24/7 SIEM / SOAR Monitoring', desc: 'Splunk ES monitoring all egress traffic with automated access revocation.', iconName: 'ShieldCheck' },
      ],
    },
  },

  {
    id: 'meditech-ehr-pacs-dicom-clinical-ai',
    title: 'Regional Healthcare System: MEDITECH Expanse Modernization & AI Diagnostic Imaging Pipeline',
    client: 'Health System (6 Community Hospitals, 12 Urgent Care Centers)',
    clientType: 'Healthcare',
    region: 'United States',
    challenge:
      'Radiology departments were experiencing severe imaging interpretation backlogs, with emergency CT scan read times exceeding 4 hours. Legacy MEDITECH EHR was isolated from the PACS/DICOM imaging servers.',
    solution:
      'Upgraded MEDITECH Expanse EHR and integrated an AI Diagnostic Imaging Pipeline (PACS/DICOM). The AI algorithm pre-screens CT scans and X-rays for urgent findings (e.g. intracranial hemorrhage, pneumothorax), prioritizing critical cases instantly on radiologist worklists.',
    technologiesUsed: [
      'MEDITECH Expanse EHR',
      'PACS / DICOM Imaging Servers',
      'AI Medical Imaging Ingestion Engine',
      'HL7 v2 Message Bus',
      'Zero Trust Medical Device Network',
      'HIPAA Compliance Logging',
    ],
    businessOutcomes: [
      'Reduced critical emergency radiology read turnaround time from 4 hours down to 11 minutes.',
      'Detected 100% of life-threatening intracranial hemorrhage cases within 3 minutes of CT scan completion.',
      'Streamlined radiologist worklist efficiency, increasing daily scan interpretation volume by 42%.',
      'Achieved seamless bi-directional synchronization between PACS imaging and MEDITECH EHR charts.',
    ],
    metrics: [
      { label: 'Emergency Read Time', value: '11 Mins', change: 'Down from 4 Hours' },
      { label: 'Critical Alert Speed', value: '<3 Mins', change: 'AI Pre-screening' },
      { label: 'Radiology Volume', value: '+42%', change: 'Daily Capacity' },
      { label: 'PACS Sync Speed', value: 'Sub-second', change: 'Real-time' },
    ],
    architectureDiagram: {
      title: 'PACS DICOM AI Imaging Pipeline',
      steps: [
        { stepNumber: 1, title: 'CT Scanner DICOM Acquisition', desc: 'Medical imaging modality streams DICOM slice files to PACS server.', iconName: 'Activity' },
        { stepNumber: 2, title: 'AI Pre-Screening Engine', desc: 'Deep learning vision model analyzes DICOM pixel data for critical pathologies.', iconName: 'Cpu' },
        { stepNumber: 3, title: 'Priority Worklist Escalation', desc: 'Flagged emergency scans prioritized to top of radiologist worklist.', iconName: 'ShieldCheck' },
        { stepNumber: 4, title: 'MEDITECH EHR Auto-fill', desc: 'Preliminary AI findings synced into MEDITECH patient chart instantly.', iconName: 'CheckCircle' },
      ],
    },
  },
];
