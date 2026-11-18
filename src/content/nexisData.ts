export type PageRoute =
  | 'home'
  | 'about'
  | 'fractional-cio'
  | 'it-modernization'
  | 'ai-strategy'
  | 'healthcare'
  | 'public-sector'
  | 'higher-ed'
  | 'insights'
  | 'contact';

export type BrandLogoKey =
  | 'azure'
  | 'aws'
  | 'm365'
  | 'epic'
  | 'meditech'
  | 'aria'
  | 'raystation'
  | 'ecw'
  | 'oracle-health'
  | 'crowdstrike'
  | 'sentinel'
  | 'firewall'
  | 'cisco'
  | 'okta-entra'
  | 'servicenow-vmware'
  | 'nist-ai-rmf'
  | 'nist-800-53'
  | 'hipaa';

export const SITE_CONFIG = {
  brandName: 'Nexis AI',
  legalName: 'Nexis AI, LLC',
  domain: 'nexisai.us',
  url: 'https://nexisai.us',
  email: 'info@nexisai.us',
  phoneDisplay: '+1 (410) 934-7773',
  phoneHref: 'tel:+14109347773',
  location: 'Ellicott City, Howard County, MD 21042',
  locationShort: 'Ellicott City, Maryland',
  serviceGeography:
    'Nationwide across the United States, with active regional focus in Maryland, Washington DC, Pennsylvania, and Virginia',
  diagnosticRegionalFocus: 'Maryland, DC, Pennsylvania, and Virginia — and nationwide across the United States',
  bookingUrl: 'https://cal.com/shafiq-rahman-gxhxcu/30min',
  linkedinUrl: 'https://www.linkedin.com/in/shafiq-rahman-maryland/',
  scholarUrl: 'https://scholar.google.com/citations?user=L0j_am8AAAAJ&hl=en',
  icmaUrl: 'https://icma.org/articles/pm-magazine/ai-governance-local-government-leaders-guide',
  founderName: 'Shafiq Rahman',
  founderCredentials: 'MS, MBA, MCS, PMP®',
  founderFullLine: 'Shafiq Rahman, MS, MBA, MCS, PMP®',
  founderRoleLine: 'Founder & Principal, Nexis AI | Former Maryland State CIO | Technology Transformation Executive',
  coreStatement: 'Technology leadership that turns complexity into measurable business value.',
  supportingMessage:
    'Nexis AI helps healthcare organizations, public-sector agencies, universities, and enterprise leaders modernize technology, strengthen cybersecurity and governance, responsibly adopt AI, and align technology investments with organizational outcomes.',
} as const;

export const PAGE_METADATA: Record<
  PageRoute,
  {
    label: string;
    shortLabel: string;
    title: string;
    description: string;
    path: string;
  }
> = {
  home: {
    label: 'Home',
    shortLabel: 'Home',
    title: 'Nexis AI — Executive Technology Advisory, Fractional CIO, IT Modernization & Responsible AI Governance',
    description:
      'Nexis AI, led by former Maryland State CIO Shafiq Rahman, MS, MBA, MCS, PMP®, delivers Fractional CIO leadership, enterprise IT modernization, managed operations, and responsible AI governance across healthcare, public sector, and higher education.',
    path: '/',
  },
  about: {
    label: 'About Shafiq',
    shortLabel: 'About Shafiq',
    title: 'About Shafiq Rahman, MS, MBA, MCS, PMP® — Former Maryland State CIO | Nexis AI',
    description:
      'Executive leadership biography of Shafiq Rahman: Former Maryland State CIO & MDOT Chief Information & Digital Transformation Officer, University of Maryland School of Medicine Director of Enterprise IT, and Founder of Nexis AI.',
    path: '/?page=about',
  },
  'fractional-cio': {
    label: 'Fractional CIO & Executive Advisory',
    shortLabel: 'Fractional CIO',
    title: 'Fractional CIO & Executive Technology Advisory | Nexis AI',
    description:
      'Executive technology leadership without full-time CIO overhead: Tier 1 Strategic Advisor, Tier 2 Fractional Executive CIO, and Tier 3 Interim Transformation Lead with milestone-based accountability.',
    path: '/?page=fractional-cio',
  },
  'it-modernization': {
    label: 'IT Modernization & Transformation',
    shortLabel: 'IT Modernization',
    title: 'IT Modernization, Cloud Transformation & Managed Operations | Nexis AI',
    description:
      'Enterprise IT strategy, legacy mainframe & COBOL modernization, Microsoft Azure & AWS cloud transformation, cybersecurity & Zero Trust governance, Helpdesk Tier 1–3, 24x7 SOC, and cost optimization.',
    path: '/?page=it-modernization',
  },
  'ai-strategy': {
    label: 'AI Strategy & Governance',
    shortLabel: 'AI Strategy & Governance',
    title: 'Enterprise AI Strategy, Governance & 30-Day AI Diagnostic ($6,500) | Nexis AI',
    description:
      'Enterprise AI roadmaps, Generative AI/RAG & agent orchestration, Managed AI Governance retainers, and the flagship $6,500 fixed-fee 30-Day AI Governance & Pilot Diagnostic.',
    path: '/?page=ai-strategy',
  },
  healthcare: {
    label: 'Healthcare & Clinical Informatics',
    shortLabel: 'Healthcare',
    title: 'Healthcare & Clinical Informatics Advisory | Community Hospitals & Health Systems | Nexis AI',
    description:
      'Healthcare Fractional CIO, Epic & MEDITECH advisory, ARIA Varian & RayStation oncology IT, HL7/FHIR interoperability, HIPAA security, and the 30-Day Hospital AI Governance & Pilot Diagnostic ($6,500).',
    path: '/?page=healthcare',
  },
  'public-sector': {
    label: 'Public Sector',
    shortLabel: 'Public Sector',
    title: 'Public Sector & Government IT Modernization | Former Maryland State CIO | Nexis AI',
    description:
      'Statewide and municipal IT strategy, legacy mainframe transformation, NIST SP 800-53 compliance, Zero Trust, CJIS/FOIA data governance, and vendor rationalization led by former Maryland State CIO Shafiq Rahman.',
    path: '/?page=public-sector',
  },
  'higher-ed': {
    label: 'Higher Education',
    shortLabel: 'Higher Education',
    title: 'Higher Education & Academic Medical Center IT Advisory | Nexis AI',
    description:
      'University IT governance, academic health center EHR integration, Slurm GPU research computing enclaves, faculty/student AI policy, and FERPA/HIPAA/NIST SP 800-171 compliance.',
    path: '/?page=higher-ed',
  },
  insights: {
    label: 'Insights & Recognition',
    shortLabel: 'Insights & Recognition',
    title: 'Executive Recognition, Publications & Assessment Resources | Nexis AI',
    description:
      'Thought leadership, ICMA AI Governance Guide, peer-reviewed research publications, executive media kit, CIO recognition profile, and interactive IT & AI governance self-assessment tools.',
    path: '/?page=insights',
  },
  contact: {
    label: 'Contact',
    shortLabel: 'Contact',
    title: 'Schedule a Confidential Executive Consultation | Nexis AI',
    description:
      'Schedule a 30-minute confidential executive consultation with Shafiq Rahman or submit a tailored inquiry for Fractional CIO, IT modernization, AI governance, healthcare, public sector, or higher education.',
    path: '/?page=contact',
  },
};

export const HASH_ROUTE_MAP: Record<string, { page: PageRoute; sectionId?: string }> = {
  '': { page: 'home' },
  '#home': { page: 'home' },
  '#about': { page: 'about', sectionId: 'about-bio' },
  '#about-shafiq': { page: 'about', sectionId: 'about-bio' },
  '#credentials': { page: 'about', sectionId: 'credentials-standards' },
  '#bio-downloads': { page: 'about', sectionId: 'executive-downloads' },
  '#fractional-cio': { page: 'fractional-cio', sectionId: 'fractional-cio-tiers' },
  '#healthcare-fractional-cio': { page: 'fractional-cio', sectionId: 'healthcare-cio-pillars' },
  '#it-modernization': { page: 'it-modernization', sectionId: 'modernization-pillars' },
  '#modernization-lifecycle': { page: 'it-modernization', sectionId: 'transformation-lifecycle' },
  '#managed-services': { page: 'it-modernization', sectionId: 'managed-services' },
  '#managed-helpdesk': { page: 'it-modernization', sectionId: 'managed-helpdesk' },
  '#soc': { page: 'it-modernization', sectionId: 'soc' },
  '#infrastructure': { page: 'it-modernization', sectionId: 'infrastructure' },
  '#ai-strategy': { page: 'ai-strategy', sectionId: 'ai-capabilities' },
  '#diagnostic': { page: 'ai-strategy', sectionId: 'diagnostic' },
  '#offer-diagnostic': { page: 'ai-strategy', sectionId: 'offer-diagnostic' },
  '#managed-ai-governance': { page: 'ai-strategy', sectionId: 'managed-ai-governance' },
  '#risk-calculator': { page: 'ai-strategy', sectionId: 'risk-calculator' },
  '#healthcare': { page: 'healthcare', sectionId: 'healthcare-overview' },
  '#two-practices': { page: 'healthcare', sectionId: 'healthcare-overview' },
  '#public-sector': { page: 'public-sector', sectionId: 'public-sector-overview' },
  '#higher-ed': { page: 'higher-ed', sectionId: 'higher-ed-overview' },
  '#higher-education': { page: 'higher-ed', sectionId: 'higher-ed-overview' },
  '#insights': { page: 'insights', sectionId: 'thought-leadership' },
  '#recognition': { page: 'insights', sectionId: 'executive-recognition' },
  '#it-maturity-assessment': { page: 'insights', sectionId: 'it-maturity-assessment' },
  '#board-checklist': { page: 'insights', sectionId: 'board-checklist' },
  '#modernization-assessment': { page: 'insights', sectionId: 'modernization-assessment' },
  '#contact': { page: 'contact', sectionId: 'contact-portal' },
  '#fit-call': { page: 'contact', sectionId: 'fit-call' },
  '#faq': { page: 'contact', sectionId: 'faq' },
};

export const EXECUTIVE_CREDIBILITY_HIGHLIGHTS = [
  'Former Maryland State CIO and Chief Information & Digital Transformation Officer (MDOT).',
  'More than 20 years of enterprise technology, infrastructure, and transformation leadership.',
  'Executive leadership across state government, academic medicine, healthcare systems, and higher education.',
  'Proven governance across complex, multi-agency and multi-hospital technology environments.',
  'Enterprise IT modernization, Zero Trust cybersecurity, clinical informatics, and responsible AI governance.',
];

export const EXECUTIVE_IMPACT_METRICS = [
  {
    metric: '$250M+',
    label: 'Technology Portfolio & Investment Scale',
    context: 'MDOT Statewide CIO Tenure (2023–2026)',
    detail: 'Directed enterprise IT capital planning, multi-modal modernization, and mission-critical operations across six agencies.',
  },
  {
    metric: '~1,500',
    label: 'IT Professionals & Resources Led',
    context: 'Six Transportation Administrations',
    detail: 'United decentralized agency IT units under coherent governance, enterprise architecture, and shared operational standards.',
  },
  {
    metric: '850 → 620',
    label: 'Enterprise Application Rationalization',
    context: 'Portfolio Modernization Program',
    detail: 'Systematically evaluated, consolidated, and retired ~230 redundant software systems without disrupting frontline services.',
  },
  {
    metric: '~$6M',
    label: 'Recurring Annual Savings Identified',
    context: 'Licensing & Infrastructure Efficiency',
    detail: 'Delivered measurable recurring taxpayer savings through contract consolidation, cloud transition, and vendor governance.',
  },
  {
    metric: '7 Hospitals',
    label: 'MEDITECH-to-Epic & Clinical Interop',
    context: 'University of Maryland School of Medicine',
    detail: 'Led enterprise IT for 9 years supporting ~3,000 faculty, ~3,000 staff, and 1,300+ students across clinical & research missions.',
  },
  {
    metric: 'Statewide AI',
    label: 'First AI Governance Policy Co-Author',
    context: 'Maryland Governor’s AI Sub-Cabinet',
    detail: 'Established practical, risk-tiered public-sector AI guardrails alongside mainframe-to-Microsoft Azure cloud modernization.',
  },
];

export const LEADERSHIP_PHILOSOPHY_PRINCIPLES = [
  {
    code: '01',
    title: 'Align technology strategy with institutional and business priorities',
    description: 'Every modernization roadmap, vendor selection, and budget request maps directly to clinical safety, public-service continuity, or institutional mission.',
  },
  {
    code: '02',
    title: 'Establish governance and accountability before investing',
    description: 'Define decision rights, procurement intake gates, and risk ownership before capital is committed to overlapping platforms or unvetted pilots.',
  },
  {
    code: '03',
    title: 'Modernize critical systems without disrupting essential services',
    description: 'Sequence mainframe, EHR, and core network migrations in controlled, reversible phases that protect 24/7 clinical and constituent operations.',
  },
  {
    code: '04',
    title: 'Reduce technical debt and unnecessary technology expenditure',
    description: 'Rationalize redundant applications, audit vendor SLAs, and eliminate dormant licensing so budgets fund high-value transformation.',
  },
  {
    code: '05',
    title: 'Strengthen cybersecurity and operational resilience',
    description: 'Embed NIST SP 800-53 controls, Zero Trust identity boundaries, HIPAA safeguards, and immutable recovery testing into everyday IT operations.',
  },
  {
    code: '06',
    title: 'Adopt AI responsibly, with measurable return on investment',
    description: 'Treat AI as governed enterprise capability—enforcing privacy boundaries, human oversight, clinical/operational safety, and clear ROI criteria.',
  },
];

export const CAREER_TIMELINE = [
  {
    period: 'March 2026 – Present',
    role: 'Founder & Principal',
    organization: 'Nexis AI, LLC · Ellicott City, Maryland',
    highlights: [
      'Leads executive technology advisory, Fractional CIO stewardship, enterprise IT modernization, managed operations, and responsible AI governance across healthcare, public sector, and higher education nationwide.',
      'Personally conducts the flagship 30-Day AI Governance & Pilot Diagnostic and oversees managed Helpdesk, 24x7 SOC, and Infrastructure delivery with vetted partners.',
    ],
  },
  {
    period: 'January 2026 – Present',
    role: 'Clinical Informatics Advisory',
    organization: 'St. Agnes Healthcare / Ascension',
    highlights: [
      'Provides clinical informatics advisory at the intersection of frontline hospital clinical operations, EHR platforms, enterprise technology services, and organizational transformation.',
      'Supports alignment between clinical workflows, EHR optimization, regulatory integrity, and resilient operational technology.',
    ],
  },
  {
    period: 'October 2023 – January 2026',
    role: 'Chief Information & Digital Transformation Officer / Maryland State CIO',
    organization: 'Maryland Department of Transportation (MDOT)',
    highlights: [
      'Directed a $250M+ enterprise IT budget and ~1,500 IT personnel across six transportation modal administrations.',
      'Co-authored Maryland’s first statewide AI governance policy as a key contributor on the Governor’s AI Sub-cabinet.',
      'Modernized core legacy mainframe systems to Microsoft Azure cloud and strengthened statewide cybersecurity & Zero Trust architecture.',
      'Rationalized the enterprise application portfolio from ~850 systems to ~620, producing ~$6M in recurring annual taxpayer savings.',
    ],
  },
  {
    period: 'October 2014 – October 2023',
    role: 'Director of Enterprise IT',
    organization: 'University of Maryland School of Medicine (UMSOM)',
    highlights: [
      'Led enterprise technology for 9 years supporting ~3,000 faculty, ~3,000 staff, and 1,300+ students, residents, and fellows across 25 academic departments.',
      'Directed the MEDITECH-to-Epic migration and clinical data interoperability across seven hospitals under HIPAA/HITECH.',
      'Partnered with clinical chairs, research institutes, and academic leadership to bridge EHR systems, medical oncology informatics, and research computing.',
    ],
  },
];

export const VERIFIED_CREDENTIALS = [
  {
    name: 'PMP® — Project Management Professional',
    issuer: 'PMI — Cert. #4362628, valid through April 2029',
    code: 'PMP',
    bg: '#0F2A44',
    accent: '#22D3EE',
    type: 'monogram' as const,
  },
  {
    name: 'M.S. Management Information Systems',
    issuer: 'University of Maryland Global Campus, 2021',
    code: 'MS',
    bg: '#1E3A5F',
    accent: '#FFFFFF',
    type: 'crest' as const,
  },
  {
    name: 'MBA',
    issuer: 'AK University, 2008',
    code: 'MBA',
    bg: '#0F2A44',
    accent: '#38BDF8',
    type: 'monogram' as const,
  },
  {
    name: 'Master of Computer Science (MCS)',
    issuer: 'AK University, 2001',
    code: 'MCS',
    bg: '#082F49',
    accent: '#22D3EE',
    type: 'monogram' as const,
  },
];

export const SUPPORTED_PLATFORMS: {
  name: string;
  role: string;
  code: string;
  bg: string;
  accent: string;
  brand: BrandLogoKey;
}[] = [
  { name: 'Microsoft Azure', role: 'Cloud Infrastructure', code: 'Az', bg: '#0A2E5C', accent: '#38BDF8', brand: 'azure' },
  { name: 'AWS Cloud', role: 'Hybrid Compute', code: 'AWS', bg: '#1E293B', accent: '#FF9900', brand: 'aws' },
  { name: 'Microsoft 365', role: 'Workplace & Intune', code: 'M365', bg: '#0F172A', accent: '#FFFFFF', brand: 'm365' },
  { name: 'Epic EHR', role: 'Clinical Systems', code: 'Epic', bg: '#881337', accent: '#FFFFFF', brand: 'epic' },
  { name: 'MEDITECH', role: 'Hospital EHR', code: 'MT', bg: '#064E3B', accent: '#6EE7B7', brand: 'meditech' },
  { name: 'ARIA Varian', role: 'Oncology OIS', code: 'ARIA', bg: '#0F4C5C', accent: '#22D3EE', brand: 'aria' },
  { name: 'RAYSTATION', role: 'Radiation Planning', code: 'RAY', bg: '#1E1B4B', accent: '#38BDF8', brand: 'raystation' },
  { name: 'ECW', role: 'eClinicalWorks EHR', code: 'eCW', bg: '#1E3A8A', accent: '#93C5FD', brand: 'ecw' },
  { name: 'Oracle Health', role: 'Clinical Interop', code: 'OH', bg: '#991B1B', accent: '#FFFFFF', brand: 'oracle-health' },
  { name: 'CrowdStrike', role: '24x7 EDR / SOC', code: 'EDR', bg: '#450A0A', accent: '#F87171', brand: 'crowdstrike' },
  { name: 'MS Sentinel', role: 'SIEM Telemetry', code: 'SIEM', bg: '#0F2A44', accent: '#38BDF8', brand: 'sentinel' },
  { name: 'Palo Alto / Fortinet', role: 'NGFW Perimeter', code: 'FW', bg: '#7C2D12', accent: '#FDBA74', brand: 'firewall' },
  { name: 'Cisco & SD-WAN', role: 'Core Networking', code: 'NET', bg: '#0E7490', accent: '#67E8F9', brand: 'cisco' },
  { name: 'Okta & Entra ID', role: 'Zero Trust IAM', code: 'IAM', bg: '#1E3A8A', accent: '#93C5FD', brand: 'okta-entra' },
  { name: 'ServiceNow / VMware', role: 'ITSM & Virtualization', code: 'ITSM', bg: '#14532D', accent: '#86EFAC', brand: 'servicenow-vmware' },
];

export const FRAMEWORKS_WE_WORK_TO = [
  { name: 'NIST AI RMF', role: 'AI Risk Management Framework', code: 'AI', bg: '#0F2A44', accent: '#38BDF8', brand: 'nist-ai-rmf' as BrandLogoKey },
  { name: 'NIST SP 800-53', role: 'Security & Privacy Controls', code: '800', bg: '#082F49', accent: '#38BDF8', brand: 'nist-800-53' as BrandLogoKey },
  { name: 'HIPAA', role: 'Privacy & Security Safeguards', code: 'PHI', bg: '#064E3B', accent: '#34D399', brand: 'hipaa' as BrandLogoKey },
];

export const SHORT_BIO_TEXT = `Shafiq Rahman, MS, MBA, MCS, PMP®, is Founder & Principal of Nexis AI, LLC, an executive technology advisory and managed IT operations firm headquartered in Ellicott City, Maryland. Previously, he served as Chief Information & Digital Transformation Officer and Maryland State CIO at the Maryland Department of Transportation (Oct 2023–Jan 2026), overseeing a $250M+ IT portfolio and ~1,500 IT staff across six agencies, co-authoring Maryland’s first statewide AI governance policy, modernizing mainframe workloads to Microsoft Azure, and rationalizing ~850 applications to ~620 with ~$6M in recurring annual savings. Earlier, he spent nine years (2014–2023) as Director of Enterprise IT at the University of Maryland School of Medicine, leading MEDITECH-to-Epic migrations across seven hospitals. Beginning January 2026, he also provides clinical informatics advisory supporting St. Agnes Healthcare / Ascension. He authored "AI Governance: A Local Government Leader's Guide" (ICMA, March 2024).`;

export const FULL_BIO_TEXT = `Shafiq Rahman, MS, MBA, MCS, PMP®, is an accomplished enterprise Chief Information Officer, digital transformation strategist, clinical informatics advisor, and AI governance leader with over 20 years of leadership across state government, academic medicine, community healthcare, and higher education.

As Founder & Principal of Nexis AI, LLC (March 2026–present), Shafiq advises hospital CEOs, boards, public-sector agency heads, and university executives nationwide across the United States on Fractional CIO leadership, enterprise IT modernization, cybersecurity resilience, managed operations, and responsible AI adoption. He personally leads Nexis AI’s flagship 30-Day AI Governance & Pilot Diagnostic alongside strategic transformation mandates.

From October 2023 to January 2026, Shafiq served as Chief Information & Digital Transformation Officer and Maryland State CIO at the Maryland Department of Transportation (MDOT). In that cabinet-level enterprise capacity, he governed a $250M+ annual IT portfolio and led ~1,500 IT professionals across six transportation modal administrations—including transit, highways, motor vehicles, aviation, and port operations. Under his stewardship, MDOT consolidated seven siloed IT groups into a unified enterprise shared-services model, migrated core mainframe workloads to Microsoft Azure cloud, and executed a disciplined application portfolio rationalization from ~850 applications down to ~620—generating approximately $6M in recurring annual taxpayer savings. He also served on the Governor’s AI Sub-cabinet, co-authoring Maryland’s first statewide AI governance policy.

From October 2014 to October 2023, Shafiq served as Director of Enterprise IT at the University of Maryland School of Medicine (UMSOM), supporting ~3,000 faculty, ~3,000 staff, and 1,300+ students across 25 academic departments. He directed the MEDITECH-to-Epic migration and clinical data interoperability across seven affiliated hospitals under HIPAA/HITECH compliance and co-authored peer-reviewed medical physics and clinical cybersecurity research on Radiation Oncology Information Systems (ARIA Varian, RayStation) and hospital cyber disaster recovery.

Beginning January 2026, he also brings clinical informatics advisory experience supporting St. Agnes Healthcare / Ascension at the intersection of frontline clinical operations, EHR platforms, and technology service delivery.

Shafiq holds an M.S. in Management Information Systems from the University of Maryland Global Campus (2021), an MBA (2008) and Master of Computer Science (2001) from AK University, and maintains an active Project Management Professional (PMP®) credential (Cert. #4362628). He is the author of "AI Governance: A Local Government Leader's Guide" published by ICMA in March 2024.`;

export const SPEAKING_TOPICS = [
  {
    title: 'The CIO’s Playbook for Enterprise Application Rationalization & Fiscal Stewardship',
    audience: 'CIO Summits, Public Sector Executive Forums & Corporate Boards',
    summary: 'How to audit complex multi-agency or multi-hospital software estates, reduce redundant licensing (lessons from rationalizing ~850 systems to ~620), and reinvest ~$6M+ into digital modernization.',
  },
  {
    title: 'Responsible AI Governance: Moving From Unmanaged Pilots to Boardroom Accountability',
    audience: 'Hospital Boards, CEOs, CMIOs & State/Local Executives',
    summary: 'Practical NIST AI RMF risk tiering, Kill/Scale/Fix triage methodology, HIPAA BAA boundaries, and establishing pre-purchase AI intake gates within 30 days.',
  },
  {
    title: 'Modernizing Legacy Mainframes Without Interrupting Essential Services',
    audience: 'State & Municipal CIOs, Transportation Leaders & Financial/ERP Executives',
    summary: 'Sequencing COBOL and legacy data-center migrations to Microsoft Azure cloud while maintaining 24/7 mission-critical operations and NIST SP 800-53 compliance.',
  },
  {
    title: 'Clinical Informatics & Cyber Resilience in Connected Care & Oncology Environments',
    audience: 'Academic Medical Centers, Cancer Centers & Health System C-Suites',
    summary: 'Lessons from leading multi-hospital EHR migrations (Epic / MEDITECH) and isolating life-critical clinical devices (IoMT, Radiation Oncology Information Systems) against ransomware.',
  },
  {
    title: 'Higher Education & Academic Medicine: Balancing Faculty AI Innovation With Research & FERPA Security',
    audience: 'University Presidents, Provosts, Deans & Campus CIOs',
    summary: 'Building governed Slurm GPU research enclaves, bridging university IT with teaching hospitals, and establishing clear AI academic policies.',
  },
];

export const MODERNIZATION_LIFECYCLE = [
  {
    step: '01',
    stage: 'Assess',
    headline: 'Baseline Architecture, Portfolio & Risk Discovery',
    detail: 'Audit active infrastructure, legacy mainframes, software licenses, shadow AI pilots, cybersecurity posture, and vendor SLA obligations against institutional objectives.',
    artifact: 'Portfolio & Risk Baseline Report',
  },
  {
    step: '02',
    stage: 'Architect',
    headline: 'Target State Cloud, Data & Security Blueprint',
    detail: 'Design resilient Microsoft Azure / AWS hybrid cloud architecture, Zero Trust identity boundaries, HL7/FHIR or enterprise API integration layers, and phased cutover paths.',
    artifact: 'Enterprise Target Architecture Blueprint',
  },
  {
    step: '03',
    stage: 'Govern',
    headline: 'Decision Rights, Intake Gates & Policy Frameworks',
    detail: 'Establish Architecture Review Boards (ARB), NIST SP 800-53 / NIST AI RMF control mappings, capital prioritization scoring, and mandatory vendor contract review gates.',
    artifact: 'IT & AI Governance Charter',
  },
  {
    step: '04',
    stage: 'Modernize',
    headline: 'Sequenced Migration & Rationalization Execution',
    detail: 'Execute phased workload transitions from fragile legacy applications and on-prem hardware to modernized ERP, EHR, or cloud platforms without disrupting frontline operations.',
    artifact: '12–24 Month Phased Modernization Roadmap',
  },
  {
    step: '05',
    stage: 'Integrate',
    headline: 'Interoperability, Automation & Security Operations',
    detail: 'Unify IAM/SSO (Okta, Entra ID), ServiceNow ITSM workflows, clinical/enterprise APIs, and 24x7 SIEM/EDR SOC telemetry across hybrid environments.',
    artifact: 'Unified Operational & Security Fabric',
  },
  {
    step: '06',
    stage: 'Measure',
    headline: 'Executive KPIs, SLA Accountability & Fiscal Tracking',
    detail: 'Track application retirement savings, mean time to resolution, system uptime, vulnerability remediation SLAs, and AI pilot ROI on executive board scorecards.',
    artifact: 'Board & C-Suite Outcome Scorecard',
  },
  {
    step: '07',
    stage: 'Optimize',
    headline: 'Continuous FinOps, Licensing & Resilience Tuning',
    detail: 'Eliminate shelfware renewals, tune cloud consumption costs, conduct simulated ransomware BC/DR failover drills, and recalibrate roadmaps quarterly.',
    artifact: 'Annual Cost & Resilience Optimization Cycle',
  },
];

export const MODERNIZATION_PILLARS = [
  {
    id: 'strategy-governance',
    number: '01',
    title: 'Enterprise IT Strategy & Governance',
    summary: 'Establish clear leadership operating models and disciplined technology capital governance before spending commits.',
    bullets: [
      'Enterprise IT strategic planning',
      'CIO advisory & technology operating models',
      'IT governance & architecture review boards',
      'IT portfolio & investment management',
      'Technology roadmaps & modernization sequencing',
      'IT organizational transformation',
    ],
  },
  {
    id: 'legacy-modernization',
    number: '02',
    title: 'Legacy System Modernization',
    summary: 'Retire fragile legacy debt safely while protecting uninterrupted public-service, academic, or clinical delivery.',
    bullets: [
      'Mainframe & COBOL modernization strategies',
      'Legacy application rationalization',
      'Platform migration & cloud transformation',
      'Application portfolio assessment',
      'API & integration modernization',
      'Data modernization & interoperability',
    ],
  },
  {
    id: 'cloud-infrastructure',
    number: '03',
    title: 'Cloud & Infrastructure Transformation',
    summary: 'Architect resilient hybrid cloud, campus/clinical networks, virtualization, and tested disaster recovery.',
    bullets: [
      'Microsoft Azure cloud strategy',
      'Cloud architecture & governance',
      'Hybrid infrastructure modernization',
      'Data center transformation',
      'Network & endpoint modernization',
      'Virtualization, VDI & business continuity / DR',
    ],
  },
  {
    id: 'enterprise-applications',
    number: '04',
    title: 'Enterprise Applications',
    summary: 'Eliminate operational friction across core financial, HR, administrative, and clinical platforms.',
    bullets: [
      'ERP & HRIS modernization',
      'Financial & procurement system transformation',
      'EHR & clinical application modernization',
      'Enterprise application integration',
      'Workflow digitization & automation',
      'Post-implementation value realization',
    ],
  },
  {
    id: 'cybersecurity-resilience',
    number: '05',
    title: 'Cybersecurity & Resilience',
    summary: 'Harden identity, clinical devices, and critical workloads aligned to NIST SP 800-53 and HIPAA safeguards.',
    bullets: [
      'Zero Trust architecture',
      'NIST cybersecurity framework alignment',
      'NIST SP 800-53 control governance',
      'Identity & access management (IAM)',
      'Cybersecurity risk & vulnerability governance',
      'Disaster recovery & ransomware resilience',
    ],
  },
  {
    id: 'cost-optimization',
    number: '06',
    title: 'Technology Cost Optimization',
    summary: 'Turn IT from an opaque cost center into a fiscally transparent engine that funds strategic innovation.',
    bullets: [
      'Software licensing & vendor rationalization',
      'Application portfolio optimization',
      'Infrastructure cost management',
      'IT contract & SLA reviews',
      'Technology investment prioritization',
      'Recurring cost reduction',
    ],
  },
];

export const AI_METHODOLOGY_PIPELINE = [
  {
    step: '01',
    name: 'Intent',
    subtitle: 'Executive & Institutional Mandate',
    detail: 'Anchor every AI use case to an explicit clinical, civic, or business outcome—defining risk tolerance, regulatory boundaries (HIPAA, FERPA, NIST AI RMF), and executive sponsorship first.',
  },
  {
    step: '02',
    name: 'Data & Architecture',
    subtitle: 'Readiness, Privacy & Secure Grounding',
    detail: 'Establish enterprise data quality, PHI/PII isolation boundaries, BAA-backed LLM gateways, and controlled Retrieval-Augmented Generation (RAG) repositories.',
  },
  {
    step: '03',
    name: 'Orchestration',
    subtitle: 'Models, Agents & Safety Guardrails',
    detail: 'Coordinate validated foundation models, clinical or operational workflow agents, prompt/output evaluation rubrics, and mandatory human-in-the-loop checkpoints.',
  },
  {
    step: '04',
    name: 'Integration',
    subtitle: 'EHR, ERP & Operational Workflows',
    detail: 'Embed governed AI directly inside existing clinician, caseworker, or staff workflows (Epic, MEDITECH, ServiceNow, Microsoft 365) with Single Sign-On and audit logging.',
  },
  {
    step: '05',
    name: 'Value',
    subtitle: 'Measured ROI & Board Accountability',
    detail: 'Track audited adoption, clinician/staff time reclaimed, error reduction, and net fiscal return through transparent Kill / Scale / Fix quarterly governance.',
  },
];

export const AI_INVESTMENT_FLYWHEEL = [
  { stage: '01 · Invest', desc: 'Target high-leverage workflows with vetted risk tiers and explicit sponsor ownership.' },
  { stage: '02 · Deploy', desc: 'Release within BAA/Zero Trust boundaries alongside frontline user training.' },
  { stage: '03 · Measure', desc: 'Audit accuracy, algorithmic bias, usage telemetry, and SLA adherence.' },
  { stage: '04 · Learn', desc: 'Capture frontline feedback, edge-case drift, and workflow friction.' },
  { stage: '05 · Optimize', desc: 'Terminate low-value shadow tools; remediate medium-risk gaps or tune prompts/RAG.' },
  { stage: '06 · Reinvest', desc: 'Redirect reclaimed budget and governance confidence into scaled enterprise AI.' },
];

export interface ThoughtLeadershipArticle {
  id: string;
  title: string;
  author: string;
  authorCredentials: string;
  publicationDate: string;
  venue: string;
  category:
    | 'CIO Leadership'
    | 'AI Governance'
    | 'Digital Transformation'
    | 'Enterprise IT Modernization'
    | 'Healthcare Technology'
    | 'Public-Sector Technology'
    | 'Cybersecurity and Risk'
    | 'Academic Technology';
  readingTime: string;
  summary: string;
  bodyParagraphs: string[];
  keyTakeaways: string[];
  externalUrl?: string;
  externalLabel?: string;
  imageUrl?: string;
  sourceType: 'Published Guide' | 'National Press / Summit' | 'Peer-Reviewed Research' | 'Executive Brief';
}

export const THOUGHT_LEADERSHIP_ARTICLES: ThoughtLeadershipArticle[] = [
  {
    id: 'icma-ai-governance-local-gov-guide-2024',
    title: 'AI Governance: A Local Government Leader’s Guide',
    author: 'Shafiq Rahman',
    authorCredentials: 'MS, MBA, MCS, PMP® · Former Maryland State CIO',
    publicationDate: 'March 2024',
    venue: 'ICMA (International City/County Management Association) PM Magazine',
    category: 'AI Governance',
    readingTime: '6 min read',
    sourceType: 'Published Guide',
    externalUrl: 'https://icma.org/articles/pm-magazine/ai-governance-local-government-leaders-guide',
    externalLabel: 'Read Original Article on ICMA.org',
    summary:
      'A practical governance framework helping municipal, county, and state leaders move from ad-hoc AI experimentation to accountable policy, public trust, procurement guardrails, and NIST-aligned risk management.',
    bodyParagraphs: [
      'Public-sector executives face intense pressure to adopt generative AI and automation while protecting constituent privacy, algorithmic fairness, and statutory compliance. Without structured oversight, decentralized departmental adoption creates hidden vendor liability and fragmented standards.',
      'This guide outlines an actionable executive governance model grounded in practical CIO experience: establishing an executive AI steering charter, maintaining a centralized AI use inventory, classifying deployments by risk tier, requiring vendor data-protection attestations before procurement, and preserving meaningful human oversight in consequential public decisions.',
      'By positioning AI governance as an enabler of safe innovation rather than bureaucratic friction, agency directors and local managers can capture operational efficiency while maintaining citizen trust.',
    ],
    keyTakeaways: [
      'Maintain a living inventory of all internal and vendor-embedded AI systems across departments.',
      'Implement pre-procurement intake gates prohibiting model training on sensitive public or constituent data.',
      'Tier AI use cases by operational and equity impact aligned with NIST AI Risk Management Framework principles.',
    ],
  },
  {
    id: 'route-fifty-application-rationalization-2025',
    title: 'Transit Leaders Look to Efficient, Tech-Driven Future: From ~850 Applications to ~620',
    author: 'Shafiq Rahman (Featured Executive Interview)',
    authorCredentials: 'Former Maryland State CIO & MDOT Chief Information & Digital Transformation Officer',
    publicationDate: 'July 21, 2025',
    venue: 'Route Fifty — Digital Government',
    category: 'Enterprise IT Modernization',
    readingTime: '5 min read',
    sourceType: 'National Press / Summit',
    externalUrl: 'https://www.route-fifty.com/digital-government/2025/07/transit-leaders-look-efficient-tech-driven-future/406859/',
    externalLabel: 'Read Feature on Route Fifty',
    summary:
      'National public-sector profile examining how uniting siloed agency IT shops, modernizing mainframe workloads, and rationalizing an ~850-application estate down to ~620 delivered ~$6M in recurring annual savings.',
    bodyParagraphs: [
      'Constrained public-sector capital budgets require technology leaders to unlock efficiency from within existing operational estates. At the Maryland Department of Transportation, sprawling agency-by-agency software contracts created overlapping tools, elevated cyber risk surfaces, and diverted IT staff to legacy maintenance.',
      'Through unified enterprise governance across six modal administrations (~1,500 IT staff and a $250M+ IT portfolio), leadership consolidated fragmented IT teams, digitized paper-heavy customer workflows, and executed a rigorous Tolerance / Invest / Migrate / Eliminate portfolio review—reducing ~850 applications to ~620.',
      'The fiscal and operational dividends—approximately $6M in recurring annual savings alongside faster Azure cloud modernization—illustrate why portfolio rationalization is the foundation of sustainable digital transformation.',
    ],
    keyTakeaways: [
      'Eliminate duplicate departmental SaaS and legacy maintenance contracts through structured portfolio scoring.',
      'Unite decentralized IT teams around shared cybersecurity, cloud, and enterprise service-desk standards.',
      'Reallocate recurring savings directly into high-priority digital constituent and clinical services.',
    ],
  },
  {
    id: 'govexec-efficiency-summit-2025',
    title: 'GovExec Government Efficiency Summit: Accelerating Digital Services & Reducing Friction',
    author: 'Shafiq Rahman (Featured Panelist)',
    authorCredentials: 'MS, MBA, MCS, PMP®',
    publicationDate: 'July 2025',
    venue: 'GovExec Government Efficiency Summit',
    category: 'Public-Sector Technology',
    readingTime: '4 min read',
    sourceType: 'National Press / Summit',
    externalUrl: 'https://www.linkedin.com/posts/govexec_govexec-governmentefficiencysummit-digitalgovernment-activity-7356669995038195714-wtgM',
    externalLabel: 'View GovExec Summit Highlights',
    summary:
      'Executive summit insights on eliminating legacy organizational silos, digitizing public workflows, and establishing measurable IT operating models.',
    bodyParagraphs: [
      'Modern public expectations are shaped by frictionless digital experiences. Yet many government institutions still operate legacy back-office workflows separated by agency boundaries and manual handoffs.',
      'Addressing national technology executives at the GovExec Government Efficiency Summit, Shafiq Rahman detailed how enterprise shared services, automated document workflows, and disciplined capital governance compress delivery cycles while lowering taxpayer cost.',
    ],
    keyTakeaways: [
      'Shared IT operating models accelerate time-to-value more reliably than point software purchases.',
      'Paperless digitization requires synchronized policy, identity, and workflow redesign.',
    ],
  },
  {
    id: 'autotech-detroit-cyber-resilience-2024',
    title: 'Software-Defined Infrastructure & Critical Cyber Enclaves',
    author: 'Shafiq Rahman (Fireside Chat)',
    authorCredentials: 'MS, MBA, MCS, PMP®',
    publicationDate: 'June 2024',
    venue: 'AutoTech Detroit 2024 (Hosted by DMI)',
    category: 'Cybersecurity and Risk',
    readingTime: '4 min read',
    sourceType: 'National Press / Summit',
    imageUrl: '/images/autotech_detroit_shafiq.jpg',
    externalUrl: 'https://www.facebook.com/DMI.DoMore/posts/join-dmi-at-autotechdetroit2024-and-hear-from-two-visionary-leaders-during-our-f/1063931645358952/',
    externalLabel: 'View Session Summary',
    summary:
      'Executive fireside perspective on embedding Zero Trust security into software-defined mobility, connected IoT/OT sensors, and critical public infrastructure.',
    bodyParagraphs: [
      'Whether protecting connected hospital medical devices (IoMT) or software-defined transportation infrastructure, perimeter-only cybersecurity is no longer viable. Every connected sensor and cloud interface requires Zero Trust identity verification and segmented network architecture.',
      'During the AutoTech Detroit 2024 Fireside Chat, Shafiq Rahman discussed aligning physical operational technology (OT) resilience with modern cloud telemetry and automated incident containment.',
    ],
    keyTakeaways: [
      'Isolate life-critical OT and medical devices into micro-segmented VLANs independent of general enterprise traffic.',
      'Combine 24x7 SIEM/EDR visibility with pre-rehearsed air-gapped continuity plans.',
    ],
  },
  {
    id: 'cybersecurity-radiation-oncology-paper',
    title: 'The Impact of Cybersecurity in Radiation Oncology: Logistics and Challenges',
    author: 'EM Nichols, SU Rahman, B Yi',
    authorCredentials: 'Applied Radiation Oncology (Vol. 7, Issue 4, pp. 14–18)',
    publicationDate: '2018',
    venue: 'Applied Radiation Oncology',
    category: 'Healthcare Technology',
    readingTime: '7 min read',
    sourceType: 'Peer-Reviewed Research',
    externalUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:9yKSN-GCB0IC',
    externalLabel: 'View Citation on Google Scholar',
    summary:
      'Peer-reviewed analysis of cyber attack surfaces across networked linear accelerators and oncology EMRs (ARIA / Impac), proposing isolated clinical enclaves and emergency treatment continuity.',
    bodyParagraphs: [
      'As cancer centers transitioned from standalone treatment units to tightly coupled oncology information systems, treatment planning databases, and enterprise hospital networks, cyber incidents emerged as a direct patient-safety risk.',
      'This peer-reviewed publication examines the attack surfaces across linear accelerators and oncology clinical databases, establishing practical VLAN segmentation models and emergency offline continuity protocols to sustain safe radiation therapy during enterprise network outages.',
    ],
    keyTakeaways: [
      'Cancer treatment environments require dedicated clinical IT enclaves separate from standard hospital networks.',
      'Emergency clinical disaster recovery plans must preserve treatment verification data offline.',
    ],
  },
  {
    id: 'rois-integration-checklist-2026',
    title: 'Checklist and Quality Assurance Tools for Integration of Two Radiation Oncology Information Systems (ROISs)',
    author: 'BY Yi, SU Rahman, S Chen, B Zhang',
    authorCredentials: 'Journal of Applied Clinical Medical Physics (Vol. 27, Issue 2)',
    publicationDate: '2026',
    venue: 'Journal of Applied Clinical Medical Physics (JACMP)',
    category: 'Digital Transformation',
    readingTime: '8 min read',
    sourceType: 'Peer-Reviewed Research',
    externalUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:d1gkVwhDpl0C',
    externalLabel: 'View Citation on Google Scholar',
    summary:
      'Methodological QA checklist and automated validation architecture for merging complex oncology EHR platforms during health-system M&A and clinical consolidations.',
    bodyParagraphs: [
      'Health system mergers routinely compel multi-site hospital networks to consolidate disparate clinical and oncology information systems. Because dosimetric parameters and active patient treatment histories tolerate zero silent corruption, ad-hoc migrations create unacceptable clinical risk.',
      'Drawn from large-scale academic health center integration experience, this publication formalizes a five-layer pre- and post-migration QA checklist spanning machine configurations, patient imaging/EMR histories, clinical workflows, permissions, and calibration databases.',
    ],
    keyTakeaways: [
      'Automate schema diffing and DICOM validation before and after clinical system consolidations.',
      'Separate integration assurance into pre-migration survey, cutover verification, and post-merge QA.',
    ],
  },
  {
    id: 'e-variance-clinical-integrity-2026',
    title: 'E-Variance: Assuring Clinical Data Integrity and Patient Safety Workflows in EMRs',
    author: 'S Rahman, K Milman, TS Lee',
    authorCredentials: 'Healthcare Technology Letters (Vol. 13, Issue 1)',
    publicationDate: '2026',
    venue: 'Healthcare Technology Letters',
    category: 'Academic Technology',
    readingTime: '6 min read',
    sourceType: 'Peer-Reviewed Research',
    externalUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L0j_am8AAAAJ&citation_for_view=L0j_am8AAAAJ:qjMakFHDy7sC',
    externalLabel: 'View Citation on Google Scholar',
    summary:
      'Design and operational evaluation of an integrated clinical incident-learning application that surfaces EMR data variances and removes frontline workflow friction across academic clinical departments.',
    bodyParagraphs: [
      'Frontline clinicians rarely report near-miss EHR data variances when reporting requires navigating cumbersome, disconnected ticketing systems. Yet those latent variances compound into costly bottlenecks and patient-safety hazards.',
      'This study details the engineering and academic deployment of RadOnc E-Variance—combining streamlined reporting, role-based HIPAA security, automated alert routing, and executive trend analytics to build a transparent culture of clinical data integrity.',
    ],
    keyTakeaways: [
      'Low-friction frontline reporting dramatically increases visibility into systemic EMR workflow defects.',
      'Longitudinal variance telemetry equips clinical and IT leadership to fix root causes rather than symptoms.',
    ],
  },
  {
    id: 'cio-executive-playbook-governance-before-spend',
    title: 'Why Governance Must Precede Technology Spend: Lessons From State Government & Academic Medicine',
    author: 'Shafiq Rahman',
    authorCredentials: 'MS, MBA, MCS, PMP® · Founder & Principal, Nexis AI',
    publicationDate: '2026',
    venue: 'Nexis AI Executive Advisory Monograph',
    category: 'CIO Leadership',
    readingTime: '5 min read',
    sourceType: 'Executive Brief',
    summary:
      'An executive synthesis on establishing decision rights, risk tiering, and vendor SLA discipline before committing multi-year CAPEX/OPEX to cloud or AI initiatives.',
    bodyParagraphs: [
      'Across both community hospitals and state agencies, most troubled IT initiatives fail long before technical implementation begins: they fail when software is purchased department-by-department without executive architecture review, lifecycle costing, or risk ownership.',
      'Drawing directly from overseeing a $250M+ public-sector technology estate and directing enterprise IT across a seven-hospital academic health enterprise, Shafiq Rahman outlines a repeatable board-level cadence: establish your inventory, score risk and business value objectively, stop redundant spend, and sequence modernization around institutional priorities.',
    ],
    keyTakeaways: [
      'Never authorize multi-year AI or cloud vendor expansions without a documented risk owner and exit SLA.',
      'Pair rapid 30-day diagnostic clarity with milestone-based Fractional CIO execution where leadership gaps exist.',
    ],
  },
];

export const EXECUTIVE_FAQ = [
  {
    q: 'What types of organizations does Nexis AI serve?',
    a: 'Nexis AI serves community hospitals and regional health systems, state/county/municipal government agencies, and higher education & academic medical centers across the United States (with strong regional roots across Maryland, Washington DC, Pennsylvania, and Virginia).',
  },
  {
    q: 'How is Fractional CIO & Executive Advisory structured?',
    a: 'Nexis AI offers three transparent engagement tiers: Tier 1 Strategic Advisor (~10–15 hrs/mo), Tier 2 Fractional Executive CIO (1–2 days/week), and Tier 3 Interim Transformation Lead (dedicated mandate up to ~2.5 days/week for 3–9 month turnaround milestones). Scopes focus on measurable executive milestones rather than open-ended billing.',
  },
  {
    q: 'Do we need a full-time CIO before engaging the 30-Day AI Governance & Pilot Diagnostic?',
    a: 'No — that is the point. The $6,500 fixed-fee 30-Day Diagnostic is built specifically for 100–400 bed community hospitals operating with an interim CIO, IT director, or no full-time technology executive, giving the CEO and Board fast clarity on active AI pilots.',
  },
  {
    q: 'Do you implement modernization and manage ongoing IT operations after advisory assessments?',
    a: 'Advisory diagnostics (such as the 30-Day AI Diagnostic or Public Sector modernization roadmap) end cleanly with your executive briefing and actionable roadmap. Where organizations request ongoing execution, Nexis AI provides separately scoped Fractional CIO leadership, Managed Helpdesk (Tier 1–3), 24x7 SOC, Enterprise Infrastructure Services, and Managed AI Governance retainers delivered under Shafiq Rahman’s direction alongside vetted partners.',
  },
  {
    q: 'What is the late-delivery guarantee on the 30-Day AI Governance & Pilot Diagnostic?',
    a: 'On time, or the second half is waived. The findings briefing is delivered within 30 calendar days of kickoff. If it runs more than 5 business days past day 30 for reasons within Nexis AI’s control, the final 50% payment is waived — and the diagnostic is still delivered in full. Delays caused by interview scheduling or document access extend the window day for day.',
  },
  {
    q: 'Which EHR, cloud, cybersecurity, and enterprise platforms does Nexis AI support?',
    a: 'Supported platforms span Epic EHR, MEDITECH, ARIA Varian, RayStation, eClinicalWorks (ECW), Oracle Health, Microsoft Azure, AWS Cloud, Microsoft 365 & Intune, CrowdStrike, Microsoft Sentinel & Defender, Palo Alto Networks, Fortinet, Cisco & SD-WAN, Okta, Entra ID, ServiceNow, VMware, Workday, PeopleSoft, and Ellucian Banner.',
  },
  {
    q: 'Are your interactive scorecards and self-assessments official compliance certifications?',
    a: 'No. All online scorecards (Executive IT Maturity Assessment, Hospital AI Scope Estimator, Board Checklists, and Enterprise Modernization Readiness Assessment) provide preliminary self-assessment estimates only — not audited findings, legal advice, or formal third-party certifications. Nexis AI works to established frameworks including NIST AI RMF, NIST SP 800-53, and HIPAA.',
  },
];
